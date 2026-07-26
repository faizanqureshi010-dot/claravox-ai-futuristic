import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
  highlight?: boolean;
};

export function Card({ children, className = "", highlight = false }: Props) {
  return (
    <div
      data-magnetic
      className={`group relative overflow-hidden rounded-lg border border-violet/10 bg-white/60 p-8 shadow-resting backdrop-blur-md transition-all duration-200 ease-[var(--ease-out-premium)] hover:-translate-y-1 hover:border-orchid/40 hover:shadow-low ${
        highlight ? "border-t-[3px] border-t-gold" : ""
      } ${className}`}
    >
      <span
        aria-hidden="true"
        className="absolute left-0 top-0 h-[3px] w-0 bg-gradient-to-r from-gold to-teal-deep transition-all duration-300 ease-[var(--ease-out-premium)] group-hover:w-full"
      />
      {children}
    </div>
  );
}
