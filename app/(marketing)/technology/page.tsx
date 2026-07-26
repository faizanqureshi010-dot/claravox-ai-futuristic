import type { Metadata } from "next";
import Link from "next/link";
import {
  HeartHandshake,
  ShieldCheck,
  Users,
  Layers,
  Lock,
  RefreshCw,
  GitBranch,
  Workflow,
  Sparkles,
  CalendarClock,
  Puzzle,
  MessageSquareWarning,
  Hourglass,
  Gauge,
  Clock,
  MessageCircle,
  Route,
  LayoutDashboard,
  Plug,
  Bell,
  BarChart3,
  FileCheck2,
  CalendarCheck,
  ClipboardList,
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
import { OpsWhyClaravox } from "@/components/ops/OpsWhyClaravox";
import { OpsTrustBadges } from "@/components/ops/OpsTrustBadges";
import { TechHeroVisual } from "@/components/ops/TechHeroVisual";
import { breadcrumbSchema, faqSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Technology & Responsible Automation, Claravox Healthcare",
  description:
    "How Claravox invests in technology responsibly — what's production-ready, what's been tested internally, what's in a pilot, and what's still being built. Technology enhances our team. It never replaces them.",
  alternates: { canonical: "/technology" },
};

const breadcrumbItems = [
  { name: "Home", path: "/" },
  { name: "Technology", path: "/technology" },
];

const challenges = [
  { icon: CalendarClock, title: "Appointment Overload", body: "Front desks juggling scheduling, reminders, and rescheduling by hand, all day." },
  { icon: Users, title: "Manual Coordination", body: "Tasks handed off between people and systems that don't talk to each other." },
  { icon: MessageSquareWarning, title: "Communication Delays", body: "Patients and staff waiting on replies that a faster system could handle immediately." },
  { icon: Puzzle, title: "Fragmented Systems", body: "Scheduling, billing, and records living in separate tools that were never designed to connect." },
  { icon: Hourglass, title: "Administrative Bottlenecks", body: "Routine, repetitive tasks consuming time that could go toward patient care." },
  { icon: Gauge, title: "Operational Inefficiencies", body: "The same manual work repeated account after account, with no system learning from the last one." },
];

const philosophyPillars = [
  {
    icon: Layers,
    title: "Operational Excellence First",
    body: "Technology is a strategic differentiator for Claravox, not our identity. We are a Revenue Cycle Management and medical billing company — the foundation is healthcare expertise and disciplined operations. Technology exists to make that foundation stronger, not to replace it.",
  },
  {
    icon: Users,
    title: "Technology Enhances People, It Never Replaces Them",
    body: "Every automation initiative we build is designed to remove repetitive work from a real person's day, not to remove the person. Our billing team's judgment stays in the loop at every stage that touches your revenue.",
  },
  {
    icon: ShieldCheck,
    title: "Responsible, Incremental Innovation",
    body: "We do not skip stages. Every capability moves through internal testing and real-world validation before we would ever consider it production-ready — and we say exactly which stage it's actually at, every time.",
  },
  {
    icon: HeartHandshake,
    title: "Compliance and Human Oversight, Always",
    body: "HIPAA-aligned processes and human review are not a phase we grow out of as automation matures. They are permanent, non-negotiable parts of how every solution — today and in the future — is designed.",
  },
];

const technologyPrinciples = [
  { icon: Lock, title: "Security by Design", body: "Security is built into a capability from its first architecture decision, not added before launch." },
  { icon: Users, title: "Human Oversight", body: "A qualified person stays in the loop for anything that touches your revenue or your patients' data, at every stage of maturity." },
  { icon: ShieldCheck, title: "Compliance First", body: "HIPAA-aligned processes are a starting requirement for any initiative, not a checkbox at the end." },
  { icon: GitBranch, title: "Incremental Validation", body: "Every capability is tested internally, then piloted, before it's ever considered for broader use — no stage is skipped." },
  { icon: Workflow, title: "Workflow Before Automation", body: "We fix and understand the underlying process first. Automating a broken workflow just makes it fail faster." },
  { icon: Sparkles, title: "Responsible AI Adoption", body: "AI is adopted where it demonstrably helps a real operational problem — never adopted for its own sake." },
  { icon: RefreshCw, title: "Continuous Improvement", body: "Our roadmap is expected to change as capabilities mature. What doesn't change is the discipline behind it." },
];

const innovationProcess = [
  {
    title: "Identify a Real Problem",
    description: "We start from a genuine operational bottleneck our team or a healthcare partner experiences, not a technology looking for a use case.",
  },
  {
    title: "Build and Test Internally",
    description: "New automation is built and validated on our own operations first, where we can measure results directly before anyone else depends on it.",
  },
  {
    title: "Validate in a Pilot",
    description: "Promising capabilities move into a real, live pilot with a client environment to confirm they hold up under actual operating conditions, not just internal testing.",
  },
  {
    title: "Scale Responsibly",
    description: "Only after a capability has been tested and piloted does it move toward broader deployment — with human oversight built in from day one, not added later.",
  },
];

const capabilities = [
  { icon: Clock, title: "24/7 Appointment Handling", body: "Live scheduling, confirmations, and call handling — our one production-ready capability today.", badge: "Production Ready" },
  { icon: Workflow, title: "Workflow Automation", body: "Front-office automation, live and in active use in our own operations today.", badge: "Live In Our Operations" },
  { icon: MessageCircle, title: "Patient Communication", body: "Automated intake and communication support, actively used in our own operations.", badge: "Live In Our Operations" },
  { icon: Route, title: "Task Routing", body: "Work routed to the right process automatically — genuinely underway.", badge: "Active Development" },
  { icon: LayoutDashboard, title: "Operational Dashboards", body: "Clearer visibility into denials and collections as this capability matures.", badge: "Active Development" },
  { icon: Plug, title: "Healthcare Integrations", body: "We work within the EHR and practice management systems you already use — no platform switch required.", badge: "Available Today" },
  { icon: Bell, title: "Notification Management", body: "Automated confirmations and reminders, part of the same front-office automation already live in our operations.", badge: "Live In Our Operations" },
  { icon: BarChart3, title: "Reporting", body: "Revenue analytics and reporting automation are genuinely underway, not yet complete.", badge: "Active Development" },
];

const integrationChain = [
  { icon: Sparkles, title: "AI Appointment Agent", body: "Scheduling and intake, where the patient relationship starts.", href: undefined as string | undefined },
  { icon: FileCheck2, title: "Medical Billing", body: "What was scheduled and delivered becomes an accurate claim.", href: "/medical-billing" },
  { icon: CalendarCheck, title: "Eligibility Verification", body: "Coverage confirmed before the appointment ever happens.", href: "/eligibility-verification" },
  { icon: Workflow, title: "Revenue Cycle", body: "Every stage coordinated as one system, not separate tasks.", href: "/revenue-cycle-management" },
  { icon: ClipboardList, title: "Reporting", body: "Visibility into how the whole system is actually performing.", href: undefined },
];

const faqItems = [
  {
    question: "Is the AI Appointment Booking Agent HIPAA compliant?",
    answer:
      "Yes. It's built around HIPAA-aligned processes, consistent with every other part of how Claravox handles data.",
  },
  {
    question: "Will a real person still review my claims?",
    answer:
      "Yes, always. Every claim today is coded and reviewed by our billing team. Nothing in active development or on our roadmap changes that — human oversight is a permanent part of the design, not a temporary stage.",
  },
  {
    question: "What happens to the capabilities still in development?",
    answer:
      "They move through internal testing and pilot validation before we would ever call them production-ready, and we'll always say exactly which stage each one is at — never blurred into a single \u201ccoming soon.\u201d",
  },
  {
    question: "Is Claravox an AI company?",
    answer:
      "No. Claravox is a technology-enabled Revenue Cycle Management and medical billing company. Technology, including AI, is one of our competitive advantages — it is not our identity.",
  },
];

export default function TechnologyPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema(breadcrumbItems)} />
      <JsonLd data={faqSchema(faqItems)} />

      {/* 1. Hero */}
      <section className="relative overflow-hidden bg-ivory">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-24 -top-28 h-96 w-96 rounded-full bg-royal/20 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-28 -left-20 h-80 w-80 rounded-full bg-teal-deep/15 blur-3xl"
        />
        <div className="container-page relative grid grid-cols-1 items-center gap-12 py-16 lg:grid-cols-[1.1fr_0.9fr] lg:py-20">
          <div>
            <Breadcrumb items={breadcrumbItems} />
            <div className="mt-6 max-w-2xl">
              <h1 className="font-display text-4xl font-semibold leading-tight text-violet sm:text-5xl">
                Technology That Serves Healthcare Operations, Not the Other Way Around
              </h1>
              <div className="mt-6 h-px w-20 bg-gold" aria-hidden="true" />
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-charcoal">
                Claravox is a technology-enabled Revenue Cycle Management and
                medical billing company. Technology is one of our strongest
                competitive advantages — not our identity, and never a reason
                to say more than is actually true.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Button href="/get-your-free-audit" variant="gold">
                  Explore Modern Healthcare Operations
                </Button>
                <Button href="/medical-billing" variant="ghost">
                  See it applied to billing
                </Button>
              </div>
              <OpsTrustBadges />
            </div>
          </div>
          <TechHeroVisual />
        </div>
      </section>

      {/* 2. Current Operational Challenges */}
      <Section className="bg-white">
        <div className="max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-wider text-teal-text">
            Current Operational Challenges
          </span>
          <h2 className="mt-2 font-display text-3xl font-semibold text-violet sm:text-4xl">
            Why Healthcare Teams Outgrow Manual Workflows
          </h2>
        </div>
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {challenges.map(({ icon: Icon, title, body }, index) => (
            <Reveal key={title} effect="slide-up" delay={index * 80}>
              <Card className="h-full">
                <Icon className="h-6 w-6 text-teal-deep" aria-hidden="true" />
                <h3 className="mt-3 font-display text-lg font-semibold text-violet">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-charcoal">{body}</p>
              </Card>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* 3. Solution Overview */}
      <Section className="bg-ivory">
        <div className="max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-wider text-teal-text">
            Solution Overview
          </span>
          <h2 className="mt-2 font-display text-3xl font-semibold text-violet sm:text-4xl">
            Four Ideas Behind Everything We Build
          </h2>
        </div>
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {philosophyPillars.map(({ icon: Icon, title, body }, index) => (
            <Reveal key={title} effect="slide-up" delay={index * 100}>
              <Card className="h-full">
                <Icon className="h-7 w-7 text-teal-deep" aria-hidden="true" />
                <h3 className="mt-4 font-display text-lg font-semibold text-violet">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-charcoal">{body}</p>
              </Card>
            </Reveal>
          ))}
        </div>

        <div className="mt-14 max-w-2xl">
          <h3 className="font-display text-xl font-semibold text-violet">The Principles Behind Every Decision</h3>
          <p className="mt-3 text-sm leading-relaxed text-charcoal">
            These aren't aspirational. They're the actual constraints every
            initiative has to satisfy before it can move to the next stage.
          </p>
        </div>
        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {technologyPrinciples.map(({ icon: Icon, title, body }, index) => (
            <Reveal key={title} effect="slide-up" delay={index * 80}>
              <Card className="h-full">
                <Icon className="h-6 w-6 text-teal-deep" aria-hidden="true" />
                <h3 className="mt-3 font-display text-base font-semibold text-violet">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-charcoal">{body}</p>
              </Card>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* 4. How The Technology Works */}
      <Section className="bg-white">
        <div className="max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-wider text-teal-text">
            How The Technology Works
          </span>
          <h2 className="mt-2 font-display text-3xl font-semibold text-violet sm:text-4xl">
            Nothing Reaches Your Account Without Being Proven First
          </h2>
          <p className="mt-4 text-base leading-relaxed text-charcoal">
            Every capability follows the same disciplined path — no
            shortcuts, no skipped stages, regardless of how promising early
            results look.
          </p>
        </div>
        <div className="mt-14">
          <Timeline items={innovationProcess} orientation="horizontal" />
        </div>
      </Section>

      {/* 5. Key Capabilities */}
      <Section className="bg-ivory" id="maturity-model">
        <div className="max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-wider text-teal-text">
            Key Capabilities
          </span>
          <h2 className="mt-2 font-display text-3xl font-semibold text-violet sm:text-4xl">
            Every Capability, Labeled Exactly as It Is
          </h2>
        </div>
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {capabilities.map(({ icon: Icon, title, body, badge }, index) => (
            <Reveal key={title} effect="slide-up" delay={index * 80}>
              <Card className="h-full">
                <div className="flex items-start justify-between gap-2">
                  <Icon className="h-6 w-6 text-teal-deep" aria-hidden="true" />
                  <span className="rounded-full border border-dashed border-violet/40 bg-violet/5 px-2 py-0.5 text-center font-data text-[9px] font-semibold uppercase tracking-wide text-violet">
                    {badge}
                  </span>
                </div>
                <h3 className="mt-3 font-display text-base font-semibold text-violet">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-charcoal">{body}</p>
              </Card>
            </Reveal>
          ))}
        </div>

        <div className="mt-16 max-w-2xl">
          <p className="text-base leading-relaxed text-charcoal">
            Six stages. We never blur them, and we never round up. Most of
            what's below supports one part of the{" "}
            <Link href="/revenue-cycle-management" className="font-semibold text-teal-text underline underline-offset-4 hover:text-violet">
              complete revenue cycle
            </Link>
            , not the whole thing at once.
          </p>
        </div>
        <div className="mt-8">
          <Reveal effect="slide-up">
            <TierLadder>
              <TierCard
                tier="production"
                title="AI Appointment Booking Agent"
                description="A HIPAA-compliant AI appointment booking agent, available for commercial deployment today for healthcare organizations interested in intelligent scheduling and front-office automation. Our only production-ready solution at this stage."
              />
              <TierCard
                tier="tested-internally"
                title="Front-Office Workflow Automation"
                description="Appointment scheduling, patient communication, intake, and administrative workflow automation — built on our own Patient Management System and live in active daily use across our own operations today. This is not a completed test we're describing after the fact; it's running now. It is not, however, a product we sell — the AI Appointment Booking Agent above is the only capability currently offered to clients."
              />
              <TierCard
                tier="pilot"
                title="Pilot Implementation Underway"
                description="With this automation already live in daily use internally, the next step is already underway: we are preparing a demonstration of it within a real dental practice environment, to validate it under actual clinical operating conditions outside our own operations. An active milestone we are actively preparing for — not a completed deployment, and not yet a product offered to clients."
              />
              <TierCard
                tier="active-development"
                title="Billing Automation Agents, Now Building"
                description="We planned a structured roadmap for six specialized AI agents dedicated to billing automation. That planning is done — build work on these agents is genuinely underway now. They are not yet production-ready, and we're not attaching a delivery date to that until it's actually true."
              />
              <TierCard
                tier="active-development"
                title="In Active Development"
                description="AI-assisted medical coding, intelligent claim scrubbing, eligibility verification automation, prior authorization automation, claims status monitoring, AR automation, payment posting automation, denial management automation, documentation processing, workflow orchestration, revenue analytics, AI copilots, and agentic AI workflows — genuinely underway, not yet live in how any claim is handled."
              />
              <TierCard
                tier="future-vision"
                title="Future Vision"
                description="An intelligent healthcare operations ecosystem where AI agents and secure automation assist healthcare professionals across every appropriate Revenue Cycle Management workflow — introduced incrementally, validated thoroughly, always with human oversight."
              />
            </TierLadder>
          </Reveal>
        </div>

        {/* Anonymized case study — no client name, no invented metrics.
           Grounded entirely in facts already stated in the tier ladder
           above: live internal use today, then a real dental practice
           pilot as the next step outward. */}
        <div className="mt-14 max-w-3xl">
          <div className="rounded-xl border border-mist bg-white p-8 shadow-resting">
            <span className="text-xs font-semibold uppercase tracking-wider text-teal-text">
              Case Study — Client Details Withheld by Agreement
            </span>
            <h3 className="mt-2 font-display text-xl font-semibold text-violet">
              Front-Office Automation, From Live Internal Use to Real Pilot
            </h3>
            <div className="mt-5 space-y-4 text-sm leading-relaxed text-charcoal">
              <p>
                <span className="font-semibold text-violet">The situation. </span>
                Front-office work — scheduling, patient communication, and
                intake — consuming staff time that could go toward
                patients, the same problem behind every "Appointment
                Overload" story on this page.
              </p>
              <p>
                <span className="font-semibold text-violet">Our approach. </span>
                We built the automation on our own Patient Management
                System first — before proposing it to anyone else — and
                put it into real, daily use in our own operations rather
                than just measuring it in a lab.
              </p>
              <p>
                <span className="font-semibold text-violet">Where it stands now. </span>
                With good, encouraging results from that live internal
                use, we're now preparing a demonstration of the same
                automation within a real dental practice environment, to
                see how it holds up outside our own operations, under
                actual clinical conditions, before offering it as a
                product to clients.
              </p>
            </div>
            <p className="mt-6 text-xs leading-relaxed text-charcoal/60">
              This is a live, ongoing pilot, not a completed deployment —
              client identity is withheld per our standing confidentiality
              policy, not because the outcome is being hidden. See the
              Pilot Deployment tier above for the same milestone, stated
              plainly.
            </p>
          </div>
        </div>

        {/* Where We Are Going — ecosystem narrative + qualitative stage indicator */}
        <div className="mx-auto mt-16 max-w-3xl text-center">
          <span className="text-xs font-semibold uppercase tracking-wider text-teal-text">
            Where We Are Going
          </span>
          <h3 className="mt-2 font-display text-2xl font-semibold text-violet">
            An Operations Ecosystem, Not Just an AI Roadmap
          </h3>
          <p className="mt-4 text-base leading-relaxed text-charcoal">
            Our long-term goal isn't simply to add AI to revenue cycle
            management. It's to build an intelligent healthcare operations
            ecosystem where healthcare expertise, operational excellence,
            secure automation, workflow optimization, data intelligence, and
            AI work together — each strengthening the others. AI is one part
            of that ecosystem, not the point of it.
          </p>
        </div>

        <div className="mx-auto mt-12 max-w-3xl">
          <div className="relative flex items-start justify-between">
            <div aria-hidden="true" className="absolute left-0 right-0 top-4 h-0.5 bg-mist" />
            {[
              { label: "Front-Office Automation", status: "Live In Our Operations, Piloting Next", reached: true },
              { label: "Billing Automation", status: "Now Building", reached: true },
              { label: "Full Operations Ecosystem", status: "Long-Term Vision", reached: false },
            ].map((stage) => (
              <div key={stage.label} className="relative z-[1] flex flex-1 flex-col items-center px-2 text-center">
                <span
                  className={`h-3.5 w-3.5 rounded-full border-2 ${
                    stage.reached ? "border-teal-deep bg-teal-deep" : "border-mist bg-white"
                  }`}
                  aria-hidden="true"
                />
                <p className="mt-4 text-sm font-semibold text-violet">{stage.label}</p>
                <p className="mt-1 text-xs uppercase tracking-wide text-charcoal/60">{stage.status}</p>
              </div>
            ))}
          </div>
          <p className="mt-8 text-center text-xs leading-relaxed text-charcoal/60">
            A sequence, not a measurement — this shows relative order and
            current focus, not a precise completion percentage.
          </p>
        </div>
      </Section>

      {/* 6. Integration Into Healthcare Operations */}
      <Section className="bg-white">
        <div className="max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-wider text-teal-text">
            Integration Into Healthcare Operations
          </span>
          <h2 className="mt-2 font-display text-3xl font-semibold text-violet sm:text-4xl">
            Where This Connects Into the Revenue Cycle
          </h2>
          <p className="mt-4 text-base leading-relaxed text-charcoal">
            Technology here isn't a separate product — it's built to feed
            directly into the operations Claravox already runs.
          </p>
        </div>
        <div className="relative mt-14">
          <div
            aria-hidden="true"
            className="absolute left-0 right-0 top-8 hidden h-px bg-mist lg:block"
          />
          <ol className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {integrationChain.map(({ icon: Icon, title, body, href }, index) => {
              const content = (
                <>
                  <span className="relative z-[1] mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-mist bg-white shadow-resting">
                    <Icon className="h-6 w-6 text-teal-deep" aria-hidden="true" />
                  </span>
                  <p className="mt-4 text-center font-display text-base font-semibold text-violet">{title}</p>
                  <p className="mt-1 text-center text-xs leading-relaxed text-charcoal">{body}</p>
                </>
              );
              return (
                <Reveal key={title} effect="fade" delay={index * 80}>
                  <li>
                    {href ? (
                      <Link href={href} className="group block">
                        {content}
                      </Link>
                    ) : (
                      content
                    )}
                  </li>
                </Reveal>
              );
            })}
          </ol>
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
      <Section className="bg-cloud">
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
            See How This Applies to Your Practice
          </h2>
          <p className="max-w-xl text-base text-white/80">
            A free consultation shows your actual numbers, with a real
            person on the other end — today, not on a roadmap.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button href="/get-your-free-audit" variant="gold">
              Explore Modern Healthcare Operations
            </Button>
            <Link
              href="/services"
              className="text-sm font-semibold text-white underline underline-offset-4 hover:text-gold-hi"
            >
              See every service
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
