import { ShieldCheck, FileCheck, HeartHandshake } from "lucide-react";

const badges = [
  { icon: ShieldCheck, label: "HIPAA Aligned Process" },
  { icon: FileCheck, label: "BAA On Every Contract" },
  { icon: HeartHandshake, label: "US Registered Entity" },
];

/** Small, consistent trust-badge row for Healthcare Operations page heroes. */
export function OpsTrustBadges() {
  return (
    <ul className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2">
      {badges.map(({ icon: Icon, label }) => (
        <li key={label} className="flex items-center gap-2">
          <Icon className="h-4 w-4 shrink-0 text-teal-deep" aria-hidden="true" />
          <span className="text-xs font-medium text-charcoal">{label}</span>
        </li>
      ))}
    </ul>
  );
}
