"use client";

import { useState, type FormEvent } from "react";
import { LoadingSpinner } from "@/components/ui/motion/LoadingSpinner";

/**
 * A simple, honest newsletter signup: captures an email, nothing more.
 * No fabricated subscriber counts or social proof — matches the same
 * transparency standard the rest of the site holds to.
 *
 * Now wired to the real /api/newsletter route (Resend) — this was
 * previously a UI-only no-op like LeadForm and ContactForm were before
 * their own fixes. Styled for use on a dark (violet) background only,
 * matching its current placements (Footer, and the Resources page's
 * dark CTA band) — not yet a light-background variant, since nothing
 * has needed one.
 */
export function NewsletterSignup() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError(null);
    const data = new FormData(event.currentTarget);
    const email = String(data.get("email") ?? "");
    if (!email.includes("@")) {
      setError("Enter a valid email address.");
      return;
    }

    setStatus("submitting");
    try {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          company_website: data.get("company_website"), // honeypot
        }),
      });
      const result = await response.json();

      if (!response.ok) {
        setStatus("error");
        setError(result.error ?? "Something went wrong. Please try again shortly.");
        return;
      }
      setStatus("success");
    } catch {
      setStatus("error");
      setError("Something went wrong. Please try again shortly.");
    }
  }

  if (status === "success") {
    return (
      <p className="text-sm text-teal-soft" role="status">
        You&apos;re on the list. We send a short note when there&apos;s something worth reading.
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-xs">
      <label htmlFor="newsletter-email" className="text-xs font-semibold uppercase tracking-wider text-teal-soft">
        Occasional Email Notes
      </label>

      {/* Honeypot — see LeadForm.tsx for the same pattern. */}
      <div aria-hidden="true" className="absolute left-[-9999px] h-0 w-0 overflow-hidden">
        <label htmlFor="newsletter-company_website">Leave this field empty</label>
        <input id="newsletter-company_website" name="company_website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="mt-3 flex gap-2">
        <input
          id="newsletter-email"
          name="email"
          type="email"
          required
          disabled={status === "submitting"}
          placeholder="you@practice.com"
          className="w-full rounded-md border border-white/20 bg-white/10 px-3 py-2 text-base text-white placeholder:text-white/40 focus:border-teal-soft focus:outline-none focus:ring-2 focus:ring-teal-soft/40 disabled:opacity-50"
        />
        <button
          type="submit"
          disabled={status === "submitting"}
          className="flex shrink-0 items-center gap-2 rounded-md bg-gold px-4 py-2 text-sm font-semibold text-ink transition-colors hover:bg-gold-hi disabled:opacity-60"
        >
          {status === "submitting" ? <LoadingSpinner size={14} label="Joining" /> : "Join"}
        </button>
      </div>
      {error && (
        <p className="mt-2 text-xs text-gold-hi" role="alert">
          {error}
        </p>
      )}
    </form>
  );
}
