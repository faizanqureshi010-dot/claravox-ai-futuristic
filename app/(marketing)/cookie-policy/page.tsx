import type { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/Section";
import { JsonLd } from "@/components/JsonLd";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Cookie Policy, Claravox Healthcare",
  description:
    "What Claravox Healthcare's website actually stores in your browser today, and how that will be kept current as it changes.",
  alternates: { canonical: "/cookie-policy" },
};

const breadcrumbItems = [
  { name: "Home", path: "/" },
  { name: "Cookie Policy", path: "/cookie-policy" },
];

export default function CookiePolicyPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema(breadcrumbItems)} />

      <Section className="bg-white">
        <Breadcrumb items={breadcrumbItems} />
        <div className="mt-6 max-w-2xl">
          <h1 className="font-display text-4xl font-semibold text-violet sm:text-5xl">
            Cookie Policy
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-charcoal">
            This page describes what claravoxhealthcare.com actually stores
            in your browser today — not a generic list of what a website
            like this might use. We&apos;ll update it directly if that
            changes, rather than leaving it to describe something that
            isn&apos;t true.
          </p>
          <p className="mt-4 text-sm text-charcoal/70">Last updated: 2026.</p>
        </div>

        <div className="mt-14 max-w-2xl space-y-10">
          <div>
            <h2 className="font-display text-xl font-semibold text-violet">
              What This Site Uses Today
            </h2>
            <p className="mt-3 text-base leading-relaxed text-ink">
              This site does not currently use advertising or third-party
              tracking cookies. A small amount of browser storage is used
              for strictly functional purposes — for example, remembering
              that you dismissed a site announcement, so it doesn&apos;t
              reappear on your next page view within the same session.
              This storage is not used to track you across other websites
              and is not linked to any protected health information.
            </p>
          </div>

          <div>
            <h2 className="font-display text-xl font-semibold text-violet">
              Analytics
            </h2>
            <p className="mt-3 text-base leading-relaxed text-ink">
              Claravox may add standard, privacy-conscious analytics tools
              in the future to understand aggregate site usage — never to
              identify or track an individual visitor or patient. If and
              when that happens, this page will be updated to name the
              specific tool and what it stores, rather than a vague
              advance description.
            </p>
          </div>

          <div>
            <h2 className="font-display text-xl font-semibold text-violet">
              Your Browser Controls
            </h2>
            <p className="mt-3 text-base leading-relaxed text-ink">
              Most browsers let you block or clear cookies and site data
              through their own settings. Because this site's current
              storage use is limited to the functional purpose described
              above, blocking it will not affect your ability to use the
              site — you may simply see a dismissed announcement again.
            </p>
          </div>

          <div>
            <h2 className="font-display text-xl font-semibold text-violet">
              Jurisdiction-Specific Notices
            </h2>
            <p className="mt-3 text-base leading-relaxed text-ink italic">
              [Placeholder: add jurisdiction-specific cookie consent
              language (e.g., EU/UK ePrivacy, applicable US state law) if
              and when this site's audience or tracking practices require
              it — to be confirmed with legal counsel before publishing.]
            </p>
          </div>

          <div className="border-t border-mist pt-10">
            <h2 className="font-display text-xl font-semibold text-violet">
              Related Policies
            </h2>
            <p className="mt-3 text-base leading-relaxed text-ink">
              See our{" "}
              <Link
                href="/privacy-policy"
                className="font-semibold text-teal-text underline underline-offset-4 hover:text-violet"
              >
                Privacy Policy
              </Link>{" "}
              for how we handle information more broadly, or{" "}
              <Link
                href="/contact"
                className="font-semibold text-teal-text underline underline-offset-4 hover:text-violet"
              >
                contact us
              </Link>{" "}
              with any question about this page.
            </p>
          </div>
        </div>
      </Section>
    </>
  );
}
