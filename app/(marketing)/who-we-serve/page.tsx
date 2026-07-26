import type { Metadata } from "next";
import Link from "next/link";
import { Check, Minus, Building2 } from "lucide-react";
import { Button } from "@/components/Button";
import { Section } from "@/components/Section";
import { JsonLd } from "@/components/JsonLd";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { Reveal } from "@/components/ui/motion/Reveal";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Who We Serve, Independent Physician Practices, Claravox Healthcare",
  description:
    "Claravox Healthcare works with independent US physician and specialty practices, one to five providers, currently billing in house or through a small local biller.",
  alternates: { canonical: "/who-we-serve" },
};

const breadcrumbItems = [
  { name: "Home", path: "/" },
  { name: "Who We Serve", path: "/who-we-serve" },
];

const fitFor = [
  "Your practice has one to five providers.",
  "You are currently billing in house or through a small local biller.",
  "You can feel that your denial rate or AR aging is a problem, even if you cannot fully see why.",
  "You want to be able to call someone and get an answer, not a ticket number.",
];

const notFitFor = [
  "You are part of a large multi location health system with an existing RCM department.",
  "You need a billing partner that operates outside the United States market.",
  "You are looking for the lowest possible price rather than a partner who answers the phone.",
];

const specialties = [
  "Family Medicine", "Internal Medicine", "Pediatrics", "Dermatology", "Cardiology",
  "Orthopedics", "OB/GYN", "Psychiatry & Behavioral Health", "Physical Therapy",
  "Chiropractic", "Podiatry", "Gastroenterology", "ENT", "Urology", "Ophthalmology",
  "Neurology", "Pain Management", "Urgent Care", "Optometry",
];

export default function WhoWeServePage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema(breadcrumbItems)} />

      {/* Hero */}
      <section className="relative overflow-hidden bg-ivory">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-24 -top-28 h-96 w-96 rounded-full bg-royal/15 blur-3xl"
        />
        <div className="container-page relative py-16 lg:py-20">
          <Breadcrumb items={breadcrumbItems} />
          <div className="mt-6 max-w-2xl">
            <h1 className="font-display text-4xl font-semibold leading-tight text-violet sm:text-5xl">
              Built For Independent Practices, Not Hospital Systems
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-charcoal">
              Claravox works with independent physician and specialty
              practices across the United States. We are not built around
              one type of medicine, we are built around one type of
              practice — the kind that is too small to justify its own
              revenue cycle department and too easily deprioritized by
              billing vendors that only pay attention to their largest
              accounts.{" "}
              <Link
                href="/why-claravox"
                className="font-semibold text-teal-text underline underline-offset-4 hover:text-violet"
              >
                See why practices trust us with this.
              </Link>
            </p>
          </div>
        </div>
      </section>

      {/* Every Specialty, Every Practice */}
      <Section className="bg-white">
        <div className="max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-wider text-teal-text">
            Specialty-Agnostic by Design
          </span>
          <h2 className="mt-2 font-display text-3xl font-semibold text-violet sm:text-4xl">
            Every Specialty. Every Practice.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-charcoal">
            Fit is about your practice's size and situation, not which
            specialty you practice. Here's a sample of the specialties we
            already work with.
          </p>
        </div>
        <Reveal effect="fade">
          <ul className="mt-8 flex flex-wrap gap-2">
            {specialties.map((specialty) => (
              <li
                key={specialty}
                className="rounded-full border border-mist bg-cloud px-3.5 py-1.5 text-xs font-medium text-ink"
              >
                {specialty}
              </li>
            ))}
            <li className="rounded-full border border-gold/50 bg-gold/10 px-3.5 py-1.5 text-xs font-semibold text-violet">
              + Every Other Specialty
            </li>
          </ul>
        </Reveal>
      </Section>

      {/* Fit / Not-Fit */}
      <Section className="bg-ivory">
        <div className="grid grid-cols-1 items-start gap-6 lg:grid-cols-[auto_1fr]">
          <div className="hidden items-end gap-3 lg:flex" aria-hidden="true">
            <Building2 className="h-10 w-10 text-teal-deep" strokeWidth={1.5} />
            <Building2 className="h-20 w-20 text-mist" strokeWidth={1.25} />
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <Reveal effect="slide-up" delay={0}>
              <div className="h-full rounded-lg border border-mist bg-white p-8 shadow-resting">
                <h2 className="font-display text-xl font-semibold text-violet">
                  This Is Likely a Fit If
                </h2>
                <ul className="mt-5 space-y-4">
                  {fitFor.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <Check className="mt-0.5 h-5 w-5 shrink-0 text-teal-deep" aria-hidden="true" />
                      <span className="text-sm leading-relaxed text-ink">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            <Reveal effect="slide-up" delay={100}>
              <div className="h-full rounded-lg border border-mist bg-white p-8 shadow-resting">
                <h2 className="font-display text-xl font-semibold text-charcoal">
                  This Is Probably Not a Fit If
                </h2>
                <ul className="mt-5 space-y-4">
                  {notFitFor.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <Minus className="mt-0.5 h-5 w-5 shrink-0 text-charcoal" aria-hidden="true" />
                      <span className="text-sm leading-relaxed text-ink">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
        <div className="mt-8">
          <Link
            href="/medical-billing"
            className="text-sm font-semibold text-teal-text underline underline-offset-4 hover:text-violet"
          >
            See what we actually do, starting with medical billing
          </Link>
        </div>
      </Section>

      {/* CTA */}
      <section className="bg-violet">
        <div className="container-page flex flex-col items-center gap-6 py-16 text-center md:py-20">
          <h2 className="font-display text-3xl font-semibold text-white sm:text-4xl">
            See If Your Numbers Confirm the Fit
          </h2>
          <p className="max-w-xl text-base text-white/80">
            A free consultation is the fastest way to find out, using your
            actual claims data instead of a guess.
          </p>
          <Button href="/get-your-free-audit" variant="gold">
            Book a Consultation
          </Button>
        </div>
      </section>
    </>
  );
}
