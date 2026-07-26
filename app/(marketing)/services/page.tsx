import type { Metadata } from "next";
import Link from "next/link";
import {
  ShieldCheck,
  CalendarCheck,
  FileWarning,
  FileCheck2,
  Tag,
  Banknote,
  AlertTriangle,
  RefreshCcw,
  Compass,
  Users,
  Cpu,
  Building2,
  Mail,
} from "lucide-react";
import { Button } from "@/components/Button";
import { Card } from "@/components/Card";
import { Section } from "@/components/Section";
import { JsonLd } from "@/components/JsonLd";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { Reveal } from "@/components/ui/motion/Reveal";
import { breadcrumbSchema, serviceSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Medical Billing and RCM Services, Claravox Healthcare",
  description:
    "Every Claravox service organized by where it sits in the revenue cycle — front-end administration, core billing and coding, and back-end recovery — for independent US physician practices.",
  alternates: { canonical: "/services" },
};

const breadcrumbItems = [
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
];

/**
 * Services organized by where they actually sit in the revenue cycle,
 * not the four legacy categories this page used before seven dedicated
 * pages existed underneath it. Each category is a plain array — adding
 * an eighth service later, or a new category entirely, means adding one
 * entry here, not redesigning this page's structure.
 */
type ServiceEntry = {
  icon: typeof ShieldCheck;
  title: string;
  body: string;
  href: string;
  tierNote?: string;
};

const frontEndServices: ServiceEntry[] = [
  {
    icon: ShieldCheck,
    title: "Credentialing & Enrollment",
    body: "Payer enrollment and ongoing revalidation, handled end to end.",
    href: "/credentialing",
  },
  {
    icon: CalendarCheck,
    title: "Eligibility Verification",
    body: "Coverage confirmed before the appointment, not after a denial.",
    href: "/eligibility-verification",
    tierNote: "Automation in active development",
  },
  {
    icon: FileWarning,
    title: "Prior Authorization",
    body: "Requests submitted with clinical support and tracked to approval.",
    href: "/prior-authorization",
    tierNote: "Automation in active development",
  },
];

const coreServices: ServiceEntry[] = [
  {
    icon: FileCheck2,
    title: "Medical Billing",
    body: "Charge entry and claim submission, owned end to end by one team.",
    href: "/medical-billing",
  },
  {
    icon: Tag,
    title: "Medical Coding",
    body: "ICD-10, CPT, and HCPCS coding, checked before it ever reaches billing.",
    href: "/medical-coding",
    tierNote: "Automation in active development",
  },
];

const backEndServices: ServiceEntry[] = [
  {
    icon: Banknote,
    title: "Payment Posting",
    body: "Every payment matched to the right claim and verified against contract.",
    href: "/payment-posting",
    tierNote: "Automation in active development",
  },
  {
    icon: AlertTriangle,
    title: "Denial Management",
    body: "Root-cause analysis and appeals — feeding insight back upstream.",
    href: "/denial-management",
    tierNote: "Automation in active development",
  },
  {
    icon: RefreshCcw,
    title: "Accounts Receivable Follow-Up",
    body: "Every open balance worked by age, escalated when it stalls.",
    href: "/accounts-receivable",
    tierNote: "Automation in active development",
  },
];

const nextSteps = [
  { icon: Users, title: "Who We Serve", body: "Confirm your practice is a fit.", href: "/who-we-serve" },
  { icon: Building2, title: "About", body: "Who we are and what we believe.", href: "/about" },
  { icon: Building2, title: "Why Claravox", body: "The philosophy behind the work.", href: "/why-claravox" },
  { icon: Cpu, title: "Technology", body: "What's live, what's in progress.", href: "/technology" },
  { icon: Compass, title: "Compliance & Security", body: "What we can confirm directly.", href: "/compliance-and-security" },
  { icon: Mail, title: "Contact", body: "Reach us directly, no form required.", href: "/contact" },
];

function ServiceGroup({ items }: { items: ServiceEntry[] }) {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {items.map(({ icon: Icon, title, body, href, tierNote }, index) => (
        <Reveal key={title} effect="slide-up" delay={index * 80}>
          <Card className="h-full">
            <Icon className="h-7 w-7 text-teal-deep" aria-hidden="true" />
            <h3 className="mt-4 font-display text-lg font-semibold text-violet">{title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-charcoal">{body}</p>
            {tierNote && (
              <p className="mt-3 text-[11px] font-semibold uppercase tracking-wide text-charcoal/50">
                {tierNote}
              </p>
            )}
            <Link
              href={href}
              className="mt-4 inline-block text-sm font-semibold text-teal-text underline underline-offset-4 hover:text-violet"
            >
              Read the full breakdown
            </Link>
          </Card>
        </Reveal>
      ))}
    </div>
  );
}

export default function ServicesPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema(breadcrumbItems)} />
      {[...frontEndServices, ...coreServices, ...backEndServices].map((s) => (
        <JsonLd key={s.href} data={serviceSchema(s.title, s.body, s.href.replace("/", ""), s.href)} />
      ))}

      {/* Hero */}
      <section className="relative overflow-hidden bg-ivory">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-24 -top-28 h-96 w-96 rounded-full bg-teal-deep/15 blur-3xl"
        />
        <div className="container-page relative py-16 lg:py-20">
          <Breadcrumb items={breadcrumbItems} />
          <div className="mt-6 max-w-2xl">
            <h1 className="font-display text-4xl font-semibold leading-tight text-violet sm:text-5xl">
              Every Service, Organized by Where It Sits in the Cycle
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-charcoal">
              Most practices are not missing one piece of their billing
              process — they are missing a team that owns all of it. This
              page is a map, not a full explanation: each card links to
              the real, detailed breakdown of that service.{" "}
              <Link
                href="/revenue-cycle-management"
                className="font-semibold text-teal-text underline underline-offset-4 hover:text-violet"
              >
                See how it all connects as one cycle.
              </Link>
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button href="/get-your-free-audit" variant="gold">
                Book a Consultation
              </Button>
              <Button href="/who-we-serve" variant="ghost">
                See who this is built for
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Front-end */}
      <Section className="bg-white">
        <div className="max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-wider text-teal-text">
            Front-End Revenue Cycle
          </span>
          <h2 className="mt-2 font-display text-3xl font-semibold text-violet sm:text-4xl">
            Getting the Claim Right, Before It's Ever Filed
          </h2>
        </div>
        <div className="mt-10">
          <ServiceGroup items={frontEndServices} />
        </div>
      </Section>

      {/* Core billing & coding */}
      <Section className="bg-ivory">
        <div className="max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-wider text-teal-text">
            Core Billing & Coding
          </span>
          <h2 className="mt-2 font-display text-3xl font-semibold text-violet sm:text-4xl">
            Turning the Encounter Into an Accurate Claim
          </h2>
        </div>
        <div className="mt-10">
          <ServiceGroup items={coreServices} />
        </div>
      </Section>

      {/* Back-end / recovery */}
      <Section className="bg-white">
        <div className="max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-wider text-teal-text">
            Back-End Revenue Cycle
          </span>
          <h2 className="mt-2 font-display text-3xl font-semibold text-violet sm:text-4xl">
            After the Claim Is Filed
          </h2>
        </div>
        <div className="mt-10">
          <ServiceGroup items={backEndServices} />
        </div>
      </Section>

      {/* Reporting — no dedicated page yet, kept honest rather than linked */}
      <Section className="bg-ivory" id="reporting-and-analytics">
        <div className="max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-wider text-teal-text">
            Visibility
          </span>
          <h2 className="mt-2 font-display text-3xl font-semibold text-violet sm:text-4xl">
            Reporting & Analytics
          </h2>
          <p className="mt-4 text-base leading-relaxed text-charcoal">
            Clear reporting on denial rate, AR aging, and collections
            delivered monthly, not buried in a portal you have to log
            into and interpret yourself. This replaces billing that
            happens as a black box you only notice when something goes
            wrong.
          </p>
        </div>
      </Section>

      {/* Where to go next — the navigation-hub function this page now serves */}
      <Section className="bg-white">
        <div className="max-w-2xl">
          <h2 className="font-display text-3xl font-semibold text-violet sm:text-4xl">
            Where to Go Next
          </h2>
        </div>
        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {nextSteps.map(({ icon: Icon, title, body, href }) => (
            <Link
              key={href}
              href={href}
              className="group flex flex-col items-start gap-2 rounded-lg border border-mist bg-white p-5 shadow-resting transition-all duration-200 ease-[var(--ease-out-premium)] hover:-translate-y-1 hover:border-teal-deep/40 hover:shadow-low"
            >
              <Icon className="h-6 w-6 text-teal-deep" aria-hidden="true" />
              <span className="font-display text-base font-semibold text-violet group-hover:underline">
                {title}
              </span>
              <span className="text-xs leading-relaxed text-charcoal">{body}</span>
            </Link>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <section className="bg-violet">
        <div className="container-page flex flex-col items-center gap-6 py-16 text-center md:py-20">
          <h2 className="font-display text-3xl font-semibold text-white sm:text-4xl">
            See These Applied to Your Own Claims
          </h2>
          <p className="max-w-xl text-base text-white/80">
            The fastest way to know what this looks like for your practice
            is the free consultation, not a longer description of the service.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button href="/get-your-free-audit" variant="gold">
              Book a Consultation
            </Button>
            <Button href="/who-we-serve" variant="secondary" className="!border-white !text-white hover:!bg-white/10">
              See Who We Serve
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
