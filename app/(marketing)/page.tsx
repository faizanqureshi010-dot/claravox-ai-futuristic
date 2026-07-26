import type { Metadata } from "next";
import Link from "next/link";
import {
  Tag,
  FileCheck2,
  RefreshCcw,
  BadgeCheck,
  BarChart3,
  Cpu,
  Stethoscope,
  ShieldCheck,
  MapPinned,
  Workflow,
  Landmark,
  TrendingUp,
  Sparkles,
  Route,
  LayoutDashboard,
  BrainCircuit,
  Target,
  Eye,
  Zap,
  HeartHandshake,
  Activity,
  HeartPulse,
  Bone,
  Brain,
  Pill,
  Dumbbell,
  Ambulance,
  Users,
  ArrowRight,
  AlertTriangle,
  Hourglass,
  ClipboardList,
  Puzzle,
  UserRound,
} from "lucide-react";
import { Button } from "@/components/Button";
import { Section } from "@/components/Section";
import { TrustStrip } from "@/components/TrustStrip";
import { Card } from "@/components/Card";
import { FAQAccordion } from "@/components/FAQAccordion";
import { LeadForm } from "@/components/LeadForm";
import { NewsletterSignup } from "@/components/NewsletterSignup";
import { JsonLd } from "@/components/JsonLd";
import { HeroComposition } from "@/components/HeroComposition";
import { faqSchema } from "@/lib/schema";
import { Timeline, type TimelineIconName } from "@/components/ui/Timeline";
import { Reveal } from "@/components/ui/motion/Reveal";

export const metadata: Metadata = {
  title: "Claravox Healthcare, Medical Billing and Revenue Cycle Management",
  description:
    "Claravox Healthcare recovers revenue lost to denied claims, slow AR, and billing inefficiency for independent US physician practices. Book a free consultation, no commitment.",
  alternates: { canonical: "/" },
};

const heroTrustItems = [
  { icon: Cpu, label: "Technology-enabled Operations" },
  { icon: Stethoscope, label: "Healthcare Expertise" },
  { icon: ShieldCheck, label: "Secure Digital Processes" },
  { icon: Target, label: "Operational Excellence" },
  { icon: MapPinned, label: "US Healthcare Focus" },
];

// 1. Trust Section
const trustCards = [
  {
    icon: Cpu,
    title: "Technology-Enabled Operations",
    body: "Modern workflow automation supports every account, without replacing the people who run it.",
  },
  {
    icon: Workflow,
    title: "Revenue Cycle Expertise",
    body: "Every stage of the cycle handled by people who know medical billing, not a generic support desk.",
  },
  {
    icon: ShieldCheck,
    title: "Secure Digital Workflows",
    body: "HIPAA-aligned processes, with a Business Associate Agreement on every contract.",
  },
  {
    icon: HeartHandshake,
    title: "Human + AI Collaboration",
    body: "Automation supports our team's judgment on your account. It never replaces it.",
  },
];

// 2. Value Proposition — directly answers "why hire Claravox," pain point
// by pain point. No invented statistics or client-specific claims: every
// line describes the general approach, not a measured result.
const valuePropositions = [
  {
    icon: AlertTriangle,
    problem: "Denied Claims",
    solution:
      "Every claim is checked against known denial patterns before it's ever submitted, by a billing team backed by workflow automation, not caught after a payer sends it back.",
  },
  {
    icon: Hourglass,
    problem: "Slow Reimbursement",
    solution:
      "Every open balance is worked by age, escalated when it stalls, so payment doesn't just sit waiting on a payer's own schedule.",
  },
  {
    icon: ClipboardList,
    problem: "Administrative Overload",
    solution:
      "Front-office workflow automation, already live in our own operations, removes repetitive scheduling and intake work from your staff's day, without removing your staff.",
  },
  {
    icon: Puzzle,
    problem: "Fragmented Systems",
    solution:
      "One team owns the whole revenue cycle as one connected system, instead of billing, coding, and AR living in separate tools that don't talk to each other.",
  },
];

// 3. Healthcare Operations Overview
const operationsGroups = [
  {
    heading: "Revenue Cycle",
    items: [
      {
        icon: FileCheck2,
        title: "Medical Billing",
        body: "Clean claims, built right the first time.",
        href: "/medical-billing",
      },
      {
        icon: Tag,
        title: "Medical Coding",
        body: "Accurate ICD-10, CPT, and HCPCS coding that supports compliant reimbursement.",
        href: "/medical-coding",
      },
      {
        icon: RefreshCcw,
        title: "Denial Management",
        body: "Denials resolved, and kept from recurring.",
        href: "/denial-management",
      },
    ],
  },
  {
    heading: "Patient Access",
    items: [
      {
        icon: BadgeCheck,
        title: "Credentialing",
        body: "Payer enrollment handled end to end.",
        href: "/credentialing",
      },
      {
        icon: ShieldCheck,
        title: "Eligibility Verification",
        body: "Coverage confirmed before a claim is ever filed.",
        href: "/eligibility-verification",
      },
      {
        icon: FileCheck2,
        title: "Prior Authorization",
        body: "Approvals secured before care is delivered.",
        href: "/prior-authorization",
      },
    ],
  },
  {
    heading: "Financial Operations",
    items: [
      {
        icon: Landmark,
        title: "Payment Posting",
        body: "Payments reconciled against what was billed.",
        href: "/payment-posting",
      },
      {
        icon: TrendingUp,
        title: "Accounts Receivable",
        body: "Aging claims followed until they're resolved.",
        href: "/accounts-receivable",
      },
      {
        icon: BarChart3,
        title: "Revenue Optimisation",
        body: "Ongoing visibility into denials and collections, so revenue leaks get found and fixed.",
        href: undefined as string | undefined,
      },
    ],
  },
];

// 4. AI Solutions Preview
const aiFeatured = {
  icon: Sparkles,
  title: "AI Appointment Agent",
  badge: "Production Ready",
  body: "Our production-ready, HIPAA-compliant booking agent, live and handling real scheduling today.",
  href: "/technology",
};

const aiPreviewItems = [
  {
    icon: Workflow,
    title: "Workflow Automation",
    body: "Front-office automation, live and in active use in our own operations today.",
    badge: "Live In Our Operations",
  },
  {
    icon: Route,
    title: "Intelligent Task Routing",
    body: "Work routed to the right process automatically, genuinely underway.",
    badge: "Active Development",
  },
  {
    icon: LayoutDashboard,
    title: "Operational Dashboards",
    body: "Clearer visibility into denials and collections as this capability matures.",
    badge: "Active Development",
  },
  {
    icon: BrainCircuit,
    title: "AI-Assisted Processes",
    body: "AI-assisted coding and claim scrubbing, part of a roadmap we're building in the open.",
    badge: "Active Development",
  },
];

// 5. Use Cases — illustrative scenarios, not real client stories. No
// names, no client-specific numbers: each card describes a practice
// shape and the general problem-to-outcome path for that shape.
const useCases = [
  {
    icon: UserRound,
    practiceType: "Solo Physician Practice",
    scenario:
      "One provider, no dedicated billing staff. Billing gets handled in the gaps between patients, or not at all.",
    outcome:
      "Claravox becomes the entire billing department, end to end. Every claim is coded, submitted, and followed up on by a real team, so time goes back to patients instead of paperwork.",
  },
  {
    icon: Users,
    practiceType: "Multi-Provider Clinic",
    scenario:
      "Two to five providers, billing split across several front-desk staff. No single person can answer why a specific claim is stuck.",
    outcome:
      "One team owns the whole cycle across every provider, so billing quality stays consistent regardless of which provider or which staff member is involved.",
  },
  {
    icon: Stethoscope,
    practiceType: "Specialty Practice",
    scenario:
      "Documentation and coding specificity matter more than usual. A generic biller misses the nuance a specialty actually requires.",
    outcome:
      "Coding is treated as its own discipline, done by people trained in it and checked by a second reviewer, so specificity the documentation supports doesn't get left on the table.",
  },
  {
    icon: TrendingUp,
    practiceType: "Growing Practice",
    scenario:
      "A billing process that worked fine for one provider starts breaking down as the practice adds more.",
    outcome:
      "A partnership structured to scale with the practice, so adding a provider means extending an existing system, not rebuilding the billing process from scratch.",
  },
];

// 6. Why Claravox
const whyOutcomes = [
  {
    icon: Target,
    title: "Accurate Revenue Capture",
    body: "Every claim checked against denial patterns before it goes out, not after.",
  },
  {
    icon: Eye,
    title: "Operational Transparency",
    body: "You always know exactly where your revenue stands, not just what was collected.",
  },
  {
    icon: Zap,
    title: "Faster Administrative Workflows",
    body: "Less time on paperwork your front desk shouldn't have to carry alone.",
  },
  {
    icon: TrendingUp,
    title: "Scalable Support",
    body: "A partner structured to grow with your practice, not one you'll outgrow.",
  },
  {
    icon: Cpu,
    title: "Modern Technology Integration",
    body: "Technology that fits into what you already use, not a platform switch.",
  },
  {
    icon: HeartHandshake,
    title: "Long-Term Partnership",
    body: "Direct access to the person handling your account, month after month.",
  },
];

// 7. Our Process
const processStages: { title: string; description: string; icon: TimelineIconName }[] = [
  {
    title: "Discovery",
    description: "A free review of your current AR and denial patterns. No commitment required.",
    icon: "search",
  },
  {
    title: "Assessment",
    description: "A clear picture of where revenue is actually being lost, and why.",
    icon: "clipboardCheck",
  },
  {
    title: "Implementation",
    description: "We integrate with your existing EHR or practice management system. No platform switch required.",
    icon: "rocket",
  },
  {
    title: "Optimisation",
    description: "Denial patterns addressed at the source, not just resubmitted one by one.",
    icon: "slidersHorizontal",
  },
  {
    title: "Continuous Support",
    description: "Monthly performance reviews covering denial rate, AR aging, and collections.",
    icon: "lifeBuoy",
  },
];

// 8. Industries We Support
const industries = [
  { title: "Family Medicine", icon: Stethoscope },
  { title: "Internal Medicine", icon: Activity },
  { title: "Cardiology", icon: HeartPulse },
  { title: "Dermatology", icon: Sparkles },
  { title: "Orthopaedics", icon: Bone },
  { title: "Neurology", icon: Brain },
  { title: "Behavioural Health", icon: HeartHandshake },
  { title: "Pain Management", icon: Pill },
  { title: "Physical Therapy", icon: Dumbbell },
  { title: "Urgent Care", icon: Ambulance },
  { title: "Multi-specialty Practices", icon: Users },
];

// 9. Featured Insights — real, existing pages standing in for articles.
// No fictional posts: each card points at genuine content that already
// covers its subject, per the project's no-fabricated-content standard.
const insights = [
  {
    icon: Workflow,
    category: "Revenue Cycle Guides",
    title: "Understanding the Revenue Cycle",
    excerpt: "A plain-language look at every stage between a patient visit and a paid claim.",
    href: "/revenue-cycle-management",
  },
  {
    icon: ShieldCheck,
    category: "Compliance Resources",
    title: "What HIPAA-Aligned Billing Actually Means",
    excerpt: "Where compliance responsibility sits between your practice and your billing partner.",
    href: "/compliance-and-security",
  },
  {
    icon: Cpu,
    category: "Technology & Automation",
    title: "How Claravox Uses Technology, Honestly",
    excerpt: "The six-tier system behind every technology claim we make, and why it matters.",
    href: "/technology",
  },
];

const faqItems = [
  {
    question: "Is my patient data safe with an offshore billing partner?",
    answer:
      "Claravox is a US registered company, and every client signs a Business Associate Agreement before any data access begins. Our processes are built around HIPAA aligned controls, not treated as an afterthought.",
  },
  {
    question: "Do we have to switch our EHR or practice management system?",
    answer: "No. Claravox integrates with what you already use.",
  },
  {
    question: "What does the free consultation actually involve?",
    answer:
      "We review your recent claims and AR data and show you your actual denial rate and aging, with no commitment required to see the results.",
  },
  {
    question: "How is pricing structured?",
    answer:
      "A percentage of what we collect for you, starting at 3.5 percent for larger practices, scaled fairly for smaller ones. No flat setup fees.",
  },
  {
    question: "How long does onboarding take?",
    answer: "Most practices are fully live within a few weeks of signing, not months.",
  },
];

export default function HomePage() {
  return (
    <>
      <JsonLd data={faqSchema(faqItems)} />

      {/* 1. Hero, the one signature animated moment on this page */}
      <section data-cursor-particles className="relative overflow-hidden bg-ivory">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-20 -top-32 h-[420px] w-[420px] rounded-full bg-royal/25 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-32 -left-24 h-96 w-96 rounded-full bg-teal-deep/20 blur-3xl"
        />
        <div className="container-page relative grid grid-cols-1 items-start gap-14 py-20 lg:grid-cols-[1fr_1.1fr] lg:gap-8 lg:py-28">
          <div className="max-w-2xl">
            <h1 className="font-display text-4xl font-semibold leading-tight text-violet sm:text-5xl lg:text-6xl">
              Stop Losing Revenue To Claims You{" "}
              <br className="hidden lg:block" />
              Never See.
            </h1>
            <div className="mt-6 h-px w-20 bg-gold" aria-hidden="true" />
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-charcoal">
              Claravox Healthcare is a technology-enabled Revenue Cycle Management
              and Medical Billing partner, recovering what denied claims, slow AR,
              and billing inefficiency are costing your practice, backed by a
              team that actually answers the phone.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Button
                href="mailto:info@claravoxhealthcare.com?subject=Consultation%20Request%20-%20Claravox%20Healthcare"
                variant="gold"
              >
                Book a Consultation
              </Button>
              <Button
                href="mailto:info@claravoxhealthcare.com?subject=Pricing%20Request%20-%20Claravox%20Healthcare"
                variant="secondary"
              >
                Request Pricing
              </Button>
            </div>
            <div className="mt-4">
              <Link
                href="/technology"
                className="text-sm font-medium text-violet/80 underline decoration-violet/30 underline-offset-4 hover:text-violet"
              >
                Explore AI Solutions
              </Link>
            </div>
            <p className="mt-4 text-xs text-charcoal/70">
              Free. No commitment. No sales call required to see your numbers.
            </p>

            {/* In-hero trust strip, immediately beneath the CTA group */}
            <ul className="mt-8 grid grid-cols-2 gap-x-4 gap-y-3 sm:grid-cols-3">
              {heroTrustItems.map(({ icon: Icon, label }) => (
                <li key={label} className="flex items-center gap-2">
                  <Icon className="h-4 w-4 shrink-0 text-teal-deep" aria-hidden="true" />
                  <span className="text-xs font-medium leading-tight text-charcoal">{label}</span>
                </li>
              ))}
            </ul>
          </div>
          <HeroComposition />
        </div>
      </section>

      {/* 2. Trusted by Modern Healthcare Practices — the Hero Trust Strip,
         immediately followed by a dedicated trust section. */}
      <TrustStrip />

      <Section className="bg-white">
        <div className="max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-wider text-teal-text">
            Trusted By Modern Healthcare Practices
          </span>
          <h2 className="mt-2 font-display text-3xl font-semibold text-violet sm:text-4xl">
            Why US Healthcare Practices Trust Claravox
          </h2>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {trustCards.map(({ icon: Icon, title, body }, index) => (
            <Reveal key={title} effect="slide-up" delay={index * 100}>
              <Card className="h-full">
                <Icon className="h-7 w-7 text-violet" aria-hidden="true" />
                <h3 className="mt-4 font-display text-lg font-semibold text-violet">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-charcoal">{body}</p>
              </Card>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* 3. Value Proposition — directly answers "why hire Claravox," one
         pain point at a time. Reuses the same Card/Reveal pattern as every
         other card grid on this page. */}
      <Section className="bg-ivory">
        <div className="max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-wider text-teal-text">
            Why Hire Claravox
          </span>
          <h2 className="mt-2 font-display text-3xl font-semibold text-violet sm:text-4xl">
            The Specific Problems We're Built to Solve
          </h2>
          <p className="mt-4 text-base leading-relaxed text-charcoal">
            Not a general pitch. Here's exactly how RCM expertise paired
            with workflow automation addresses what's actually costing your
            practice revenue today.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {valuePropositions.map(({ icon: Icon, problem, solution }, index) => (
            <Reveal key={problem} effect="slide-up" delay={index * 100}>
              <Card className="h-full">
                <div className="flex items-center gap-3">
                  <Icon className="h-6 w-6 shrink-0 text-teal-deep" aria-hidden="true" />
                  <h3 className="font-display text-lg font-semibold text-violet">{problem}</h3>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-charcoal">{solution}</p>
              </Card>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* 4. Healthcare Operations Overview */}
      <Section className="bg-cloud">
        <div className="max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-wider text-teal-text">
            Healthcare Operations
          </span>
          <h2 className="mt-2 font-display text-3xl font-semibold text-violet sm:text-4xl">
            Every Stage Of Your Revenue Cycle, Handled
          </h2>
        </div>
        <div className="mt-12 space-y-12">
          {operationsGroups.map((group) => (
            <div key={group.heading}>
              <p className="text-xs font-semibold uppercase tracking-wider text-charcoal/60">{group.heading}</p>
              <div className="mt-4 grid grid-cols-1 gap-6 sm:grid-cols-3">
                {group.items.map(({ icon: Icon, title, body, href }) => (
                  <Card key={title} className="h-full">
                    <Icon className="h-7 w-7 text-violet" aria-hidden="true" />
                    <h3 className="mt-4 font-display text-lg font-semibold text-violet">{title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-charcoal">{body}</p>
                    {href && (
                      <Link
                        href={href}
                        className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-teal-text hover:text-violet"
                      >
                        Learn More <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                      </Link>
                    )}
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="mt-10">
          <Link
            href="/revenue-cycle-management"
            className="text-sm font-semibold text-teal-text underline underline-offset-4 hover:text-violet"
          >
            See the full revenue cycle we manage
          </Link>
        </div>
      </Section>

      {/* 5. AI Solutions Preview */}
      <Section className="relative overflow-hidden bg-white">
        <div className="max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-wider text-teal-text">AI Solutions</span>
          <h2 className="mt-2 font-display text-3xl font-semibold text-violet sm:text-4xl">
            Technology That Supports Your Billing Team, Never Replaces It
          </h2>
          <p className="mt-4 text-base leading-relaxed text-charcoal">
            Claravox is technology-enabled, not an AI-only company. Every capability below is
            labeled by exactly how far along it actually is.
          </p>
        </div>

        <div className="relative mt-12">
          {/* Connector line tying the featured card to the ecosystem grid,
             echoing the Hero's composition aesthetic. */}
          <svg
            aria-hidden="true"
            viewBox="0 0 100 40"
            preserveAspectRatio="none"
            className="pointer-events-none absolute -top-6 left-0 hidden h-10 w-full lg:block"
          >
            <path
              d="M 15 40 C 15 15, 50 15, 50 15 C 50 15, 85 15, 85 40"
              fill="none"
              stroke="var(--color-royal)"
              strokeOpacity="0.25"
              strokeWidth="0.5"
              strokeDasharray="1.5 2"
            />
          </svg>

          <Reveal effect="scale">
            <Link
              href={aiFeatured.href}
              className="group/featured relative flex flex-col items-start gap-4 overflow-hidden rounded-xl bg-gradient-to-br from-violet to-royal p-8 text-white shadow-raised transition-transform duration-200 ease-[var(--ease-out-premium)] hover:-translate-y-1 sm:flex-row sm:items-center"
            >
              <span
                aria-hidden="true"
                className="pointer-events-none absolute -right-10 -top-16 h-48 w-48 rounded-full bg-white/10 blur-3xl"
              />
              <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-lg bg-white/15">
                <aiFeatured.icon className="h-7 w-7" aria-hidden="true" />
              </span>
              <span className="relative">
                <span className="inline-flex items-center gap-1 rounded-full bg-gold px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-violet">
                  {aiFeatured.badge}
                </span>
                <span className="mt-2 block font-display text-xl font-semibold">{aiFeatured.title}</span>
                <span className="mt-1 block max-w-xl text-sm leading-relaxed text-white/85">{aiFeatured.body}</span>
              </span>
            </Link>
          </Reveal>

          <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {aiPreviewItems.map(({ icon: Icon, title, body, badge }, index) => (
              <Reveal key={title} effect="slide-up" delay={index * 100}>
                <Card className="h-full">
                  <div className="flex items-start justify-between gap-2">
                    <Icon className="h-7 w-7 text-teal-deep" aria-hidden="true" />
                    <span className="rounded-full border border-dashed border-violet/40 bg-violet/5 px-2 py-0.5 font-data text-[9px] font-semibold uppercase tracking-wide text-violet">
                      {badge}
                    </span>
                  </div>
                  <h3 className="mt-4 font-display text-base font-semibold text-violet">{title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-charcoal">{body}</p>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>

        <div className="mt-10">
          <Link
            href="/technology"
            className="text-sm font-semibold text-teal-text underline underline-offset-4 hover:text-violet"
          >
            See the full technology framework
          </Link>
        </div>
      </Section>

      {/* 6. Use Cases — illustrative scenarios, explicitly labeled as such.
         No client names, no client-specific numbers: each card describes a
         practice shape and a general problem-to-outcome path. */}
      <Section className="bg-white">
        <div className="max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-wider text-teal-text">
            Illustrative Scenarios
          </span>
          <h2 className="mt-2 font-display text-3xl font-semibold text-violet sm:text-4xl">
            Where This Fits Your Practice
          </h2>
          <p className="mt-4 text-base leading-relaxed text-charcoal">
            Four practice shapes, and the general path Claravox follows for
            each. These are illustrative scenarios, not specific client
            stories.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {useCases.map(({ icon: Icon, practiceType, scenario, outcome }, index) => (
            <Reveal key={practiceType} effect="slide-up" delay={index * 100}>
              <Card className="flex h-full flex-col">
                <Icon className="h-7 w-7 text-violet" aria-hidden="true" />
                <h3 className="mt-4 font-display text-lg font-semibold text-violet">{practiceType}</h3>
                <p className="mt-3 text-sm leading-relaxed text-charcoal">{scenario}</p>
                <div className="mt-4 border-t border-mist pt-4">
                  <span className="text-xs font-semibold uppercase tracking-wider text-teal-text">
                    The Claravox Path
                  </span>
                  <p className="mt-2 text-sm leading-relaxed text-charcoal">{outcome}</p>
                </div>
              </Card>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* 7. Why Claravox */}
      <Section className="bg-cloud">
        <div className="max-w-2xl">
          <h2 className="font-display text-3xl font-semibold text-violet sm:text-4xl">
            Why Claravox
          </h2>
          <p className="mt-4 text-base leading-relaxed text-charcoal">
            Not a feature list. The outcomes practices actually feel.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {whyOutcomes.map(({ icon: Icon, title, body }, index) => (
            <Reveal key={title} effect="slide-up" delay={index * 100}>
              <Card className="h-full">
                <Icon className="h-7 w-7 text-violet" aria-hidden="true" />
                <h3 className="mt-4 font-display text-lg font-semibold text-violet">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-charcoal">{body}</p>
              </Card>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* 8. Our Process */}
      <Section className="bg-white">
        <div className="max-w-2xl">
          <h2 className="font-display text-3xl font-semibold text-violet sm:text-4xl">
            Five Stages, Starting With Proof, Not A Contract
          </h2>
        </div>
        <div className="mt-14">
          <Timeline items={processStages} orientation="horizontal" />
        </div>
      </Section>

      {/* 9. Industries We Support */}
      <section className="bg-royal">
        <div className="container-page py-16 text-center md:py-20">
          <span className="text-xs font-semibold uppercase tracking-wider text-gold-text">
            Industries We Support
          </span>
          <h2 className="mt-2 font-display text-3xl font-semibold text-white sm:text-4xl">
            Built For Independent Practices, Not Hospital Systems
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/85">
            If your practice has one to five providers, and you are currently billing in house or
            through a small local biller, Claravox is built around exactly that situation.
          </p>
          <div className="mx-auto mt-10 grid max-w-4xl grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
            {industries.map(({ title, icon: Icon }, index) => (
              <Reveal key={title} effect="fade" delay={index * 60}>
                <div className="flex h-full flex-col items-center justify-center gap-2.5 rounded-lg border border-white/15 bg-white/8 px-3 py-5 text-center">
                  <Icon className="h-6 w-6 text-gold-hi" aria-hidden="true" />
                  <span className="text-xs font-medium leading-snug text-white/90">{title}</span>
                </div>
              </Reveal>
            ))}
            <div className="flex h-full flex-col items-center justify-center gap-2.5 rounded-lg border border-gold-hi/50 bg-gold-hi/15 px-3 py-5 text-center">
              <span className="font-display text-lg font-semibold text-gold-text">+</span>
              <span className="text-xs font-semibold leading-snug text-gold-text">Every Other Specialty</span>
            </div>
          </div>
          <div className="mt-8">
            <Link
              href="/who-we-serve"
              className="text-sm font-semibold text-gold-text underline underline-offset-4 hover:text-white"
            >
              See if your practice is a fit
            </Link>
          </div>
        </div>
      </section>

      {/* 10. Featured Insights */}
      <Section className="bg-cloud">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-wider text-teal-text">
              Knowledge Centre
            </span>
            <h2 className="mt-2 font-display text-3xl font-semibold text-violet sm:text-4xl">
              Featured Insights
            </h2>
          </div>
          <Link
            href="/resources"
            className="text-sm font-semibold text-teal-text underline underline-offset-4 hover:text-violet"
          >
            Visit the Knowledge Centre
          </Link>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {insights.map(({ icon: Icon, category, title, excerpt, href }, index) => (
            <Reveal key={title} effect="slide-up" delay={index * 120}>
              <Link href={href} className="group block h-full">
                <Card className="flex h-full flex-col">
                  <div className="flex h-28 items-center justify-center rounded-lg bg-gradient-to-br from-violet/8 to-teal-deep/8">
                    <Icon className="h-9 w-9 text-violet/50" aria-hidden="true" />
                  </div>
                  <span className="mt-4 text-[11px] font-semibold uppercase tracking-wider text-teal-text">
                    {category}
                  </span>
                  <h3 className="mt-2 font-display text-lg font-semibold text-violet">{title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-charcoal">{excerpt}</p>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-teal-text group-hover:text-violet">
                    Read More <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                  </span>
                </Card>
              </Link>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* FAQ, kept intact with its JSON-LD (see JsonLd above) — positioned
         here, right before the final ask, exactly as it was previously. */}
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

      {/* 11. Final Enterprise CTA */}
      <section className="bg-violet">
        <div className="container-page py-16 md:py-20">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-display text-3xl font-semibold text-white sm:text-4xl">
              Let&rsquo;s Build A Stronger Revenue Cycle, Together
            </h2>
            <p className="mt-4 text-base leading-relaxed text-white/85">
              A long-term partnership focused on operational improvement, not a one-time audit.
              See your actual numbers before you decide anything.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Button href="#book-consultation" variant="gold">
                Talk to a Specialist
              </Button>
              <Button
                href="mailto:info@claravoxhealthcare.com?subject=Pricing%20Request%20-%20Claravox%20Healthcare"
                variant="secondary"
                className="!border-white !text-white hover:!bg-white/10"
              >
                Request Pricing
              </Button>
            </div>
          </div>
          <div className="mx-auto mt-10 flex max-w-2xl justify-center border-t border-white/15 pt-8">
            <NewsletterSignup />
          </div>
        </div>
      </section>

      {/* Lead Form, the single conversion mechanism on this page — the
         real, already-wired /api/consultation workflow, not a mailto
         link, since it's an existing production contact workflow. */}
      <Section className="bg-cloud" id="book-consultation">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="font-display text-3xl font-semibold text-violet sm:text-4xl">
              Book Your Free Consultation
            </h2>
            <p className="mt-4 max-w-md text-base leading-relaxed text-charcoal">
              No commitment. See your actual numbers before you decide
              anything.
            </p>
            <p className="mt-6 text-xs font-medium uppercase tracking-wider text-charcoal/70">
              US Registered Entity. HIPAA Aligned Process. BAA On Every
              Contract.
            </p>
          </div>
          <LeadForm />
        </div>
      </Section>
    </>
  );
}
