import Link from "next/link";
import type { SVGProps } from "react";

type Platform = "linkedin" | "twitter" | "facebook" | "instagram";

/**
 * lucide-react v1 dropped all brand/logo icons (Linkedin, Twitter, Facebook,
 * Instagram, etc.) for trademark reasons. These are minimal inline SVG
 * replacements so this component doesn't depend on a package version that
 * no longer ships them.
 */
function LinkedinIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.03-1.85-3.03-1.86 0-2.14 1.45-2.14 2.94v5.66H9.36V9h3.41v1.56h.05c.48-.9 1.63-1.85 3.36-1.85 3.59 0 4.25 2.36 4.25 5.44v6.3zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45z" />
    </svg>
  );
}
function TwitterIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M18.9 2H22l-7.6 8.7L23.3 22H16.9l-5-6.5-5.7 6.5H2.4l8.1-9.2L1.7 2h6.6l4.5 6 5.1-6zm-1.1 18h1.7L7.3 3.9H5.5L17.8 20z" />
    </svg>
  );
}
function FacebookIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M14.5 21v-8h2.7l.4-3.1h-3.1V7.9c0-.9.25-1.5 1.55-1.5H17.7V3.6c-.28-.04-1.25-.12-2.38-.12-2.35 0-3.96 1.43-3.96 4.06v2.34H8.6V13h2.76v8h3.14z" />
    </svg>
  );
}
function InstagramIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...props}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

const ICONS: Record<Platform, (props: SVGProps<SVGSVGElement>) => React.JSX.Element> = {
  linkedin: LinkedinIcon,
  twitter: TwitterIcon,
  facebook: FacebookIcon,
  instagram: InstagramIcon,
};

type SocialLink = {
  platform: Platform;
  url: string;
};

/**
 * Renders nothing if no links are configured. The Website Audit
 * specifically recommended against an empty or placeholder social row —
 * this component makes that the default behavior rather than something
 * every call site has to remember to guard against.
 */
export function SocialLinks({ links, className = "" }: { links: SocialLink[]; className?: string }) {
  if (links.length === 0) return null;
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {links.map(({ platform, url }) => {
        const Icon = ICONS[platform];
        return (
          <Link
            key={platform}
            href={url}
            aria-label={`Claravox Healthcare on ${platform}`}
            className="text-white/70 hover:text-white"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon className="h-5 w-5" aria-hidden="true" />
          </Link>
        );
      })}
    </div>
  );
}
