export type RCMStage =
  | "registration"
  | "eligibility"
  | "prior-authorization"
  | "coding"
  | "charge-entry"
  | "claim-submission"
  | "payment-posting"
  | "denial-management"
  | "ar-follow-up"
  | "reporting";

const STAGES: { key: RCMStage; label: string }[] = [
  { key: "registration", label: "Patient Registration" },
  { key: "eligibility", label: "Eligibility Verification" },
  { key: "prior-authorization", label: "Prior Authorization" },
  { key: "coding", label: "Medical Coding" },
  { key: "charge-entry", label: "Charge Entry" },
  { key: "claim-submission", label: "Claim Submission" },
  { key: "payment-posting", label: "Payment Posting" },
  { key: "denial-management", label: "Denial Management" },
  { key: "ar-follow-up", label: "AR Follow-Up" },
  { key: "reporting", label: "Reporting & Optimization" },
];

type Props =
  | { currentStage: RCMStage; coveredStages?: undefined; coverageLabel?: undefined }
  | { currentStage?: undefined; coveredStages: RCMStage[]; coverageLabel: string };

/**
 * The recurring "where this fits in the bigger picture" strip. Two modes:
 *
 * - `currentStage`: for a service page that maps to exactly one stage
 *   (Eligibility Verification, Prior Authorization, and similar). Shows
 *   past/current/future stages along the line.
 *
 * - `coveredStages` + `coverageLabel`: for an umbrella service that spans
 *   several stages at once (Medical Billing covers Charge Entry and Claim
 *   Submission internally, rather than being a single point in the
 *   cycle). Highlights every covered stage together with a shared label
 *   instead of a single "you are here" marker, so the visual honestly
 *   represents a multi-stage service without implying it's one step.
 *
 * Deliberately NOT forced onto pages that don't map to the cycle at all
 * (Credentialing is a prerequisite before the cycle starts, not a step
 * within it) — using this component only where the mapping is honest is
 * more consistent with the project's standards than uniform coverage.
 */
export function RevenueCycleJourney(props: Props) {
  const isUmbrella = "coveredStages" in props && props.coveredStages;
  const coveredSet = new Set(isUmbrella ? props.coveredStages : []);
  const currentIndex = !isUmbrella
    ? STAGES.findIndex((s) => s.key === props.currentStage)
    : -1;
  const currentLabel = !isUmbrella ? STAGES[currentIndex]?.label ?? "" : "";

  const ariaLabel = isUmbrella
    ? `${props.coverageLabel}, covering ${props.coveredStages
        .map((key) => STAGES.find((s) => s.key === key)?.label)
        .filter(Boolean)
        .join(", ")}`
    : `Revenue cycle stage ${currentIndex + 1} of ${STAGES.length}: ${currentLabel}`;

  return (
    <div>
      <p className="text-xs font-semibold uppercase tracking-wider text-teal-text">
        Where This Fits in the Revenue Cycle
      </p>
      {isUmbrella && (
        <p className="mt-1 text-xs text-charcoal/60">
          {props.coverageLabel} — highlighted stages below are handled as
          part of this one service, not separate offerings.
        </p>
      )}
      <div
        role="group"
        aria-label={ariaLabel}
        className="mt-4 flex snap-x gap-2 overflow-x-auto pb-2"
      >
        {STAGES.map((stage, index) => {
          const isCurrent = !isUmbrella && stage.key === props.currentStage;
          const isPast = !isUmbrella && index < currentIndex;
          const isCovered = isUmbrella && coveredSet.has(stage.key);
          return (
            <div key={stage.key} className="flex shrink-0 snap-start items-center gap-2">
              <span
                aria-current={isCurrent ? "step" : undefined}
                className={`whitespace-nowrap rounded-full border px-3 py-1.5 text-xs font-semibold ${
                  isCurrent || isCovered
                    ? "border-gold bg-violet text-white"
                    : isPast
                      ? "border-teal-deep/40 bg-teal-deep/5 text-teal-text"
                      : "border-mist bg-white text-charcoal/60"
                }`}
              >
                {stage.label}
              </span>
              {index < STAGES.length - 1 && (
                <span aria-hidden="true" className="h-px w-4 shrink-0 bg-mist" />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
