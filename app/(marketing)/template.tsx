"use client";

import { useEffect, useState, type ReactNode } from "react";
import { usePathname } from "next/navigation";

/**
 * Next.js's App Router re-mounts template.tsx on every navigation within
 * this route group (unlike layout.tsx, which persists) — the documented
 * mechanism for a per-page mount animation. Implements the Motion Design
 * System's page-transition spec: ~200ms fade + 8px rise, the shared
 * --ease-out-premium curve, collapsing to no animation at all under
 * prefers-reduced-motion via the global rule already in globals.css.
 */
export default function Template({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(false);
    const frame = requestAnimationFrame(() => setVisible(true));
    return () => cancelAnimationFrame(frame);
  }, [pathname]);

  return (
    <div
      className={`transition-all duration-200 ease-[var(--ease-out-premium)] ${
        visible ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0"
      }`}
    >
      {children}
    </div>
  );
}
