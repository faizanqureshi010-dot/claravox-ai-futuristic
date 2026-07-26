"use client";

import { useEffect, useRef, useState } from "react";

type Step = {
  title: string;
  description: string;
};

/**
 * Scroll-triggered entrance: each step fades and lifts in with a stagger
 * based on its position, and the connecting line traces itself in teal
 * just after the step ahead of it appears. Fires once, the first time the
 * row scrolls into view — it does not replay on every scroll pass.
 *
 * Respects prefers-reduced-motion via the global rule in globals.css,
 * which collapses all transition/animation durations site-wide, so no
 * additional reduced-motion handling is needed here.
 */
export function ProcessSteps({ steps }: { steps: Step[] }) {
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

  return (
    <ol
      ref={containerRef}
      className="grid grid-cols-1 gap-10 md:grid-cols-4 md:gap-6"
    >
      {steps.map((step, index) => (
        <li
          key={step.title}
          className={`relative transition-all duration-700 ease-[var(--ease-out-premium)] ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
          }`}
          style={{ transitionDelay: isVisible ? `${index * 150}ms` : "0ms" }}
        >
          {index < steps.length - 1 && (
            <span
              aria-hidden="true"
              className="absolute top-6 left-[calc(50%+28px)] hidden h-px w-[calc(100%-56px)] overflow-hidden bg-mist md:block"
            >
              <span
                className={`block h-full bg-teal-deep transition-all duration-500 ease-[var(--ease-out-premium)] ${
                  isVisible ? "w-full" : "w-0"
                }`}
                style={{
                  transitionDelay: isVisible ? `${index * 150 + 250}ms` : "0ms",
                }}
              />
            </span>
          )}
          <div className="flex items-center gap-4 md:flex-col md:text-center">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-teal-deep font-display text-xl font-bold text-white transition-transform duration-300 ease-[var(--ease-out-premium)] hover:scale-110">
              {index + 1}
            </span>
            <p className="font-display text-lg font-semibold text-violet md:mt-4">
              {step.title}
            </p>
          </div>
          <p className="mt-2 text-sm leading-relaxed text-charcoal md:text-center">
            {step.description}
          </p>
        </li>
      ))}
    </ol>
  );
}
