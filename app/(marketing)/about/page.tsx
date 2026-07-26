import type { Metadata } from "next";
import Link from "next/link";
import { HeartPulse, Gauge, ShieldCheck, HeartHandshake, Cpu, Users, Compass, Mail } from "lucide-react";
import { Button } from "@/components/Button";
import { Card } from "@/components/Card";
import { Section } from "@/components/Section";
import { JsonLd } from "@/components/JsonLd";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { Reveal } from "@/components/ui/motion/Reveal";
import { OpsWhyClaravox } from "@/components/ops/OpsWhyClaravox";
import { OpsTrustBadges } from "@/components/ops/OpsTrustBadges";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "About Claravox, A Technology-Enabled RCM Company, Claravox Healthcare",
  description:
    "Claravox Healthcare Solutions is a technology-enabled Revenue Cycle Management and Medical Billing company helping healthcare providers improve financial performance through accurate billing, compliant processes, operational excellence, and intelligent use of modern technology.",
  alternates: { canonical: "/about" },
};

const breadcrumbItems = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
];

const commitments = [
  {
    icon: HeartPulse,
    title: "Healthcare Expertise First",
    body: "Technology is one of our strongest differentiators, not our identity. The foundation of everything we do is genuine revenue cycle expertise — technology exists to make that expertise more accurate and consistent, never to replace it.",
  },
  {
    icon: Gauge,
    title: "Operational Excellence",
    body: "Precision in claims, coding, and reporting is a form of respect for the practices we serve. We measure ourselves on whether the work is actually done right, not on how it's described.",
  },
  {
    icon: ShieldCheck,
    title: "Secure, Responsible Automation",
    body: "Every automation initiative moves through internal testing and real-world validation before we would call it ready — and human oversight stays central at every stage, not just the early ones.",
  },
  {
    icon: HeartHandshake,
    title: "Long-Term Partnership",
    body: "We aim to be the kind of partner a practice keeps for years, not a vendor evaluated purely on a quarterly rate. That means direct access and honesty stay in place as we grow, not just while we're small.",
  },
];

const lookingAhead = [
  "Building a technology-enabled healthcare operations company, not just a billing vendor that happens to use software.",
  "Intelligent workflow automation that removes repetitive work from real people's days, applied where it genuinely helps, not everywhere it could.",
  "Responsible adoption of AI — every capability validated before it's trusted, never adopted for its own sake.",
  "Secure process automation, with the same compliance discipline at scale that we hold ourselves to today.",
  "Continuous operational improvement, treating what we learn from every practice we serve as something that makes the next one better.",
  "Long-term partnerships with healthcare providers — the same standard of direct access we hold today, protected as we grow, not diluted by it.",
];

const nextSteps = [
  { icon: Users, title: "Why Claravox", body: "The case for trusting us with this.", href: "/why-claravox" },
  { icon: Cpu, title: "Technology", body: "What's live, what's in progress, tier by tier.", href: "/technology" },
  { icon: Compass, title: "Compliance & Security", body: "What we can confirm directly.", href: "/compliance-and-security" },
  { icon: Mail, title: "Contact", body: "Reach us directly, no form required.", href: "/contact" },
];

export default function AboutPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema(breadcrumbItems)} />

      {/* 1. Hero — opens with the actual official positioning statement, verbatim */}
      <section className="relative overflow-hidden bg-ivory">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-24 -top-28 h-96 w-96 rounded-full bg-royal/15 blur-3xl"
        />
        <div className="container-page relative py-16 lg:py-20">
          <Breadcrumb items={breadcrumbItems} />
          <div className="mt-6 max-w-2xl">
            <h1 className="font-display text-4xl font-semibold leading-tight text-violet sm:text-5xl">
              A Technology-Enabled Revenue Cycle Management Company
            </h1>
            <div className="mt-6 h-px w-20 bg-gold" aria-hidden="true" />
            <p className="mt-6 text-lg leading-relaxed text-charcoal">
              Claravox Healthcare Solutions is a technology-enabled Revenue
              Cycle Management and Medical Billing company helping
              healthcare providers improve financial performance through
              accurate billing, compliant processes, operational
              excellence, and intelligent use of modern technology.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button href="/get-your-free-audit" variant="gold">
                Learn How We Work
              </Button>
              <Button href="/why-claravox" variant="ghost">
                See why practices trust us
              </Button>
            </div>
            <OpsTrustBadges />
          </div>
        </div>
      </section>

      {/* 2. Introduction */}
      <Section className="bg-white">
        <div className="max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-wider text-teal-text">Introduction</span>
          <h2 className="mt-2 font-display text-3xl font-semibold text-violet sm:text-4xl">
            Why Claravox Exists
          </h2>
          <p className="mt-4 text-base leading-relaxed text-charcoal">
            Independent practices lose real revenue to denied claims, slow
            accounts receivable, and billing inefficiency — often without
            a clear way to see where the money is actually going. Most
            billing vendors are built around their largest accounts. We
            built Claravox around the practice that's too small to have
            its own revenue cycle department, and too often treated as an
            afterthought everywhere else.{" "}
            <Link
              href="/who-we-serve"
              className="font-semibold text-teal-text underline underline-offset-4 hover:text-violet"
            >
              See exactly who that is.
            </Link>
          </p>
        </div>
      </Section>

      {/* 3. Core Content — operating philosophy */}
      <Section className="bg-ivory">
        <div className="max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-wider text-teal-text">
            Our Operating Philosophy
          </span>
          <h2 className="mt-2 font-display text-3xl font-semibold text-violet sm:text-4xl">
            Four Commitments That Don't Change as We Grow
          </h2>
        </div>
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {commitments.map(({ icon: Icon, title, body }, index) => (
            <Reveal key={title} effect="slide-up" delay={index * 80}>
              <Card className="h-full">
                <Icon className="h-7 w-7 text-teal-deep" aria-hidden="true" />
                <h3 className="mt-4 font-display text-lg font-semibold text-violet">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-charcoal">{body}</p>
              </Card>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* 4. Technology & Operations */}
      <Section className="bg-white">
        <div className="max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-wider text-teal-text">
            Technology & Operations
          </span>
          <h2 className="mt-2 font-display text-3xl font-semibold text-violet sm:text-4xl">
            Our Approach to Technology
          </h2>
          <p className="mt-4 text-base leading-relaxed text-charcoal">
            We invest in automation and AI because they can genuinely
            reduce repetitive work and improve accuracy — never because a
            capability sounds impressive. Every initiative moves through
            the same disciplined stages before we'd call it ready, and
            we're specific about which stage each one is actually at, not
            just confident that it's coming.{" "}
            <Link
              href="/technology"
              className="font-semibold text-teal-text underline underline-offset-4 hover:text-violet"
            >
              See exactly what's live today, tier by tier.
            </Link>
          </p>
        </div>

        <div className="mx-auto mt-14 max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-wider text-teal-text">
            Where We're Going
          </span>
          <h3 className="mt-2 font-display text-2xl font-semibold text-violet">
            A Modern Technology-Enabled Healthcare Operations Company
          </h3>
          <p className="mt-4 text-base leading-relaxed text-charcoal">
            Our long-term vision is an intelligent healthcare operations
            ecosystem — healthcare expertise, operational excellence,
            secure automation, workflow optimization, and data
            intelligence working together, with AI as one part of that
            picture, not the point of it. Every piece of that vision is
            introduced incrementally, validated thoroughly, and never
            allowed to displace the human judgment our practices actually
            depend on.
          </p>
        </div>

        <div className="mx-auto mt-14 max-w-2xl">
          <h3 className="font-display text-xl font-semibold text-violet">Looking Ahead</h3>
          <p className="mt-3 text-base leading-relaxed text-charcoal">
            The vision above is where we're headed. This is the direction
            that gets us there:
          </p>
          <ul className="mt-8 space-y-5">
            {lookingAhead.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                <span className="text-base leading-relaxed text-ink">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      {/* 5. Why Claravox */}
      <Section className="bg-ivory">
        <div className="max-w-2xl">
          <h2 className="font-display text-3xl font-semibold text-violet sm:text-4xl">Why Claravox</h2>
        </div>
        <OpsWhyClaravox />
      </Section>

      {/* 6. Trust & Security */}
      <Section className="bg-white">
        <div className="max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-wider text-teal-text">
            Trust & Security
          </span>
          <h2 className="mt-2 font-display text-3xl font-semibold text-violet sm:text-4xl">
            Compliance Isn't an Afterthought
          </h2>
          <p className="mt-4 text-base leading-relaxed text-charcoal">
            HIPAA-aligned processes and a signed Business Associate
            Agreement are standard on every account, not something added
            after the fact.{" "}
            <Link
              href="/compliance-and-security"
              className="font-semibold text-teal-text underline underline-offset-4 hover:text-violet"
            >
              See the full picture on Compliance &amp; Security.
            </Link>
          </p>
        </div>
      </Section>

      {/* Where to Go Next — connects everything a visitor has already learned */}
      <Section className="bg-ivory">
        <div className="max-w-2xl">
          <h2 className="font-display text-3xl font-semibold text-violet sm:text-4xl">
            Where to Go Next
          </h2>
        </div>
        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {nextSteps.map(({ icon: Icon, title, body, href }) => (
            <Link
              key={href}
              href={href}
              className="group flex flex-col items-start gap-2 rounded-lg border border-mist bg-white p-5 shadow-resting transition-all duration-200 ease-[var(--ease-out-premium)] hover:-translate-y-1 hover:border-teal-deep/40 hover:shadow-low"
            >
              <Icon className="h-6 w-6 text-teal-deep" aria-hidden="true" />
              <span className="font-display text-base font-semibold text-violet group-hover:underline">
                {title}
              </span>
              <span className="text-xs leading-relaxed text-charcoal">{body}</span>
            </Link>
          ))}
        </div>
      </Section>

      {/* 8. Enterprise CTA */}
      <section className="bg-violet">
        <div className="container-page flex flex-col items-center gap-6 py-16 text-center md:py-20">
          <h2 className="font-display text-3xl font-semibold text-white sm:text-4xl">
            See This Applied to Your Own Practice
          </h2>
          <p className="max-w-xl text-base text-white/80">
            A free consultation is the fastest way to see what this looks
            like in practice, not just in principle.
          </p>
          <Button href="/get-your-free-audit" variant="gold">
            Learn How We Work
          </Button>
        </div>
      </section>
    </>
  );
}
