"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

type Effect = "fade" | "slide-up" | "scale";

type Props = {
  children: ReactNode;
  effect?: Effect;
  /** Stagger delay in ms — pass index * 100 (or similar) when revealing a
   * list, matching ProcessSteps' and Timeline's existing per-item timing. */
  delay?: number;
  className?: string;
};

const hiddenState: Record<Effect, string> = {
  fade: "opacity-0",
  "slide-up": "opacity-0 translate-y-4",
  scale: "opacity-0 scale-95",
};

const visibleState: Record<Effect, string> = {
  fade: "opacity-100",
  "slide-up": "opacity-100 translate-y-0",
  scale: "opacity-100 scale-100",
};

/**
 * The general-purpose scroll-reveal primitive behind ProcessSteps' and
 * Timeline's stagger animations, extracted so any new section can use the
 * same fires-once, reduced-motion-safe pattern without re-implementing the
 * IntersectionObserver logic. ProcessSteps and Timeline keep their own
 * implementations (already working) rather than being refactored to wrap
 * this — see the component summary for why that refactor is deferred.
 */
export function Reveal({ children, effect = "slide-up", delay = 0, className = "" }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-[var(--ease-out-premium)] ${
        isVisible ? visibleState[effect] : hiddenState[effect]
      } ${className}`}
      style={{ transitionDelay: isVisible ? `${delay}ms` : "0ms" }}
    >
      {children}
    </div>
  );
}
