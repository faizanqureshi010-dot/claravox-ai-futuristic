import { ShieldCheck, FileCheck, HeartHandshake, Search } from "lucide-react";

const items = [
  { icon: ShieldCheck, label: "US Registered Entity" },
  { icon: FileCheck, label: "HIPAA Aligned Process" },
  { icon: HeartHandshake, label: "BAA On Every Contract" },
  { icon: Search, label: "Free Consultation, No Commitment" },
];

export function TrustStrip() {
  return (
    <div className="bg-cloud">
      <div className="container-page">
        <ul className="grid grid-cols-1 divide-y divide-mist py-8 sm:grid-cols-2 sm:divide-y-0 sm:divide-x sm:py-6 lg:grid-cols-4">
          {items.map(({ icon: Icon, label }) => (
            <li
              key={label}
              className="flex items-center justify-center gap-2.5 px-4 py-4 text-center sm:py-2"
            >
              <Icon className="h-5 w-5 shrink-0 text-teal-deep" aria-hidden="true" />
              <span className="text-sm font-medium text-ink">{label}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
