import type { ReactNode, ElementType } from "react";

type BaseProps = {
  children: ReactNode;
  className?: string;
};

/**
 * Every named style here corresponds 1:1 to a row in the Design System's
 * Section 3 type scale table. Sizes are expressed as the same Tailwind
 * scale already used across the codebase (text-4xl sm:text-5xl, etc.) so
 * these compose with existing responsive patterns rather than introducing
 * a parallel sizing system.
 */

export function DisplayHeading({ children, className = "" }: BaseProps) {
  return (
    <h1 className={`font-display text-5xl font-semibold leading-[1.05] text-violet sm:text-6xl lg:text-[3.75rem] ${className}`}>
      {children}
    </h1>
  );
}

export function PageHeading({ children, className = "", as = "h1" }: BaseProps & { as?: ElementType }) {
  const Tag = as;
  return (
    <Tag className={`font-display text-4xl font-semibold leading-tight text-violet sm:text-5xl ${className}`}>
      {children}
    </Tag>
  );
}

export function SectionHeading({ children, className = "", as = "h2" }: BaseProps & { as?: ElementType }) {
  const Tag = as;
  return (
    <Tag className={`font-display text-3xl font-semibold leading-snug text-violet sm:text-4xl ${className}`}>
      {children}
    </Tag>
  );
}

export function Subheading({ children, className = "", as = "h3" }: BaseProps & { as?: ElementType }) {
  const Tag = as;
  return (
    <Tag className={`font-display text-xl font-semibold leading-snug text-violet ${className}`}>
      {children}
    </Tag>
  );
}

export function BodyLarge({ children, className = "" }: BaseProps) {
  return <p className={`text-lg leading-relaxed text-charcoal ${className}`}>{children}</p>;
}

export function BodyText({ children, className = "" }: BaseProps) {
  return <p className={`text-base leading-relaxed text-charcoal ${className}`}>{children}</p>;
}

export function BodySmall({ children, className = "" }: BaseProps) {
  return <p className={`text-sm leading-relaxed text-charcoal ${className}`}>{children}</p>;
}

export function Label({ children, className = "" }: BaseProps) {
  return (
    <span className={`text-xs font-semibold uppercase tracking-wider text-teal-text ${className}`}>
      {children}
    </span>
  );
}

export function Caption({ children, className = "" }: BaseProps) {
  return <span className={`text-[13px] leading-normal text-charcoal/70 ${className}`}>{children}</span>;
}

export function Stat({ children, className = "" }: BaseProps) {
  return (
    <span className={`font-data tabular-nums text-4xl font-semibold text-violet sm:text-5xl ${className}`}>
      {children}
    </span>
  );
}

export function DashboardNumber({ children, className = "" }: BaseProps) {
  return (
    <span className={`font-data tabular-nums text-xl font-semibold text-violet sm:text-2xl ${className}`}>
      {children}
    </span>
  );
}

export function Quote({ children, className = "" }: BaseProps) {
  return (
    <p className={`font-display text-2xl italic leading-relaxed text-violet sm:text-3xl ${className}`}>
      {children}
    </p>
  );
}
