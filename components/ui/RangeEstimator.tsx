"use client";

import { useState } from "react";

type Props = {
  min: number;
  max: number;
  step?: number;
  defaultValue?: number;
  /** Given the slider's current value, return an illustrative range to
   * display. Deliberately a range, not a single precise number — a false
   * sense of precision here would violate the Brand Constitution's rule
   * against claiming what can't be demonstrated. The caller supplies the
   * calculation so this component stays a framework, not a hardcoded
   * formula that would need to change with every pricing conversation. */
  estimate: (value: number) => { low: number; high: number };
  formatValue?: (value: number) => string;
  formatEstimate?: (value: number) => string;
  label: string;
};

/**
 * The "Recovery Potential Estimator" named in the UX Blueprint's
 * Interaction Blueprint: a single slider producing an illustrative range,
 * never a precise promised figure. Framework only — no real Claravox
 * recovery-rate formula is wired in here, since that number doesn't exist
 * yet. The `estimate` prop is where that real logic plugs in once it does.
 */
export function RangeEstimator({
  min,
  max,
  step = 1,
  defaultValue,
  estimate,
  formatValue = (v) => String(v),
  formatEstimate = (v) => `$${v.toLocaleString()}`,
  label,
}: Props) {
  const [value, setValue] = useState(defaultValue ?? Math.round((min + max) / 2));
  const { low, high } = estimate(value);

  return (
    <div className="rounded-lg border border-mist bg-white p-6 shadow-resting">
      <label htmlFor="range-estimator" className="mb-1.5 block text-sm font-medium text-ink">
        {label}
      </label>
      <input
        id="range-estimator"
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setValue(Number(e.target.value))}
        className="w-full accent-teal-deep"
      />
      <div className="mt-1 flex justify-between text-xs text-charcoal/70">
        <span>{formatValue(min)}</span>
        <span className="font-data font-semibold text-violet">{formatValue(value)}</span>
        <span>{formatValue(max)}</span>
      </div>
      <div className="mt-5 rounded-md bg-cloud p-4 text-center">
        <p className="font-data text-xl font-semibold text-violet">
          {formatEstimate(low)} &ndash; {formatEstimate(high)}
        </p>
        <p className="mt-1 text-xs uppercase tracking-wide text-charcoal/60">Illustrative estimate</p>
      </div>
    </div>
  );
}
