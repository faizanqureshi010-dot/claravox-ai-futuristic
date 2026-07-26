import Image from "next/image";

type Partner = {
  name: string;
  logoSrc: string;
};

/**
 * Renders nothing if no partners are provided — deliberately, rather than
 * shipping placeholder or example logos. Claravox has no named partners
 * or certifying bodies to display yet; per the Brand Constitution's
 * never-claim-what-can't-be-demonstrated rule, an empty state here is
 * correct until that changes, not a bug to work around with filler.
 */
export function PartnerLogos({ partners }: { partners: Partner[] }) {
  if (partners.length === 0) return null;
  return (
    <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6 opacity-70 grayscale">
      {partners.map((partner) => (
        <Image
          key={partner.name}
          src={partner.logoSrc}
          alt={partner.name}
          width={120}
          height={40}
          className="h-8 w-auto object-contain"
        />
      ))}
    </div>
  );
}
