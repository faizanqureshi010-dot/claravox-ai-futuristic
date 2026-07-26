import type { ReactNode } from "react";

type Gap = "xs" | "sm" | "md" | "lg" | "xl";

const gapClasses: Record<Gap, string> = {
  xs: "gap-2",
  sm: "gap-4",
  md: "gap-6",
  lg: "gap-10",
  xl: "gap-16",
};

type Props = {
  children: ReactNode;
  className?: string;
  gap?: Gap;
  align?: "start" | "center" | "end" | "stretch";
  justify?: "start" | "center" | "end" | "between";
  wrap?: boolean;
};

const alignClasses = { start: "items-start", center: "items-center", end: "items-end", stretch: "items-stretch" };
const justifyClasses = { start: "justify-start", center: "justify-center", end: "justify-end", between: "justify-between" };

/**
 * Vertical stack — the default spacing utility for stacking elements with
 * consistent gap. Prefer this over ad hoc space-y-* / mt-* combinations on
 * new components so section rhythm stays governed by the gap scale above.
 */
export function Stack({ children, className = "", gap = "md", align = "stretch" }: Props) {
  return (
    <div className={`flex flex-col ${gapClasses[gap]} ${alignClasses[align]} ${className}`}>
      {children}
    </div>
  );
}

/**
 * Horizontal flex row with the same gap scale as Stack, for anything that
 * doesn't need the full Grid component below (button groups, icon + label
 * pairs, badge rows).
 */
export function Row({ children, className = "", gap = "sm", align = "center", justify = "start", wrap = true }: Props) {
  return (
    <div
      className={`flex ${wrap ? "flex-wrap" : ""} ${gapClasses[gap]} ${alignClasses[align]} ${justifyClasses[justify]} ${className}`}
    >
      {children}
    </div>
  );
}
