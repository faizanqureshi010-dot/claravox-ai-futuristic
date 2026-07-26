import { NextResponse } from "next/server";
import {
  checkRateLimit,
  getClientIdentifier,
  isHoneypotTripped,
  sendNotificationEmail,
  escapeHtml,
} from "@/lib/api-utils";

/**
 * Handles LeadForm submissions (Home and Get Your Free Consultation).
 * This is the single most important endpoint on the site — every prior
 * audit in this project flagged that no lead capture surface had a real
 * backend. This route is that fix: it validates server-side (never
 * trusting client-only validation), checks the honeypot field, rate
 * limits by IP, and sends a real notification email via Resend.
 */

type ConsultationPayload = {
  name?: string;
  practiceName?: string;
  email?: string;
  phone?: string;
  monthlyCollections?: string;
  message?: string;
  company_website?: string; // honeypot — must stay empty
};

function isValidEmail(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export async function POST(request: Request) {
  let payload: ConsultationPayload;
  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  if (isHoneypotTripped(payload.company_website)) {
    // Return a generic success response to a bot rather than revealing
    // that a honeypot exists — but never actually send the email.
    return NextResponse.json({ ok: true });
  }

  const clientId = getClientIdentifier(request);
  const rateLimit = checkRateLimit(`consultation:${clientId}`);
  if (!rateLimit.allowed) {
    return NextResponse.json(
      { error: "Too many requests. Please try again shortly." },
      { status: 429, headers: { "Retry-After": String(rateLimit.retryAfterSeconds ?? 60) } }
    );
  }

  const name = payload.name?.trim() ?? "";
  const email = payload.email?.trim() ?? "";
  const practiceName = payload.practiceName?.trim() ?? "";

  if (!name || name.length > 200) {
    return NextResponse.json({ error: "Please enter your name." }, { status: 400 });
  }
  if (!email || !isValidEmail(email) || email.length > 320) {
    return NextResponse.json({ error: "Please enter a valid email address." }, { status: 400 });
  }
  if (!practiceName || practiceName.length > 200) {
    return NextResponse.json({ error: "Please enter your practice name." }, { status: 400 });
  }

  const html = `
    <h2>New Consultation Request</h2>
    <p><strong>Name:</strong> ${escapeHtml(name)}</p>
    <p><strong>Practice:</strong> ${escapeHtml(practiceName)}</p>
    <p><strong>Email:</strong> ${escapeHtml(email)}</p>
    ${payload.phone ? `<p><strong>Phone:</strong> ${escapeHtml(payload.phone)}</p>` : ""}
    ${payload.monthlyCollections ? `<p><strong>Monthly Collections:</strong> ${escapeHtml(payload.monthlyCollections)}</p>` : ""}
    ${payload.message ? `<p><strong>Message:</strong><br/>${escapeHtml(payload.message).replace(/\n/g, "<br/>")}</p>` : ""}
  `.trim();

  const result = await sendNotificationEmail({
    subject: `New Consultation Request — ${practiceName}`,
    html,
    replyTo: email,
  });

  if (!result.ok) {
    console.error("Consultation email delivery failed:", result.error);
    return NextResponse.json(
      { error: "We couldn't submit your request right now. Please email us directly instead." },
      { status: 502 }
    );
  }

  return NextResponse.json({ ok: true });
}
