import type { Metadata } from "next";
import Link from "next/link";
import {
  AlertTriangle,
  BadgeCheck,
  RefreshCw,
  ShieldCheck,
  Stethoscope,
  FileStack,
  Gauge,
  Eye,
  TrendingUp,
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

export const metadata: Metadata = {
  title: "Medical Credentialing and Payer Enrollment, Claravox Healthcare",
  description:
    "Provider credentialing and payer enrollment for independent US physician practices — handled end to end, with no gap in what you can bill for.",
  alternates: { canonical: "/credentialing" },
};

const breadcrumbItems = [
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
  { name: "Credentialing", path: "/credentialing" },
];

const documentationRequirements = [
  { icon: Stethoscope, text: "State medical license and DEA registration, current and unexpired." },
  { icon: BadgeCheck, text: "Board certification and education history, verified at the primary source." },
  { icon: FileStack, text: "A complete, current CAQH profile — the single most common cause of delay when it's out of date." },
  { icon: ShieldCheck, text: "Proof of malpractice insurance meeting each payer's specific coverage minimums." },
];

const challenges = [
  { title: "Incomplete Applications", body: "Missing a single document restarts a payer's review clock — often without notifying you until the delay has already happened." },
  { title: "An Out-of-Date CAQH Profile", body: "Most payers pull directly from CAQH. A profile that hasn't been re-attested recently silently stalls every application that depends on it." },
  { title: "No One Tracking Revalidation Dates", body: "Revalidation deadlines vary by payer and are easy to miss without a dedicated system — a missed one can drop you out-of-network with no warning." },
];

const credentialingProcess = [
  { title: "Application Prep", description: "Gathering and verifying every document a payer requires before anything is submitted, not after a rejection." },
  { title: "Primary Source Verification", description: "Confirming licenses, education, and certifications directly with the issuing source, not just the applicant's copy." },
  { title: "Payer Submission", description: "Applications filed complete the first time, addressed to the right department for that specific payer." },
  { title: "Active Follow-Up", description: "Regular follow-up with the payer while the application is pending, instead of waiting to hear back." },
  { title: "Approval & Enrollment", description: "Confirmed in-network status, tracked so you know exactly when you can start billing that payer." },
];

const benefits = [
  { icon: TrendingUp, title: "Revenue Optimisation", body: "No gap between seeing patients and being able to bill for it." },
  { icon: Eye, title: "Improved Operational Visibility", body: "You always know exactly where each payer application stands." },
  { icon: ShieldCheck, title: "Consistent Billing Quality", body: "Applications filed complete the first time, not after a rejection." },
  { icon: Gauge, title: "Reduced Administrative Burden", body: "One team tracking every payer's revalidation cycle, so it never becomes a surprise." },
];

const faqItems = [
  {
    question: "How long does credentialing actually take?",
    answer:
      "Typically 60 to 120 days per payer, depending on the payer and how complete the initial application is. A large share of delay is avoidable — it usually comes from an incomplete application or an out-of-date CAQH profile, not the payer itself.",
  },
  {
    question: "What happens if I see patients before credentialing is complete?",
    answer:
      "Claims for a payer you aren't yet credentialed with are typically denied, and most payers won't retroactively pay for dates of service before your effective enrollment date. This is why credentialing timing matters directly to revenue, not just paperwork.",
  },
  {
    question: "Do you handle revalidation, or just the initial enrollment?",
    answer:
      "Both. Most payers require periodic revalidation, and a lapse can quietly drop you out-of-network without an obvious warning. We track every payer's revalidation cycle so it never becomes a surprise.",
  },
  {
    question: "Is any part of credentialing automated today?",
    answer:
      "Credentialing itself is handled by our team today, not software. Two related capabilities — documentation processing and internal workflow automation — are in active development elsewhere in our operations, and we'll say clearly if and when either becomes part of how credentialing is handled.",
  },
];

export default function CredentialingPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema(breadcrumbItems)} />
      <JsonLd
        data={serviceSchema(
          "Medical Credentialing and Payer Enrollment",
          "Provider credentialing and payer enrollment for independent US physician practices, including primary source verification, payer submission, and ongoing revalidation.",
          "credentialing",
          "/credentialing"
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
              Payer Enrollment, Handled End to End
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-charcoal">
              Credentialing is the difference between being able to bill a
              payer and not. Claravox handles every step of it — initial
              enrollment and the ongoing revalidation that keeps you
              in-network — so a lapsed document never quietly costs you
              revenue.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button href="/get-your-free-audit" variant="gold">
                Discuss Your Credentialing Process
              </Button>
              <Button href="/services" variant="ghost">
                See every service
              </Button>
            </div>
            <OpsTrustBadges />
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
            Where Credentialing Usually Gets Delayed
          </h2>
          <p className="mt-4 text-base leading-relaxed text-charcoal">
            An uncredentialed provider can still see patients — but claims
            for those visits are typically denied, and most payers will not
            pay retroactively once credentialing finally clears. Credentialing
            delays don't just delay revenue. They can eliminate it entirely.
          </p>
        </div>
        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          {challenges.map(({ title, body }, index) => (
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
      <Section>
        <div className="max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-wider text-teal-text">
            The Claravox Solution
          </span>
          <h2 className="mt-2 font-display text-3xl font-semibold text-violet sm:text-4xl">
            How Claravox Approaches Credentialing
          </h2>
          <p className="mt-4 text-base leading-relaxed text-charcoal">
            One team owns your credentialing from first application to every
            renewal after it — not a one-time project that gets forgotten
            once you're initially enrolled. Credentialing is the process a
            payer uses to verify a provider is licensed, qualified, and
            eligible to be paid in-network — every payer requires its own
            process, separately, before a claim to that payer can be paid.
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
            Where Technology Fits Into Credentialing Today
          </h2>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-charcoal">
            Credentialing itself is handled by our team today — no part of
            application review or payer submission is automated. Here is
            what's genuinely relevant from our broader technology roadmap.
          </p>
        </div>
        <div className="mt-10">
          <Reveal effect="slide-up">
            <TierLadder>
              <TierCard
                tier="active-development"
                title="Documentation & Workflow Automation"
                description="Documentation processing and internal business process automation are genuinely underway elsewhere in our operations. Neither is part of how credentialing applications are handled yet."
              />
              <TierCard
                tier="future-vision"
                title="Future Vision"
                description="Our long-term direction extends secure automation to every appropriate operational workflow, including the administrative tracking behind credentialing — always with our team's oversight, introduced only when it's genuinely ready."
              />
            </TierLadder>
          </Reveal>
          <p className="mt-6 max-w-2xl text-xs leading-relaxed text-charcoal/70">
            The <Link href="/technology" className="font-semibold text-teal-text underline underline-offset-4 hover:text-violet">full Technology page</Link> breaks down every tier, including what's commercially available right now.
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
            From Application to Active Enrollment
          </h2>
        </div>
        <div className="mt-14">
          <Timeline items={credentialingProcess} orientation="horizontal" />
        </div>

        <div className="mt-16 grid grid-cols-1 gap-10 lg:grid-cols-2">
          <div>
            <h3 className="font-display text-xl font-semibold text-violet">What Payers Actually Require</h3>
            <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {documentationRequirements.map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-start gap-3">
                  <Icon className="mt-1 h-5 w-5 shrink-0 text-teal-deep" aria-hidden="true" />
                  <p className="text-sm leading-relaxed text-charcoal">{text}</p>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h3 className="font-display text-xl font-semibold text-violet">Credentialing Doesn't End at Approval</h3>
            <p className="mt-4 text-sm leading-relaxed text-charcoal">
              Most payers require revalidation every two to five years, and
              some require updates whenever your practice information
              changes. We track every payer's cycle for your practice and
              handle the revalidation before a deadline becomes a lapse, not
              after.
            </p>
            <div className="mt-4 flex items-center gap-4 rounded-lg border border-mist bg-white p-5 shadow-resting">
              <RefreshCw className="h-7 w-7 shrink-0 text-teal-deep" aria-hidden="true" />
              <p className="text-sm leading-relaxed text-charcoal">
                A lapsed revalidation can silently drop a provider out-of-network — often not discovered until a claim is denied.
              </p>
            </div>
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
            Every practice signs a Business Associate Agreement before any data access begins — including the documents handled during credentialing.
          </SecurityBlock>
          <ComplianceBlock title="US Registered Entity">
            Credentialing is handled entirely within a US registered company. See <Link href="/compliance-and-security" className="font-semibold text-teal-text underline underline-offset-4 hover:text-violet">Compliance &amp; Security</Link> for the full picture.
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
            Don't Let Credentialing Sit on Your To-Do List
          </h2>
          <p className="max-w-xl text-base text-white/80">
            A free consultation shows exactly where your practice stands
            with every payer, no commitment required.
          </p>
          <Button href="/get-your-free-audit" variant="gold">
            Discuss Your Credentialing Process
          </Button>
          <div className="mt-2 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm">
            <Link href="/medical-billing" className="text-white/70 underline underline-offset-4 hover:text-white">
              Medical Billing
            </Link>
            <Link href="/medical-coding" className="text-white/70 underline underline-offset-4 hover:text-white">
              Medical Coding
            </Link>
            <Link href="/compliance-and-security" className="text-white/70 underline underline-offset-4 hover:text-white">
              Compliance &amp; Security
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
