import type { Metadata } from "next";
import Link from "next/link";
import { FileSignature, ShieldCheck, KeyRound, Eye } from "lucide-react";
import { Button } from "@/components/Button";
import { Section } from "@/components/Section";
import { JsonLd } from "@/components/JsonLd";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { Reveal } from "@/components/ui/motion/Reveal";
import { FAQAccordion } from "@/components/FAQAccordion";
import { SecurityBlock, ComplianceBlock } from "@/components/ui/trust/TrustBlocks";
import { OpsWhyClaravox } from "@/components/ops/OpsWhyClaravox";
import { OpsTrustBadges } from "@/components/ops/OpsTrustBadges";
import { breadcrumbSchema, faqSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Compliance and Security, HIPAA Aligned Billing Partner, Claravox Healthcare",
  description:
    "How Claravox Healthcare handles HIPAA aligned processes, Business Associate Agreements, and data access controls for every client engagement.",
  alternates: { canonical: "/compliance-and-security" },
};

const breadcrumbItems = [
  { name: "Home", path: "/" },
  { name: "Compliance and Security", path: "/compliance-and-security" },
];

const securityWorkflow = [
  { icon: FileSignature, title: "Engagement Signed", body: "A US based contract governs the relationship from day one." },
  { icon: ShieldCheck, title: "BAA Executed", body: "A signed Business Associate Agreement is in place before any protected health information is accessed." },
  { icon: KeyRound, title: "Role-Based Access Configured", body: "Staff access to practice data is limited to what's needed for their specific task." },
  { icon: Eye, title: "Ongoing Oversight", body: "Documented HIPAA aligned policies covering data handling, staff training, and incident response stay in effect for the life of the engagement." },
];

const faqItems = [
  {
    question: "Can I see a BAA template before we sign anything?",
    answer:
      "Yes. Reach out and we will provide our Business Associate Agreement template directly, before you commit to anything.",
  },
  {
    question: "Is there a direct compliance contact I can talk to?",
    answer:
      "Yes. Contact us and we will connect you with the right person for a direct conversation, not a general inbox.",
  },
];

export default function ComplianceAndSecurityPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema(breadcrumbItems)} />
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
              How Claravox Handles Compliance and Data Security
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-charcoal">
              This page exists for anyone reviewing Claravox on behalf of a
              practice before a decision is made. Every statement below is
              something we will confirm directly if asked.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button href="/get-your-free-audit" variant="gold">
                Talk About Secure Operations
              </Button>
              <Button href="/why-claravox" variant="ghost">
                Read more about Claravox first
              </Button>
            </div>
            <OpsTrustBadges />
          </div>
        </div>
      </section>

      {/* 3. Core Content — trust points, structured components, not plain text */}
      <Section className="bg-white">
        <div className="max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-wider text-teal-text">Core Content</span>
          <h2 className="mt-2 font-display text-3xl font-semibold text-violet sm:text-4xl">
            What We Can Confirm, Directly
          </h2>
        </div>
        <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2">
          <Reveal effect="slide-up" delay={0}>
            <ComplianceBlock title="US Registered Entity">
              Claravox Healthcare is registered in the United States and is
              contractually accountable under US law. Operational work is
              performed by a dedicated team, and every engagement is
              governed by a US based contract.
            </ComplianceBlock>
          </Reveal>
          <Reveal effect="slide-up" delay={80}>
            <ComplianceBlock title="Business Associate Agreement on Every Contract">
              A signed Business Associate Agreement is in place before any
              protected health information is accessed, on every single
              client engagement, with no exceptions made for smaller
              accounts.
            </ComplianceBlock>
          </Reveal>
          <Reveal effect="slide-up" delay={160}>
            <SecurityBlock title="HIPAA Aligned Process">
              Claravox follows documented HIPAA aligned policies covering
              data handling, staff training, and incident response. These
              are written policies maintained on file, not a verbal
              assurance.
            </SecurityBlock>
          </Reveal>
          <Reveal effect="slide-up" delay={240}>
            <SecurityBlock title="Role Based Data Access">
              Staff access to practice data is limited to what is needed
              for their specific task. Access is not broadly shared across
              the team by default.
            </SecurityBlock>
          </Reveal>
        </div>
      </Section>

      {/* 4. Technology & Operations */}
      <Section className="bg-ivory">
        <div className="max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-wider text-teal-text">
            Technology & Operations
          </span>
          <h2 className="mt-2 font-display text-3xl font-semibold text-violet sm:text-4xl">
            Where Automation Fits Into a Secure Process
          </h2>
          <p className="mt-4 text-base leading-relaxed text-charcoal">
            Every automation initiative we build follows the same
            compliance discipline described on this page, at every stage
            of maturity — not just once a capability is fully live.{" "}
            <Link
              href="/technology"
              className="font-semibold text-teal-text underline underline-offset-4 hover:text-violet"
            >
              See how technology decisions are made.
            </Link>
          </p>
        </div>
      </Section>

      {/* 6. Trust & Security — a visual walkthrough of the same facts above */}
      <Section className="bg-white">
        <div className="max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-wider text-teal-text">
            Trust & Security
          </span>
          <h2 className="mt-2 font-display text-3xl font-semibold text-violet sm:text-4xl">
            How an Engagement Stays Secure, Step by Step
          </h2>
        </div>
        <div className="relative mt-14">
          <div aria-hidden="true" className="absolute left-0 right-0 top-8 hidden h-px bg-mist lg:block" />
          <ol className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {securityWorkflow.map(({ icon: Icon, title, body }, index) => (
              <Reveal key={title} effect="fade" delay={index * 80}>
                <li>
                  <span className="relative z-[1] mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-mist bg-white shadow-resting">
                    <Icon className="h-6 w-6 text-teal-deep" aria-hidden="true" />
                  </span>
                  <p className="mt-4 text-center font-display text-base font-semibold text-violet">{title}</p>
                  <p className="mt-1 text-center text-xs leading-relaxed text-charcoal">{body}</p>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </Section>

      {/* 5. Why Claravox */}
      <Section className="bg-ivory">
        <div className="max-w-2xl">
          <h2 className="font-display text-3xl font-semibold text-violet sm:text-4xl">Why Claravox</h2>
        </div>
        <OpsWhyClaravox />
      </Section>

      {/* 7. FAQ */}
      <Section className="bg-white">
        <div className="max-w-2xl border-t border-mist pt-10">
          <h2 className="font-display text-3xl font-semibold text-violet sm:text-4xl">
            Questions Before You Decide
          </h2>
          <p className="mt-4 text-base leading-relaxed text-charcoal">
            If you need more detail than this page provides, including our
            BAA template or a direct conversation with our compliance
            contact, reach out and we will provide it before you commit to
            anything.
          </p>
          <div className="mt-6 max-w-3xl">
            <FAQAccordion items={faqItems} />
          </div>
          <Link
            href="/contact"
            className="mt-6 inline-block text-sm font-semibold text-teal-text underline underline-offset-4 hover:text-violet"
          >
            Contact us with your question
          </Link>
        </div>
      </Section>

      {/* 8. Enterprise CTA */}
      <section className="bg-violet">
        <div className="container-page flex flex-col items-center gap-6 py-16 text-center md:py-20">
          <h2 className="font-display text-3xl font-semibold text-white sm:text-4xl">
            Ready to See This Applied to Your Practice?
          </h2>
          <p className="max-w-xl text-base text-white/80">
            A free consultation is the natural next step once compliance
            questions are answered — no commitment required.
          </p>
          <Button href="/get-your-free-audit" variant="gold">
            Talk About Secure Operations
          </Button>
        </div>
      </section>
    </>
  );
}
