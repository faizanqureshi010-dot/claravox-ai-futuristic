import type { Metadata } from "next";
import Link from "next/link";
import {
  BookOpen,
  TrendingUp,
  Compass,
  ShieldCheck,
  Cpu,
  Sparkles,
  FileDown,
  Quote,
  Mail,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/Button";
import { Card } from "@/components/Card";
import { Section } from "@/components/Section";
import { JsonLd } from "@/components/JsonLd";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { Reveal } from "@/components/ui/motion/Reveal";
import { NewsletterSignup } from "@/components/NewsletterSignup";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Resources & Knowledge Center, Claravox Healthcare",
  description:
    "Educational guides, industry insights, and compliance resources on medical billing and revenue cycle management for independent US physician practices.",
  alternates: { canonical: "/resources" },
};

const breadcrumbItems = [
  { name: "Home", path: "/" },
  { name: "Resources", path: "/resources" },
];

type Article = {
  title: string;
  excerpt: string;
  href: string;
  /** One of the category names in activeCategories below, for a light
   * visual tie between an article and its section — not a routing
   * dependency, just a label. */
  category: string;
  /** Human-readable, e.g. "July 2026" — deliberately not a precise date
   * that would need daily upkeep. */
  publishedDate: string;
};

/**
 * Real, published Knowledge Centre articles. Add future articles here —
 * this array is the single place a new guide needs to be registered for
 * it to appear on this hub; nothing else on this page needs to change
 * when the next one publishes.
 */
const articles: Article[] = [
  {
    title: "Denial Management That Fixes the Cause, Not Just the Claim",
    excerpt:
      "A practical guide to categorizing denials, tracing root cause, and the real MGMA, Kodiak Solutions, and Experian Health data behind why speed matters as much as thoroughness.",
    href: "/resources/denial-management-optimization",
    category: "Revenue Cycle Guides",
    publishedDate: "July 2026",
  },
];

type ResourceCategory = {
  icon: typeof BookOpen;
  title: string;
  body: string;
  href?: string;
  linkLabel?: string;
  future?: boolean;
};

/**
 * The taxonomy this hub is organized around. Each category is a plain
 * entry in this array — adding a new category, or the first real article
 * within one, means adding data here, not redesigning the page. Several
 * categories already link to real, existing pages (Technology, the RCM
 * pillar, Compliance & Security) so this hub is genuinely useful as a
 * navigation aid today, not just a placeholder waiting for articles.
 */
const activeCategories: ResourceCategory[] = [
  {
    icon: BookOpen,
    title: "Educational Articles",
    body: "Plain-language explanations of revenue cycle concepts, written for practice owners and office managers, not billing specialists.",
  },
  {
    icon: TrendingUp,
    title: "Industry Insights",
    body: "How independent practices are affected by changes in payer policy, reimbursement trends, and the broader RCM landscape.",
  },
  {
    icon: Compass,
    title: "Revenue Cycle Guides",
    body: "Deeper, practical guides on each stage of the cycle.",
    href: "/revenue-cycle-management",
    linkLabel: "Start with the complete cycle overview",
  },
  {
    icon: ShieldCheck,
    title: "Compliance Resources",
    body: "Practical guidance on HIPAA alignment, documentation, and what a Business Associate Agreement actually covers.",
    href: "/compliance-and-security",
    linkLabel: "See what we can already confirm directly",
  },
  {
    icon: Cpu,
    title: "Technology & Automation",
    body: "How automation genuinely fits into revenue cycle work, and where it doesn't yet.",
    href: "/technology",
    linkLabel: "See what's live today, tier by tier",
  },
  {
    icon: Sparkles,
    title: "AI & Healthcare Operations",
    body: "Our thinking on where AI helps healthcare operations, and the guardrails that keep human judgment central.",
    href: "/about",
    linkLabel: "Read our operating philosophy",
  },
];

const futureCategories: ResourceCategory[] = [
  {
    icon: FileDown,
    title: "Downloadable Resources",
    body: "Checklists, templates, and guides you can save and use directly — planned, not yet available.",
    future: true,
  },
  {
    icon: Quote,
    title: "Case Studies",
    body: "Real results from real practices we work with — planned once there's a client story we have explicit approval to share.",
    future: true,
  },
];

export default function ResourcesPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema(breadcrumbItems)} />

      {/* Hero */}
      <section className="relative overflow-hidden bg-ivory">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-24 -top-28 h-96 w-96 rounded-full bg-teal-deep/15 blur-3xl"
        />
        <div className="container-page relative py-16 lg:py-20">
          <Breadcrumb items={breadcrumbItems} />
          <div className="mt-6 max-w-2xl">
            <h1 className="font-display text-4xl font-semibold leading-tight text-violet sm:text-5xl">
              The Claravox Knowledge Center
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-charcoal">
              Real, published guides live here, alongside the categories
              we're building out around them over time — nothing below is
              filler waiting to look busy.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button href="/get-your-free-audit" variant="gold">
                Book a Consultation
              </Button>
              <Button href="/revenue-cycle-management" variant="ghost">
                See the complete cycle
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Articles — real, published guides. This is the first
         section on the page after the hero, ahead of the category grid
         below: actual content should lead on a resources page, not
         compete for attention against six category cards before a
         visitor ever sees something they can read. */}
      <Section className="bg-white">
        <div className="max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-wider text-teal-text">
            Featured Articles
          </span>
          <h2 className="mt-2 font-display text-3xl font-semibold text-violet sm:text-4xl">
            Latest Guides
          </h2>
        </div>
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {articles.map(({ title, excerpt, href, category, publishedDate }, index) => (
            <Reveal key={href} effect="slide-up" delay={index * 80}>
              <Link href={href} className="group block h-full">
                <Card className="flex h-full flex-col">
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-teal-text">
                      {category}
                    </span>
                    <span className="font-data text-[11px] text-charcoal/50">{publishedDate}</span>
                  </div>
                  <h3 className="mt-3 font-display text-lg font-semibold text-violet">{title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-charcoal">{excerpt}</p>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-teal-text group-hover:text-violet">
                    Read the Guide <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                  </span>
                </Card>
              </Link>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Active categories */}
      <Section className="bg-white">
        <div className="max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-wider text-teal-text">
            What This Hub Will Cover
          </span>
          <h2 className="mt-2 font-display text-3xl font-semibold text-violet sm:text-4xl">
            Six Categories, Built to Grow
          </h2>
        </div>
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {activeCategories.map(({ icon: Icon, title, body, href, linkLabel }, index) => (
            <Reveal key={title} effect="slide-up" delay={index * 80}>
              <Card className="h-full">
                <Icon className="h-7 w-7 text-teal-deep" aria-hidden="true" />
                <h3 className="mt-4 font-display text-lg font-semibold text-violet">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-charcoal">{body}</p>
                {href && linkLabel && (
                  <Link
                    href={href}
                    className="mt-4 inline-block text-sm font-semibold text-teal-text underline underline-offset-4 hover:text-violet"
                  >
                    {linkLabel}
                  </Link>
                )}
              </Card>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Future categories — honestly marked, not fabricated */}
      <Section className="bg-ivory">
        <div className="max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-wider text-charcoal/60">
            Planned, Not Yet Available
          </span>
          <h2 className="mt-2 font-display text-3xl font-semibold text-violet sm:text-4xl">
            Where This Is Headed
          </h2>
        </div>
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {futureCategories.map(({ icon: Icon, title, body }, index) => (
            <Reveal key={title} effect="slide-up" delay={index * 80}>
              <div className="h-full rounded-lg border-2 border-dotted border-mist bg-cloud/40 p-6">
                <Icon className="h-7 w-7 text-charcoal/50" aria-hidden="true" />
                <h3 className="mt-4 font-display text-lg font-semibold text-charcoal">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-charcoal/80">{body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Get notified — a real, functional use for a hub with no articles yet */}
      <section className="bg-violet">
        <div className="container-page py-16 text-center md:py-20">
          <Mail className="mx-auto h-8 w-8 text-teal-soft" aria-hidden="true" />
          <h2 className="mt-4 font-display text-3xl font-semibold text-white sm:text-4xl">
            Be the First to Know
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base text-white/80">
            We'll send a short note each time a new guide publishes — not
            a marketing newsletter, just what's actually new here.
          </p>
          <div className="mt-8 flex justify-center">
            <NewsletterSignup />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white">
        <div className="container-page flex flex-col items-center gap-6 py-16 text-center md:py-20">
          <h2 className="font-display text-3xl font-semibold text-violet sm:text-4xl">
            Not Ready to Wait? Start With a Real Conversation
          </h2>
          <p className="max-w-xl text-base text-charcoal">
            A free consultation gives you specific answers about your own
            practice, faster than any guide could.
          </p>
          <Button href="/get-your-free-audit" variant="gold">
            Book a Consultation
          </Button>
        </div>
      </section>
    </>
  );
}
