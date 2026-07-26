import type { Metadata } from "next";
import Link from "next/link";
import { AlertTriangle, ClipboardList, Search, FileEdit, SendHorizontal, RotateCcw } from "lucide-react";
import { Button } from "@/components/Button";
import { Section } from "@/components/Section";
import { Card } from "@/components/Card";
import { JsonLd } from "@/components/JsonLd";
import { FAQAccordion } from "@/components/FAQAccordion";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { ComparisonTable } from "@/components/ui/ComparisonTable";
import { TierCard, TierLadder } from "@/components/ui/TierBadge";
import { breadcrumbSchema, faqSchema, articleSchema } from "@/lib/schema";

// This is the first individual long-form Knowledge Centre article on the
// site — /resources currently only lists categories (several of which
// link out to existing pillar pages standing in for articles), so there
// was no existing per-article template to match. This page follows the
// site's established page-composition pattern instead (Section/Card,
// JsonLd + breadcrumbSchema, the honest TierLadder for any technology
// claim) rather than inventing a new one.
export const metadata: Metadata = {
  title: "Denial Management That Fixes the Cause, Not Just the Claim, Claravox Healthcare",
  description:
    "A practical guide to denial management for independent physician practices: categorizing denials, tracing root cause, and the real MGMA, Kodiak Solutions, and Experian Health data behind why speed and root-cause correction matter more than resubmission alone.",
  alternates: { canonical: "/resources/denial-management-optimization" },
};

const ARTICLE_PATH = "/resources/denial-management-optimization";
const PUBLISHED_DATE = "2026-07-26";

const breadcrumbItems = [
  { name: "Home", path: "/" },
  { name: "Resources", path: "/resources" },
  { name: "Denial Management That Fixes the Cause, Not Just the Claim", path: ARTICLE_PATH },
];

const denialCategoryComparison = {
  columns: [
    { key: "cause", label: "Typical Cause" },
    { key: "caughtWhere", label: "Where It's Usually Caught" },
    { key: "recoverable", label: "Generally Recoverable?" },
  ],
  rows: [
    {
      label: "Technical / Administrative",
      values: {
        cause: "Missing modifier, mismatched demographics, duplicate claim, invalid NPI",
        caughtWhere: "Claim scrubbing, before submission",
        recoverable: "Yes — usually correctable and resubmittable within days",
      },
    },
    {
      label: "Eligibility-Related",
      values: {
        cause: "Coverage inactive on date of service, wrong payer on file, uncaught plan change",
        caughtWhere: "Front desk / eligibility verification",
        recoverable: "Yes, but time-sensitive — some payers won't reprocess after the filing window closes",
      },
    },
    {
      label: "Clinical / Medical-Necessity",
      values: {
        cause: "Documentation doesn't support the billed code, missing prior authorization",
        caughtWhere: "Coding review or payer medical review",
        recoverable: "Sometimes — often requires a formal, documentation-backed appeal, success not guaranteed",
      },
    },
  ],
};

const workflowSteps = [
  {
    icon: ClipboardList,
    title: "Identify",
    body: "Every denial is logged with its payer, denial reason (CARC code), and dollar amount — not just noted as \"denied\" and set aside.",
  },
  {
    icon: Search,
    title: "Categorize",
    body: "Sorted into Technical/Administrative, Eligibility-Related, or Clinical/Medical-Necessity, so it's clear from the start whether this is a quick fix or a documentation problem.",
  },
  {
    icon: AlertTriangle,
    title: "Trace Root Cause",
    body: "Beyond fixing the specific claim: was this a one-off error, or a pattern tied to a specific payer, code, or provider?",
  },
  {
    icon: FileEdit,
    title: "Correct or Appeal",
    body: "Technical and administrative denials typically get corrected and resubmitted directly. Clinical and medical-necessity denials often require a formal, documentation-backed appeal.",
  },
  {
    icon: SendHorizontal,
    title: "Resubmit Within the Window",
    body: "Every payer sets its own timely-filing and appeal deadlines — tracked explicitly, never estimated.",
  },
  {
    icon: RotateCcw,
    title: "Feed the Fix Upstream",
    body: "If the root cause is a pattern, the fix goes back to whoever owns that upstream step — coding, front-desk eligibility, credentialing — so the same denial stops recurring.",
  },
];

const faqItems = [
  {
    question: "Is a denial the same as a rejection?",
    answer:
      "No. A rejection typically means the claim never made it into the payer's adjudication system at all — often a formatting or eligibility issue caught before processing. A denial means the claim was received, processed, and formally refused, which usually comes with a specific reason code and starts a real appeal clock.",
  },
  {
    question: "How long do we have to appeal a denial?",
    answer:
      "It depends entirely on the payer — timely-filing and appeal windows vary and are stated in each payer's own provider manual or contract, typically ranging from a few weeks to several months. There's no single industry-wide number; this is exactly why tracking deadlines per payer, not assuming a standard window, matters.",
  },
  {
    question: "Should we write off old, unworked denials, or try to fix the process instead?",
    answer:
      "Both, and in that order of urgency. Old denials past their filing window usually can't be recovered no matter what — that's a closed loss. But the reason they piled up in the first place is a process question worth answering, since the same gap will keep producing new unworked denials until it's fixed.",
  },
  {
    question: "Does more advanced technology mean fewer denials?",
    answer:
      "Not by itself. Technology can flag patterns and speed up categorization, but a denial caused by a documentation gap or a missed eligibility check gets solved by fixing that upstream step — not by software that processes the resulting denial faster. That's part of why we're not overselling automation here; the root-cause work is still fundamentally human judgment applied consistently.",
  },
];

export default function DenialManagementOptimizationArticlePage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema(breadcrumbItems)} />
      <JsonLd
        data={articleSchema(
          "Denial Management That Fixes the Cause, Not Just the Claim",
          "A practical guide to denial management for independent physician practices: categorizing denials, tracing root cause, and the real data behind why speed and root-cause correction matter more than resubmission alone.",
          ARTICLE_PATH,
          PUBLISHED_DATE
        )}
      />
      <JsonLd data={faqSchema(faqItems)} />

      {/* Hero */}
      <section className="relative overflow-hidden bg-ivory">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-24 -top-28 h-96 w-96 rounded-full bg-teal-deep/15 blur-3xl"
        />
        <div className="container-page relative py-16 lg:py-20">
          <Breadcrumb items={breadcrumbItems} />
          <div className="mt-6 max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-wider text-teal-text">
              Revenue Cycle Guides
            </span>
            <h1 className="mt-2 font-display text-4xl font-semibold leading-tight text-violet sm:text-5xl">
              Denial Management That Fixes the Cause, Not Just the Claim
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-charcoal">
              Denial management is the process of identifying why a claim
              was denied, correcting the underlying cause, and resubmitting
              or appealing it — and feeding what was learned back into the
              front end of the revenue cycle so the same denial doesn't
              happen again.
            </p>
          </div>
        </div>
      </section>

      {/* Problem Definition + Why It Matters (folded together) */}
      <Section className="bg-white">
        <div className="max-w-3xl space-y-4 text-base leading-relaxed text-charcoal">
          <p>
            It's easy to confuse denial management with two adjacent
            functions it's often lumped in with: it isn't the same as{" "}
            <Link
              href="/accounts-receivable"
              className="font-semibold text-teal-text underline underline-offset-4 hover:text-violet"
            >
              accounts receivable follow-up
            </Link>
            , which works claims that are simply unpaid or aging, denied or
            not; and it isn't the same as denial prevention, which happens
            upstream at coding and eligibility verification. Denial
            management sits between the two — it's what happens after a
            claim comes back rejected, and it's the discipline that
            determines whether that rejection becomes a two-day delay or a
            permanent write-off.
          </p>
          <p>
            That distinction matters more than it sounds like it should. A
            practice can have excellent billing staff and still bleed
            revenue if no one owns the specific job of tracing a denial
            back to its root cause. Every denied claim is a diagnostic
            signal about something upstream — a documentation gap, an
            eligibility check that was skipped, a payer rule that changed
            without anyone noticing. Treated only as a claim to resubmit,
            that signal gets lost. Treated as denial management, it gets
            used.
          </p>
        </div>
      </Section>

      {/* Core Concepts — real comparison table */}
      <Section className="bg-cloud">
        <div className="max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-wider text-teal-text">
            Core Concepts
          </span>
          <h2 className="mt-2 font-display text-3xl font-semibold text-violet sm:text-4xl">
            The Denial Categories That Actually Matter
          </h2>
          <p className="mt-4 text-base leading-relaxed text-charcoal">
            Not all denials come from the same place, and they don't get
            fixed the same way. Grouping them by category — rather than by
            payer or dollar amount — is what makes a denial workflow
            actually manageable instead of a pile of individual fires.
          </p>
        </div>
        <div className="mt-8">
          <ComparisonTable
            columns={denialCategoryComparison.columns}
            rows={denialCategoryComparison.rows}
            caption="Comparison of denial categories by cause, where they're caught, and recoverability"
          />
        </div>
        <p className="mt-6 max-w-3xl text-sm leading-relaxed text-charcoal">
          The practical use of this table isn't academic. A practice with
          mostly Technical/Administrative denials has a claim-scrubbing
          problem and a comparatively easy fix. A practice with a rising
          share of Clinical/Medical-Necessity denials has a
          documentation-and-coding problem that a faster resubmission
          process won't solve — no amount of speed fixes a denial that was
          never going to be approved as coded in the first place.
        </p>
      </Section>

      {/* Step-by-Step Guide */}
      <Section className="bg-white">
        <div className="max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-wider text-teal-text">
            Step-by-Step Guide
          </span>
          <h2 className="mt-2 font-display text-3xl font-semibold text-violet sm:text-4xl">
            The Denial Resolution Workflow
          </h2>
        </div>
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {workflowSteps.map(({ icon: Icon, title, body }, index) => (
            <Card key={title} className="h-full">
              <div className="flex items-center gap-3">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-teal-deep font-data text-sm font-bold text-white">
                  {index + 1}
                </span>
                <Icon className="h-5 w-5 text-teal-deep" aria-hidden="true" />
              </div>
              <h3 className="mt-3 font-display text-lg font-semibold text-violet">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-charcoal">{body}</p>
            </Card>
          ))}
        </div>
        <p className="mt-6 max-w-3xl text-sm leading-relaxed text-charcoal">
          That last step is the one most billing operations skip, and it's
          the one that actually compounds over time. Fixing today's denial
          without feeding the lesson upstream means fixing the same denial
          again next month.
        </p>
      </Section>

      {/* Worked Example */}
      <Section className="bg-cloud">
        <div className="max-w-3xl">
          <span className="text-xs font-semibold uppercase tracking-wider text-teal-text">
            Worked Example
          </span>
          <h2 className="mt-2 font-display text-3xl font-semibold text-violet sm:text-4xl">
            Tracing One Denial Back to a Pattern
          </h2>
          <p className="mt-2 text-xs font-semibold uppercase tracking-wider text-charcoal/60">
            Illustrative scenario — not an actual client case
          </p>
          <div className="mt-6 space-y-4 text-base leading-relaxed text-charcoal">
            <p>
              A cardiology practice submits a claim for CPT 93306 (a
              transthoracic echocardiogram) and receives a denial with CARC
              code <span className="font-data font-semibold text-violet">CO-16</span> —
              "claim/service lacks information or has submission/billing
              error(s)." On its own, that code doesn't say much. Tracing it
              back to the actual remittance advice shows the real issue:
              the claim was missing a required modifier distinguishing the
              professional component from the technical component, a
              common requirement for imaging services billed by a
              facility-affiliated cardiology group.
            </p>
            <p>
              This is a Technical/Administrative denial — correctable, and
              not a documentation or medical-necessity problem. The claim
              gets corrected with the appropriate modifier and resubmitted
              within the payer's resubmission window. But the useful part
              isn't the resubmission — it's noticing that three other
              claims from the same provider, same CPT code, denied for the
              identical reason over the prior six weeks. That's not three
              isolated mistakes; it's a pattern traceable to how that
              specific code is being billed. The fix that actually matters
              is flagging it to whoever builds claims for that provider, so
              the modifier is applied correctly before submission going
              forward — not caught, again, after the fact.
            </p>
          </div>
        </div>
      </Section>

      {/* Common Mistakes */}
      <Section className="bg-white">
        <div className="max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-wider text-teal-text">
            Common Mistakes
          </span>
          <h2 className="mt-2 font-display text-3xl font-semibold text-violet sm:text-4xl">
            What Undermines Denial Management Most
          </h2>
        </div>
        <ul className="mt-8 max-w-3xl space-y-4">
          {[
            {
              title: "Treating every denial as a one-off.",
              body: "Reworking the claim in front of you without asking whether it's part of a pattern means solving the same problem repeatedly instead of once.",
            },
            {
              title: "No CARC-level tracking.",
              body: "Without categorizing denials by their actual reason code, it's impossible to see which category is driving the volume — and impossible to prioritize fixing the right thing.",
            },
            {
              title: "Missing appeal deadlines.",
              body: "A denial that's correctable in principle becomes permanently unrecoverable the moment the payer's window closes — no clinical merit, documentation quality, or persistence changes that once the deadline has passed.",
            },
            {
              title: "No upstream feedback loop.",
              body: "Denial management that stops at \"resubmitted\" instead of asking why it happened and how to stop it recurring caps its own value at damage control.",
            },
          ].map(({ title, body }) => (
            <li key={title} className="flex gap-3">
              <AlertTriangle className="mt-1 h-5 w-5 shrink-0 text-gold" aria-hidden="true" />
              <p className="text-base leading-relaxed text-charcoal">
                <span className="font-semibold text-violet">{title}</span> {body}
              </p>
            </li>
          ))}
        </ul>
      </Section>

      {/* Operational Impact — the site's specific differentiator, with real cited data */}
      <Section className="bg-ivory">
        <div className="max-w-3xl">
          <span className="text-xs font-semibold uppercase tracking-wider text-teal-text">
            Operational Impact
          </span>
          <h2 className="mt-2 font-display text-3xl font-semibold text-violet sm:text-4xl">
            Why This Is a Revenue Function, Not Just an Administrative One
          </h2>
          <div className="mt-6 space-y-4 text-base leading-relaxed text-charcoal">
            <p>
              A denial isn't neutral the moment it's issued — it's a claim
              on a clock. Every payer sets a timely-filing or appeal
              deadline, and once that deadline passes, the claim isn't
              delayed anymore; it's gone. There's no resubmission, no late
              appeal, no partial recovery. That's what makes the{" "}
              <em>speed</em> of denial management — not just its eventual
              thoroughness — a direct revenue variable, not just an
              operational convenience.
            </p>
            <p>
              The scale of this is not a fringe concern. Kodiak Solutions'
              proprietary revenue cycle data — drawn from more than 2,100
              hospitals and 300,000 physicians — shows the initial denial
              rate climbing to 11.81% in 2024, up from 11.5% in 2023.
              Experian Health's 2025 State of Claims survey, now in its
              third year, found 41% of providers reporting denial rates
              above 10%, up from 38% in 2024 and 30% when the survey began
              in 2022 — a consistent upward trend across three consecutive
              years of the same survey, not a single data point. MGMA's
              benchmarking tells a more specific story for practices this
              size: their most recent DataDive Practice Operations data set
              showed a single-specialty aggregate rate of 8% for claims
              denied on first submission — the same rate MGMA documented
              back in 2019, suggesting that for many single-specialty
              groups, this hasn't been a solved problem so much as a
              persistent, steady cost of doing business, even as the
              broader hospital-system numbers above have moved upward.
            </p>
            <p>
              Put plainly: every claim that ages past its filing deadline
              unworked is money the practice already earned that it will
              never collect — not "delayed," collected. That's the
              mechanism that makes denial management, done with real
              urgency and root-cause discipline, one of the
              highest-leverage functions in the entire revenue cycle.
            </p>
          </div>
        </div>
      </Section>

      {/* Technology & Automation Perspective — honest, six-tier */}
      <Section className="bg-white" id="technology">
        <div className="max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-wider text-teal-text">
            Technology & Automation Perspective
          </span>
          <h2 className="mt-2 font-display text-3xl font-semibold text-violet sm:text-4xl">
            Where Technology Actually Fits, Today
          </h2>
          <p className="mt-4 text-base leading-relaxed text-charcoal">
            Denial management at Claravox today is handled directly by our
            billing team — every denied claim is categorized, traced to
            root cause, and worked by a person, not software. We think
            that's the right place for it to sit right now, and we're not
            going to tell you otherwise to sound more advanced than we are.
          </p>
        </div>
        <div className="mt-10">
          <TierLadder>
            <TierCard
              tier="active-development"
              title="Denial Management Automation"
              description="Tools that could flag denial patterns automatically or draft first-pass appeal language sit here — real, ongoing work, not a future aspiration described as if it already exists, but not live in how your claims are actually worked today."
            />
          </TierLadder>
          <p className="mt-6 max-w-2xl text-xs leading-relaxed text-charcoal/70">
            See the{" "}
            <Link
              href="/technology"
              className="font-semibold text-teal-text underline underline-offset-4 hover:text-violet"
            >
              Technology page
            </Link>{" "}
            for the complete, current picture across all six tiers — nothing rounded up.
          </p>
        </div>
      </Section>

      {/* Metrics to Track */}
      <Section className="bg-cloud">
        <div className="max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-wider text-teal-text">
            Metrics to Track
          </span>
          <h2 className="mt-2 font-display text-3xl font-semibold text-violet sm:text-4xl">
            What Actually Tells You Denial Management Is Working
          </h2>
        </div>
        <ul className="mt-8 max-w-3xl space-y-3">
          {[
            { label: "Denial rate", body: "Denied claims ÷ total claims submitted — your baseline, and the one to compare against benchmarks like MGMA's or Kodiak's above." },
            { label: "Days to resolution", body: "How long, on average, a denial sits before it's worked." },
            { label: "Appeal success rate", body: "Of the denials you actually appeal, how many get overturned." },
            { label: "Top denial reasons by volume", body: "Which CARC codes or categories drive the majority of your denials — fixing the top two or three usually matters more than fixing all of them evenly." },
            { label: "Timely-filing misses", body: "How many denials age past the appeal window before anyone works them; ideally, this number is zero." },
          ].map(({ label, body }) => (
            <li key={label} className="flex gap-3 text-base leading-relaxed text-charcoal">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-teal-deep" aria-hidden="true" />
              <p>
                <span className="font-semibold text-violet">{label}.</span> {body}
              </p>
            </li>
          ))}
        </ul>
      </Section>

      {/* FAQs */}
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

      {/* Practical Takeaways */}
      <Section className="bg-ivory">
        <div className="max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-wider text-teal-text">
            Practical Takeaways
          </span>
          <h2 className="mt-2 font-display text-3xl font-semibold text-violet sm:text-4xl">
            The Short Version
          </h2>
        </div>
        <ul className="mt-8 max-w-3xl space-y-3">
          {[
            "Denial management is prevention's follow-up act, not a replacement for it — the two work together, not interchangeably.",
            "Categorizing every denial by CARC code and cause is what turns a pile of individual problems into a visible, fixable pattern.",
            "Speed matters as much as thoroughness: a denial worked before its filing deadline is recoverable revenue; the same denial worked after is a permanent loss, no matter how well it's argued.",
            "The upstream feedback loop — telling coding, front-desk, or credentialing what caused a denial — is the step that actually reduces next month's denial volume, not just this month's.",
          ].map((point) => (
            <li key={point} className="flex gap-3 text-base leading-relaxed text-charcoal">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" aria-hidden="true" />
              <p>{point}</p>
            </li>
          ))}
        </ul>
      </Section>

      {/* Relevant Claravox Services — one subtle mention, at the end only */}
      <section className="bg-violet">
        <div className="container-page flex flex-col items-center gap-6 py-16 text-center md:py-20">
          <h2 className="font-display text-3xl font-semibold text-white sm:text-4xl">
            See This Applied to Your Own Denials
          </h2>
          <p className="max-w-xl text-base text-white/80">
            Denial management is one part of how Claravox approaches
            revenue cycle operations end to end — see our{" "}
            <Link
              href="/denial-management"
              className="font-semibold text-gold-hi underline underline-offset-4 hover:text-white"
            >
              Denial Management
            </Link>{" "}
            page for how this fits into a complete, technology-enabled
            billing partnership.
          </p>
          <Button href="/get-your-free-audit" variant="gold">
            Recover Your Denied Claims
          </Button>
        </div>
      </section>
    </>
  );
}
