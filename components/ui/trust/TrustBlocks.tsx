import type { ReactNode } from "react";
import { ShieldCheck, FileCheck, HeartHandshake, Cpu } from "lucide-react";

/** Small inline badge — the compact form of a trust signal, for use in a
 * card or a tight header area where TrustStrip's full row doesn't fit. */
export function HIPAABadge() {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-teal-deep/30 bg-teal-deep/5 px-3 py-1 text-xs font-semibold text-teal-text">
      <ShieldCheck className="h-3.5 w-3.5" aria-hidden="true" />
      HIPAA Aligned Process
    </span>
  );
}

type BlockProps = {
  title: string;
  children: ReactNode;
};

function TrustBlock({ icon: Icon, title, children }: BlockProps & { icon: typeof ShieldCheck }) {
  return (
    <div className="flex items-start gap-4">
      <Icon className="mt-1 h-6 w-6 shrink-0 text-teal-deep" aria-hidden="true" />
      <div>
        <h3 className="font-display text-lg font-semibold text-violet">{title}</h3>
        <div className="mt-1.5 text-sm leading-relaxed text-charcoal">{children}</div>
      </div>
    </div>
  );
}

/**
 * Named variants of the same TrustBlock shape, matching the four trust
 * points already proven on the Compliance & Security page — formalized
 * here as reusable components so that page's content can move into this
 * structure (Audit's UI Improvement: give it visual hierarchy beyond
 * plain text blocks) and so the same pattern is available to the future
 * Technology page.
 */
export function SecurityBlock({ title, children }: BlockProps) {
  return <TrustBlock icon={ShieldCheck} title={title}>{children}</TrustBlock>;
}

export function ComplianceBlock({ title, children }: BlockProps) {
  return <TrustBlock icon={FileCheck} title={title}>{children}</TrustBlock>;
}

export function PartnershipBlock({ title, children }: BlockProps) {
  return <TrustBlock icon={HeartHandshake} title={title}>{children}</TrustBlock>;
}

export function TechnologyBlock({ title, children }: BlockProps) {
  return <TrustBlock icon={Cpu} title={title}>{children}</TrustBlock>;
}
