import type { Metadata } from "next";
import Link from "next/link";
import { AlertTriangle, Search, RefreshCw, ShieldAlert } from "lucide-react";
import { Button } from "@/components/Button";
import { Section } from "@/components/Section";
import { JsonLd } from "@/components/JsonLd";
import { FAQAccordion } from "@/components/FAQAccordion";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { Timeline } from "@/components/ui/Timeline";
import { Reveal } from "@/components/ui/motion/Reveal";
import { TierCard, TierLadder } from "@/components/ui/TierBadge";
import { KPICard } from "@/components/ui/KPICard";
import { SecurityBlock, ComplianceBlock } from "@/components/ui/trust/TrustBlocks";
import { RevenueCycleJourney } from "@/components/ui/RevenueCycleJourney";
import { breadcrumbSchema, faqSchema, serviceSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Denial Management Services for Medical Practices, Claravox Healthcare",
  description:
    "Denial management for independent US physician practices — root-cause analysis, appeals, and the upstream fixes that stop the same denial from recurring.",
  alternates: { canonical: "/denial-management" },
};

const breadcrumbItems = [
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
  { name: "Denial Management", path: "/denial-management" },
];

const denialTypes = [
  { title: "Eligibility & Coverage", body: "The plan wasn't active, or didn't cover this specific service — traced back to a gap in verification." },
  { title: "Coding & Documentation", body: "The code didn't match the documentation, or wasn't specific enough to support the claim." },
  { title: "Authorization & Timing", body: "A required prior authorization was missing, or the claim was filed outside the payer's deadline." },
  { title: "Duplicate or Technical", body: "A claim flagged as a duplicate, or rejected for a formatting or data error rather than a coverage decision." },
];

const rootCauseSteps = [
  { title: "Categorize", description: "Every denial is sorted by reason code — not treated as one undifferentiated pile of \u201cdenied.\u201d" },
  { title: "Trace the Origin", description: "Each category is traced back to the stage it actually came from — eligibility, coding, authorization, or somewhere else." },
  { title: "Confirm the Root Cause", description: "The specific, correctable reason is confirmed before anything is corrected or appealed — not guessed at." },
];

const resolutionWorkflow = [
  { title: "Correct or Appeal", description: "A correctable error is fixed and resubmitted. A denial that's actually wrong is appealed with the documentation to support it." },
  { title: "Track to Resolution", description: "Every appeal and correction is tracked until it's actually resolved, not marked done the moment it's sent." },
  { title: "Escalate What Stalls", description: "A denial that isn't resolved within a set window is escalated internally — it doesn't just sit in a queue." },
];

const faqItems = [
  {
    question: "What's the difference between a hard denial and a soft denial?",
    answer:
      "A soft denial can typically be corrected and resubmitted — a missing modifier, a formatting issue. A hard denial usually requires an appeal with supporting documentation, because the payer has made an adverse coverage decision, not just rejected a technical error.",
  },
  {
    question: "How do you actually find the root cause of a denial?",
    answer:
      "Every denial is categorized by reason code and traced back to the stage it originated from — eligibility, coding, or authorization. We don't correct and resubmit without confirming what actually caused it.",
  },
  {
    question: "Does denial management actually prevent future denials?",
    answer:
      "That's the point of it, not a side effect. A pattern of denials traced to a specific cause feeds back into how we handle that stage going forward — see how this connects to eligibility verification and prior authorization below.",
  },
  {
    question: "Is denial management automated today?",
    answer:
      "Denial management automation is in active development. It is not yet part of how denials are categorized, investigated, or appealed — every denial today is handled by our team.",
  },
];

export default function DenialManagementPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema(breadcrumbItems)} />
      <JsonLd
        data={serviceSchema(
          "Denial Management",
          "Denial management for independent US physician practices, including root-cause analysis, appeals, corrections, and upstream prevention.",
          "denial-management",
          "/denial-management"
        )}
      />
      <JsonLd data={faqSchema(faqItems)} />

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
              Denials, Caught Before They Cost You
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-charcoal">
              Every stage of the revenue cycle so far has been about doing
              things right the first time. Denial management is what
              happens when something still goes wrong anyway — finding
              out why, fixing it, and making sure the same mistake
              doesn't quietly repeat itself next month.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button href="/get-your-free-audit" variant="gold">
                Recover Your Denied Claims
              </Button>
              <Button href="/services" variant="ghost">
                See every service
              </Button>
            </div>
          </div>
          <div className="mt-10 max-w-2xl">
            <RevenueCycleJourney currentStage="denial-management" />
          </div>
        </div>
      </section>

      {/* What Denial Management Is */}
      <Section className="bg-white">
        <div className="max-w-2xl">
          <h2 className="font-display text-3xl font-semibold text-violet sm:text-4xl">
            What Denial Management Actually Is
          </h2>
          <p className="mt-4 text-base leading-relaxed text-charcoal">
            A denial identified during{" "}
            <Link href="/payment-posting" className="font-semibold text-teal-text underline underline-offset-4 hover:text-violet">
              payment posting
            </Link>{" "}
            doesn't end there. Denial management is the investigation that
            follows: understanding exactly why a claim was denied,
            correcting or appealing it, and — the part most practices
            skip — using what was learned to stop the same denial from
            happening again.
          </p>
        </div>
      </Section>

      {/* Types of Denials */}
      <Section>
        <div className="max-w-2xl">
          <h2 className="font-display text-3xl font-semibold text-violet sm:text-4xl">
            What Can Go Wrong, By Category
          </h2>
        </div>
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {denialTypes.map(({ title, body }, index) => (
            <Reveal key={title} effect="slide-up" delay={index * 80}>
              <div className="h-full rounded-lg border border-mist bg-white p-6 shadow-resting">
                <AlertTriangle className="h-6 w-6 text-teal-deep" aria-hidden="true" />
                <h3 className="mt-3 font-display text-lg font-semibold text-violet">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-charcoal">{body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Root-Cause Analysis */}
      <Section className="bg-white">
        <div className="max-w-2xl">
          <h2 className="font-display text-3xl font-semibold text-violet sm:text-4xl">
            Why It Happened, Not Just What Happened
          </h2>
          <p className="mt-4 text-base leading-relaxed text-charcoal">
            Correcting a denial without understanding its root cause just
            delays the next one. Every denial goes through the same
            investigation before anything is fixed.
          </p>
        </div>
        <div className="mt-14">
          <Timeline items={rootCauseSteps} orientation="horizontal" />
        </div>
      </Section>

      {/* Appeals, Corrections & Escalation */}
      <Section>
        <div className="max-w-2xl">
          <h2 className="font-display text-3xl font-semibold text-violet sm:text-4xl">
            Resolving It, and Keeping It Moving
          </h2>
        </div>
        <div className="mt-14">
          <Timeline items={resolutionWorkflow} orientation="horizontal" />
        </div>
      </Section>

      {/* Prevention — closing the loop */}
      <Section className="bg-white">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="font-display text-3xl font-semibold text-violet sm:text-4xl">
              Closing the Loop, Not Just the Claim
            </h2>
            <p className="mt-4 text-base leading-relaxed text-charcoal">
              A denial traced back to a specific root cause doesn't stop
              at that one claim. If a pattern points to{" "}
              <Link href="/eligibility-verification" className="font-semibold text-teal-text underline underline-offset-4 hover:text-violet">
                eligibility verification
              </Link>
              , that insight goes back into how eligibility is checked. If
              it points to{" "}
              <Link href="/prior-authorization" className="font-semibold text-teal-text underline underline-offset-4 hover:text-violet">
                prior authorization
              </Link>
              {" "}or{" "}
              <Link href="/medical-coding" className="font-semibold text-teal-text underline underline-offset-4 hover:text-violet">
                coding
              </Link>
              , it goes back there instead. Resolving today's denial and
              preventing next month's aren't two separate jobs.
            </p>
          </div>
          <div className="flex items-center gap-4 rounded-lg border border-mist bg-white p-6 shadow-resting">
            <RefreshCw className="h-8 w-8 shrink-0 text-teal-deep" aria-hidden="true" />
            <p className="text-sm leading-relaxed text-charcoal">
              A denial that recurs every month without ever being traced to its source is a process problem, not bad luck.
            </p>
          </div>
        </div>
      </Section>

      {/* Performance Monitoring */}
      <Section>
        <div className="max-w-2xl">
          <h2 className="font-display text-3xl font-semibold text-violet sm:text-4xl">
            Performance Monitoring
          </h2>
          <p className="mt-4 text-base leading-relaxed text-charcoal">
            The kind of visibility we track for every practice, illustrated
            below with example figures — not a promised result.
          </p>
        </div>
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3">
          <KPICard label="Denials Traced to Root Cause" value={100} suffix="%" illustrative icon={<Search className="h-4 w-4" aria-hidden="true" />} />
          <KPICard label="Avg. Days to Resolution" value={12} illustrative icon={<RefreshCw className="h-4 w-4" aria-hidden="true" />} />
          <KPICard label="Appeals Tracked to Close" value={100} suffix="%" illustrative icon={<ShieldAlert className="h-4 w-4" aria-hidden="true" />} />
        </div>
      </Section>

      {/* Technology Integration — honest, tier-labeled */}
      <Section className="bg-white" id="technology">
        <div className="max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-wider text-teal-text">
            Technology Integration
          </span>
          <h2 className="mt-2 font-display text-3xl font-semibold text-violet sm:text-4xl">
            Where Technology Fits Into Denial Management Today
          </h2>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-charcoal">
            Every denial today is categorized, investigated, and appealed
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
                title="Denial Management Automation, In Progress"
                description="Genuinely underway. Not yet part of how denials are actually categorized or investigated — every denial today is handled directly by our team."
              />
              <TierCard
                tier="future-vision"
                title="Future Vision"
                description="Automated pattern detection across denials, surfacing root causes faster — with our team always deciding what gets appealed and what changes upstream."
              />
            </TierLadder>
          </Reveal>
          <p className="mt-6 max-w-2xl text-xs leading-relaxed text-charcoal/70">
            Visit the <Link href="/technology" className="font-semibold text-teal-text underline underline-offset-4 hover:text-violet">Technology page</Link> for the complete tier-by-tier breakdown.
          </p>
        </div>
      </Section>

      {/* Trust & Compliance */}
      <Section>
        <div className="max-w-2xl">
          <h2 className="font-display text-3xl font-semibold text-violet sm:text-4xl">
            Trust & Compliance
          </h2>
        </div>
        <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-2">
          <SecurityBlock title="HIPAA Aligned Process">
            A signed Business Associate Agreement is already in place before we ever open a denied claim to investigate it.
          </SecurityBlock>
          <ComplianceBlock title="US Registered Entity">
            Every denial we investigate is handled by a US registered company. See <Link href="/compliance-and-security" className="font-semibold text-teal-text underline underline-offset-4 hover:text-violet">Compliance &amp; Security</Link> for the full picture.
          </ComplianceBlock>
        </div>
      </Section>

      {/* FAQ */}
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

      {/* Related Services */}
      <Section>
        <div className="max-w-2xl">
          <h2 className="font-display text-3xl font-semibold text-violet sm:text-4xl">
            Related Services
          </h2>
        </div>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button href="/payment-posting" variant="secondary">
            Payment Posting
          </Button>
          <Button href="/accounts-receivable" variant="secondary">
            Accounts Receivable
          </Button>
          <Button href="/eligibility-verification" variant="secondary">
            Eligibility Verification
          </Button>
          <Button href="/medical-coding" variant="secondary">
            Medical Coding
          </Button>
        </div>
      </Section>

      {/* CTA */}
      <section className="bg-violet">
        <div className="container-page flex flex-col items-center gap-6 py-16 text-center md:py-20">
          <h2 className="font-display text-3xl font-semibold text-white sm:text-4xl">
            Find Out What's Actually Causing Your Denials
          </h2>
          <p className="max-w-xl text-base text-white/80">
            A free consultation shows your real denial patterns, not an
            industry average.
          </p>
          <Button href="/get-your-free-audit" variant="gold">
            Recover Your Denied Claims
          </Button>
        </div>
      </section>
    </>
  );
}
