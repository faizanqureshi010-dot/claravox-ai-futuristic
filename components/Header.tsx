"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Menu,
  X,
  ChevronDown,
  Workflow,
  FileText,
  Tag,
  BadgeCheck,
  ShieldCheck,
  FileCheck2,
  Landmark,
  RefreshCcw,
  TrendingUp,
  Sparkles,
  LayoutGrid,
  BrainCircuit,
  Milestone,
  Building2,
  Award,
  Mail,
  Stethoscope,
  Activity,
  HeartPulse,
  Bone,
  Brain,
  HeartHandshake,
  Pill,
  Dumbbell,
  Ambulance,
  Users,
  ArrowRight,
  type LucideIcon,
} from "lucide-react";
import { primaryNav, type NavEntry, type NavIconName } from "@/lib/site-config";
import { Button } from "@/components/Button";
import { Logo } from "@/components/Logo";

const icons: Record<NavIconName, LucideIcon> = {
  workflow: Workflow,
  fileText: FileText,
  tag: Tag,
  badgeCheck: BadgeCheck,
  shieldCheck: ShieldCheck,
  fileCheck2: FileCheck2,
  landmark: Landmark,
  refreshCcw: RefreshCcw,
  trendingUp: TrendingUp,
  sparkles: Sparkles,
  layoutGrid: LayoutGrid,
  brainCircuit: BrainCircuit,
  milestone: Milestone,
  building2: Building2,
  award: Award,
  mail: Mail,
  stethoscope: Stethoscope,
  activity: Activity,
  heartPulse: HeartPulse,
  bone: Bone,
  brain: Brain,
  heartHandshake: HeartHandshake,
  pill: Pill,
  dumbbell: Dumbbell,
  ambulance: Ambulance,
  users: Users,
};

function NavIcon({ name, className }: { name: NavIconName; className?: string }) {
  const Icon = icons[name];
  return <Icon className={className} aria-hidden="true" />;
}

/** Every href reachable from an entry, used to decide whether the current
 * page falls under this nav item so its trigger can show an active state. */
function entryHrefs(entry: NavEntry): string[] {
  switch (entry.type) {
    case "link":
      return [entry.href];
    case "mega":
      return entry.columns.flatMap((c) => c.items.map((i) => i.href).filter(Boolean) as string[]);
    case "featured":
      return [entry.featured.href, ...entry.items.map((i) => i.href)].filter(Boolean) as string[];
    case "cards":
      return entry.items.map((i) => i.href).filter(Boolean) as string[];
    case "dropdown":
      return entry.items.map((i) => i.href).filter(Boolean) as string[];
    default:
      return [];
  }
}

function isEntryActive(entry: NavEntry, pathname: string): boolean {
  return entryHrefs(entry).some((href) => pathname === href);
}

/** Desktop trigger + panel for a single top-level nav entry that opens a
 * dropdown/mega menu. Hover opens with a short close-delay (so moving the
 * cursor from trigger to panel doesn't flicker-close it); keyboard focus
 * and click both open it too, and Escape closes and returns focus. */
function NavMenu({
  entry,
  panelWidthClass,
  pathname,
}: {
  entry: NavEntry;
  panelWidthClass: string;
  pathname: string;
}) {
  const [open, setOpen] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const active = isEntryActive(entry, pathname);

  const clearCloseTimer = () => {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
  };

  const scheduleClose = () => {
    clearCloseTimer();
    closeTimer.current = setTimeout(() => setOpen(false), 150);
  };

  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape" && open) {
        setOpen(false);
        wrapperRef.current?.querySelector("button")?.focus();
      }
    }
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open]);

  if (entry.type === "link") {
    return (
      <Link
        href={entry.href}
        aria-current={active ? "page" : undefined}
        className={`group relative text-sm font-medium transition-colors ${active ? "text-violet" : "text-charcoal hover:text-violet"}`}
      >
        {entry.label}
        <span
          className={`absolute -bottom-1 left-0 h-0.5 bg-gold transition-all duration-200 ease-[var(--ease-out-premium)] ${
            active ? "w-full" : "w-0 group-hover:w-full"
          }`}
        />
      </Link>
    );
  }

  return (
    <div
      ref={wrapperRef}
      className="relative"
      onMouseEnter={() => {
        clearCloseTimer();
        setOpen(true);
      }}
      onMouseLeave={scheduleClose}
    >
      <button
        type="button"
        className={`group relative flex items-center gap-1.5 py-2 text-sm font-medium transition-colors ${
          active ? "text-violet" : "text-charcoal hover:text-violet"
        }`}
        aria-expanded={open}
        aria-current={active ? "page" : undefined}
        onClick={() => setOpen((v) => !v)}
        onFocus={() => {
          clearCloseTimer();
          setOpen(true);
        }}
      >
        {entry.label}
        <ChevronDown
          className={`h-3.5 w-3.5 transition-transform duration-200 ease-[var(--ease-out-premium)] ${open ? "rotate-180 text-violet" : ""}`}
          aria-hidden="true"
        />
        <span
          className={`absolute -bottom-1 left-0 h-0.5 bg-gold transition-all duration-200 ease-[var(--ease-out-premium)] ${
            open || active ? "w-full" : "w-0 group-hover:w-full"
          }`}
        />
      </button>

      <div
        className={`absolute left-1/2 top-full z-50 -translate-x-1/2 pt-3 transition-all duration-200 ease-[var(--ease-out-premium)] ${
          open ? "pointer-events-auto translate-y-0 opacity-100" : "pointer-events-none translate-y-1 opacity-0"
        }`}
        onFocus={() => {
          clearCloseTimer();
          setOpen(true);
        }}
        onBlur={scheduleClose}
      >
        <div
          className={`overflow-hidden rounded-2xl border border-mist bg-white shadow-raised ring-1 ring-black/[0.03] ${panelWidthClass}`}
        >
          {entry.type === "mega" && (
            <div>
              <div className="grid grid-cols-3 divide-x divide-mist/70 gap-x-0 p-9">
                {entry.columns.map((column) => (
                  <div key={column.heading} className="px-6 first:pl-0 last:pr-0">
                    <p className="border-b border-mist/70 pb-2.5 text-xs font-semibold uppercase tracking-wider text-teal-text">
                      {column.heading}
                    </p>
                    <ul className="mt-3 space-y-1">
                      {column.items.map((item) => (
                        <li key={item.title}>
                          <Link
                            href={item.href ?? "#"}
                            aria-current={pathname === item.href ? "page" : undefined}
                            className="group/item flex items-start gap-3 rounded-lg px-2 py-2.5 transition-colors hover:bg-cloud"
                          >
                            <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-violet/8 text-violet transition-colors group-hover/item:bg-violet group-hover/item:text-white">
                              <NavIcon name={item.icon} className="h-5 w-5" />
                            </span>
                            <span>
                              <span className="block text-sm font-semibold text-ink">{item.title}</span>
                              {item.description && (
                                <span className="mt-0.5 block text-xs leading-snug text-charcoal/80">
                                  {item.description}
                                </span>
                              )}
                            </span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
              {entry.panelCta && (
                <Link
                  href={entry.panelCta.href}
                  className="flex items-center justify-between border-t border-mist bg-cloud px-9 py-4 text-sm font-semibold text-violet transition-colors hover:bg-violet/8"
                >
                  {entry.panelCta.label}
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              )}
            </div>
          )}

          {entry.type === "featured" && (
            <div>
              <div className="p-7">
                <Link
                  href={entry.featured.href ?? "#"}
                  aria-current={pathname === entry.featured.href ? "page" : undefined}
                  className="group/featured relative flex items-center gap-4 overflow-hidden rounded-xl bg-gradient-to-br from-violet to-royal p-6 text-white shadow-low transition-transform duration-200 ease-[var(--ease-out-premium)] hover:-translate-y-0.5"
                >
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute -right-6 -top-10 h-32 w-32 rounded-full bg-white/10 blur-2xl"
                  />
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-white/15">
                    <NavIcon name={entry.featured.icon} className="h-6 w-6" />
                  </span>
                  <span className="relative">
                    <span className="inline-flex items-center gap-1 rounded-full bg-gold px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-violet">
                      {entry.featured.badge}
                    </span>
                    <span className="mt-1.5 block text-base font-semibold">{entry.featured.title}</span>
                    {entry.featured.description && (
                      <span className="mt-0.5 block text-xs leading-snug text-white/85">
                        {entry.featured.description}
                      </span>
                    )}
                  </span>
                </Link>

                <p className="mb-3 mt-6 border-t border-mist/70 pt-5 text-xs font-semibold uppercase tracking-wider text-teal-text">
                  The Ecosystem
                </p>
                <div className="grid grid-cols-2 gap-1">
                  {entry.items.map((item) => (
                    <Link
                      key={item.title}
                      href={item.href ?? "#"}
                      aria-current={pathname === item.href ? "page" : undefined}
                      className="group/item flex items-start gap-2.5 rounded-lg px-2 py-2.5 transition-colors hover:bg-cloud"
                    >
                      <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-teal-deep/10 text-teal-text transition-colors group-hover/item:bg-teal-deep group-hover/item:text-white">
                        <NavIcon name={item.icon} className="h-4 w-4" />
                      </span>
                      <span>
                        <span className="block text-sm font-semibold text-ink">{item.title}</span>
                        {item.description && (
                          <span className="mt-0.5 block text-xs leading-snug text-charcoal/80">
                            {item.description}
                          </span>
                        )}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
              {entry.panelCta && (
                <Link
                  href={entry.panelCta.href}
                  className="flex items-center justify-between border-t border-mist bg-cloud px-7 py-4 text-sm font-semibold text-violet transition-colors hover:bg-violet/8"
                >
                  {entry.panelCta.label}
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              )}
            </div>
          )}

          {entry.type === "cards" && (
            <div className="p-7">
              <p className="border-b border-mist/70 pb-2.5 text-xs font-semibold uppercase tracking-wider text-teal-text">
                Specialties We Support
              </p>
              <div className="mt-4 grid grid-cols-3 gap-2.5">
                {entry.items.map((item) => (
                  <div
                    key={item.title}
                    className="group/card flex flex-col items-center gap-2.5 rounded-lg border border-mist px-2 py-4 text-center transition-all duration-200 ease-[var(--ease-out-premium)] hover:-translate-y-0.5 hover:border-violet/20 hover:shadow-low"
                  >
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-violet/8 text-violet transition-colors group-hover/card:bg-violet group-hover/card:text-white">
                      <NavIcon name={item.icon} className="h-5 w-5" />
                    </span>
                    <span className="text-xs font-medium leading-snug text-ink">{item.title}</span>
                  </div>
                ))}
              </div>
              {entry.browseAllHref && (
                <Link
                  href={entry.browseAllHref}
                  className="mt-5 flex items-center justify-center gap-1.5 rounded-lg bg-cloud px-4 py-3 text-sm font-semibold text-violet transition-colors hover:bg-violet/8"
                >
                  {entry.browseAllLabel ?? "See more"}
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              )}
            </div>
          )}

          {entry.type === "dropdown" && (
            <div>
              <ul className="space-y-1 p-4">
                {entry.items.map((item) => (
                  <li key={item.title}>
                    <Link
                      href={item.href ?? "#"}
                      aria-current={pathname === item.href ? "page" : undefined}
                      className="group/item flex items-start gap-3 rounded-lg px-3 py-2.5 transition-colors hover:bg-cloud"
                    >
                      <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-violet/8 text-violet transition-colors group-hover/item:bg-violet group-hover/item:text-white">
                        <NavIcon name={item.icon} className="h-4.5 w-4.5" />
                      </span>
                      <span>
                        <span className="block text-sm font-semibold text-ink">{item.title}</span>
                        {item.description && (
                          <span className="mt-0.5 block text-xs leading-snug text-charcoal/80">
                            {item.description}
                          </span>
                        )}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
              {entry.panelCta && (
                <Link
                  href={entry.panelCta.href}
                  className="flex items-center justify-between border-t border-mist bg-cloud px-4 py-3.5 text-sm font-semibold text-violet transition-colors hover:bg-violet/8"
                >
                  {entry.panelCta.label}
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

const panelWidthByLabel: Record<string, string> = {
  "Healthcare Operations": "w-[800px]",
  "AI Solutions": "w-[480px]",
  Industries: "w-[420px]",
  Company: "w-[300px]",
};

function MobileAccordionEntry({
  entry,
  pathname,
  onNavigate,
}: {
  entry: NavEntry;
  pathname: string;
  onNavigate: () => void;
}) {
  const [open, setOpen] = useState(false);
  const active = isEntryActive(entry, pathname);

  if (entry.type === "link") {
    return (
      <Link
        href={entry.href}
        aria-current={active ? "page" : undefined}
        className={`block rounded-md px-3 py-3 text-base font-medium hover:bg-cloud ${active ? "text-violet" : "text-ink"}`}
        onClick={onNavigate}
      >
        {entry.label}
      </Link>
    );
  }

  const flatItems =
    entry.type === "mega"
      ? entry.columns.flatMap((c) => c.items)
      : entry.type === "featured"
        ? [entry.featured, ...entry.items]
        : entry.items;

  const panelCta = entry.type === "mega" || entry.type === "featured" || entry.type === "dropdown" ? entry.panelCta : undefined;

  return (
    <div className="border-b border-mist/60 last:border-b-0">
      <button
        type="button"
        className={`flex w-full items-center justify-between rounded-md px-3 py-3 text-left text-base font-medium ${active ? "text-violet" : "text-ink"}`}
        aria-expanded={open}
        aria-current={active ? "page" : undefined}
        onClick={() => setOpen((v) => !v)}
      >
        {entry.label}
        <ChevronDown
          className={`h-4 w-4 text-violet transition-transform duration-200 ${open ? "rotate-180" : ""}`}
          aria-hidden="true"
        />
      </button>
      {open && (
        <ul className="space-y-0.5 pb-3 pl-3">
          {flatItems.map((item) => (
            <li key={item.title}>
              {item.href ? (
                <Link
                  href={item.href}
                  aria-current={pathname === item.href ? "page" : undefined}
                  className="flex items-center gap-2.5 rounded-md px-3 py-2.5 text-sm text-charcoal hover:bg-cloud"
                  onClick={onNavigate}
                >
                  <NavIcon name={item.icon} className="h-4 w-4 shrink-0 text-violet" />
                  {item.title}
                </Link>
              ) : (
                <span className="flex items-center gap-2.5 rounded-md px-3 py-2.5 text-sm text-charcoal/70">
                  <NavIcon name={item.icon} className="h-4 w-4 shrink-0 text-violet/60" />
                  {item.title}
                </span>
              )}
            </li>
          ))}
          {entry.type === "cards" && entry.browseAllHref && (
            <li>
              <Link
                href={entry.browseAllHref}
                className="mt-1 block rounded-md px-3 py-2.5 text-sm font-semibold text-violet hover:bg-cloud"
                onClick={onNavigate}
              >
                {entry.browseAllLabel ?? "See more"}
              </Link>
            </li>
          )}
          {panelCta && (
            <li>
              <Link
                href={panelCta.href}
                className="mt-1 block rounded-md px-3 py-2.5 text-sm font-semibold text-violet hover:bg-cloud"
                onClick={onNavigate}
              >
                {panelCta.label}
              </Link>
            </li>
          )}
        </ul>
      )}
    </div>
  );
}

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 8);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 border-b bg-white/95 backdrop-blur transition-shadow duration-300 ease-[var(--ease-out-premium)] supports-[backdrop-filter]:bg-white/85 ${
        scrolled ? "border-mist shadow-low" : "border-transparent"
      }`}
    >
      <div className="container-page flex h-18 items-center justify-between gap-6 py-3 lg:gap-10">
        <Link href="/" className="flex shrink-0 items-center gap-2" aria-label="Claravox Healthcare, go to homepage">
          <Logo priority />
        </Link>

        <nav className="hidden items-center gap-9 lg:flex" aria-label="Primary">
          {primaryNav.map((entry) => (
            <NavMenu
              key={entry.label}
              entry={entry}
              pathname={pathname}
              panelWidthClass={panelWidthByLabel[entry.label] ?? "w-[420px]"}
            />
          ))}
        </nav>

        <div className="hidden shrink-0 lg:block">
          <Button
            href="/get-your-free-audit"
            variant="primary"
            className="hover:shadow-[0_10px_30px_-8px_rgba(212,175,55,0.55)]"
          >
            Book a Consultation
          </Button>
        </div>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md p-2 text-violet lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-6 w-6" aria-hidden="true" /> : <Menu className="h-6 w-6" aria-hidden="true" />}
        </button>
      </div>

      {open && (
        <nav id="mobile-nav" aria-label="Primary mobile" className="max-h-[calc(100vh-4.5rem)] overflow-y-auto border-t border-mist bg-white lg:hidden">
          <div className="container-page flex flex-col gap-0.5 py-3">
            {primaryNav.map((entry) => (
              <MobileAccordionEntry
                key={entry.label}
                entry={entry}
                pathname={pathname}
                onNavigate={() => setOpen(false)}
              />
            ))}
            <div className="mt-3 px-3 pb-2">
              <Button href="/get-your-free-audit" variant="primary" className="w-full">
                Book a Consultation
              </Button>
            </div>
          </div>
        </nav>
      )}
    </header>
  );
}
