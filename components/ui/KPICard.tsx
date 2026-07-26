import type { ReactNode } from "react";
import { Counter } from "@/components/ui/Counter";

type Props = {
  label: string;
  value: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  trend?: { direction: "up" | "down"; label: string };
  icon?: ReactNode;
  /** Explicitly marks illustrative/example data as illustrative, per the
   * Design System's Dashboard Design Language rule: any chart not built
   * from real Claravox data must say so on the chart itself, not just in
   * surrounding copy. Omit once this card is wired to real figures. */
  illustrative?: boolean;
};

export function KPICard({ label, value, prefix, suffix, decimals, trend, icon, illustrative }: Props) {
  return (
    <div className="rounded-lg border border-mist bg-white p-5 shadow-resting">
      <div className="flex items-start justify-between gap-3">
        <span className="text-xs font-semibold uppercase tracking-wider text-teal-text">{label}</span>
        {icon && <span className="text-charcoal/60" aria-hidden="true">{icon}</span>}
      </div>
      <p className="mt-2 font-data tabular-nums text-2xl font-semibold text-violet">
        <Counter value={value} prefix={prefix} suffix={suffix} decimals={decimals} />
      </p>
      {trend && (
        <p className={`mt-1 text-xs font-medium ${trend.direction === "up" ? "text-success" : "text-error"}`}>
          {trend.direction === "up" ? "\u2191" : "\u2193"} {trend.label}
        </p>
      )}
      {illustrative && (
        <p className="mt-2 text-[10px] uppercase tracking-wide text-charcoal/50">Illustrative example</p>
      )}
    </div>
  );
}
