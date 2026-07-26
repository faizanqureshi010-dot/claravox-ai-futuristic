import type { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/Section";
import { JsonLd } from "@/components/JsonLd";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Terms & Conditions, Claravox Healthcare",
  description:
    "The terms governing use of the Claravox Healthcare website and the general terms applicable to Claravox client engagements.",
  alternates: { canonical: "/terms-of-service" },
};

const breadcrumbItems = [
  { name: "Home", path: "/" },
  { name: "Terms & Conditions", path: "/terms-of-service" },
];

export default function TermsOfServicePage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema(breadcrumbItems)} />

      <Section className="bg-white">
        <Breadcrumb items={breadcrumbItems} />
        <div className="mt-6 max-w-2xl">
          <h1 className="font-display text-4xl font-semibold text-violet sm:text-5xl">
            Terms &amp; Conditions
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-charcoal">
            These terms cover use of this website. The specific terms of
            any actual engagement with Claravox Healthcare are governed by
            that client&apos;s signed Statement of Work and Business
            Associate Agreement, not by this page.
          </p>
          <p className="mt-4 text-sm text-charcoal/70">
            Last updated: 2026.
          </p>
        </div>

        <div className="mt-14 max-w-2xl space-y-10">
          <div>
            <h2 className="font-display text-xl font-semibold text-violet">
              Use of This Website
            </h2>
            <p className="mt-3 text-base leading-relaxed text-ink">
              This website is provided to give healthcare practices,
              partners, and other visitors accurate information about
              Claravox Healthcare&apos;s services. Content here is
              informational and does not itself constitute a service
              agreement, a quote, or a guarantee of specific results.
            </p>
          </div>

          <div>
            <h2 className="font-display text-xl font-semibold text-violet">
              Accuracy of Information
            </h2>
            <p className="mt-3 text-base leading-relaxed text-ink">
              We work to keep figures and claims on this site current and
              verifiable. Where a figure is illustrative rather than a
              guarantee, this is stated directly next to the figure, not
              buried elsewhere. If you believe something on this site is
              inaccurate, tell us and we will correct it.
            </p>
          </div>

          <div>
            <h2 className="font-display text-xl font-semibold text-violet">
              No Guarantee of Outcome
            </h2>
            <p className="mt-3 text-base leading-relaxed text-ink">
              References to denial rate targets, AR aging benchmarks, or
              illustrative examples describe what Claravox works toward and
              industry benchmarks, not a guaranteed result for any specific
              practice. Actual results depend on a practice&apos;s specific
              circumstances and are addressed directly in a client&apos;s
              Statement of Work where applicable.
            </p>
          </div>

          <div>
            <h2 className="font-display text-xl font-semibold text-violet">
              Client Engagements
            </h2>
            <p className="mt-3 text-base leading-relaxed text-ink">
              An actual working relationship with Claravox begins with a
              signed Statement of Work and a signed Business Associate
              Agreement. Those documents, not this website, govern scope,
              pricing, responsibilities, term, and termination for that
              engagement.
            </p>
          </div>

          <div>
            <h2 className="font-display text-xl font-semibold text-violet">
              Intellectual Property
            </h2>
            <p className="mt-3 text-base leading-relaxed text-ink">
              The Claravox name, logo, and the content of this site are the
              property of Claravox Healthcare LLC. You are welcome to
              reference or link to this site; reproducing its content
              elsewhere requires our permission.
            </p>
          </div>

          <div>
            <h2 className="font-display text-xl font-semibold text-violet">
              Limitation of Liability
            </h2>
            <p className="mt-3 text-base leading-relaxed text-ink italic">
              [Placeholder: standard limitation-of-liability language to be
              drafted with legal counsel, appropriate to Claravox&apos;s
              specific service model and jurisdiction, before publishing.]
            </p>
          </div>

          <div>
            <h2 className="font-display text-xl font-semibold text-violet">
              Governing Law
            </h2>
            <p className="mt-3 text-base leading-relaxed text-ink italic">
              [Placeholder: specify the governing jurisdiction for these
              terms — typically the state of incorporation or principal
              place of business — to be confirmed with legal counsel before
              publishing.]
            </p>
          </div>

          <div className="border-t border-mist pt-10">
            <h2 className="font-display text-xl font-semibold text-violet">
              Questions About These Terms
            </h2>
            <p className="mt-3 text-base leading-relaxed text-ink">
              Reach out and we will answer directly.
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
