"use client";

import { useState, type FormEvent } from "react";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/Button";
import { LoadingSpinner } from "@/components/ui/motion/LoadingSpinner";

const inputClasses =
  "w-full rounded-md border border-mist bg-white px-4 py-3 text-base text-ink placeholder:text-charcoal/40 focus:border-teal-deep focus:outline-none focus:ring-3 focus:ring-teal-deep/25 disabled:opacity-40 disabled:cursor-not-allowed";

const labelClasses = "mb-1.5 block text-sm font-medium text-ink";

type Status = "idle" | "submitting" | "success" | "error";

export function LeadForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError(null);

    const form = event.currentTarget;
    const data = new FormData(form);
    const email = String(data.get("email") ?? "");

    if (!email.includes("@")) {
      setError("Enter a valid email address so we can reach you.");
      return;
    }

    setStatus("submitting");

    try {
      const response = await fetch("/api/consultation", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          practiceName: data.get("practice"),
          email,
          phone: data.get("phone"),
          monthlyCollections: data.get("scale"),
          message: data.get("message"),
          company_website: data.get("company_website"), // honeypot
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        setStatus("error");
        setError(result.error ?? "Something went wrong. Please email us directly instead.");
        return;
      }

      setStatus("success");
    } catch {
      setStatus("error");
      setError("Something went wrong. Please email us directly instead.");
    }
  }

  if (status === "success") {
    return (
      <div
        role="status"
        className="rounded-lg border border-mist bg-white p-8 text-center shadow-resting"
      >
        <p className="font-display text-xl font-semibold text-violet">
          Request received.
        </p>
        <p className="mt-2 text-sm text-charcoal">
          We will reach out within one business day. Your information is
          never shared.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="rounded-lg border border-mist bg-white p-6 shadow-resting sm:p-8"
    >
      {error && (
        <p role="alert" className="mb-4 rounded-md bg-error/10 px-4 py-3 text-sm text-error">
          {error}
        </p>
      )}

      {/* Honeypot — visually hidden from real visitors, left empty by
         them, but visible to most bots that fill every field they find.
         aria-hidden and tabIndex=-1 keep it out of the way for
         keyboard/screen-reader users too. */}
      <div aria-hidden="true" className="absolute left-[-9999px] h-0 w-0 overflow-hidden">
        <label htmlFor="company_website">Leave this field empty</label>
        <input
          id="company_website"
          name="company_website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className={labelClasses}>
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            required
            disabled={status === "submitting"}
            className={inputClasses}
          />
        </div>

        <div>
          <label htmlFor="practice" className={labelClasses}>
            Practice Name
          </label>
          <input
            id="practice"
            name="practice"
            type="text"
            autoComplete="organization"
            required
            disabled={status === "submitting"}
            className={inputClasses}
          />
        </div>

        <div>
          <label htmlFor="email" className={labelClasses}>
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            disabled={status === "submitting"}
            className={inputClasses}
          />
        </div>

        <div>
          <label htmlFor="phone" className={labelClasses}>
            Phone
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            required
            disabled={status === "submitting"}
            className={inputClasses}
          />
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="scale" className={labelClasses}>
            Monthly Collections
          </label>
          <div className="relative">
            <select
              id="scale"
              name="scale"
              required
              defaultValue=""
              disabled={status === "submitting"}
              className={`${inputClasses} appearance-none pr-10`}
            >
              <option value="" disabled>
                Select the closest range
              </option>
              <option value="under-40k">Under $40,000</option>
              <option value="40k-80k">$40,000 to $80,000</option>
              <option value="80k-150k">$80,000 to $150,000</option>
              <option value="150k-plus">More than $150,000</option>
              <option value="not-sure">Not sure yet</option>
            </select>
            <ChevronDown
              className="pointer-events-none absolute right-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-charcoal/60"
              aria-hidden="true"
            />
          </div>
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="message" className={labelClasses}>
            Message <span className="font-normal text-charcoal/60">(optional)</span>
          </label>
          <textarea
            id="message"
            name="message"
            rows={3}
            placeholder="Anything about your current billing setup that would help us prepare."
            disabled={status === "submitting"}
            className={`${inputClasses} resize-none`}
          />
        </div>
      </div>

      <Button type="submit" variant="primary" className="mt-6 w-full sm:w-auto" disabled={status === "submitting"}>
        {status === "submitting" ? (
          <>
            <LoadingSpinner size={16} label="Submitting" /> Submitting
          </>
        ) : (
          "Book My Consultation"
        )}
      </Button>

      <p className="mt-4 text-xs text-charcoal">
        We will reach out within one business day. Your information is never
        shared.
      </p>
    </form>
  );
}
