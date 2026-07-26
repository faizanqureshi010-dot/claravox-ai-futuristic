import { NextResponse } from "next/server";
import {
  checkRateLimit,
  getClientIdentifier,
  isHoneypotTripped,
  sendNotificationEmail,
  escapeHtml,
} from "@/lib/api-utils";

type ContactPayload = {
  name?: string;
  email?: string;
  message?: string;
  company_website?: string; // honeypot
};

function isValidEmail(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export async function POST(request: Request) {
  let payload: ContactPayload;
  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  if (isHoneypotTripped(payload.company_website)) {
    return NextResponse.json({ ok: true });
  }

  const clientId = getClientIdentifier(request);
  const rateLimit = checkRateLimit(`contact:${clientId}`);
  if (!rateLimit.allowed) {
    return NextResponse.json(
      { error: "Too many requests. Please try again shortly." },
      { status: 429, headers: { "Retry-After": String(rateLimit.retryAfterSeconds ?? 60) } }
    );
  }

  const name = payload.name?.trim() ?? "";
  const email = payload.email?.trim() ?? "";
  const message = payload.message?.trim() ?? "";

  if (!name || name.length > 200) {
    return NextResponse.json({ error: "Please enter your name." }, { status: 400 });
  }
  if (!email || !isValidEmail(email) || email.length > 320) {
    return NextResponse.json({ error: "Please enter a valid email address." }, { status: 400 });
  }
  if (!message || message.length > 5000) {
    return NextResponse.json({ error: "Please enter a message (up to 5000 characters)." }, { status: 400 });
  }

  const html = `
    <h2>New Contact Message</h2>
    <p><strong>Name:</strong> ${escapeHtml(name)}</p>
    <p><strong>Email:</strong> ${escapeHtml(email)}</p>
    <p><strong>Message:</strong><br/>${escapeHtml(message).replace(/\n/g, "<br/>")}</p>
  `.trim();

  const result = await sendNotificationEmail({
    subject: `New Contact Message from ${name}`,
    html,
    replyTo: email,
  });

  if (!result.ok) {
    console.error("Contact email delivery failed:", result.error);
    return NextResponse.json(
      { error: "We couldn't send your message right now. Please email us directly instead." },
      { status: 502 }
    );
  }

  return NextResponse.json({ ok: true });
}
