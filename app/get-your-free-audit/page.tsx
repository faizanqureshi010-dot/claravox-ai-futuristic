import type { Metadata } from "next";
import { FileText, Percent, ArrowRight } from "lucide-react";
import { LeadForm } from "@/components/LeadForm";

export const metadata: Metadata = {
  title: "Book Your Free Consultation, Claravox Healthcare",
  description:
    "Book a free consultation and see your practice's actual denial rate and AR aging, no commitment required.",
  alternates: { canonical: "/get-your-free-audit" },
};

const includes = [
  { icon: FileText, text: "A review of your recent claims and AR data." },
  { icon: Percent, text: "Your actual denial rate, not an industry average." },
  { icon: ArrowRight, text: "A clear next step, whether that is working with Claravox or not." },
];

export default function GetYourFreeConsultationPage() {
  return (
    <>
      <div className="py-14 md:py-20">
        <div className="container-page">
          <div className="mx-auto max-w-xl text-center">
            <h1 className="font-display text-3xl font-semibold text-violet sm:text-4xl">
              Book Your Free Consultation
            </h1>
            <p className="mt-4 text-base leading-relaxed text-charcoal">
              See your actual denial rate and AR aging before you decide
              anything. No commitment, no pressure — just real numbers on
              your practice.
            </p>
          </div>

          <div className="mx-auto mt-10 max-w-xl">
            <h2 className="font-display text-lg font-semibold text-violet">
              What You Get
            </h2>
            <ul className="mt-4 space-y-3">
              {includes.map(({ icon: Icon, text }) => (
                <li key={text} className="flex items-center gap-3">
                  <Icon className="h-5 w-5 shrink-0 text-charcoal" aria-hidden="true" />
                  <span className="text-sm text-ink">{text}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mx-auto mt-10 max-w-xl">
            <h2 className="sr-only">Book Your Free Consultation</h2>
            <LeadForm />
          </div>

          <div className="mx-auto mt-10 max-w-xl border-t border-mist pt-6 text-center">
            <p className="text-xs font-medium uppercase tracking-wider text-charcoal">
              US Registered Entity. HIPAA Aligned Process. BAA On Every
              Contract.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
