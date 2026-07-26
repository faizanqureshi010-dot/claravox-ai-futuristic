import type { ReactNode } from "react";

type Cols = 1 | 2 | 3 | 4;
type Gap = "sm" | "md" | "lg";

const gapClasses: Record<Gap, string> = { sm: "gap-4", md: "gap-6", lg: "gap-10" };

/**
 * Responsive column presets matching the grids already used across the
 * site (Services 2-up, Why Choose Us / Tier ladders 3-up, etc.) so new
 * sections reach for one shared component instead of re-deriving the same
 * breakpoint logic each time.
 */
const colClasses: Record<Cols, string> = {
  1: "grid-cols-1",
  2: "grid-cols-1 sm:grid-cols-2",
  3: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
  4: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4",
};

type Props = {
  children: ReactNode;
  className?: string;
  cols?: Cols;
  gap?: Gap;
};

export function Grid({ children, className = "", cols = 3, gap = "md" }: Props) {
  return (
    <div className={`grid ${colClasses[cols]} ${gapClasses[gap]} ${className}`}>
      {children}
    </div>
  );
}
