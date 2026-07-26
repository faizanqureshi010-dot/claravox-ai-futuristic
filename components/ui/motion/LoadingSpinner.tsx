type Props = {
  size?: number;
  label?: string;
};

/**
 * A violet-tinted pulse rather than a generic gray spinner, per the
 * Design System's loading-state rule. Primary near-term use: the LeadForm
 * submit button between click and confirmation, once it's connected to a
 * real backend (Website Audit, Critical Finding #1) — currently that
 * transition is instant, which will feel wrong the moment there's an
 * actual network request to wait for.
 */
export function LoadingSpinner({ size = 20, label = "Loading" }: Props) {
  return (
    <span
      role="status"
      aria-label={label}
      className="inline-block animate-spin rounded-full border-2 border-violet/25 border-t-violet"
      style={{ width: size, height: size }}
    />
  );
}
