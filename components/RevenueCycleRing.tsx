"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const STAGES = ["Verify", "Code", "Scrub", "Submit", "Post", "Recover"];

const STAGE_DESCRIPTIONS: Record<string, string> = {
  Verify: "Confirming coverage and eligibility before a claim is ever filed.",
  Code: "Applying accurate ICD-10, CPT, and HCPCS codes to what was actually done.",
  Scrub: "Checking every claim against known denial patterns before submission.",
  Submit: "Filing the clean claim with the payer.",
  Post: "Applying the payment and reconciling it against what was billed.",
  Recover: "Following up on anything unpaid or denied until it's resolved.",
};

/**
 * The signature animated visual for the homepage hero: a slowly rotating
 * conic-gradient ring (pure CSS animation, no JS needed for the rotation
 * itself) with six orbiting stage nodes. One node highlights at a time in
 * sequence, tracing the path a claim actually takes through Claravox's
 * revenue cycle. Respects prefers-reduced-motion via the global rule in
 * globals.css, which freezes all CSS animations/transitions site-wide.
 *
 * Extended with a one-line caption beneath the ring describing the active
 * stage in plain language — per the homepage brief's request that the
 * hero visualization "educate users while creating visual interest," not
 * just animate. Implemented as a single updating caption rather than
 * retrofitting hover/tap tooltips onto the tiny absolutely-positioned
 * stage nodes, which would have meant reworking proven, carefully-tuned
 * positioning math for a marginal gain — this reaches the same goal with
 * far less risk to a component that already works well.
 */
export function RevenueCycleRing() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current: number) => (current + 1) % STAGES.length);
    }, 1400);
    return () => clearInterval(interval);
  }, []);

  const radius = 42; // percent of container
  const activeStage = STAGES[activeIndex];

  return (
    <div>
      <div
        className="relative mx-auto aspect-square w-full max-w-[400px]"
        role="img"
        aria-label="Animated diagram of the Claravox revenue cycle: Verify, Code, Scrub, Submit, Post, and Recover, cycling in sequence"
      >
        {/* Outer conic-gradient ring, rotating continuously */}
        <div
          aria-hidden="true"
          className="absolute inset-[6%] rounded-full opacity-90 [animation:spin_22s_linear_infinite]"
          style={{
            background:
              "conic-gradient(from 0deg, var(--color-gold), var(--color-teal-deep), var(--color-royal), var(--color-gold))",
            WebkitMask:
              "radial-gradient(farthest-side, transparent calc(100% - 10px), #000 calc(100% - 9px))",
            mask: "radial-gradient(farthest-side, transparent calc(100% - 10px), #000 calc(100% - 9px))",
          }}
        />
        {/* Inner dim ring, counter-rotating for depth */}
        <div
          aria-hidden="true"
          className="absolute inset-[16%] rounded-full opacity-25 [animation:spin-reverse_30s_linear_infinite]"
          style={{
            background: "conic-gradient(from 180deg, var(--color-orchid), transparent 55%)",
            WebkitMask:
              "radial-gradient(farthest-side, transparent calc(100% - 3px), #000 calc(100% - 2px))",
            mask: "radial-gradient(farthest-side, transparent calc(100% - 3px), #000 calc(100% - 2px))",
          }}
        />
        {/* Center core with the icon mark */}
        <div className="absolute inset-[26%] flex items-center justify-center rounded-full bg-gradient-to-b from-white to-ivory p-[7%] shadow-raised ring-1 ring-white/70">
          <Image
            src="/icon-mark.png"
            alt=""
            width={200}
            height={149}
            priority
            className="h-auto w-full object-contain"
          />
        </div>

        {/* Orbiting stage nodes */}
        {STAGES.map((stage, index) => {
          const angleDeg = -90 + index * (360 / STAGES.length);
          const angleRad = (angleDeg * Math.PI) / 180;
          const x = 50 + radius * Math.cos(angleRad);
          const y = 50 + radius * Math.sin(angleRad);
          const tagX = 50 + radius * 1.32 * Math.cos(angleRad);
          const tagY = 50 + radius * 1.32 * Math.sin(angleRad);
          const isActive = index === activeIndex;

          return (
            <div key={stage}>
              <span
                aria-hidden="true"
                className={`absolute h-3.5 w-3.5 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 transition-all duration-300 ${
                  isActive
                    ? "border-gold bg-gold shadow-[0_0_0_6px_rgba(212,175,55,0.25)]"
                    : "border-teal-deep bg-ivory"
                }`}
                style={{ left: `${x}%`, top: `${y}%` }}
              />
              <span
                aria-hidden="true"
                className={`absolute -translate-x-1/2 -translate-y-1/2 whitespace-nowrap rounded-full border px-2.5 py-1 font-data text-[11px] font-semibold transition-colors duration-300 ${
                  isActive
                    ? "border-gold/60 bg-white text-violet"
                    : "border-violet/15 bg-ivory text-violet/70"
                }`}
                style={{ left: `${tagX}%`, top: `${tagY}%` }}
              >
                {stage}
              </span>
            </div>
          );
        })}
      </div>

      {/* Live-updating plain-language caption — aria-live so screen reader
         users get the same educational content sighted users get from
         watching the ring, without needing six separate hover targets. */}
      <p
        aria-live="polite"
        className="mx-auto mt-6 max-w-xs text-center text-sm leading-relaxed text-charcoal/80"
      >
        <span className="font-data font-semibold text-violet">{activeStage}.</span>{" "}
        {STAGE_DESCRIPTIONS[activeStage]}
      </p>
    </div>
  );
}
