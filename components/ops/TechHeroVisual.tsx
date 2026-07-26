import Image from "next/image";
import { Sparkles, CheckCircle2, Workflow, ArrowRight } from "lucide-react";
import { Reveal } from "@/components/ui/motion/Reveal";

const agentFeatures = ["24/7 Scheduling", "Automated Responses", "Call Handling"];
const workflowStages = ["Request", "Response", "Review", "Processing"];

/**
 * Hero visual for the Technology page — a smaller, page-appropriate
 * version of the homepage's composition: one floating AI Appointment
 * Agent card and one workflow strip, tied together with a connector
 * line and a soft watermark, so it reads as one connected system rather
 * than isolated graphics.
 */
export function TechHeroVisual() {
  return (
    <div className="relative mx-auto w-full max-w-md lg:mx-0">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <Image
          src="/icon-mark.png"
          alt=""
          width={640}
          height={476}
          className="absolute -right-6 -top-6 h-auto w-40 opacity-[0.05]"
        />
      </div>

      <svg
        aria-hidden="true"
        viewBox="0 0 300 260"
        className="pointer-events-none absolute inset-0 hidden h-full w-full sm:block"
      >
        <path
          d="M 150 60 C 150 100, 150 120, 150 150"
          fill="none"
          stroke="var(--color-royal)"
          strokeOpacity="0.25"
          strokeWidth="1.5"
          strokeDasharray="4 6"
        />
      </svg>

      <Reveal effect="fade" className="relative [animation:float_6s_ease-in-out_infinite]">
        <div className="rounded-xl border border-mist bg-white/95 p-5 shadow-raised backdrop-blur">
          <div className="flex items-center gap-2">
            <span className="flex h-9 w-9 items-center justify-center rounded-md bg-gradient-to-br from-violet to-royal text-white">
              <Sparkles className="h-4 w-4" aria-hidden="true" />
            </span>
            <div>
              <span className="block text-[10px] font-bold uppercase tracking-wider text-teal-text">
                Production Ready
              </span>
              <span className="block text-sm font-semibold leading-tight text-ink">AI Appointment Agent</span>
            </div>
          </div>
          <ul className="mt-3 space-y-1.5">
            {agentFeatures.map((feature) => (
              <li key={feature} className="flex items-center gap-1.5 text-xs leading-snug text-charcoal">
                <CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-teal-deep" aria-hidden="true" />
                {feature}
              </li>
            ))}
          </ul>
        </div>
      </Reveal>

      <Reveal
        effect="fade"
        delay={200}
        className="relative mt-6 ml-6 max-w-xs [animation:float_7s_ease-in-out_infinite]"
      >
        <div className="rounded-xl border border-mist bg-white/95 p-4 shadow-raised backdrop-blur">
          <span className="flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-wider text-teal-text">
            <Workflow className="h-3.5 w-3.5" aria-hidden="true" />
            Operational Workflow
          </span>
          <div className="mt-2.5 flex flex-wrap items-center gap-1.5">
            {workflowStages.map((stage, index) => (
              <span key={stage} className="flex items-center gap-1.5">
                <span className="rounded-full border border-violet/15 bg-cloud px-2 py-1 font-data text-[10px] font-semibold text-violet">
                  {stage}
                </span>
                {index < workflowStages.length - 1 && (
                  <ArrowRight className="h-2.5 w-2.5 shrink-0 text-violet/40" aria-hidden="true" />
                )}
              </span>
            ))}
          </div>
        </div>
      </Reveal>
    </div>
  );
}
