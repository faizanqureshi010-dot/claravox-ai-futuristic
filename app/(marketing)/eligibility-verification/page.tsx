import type { Metadata } from "next";
import Link from "next/link";
import {
  AlertTriangle,
  CheckCircle2,
  XCircle,
  FileText,
  PhoneCall,
  Gauge,
  Eye as EyeIcon,
  TrendingUp,
  ShieldCheck,
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
  title: "Insurance Eligibility Verification Services, Claravox Healthcare",
  description:
    "Verify a patient's coverage before the appointment, not after the claim is denied. Eligibility verification for independent US physician practices.",
  alternates: { canonical: "/eligibility-verification" },
};

const breadcrumbItems = [
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
  { name: "Eligibility Verification", path: "/eligibility-verification" },
];

const failures = [
  { title: "Checked Once, Never Again", body: "Coverage confirmed at the patient's first visit, months or years ago, never re-verified before a later appointment." },
  { title: "Active Plan, Wrong Details", body: "The plan is active, but the copay, deductible status, or covered services checked don't match what's actually billed." },
  { title: "Verified Too Late", body: "Eligibility checked the morning of, or after, the appointment — leaving no time to resolve a problem before the patient is already in the chair." },
];

const consequences = [
  "A denied claim that now has to be reworked and resubmitted, instead of a problem caught for free beforehand.",
  "An awkward conversation with the patient about a bill they didn't expect, after the visit instead of before it.",
  "Staff time spent tracking down coverage details after the fact, when it would have taken less time before.",
  "Revenue that may never be collected at all, if the patient can't be reached or can't pay after the fact.",
];

const workflow = [
  { title: "Verify Before Scheduling", description: "Coverage is checked as soon as an appointment is booked, not the day it happens." },
  { title: "Confirm the Specifics", description: "Not just \u201cactive or not\u201d — the actual copay, deductible, and whether the specific service is covered." },
  { title: "Flag Issues Early", description: "Any coverage problem is flagged to the practice with enough time to resolve it before the visit." },
  { title: "Document Everything", description: "Verification details are recorded and attached to the encounter, so billing has what it needs without asking again." },
];

const benefits = [
  { icon: TrendingUp, title: "Revenue Optimisation", body: "Coverage problems caught for free beforehand, not reworked as a denied claim." },
  { icon: EyeIcon, title: "Operational Transparency", body: "A documented, clear understanding of what's covered and what the patient owes, before the visit." },
  { icon: Gauge, title: "Reduced Administrative Burden", body: "Less staff time spent tracking down coverage details after the fact." },
  { icon: ShieldCheck, title: "Consistent Billing Quality", body: "Verification confirmed directly with the payer, not assumed from a card or an out-of-date portal screen." },
];

const faqItems = [
  {
    question: "How far in advance should eligibility be verified?",
    answer:
      "Ideally at the time an appointment is scheduled, and re-confirmed close to the visit date for anything scheduled more than a few weeks out — coverage can change in between.",
  },
  {
    question: "What happens if a patient's coverage has actually lapsed?",
    answer:
      "You find out before the appointment, not after a denied claim — giving the practice and the patient time to sort out payment or rescheduling on their own terms.",
  },
  {
    question: "Is eligibility verification automated today?",
    answer:
      "Eligibility verification automation is in active development. It is not yet part of how your patients' coverage is checked — every verification today is confirmed by our team directly with the payer.",
  },
  {
    question: "Does this connect to prior authorization?",
    answer:
      "Yes. Eligibility verification is often the step that reveals whether a service also needs prior authorization — see our Prior Authorization page for what happens next.",
  },
];

export default function EligibilityVerificationPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema(breadcrumbItems)} />
      <JsonLd
        data={serviceSchema(
          "Insurance Eligibility Verification",
          "Insurance eligibility verification for independent US physician practices, confirmed before the appointment, not after a claim is denied.",
          "eligibility-verification",
          "/eligibility-verification"
        )}
      />
      <JsonLd data={faqSchema(faqItems)} />

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
              Know Coverage Before the Appointment
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-charcoal">
              Eligibility verification is the single easiest denial to
              prevent — because it's the one problem you can always catch
              before the patient ever sees a provider. Claravox confirms
              coverage early enough to actually do something about it.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button href="/get-your-free-audit" variant="gold">
                Improve Eligibility Workflows
              </Button>
              <Button href="/services" variant="ghost">
                See every service
              </Button>
            </div>
            <OpsTrustBadges />
          </div>
          <div className="mt-10 max-w-2xl">
            <RevenueCycleJourney currentStage="eligibility" />
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
            Where Verification Usually Fails
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

        <div className="mt-14">
          <h3 className="font-display text-xl font-semibold text-violet">What Skipping This Step Actually Costs</h3>
          <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {consequences.map((body) => (
              <div key={body} className="flex items-start gap-3">
                <AlertTriangle className="mt-1 h-5 w-5 shrink-0 text-teal-deep" aria-hidden="true" />
                <p className="text-sm leading-relaxed text-charcoal">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* 3. Claravox Solution — decision-tree visual */}
      <Section className="bg-ivory">
        <div className="max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-wider text-teal-text">
            The Claravox Solution
          </span>
          <h2 className="mt-2 font-display text-3xl font-semibold text-violet sm:text-4xl">
            Why This Has to Happen Before Treatment, Not After
          </h2>
          <p className="mt-4 text-base leading-relaxed text-charcoal">
            Eligibility verification confirms that a patient's insurance is
            active and that the specific service they're being seen for is
            actually covered — before the appointment happens, not after a
            claim comes back denied. Once a service has been provided, the
            options narrow considerably. Checked beforehand, there's still a
            real choice to make.
          </p>
        </div>
        <div className="mx-auto mt-12 max-w-2xl">
          <div className="flex flex-col items-center">
            <div className="rounded-lg border border-mist bg-white px-6 py-3 text-sm font-semibold text-violet shadow-resting">
              Is coverage confirmed for this specific service?
            </div>
            <span aria-hidden="true" className="h-8 w-px bg-mist" />
            <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2">
              <div className="flex flex-col items-center text-center">
                <div className="flex items-center gap-2 text-sm font-semibold text-success">
                  <CheckCircle2 className="h-5 w-5" aria-hidden="true" />
                  Yes, Confirmed
                </div>
                <span aria-hidden="true" className="my-2 h-6 w-px bg-mist" />
                <p className="rounded-lg border border-mist bg-white p-4 text-sm leading-relaxed text-charcoal shadow-resting">
                  The visit proceeds with a clear, documented understanding of what's covered and what the patient owes.
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="flex items-center gap-2 text-sm font-semibold text-error">
                  <XCircle className="h-5 w-5" aria-hidden="true" />
                  No, or Unclear
                </div>
                <span aria-hidden="true" className="my-2 h-6 w-px bg-mist" />
                <p className="rounded-lg border border-mist bg-white p-4 text-sm leading-relaxed text-charcoal shadow-resting">
                  The practice and patient can address it before the visit — a different plan on file, a self-pay conversation, or a reschedule — instead of after a denied claim.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* 4. Technology Enablement — honest, tier-labeled */}
      <Section className="bg-white" id="technology">
        <div className="max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-wider text-teal-text">
            Technology Enablement
          </span>
          <h2 className="mt-2 font-display text-3xl font-semibold text-violet sm:text-4xl">
            Where Technology Fits Into Verification Today
          </h2>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-charcoal">
            Every verification today is confirmed by our team directly with
            the payer — not software alone.
          </p>
        </div>
        <div className="mt-10">
          <Reveal effect="slide-up">
            <TierLadder>
              <TierCard
                tier="active-development"
                title="Billing Automation Agents, Now Building"
                description="We planned a structured roadmap for six specialized AI agents dedicated to billing automation, including eligibility. That planning is done — build work on these agents is genuinely underway now. They are not yet production-ready, and we're not attaching a delivery date to that until it's actually true."
              />
              <TierCard
                tier="active-development"
                title="Eligibility Verification Automation, In Progress"
                description="Genuinely underway. Not yet part of how your patients' coverage is actually checked — every verification today is confirmed by a person, directly with the payer."
              />
              <TierCard
                tier="future-vision"
                title="Future Vision"
                description="Automated, real-time verification that flags issues the moment an appointment is booked — always with our team confirming anything ambiguous before it reaches you."
              />
            </TierLadder>
          </Reveal>
          <p className="mt-6 max-w-2xl text-xs leading-relaxed text-charcoal/70">
            For the complete picture, tier by tier, see the <Link href="/technology" className="font-semibold text-teal-text underline underline-offset-4 hover:text-violet">Technology page</Link>.
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
            Claravox's Verification Workflow
          </h2>
        </div>
        <div className="mt-14">
          <Timeline items={workflow} orientation="horizontal" />
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2">
          <div className="flex items-start gap-3">
            <PhoneCall className="mt-1 h-6 w-6 shrink-0 text-teal-deep" aria-hidden="true" />
            <p className="text-sm leading-relaxed text-charcoal">
              Verification is confirmed directly with the payer, not assumed from a card or a portal screen that may be out of date.
            </p>
          </div>
          <div className="flex items-start gap-3">
            <FileText className="mt-1 h-6 w-6 shrink-0 text-teal-deep" aria-hidden="true" />
            <p className="text-sm leading-relaxed text-charcoal">
              Every verification is documented and attached to the encounter, so coding and billing have what they need without a second call.
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
            We operate under a signed Business Associate Agreement before the first eligibility check is ever run.
          </SecurityBlock>
          <ComplianceBlock title="US Registered Entity">
            Every eligibility check is run by a US registered company. See <Link href="/compliance-and-security" className="font-semibold text-teal-text underline underline-offset-4 hover:text-violet">Compliance &amp; Security</Link> for the full picture.
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
            Stop Finding Out About Coverage After the Visit
          </h2>
          <p className="max-w-xl text-base text-white/80">
            A free consultation shows exactly where verification gaps are
            costing your practice today.
          </p>
          <Button href="/get-your-free-audit" variant="gold">
            Improve Eligibility Workflows
          </Button>
          <div className="mt-2 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm">
            <Link href="/medical-billing" className="text-white/70 underline underline-offset-4 hover:text-white">
              Medical Billing
            </Link>
            <Link href="/credentialing" className="text-white/70 underline underline-offset-4 hover:text-white">
              Credentialing
            </Link>
            <Link href="/prior-authorization" className="text-white/70 underline underline-offset-4 hover:text-white">
              Prior Authorization
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
