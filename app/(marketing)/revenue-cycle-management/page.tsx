import type { Metadata } from "next";
import Link from "next/link";
import {
  ShieldCheck,
  CalendarCheck,
  FileWarning,
  Tag,
  FileCheck2,
  Banknote,
  AlertTriangle,
  RefreshCcw,
  Puzzle,
  Users,
  Eye as EyeIcon,
  Gauge,
  ClipboardList,
  Scale,
} from "lucide-react";
import { Button } from "@/components/Button";
import { Section } from "@/components/Section";
import { Card } from "@/components/Card";
import { JsonLd } from "@/components/JsonLd";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { Reveal } from "@/components/ui/motion/Reveal";
import { KPICard } from "@/components/ui/KPICard";
import { FAQAccordion } from "@/components/FAQAccordion";
import { RevenueCycleJourney } from "@/components/ui/RevenueCycleJourney";
import { TierCard, TierLadder } from "@/components/ui/TierBadge";
import { OpsWhyClaravox } from "@/components/ops/OpsWhyClaravox";
import { OpsTrustBadges } from "@/components/ops/OpsTrustBadges";
import { breadcrumbSchema, faqSchema, serviceSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Revenue Cycle Management Services, Claravox Healthcare",
  description:
    "End-to-end revenue cycle management for independent US physician practices, from credentialing and eligibility through payment posting, denial management, and AR follow-up.",
  alternates: { canonical: "/revenue-cycle-management" },
};

const breadcrumbItems = [
  { name: "Home", path: "/" },
  { name: "Revenue Cycle Management", path: "/revenue-cycle-management" },
];

const challenges = [
  {
    icon: Puzzle,
    title: "Stages Handled By Different Vendors",
    body: "Credentialing, billing, and AR split across separate vendors who never talk to each other about the same account.",
  },
  {
    icon: AlertTriangle,
    title: "Denials Never Traced to Root Cause",
    body: "A denial gets appealed and closed, but the eligibility or coding gap that caused it repeats on the next claim.",
  },
  {
    icon: Users,
    title: "No Single Owner Of The Cycle",
    body: "No one person can explain why a specific account's revenue is behaving the way it is, end to end.",
  },
];

const benefits = [
  {
    icon: Gauge,
    title: "Reduced Administrative Burden",
    body: "One system to work with instead of coordinating several disconnected vendors.",
  },
  {
    icon: EyeIcon,
    title: "Improved Operational Visibility",
    body: "A clear view of where revenue actually moves through the cycle, not eight separate snapshots.",
  },
  {
    icon: ClipboardList,
    title: "Better Workflow Coordination",
    body: "A denial traced upstream can actually change how eligibility or coding is handled next time.",
  },
  {
    icon: Scale,
    title: "Revenue Optimisation",
    body: "Root causes addressed across the cycle, not just the symptom that showed up first.",
  },
];

const faqItems = [
  {
    question: "What's the difference between medical billing and revenue cycle management?",
    answer:
      "Medical billing is one part of the revenue cycle — turning an encounter into a submitted claim. Revenue cycle management is the complete process: credentialing, eligibility, prior authorization, coding, billing, payment posting, denial management, and AR follow-up, working together as one system rather than separate tasks.",
  },
  {
    question: "Do I need all of these services, or can I start with one?",
    answer:
      "Most practices start wherever the pain is most immediate — often billing or AR — and expand from there. Every service is built to work together, but none of them require the others to begin.",
  },
  {
    question: "Why organize this around a cycle instead of a list of services?",
    answer:
      "Because that's how the work actually happens. A denial traced to its root cause improves eligibility checks; a coding insight reduces future denials. Treating these as one connected system, not eight separate tasks, is the whole point.",
  },
];

const cycleStages = [
  { icon: ShieldCheck, title: "Credentialing", body: "Payer enrollment, before the cycle can even begin.", href: "/credentialing" },
  { icon: CalendarCheck, title: "Eligibility Verification", body: "Coverage confirmed before the appointment.", href: "/eligibility-verification" },
  { icon: FileWarning, title: "Prior Authorization", body: "Approval secured before the service is delivered.", href: "/prior-authorization" },
  { icon: Tag, title: "Medical Coding", body: "The encounter translated into accurate codes.", href: "/medical-coding" },
  { icon: FileCheck2, title: "Medical Billing", body: "Charge entry and claim submission, owned end to end.", href: "/medical-billing" },
  { icon: Banknote, title: "Payment Posting", body: "Every payment matched and verified against contract.", href: "/payment-posting" },
  { icon: AlertTriangle, title: "Denial Management", body: "Root-cause analysis, appeals, and upstream feedback.", href: "/denial-management" },
  { icon: RefreshCcw, title: "AR Follow-Up", body: "Every open balance worked by age, escalated when it stalls.", href: "/accounts-receivable" },
];

export default function RevenueCycleManagementPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema(breadcrumbItems)} />
      <JsonLd data={faqSchema(faqItems)} />
      <JsonLd
        data={serviceSchema(
          "Revenue Cycle Management",
          "End-to-end revenue cycle management for independent US physician practices, spanning credentialing, eligibility, prior authorization, coding, billing, payment posting, denial management, and AR follow-up.",
          "revenue-cycle-management",
          "/revenue-cycle-management"
        )}
      />

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
              Revenue Cycle Management, End to End
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-charcoal">
              Revenue cycle management is the complete process of getting a
              healthcare provider paid accurately — from confirming a
              patient's coverage through final collection — treated as one
              connected system rather than a set of separate tasks handed
              between different people.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button href="/get-your-free-audit" variant="gold">
                Map Your Revenue Cycle
              </Button>
              <Button href="/services" variant="ghost">
                See every service
              </Button>
            </div>
            <OpsTrustBadges />
          </div>
          <div className="mt-10 max-w-2xl">
            <RevenueCycleJourney
              coveredStages={[
                "eligibility",
                "prior-authorization",
                "coding",
                "charge-entry",
                "claim-submission",
                "payment-posting",
                "denial-management",
                "ar-follow-up",
              ]}
              coverageLabel="Revenue Cycle Management"
            />
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
            Where A Fragmented Cycle Breaks Down
          </h2>
        </div>
        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
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
      </Section>

      {/* 3. Claravox Solution */}
      <Section className="bg-ivory">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-wider text-teal-text">
            The Claravox Solution
          </span>
          <h2 className="mt-2 font-display text-3xl font-semibold text-violet sm:text-4xl">
            Why We Treat This As One System
          </h2>
          <p className="mt-4 text-base leading-relaxed text-charcoal">
            Most billing vendors hand these stages to different people, or
            different vendors entirely — which is exactly where the
            feedback loop breaks. When one team owns the whole cycle, a
            denial traced to its root cause can actually change how
            eligibility or coding is handled next time.{" "}
            <Link
              href="/about"
              className="font-semibold text-teal-text underline underline-offset-4 hover:text-violet"
            >
              See the philosophy behind this.
            </Link>
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3">
          <KPICard label="Denials Traced to Eligibility" value={31} suffix="%" illustrative />
          <KPICard label="AR Aged Past 90 Days" value={22} suffix="%" illustrative />
          <KPICard label="Denials From Coding Specificity" value={18} suffix="%" illustrative />
        </div>
      </Section>

      {/* 4. Technology Enablement */}
      <Section className="bg-white" id="technology">
        <div className="max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-wider text-teal-text">
            Technology Enablement
          </span>
          <h2 className="mt-2 font-display text-3xl font-semibold text-violet sm:text-4xl">
            Where Technology Fits Across The Cycle
          </h2>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-charcoal">
            Every stage above is handled by our team today, not software
            alone. Here is exactly what's true about automation across the
            cycle right now.
          </p>
        </div>
        <div className="mt-10">
          <Reveal effect="slide-up">
            <TierLadder>
              <TierCard
                tier="tested-internally"
                title="Front-Office Workflow Automation"
                description="Scheduling, patient communication, and intake automation, built on our own systems and live in active daily use across our own operations today."
              />
              <TierCard
                tier="active-development"
                title="Automation Across The Cycle, In Progress"
                description="Eligibility, prior authorization, coding, claim scrubbing, AR, payment posting, and denial management automation are genuinely underway — none of it is live in how your accounts are handled yet."
              />
              <TierCard
                tier="future-vision"
                title="Future Vision"
                description="An intelligent operations ecosystem where automation strengthens accuracy and speed at every stage, with our team's judgment always in the loop."
              />
            </TierLadder>
          </Reveal>
          <p className="mt-6 max-w-2xl text-xs leading-relaxed text-charcoal/70">
            The <Link href="/technology" className="font-semibold text-teal-text underline underline-offset-4 hover:text-violet">Technology page</Link> covers every tier in full, including what's commercially available today.
          </p>
        </div>
      </Section>

      {/* 5. Operational Workflow — the cycle, stage by stage */}
      <Section className="bg-ivory">
        <div className="max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-wider text-teal-text">
            Operational Workflow
          </span>
          <h2 className="mt-2 font-display text-3xl font-semibold text-violet sm:text-4xl">
            The Complete Cycle, Stage By Stage
          </h2>
          <p className="mt-4 text-base leading-relaxed text-charcoal">
            Each stage below is its own detailed page. This is the map —
            follow any stage for the full breakdown.
          </p>
        </div>
        <div className="relative mt-14">
          <div
            aria-hidden="true"
            className="absolute left-6 top-6 hidden h-[calc(100%-3rem)] w-px bg-mist lg:block"
          />
          <ol className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            {cycleStages.map(({ icon: Icon, title, body, href }, index) => (
              <Reveal key={title} effect="slide-up" delay={index * 60}>
                <li>
                  <Link
                    href={href}
                    className="group flex items-start gap-4 rounded-lg border border-mist bg-white p-5 shadow-resting transition-all duration-200 ease-[var(--ease-out-premium)] hover:-translate-y-1 hover:border-teal-deep/40 hover:shadow-low"
                  >
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-violet font-data text-sm font-bold text-white">
                      {index + 1}
                    </span>
                    <span>
                      <span className="flex items-center gap-2 font-display text-base font-semibold text-violet group-hover:underline">
                        <Icon className="h-4 w-4 text-teal-deep" aria-hidden="true" />
                        {title}
                      </span>
                      <span className="mt-1 block text-sm leading-relaxed text-charcoal">{body}</span>
                    </span>
                  </Link>
                </li>
              </Reveal>
            ))}
          </ol>
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
            See Your Own Cycle, Stage by Stage
          </h2>
          <p className="max-w-xl text-base text-white/80">
            A free consultation shows exactly where your practice's cycle
            is losing revenue today.
          </p>
          <Button href="/get-your-free-audit" variant="gold">
            Map Your Revenue Cycle
          </Button>
        </div>
      </section>
    </>
  );
}
