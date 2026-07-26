import type { Metadata } from "next";
import Link from "next/link";
import { AlertTriangle, Search, FlagTriangleRight, CheckCircle2, Gauge, TrendingUp, Eye as EyeIcon } from "lucide-react";
import { Button } from "@/components/Button";
import { Section } from "@/components/Section";
import { Card } from "@/components/Card";
import { JsonLd } from "@/components/JsonLd";
import { FAQAccordion } from "@/components/FAQAccordion";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { Timeline } from "@/components/ui/Timeline";
import { Reveal } from "@/components/ui/motion/Reveal";
import { TierCard, TierLadder } from "@/components/ui/TierBadge";
import { ComparisonTable } from "@/components/ui/ComparisonTable";
import { SecurityBlock, ComplianceBlock } from "@/components/ui/trust/TrustBlocks";
import { RevenueCycleJourney } from "@/components/ui/RevenueCycleJourney";
import { OpsWhyClaravox } from "@/components/ops/OpsWhyClaravox";
import { OpsTrustBadges } from "@/components/ops/OpsTrustBadges";
import { breadcrumbSchema, faqSchema, serviceSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Payment Posting Services, Claravox Healthcare",
  description:
    "Accurate payment posting and reconciliation for independent US physician practices — every payment matched to the right claim, every exception flagged, not buried.",
  alternates: { canonical: "/payment-posting" },
};

const breadcrumbItems = [
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
  { name: "Payment Posting", path: "/payment-posting" },
];

const reconciliationIssues = [
  { title: "Posted to the Wrong Claim", body: "A payment applied to the wrong patient or the wrong date of service, leaving both accounts looking wrong until someone catches it." },
  { title: "Underpayments Go Unnoticed", body: "A payment that's less than the contracted rate gets posted and closed out, with no one checking it against what was actually owed." },
  { title: "Denials Buried in a Batch", body: "A denial arrives mixed in with real payments in the same file, and gets posted as if it were resolved instead of flagged for follow-up." },
];

const workflow = [
  { title: "Receive the Remittance", description: "ERAs and EOBs are pulled in as they arrive, not left sitting in a portal or a mail pile." },
  { title: "Match to the Claim", description: "Each payment is matched to the specific claim it belongs to, not just the patient or the date." },
  { title: "Verify Against Contract", description: "The amount paid is checked against the contracted rate — not just recorded as whatever arrived." },
  { title: "Flag Every Exception", description: "Underpayments, denials, and mismatches are flagged for follow-up immediately, not discovered later in a report." },
];

const remittanceComparison = {
  columns: [
    { key: "era", label: "ERA (835)" },
    { key: "eob", label: "EOB" },
  ],
  rows: [
    { label: "Format", values: { era: "Electronic file", eob: "Paper or PDF" } },
    { label: "Machine-Readable", values: { era: true, eob: false } },
    { label: "Supports Auto-Matching", values: { era: true, eob: false } },
    { label: "Typically Faster to Receive", values: { era: true, eob: false } },
  ],
};

const benefits = [
  { icon: TrendingUp, title: "Revenue Optimisation", body: "Underpayments checked against the contracted rate, not silently accepted." },
  { icon: EyeIcon, title: "Improved Operational Visibility", body: "A batch isn't considered closed until every exception in it has an assigned next step." },
  { icon: Gauge, title: "Reduced Administrative Burden", body: "Remittances pulled in as they arrive, not left sitting in a portal or a mail pile." },
  { icon: CheckCircle2, title: "Consistent Billing Quality", body: "Every payment matched to the specific claim it belongs to, not just the patient or the date." },
];

const faqItems = [
  {
    question: "What's the difference between an ERA and an EOB?",
    answer:
      "An ERA (Electronic Remittance Advice) is a machine-readable 835 file a payer sends electronically. An EOB (Explanation of Benefits) is the paper or PDF version of similar information, usually slower and not automatable in the same way. Most of our posting works from ERAs; EOBs are handled directly when that's all a payer provides.",
  },
  {
    question: "How do you catch underpayments?",
    answer:
      "Every posted payment is checked against the contracted rate for that payer and service, not just recorded as-is. A shortfall is flagged for follow-up, not silently accepted.",
  },
  {
    question: "What happens when a denial arrives mixed in with real payments?",
    answer:
      "It's identified and routed to denial management immediately — it's never posted as if it were a normal payment just because it arrived in the same batch.",
  },
  {
    question: "Is payment posting automated today?",
    answer:
      "Payment posting automation is in active development. It is not yet part of how your payments are actually posted and reconciled — every payment today is matched and verified by our team.",
  },
];

export default function PaymentPostingPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema(breadcrumbItems)} />
      <JsonLd
        data={serviceSchema(
          "Payment Posting",
          "Payment posting and reconciliation for independent US physician practices, matched to contracted rates with every exception flagged for follow-up.",
          "payment-posting",
          "/payment-posting"
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
              Every Payment, Matched and Verified
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-charcoal">
              A claim being paid isn't the same as being paid correctly.
              Payment posting is where that gets checked — every payment
              matched to the right claim, verified against what was
              actually contracted, with every exception flagged instead
              of buried.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button href="/get-your-free-audit" variant="gold">
                Reconcile Your Payments
              </Button>
              <Button href="/services" variant="ghost">
                See every service
              </Button>
            </div>
            <OpsTrustBadges />
          </div>
          <div className="mt-10 max-w-2xl">
            <RevenueCycleJourney currentStage="payment-posting" />
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
            Where Reconciliation Usually Goes Wrong
          </h2>
          <p className="mt-4 text-base leading-relaxed text-charcoal">
            A payment posted quickly but carelessly can look like clean
            revenue while quietly hiding an underpayment or a
            misclassified denial. Once it's posted and the batch is
            closed, that mistake often stops getting looked at.
          </p>
        </div>
        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          {reconciliationIssues.map(({ title, body }, index) => (
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
            What Payment Posting Actually Is
          </h2>
          <p className="mt-4 text-base leading-relaxed text-charcoal">
            Once a payer processes a{" "}
            <Link href="/prior-authorization" className="font-semibold text-teal-text underline underline-offset-4 hover:text-violet">
              submitted claim
            </Link>
            , they send back a remittance — a record of what they're
            paying, what they're not, and why. Payment posting is
            recording that remittance accurately against the right claim,
            confirming the amount matches what was actually contracted,
            and routing anything that doesn't match to the right place.
          </p>
        </div>
        <div className="mt-10 max-w-2xl">
          <h3 className="font-display text-xl font-semibold text-violet">
            ERA and EOB, and Why the Difference Matters
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-charcoal">
            Payers communicate what they're paying in one of two forms. The
            difference affects how quickly and reliably it can be posted.
          </p>
        </div>
        <div className="mt-6">
          <ComparisonTable
            columns={remittanceComparison.columns}
            rows={remittanceComparison.rows}
            caption="Comparison of ERA and EOB remittance formats"
          />
        </div>
      </Section>

      {/* 4. Technology Enablement — honest, tier-labeled */}
      <Section className="bg-white" id="technology">
        <div className="max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-wider text-teal-text">
            Technology Enablement
          </span>
          <h2 className="mt-2 font-display text-3xl font-semibold text-violet sm:text-4xl">
            Where Technology Fits Into Posting Today
          </h2>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-charcoal">
            Every payment today is matched and verified by our team — not
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
                title="Payment Posting Automation, In Progress"
                description="Genuinely underway. Not yet part of how your payments are actually posted and reconciled — every payment today is matched and verified by a person."
              />
              <TierCard
                tier="future-vision"
                title="Future Vision"
                description="Automated matching and exception-flagging the moment a remittance arrives, with our team always confirming anything that doesn't cleanly reconcile."
              />
            </TierLadder>
          </Reveal>
          <p className="mt-6 max-w-2xl text-xs leading-relaxed text-charcoal/70">
            The <Link href="/technology" className="font-semibold text-teal-text underline underline-offset-4 hover:text-violet">Technology page</Link> has the full breakdown, tier by tier.
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
            Claravox's Payment Posting Workflow
          </h2>
        </div>
        <div className="mt-14">
          <Timeline items={workflow} orientation="horizontal" />
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-3">
          <div className="flex items-start gap-3">
            <Search className="mt-1 h-6 w-6 shrink-0 text-teal-deep" aria-hidden="true" />
            <p className="text-sm leading-relaxed text-charcoal">
              Every posted payment is checked against the contracted rate, not just recorded as received.
            </p>
          </div>
          <div className="flex items-start gap-3">
            <FlagTriangleRight className="mt-1 h-6 w-6 shrink-0 text-teal-deep" aria-hidden="true" />
            <p className="text-sm leading-relaxed text-charcoal">
              Anything that doesn't match — an underpayment, a denial, an unexpected adjustment — is flagged and routed, not filed away.
            </p>
          </div>
          <div className="flex items-start gap-3">
            <CheckCircle2 className="mt-1 h-6 w-6 shrink-0 text-teal-deep" aria-hidden="true" />
            <p className="text-sm leading-relaxed text-charcoal">
              A batch isn't considered closed until every exception in it has an assigned next step.
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
            A signed Business Associate Agreement covers every remittance we process, without exception.
          </SecurityBlock>
          <ComplianceBlock title="US Registered Entity">
            Every payment we post is handled by a US registered company. See <Link href="/compliance-and-security" className="font-semibold text-teal-text underline underline-offset-4 hover:text-violet">Compliance &amp; Security</Link> for the full picture.
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
            See What's Sitting Unreconciled Right Now
          </h2>
          <p className="max-w-xl text-base text-white/80">
            A free consultation shows exactly where payments and contracted
            rates don't line up today.
          </p>
          <Button href="/get-your-free-audit" variant="gold">
            Reconcile Your Payments
          </Button>
          <div className="mt-2 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm">
            <Link href="/medical-billing" className="text-white/70 underline underline-offset-4 hover:text-white">
              Medical Billing
            </Link>
            <Link href="/prior-authorization" className="text-white/70 underline underline-offset-4 hover:text-white">
              Prior Authorization
            </Link>
            <Link href="/denial-management" className="text-white/70 underline underline-offset-4 hover:text-white">
              Denial Management
            </Link>
            <Link href="/accounts-receivable" className="text-white/70 underline underline-offset-4 hover:text-white">
              Accounts Receivable
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
