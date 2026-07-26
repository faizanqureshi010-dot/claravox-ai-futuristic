import Image from "next/image";
import { CheckCircle2, Sparkles, ArrowRight, TrendingUp } from "lucide-react";
import { RevenueCycleRing } from "@/components/RevenueCycleRing";
import { Reveal } from "@/components/ui/motion/Reveal";

const agentFeatures = [
  "24/7 Appointment Scheduling",
  "Automated Patient Responses",
  "Call Handling",
  "Appointment Confirmation",
];

const workflowStages = ["Eligibility", "Coding", "Claims", "Follow-Up"];

/**
 * Hero right-side visual.
 *
 * Layout (lg+):
 * ┌─────────────────────────────────────┐
 * │                    [ AI Agent Card ] │  ← top-right, absolute
 * │                                      │
 * │         [ Revenue Cycle Ring ]       │  ← centered, normal flow
 * │                                      │
 * │  [ Workflow Card ]  [ Overview Card ]│  ← bottom row, normal flow
 * └─────────────────────────────────────┘
 *
 * The AI card is absolutely positioned in the top-right corner of the
 * outer relative container. The ring and bottom two cards stay in normal
 * flex-column flow, so they can never overlap each other. The ring gets
 * enough top padding (lg:pt-20) to clear the AI card's height (~160px)
 * without creating a large blank gap, since the ring's own orbiting labels
 * extend ~25px above the ring box and the padding accounts for that too.
 *
 * On mobile everything is in normal flow, centered, no absolute positioning.
 */
export function HeroComposition() {
  return (
    <div className="relative">
      {/* Background glow layers */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 hidden lg:block">
        <div className="absolute right-[6%] top-[4%] h-64 w-64 rounded-full bg-royal/20 blur-3xl" />
        <div className="absolute bottom-[8%] left-[2%] h-56 w-56 rounded-full bg-teal-deep/15 blur-3xl" />
        <Image
          src="/icon-mark.png"
          alt=""
          width={640}
          height={476}
          className="absolute -right-10 bottom-0 h-auto w-[280px] rotate-6 opacity-[0.04]"
        />
      </div>

      {/* Silhouette atmosphere */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 hidden items-center justify-center lg:flex"
      >
        <svg viewBox="0 0 300 300" className="h-[360px] w-[360px] opacity-[0.07]">
          <circle cx="150" cy="95" r="52" fill="var(--color-violet)" />
          <path
            d="M 55 300 C 55 205, 100 165, 150 165 C 200 165, 245 205, 245 300 Z"
            fill="var(--color-violet)"
          />
        </svg>
      </div>

      {/* ── AI Agent card ─────────────────────────────────────────────────
         Mobile: in normal flow, centered above the ring.
         lg+: absolutely positioned top-right of the outer container so it
         overlaps the ring's upper-right area exactly as in the design.
         Width is fixed at 240px at lg+ so it never crowds the ring center. */}
      <Reveal
        effect="fade"
        delay={150}
        className="relative z-10 mx-auto mb-6 w-full max-w-[280px] [animation:float_6s_ease-in-out_infinite] lg:absolute lg:right-0 lg:top-10 lg:z-10 lg:mx-0 lg:mb-0 lg:w-[240px] lg:max-w-none"
      >
        <div className="rounded-xl border border-mist bg-white/95 p-4 shadow-raised backdrop-blur">
          <div className="flex items-center gap-2">
            <span className="flex h-8 w-8 items-center justify-center rounded-md bg-gradient-to-br from-violet to-royal text-white">
              <Sparkles className="h-4 w-4" aria-hidden="true" />
            </span>
            <div>
              <span className="block text-[10px] font-bold uppercase tracking-wider text-teal-text">AI</span>
              <span className="block text-sm font-semibold leading-tight text-ink">AI Appointment Agent</span>
            </div>
          </div>
          <ul className="mt-3 space-y-1.5">
            {agentFeatures.map((feature) => (
              <li key={feature} className="flex items-start gap-1.5 text-xs leading-snug text-charcoal">
                <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-teal-deep" aria-hidden="true" />
                {feature}
              </li>
            ))}
          </ul>
        </div>
      </Reveal>

      {/* ── Ring + bottom cards — normal flex column flow ─────────────────
         lg:pt-16 pushes the ring down just enough so it sits below the
         AI card (which is ~160px tall at lg:top-10 = 40px offset, so the
         card's bottom edge is at ~200px). pt-16 = 64px here applies to
         the flex column, but the ring's own content starts at the top of
         this div. We use pt-48 at lg to give the absolute AI card full
         clearance: 40px (top-10) + ~160px card height + ~20px breathing
         room = ~220px ≈ pt-56 (224px). Rounded down to pt-52 (208px)
         since the ring's top orbiting label ("Verify") adds ~25px of its
         own visual margin above the ring box. */}
      <div className="relative z-[1] flex flex-col items-center gap-6 lg:pt-52">

        {/* Ring — centered, smaller than before to avoid left-column overlap */}
        <div className="flex w-full justify-center">
          <div className="w-full max-w-[320px] lg:max-w-[380px]">
            <RevenueCycleRing />
          </div>
        </div>

        {/* Bottom two cards — stacked on mobile/lg, side-by-side at xl+ */}
        <div className="flex w-full flex-col items-center gap-4 xl:flex-row xl:items-start xl:justify-between xl:gap-6">
          <Reveal
            effect="fade"
            delay={300}
            className="w-full max-w-[300px] xl:w-[250px] xl:max-w-none [animation:float_7s_ease-in-out_infinite]"
          >
            <div className="rounded-xl border border-mist bg-white/95 p-4 shadow-raised backdrop-blur">
              <span className="text-[10px] font-semibold uppercase tracking-wider text-teal-text">
                Revenue Cycle Workflow
              </span>
              <div className="mt-2.5 flex flex-wrap items-center gap-1.5">
                {workflowStages.map((stage, index) => (
                  <span key={stage} className="flex items-center gap-1.5">
                    <span className="rounded-full border border-violet/15 bg-cloud px-2.5 py-1 font-data text-[11px] font-semibold text-violet">
                      {stage}
                    </span>
                    {index < workflowStages.length - 1 && (
                      <ArrowRight className="h-3 w-3 shrink-0 text-violet/40" aria-hidden="true" />
                    )}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal
            effect="fade"
            delay={450}
            className="w-full max-w-[300px] xl:w-[220px] xl:max-w-none [animation:float_8s_ease-in-out_infinite]"
          >
            <div className="rounded-xl border border-mist bg-white/95 p-4 shadow-raised backdrop-blur">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-semibold uppercase tracking-wider text-teal-text">
                  Practice Overview
                </span>
                <TrendingUp className="h-3.5 w-3.5 text-teal-deep" aria-hidden="true" />
              </div>
              <div className="mt-3 flex items-end gap-1" aria-hidden="true">
                {[40, 55, 48, 65, 60, 78, 72].map((h, i) => (
                  <span
                    key={i}
                    className="w-full rounded-sm bg-gradient-to-t from-violet/20 to-teal-deep"
                    style={{ height: `${h}%`, maxHeight: "44px" }}
                  />
                ))}
              </div>
              <div className="mt-3 space-y-1.5 border-t border-mist pt-2.5">
                <div className="flex items-center justify-between text-[11px]">
                  <span className="text-charcoal/80">Claim Status</span>
                  <span className="font-semibold text-teal-text">On Track</span>
                </div>
                <div className="flex items-center justify-between text-[11px]">
                  <span className="text-charcoal/80">Collections</span>
                  <span className="font-semibold text-teal-text">Improving</span>
                </div>
              </div>
              <p className="mt-2 text-[10px] leading-snug text-charcoal/60">Illustrative preview</p>
            </div>
          </Reveal>
        </div>
      </div>
    </div>
  );
}
