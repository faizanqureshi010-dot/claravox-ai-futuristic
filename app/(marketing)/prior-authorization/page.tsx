import type { Metadata } from "next";
import Link from "next/link";
import {
  AlertTriangle,
  FileWarning,
  Clock,
  FileCheck2,
  MessageSquareWarning,
  Gauge,
  TrendingUp,
  Eye as EyeIcon,
} from "lucide-react";
import { Button } from "@/components/Button";
import { Section } from "@/components/Section";
import { Card } from "@/components/Card";
import { JsonLd } from "@/components/JsonLd";
import { FAQAccordion } from "@/components/FAQAccordion";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { Timeline } from "@/components/ui/Timeline";
import { Reveal } from "@/components/ui/motion/Reveal";
import { TierCard, TierLadder } from "@/components/ui/TierBadge";
import { SecurityBlock, ComplianceBlock } from "@/components/ui/trust/TrustBlocks";
import { RevenueCycleJourney } from "@/components/ui/RevenueCycleJourney";
import { OpsWhyClaravox } from "@/components/ops/OpsWhyClaravox";
import { OpsTrustBadges } from "@/components/ops/OpsTrustBadges";
import { breadcrumbSchema, faqSchema, serviceSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Prior Authorization Services, Claravox Healthcare",
  description:
    "Prior authorization handled without the hold time — for independent US physician practices, tracked from request to approval before the service is delivered.",
  alternates: { canonical: "/prior-authorization" },
};

const breadcrumbItems = [
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
  { name: "Prior Authorization", path: "/prior-authorization" },
];

const failures = [
  { title: "Submitted Without Clinical Backup", body: "A request goes in without the documentation a payer actually needs to approve it, guaranteeing a delay or denial." },
  { title: "No One Following Up", body: "The request sits in a payer's queue with no one checking on it, until the appointment date arrives with no answer." },
  { title: "The Service Happens Anyway", body: "Care is delivered before authorization clears, leaving the practice exposed to a denial with no recourse." },
];

const workflow = [
  { title: "Confirm It's Needed", description: "Building on eligibility verification, we confirm whether the specific service actually requires prior authorization for this payer and plan." },
  { title: "Submit With Clinical Support", description: "The request goes in with the clinical documentation a payer needs to approve it the first time, not a bare request." },
  { title: "Track and Follow Up", description: "We follow up with the payer while the request is pending, rather than waiting to be told it's stuck." },
  { title: "Confirm Before Service", description: "The visit or procedure is scheduled once authorization is actually confirmed — not before." },
];

const benefits = [
  { icon: TrendingUp, title: "Revenue Optimisation", body: "Care scheduled only once authorization is actually confirmed — not exposed to a denial with no recourse." },
  { icon: EyeIcon, title: "Improved Operational Visibility", body: "Every request and its status is tracked, so nothing is discovered missing on the day of the visit." },
  { icon: Gauge, title: "Reduced Administrative Burden", body: "Requests followed up on proactively, not left to sit until someone asks." },
  { icon: FileCheck2, title: "Consistent Billing Quality", body: "Requests go in with the clinical documentation a payer actually needs, not a bare form." },
];

const faqItems = [
  {
    question: "How is this different from eligibility verification?",
    answer:
      "Eligibility confirms coverage exists. Prior authorization is a separate, payer-specific approval some services require before they'll be covered at all — even for a patient with active, verified coverage.",
  },
  {
    question: "How long does prior authorization typically take?",
    answer:
      "It varies widely by payer and service, from a few days to several weeks. Most of the avoidable delay comes from an incomplete initial submission, not the payer's own timeline.",
  },
  {
    question: "What happens if a request is denied?",
    answer:
      "We handle the appeal directly, with the clinical documentation needed to support it, rather than leaving the practice to start over with the payer alone.",
  },
  {
    question: "Is prior authorization automated today?",
    answer:
      "Prior authorization automation is in active development. It is not yet part of how requests are submitted or tracked — every request today is prepared and followed up on by our team.",
  },
];

export default function PriorAuthorizationPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema(breadcrumbItems)} />
      <JsonLd
        data={serviceSchema(
          "Prior Authorization",
          "Prior authorization services for independent US physician practices, submitted with complete clinical documentation and tracked through approval.",
          "prior-authorization",
          "/prior-authorization"
        )}
      />
      <JsonLd data={faqSchema(faqItems)} />

      {/* 1. Hero */}
      <section className="relative overflow-hidden bg-ivory">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-24 -top-28 h-96 w-96 rounded-full bg-royal/15 blur-3xl"
        />
        <div className="container-page relative py-16 lg:py-20">
          <Breadcrumb items={breadcrumbItems} />
          <div className="mt-6 max-w-2xl">
            <h1 className="font-display text-4xl font-semibold leading-tight text-violet sm:text-5xl">
              Authorization, Without the Hold Time
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-charcoal">
              Confirmed coverage doesn't always mean a service is
              automatically approved. Some procedures need one more step
              first — prior authorization — and Claravox tracks it from
              request to approval so it doesn't quietly stall your
              schedule.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button href="/get-your-free-audit" variant="gold">
                Talk with Our Specialists
              </Button>
              <Button href="/services" variant="ghost">
                See every service
              </Button>
            </div>
            <OpsTrustBadges />
          </div>
          <div className="mt-10 max-w-2xl">
            <RevenueCycleJourney currentStage="prior-authorization" />
          </div>
        </div>
      </section>

      {/* 2. Operational Challenges */}
      <Section className="bg-white">
        <div className="max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-wider text-teal-text">
            Operational Challenges
          </span>
          <h2 className="mt-2 font-display text-3xl font-semibold text-violet sm:text-4xl">
            Where Authorization Requests Usually Stall
          </h2>
        </div>
        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          {failures.map(({ title, body }, index) => (
            <Reveal key={title} effect="slide-up" delay={index * 100}>
              <Card className="h-full">
                <AlertTriangle className="h-6 w-6 text-teal-deep" aria-hidden="true" />
                <h3 className="mt-3 font-display text-lg font-semibold text-violet">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-charcoal">{body}</p>
              </Card>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* 3. Claravox Solution */}
      <Section className="bg-ivory">
        <div className="max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-wider text-teal-text">
            The Claravox Solution
          </span>
          <h2 className="mt-2 font-display text-3xl font-semibold text-violet sm:text-4xl">
            One Step Further Than Eligibility
          </h2>
          <p className="mt-4 text-base leading-relaxed text-charcoal">
            <Link href="/eligibility-verification" className="font-semibold text-teal-text underline underline-offset-4 hover:text-violet">Eligibility verification</Link> confirms a
            patient's coverage is active. Prior authorization is a separate
            question a payer asks for certain services: not just &ldquo;is this
            patient covered,&rdquo; but &ldquo;do we approve this specific service for
            this specific patient, in advance.&rdquo; Skip it where it's
            required, and even a fully eligible patient's claim can be
            denied.
          </p>
        </div>
      </Section>

      {/* 4. Technology Enablement — honest, tier-labeled */}
      <Section className="bg-white" id="technology">
        <div className="max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-wider text-teal-text">
            Technology Enablement
          </span>
          <h2 className="mt-2 font-display text-3xl font-semibold text-violet sm:text-4xl">
            Where Technology Fits Into Authorization Today
          </h2>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-charcoal">
            Every request today is prepared, submitted, and followed up on
            by our team — not software alone.
          </p>
        </div>
        <div className="mt-10">
          <Reveal effect="slide-up">
            <TierLadder>
              <TierCard
                tier="active-development"
                title="Billing Automation Agents, Now Building"
                description="We planned a structured roadmap for six specialized AI agents dedicated to billing automation. That planning is done — build work on these agents is genuinely underway now. They are not yet production-ready, and we're not attaching a delivery date to that until it's actually true."
              />
              <TierCard
                tier="active-development"
                title="Prior Authorization Automation, In Progress"
                description="Genuinely underway. Not yet part of how requests are actually submitted or tracked — every request today is handled directly by our team."
              />
              <TierCard
                tier="future-vision"
                title="Future Vision"
                description="Automated tracking and proactive follow-up on every pending request, with our team's judgment always deciding what gets submitted and how a denial gets appealed."
              />
            </TierLadder>
          </Reveal>
          <p className="mt-6 max-w-2xl text-xs leading-relaxed text-charcoal/70">
            See the <Link href="/technology" className="font-semibold text-teal-text underline underline-offset-4 hover:text-violet">Technology page</Link> for how every tier fits together.
          </p>
        </div>
      </Section>

      {/* 5. Operational Workflow */}
      <Section className="bg-ivory">
        <div className="max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-wider text-teal-text">
            Operational Workflow
          </span>
          <h2 className="mt-2 font-display text-3xl font-semibold text-violet sm:text-4xl">
            Claravox's Authorization Workflow
          </h2>
        </div>
        <div className="mt-14">
          <Timeline items={workflow} orientation="horizontal" />
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2">
          <div className="flex items-start gap-3">
            <FileCheck2 className="mt-1 h-6 w-6 shrink-0 text-teal-deep" aria-hidden="true" />
            <p className="text-sm leading-relaxed text-charcoal">
              Requests go in with the clinical documentation a payer actually needs, not a bare form.
            </p>
          </div>
          <div className="flex items-start gap-3">
            <Clock className="mt-1 h-6 w-6 shrink-0 text-teal-deep" aria-hidden="true" />
            <p className="text-sm leading-relaxed text-charcoal">
              Pending requests are followed up on proactively, not left to sit until someone asks.
            </p>
          </div>
          <div className="flex items-start gap-3">
            <MessageSquareWarning className="mt-1 h-6 w-6 shrink-0 text-teal-deep" aria-hidden="true" />
            <p className="text-sm leading-relaxed text-charcoal">
              A denial is appealed directly, with the clinical support needed to make the case again, properly.
            </p>
          </div>
          <div className="flex items-start gap-3">
            <FileWarning className="mt-1 h-6 w-6 shrink-0 text-teal-deep" aria-hidden="true" />
            <p className="text-sm leading-relaxed text-charcoal">
              Every request and its status is tracked, so nothing is discovered missing on the day of the visit.
            </p>
          </div>
        </div>
      </Section>

      {/* 6. Benefits */}
      <Section className="bg-white">
        <div className="max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-wider text-teal-text">Benefits</span>
          <h2 className="mt-2 font-display text-3xl font-semibold text-violet sm:text-4xl">
            What Changes For Your Practice
          </h2>
        </div>
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map(({ icon: Icon, title, body }, index) => (
            <Reveal key={title} effect="slide-up" delay={index * 100}>
              <Card className="h-full">
                <Icon className="h-6 w-6 text-teal-deep" aria-hidden="true" />
                <h3 className="mt-3 font-display text-lg font-semibold text-violet">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-charcoal">{body}</p>
              </Card>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* 7. Why Claravox */}
      <Section className="bg-ivory">
        <div className="max-w-2xl">
          <h2 className="font-display text-3xl font-semibold text-violet sm:text-4xl">Why Claravox</h2>
        </div>
        <OpsWhyClaravox />
        <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-2">
          <SecurityBlock title="HIPAA Aligned Process">
            A signed Business Associate Agreement is in place before any clinical documentation changes hands.
          </SecurityBlock>
          <ComplianceBlock title="US Registered Entity">
            Every authorization request is handled by a US registered company. See <Link href="/compliance-and-security" className="font-semibold text-teal-text underline underline-offset-4 hover:text-violet">Compliance &amp; Security</Link> for the full picture.
          </ComplianceBlock>
        </div>
      </Section>

      {/* 8. FAQ */}
      <Section className="bg-white">
        <div className="max-w-2xl">
          <h2 className="font-display text-3xl font-semibold text-violet sm:text-4xl">
            Frequently Asked Questions
          </h2>
        </div>
        <div className="mt-10 max-w-3xl">
          <FAQAccordion items={faqItems} />
        </div>
      </Section>

      {/* 9. Enterprise CTA */}
      <section className="bg-violet">
        <div className="container-page flex flex-col items-center gap-6 py-16 text-center md:py-20">
          <h2 className="font-display text-3xl font-semibold text-white sm:text-4xl">
            Stop Letting Authorization Hold Up Your Schedule
          </h2>
          <p className="max-w-xl text-base text-white/80">
            A free consultation shows exactly where authorization delays
            are costing your practice today.
          </p>
          <Button href="/get-your-free-audit" variant="gold">
            Talk with Our Specialists
          </Button>
          <div className="mt-2 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm">
            <Link href="/eligibility-verification" className="text-white/70 underline underline-offset-4 hover:text-white">
              Eligibility Verification
            </Link>
            <Link href="/medical-coding" className="text-white/70 underline underline-offset-4 hover:text-white">
              Medical Coding
            </Link>
            <Link href="/payment-posting" className="text-white/70 underline underline-offset-4 hover:text-white">
              Payment Posting
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
