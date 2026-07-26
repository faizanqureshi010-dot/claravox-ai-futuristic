import type { Metadata } from "next";
import Link from "next/link";
import {
  FileCheck2,
  AlertTriangle,
  ShieldCheck,
  TrendingUp,
  FileWarning,
  ClipboardCheck,
  Gauge,
  Banknote,
  ArrowRight,
  Hourglass,
} from "lucide-react";
import { RevenueCycleJourney } from "@/components/ui/RevenueCycleJourney";
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
import { OpsWhyClaravox } from "@/components/ops/OpsWhyClaravox";
import { OpsTrustBadges } from "@/components/ops/OpsTrustBadges";
import { breadcrumbSchema, faqSchema, serviceSchema } from "@/lib/schema";

// Metadata, breadcrumb structure, and the serviceSchema() call below are
// preserved exactly as they were — SEO/structured data untouched per
// explicit instruction, even though the visible copy around them changed.
export const metadata: Metadata = {
  title: "Medical Billing Services for Independent Practices, Claravox Healthcare",
  description:
    "Full-service medical billing for independent US physician practices — charge capture, claim submission, and accuracy checks before a claim ever goes out. See what a free consultation finds first.",
  alternates: { canonical: "/medical-billing" },
};

const breadcrumbItems = [
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
  { name: "Medical Billing", path: "/medical-billing" },
];

// Billing's angle: what happens at the billing stage that either keeps
// cash moving or turns into an AR problem later. Distinct from Medical
// Coding's angle (accuracy/compliance/audit), and distinct from Denial
// Management's angle (recovery after the fact) — this is prevention at
// the submission stage specifically.
const cashFlowChallenges = [
  {
    icon: Hourglass,
    title: "Claims Sit Before They're Sent",
    body: "A claim ready to file waits in a queue behind other work, adding days to the time between the visit and the first payer response.",
  },
  {
    icon: AlertTriangle,
    title: "Preventable Denials Ship Anyway",
    body: "A claim goes out with a known, catchable issue — a formatting mismatch, a missing modifier — because no one checked it against that specific payer's rules first.",
  },
  {
    icon: Banknote,
    title: "Cash Flow Depends on Guesswork",
    body: "Without a consistent submission cycle, a practice can't predict when this month's claims will actually turn into deposited payment.",
  },
];

// A distinct section this page needed and Medical Coding doesn't: the
// direct line from a billing-stage decision to an AR outcome, since
// billing's differentiator (per brief) is its cash-flow/AR angle.
const arImpactChain = [
  { label: "Billing Error", body: "A denial trigger ships in the claim." },
  { label: "Denial", body: "The payer rejects or underpays it." },
  { label: "Rework", body: "Staff time goes to fixing a claim that should have been clean." },
  { label: "Delayed Cash", body: "The balance ages into AR instead of closing on the first pass." },
];

const chargeEntryPoints = [
  { title: "A Missed Charge Is Gone", body: "A supply, an add-on procedure, or a modifier that never gets entered isn't delayed revenue — it's usually gone for good, with no claim to appeal." },
  { title: "Matched to the Coded Encounter", body: "Every charge is checked against exactly what was coded before it's entered — nothing added, nothing missed." },
  { title: "Checked Before It Moves On", body: "A second look confirms entered charges match the encounter before they ever reach a claim." },
];

const claimSubmissionPoints = [
  { title: "Built to Each Payer's Format", body: "Every payer has its own formatting and documentation requirements. Claims are built to match, not submitted as a generic template and hoped for." },
  { title: "Scrubbed Before It's Sent", body: "Checked against known denial triggers for that specific payer — the single biggest lever on first-pass acceptance rate." },
  { title: "Tracked, Not Assumed", body: "Submission is confirmed and tracked, so a claim that didn't go through is caught immediately, not weeks later." },
];

// Workflow extended past "filed" to "paid" — cash flow is the whole
// point of this page, so the cycle doesn't stop at submission.
const cashFlowWorkflow = [
  {
    title: "Charge Capture",
    description: "Every billable service from the encounter is captured completely, not estimated after the fact.",
  },
  {
    title: "Claim Build & Scrub",
    description: "The claim is built to that payer's format and checked against known denial triggers before it leaves the building.",
  },
  {
    title: "Submission on a Fixed Cycle",
    description: "Claims go out on a predictable schedule, not whenever there's spare time — so you can predict when payment follows.",
  },
  {
    title: "Payment Lands, Cycle Closes",
    description: "Once payment posts, the claim's cycle is genuinely closed. (Payment posting itself is covered in full on its own page.)",
  },
];

const benefits = [
  {
    icon: TrendingUp,
    title: "Faster First-Pass Payment",
    body: "Fewer claims bounced back for preventable issues means fewer round trips before money actually lands.",
  },
  {
    icon: Gauge,
    title: "Predictable Submission Cycle",
    body: "Claims leave on a fixed cycle, not whenever time allows, so cash flow stops being a guessing game.",
  },
  {
    icon: FileCheck2,
    title: "Fewer Claims Aging Into AR",
    body: "Denial prevention at the billing stage means fewer claims ever reach AR follow-up in the first place.",
  },
  {
    icon: ShieldCheck,
    title: "Consistent Claim Quality",
    body: "One team, one standard, on every claim — not quality that depends on which staff member handled it that day.",
  },
];

const faqItems = [
  {
    question: "How does medical billing actually affect my cash flow?",
    answer:
      "Every claim that ships clean the first time is money that lands on schedule. Every claim that bounces back for a preventable reason adds a delay, and often ages into AR before it's resolved. Billing quality is the first lever on how predictable your cash flow actually is.",
  },
  {
    question: "How quickly are claims submitted after an encounter?",
    answer:
      "Claims move on a fixed submission cycle rather than whenever staff time allows, specifically so you can predict when payment follows a given batch of visits.",
  },
  {
    question: "What's the difference between this and AR follow-up?",
    answer:
      "Medical billing is prevention — stopping a denial before the claim ever leaves. AR follow-up is recovery — working balances that are already unpaid. The fewer claims that need AR follow-up, the better billing is doing its job.",
  },
  {
    question: "Do you handle billing for every specialty?",
    answer:
      "Yes. Claravox is specialty-agnostic by design — see Who We Serve for the full range of practice types we work with.",
  },
  {
    question: "Is any part of claim submission automated today?",
    answer:
      "Workflow automation already supports our internal operations. Intelligent claim scrubbing is in active development and is not yet part of how your claims are checked — every claim today is scrubbed and submitted by our billing team, not software alone.",
  },
];

export default function MedicalBillingPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema(breadcrumbItems)} />
      <JsonLd
        data={serviceSchema(
          "Medical Billing",
          "Full-service medical billing for independent US physician practices, including charge capture, coding, claim scrubbing, and submission.",
          "medical-billing",
          "/medical-billing"
        )}
      />
      <JsonLd data={faqSchema(faqItems)} />

      {/* 1. Hero — cash-flow framing, not "own the whole claim" */}
      <section className="relative overflow-hidden bg-ivory">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-24 -top-28 h-96 w-96 rounded-full bg-teal-deep/15 blur-3xl"
        />
        <div className="container-page relative py-16 lg:py-20">
          <Breadcrumb items={breadcrumbItems} />
          <div className="mt-6 max-w-2xl">
            <h1 className="font-display text-4xl font-semibold leading-tight text-violet sm:text-5xl">
              Claims That Get Paid, Not Just Filed
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-charcoal">
              Medical billing is where your cash flow actually gets decided
              — a claim that ships clean is money on a predictable
              schedule; a claim that bounces back is a delay, and often an{" "}
              <Link href="/accounts-receivable" className="font-semibold text-teal-text underline underline-offset-4 hover:text-violet">
                AR problem
              </Link>{" "}
              waiting to happen. Claravox owns this stage end to end, as
              part of the{" "}
              <Link href="/revenue-cycle-management" className="font-semibold text-teal-text underline underline-offset-4 hover:text-violet">
                complete revenue cycle
              </Link>
              .
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button href="/get-your-free-audit" variant="gold">
                Request a Revenue Assessment
              </Button>
              <Button href="/services" variant="ghost">
                See every service
              </Button>
            </div>
            <OpsTrustBadges />
          </div>
          <div className="mt-10 max-w-2xl">
            <RevenueCycleJourney
              coveredStages={["charge-entry", "claim-submission"]}
              coverageLabel="Medical Billing"
            />
          </div>
        </div>
      </section>

      {/* 2. Operational Challenges — cash-flow specific */}
      <Section className="bg-white">
        <div className="max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-wider text-teal-text">
            Operational Challenges
          </span>
          <h2 className="mt-2 font-display text-3xl font-semibold text-violet sm:text-4xl">
            Where Cash Flow Actually Breaks Down
          </h2>
        </div>
        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          {cashFlowChallenges.map(({ icon: Icon, title, body }, index) => (
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

      {/* Distinct section: the direct line from a billing-stage decision
         to an AR outcome — this is billing's specific differentiator,
         not something Medical Coding's page covers. */}
      <Section className="bg-ivory">
        <div className="max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-wider text-teal-text">
            Why This Stage Matters So Much
          </span>
          <h2 className="mt-2 font-display text-3xl font-semibold text-violet sm:text-4xl">
            How a Billing Error Becomes an AR Problem
          </h2>
          <p className="mt-4 text-base leading-relaxed text-charcoal">
            This isn't abstract. It's the same short chain, every time a
            preventable issue ships in a claim:
          </p>
        </div>
        <div className="relative mt-10">
          <ol className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {arImpactChain.map(({ label, body }, index) => (
              <Reveal key={label} effect="fade" delay={index * 100}>
                <li className="flex h-full flex-col rounded-lg border border-mist bg-white p-5 shadow-resting">
                  <span className="font-data text-xs font-semibold uppercase tracking-wider text-teal-text">
                    Step {index + 1}
                  </span>
                  <p className="mt-2 font-display text-base font-semibold text-violet">{label}</p>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-charcoal">{body}</p>
                  {index < arImpactChain.length - 1 && (
                    <ArrowRight
                      className="mt-3 h-4 w-4 text-violet/40 sm:hidden lg:block"
                      aria-hidden="true"
                    />
                  )}
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
        <p className="mt-6 text-sm leading-relaxed text-charcoal">
          Preventing step one is why this page exists. Recovering from
          step four is what{" "}
          <Link href="/accounts-receivable" className="font-semibold text-teal-text underline underline-offset-4 hover:text-violet">
            AR follow-up
          </Link>{" "}
          is for — the fewer claims that make this trip, the less that
          page has to do.
        </p>
      </Section>

      {/* 3. Claravox Solution */}
      <Section className="bg-white">
        <div className="max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-wider text-teal-text">
            The Claravox Solution
          </span>
          <h2 className="mt-2 font-display text-3xl font-semibold text-violet sm:text-4xl">
            One Team Owns the Claim, Start to Finish
          </h2>
          <p className="mt-4 text-base leading-relaxed text-charcoal">
            Nothing is handed off between people who each only see one
            piece of it — which is what actually causes most of the
            preventable issues above. That ownership runs through two
            steps worth explaining on their own.
          </p>
        </div>
      </Section>

      <Section className="bg-ivory">
        <div className="max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-wider text-teal-text">
            Part of Medical Billing
          </span>
          <h2 className="mt-2 font-display text-3xl font-semibold text-violet sm:text-4xl">
            Charge Entry: Every Billable Service, Captured Completely
          </h2>
          <p className="mt-4 text-base leading-relaxed text-charcoal">
            Once{" "}
            <Link href="/medical-coding" className="font-semibold text-teal-text underline underline-offset-4 hover:text-violet">
              an encounter is coded
            </Link>
            , those codes still have to become accurate, billable line
            items before a claim can be built. This is an internal step
            in our billing service, not a separate offering — but it's
            one of the quietest ways a practice loses revenue.
          </p>
        </div>
        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          {chargeEntryPoints.map(({ title, body }, index) => (
            <Reveal key={title} effect="slide-up" delay={index * 100}>
              <Card className="h-full">
                <FileWarning className="h-6 w-6 text-teal-deep" aria-hidden="true" />
                <h3 className="mt-3 font-display text-lg font-semibold text-violet">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-charcoal">{body}</p>
              </Card>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section className="bg-white">
        <div className="max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-wider text-teal-text">
            Part of Medical Billing
          </span>
          <h2 className="mt-2 font-display text-3xl font-semibold text-violet sm:text-4xl">
            Claim Submission: The Clean Claim Standard
          </h2>
          <p className="mt-4 text-base leading-relaxed text-charcoal">
            A correctly coded, correctly charged encounter can still be
            denied if the claim itself isn't built and filed correctly —
            the last checkpoint before it reaches a payer.
          </p>
        </div>
        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          {claimSubmissionPoints.map(({ title, body }, index) => (
            <Reveal key={title} effect="slide-up" delay={index * 100}>
              <Card className="h-full">
                <ClipboardCheck className="h-6 w-6 text-teal-deep" aria-hidden="true" />
                <h3 className="mt-3 font-display text-lg font-semibold text-violet">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-charcoal">{body}</p>
              </Card>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* 4. Operational Workflow — extended through payment, since cash
         flow (not just "filed") is this page's subject */}
      <Section className="bg-ivory">
        <div className="max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-wider text-teal-text">
            Operational Workflow
          </span>
          <h2 className="mt-2 font-display text-3xl font-semibold text-violet sm:text-4xl">
            From Encounter to Deposited Payment
          </h2>
        </div>
        <div className="mt-14">
          <Timeline items={cashFlowWorkflow} orientation="horizontal" />
        </div>
      </Section>

      {/* 5. Technology Enablement — honest, tier-labeled */}
      <Section className="bg-white" id="technology">
        <div className="max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-wider text-teal-text">
            Technology Enablement
          </span>
          <h2 className="mt-2 font-display text-3xl font-semibold text-violet sm:text-4xl">
            Where Technology Fits Into Your Billing Today
          </h2>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-charcoal">
            Every claim you send us today is scrubbed and submitted by our
            billing team — not software alone. Here is exactly what's
            true about automation in this specific part of our business.
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
                title="Intelligent Claim Scrubbing, In Progress"
                description="Genuinely underway, alongside eligibility, prior authorization, claims status monitoring, AR, payment posting, and denial management automation. None of this is live in how your claims are handled yet."
              />
              <TierCard
                tier="future-vision"
                title="Future Vision"
                description="Our long-term direction is an intelligent operations ecosystem where automation strengthens accuracy and speed at every stage, with our billing team's judgment always in the loop."
              />
            </TierLadder>
          </Reveal>
          <p className="mt-6 max-w-2xl text-xs leading-relaxed text-charcoal/70">
            The <Link href="/technology" className="font-semibold text-teal-text underline underline-offset-4 hover:text-violet">Technology page</Link> covers every tier in full, including what's commercially available today.
          </p>
        </div>
      </Section>

      {/* 6. Benefits */}
      <Section className="bg-ivory">
        <div className="max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-wider text-teal-text">Benefits</span>
          <h2 className="mt-2 font-display text-3xl font-semibold text-violet sm:text-4xl">
            What Changes For Your Cash Flow
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
      <Section className="bg-white">
        <div className="max-w-2xl">
          <h2 className="font-display text-3xl font-semibold text-violet sm:text-4xl">Why Claravox</h2>
        </div>
        <OpsWhyClaravox />
        <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-2">
          <SecurityBlock title="HIPAA Aligned Process">
            A signed Business Associate Agreement is in place before a single claim is touched, never added after the fact.
          </SecurityBlock>
          <ComplianceBlock title="US Registered Entity">
            Claravox operates as a US registered company end to end. See <Link href="/compliance-and-security" className="font-semibold text-teal-text underline underline-offset-4 hover:text-violet">Compliance &amp; Security</Link> for the full picture.
          </ComplianceBlock>
        </div>
      </Section>

      {/* 8. FAQ */}
      <Section className="bg-ivory">
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
            See What This Does to Your Own Cash Flow
          </h2>
          <p className="max-w-xl text-base text-white/80">
            A free consultation shows your actual denial rate and AR aging
            before you decide anything.
          </p>
          <Button href="/get-your-free-audit" variant="gold">
            Request a Revenue Assessment
          </Button>
          <div className="mt-2 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm">
            <Link href="/medical-coding" className="text-white/70 underline underline-offset-4 hover:text-white">
              Medical Coding
            </Link>
            <Link href="/accounts-receivable" className="text-white/70 underline underline-offset-4 hover:text-white">
              Accounts Receivable
            </Link>
            <Link href="/credentialing" className="text-white/70 underline underline-offset-4 hover:text-white">
              Credentialing
            </Link>
            <Link href="/eligibility-verification" className="text-white/70 underline underline-offset-4 hover:text-white">
              Eligibility Verification
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
