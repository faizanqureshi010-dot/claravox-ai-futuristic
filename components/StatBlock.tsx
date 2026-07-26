import { Counter } from "@/components/ui/Counter";

type Props = {
  /** Static display string, e.g. "8 to 10%" or "90+". Always used when
   * `numericValue` is not provided — this keeps every existing call site
   * (homepage's three industry-benchmark stats) working unchanged. */
  value: string;
  label: string;
  /** Opt into a count-up animation for a genuinely single-number stat.
   * Pair with `prefix`/`suffix` for things like "$" or "%". Not used by
   * the current homepage stats, since those are ranges ("8 to 10%") a
   * counter can't meaningfully animate to — available for future KPI
   * content that has one real number to show. */
  numericValue?: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
};

export function StatBlock({ value, label, numericValue, prefix, suffix, decimals }: Props) {
  return (
    <div className="text-center sm:text-left">
      <p className="font-data tabular-nums text-4xl font-semibold text-violet sm:text-5xl">
        {numericValue !== undefined ? (
          <Counter value={numericValue} prefix={prefix} suffix={suffix} decimals={decimals} />
        ) : (
          value
        )}
      </p>
      <p className="mt-2 text-sm leading-relaxed text-charcoal">{label}</p>
    </div>
  );
}
