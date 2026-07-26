type Props = {
  /** 0–100 */
  value: number;
  label?: string;
  size?: number;
  colorVar?: string;
  illustrative?: boolean;
};

/**
 * Reuses the Recovery Ring's own technique (a conic-gradient masked into a
 * ring, per the Dashboard Design Language rule that radial charts should
 * be "the same CSS pattern, new data, not a new visual system") rather
 * than pulling in a charting dependency for a single ring shape.
 */
export function RadialProgress({ value, label, size = 120, colorVar = "var(--color-teal-deep)", illustrative }: Props) {
  const clamped = Math.min(100, Math.max(0, value));
  return (
    <div className="inline-flex flex-col items-center" style={{ width: size }}>
      <div className="relative" style={{ width: size, height: size }}>
        <div
          role="img"
          aria-label={label ? `${label}: ${clamped}%` : `${clamped}%`}
          className="absolute inset-0 rounded-full"
          style={{
            background: `conic-gradient(${colorVar} ${clamped}%, var(--color-mist) ${clamped}% 100%)`,
            WebkitMask: "radial-gradient(farthest-side, transparent calc(100% - 12px), #000 calc(100% - 11px))",
            mask: "radial-gradient(farthest-side, transparent calc(100% - 12px), #000 calc(100% - 11px))",
          }}
        />
        <span
          className="absolute inset-0 flex items-center justify-center font-data text-lg font-semibold text-violet"
          aria-hidden="true"
        >
          {clamped}%
        </span>
      </div>
      {label && <span className="mt-3 text-center text-xs font-medium text-charcoal">{label}</span>}
      {illustrative && (
        <span className="mt-1 text-center text-[10px] uppercase tracking-wide text-charcoal/50">
          Illustrative example
        </span>
      )}
    </div>
  );
}
