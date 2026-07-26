import type { Metadata } from "next";
import Link from "next/link";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/Button";
import { Card } from "@/components/Card";
import { Section } from "@/components/Section";
import { JsonLd } from "@/components/JsonLd";
import { ContactForm } from "@/components/ContactForm";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { Reveal } from "@/components/ui/motion/Reveal";
import { OpsWhyClaravox } from "@/components/ops/OpsWhyClaravox";
import { OpsTrustBadges } from "@/components/ops/OpsTrustBadges";
import { breadcrumbSchema } from "@/lib/schema";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Contact Claravox Healthcare",
  description:
    "Reach Claravox Healthcare directly by phone, email, or message. We respond within one business day.",
  alternates: { canonical: "/contact" },
};

const breadcrumbItems = [
  { name: "Home", path: "/" },
  { name: "Contact", path: "/contact" },
];

export default function ContactPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema(breadcrumbItems)} />

      {/* 1. Hero */}
      <section className="relative overflow-hidden bg-ivory">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-24 -top-28 h-96 w-96 rounded-full bg-teal-deep/15 blur-3xl"
        />
        <div className="container-page relative py-16 lg:py-20">
          <Breadcrumb items={breadcrumbItems} />
          <div className="mt-6 max-w-2xl">
            <h1 className="font-display text-4xl font-semibold leading-tight text-violet sm:text-5xl">
              Talk to Us Directly
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-charcoal">
              If you are not ready for a free consultation yet, or you have a
              question that is easier to ask directly, reach out here — by
              phone, email, or the form.
            </p>
            <OpsTrustBadges />
          </div>
        </div>
      </section>

      {/* 2. Introduction */}
      <Section className="bg-white">
        <div className="max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-wider text-teal-text">Introduction</span>
          <h2 className="mt-2 font-display text-2xl font-semibold text-violet sm:text-3xl">
            You'll Reach a Real Person, Not a Queue
          </h2>
          <p className="mt-4 text-base leading-relaxed text-charcoal">
            Whether you're ready to talk pricing or just have a question
            before deciding anything, every message reaches someone who can
            actually answer it.
          </p>
        </div>
      </Section>

      {/* 3. Core Content */}
      <Section className="bg-ivory">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-start">
          <Reveal effect="slide-up">
            <Card className="max-w-xl">
              <span className="text-xs font-semibold uppercase tracking-wider text-teal-text">Reach Us Directly</span>
              <ul className="mt-5 space-y-5">
                <li>
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="flex items-center gap-3 text-lg font-medium text-ink hover:text-violet"
                  >
                    <Mail className="h-5 w-5 shrink-0 text-teal-deep" aria-hidden="true" />
                    {siteConfig.email}
                  </a>
                </li>
                <li>
                  <a
                    href={`tel:${siteConfig.phone}`}
                    className="flex items-center gap-3 text-lg font-medium text-ink hover:text-violet"
                  >
                    <Phone className="h-5 w-5 shrink-0 text-teal-deep" aria-hidden="true" />
                    {siteConfig.phoneDisplay}
                  </a>
                </li>
                <li className="flex items-start gap-3 text-lg font-medium text-ink">
                  <MapPin className="mt-1 h-5 w-5 shrink-0 text-teal-deep" aria-hidden="true" />
                  <span>
                    {siteConfig.address.streetAddress}
                    <br />
                    {siteConfig.address.addressLocality}, {siteConfig.address.addressRegion}{" "}
                    {siteConfig.address.postalCode}
                  </span>
                </li>
                <li className="flex items-center gap-3 text-sm text-charcoal">
                  <Clock className="h-4 w-4 shrink-0 text-teal-deep" aria-hidden="true" />
                  We respond within one business day.
                </li>
              </ul>

              <Link
                href="/get-your-free-audit"
                className="mt-8 inline-block text-sm font-semibold text-teal-text underline underline-offset-4 hover:text-violet"
              >
                Or book your free consultation instead
              </Link>
            </Card>
          </Reveal>

          <Reveal effect="slide-up" delay={120}>
            <ContactForm />
          </Reveal>
        </div>
      </Section>

      {/* 5. Why Claravox */}
      <Section className="bg-white">
        <div className="max-w-2xl">
          <h2 className="font-display text-3xl font-semibold text-violet sm:text-4xl">Why Claravox</h2>
        </div>
        <OpsWhyClaravox />
      </Section>

      {/* 6. Trust & Security */}
      <Section className="bg-ivory">
        <div className="max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-wider text-teal-text">
            Trust & Security
          </span>
          <h2 className="mt-2 font-display text-3xl font-semibold text-violet sm:text-4xl">
            Compliance Questions Welcome
          </h2>
          <p className="mt-4 text-base leading-relaxed text-charcoal">
            A signed Business Associate Agreement is in place before any
            data access begins on every engagement.{" "}
            <Link
              href="/compliance-and-security"
              className="font-semibold text-teal-text underline underline-offset-4 hover:text-violet"
            >
              See the full picture on Compliance &amp; Security.
            </Link>
          </p>
        </div>
      </Section>

      {/* 8. Enterprise CTA */}
      <section className="bg-violet">
        <div className="container-page flex flex-col items-center gap-6 py-16 text-center md:py-20">
          <h2 className="font-display text-3xl font-semibold text-white sm:text-4xl">
            Ready for a More Direct Conversation?
          </h2>
          <p className="max-w-xl text-base text-white/80">
            A free consultation shows your actual numbers, no commitment
            required.
          </p>
          <Button href="/get-your-free-audit" variant="gold">
            Schedule a Strategy Call
          </Button>
        </div>
      </section>
    </>
  );
}
