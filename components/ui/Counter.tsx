"use client";

import { useEffect, useRef, useState } from "react";

type Props = {
  /** Target numeric value to count up to. */
  value: number;
  /** Text shown before the number, e.g. "$". */
  prefix?: string;
  /** Text shown after the number, e.g. "%" or "+". */
  suffix?: string;
  /** Decimal places to preserve, e.g. 1 for "35.5". */
  decimals?: number;
  className?: string;
};

/**
 * Counts up from 0 to `value` once, the first time it scrolls into view.
 * Reused by StatBlock and any future KPI/dashboard number. Respects
 * prefers-reduced-motion by snapping straight to the final value instead
 * of animating — consistent with the global rule in globals.css, applied
 * here explicitly since this is a JS-driven animation the CSS rule alone
 * can't reach.
 */
export function Counter({ value, prefix = "", suffix = "", decimals = 0, className = "" }: Props) {
  const ref = useRef<HTMLSpanElement>(null);
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) {
      setDisplay(value);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();

        const duration = 1200;
        const start = performance.now();

        function tick(now: number) {
          const progress = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          setDisplay(value * eased);
          if (progress < 1) requestAnimationFrame(tick);
        }
        requestAnimationFrame(tick);
      },
      { threshold: 0.4 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [value]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {display.toFixed(decimals)}
      {suffix}
    </span>
  );
}
