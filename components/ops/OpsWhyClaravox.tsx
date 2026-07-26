import { Cpu, Stethoscope, Eye, HeartHandshake, TrendingUp, ServerCog } from "lucide-react";
import { Card } from "@/components/Card";
import { Reveal } from "@/components/ui/motion/Reveal";

const items = [
  {
    icon: Cpu,
    title: "Technology-Enabled Workflows",
    body: "Modern workflow automation supports every account, without replacing the people who run it.",
  },
  {
    icon: Stethoscope,
    title: "Healthcare Expertise",
    body: "Handled by people who know medical billing operations, not a generic support desk.",
  },
  {
    icon: Eye,
    title: "Operational Transparency",
    body: "You always know exactly where things stand, not just what was collected.",
  },
  {
    icon: HeartHandshake,
    title: "Dedicated Support",
    body: "A team that actually answers the phone, and knows your account when they do.",
  },
  {
    icon: TrendingUp,
    title: "Scalable Partnership",
    body: "Structured to grow with your practice, not a fixed setup you'll outgrow.",
  },
  {
    icon: ServerCog,
    title: "Modern Infrastructure",
    body: "Built on current systems and integrations, not a patchwork of manual workarounds.",
  },
];

/**
 * Identical on every Healthcare Operations page by design — this is the
 * shared enterprise trust section the brief asks every page to carry, not
 * a competitor comparison. A single shared component keeps it genuinely
 * consistent instead of eight hand-copied variants drifting over time.
 */
export function OpsWhyClaravox() {
  return (
    <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {items.map(({ icon: Icon, title, body }, index) => (
        <Reveal key={title} effect="slide-up" delay={index * 80}>
          <Card className="h-full">
            <Icon className="h-7 w-7 text-violet" aria-hidden="true" />
            <h3 className="mt-4 font-display text-lg font-semibold text-violet">{title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-charcoal">{body}</p>
          </Card>
        </Reveal>
      ))}
    </div>
  );
}
