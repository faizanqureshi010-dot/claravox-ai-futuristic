import type { Metadata } from "next";
import Link from "next/link";
import {
  AlertTriangle,
  TrendingUp,
  FileCheck2,
  Tag,
  CheckCircle2,
  Gauge,
  ShieldAlert,
  FileSearch,
  ArrowRight,
  Scale,
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
import { OpsWhyClaravox } from "@/components/ops/OpsWhyClaravox";
import { OpsTrustBadges } from "@/components/ops/OpsTrustBadges";
import { breadcrumbSchema, faqSchema, serviceSchema } from "@/lib/schema";

// Metadata, breadcrumb structure, and the serviceSchema() call below are
// preserved exactly as they were — SEO/structured data untouched per
// explicit instruction, even though the visible copy around them changed.
export const metadata: Metadata = {
  title: "Medical Coding Services, ICD-10 & CPT Accuracy, Claravox Healthcare",
  description:
    "Accurate ICD-10, CPT, and HCPCS coding for independent US physician practices, checked against denial patterns before submission, not after.",
  alternates: { canonical: "/medical-coding" },
};

const breadcrumbItems = [
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
  { name: "Medical Coding", path: "/medical-coding" },
];

const codeSystems = ["ICD-10", "CPT", "HCPCS"];

// Coding's angle: accuracy, compliance risk, and audit defensibility —
// distinct from Medical Billing's cash-flow/submission-mechanics angle.
// A denial that traces back to coding is a documentation-and-specificity
// problem, not a claim-formatting problem.
const complianceRisks = [
  {
    icon: ShieldAlert,
    title: "A Code That Can't Be Defended",
    body: "A code gets chosen that the documentation doesn't actually support closely enough to survive a payer review, let alone a formal audit.",
  },
  {
    icon: AlertTriangle,
    title: "Specificity Left on the Table",
    body: "A less specific code gets used because it's familiar, even when a more specific one exists and would support stronger, more defensible reimbursement.",
  },
  {
    icon: FileSearch,
    title: "No Second Set of Eyes",
    body: "One person codes, no one else checks it against the documentation before the claim goes out — so an audit-risk mistake reaches the payer before anyone catches it.",
  },
];

const challenges = [
  {
    icon: AlertTriangle,
    title: "Codes Chosen From Memory, Not Documentation",
    body: "Coding done quickly by staff without dedicated training, matched to what's usually billed rather than what the documentation actually supports.",
  },
  {
    icon: Scale,
    title: "Downstream Denials, Upstream Cause",
    body: "A denial shows up at the billing or payment stage, but the actual cause was a coding decision made weeks earlier — mismatched, under-specific, or unsupported.",
  },
  {
    icon: FileSearch,
    title: "Documentation That Doesn't Translate Cleanly",
    body: "The clinical note says one thing; the code that gets attached to it says something adjacent but not quite the same thing.",
  },
];

// Distinct section this page needed and Medical Billing doesn't: the
// literal translation step from clinical documentation to a defensible
// code, since that translation — done right or wrong — is coding's
// entire differentiator.
const translationSteps = [
  { label: "Clinical Documentation", body: "What the provider actually wrote about the encounter." },
  { label: "Specificity Check", body: "Does the documentation support a more specific code than the obvious default?" },
  { label: "Code Assigned", body: "ICD-10, CPT, or HCPCS chosen to match, at the specificity that's actually supportable." },
  { label: "Audit-Ready Trail", body: "The code and the documentation it came from stay traceable to each other." },
];

const codingWorkflow = [
  {
    title: "Documentation Review",
    description: "We read the actual clinical documentation for the encounter, not a summary of it.",
  },
  {
    title: "Code Selection",
    description: "ICD-10, CPT, and HCPCS codes are chosen to match what was actually done, at the specificity the documentation supports.",
  },
  {
    title: "Cross-Check",
    description: "A second reviewer checks the coding against the documentation before it moves to billing.",
  },
  {
    title: "Handoff to Billing",
    description: "Clean, specific, well-supported codes move directly into claim submission.",
  },
];

const benefits = [
  {
    icon: ShieldAlert,
    title: "Audit Defensibility",
    body: "Every code traces back to documentation that actually supports it — the position you want to be in if a payer ever asks.",
  },
  {
    icon: TrendingUp,
    title: "Revenue Optimisation",
    body: "Specificity that supports stronger reimbursement, not the closest familiar code.",
  },
  {
    icon: FileCheck2,
    title: "Fewer Downstream Denials",
    body: "Denials traced to coding get addressed at the source, not just resubmitted with the same underlying problem.",
  },
  {
    icon: Gauge,
    title: "Reduced Compliance Risk",
    body: "A second reviewer checks every chart before it becomes a claim, not just the first person who touches it.",
  },
];

const faqItems = [
  {
    question: "What's the difference between medical coding and medical billing?",
    answer:
      "Coding translates what happened in an encounter into standardized, defensible codes. Billing takes those codes and turns them into a submitted claim. Claravox handles both, but they're distinct disciplines done by people trained in each — coding is about accuracy and compliance risk, billing is about getting a clean claim paid.",
  },
  {
    question: "If my practice were audited, would the coding hold up?",
    answer:
      "That's the standard every code is held to here: it has to trace back to documentation that actually supports it, checked by a second reviewer before it ever becomes a claim — not just whatever got the claim out the door fastest.",
  },
  {
    question: "How does a coding mistake actually cause a denial?",
    answer:
      "A code that doesn't match the documentation closely enough, or that's less specific than the documentation supports, is one of the most common root causes of a denial — even though the denial itself often shows up later, at the billing or payment stage.",
  },
  {
    question: "Do you code for every specialty?",
    answer:
      "Yes. Coding accuracy depends on understanding a specialty's documentation patterns and payer rules — see Who We Serve for the full range of practice types we work with.",
  },
  {
    question: "Is any part of coding automated today?",
    answer:
      "AI-assisted coding support is in active development, alongside intelligent claim scrubbing and several related capabilities. None of this is live in how your claims are coded — every code today is selected and reviewed by our coding team.",
  },
];

export default function MedicalCodingPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema(breadcrumbItems)} />
      <JsonLd
        data={serviceSchema(
          "Medical Coding",
          "ICD-10, CPT, and HCPCS medical coding for independent US physician practices, reviewed for accuracy and specificity before claims are submitted.",
          "medical-coding",
          "/medical-coding"
        )}
      />
      <JsonLd data={faqSchema(faqItems)} />

      {/* 1. Hero — compliance/audit framing, not claim-mechanics framing */}
      <section className="relative overflow-hidden bg-ivory">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-24 -top-28 h-96 w-96 rounded-full bg-teal-deep/15 blur-3xl"
        />
        <div className="container-page relative grid grid-cols-1 items-center gap-10 py-16 lg:grid-cols-[1.1fr_0.9fr] lg:py-20">
          <div>
            <Breadcrumb items={breadcrumbItems} />
            <div className="mt-6 max-w-2xl">
              <h1 className="font-display text-4xl font-semibold leading-tight text-violet sm:text-5xl">
                Codes That Hold Up, Not Just Codes That Ship
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-charcoal">
                Medical coding is the translation from what a provider
                documented to what a payer is asked to reimburse. Get that
                translation wrong or under-specific, and the risk isn't
                just a denial — it's a code that can't be defended if a
                payer ever looks closely. Claravox treats coding as its
                own discipline, held to a compliance standard, not an
                afterthought of billing.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Button href="/get-your-free-audit" variant="gold">
                  Improve Your Coding Accuracy
                </Button>
                <Button href="/services" variant="ghost">
                  See every service
                </Button>
              </div>
              <OpsTrustBadges />
            </div>
          </div>

          {/* Technology visual — coding accuracy check, not a stock photo */}
          <div className="relative">
            <div className="rounded-xl border border-mist bg-white/90 p-6 shadow-raised backdrop-blur">
              <span className="text-xs font-semibold uppercase tracking-wider text-teal-text">
                Coding Systems We Work In
              </span>
              <ul className="mt-4 space-y-3">
                {codeSystems.map((system) => (
                  <li key={system} className="flex items-center justify-between rounded-lg bg-cloud px-4 py-3">
                    <span className="flex items-center gap-2 font-data text-sm font-semibold text-violet">
                      <Tag className="h-4 w-4 text-teal-deep" aria-hidden="true" />
                      {system}
                    </span>
                    <CheckCircle2 className="h-4 w-4 text-teal-deep" aria-hidden="true" />
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-xs leading-relaxed text-charcoal/70">
                Every code cross-checked against documentation before it reaches billing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Claravox Solution — moved earlier than on the Billing page,
         since compliance-first framing is this page's differentiator
         and deserves to lead, not follow the problem statement. */}
      <Section className="bg-white">
        <div className="max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-wider text-teal-text">
            The Claravox Solution
          </span>
          <h2 className="mt-2 font-display text-3xl font-semibold text-violet sm:text-4xl">
            Coding, Held to a Compliance Standard
          </h2>
          <p className="mt-4 text-base leading-relaxed text-charcoal">
            Coding is treated as its own step, done by people trained
            specifically in it, and checked by a second reviewer before it
            ever reaches billing — not folded into whoever happens to be
            free that day. The standard isn't "does this get a claim out
            the door." It's "does this code trace back to documentation
            that actually supports it."
          </p>
        </div>
      </Section>

      {/* 3. Operational Challenges — compliance-risk specific */}
      <Section className="bg-ivory">
        <div className="max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-wider text-teal-text">
            Operational Challenges
          </span>
          <h2 className="mt-2 font-display text-3xl font-semibold text-violet sm:text-4xl">
            Where Coding Accuracy Usually Breaks Down
          </h2>
        </div>
        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          {complianceRisks.map(({ icon: Icon, title, body }, index) => (
            <Reveal key={title} effect="slide-up" delay={index * 100}>
              <Card className="h-full">
                <Icon className="h-6 w-6 text-teal-deep" aria-hidden="true" />
                <h3 className="mt-3 font-display text-lg font-semibold text-violet">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-charcoal">{body}</p>
              </Card>
            </Reveal>
          ))}
        </div>
        <div className="mt-14">
          <h3 className="font-display text-xl font-semibold text-violet">
            And How That Shows Up Downstream
          </h3>
          <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-3">
            {challenges.map(({ icon: Icon, title, body }, index) => (
              <Reveal key={title} effect="slide-up" delay={index * 100}>
                <Card className="h-full">
                  <Icon className="h-6 w-6 text-teal-deep" aria-hidden="true" />
                  <h3 className="mt-3 font-display text-lg font-semibold text-violet">{title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-charcoal">{body}</p>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      {/* Distinct section: the literal documentation-to-code translation
         step. Medical Billing's page doesn't have an equivalent — its
         distinct section is the billing-error-to-AR chain instead. */}
      <Section className="bg-white">
        <div className="max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-wider text-teal-text">
            How the Translation Actually Works
          </span>
          <h2 className="mt-2 font-display text-3xl font-semibold text-violet sm:text-4xl">
            From Documentation to Defensible Code
          </h2>
          <p className="mt-4 text-base leading-relaxed text-charcoal">
            Every code assigned here follows the same four-step path — the
            same path that has to hold up if a payer or auditor ever
            traces it backward.
          </p>
        </div>
        <div className="relative mt-10">
          <ol className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {translationSteps.map(({ label, body }, index) => (
              <Reveal key={label} effect="fade" delay={index * 100}>
                <li className="flex h-full flex-col rounded-lg border border-mist bg-cloud p-5">
                  <span className="font-data text-xs font-semibold uppercase tracking-wider text-teal-text">
                    Step {index + 1}
                  </span>
                  <p className="mt-2 font-display text-base font-semibold text-violet">{label}</p>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-charcoal">{body}</p>
                  {index < translationSteps.length - 1 && (
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
      </Section>

      {/* 4. Technology Enablement — honest, tier-labeled */}
      <Section className="bg-ivory" id="technology">
        <div className="max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-wider text-teal-text">
            Technology Enablement
          </span>
          <h2 className="mt-2 font-display text-3xl font-semibold text-violet sm:text-4xl">
            Where Technology Fits Into Your Coding Today
          </h2>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-charcoal">
            Every code assigned to your claims today comes from our coding
            team, reviewed by a second person — not software alone. Here is
            exactly what's true about automation in this specific part of
            our business.
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
                title="AI-Assisted Coding, In Progress"
                description="AI-assisted medical coding and intelligent claim scrubbing are genuinely underway. Neither is live in how your codes are actually assigned yet."
              />
              <TierCard
                tier="future-vision"
                title="Future Vision"
                description="Our long-term direction pairs coding expertise with AI support that checks specificity and documentation match at every step — always reviewed by our coding team, never replacing their judgment."
              />
            </TierLadder>
          </Reveal>
          <p className="mt-6 max-w-2xl text-xs leading-relaxed text-charcoal/70">
            See the <Link href="/technology" className="font-semibold text-teal-text underline underline-offset-4 hover:text-violet">full Technology page</Link> for the complete picture, including what's already commercially available today.
          </p>
        </div>
      </Section>

      {/* 5. Operational Workflow */}
      <Section className="bg-white">
        <div className="max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-wider text-teal-text">
            Operational Workflow
          </span>
          <h2 className="mt-2 font-display text-3xl font-semibold text-violet sm:text-4xl">
            From Documentation to Coded Claim
          </h2>
        </div>
        <div className="mt-14">
          <Timeline items={codingWorkflow} orientation="horizontal" />
        </div>
      </Section>

      {/* 6. Benefits */}
      <Section className="bg-ivory">
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
      <Section className="bg-white">
        <div className="max-w-2xl">
          <h2 className="font-display text-3xl font-semibold text-violet sm:text-4xl">Why Claravox</h2>
        </div>
        <OpsWhyClaravox />
        <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-2">
          <SecurityBlock title="HIPAA Aligned Process">
            A signed Business Associate Agreement is in place before we ever open a chart to code it — not an afterthought added later.
          </SecurityBlock>
          <ComplianceBlock title="US Registered Entity">
            Coding is handled entirely within a US registered company. See <Link href="/compliance-and-security" className="font-semibold text-teal-text underline underline-offset-4 hover:text-violet">Compliance &amp; Security</Link> for the full picture.
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
            See This Applied to Your Own Charts
          </h2>
          <p className="max-w-xl text-base text-white/80">
            A free consultation shows your actual denial rate and AR aging
            before you decide anything.
          </p>
          <Button href="/get-your-free-audit" variant="gold">
            Improve Your Coding Accuracy
          </Button>
          <div className="mt-2 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm">
            <Link href="/medical-billing" className="text-white/70 underline underline-offset-4 hover:text-white">
              Medical Billing
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
          </div>
        </div>
      </section>
    </>
  );
}
