import type { Metadata } from "next";
import Link from "next/link";
import { PhoneCall, Target, Cpu } from "lucide-react";
import { Button } from "@/components/Button";
import { Card } from "@/components/Card";
import { Section } from "@/components/Section";
import { JsonLd } from "@/components/JsonLd";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { Reveal } from "@/components/ui/motion/Reveal";
import { TrustStrip } from "@/components/TrustStrip";
import { OpsWhyClaravox } from "@/components/ops/OpsWhyClaravox";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Why Claravox, Founder Led Medical Billing, Claravox Healthcare",
  description:
    "Claravox Healthcare is a founder led, US registered medical billing partner built for independent practices. See why direct access and honest positioning matter more than a polished sales pitch.",
  alternates: { canonical: "/why-claravox" },
};

const breadcrumbItems = [
  { name: "Home", path: "/" },
  { name: "Why Claravox", path: "/why-claravox" },
];

const differentiators = [
  {
    icon: PhoneCall,
    title: "Direct Access",
    text: "Direct access to the people handling your claims, not a support ticket queue.",
  },
  {
    icon: Target,
    title: "Priced Below Market",
    text: "Pricing starting at 3.5 percent of collections, below the typical 4 to 9 percent industry range.",
  },
  {
    icon: Cpu,
    title: "An Honest Technology Roadmap",
    text: "A technology roadmap most companies our size are not building — with a full, tier-by-tier account of what's actually live today.",
  },
];

export default function WhyClaravoxPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema(breadcrumbItems)} />

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
              Why an Independent Practice Should Trust Claravox
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-charcoal">
              Independent practices lose real revenue to denied claims,
              slow accounts receivable, and billing inefficiency, often
              without a clear way to see where the money is going. A
              denied claim is not paperwork — it is a physician who did
              the work and did not get paid for it. Claravox was built to
              fix that specific problem for practices too small to have
              their own revenue cycle department and too easily treated
              as an afterthought by billing vendors focused on their
              largest accounts.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button href="/get-your-free-audit" variant="gold">
                Discuss Your Operations
              </Button>
              <Button href="/who-we-serve" variant="ghost">
                See if your practice is a fit
              </Button>
            </div>
          </div>
        </div>
      </section>

      <TrustStrip />

      {/* 2. Introduction */}
      <Section className="bg-white">
        <Reveal effect="slide-up">
          <div className="mx-auto max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-wider text-teal-text">Introduction</span>
            <h2 className="mt-2 font-display text-3xl font-semibold text-violet sm:text-4xl">
              Where Claravox Is Right Now
            </h2>
            <p className="mt-5 text-base leading-relaxed text-charcoal">
              Claravox is early, and we would rather tell you that
              directly than let you assume otherwise. We are currently
              onboarding our founding client. What that means for you
              today is founder level attention on every account, not a
              queue behind dozens of other practices. As Claravox grows,
              that same standard of access is what we are building the
              company to protect, not what growth is allowed to quietly
              erode.{" "}
              <Link
                href="/compliance-and-security"
                className="font-semibold text-teal-text underline underline-offset-4 hover:text-violet"
              >
                See how we handle compliance and security.
              </Link>
            </p>
          </div>
        </Reveal>
      </Section>

      {/* 3. Core Content */}
      <Section className="bg-ivory">
        <div className="mx-auto max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-wider text-teal-text">Core Content</span>
          <h2 className="mt-2 font-display text-3xl font-semibold text-violet sm:text-4xl">
            What Actually Makes This Different
          </h2>
        </div>
        <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-6">
          {differentiators.map(({ icon: Icon, title, text }, index) => (
            <Reveal key={title} effect="slide-up" delay={index * 100}>
              <Card className="flex items-start gap-4">
                <Icon className="mt-1 h-6 w-6 shrink-0 text-teal-deep" aria-hidden="true" />
                <div>
                  <p className="font-display text-lg font-semibold text-violet">{title}</p>
                  <p className="mt-1 text-sm leading-relaxed text-charcoal">{text}</p>
                </div>
              </Card>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* 4. Technology & Operations */}
      <Section className="bg-white">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-wider text-teal-text">
            Technology & Operations
          </span>
          <h2 className="mt-2 font-display text-3xl font-semibold text-violet sm:text-4xl">
            An Honest Account of What's Actually Live
          </h2>
          <p className="mt-4 text-base leading-relaxed text-charcoal">
            Every capability we build moves through the same disciplined
            stages, and we say exactly which stage each one is at — never
            rounded up.
          </p>
          <div className="mt-6">
            <Link
              href="/technology"
              className="text-sm font-semibold text-teal-text underline underline-offset-4 hover:text-violet"
            >
              See the full technology roadmap, tier by tier
            </Link>
            <span className="mx-2 text-charcoal/40">·</span>
            <Link
              href="/services"
              className="text-sm font-semibold text-teal-text underline underline-offset-4 hover:text-violet"
            >
              See the full service breakdown
            </Link>
          </div>
        </div>
      </Section>

      {/* 5. Why Claravox — the business-decision cards */}
      <Section className="bg-ivory">
        <div className="max-w-2xl">
          <h2 className="font-display text-3xl font-semibold text-violet sm:text-4xl">Why Claravox</h2>
          <p className="mt-4 text-base leading-relaxed text-charcoal">
            The factors that actually matter when deciding who handles your
            revenue.
          </p>
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
            Agreement are standard on every account.{" "}
            <Link
              href="/compliance-and-security"
              className="font-semibold text-teal-text underline underline-offset-4 hover:text-violet"
            >
              See the full picture on Compliance &amp; Security.
            </Link>
          </p>
        </div>
      </Section>

      {/* 8. Enterprise CTA — The Claravox Promise */}
      <section className="bg-violet">
        <div className="container-page py-20 text-center md:py-24">
          <span aria-hidden="true" className="font-display text-6xl text-gold-hi/60">
            &ldquo;
          </span>
          <blockquote>
            <p className="mx-auto max-w-2xl font-display text-2xl italic leading-relaxed text-white sm:text-3xl">
              You will always be able to reach a real person who knows your
              account, and you will always know exactly where your revenue
              stands.
            </p>
            <footer className="mt-6 text-sm font-medium uppercase tracking-wider text-teal-soft">
              The Claravox Promise
            </footer>
          </blockquote>
          <div className="mt-10">
            <Button href="/get-your-free-audit" variant="gold">
              Discuss Your Operations
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
