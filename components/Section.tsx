import type { ReactNode } from "react";
import Image from "next/image";

type Props = {
  children: ReactNode;
  className?: string;
  id?: string;
  as?: "section" | "div";
};

/**
 * Shared section wrapper. Also carries the site-wide brand watermark: the
 * icon mark, rendered at ~2% opacity with a heavy blur, anchored to the
 * right edge of every section. It sits on the same element as each
 * section's own background color (passed in via `className`), so it
 * composites naturally with whatever tone a given section uses rather
 * than needing a separate fixed layer that solid backgrounds would just
 * hide. `aria-hidden` and `pointer-events-none` keep it fully inert for
 * accessibility and interaction; z-index keeps it strictly behind content.
 */
export function Section({ children, className = "", id, as = "section" }: Props) {
  const Tag = as;
  return (
    <Tag
      id={id}
      className={`relative overflow-hidden py-16 md:py-20 lg:py-24 ${className}`}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 right-[-8%] z-0 flex items-center opacity-[0.025] blur-3xl md:right-[-4%]"
      >
        <Image
          src="/icon-mark.png"
          alt=""
          width={640}
          height={476}
          className="h-auto w-[340px] -rotate-6 md:w-[440px] lg:w-[560px]"
        />
      </div>
      <div className="container-page relative z-[1]">{children}</div>
    </Tag>
  );
}
