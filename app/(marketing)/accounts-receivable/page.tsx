import type { Metadata } from "next";
import Link from "next/link";
import { PhoneCall, TrendingDown, Sparkles, Gauge, TrendingUp, Eye as EyeIcon } from "lucide-react";
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
  title: "Medical Accounts Receivable Management, Claravox Healthcare",
  description:
    "AR that doesn't sit for 90 days — disciplined follow-up on every unpaid claim for independent US physician practices, with insight that improves the whole revenue cycle.",
  alternates: { canonical: "/accounts-receivable" },
};

const breadcrumbItems = [
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
  { name: "Accounts Receivable", path: "/accounts-receivable" },
];

const agingBuckets = [
  { range: "0–30 Days", note: "Fresh. Highest likelihood of collection with a simple follow-up.", intensity: "bg-teal-deep" },
  { range: "31–60 Days", note: "Still very recoverable, but needs active follow-up, not just a wait.", intensity: "bg-teal-deep/70" },
  { range: "61–90 Days", note: "Recoverable, but every week of delay lowers the odds and raises the effort.", intensity: "bg-gold" },
  { range: "90+ Days", note: "The hardest bucket to collect — the clearest sign something upstream needs to change.", intensity: "bg-error" },
];

const followUpWorkflow = [
  { title: "Work the Freshest AR First", description: "Newer balances get followed up on quickly, while they're still the easiest to collect." },
  { title: "Contact the Payer Directly", description: "Status is confirmed directly with the payer, not assumed from a portal that may not be current." },
  { title: "Escalate What Stalls", description: "A balance that isn't moving gets escalated internally, rather than continuing to sit in a routine follow-up queue." },
  { title: "Close or Recover", description: "Every balance ends in one of two places: collected, or a documented reason it couldn't be — never just abandoned." },
];

const benefits = [
  { icon: TrendingUp, title: "Revenue Optimisation", body: "Every balance ends in one of two places: collected, or a documented reason it couldn't be — never just abandoned." },
  { icon: EyeIcon, title: "Improved Operational Visibility", body: "Your real AR aging, not an industry average or a rough estimate." },
  { icon: Gauge, title: "Reduced Administrative Burden", body: "A dedicated team working every open balance by age, not a periodic sweep." },
  { icon: Sparkles, title: "Better Workflow Coordination", body: "Patterns in what sits longest feed back into eligibility, prior authorization, and denial management." },
];

const faqItems = [
  {
    question: "How is AR follow-up different from denial management?",
    answer:
      "Denial management handles claims a payer has actively rejected. AR follow-up covers everything still unpaid, including claims that were never denied at all — just delayed, under-processed, or sitting without a clear payer response.",
  },
  {
    question: "Why does the age of a balance matter so much?",
    answer:
      "Payer timely-filing windows close, documentation gets harder to reconstruct, and patient recall fades. The same balance is measurably easier to collect at 30 days than at 90 — which is why we prioritize by age, not just by size.",
  },
  {
    question: "What happens to AR that genuinely can't be collected?",
    answer:
      "It's documented with the specific reason, not just written off silently — and if a pattern emerges (a specific payer, a specific denial type), that pattern feeds back into how we handle that stage upstream.",
  },
  {
    question: "Is AR follow-up automated today?",
    answer:
      "AR automation is in active development. It is not yet part of how balances are actually worked and followed up on — every account today is followed up on by our team.",
  },
];

export default function AccountsReceivablePage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema(breadcrumbItems)} />
      <JsonLd
        data={serviceSchema(
          "Accounts Receivable Management",
          "Accounts receivable follow-up for independent US physician practices, prioritized by age, escalated when it stalls, and fed back into upstream process improvement.",
          "accounts-receivable",
          "/accounts-receivable"
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
              AR That Doesn't Sit for 90 Days
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-charcoal">
              This is the last stop for revenue that hasn't been collected
              yet — and, done well, it's also where the whole revenue
              cycle gets smarter. Claravox follows up on every open
              balance by age, and uses what AR reveals to improve
              everything upstream of it.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button href="/get-your-free-audit" variant="gold">
                Optimise Your Revenue Recovery
              </Button>
              <Button href="/services" variant="ghost">
                See every service
              </Button>
            </div>
            <OpsTrustBadges />
          </div>
          <div className="mt-10 max-w-2xl">
            <RevenueCycleJourney currentStage="ar-follow-up" />
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
            Why Timing Is the Whole Game
          </h2>
          <p className="mt-4 text-base leading-relaxed text-charcoal">
            A balance doesn't get easier to collect by waiting. Payer
            filing windows close, documentation gets harder to
            reconstruct, and the odds of ever collecting a balance drop
            the longer it sits untouched.
          </p>
        </div>
        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-4">
          {agingBuckets.map(({ range, note, intensity }) => (
            <div key={range} className="rounded-lg border border-mist bg-white p-5 shadow-resting">
              <div className={`h-1.5 w-full rounded-full ${intensity}`} aria-hidden="true" />
              <p className="mt-4 font-data text-lg font-semibold text-violet">{range}</p>
              <p className="mt-2 text-xs leading-relaxed text-charcoal">{note}</p>
            </div>
          ))}
        </div>
        <p className="mt-6 text-xs leading-relaxed text-charcoal/60">
          Illustrative aging framework — actual timelines vary by payer and claim type.
        </p>
      </Section>

      {/* 3. Claravox Solution */}
      <Section className="bg-ivory">
        <div className="max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-wider text-teal-text">
            The Claravox Solution
          </span>
          <h2 className="mt-2 font-display text-3xl font-semibold text-violet sm:text-4xl">
            What Accounts Receivable Follow-Up Actually Is
          </h2>
          <p className="mt-4 text-base leading-relaxed text-charcoal">
            Not every unpaid balance is a{" "}
            <Link href="/denial-management" className="font-semibold text-teal-text underline underline-offset-4 hover:text-violet">
              denial
            </Link>
            . Some claims are simply still processing, under-processed,
            or sitting without a clear response. AR follow-up is the
            discipline of actively working every open balance until it's
            resolved, rather than waiting for a payer to eventually
            respond on their own schedule.
          </p>
        </div>
        <div className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-center">
          <p className="text-base leading-relaxed text-charcoal">
            AR follow-up isn't just the end of one claim's journey. A
            pattern in what sits longest — a specific payer, a specific
            service, a specific denial type — is operational insight, and
            it feeds directly back into{" "}
            <Link href="/eligibility-verification" className="font-semibold text-teal-text underline underline-offset-4 hover:text-violet">eligibility verification</Link>,{" "}
            <Link href="/prior-authorization" className="font-semibold text-teal-text underline underline-offset-4 hover:text-violet">prior authorization</Link>,
            and{" "}
            <Link href="/denial-management" className="font-semibold text-teal-text underline underline-offset-4 hover:text-violet">denial management</Link>.
            Every completed cycle makes the next one a little better.
          </p>
          <div className="flex items-center gap-4 rounded-lg border border-mist bg-white p-6 shadow-resting">
            <Sparkles className="h-8 w-8 shrink-0 text-teal-deep" aria-hidden="true" />
            <p className="text-sm leading-relaxed text-charcoal">
              This is the point where prevention, execution, and recovery stop being separate ideas and become one operating system.
            </p>
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
            Where Technology Fits Into AR Today
          </h2>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-charcoal">
            Every account today is followed up on by our team — not
            software alone.
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
                title="AR Automation, In Progress"
                description="Genuinely underway. Not yet part of how balances are actually worked — every account today is followed up on directly by our team."
              />
              <TierCard
                tier="future-vision"
                title="Future Vision"
                description="Automated prioritization by age and pattern, surfacing what needs attention fastest — with our team always making the actual collection call."
              />
            </TierLadder>
          </Reveal>
          <p className="mt-6 max-w-2xl text-xs leading-relaxed text-charcoal/70">
            The <Link href="/technology" className="font-semibold text-teal-text underline underline-offset-4 hover:text-violet">full Technology page</Link> lays out what's live, what's in progress, and what's still ahead.
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
            Claravox's Follow-Up Workflow
          </h2>
        </div>
        <div className="mt-14">
          <Timeline items={followUpWorkflow} orientation="horizontal" />
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2">
          <div className="flex items-start gap-3">
            <PhoneCall className="mt-1 h-6 w-6 shrink-0 text-teal-deep" aria-hidden="true" />
            <p className="text-sm leading-relaxed text-charcoal">
              Every stalled balance is followed up on directly with the payer, not just re-checked in a portal.
            </p>
          </div>
          <div className="flex items-start gap-3">
            <TrendingDown className="mt-1 h-6 w-6 shrink-0 text-teal-deep" aria-hidden="true" />
            <p className="text-sm leading-relaxed text-charcoal">
              A balance that isn't moving after a set number of follow-ups is escalated internally, not left to age further.
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
            A signed Business Associate Agreement covers every account we follow up on, from the first day we touch it.
          </SecurityBlock>
          <ComplianceBlock title="US Registered Entity">
            Every account we follow up on is handled by a US registered company. See <Link href="/compliance-and-security" className="font-semibold text-teal-text underline underline-offset-4 hover:text-violet">Compliance &amp; Security</Link> for the full picture.
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
            See Where Your Own AR Actually Stands
          </h2>
          <p className="max-w-xl text-base text-white/80">
            A free consultation shows your real AR aging, not an industry
            average. You've now seen every stage of the cycle — none of
            these stages actually stand alone, and every completed cycle
            makes the next one measurably better.
          </p>
          <Button href="/get-your-free-audit" variant="gold">
            Optimise Your Revenue Recovery
          </Button>
          <div className="mt-2 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm">
            <Link href="/denial-management" className="text-white/70 underline underline-offset-4 hover:text-white">
              Denial Management
            </Link>
            <Link href="/payment-posting" className="text-white/70 underline underline-offset-4 hover:text-white">
              Payment Posting
            </Link>
            <Link href="/medical-billing" className="text-white/70 underline underline-offset-4 hover:text-white">
              Medical Billing
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
