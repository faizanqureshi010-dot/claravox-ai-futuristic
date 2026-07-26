import type { Metadata } from "next";
import Link from "next/link";
import { Keyboard, Eye, Waves, Type } from "lucide-react";
import { Section } from "@/components/Section";
import { JsonLd } from "@/components/JsonLd";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Accessibility Statement, Claravox Healthcare",
  description:
    "Claravox Healthcare's ongoing approach to building an accessible website, and how to report an accessibility issue directly.",
  alternates: { canonical: "/accessibility-statement" },
};

const breadcrumbItems = [
  { name: "Home", path: "/" },
  { name: "Accessibility Statement", path: "/accessibility-statement" },
];

const efforts = [
  {
    icon: Keyboard,
    title: "Keyboard Navigation",
    body: "Every interactive element on this site — including menus, forms, and expandable sections — is built to be operable from a keyboard alone, with a visible focus indicator at each step.",
  },
  {
    icon: Eye,
    title: "Color and Contrast",
    body: "Text and background color pairings across the site are checked against WCAG contrast guidelines, and adjusted where they fell short rather than left as-is.",
  },
  {
    icon: Waves,
    title: "Reduced Motion",
    body: "Visitors who have requested reduced motion at the operating-system level see animations replaced with instant state changes, site-wide, not on a page-by-page basis.",
  },
  {
    icon: Type,
    title: "Structure for Screen Readers",
    body: "Pages use a single, clear heading per page, landmark regions, and a skip-to-content link, so the site can be navigated by structure, not just by sight.",
  },
];

export default function AccessibilityStatementPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema(breadcrumbItems)} />

      <Section className="bg-white">
        <Breadcrumb items={breadcrumbItems} />
        <div className="mt-6 max-w-2xl">
          <h1 className="font-display text-4xl font-semibold text-violet sm:text-5xl">
            Accessibility Statement
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-charcoal">
            Claravox Healthcare is committed to making this website usable
            by the widest reasonable range of visitors, including people
            using assistive technology. This is an ongoing effort, not a
            claim that every page is perfect — and we&apos;d genuinely
            rather hear about a real problem than have this page overstate
            where things stand.
          </p>
          <p className="mt-4 text-sm text-charcoal/70">Last updated: 2026.</p>
        </div>

        <div className="mt-14 max-w-2xl">
          <h2 className="font-display text-xl font-semibold text-violet">
            What We've Actually Built
          </h2>
          <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {efforts.map(({ icon: Icon, title, body }) => (
              <div key={title} className="rounded-lg border border-mist bg-white p-6 shadow-resting">
                <Icon className="h-6 w-6 text-teal-deep" aria-hidden="true" />
                <h3 className="mt-3 font-display text-base font-semibold text-violet">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-charcoal">{body}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 max-w-2xl space-y-10">
          <div>
            <h2 className="font-display text-xl font-semibold text-violet">
              Conformance Target
            </h2>
            <p className="mt-3 text-base leading-relaxed text-ink">
              This site is built with the Web Content Accessibility
              Guidelines (WCAG) 2.1 as an ongoing reference point. We have
              not commissioned a formal third-party conformance audit, and
              we are not claiming full certification at a specific level.{" "}
              <span className="italic">
                [Placeholder: if a formal audit or conformance certification
                is completed in the future, name the specific standard and
                level achieved here.]
              </span>
            </p>
          </div>

          <div>
            <h2 className="font-display text-xl font-semibold text-violet">
              Known Limitations
            </h2>
            <p className="mt-3 text-base leading-relaxed text-ink italic">
              [Placeholder: list any specific, currently-known accessibility
              gaps here as they're identified, rather than implying there
              are none.]
            </p>
          </div>

          <div className="border-t border-mist pt-10">
            <h2 className="font-display text-xl font-semibold text-violet">
              Report an Accessibility Issue
            </h2>
            <p className="mt-3 text-base leading-relaxed text-ink">
              If you encounter a barrier using this site, tell us directly
              — what page, what happened, and what device or assistive
              technology you were using, if relevant. We will respond and
              address genuine issues directly, the same standard we hold
              for everything else about how Claravox operates.
            </p>
            <Link
              href="/contact"
              className="mt-4 inline-block text-sm font-semibold text-teal-text underline underline-offset-4 hover:text-violet"
            >
              Report an issue
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}
