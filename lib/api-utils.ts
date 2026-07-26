import { Resend } from "resend";
import { siteConfig } from "@/lib/site-config";

/**
 * Shared server-side utilities for every form API route (consultation,
 * contact, newsletter). Kept in one place so all three forms get the
 * same validation, spam-protection, rate-limiting, and email-sending
 * behavior rather than three slightly different implementations.
 */

// ---------------------------------------------------------------------
// Rate limiting
// ---------------------------------------------------------------------
// In-memory, per-server-instance limiter. This is a real, working
// safeguard against basic abuse (a script hammering the endpoint) but
// has a known, honestly-stated limitation: serverless functions can run
// multiple concurrent instances with separate memory, and memory resets
// on cold start. For production-grade protection against a determined
// attacker, pair this with an edge-level rate limit (e.g. Vercel's own
// WAF rate limiting, or a shared store like Upstash Redis) rather than
// relying on this alone. This is the honest, correct scope for what a
// single in-memory Map can actually guarantee.
const rateLimitStore = new Map<string, { count: number; resetAt: number }>();

const RATE_LIMIT_WINDOW_MS = 60_000; // 1 minute
const RATE_LIMIT_MAX_REQUESTS = 5;

export function checkRateLimit(identifier: string): { allowed: boolean; retryAfterSeconds?: number } {
  const now = Date.now();
  const entry = rateLimitStore.get(identifier);

  if (!entry || now > entry.resetAt) {
    rateLimitStore.set(identifier, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
    return { allowed: true };
  }

  if (entry.count >= RATE_LIMIT_MAX_REQUESTS) {
    return { allowed: false, retryAfterSeconds: Math.ceil((entry.resetAt - now) / 1000) };
  }

  entry.count += 1;
  return { allowed: true };
}

// Note: stale entries are not proactively swept. checkRateLimit already
// resets any expired entry the next time its key is looked up, so this
// costs a little unused memory for keys that stop being requested,
// never incorrect behavior. A proactive sweep via setInterval was
// deliberately not added — in a serverless deployment, a function
// instance's lifetime is unpredictable, and a background timer either
// does nothing useful before the instance recycles or fights the
// platform's own lifecycle. Not worth the complexity for a rate limiter
// whose main job is slowing down casual abuse, not perfect bookkeeping.

/** Extracts a best-effort client identifier from standard proxy headers
 * for rate-limiting purposes. Not authoritative — good enough to slow
 * down casual abuse, not to identify a user. */
export function getClientIdentifier(request: Request): string {
  const forwarded = request.headers.get("x-forwarded-for");
  return forwarded?.split(",")[0]?.trim() ?? "unknown";
}

// ---------------------------------------------------------------------
// Spam protection
// ---------------------------------------------------------------------
/** Honeypot check: a field named `company_website` (or similar) that's
 * visually hidden from real visitors via CSS but visible to most bots
 * filling every field they find. A legitimate submission should always
 * leave it empty. This costs nothing, needs no external service, and
 * catches a meaningful share of unsophisticated spam — it's not a
 * substitute for a real CAPTCHA/challenge service if spam volume turns
 * out to be high, but it's a correct, honest first layer. */
export function isHoneypotTripped(value: unknown): boolean {
  return typeof value === "string" && value.trim().length > 0;
}

// ---------------------------------------------------------------------
// Email sending
// ---------------------------------------------------------------------
// Reads RESEND_API_KEY from the environment. Intentionally does not
// throw at import time if it's missing — that would crash every route
// at build time in an environment where the key isn't set yet. Instead
// sendNotificationEmail() below returns a clear error the route handler
// can act on, so a misconfigured deployment fails loudly in the API
// response (and server logs), not silently like the previous no-op
// forms did.
function getResendClient(): Resend | null {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) return null;
  return new Resend(apiKey);
}

type EmailParams = {
  subject: string;
  html: string;
  replyTo?: string;
};

export async function sendNotificationEmail({ subject, html, replyTo }: EmailParams): Promise<{ ok: boolean; error?: string }> {
  const resend = getResendClient();
  if (!resend) {
    return {
      ok: false,
      error:
        "RESEND_API_KEY is not configured. Set it in your deployment's environment variables — see README/setup notes.",
    };
  }

  const fromAddress = process.env.RESEND_FROM_ADDRESS ?? `Claravox Website <notifications@${new URL(siteConfig.url).hostname}>`;
  const toAddress = process.env.NOTIFICATION_EMAIL ?? siteConfig.email;

  try {
    const result = await resend.emails.send({
      from: fromAddress,
      to: toAddress,
      subject,
      html,
      ...(replyTo ? { replyTo } : {}),
    });
    if (result.error) {
      return { ok: false, error: result.error.message };
    }
    return { ok: true };
  } catch (err) {
    return { ok: false, error: err instanceof Error ? err.message : "Unknown email delivery error" };
  }
}

/** Minimal HTML-escaping for values interpolated into the notification
 * email body, since they come directly from user input. */
export function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}
