import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
  /** Narrower reading measure for text-heavy content. Default keeps the full container-page width. */
  size?: "default" | "narrow" | "prose";
  as?: "div" | "section" | "article";
};

const sizeClasses: Record<NonNullable<Props["size"]>, string> = {
  default: "",
  narrow: "max-w-3xl mx-auto",
  prose: "max-w-2xl mx-auto",
};

/**
 * Formalizes the container-page CSS pattern already used throughout the
 * site as a component, with optional narrower measures for text-heavy
 * pages. Does not replace container-page in globals.css — wraps it, so
 * existing className="container-page" usage elsewhere is unaffected.
 */
export function Container({ children, className = "", size = "default", as = "div" }: Props) {
  const Tag = as;
  return (
    <Tag className={`container-page ${sizeClasses[size]} ${className}`}>
      {children}
    </Tag>
  );
}
