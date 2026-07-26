"use client";

import { useState, type FormEvent } from "react";
import { Button } from "@/components/Button";
import { TextField, TextareaField } from "@/components/ui/form/Field";
import { LoadingSpinner } from "@/components/ui/motion/LoadingSpinner";

type Status = "idle" | "submitting" | "success" | "error";

/**
 * Now wired to a real backend (app/api/contact/route.ts) via Resend —
 * this was previously a UI-only no-op, per the Website Audit's Critical
 * Finding #1 and the CRO Audit's finding that this component wasn't even
 * deployed to the live Contact page yet. Both are fixed as of this pass.
 */
export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError(null);

    const form = event.currentTarget;
    const data = new FormData(form);
    const email = String(data.get("email") ?? "");
    if (!email.includes("@")) {
      setError("Enter a valid email address so we can reply.");
      return;
    }

    setStatus("submitting");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          email,
          message: data.get("message"),
          company_website: data.get("company_website"), // honeypot
        }),
      });
      const result = await response.json();

      if (!response.ok) {
        setStatus("error");
        setError(result.error ?? "Something went wrong sending your message. Please email us directly instead.");
        return;
      }

      setStatus("success");
    } catch {
      setStatus("error");
      setError("Something went wrong sending your message. Please email us directly instead.");
    }
  }

  if (status === "success") {
    return (
      <div role="status" className="rounded-lg border border-mist bg-white p-8 text-center shadow-resting">
        <p className="font-display text-xl font-semibold text-violet">Message sent.</p>
        <p className="mt-2 text-sm text-charcoal">We will reach out within one business day.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="rounded-lg border border-mist bg-white p-6 shadow-resting sm:p-8">
      {error && (
        <p role="alert" className="mb-4 rounded-md bg-error/10 px-4 py-3 text-sm text-error">
          {error}
        </p>
      )}

      {/* Honeypot — see LeadForm.tsx for the same pattern. */}
      <div aria-hidden="true" className="absolute left-[-9999px] h-0 w-0 overflow-hidden">
        <label htmlFor="contact-company_website">Leave this field empty</label>
        <input id="contact-company_website" name="company_website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <TextField id="contact-name" name="name" label="Name" autoComplete="name" required disabled={status === "submitting"} />
        <TextField id="contact-email" name="email" type="email" label="Email" autoComplete="email" required disabled={status === "submitting"} />
        <div className="sm:col-span-2">
          <TextareaField id="contact-message" name="message" label="Message" rows={4} required disabled={status === "submitting"} />
        </div>
      </div>
      <Button type="submit" variant="primary" className="mt-6 w-full sm:w-auto" disabled={status === "submitting"}>
        {status === "submitting" ? (
          <>
            <LoadingSpinner size={16} label="Sending" /> Sending
          </>
        ) : (
          "Send Message"
        )}
      </Button>
    </form>
  );
}
