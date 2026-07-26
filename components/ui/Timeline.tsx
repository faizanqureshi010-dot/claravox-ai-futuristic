"use client";

import { useEffect, useRef, useState } from "react";
import { Search, ClipboardCheck, Rocket, SlidersHorizontal, LifeBuoy, type LucideIcon } from "lucide-react";

// String names only — never accept a live icon component reference here.
// TimelineItem[] is authored in page files that are Server Components
// (no "use client"), and this component is a Client Component ("use
// client" above). Passing a function/component reference as a prop
// across that boundary is not serializable and breaks the Next.js
// build with "Functions cannot be passed directly to Client
// Components" — that crash is exactly what happened before, when this
// prop was typed as `icon?: LucideIcon`. A plain string is always
// serializable, so the actual icon component is resolved from this map
// entirely inside this client file, never passed in from outside it.
export type TimelineIconName =
  | "search"
  | "clipboardCheck"
  | "rocket"
  | "slidersHorizontal"
  | "lifeBuoy";

const ICONS: Record<TimelineIconName, LucideIcon> = {
  search: Search,
  clipboardCheck: ClipboardCheck,
  rocket: Rocket,
  slidersHorizontal: SlidersHorizontal,
  lifeBuoy: LifeBuoy,
};

export type TimelineItem = {
  title: string;
  description: string;
  /** Optional per-stage icon, rendered as a small badge beside the number.
   * Purely additive — existing callers that don't pass this render exactly
   * as before. A string name from TimelineIconName, resolved to a real
   * icon component inside this file — see the note above ICONS. */
  icon?: TimelineIconName;
};

type Props = {
  items: TimelineItem[];
  /** Vertical stacks on every breakpoint — for narrow containers (e.g. a
   * sidebar) rather than the responsive horizontal/vertical switch below. */
  orientation?: "horizontal" | "vertical";
};

// Column count must equal items.length exactly, for any count — this is
// used with 3, 4, and 5 items across the site today, and must not assume
// 4 is the ceiling. Tailwind's compiler scans source text for literal
// class names, so a template-literal class like `md:grid-cols-${n}`
// is invisible to it and silently produces no CSS — that rules out
// building the class name string dynamically. Instead, the column
// *count* moves into a CSS custom property (a runtime value, not part
// of the class name), and the class itself — an arbitrary-value
// `grid-template-columns` referencing that variable — is one fixed,
// literal string Tailwind can always see, regardless of how many items
// are passed in. (Kept exactly as the previous fix left it.)
const HORIZONTAL_COLS_CLASS = "md:grid-cols-[repeat(var(--timeline-cols),minmax(0,1fr))]";

/**
 * Generalizes ProcessSteps.tsx's proven scroll-stagger + self-tracing
 * connector pattern into a reusable primitive, per the Design System's
 * Section 5 note that Timeline should extend to the Automation Ladder and
 * any future multi-stage explainer. ProcessSteps itself is left as-is
 * (working, low-risk) — new multi-step sections should reach for this
 * component instead of writing a fourth copy of the same animation logic.
 */
export function Timeline({ items, orientation = "horizontal" }: Props) {
  const containerRef = useRef<HTMLOListElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = containerRef.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const isHorizontal = orientation === "horizontal";

  return (
    <ol
      ref={containerRef}
      className={`grid grid-cols-1 gap-10 ${isHorizontal ? `${HORIZONTAL_COLS_CLASS} md:gap-6` : ""}`}
      style={isHorizontal ? ({ "--timeline-cols": items.length } as React.CSSProperties) : undefined}
    >
      {items.map((item, index) => {
        const Icon = item.icon ? ICONS[item.icon] : undefined;
        return (
          <li
            key={item.title}
            className={`relative transition-all duration-700 ease-[var(--ease-out-premium)] ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
            }`}
            style={{ transitionDelay: isVisible ? `${index * 150}ms` : "0ms" }}
          >
            {index < items.length - 1 && isHorizontal && (
              <span
                aria-hidden="true"
                className="absolute top-6 left-[calc(50%+28px)] hidden h-px w-[calc(100%-56px)] overflow-hidden bg-mist md:block"
              >
                <span
                  className={`block h-full bg-teal-deep transition-all duration-500 ease-[var(--ease-out-premium)] ${
                    isVisible ? "w-full" : "w-0"
                  }`}
                  style={{ transitionDelay: isVisible ? `${index * 150 + 250}ms` : "0ms" }}
                />
              </span>
            )}
            <div className={`flex items-center gap-4 ${isHorizontal ? "md:flex-col md:text-center" : ""}`}>
              <span className="relative flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-teal-deep font-display text-xl font-bold text-white transition-transform duration-300 ease-[var(--ease-out-premium)] hover:scale-110">
                {index + 1}
                {Icon && (
                  <span className="absolute -bottom-1.5 -right-1.5 flex h-6 w-6 items-center justify-center rounded-full border-2 border-white bg-gold text-violet">
                    <Icon className="h-3.5 w-3.5" aria-hidden="true" />
                  </span>
                )}
              </span>
              <p className={`font-display text-lg font-semibold text-violet ${isHorizontal ? "md:mt-4" : ""}`}>
                {item.title}
              </p>
            </div>
            <p className={`mt-2 text-sm leading-relaxed text-charcoal ${isHorizontal ? "md:text-center" : ""}`}>
              {item.description}
            </p>
          </li>
        );
      })}
    </ol>
  );
}
