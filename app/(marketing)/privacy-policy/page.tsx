import type { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/Section";
import { JsonLd } from "@/components/JsonLd";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Privacy Policy, Claravox Healthcare",
  description:
    "How Claravox Healthcare collects, uses, and protects information, including protected health information handled under a Business Associate Agreement.",
  alternates: { canonical: "/privacy-policy" },
};

const breadcrumbItems = [
  { name: "Home", path: "/" },
  { name: "Privacy Policy", path: "/privacy-policy" },
];

export default function PrivacyPolicyPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema(breadcrumbItems)} />

      <Section className="bg-white">
        <Breadcrumb items={breadcrumbItems} />
        <div className="mt-6 max-w-2xl">
          <h1 className="font-display text-4xl font-semibold text-violet sm:text-5xl">
            Privacy Policy
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-charcoal">
            This policy explains what information Claravox Healthcare LLC
            collects through this website and through client engagements,
            and how that information is used and protected. It is written
            in plain language on purpose; if anything here is unclear,{" "}
            <Link
              href="/contact"
              className="font-semibold text-teal-text underline underline-offset-4 hover:text-violet"
            >
              ask us directly
            </Link>
            .
          </p>
          <p className="mt-4 text-sm text-charcoal/70">
            Last updated: 2026. This policy applies to claravoxhealthcare.com
            and to information Claravox handles as a business associate to
            its clients.{" "}
            <span className="italic">
              [Placeholder: confirm state and federal privacy law
              applicability — e.g. CCPA, state-level health data statutes —
              with legal counsel before publishing.]
            </span>
          </p>
        </div>

        <div className="mt-14 max-w-2xl space-y-10">
          <div>
            <h2 className="font-display text-xl font-semibold text-violet">
              Information We Collect
            </h2>
            <p className="mt-3 text-base leading-relaxed text-ink">
              Through this website, we collect what you provide directly —
              your name, practice name, email, phone number, and any
              message you send through a form. We do not collect protected
              health information (PHI) through the public website. Standard
              technical information (such as IP address and browser type)
              is collected automatically for security and site performance,
              consistent with normal web hosting practice.
            </p>
          </div>

          <div>
            <h2 className="font-display text-xl font-semibold text-violet">
              Protected Health Information (PHI)
            </h2>
            <p className="mt-3 text-base leading-relaxed text-ink">
              For clients, Claravox may access PHI as part of delivering
              billing and revenue cycle services. This access only ever
              begins after a signed Business Associate Agreement (BAA) is
              in place, with no exceptions, and is governed by that
              agreement and applicable HIPAA requirements rather than by
              this general website policy.
            </p>
          </div>

          <div>
            <h2 className="font-display text-xl font-semibold text-violet">
              How Information Is Used
            </h2>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-base leading-relaxed text-ink">
              <li>To respond to an inquiry or a consultation request</li>
              <li>To deliver contracted services to a client, under a signed BAA</li>
              <li>To send account or engagement-related communication to current clients</li>
              <li>To improve this website and its content</li>
            </ul>
            <p className="mt-3 text-base leading-relaxed text-ink">
              Information submitted through this website is never sold, and
              is not used for purposes beyond what is described here without
              separate, explicit consent.
            </p>
          </div>

          <div>
            <h2 className="font-display text-xl font-semibold text-violet">
              Data Security
            </h2>
            <p className="mt-3 text-base leading-relaxed text-ink">
              Access to client and PHI data is role-based — staff can access
              only what their specific task requires, not broadly shared
              across the team by default. Full technical and administrative
              safeguards applicable to a given engagement are detailed in
              that client&apos;s BAA.
            </p>
          </div>

          <div>
            <h2 className="font-display text-xl font-semibold text-violet">
              Cookies and Analytics
            </h2>
            <p className="mt-3 text-base leading-relaxed text-ink">
              This site may use standard analytics tools to understand
              aggregate traffic and usage patterns. This data is not linked
              to PHI and is not used to make decisions about any individual
              patient or provider. See our{" "}
              <Link
                href="/cookie-policy"
                className="font-semibold text-teal-text underline underline-offset-4 hover:text-violet"
              >
                Cookie Policy
              </Link>{" "}
              for the current, specific detail on what this site actually
              uses today.
            </p>
          </div>

          <div>
            <h2 className="font-display text-xl font-semibold text-violet">
              Your Choices
            </h2>
            <p className="mt-3 text-base leading-relaxed text-ink">
              You can ask what information we hold about you, request a
              correction, or ask us to delete information you submitted
              through this website (where we are not required to retain it
              under a client agreement or applicable law) by contacting us
              directly.
            </p>
          </div>

          <div>
            <h2 className="font-display text-xl font-semibold text-violet">
              Governing Law
            </h2>
            <p className="mt-3 text-base leading-relaxed text-ink italic">
              [Placeholder: specify the governing jurisdiction for this
              policy — typically the state of incorporation or principal
              place of business — to be confirmed with legal counsel before
              publishing.]
            </p>
          </div>

          <div className="border-t border-mist pt-10">
            <h2 className="font-display text-xl font-semibold text-violet">
              Questions About This Policy
            </h2>
            <p className="mt-3 text-base leading-relaxed text-ink">
              Reach out and we will answer directly, the same standard we
              hold for everything else about how Claravox operates.
            </p>
            <Link
              href="/contact"
              className="mt-4 inline-block text-sm font-semibold text-teal-text underline underline-offset-4 hover:text-violet"
            >
              Contact us with your question
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}
