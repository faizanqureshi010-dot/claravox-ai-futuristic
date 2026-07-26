"use client";

import { useId, useState, type ReactNode } from "react";

type Props = {
  /** Short explanatory text, e.g. the Recovery Ring's per-stage
   * explanations from the UX Blueprint's Interaction Blueprint. */
  content: string;
  children: ReactNode;
  /** "top" fits most inline uses; "bottom" for elements near the top of
   * the viewport (e.g. header items). */
  side?: "top" | "bottom";
};

/**
 * Covers both the Tooltip and Popover use cases named in the component
 * request — a single, simple hover/focus-triggered label is sufficient
 * for everything currently planned (Recovery Ring stage explanations,
 * Automation Ladder capability descriptions); a separate Popover with
 * its own focus-trap and dismiss logic would duplicate this component for
 * no current use case, so it's intentionally not built as a second
 * component (Design System, Section 13: avoid duplicated implementations
 * of the same pattern).
 */
export function Tooltip({ content, children, side = "top" }: Props) {
  const [visible, setVisible] = useState(false);
  const id = useId();

  return (
    <span
      className="relative inline-flex"
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
      onFocus={() => setVisible(true)}
      onBlur={() => setVisible(false)}
    >
      <span aria-describedby={visible ? id : undefined} tabIndex={0}>
        {children}
      </span>
      {visible && (
        <span
          id={id}
          role="tooltip"
          className={`pointer-events-none absolute left-1/2 z-50 w-max max-w-[220px] -translate-x-1/2 rounded-md bg-ink px-3 py-2 text-xs leading-snug text-white shadow-raised ${
            side === "top" ? "bottom-full mb-2" : "top-full mt-2"
          }`}
        >
          {content}
        </span>
      )}
    </span>
  );
}
