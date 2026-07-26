import { NextResponse } from "next/server";
import {
  checkRateLimit,
  getClientIdentifier,
  isHoneypotTripped,
  sendNotificationEmail,
  escapeHtml,
} from "@/lib/api-utils";

type NewsletterPayload = {
  email?: string;
  company_website?: string; // honeypot
};

function isValidEmail(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

/**
 * NOTE on scope: this sends a real notification email to the practice's
 * inbox for every signup, which is a genuine, working fix for the "no
 * backend" problem. It does not add the address to a mailing list —
 * that requires choosing and configuring a list provider (e.g. Resend's
 * own Audiences, Mailchimp, etc.), which is a product decision, not a
 * code gap. Wiring an actual list-provider call in here is a small,
 * clearly-scoped follow-up once that choice is made.
 */
export async function POST(request: Request) {
  let payload: NewsletterPayload;
  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  if (isHoneypotTripped(payload.company_website)) {
    return NextResponse.json({ ok: true });
  }

  const clientId = getClientIdentifier(request);
  const rateLimit = checkRateLimit(`newsletter:${clientId}`);
  if (!rateLimit.allowed) {
    return NextResponse.json(
      { error: "Too many requests. Please try again shortly." },
      { status: 429, headers: { "Retry-After": String(rateLimit.retryAfterSeconds ?? 60) } }
    );
  }

  const email = payload.email?.trim() ?? "";
  if (!email || !isValidEmail(email) || email.length > 320) {
    return NextResponse.json({ error: "Please enter a valid email address." }, { status: 400 });
  }

  const result = await sendNotificationEmail({
    subject: "New Newsletter Signup",
    html: `<p><strong>Email:</strong> ${escapeHtml(email)}</p>`,
  });

  if (!result.ok) {
    console.error("Newsletter email delivery failed:", result.error);
    return NextResponse.json(
      { error: "Something went wrong. Please try again shortly." },
      { status: 502 }
    );
  }

  return NextResponse.json({ ok: true });
}
