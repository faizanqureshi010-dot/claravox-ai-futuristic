import type { ReactNode } from "react";
import { CheckCircle2, FlaskConical, Rocket, Wrench, BookOpen, Compass } from "lucide-react";

/**
 * Six-tier technology disclosure system (supersedes the earlier
 * three-tier version). Every capability described anywhere on the site
 * must map to exactly one of these — never blurred, never skipped.
 * See the Brand Constitution / claravox-brand-positioning notes for the
 * full definition of each tier and which capabilities currently sit in
 * which one.
 */
export type Tier =
  | "production"
  | "tested-internally"
  | "pilot"
  | "active-development"
  | "research-planning"
  | "future-vision";

const TIER_CONFIG: Record<
  Tier,
  { label: string; icon: typeof CheckCircle2; badgeClass: string; cardClass: string }
> = {
  production: {
    label: "Production Ready",
    icon: CheckCircle2,
    badgeClass: "border-gold bg-gold/10 text-violet",
    cardClass: "border-2 border-gold bg-white",
  },
  "tested-internally": {
    label: "Live In Our Operations",
    icon: FlaskConical,
    badgeClass: "border-teal-deep bg-teal-deep/10 text-teal-text",
    cardClass: "border-2 border-teal-deep bg-white",
  },
  pilot: {
    label: "Pilot Deployment",
    icon: Rocket,
    badgeClass: "border-royal bg-royal/10 text-violet",
    cardClass: "border-2 border-royal bg-white",
  },
  "active-development": {
    label: "Active Development",
    icon: Wrench,
    badgeClass: "border-dashed border-violet/50 bg-violet/5 text-violet",
    cardClass: "border-2 border-dashed border-violet/40 bg-white",
  },
  "research-planning": {
    label: "Architecture & Planning",
    icon: BookOpen,
    badgeClass: "border-dashed border-charcoal/40 bg-charcoal/5 text-charcoal",
    cardClass: "border-2 border-dashed border-charcoal/30 bg-cloud/40",
  },
  "future-vision": {
    label: "Future Vision",
    icon: Compass,
    badgeClass: "border-dotted border-charcoal/40 bg-cloud text-charcoal",
    cardClass: "border-2 border-dotted border-mist bg-cloud/60",
  },
};

/**
 * Renders the tier label as a small pill. This is the ONLY approved way
 * to indicate a capability's maturity anywhere on the site. Solid gold
 * = commercially available today; teal solid = live and in active use
 * in our own operations (not yet offered externally as a standalone
 * product); royal solid = out in a real pilot; violet dashed = actively
 * being built; charcoal dashed = planning/architecture stage only;
 * charcoal dotted = long-term direction. Six distinct treatments so the
 * distinction survives a skim or a screenshot with no caption.
 */
export function TierBadge({ tier }: { tier: Tier }) {
  const { label, icon: Icon, badgeClass } = TIER_CONFIG[tier];
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 font-data text-[11px] font-semibold uppercase tracking-wide ${badgeClass}`}
    >
      <Icon className="h-3.5 w-3.5" aria-hidden="true" />
      {label}
    </span>
  );
}

type TierCardProps = {
  tier: Tier;
  title: string;
  description: string;
  className?: string;
};

/** The full card variant for the Automation Ladder / Technology page. */
export function TierCard({ tier, title, description, className = "" }: TierCardProps) {
  const { cardClass } = TIER_CONFIG[tier];
  return (
    <div className={`rounded-lg p-6 shadow-resting ${cardClass} ${className}`}>
      <TierBadge tier={tier} />
      <h3 className="mt-3 font-display text-lg font-semibold text-violet">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-charcoal">{description}</p>
    </div>
  );
}

/** Groups TierCards responsively — works for any number of tiers (2-6). */
export function TierLadder({ children }: { children: ReactNode }) {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:items-start">
      {children}
    </div>
  );
}
