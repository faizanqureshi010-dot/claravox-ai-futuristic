import Image from "next/image";

type Props = {
  variant?: "default" | "white";
  className?: string;
  priority?: boolean;
};

const sources: Record<"default" | "white", string> = {
  default: "/logo-horizontal.png",
  white: "/logo-horizontal-white.png",
};

/**
 * The single source of truth for the Claravox logo mark. Renders the
 * current approved horizontal logo — never the older icon-mark-plus-text
 * treatment. Used by the main Header, the Footer, and the consultation
 * funnel's standalone header, so all three stay in sync automatically
 * instead of drifting the way the funnel header previously did.
 */
export function Logo({ variant = "default", className = "h-9 w-auto object-contain", priority = false }: Props) {
  return (
    <Image
      src={sources[variant]}
      alt="Claravox Healthcare"
      width={136}
      height={38}
      className={className}
      priority={priority}
    />
  );
}
