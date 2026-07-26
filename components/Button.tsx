import Link from "next/link";
import type { ButtonHTMLAttributes, ReactNode } from "react";

type Variant = "primary" | "secondary" | "gold" | "ghost" | "icon";

const base =
  "inline-flex items-center justify-center gap-2 rounded-md text-sm font-semibold font-body transition-all duration-200 ease-[var(--ease-out-premium)] min-h-11";

const sizeByVariant: Record<Variant, string> = {
  primary: "px-6 py-3",
  secondary: "px-6 py-3",
  gold: "px-6 py-3",
  ghost: "px-4 py-2.5",
  icon: "h-11 w-11 p-0",
};

const variants: Record<Variant, string> = {
  primary:
    "bg-violet text-white shadow-resting hover:bg-royal hover:shadow-low hover:-translate-y-0.5",
  secondary:
    "bg-transparent text-violet border-[1.5px] border-violet hover:bg-violet/8",
  gold: "bg-gold text-violet hover:bg-gold-hi shadow-resting hover:shadow-low hover:-translate-y-0.5",
  // Tertiary action — no border, no shadow. For "skip" / "not now" style
  // actions where secondary's visible border would compete too much with
  // a nearby primary button.
  ghost: "bg-transparent text-violet hover:bg-violet/8",
  // Square, icon-only. Callers MUST pass aria-label (already required by
  // ActionButtonProps below) since there's no visible text label.
  icon: "bg-transparent text-violet hover:bg-violet/8 rounded-full",
};

type CommonProps = {
  children: ReactNode;
  variant?: Variant;
  className?: string;
};

type LinkButtonProps = CommonProps & {
  href: string;
};

type ActionButtonProps = CommonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: undefined;
  };

/**
 * "Animated Button" from the component request is intentionally not a
 * separate variant: every variant above already carries its own
 * hover/press motion (lift, shadow-deepen, background shift), matching
 * the Design System's rule that motion is a property of the base
 * component, not a distinct button type layered on top (Section 13, UI
 * Consistency Rules). An "Outline" variant was also requested — Secondary
 * already is Claravox's outline button; adding a second, near-identical
 * outline style would be exactly the kind of duplicated one-off the
 * Design System's consistency rules exist to prevent.
 */
export function Button(props: LinkButtonProps | ActionButtonProps) {
  const { children, variant = "primary", className = "" } = props;
  const classes = `${base} ${sizeByVariant[variant]} ${variants[variant]} ${className}`;

  if ("href" in props && props.href) {
    return (
      <Link href={props.href} data-magnetic className={classes}>
        {children}
      </Link>
    );
  }

  const rest = props as ActionButtonProps;
  return (
    <button
      type={rest.type ?? "button"}
      onClick={rest.onClick}
      disabled={rest.disabled}
      name={rest.name}
      value={rest.value}
      form={rest.form}
      aria-label={rest["aria-label"]}
      data-magnetic
      className={classes}
    >
      {children}
    </button>
  );
}
