import Image from "next/image";

type Props = {
  quote: string;
  attribution: string;
  role?: string;
  photoSrc?: string;
};

/**
 * Matches the Design System's Testimonial spec exactly: Fraunces italic
 * quote (same treatment as the existing "Claravox Promise" section), a
 * small Label-style attribution line, and an optional small photo that
 * supports rather than dominates. No content exists to pass into this
 * yet — Claravox has one founding client and no published testimonial —
 * so this component has no current call site. It exists so that the
 * first real testimonial has a correct home immediately, rather than
 * prompting an improvised one-off layout under time pressure later.
 */
export function TestimonialCard({ quote, attribution, role, photoSrc }: Props) {
  return (
    <div className="rounded-lg border border-mist bg-white p-8 shadow-resting">
      <p className="font-display text-xl italic leading-relaxed text-violet">&ldquo;{quote}&rdquo;</p>
      <div className="mt-5 flex items-center gap-3">
        {photoSrc && (
          <Image src={photoSrc} alt="" width={40} height={40} className="h-10 w-10 rounded-full object-cover" />
        )}
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-teal-text">{attribution}</p>
          {role && <p className="text-xs text-charcoal/70">{role}</p>}
        </div>
      </div>
    </div>
  );
}
