type Props = {
  /** 0–100 */
  value: number;
  label?: string;
  className?: string;
};

export function ProgressBar({ value, label, className = "" }: Props) {
  const clamped = Math.min(100, Math.max(0, value));
  return (
    <div className={className}>
      {label && (
        <div className="mb-1.5 flex items-center justify-between text-xs font-medium text-charcoal">
          <span>{label}</span>
          <span className="font-data tabular-nums">{clamped}%</span>
        </div>
      )}
      <div
        role="progressbar"
        aria-valuenow={clamped}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label={label}
        className="h-2 w-full overflow-hidden rounded-full bg-mist"
      >
        <div
          className="h-full rounded-full bg-gradient-to-r from-teal-deep to-gold transition-[width] duration-700 ease-[var(--ease-out-premium)]"
          style={{ width: `${clamped}%` }}
        />
      </div>
    </div>
  );
}
