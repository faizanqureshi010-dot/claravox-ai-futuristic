import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin, ShieldCheck, Cpu } from "lucide-react";
import { footerNav, siteConfig } from "@/lib/site-config";
import { Button } from "@/components/Button";
import { Logo } from "@/components/Logo";
import { NewsletterSignup } from "@/components/NewsletterSignup";
import { SocialLinks } from "@/components/ui/SocialLinks";

export function Footer() {
  return (
    <footer className="text-white/90">
      {/* Premium CTA band, above the main footer body */}
      <div className="bg-gradient-to-br from-royal to-violet">
        <div className="container-page flex flex-col items-center gap-6 py-14 text-center md:py-16">
          <h2 className="max-w-2xl font-display text-3xl font-semibold text-white sm:text-4xl">
            Let&rsquo;s Improve How Your Revenue Cycle Runs
          </h2>
          <p className="max-w-xl text-base leading-relaxed text-white/80">
            A technology-enabled partnership focused on operational improvement, not a one-time
            engagement.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button href="/get-your-free-audit" variant="gold">
              Schedule a Consultation
            </Button>
            <Button
              href="mailto:info@claravoxhealthcare.com?subject=Pricing%20Request%20-%20Claravox%20Healthcare"
              variant="secondary"
              className="!border-white !text-white hover:!bg-white/10"
            >
              Request Pricing
            </Button>
          </div>
        </div>
      </div>

      {/* Main footer body */}
      <div className="relative overflow-hidden bg-violet">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 right-[-6%] z-0 flex items-center opacity-[0.03] blur-3xl"
        >
          <Image
            src="/icon-mark.png"
            alt=""
            width={640}
            height={476}
            className="h-auto w-[420px] -rotate-6 lg:w-[540px]"
          />
        </div>

        <div className="container-page relative z-[1] py-16 md:py-20">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-5">
            {/* Column 1: Claravox */}
            <div className="md:col-span-2">
              <Logo variant="white" />
              <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/70">
                Technology-enabled Revenue Cycle Management and Medical Billing partner, helping
                independent practices improve financial performance through accurate billing,
                compliant processes, and modern technology.
              </p>

              <div className="mt-6 space-y-2.5">
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="flex items-center gap-2 text-sm text-white/75 hover:text-white"
                >
                  <Mail className="h-4 w-4 shrink-0" aria-hidden="true" />
                  {siteConfig.email}
                </a>
                <a
                  href={`tel:${siteConfig.phone}`}
                  className="flex items-center gap-2 text-sm text-white/75 hover:text-white"
                >
                  <Phone className="h-4 w-4 shrink-0" aria-hidden="true" />
                  {siteConfig.phoneDisplay}
                </a>
                <p className="flex items-start gap-2 text-sm text-white/75">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
                  <span>
                    {siteConfig.address.streetAddress}, {siteConfig.address.addressLocality},{" "}
                    {siteConfig.address.addressRegion} {siteConfig.address.postalCode}
                  </span>
                </p>
              </div>

              <div className="mt-8 max-w-xs rounded-lg border border-white/10 bg-white/5 p-5">
                <h3 className="text-xs font-semibold uppercase tracking-wider text-teal-soft">
                  Stay Updated
                </h3>
                <p className="mt-1.5 text-xs leading-relaxed text-white/60">
                  Occasional notes on revenue cycle operations. Nothing else.
                </p>
                <div className="mt-3">
                  <NewsletterSignup />
                </div>
              </div>

              {/* Renders nothing until real social links are configured —
                 see components/ui/SocialLinks.tsx for why an empty/placeholder
                 row is deliberately avoided. */}
              <SocialLinks links={[]} className="mt-6" />
            </div>

            {/* Column 2: Healthcare Operations */}
            <div>
              <h2 className="text-xs font-semibold uppercase tracking-wider text-teal-soft">
                Healthcare Operations
              </h2>
              <ul className="mt-5 space-y-3">
                {footerNav.operations.map((item) => (
                  <li key={item.label}>
                    <Link href={item.href} className="text-sm text-white/75 hover:text-white">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: AI Solutions */}
            <div>
              <h2 className="text-xs font-semibold uppercase tracking-wider text-teal-soft">
                AI Solutions
              </h2>
              <ul className="mt-5 space-y-3">
                {footerNav.aiSolutions.map((item, index) => (
                  <li key={`${item.label}-${index}`}>
                    <Link href={item.href} className="text-sm text-white/75 hover:text-white">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 4: Industries — no dedicated pages exist yet, so
               individual items are plain text (never invented links); one
               real link to Who We Serve stands in for "see everything". */}
            <div>
              <h2 className="text-xs font-semibold uppercase tracking-wider text-teal-soft">
                Industries
              </h2>
              <ul className="mt-5 space-y-3">
                {footerNav.industries.items.map((label) => (
                  <li key={label} className="text-sm text-white/60">
                    {label}
                  </li>
                ))}
                <li>
                  <Link
                    href={footerNav.industries.browseAllHref}
                    className="text-sm font-semibold text-gold-hi hover:text-gold"
                  >
                    {footerNav.industries.browseAllLabel}
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Column 5: Company — its own row, since a 5-across grid at
             md:grid-cols-5 already used column 1's span for the brand
             block above; kept as a clearly separated group rather than
             cramming a 6th column in. */}
          <div className="mt-12 border-t border-white/10 pt-10">
            <div className="grid grid-cols-1 gap-x-8 gap-y-3 sm:grid-cols-2 md:flex md:flex-wrap md:items-center md:gap-x-10">
              <h2 className="text-xs font-semibold uppercase tracking-wider text-teal-soft md:mr-2">
                Company
              </h2>
              {footerNav.company.map((item) => (
                <Link key={item.href} href={item.href} className="text-sm text-white/75 hover:text-white">
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Trust accents — icons on the same, already-honest claims. No
             new certifications, numbers, or compliance language added. */}
          <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 border-t border-white/10 pt-8">
            <span className="flex items-center gap-2 text-xs font-medium text-white/70">
              <ShieldCheck className="h-4 w-4 text-teal-soft" aria-hidden="true" />
              Secure Digital Workflow
            </span>
            <span className="flex items-center gap-2 text-xs font-medium text-white/70">
              <Cpu className="h-4 w-4 text-teal-soft" aria-hidden="true" />
              Technology-Enabled Operations
            </span>
          </div>

          <div className="mt-8 flex flex-col gap-4 border-t border-white/15 pt-8 text-sm text-white/70 md:flex-row md:items-center md:justify-between">
            <p>US Registered Entity. HIPAA Aligned Process. BAA On Every Contract.</p>
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
              {footerNav.legal.map((item) => (
                <Link key={item.href} href={item.href} className="hover:text-white">
                  {item.label}
                </Link>
              ))}
              <p>&copy; {new Date().getFullYear()} Claravox Healthcare. All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
