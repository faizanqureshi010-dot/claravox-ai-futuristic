# Claravox Healthcare, Website

Production ready Next.js site for all seven pages, built from the finalized
Business Discovery, Brand Strategy, Website Strategy, Homepage Design, Site
Pages, Design System, and SEO Strategy documents.

## Stack

- Next.js 16, App Router, TypeScript
- Tailwind CSS v4, design tokens defined in `app/globals.css`
- Self hosted fonts via `@fontsource`, no external Google Fonts request at
  runtime
- `lucide-react` for line icons

## Getting Started

```
npm install
npm run dev
```

Open `http://localhost:3000`.

## Production Build

```
npm run build
npm start
```

## Before Launch, Real Values Needed

Several values are currently realistic placeholders and must be replaced
with real information before this goes live:

- `lib/site-config.ts`, phone number, email, and address, currently set to
  the values used in the earlier one pager and deck
- `LeadForm.tsx`, the form currently shows a success state on submit but is
  not wired to a real backend, CRM, or email endpoint, see the comment
  marked in that file
- `app/layout.tsx`, `siteConfig.url` should be confirmed once
  claravoxhealthcare.com is live and pointed at this deployment

## Structure

```
app/
  layout.tsx              Root layout, fonts, sitewide schema
  globals.css              Design system tokens
  sitemap.ts                Auto generated sitemap.xml
  robots.ts                 Auto generated robots.txt
  (marketing)/               Route group sharing header, footer, sticky CTA
    layout.tsx
    page.tsx                 Home
    not-found.tsx             404 page
    services/page.tsx
    who-we-serve/page.tsx
    why-claravox/page.tsx
    compliance-and-security/page.tsx
    contact/page.tsx
  get-your-free-audit/        Standalone route, minimal layout, no full nav
    layout.tsx
    page.tsx
components/                   Reusable UI, Header, Footer, Button, Card,
                                FAQAccordion, LeadForm, ProcessSteps,
                                StatBlock, TrustStrip, JsonLd
lib/
  site-config.ts               Contact details and navigation
  schema.ts                     JSON-LD builders, Organization, Service,
                                  FAQPage, BreadcrumbList
```

## What Was Deliberately Not Built

- No blog, per the SEO strategy, not launching until there is real
  operational bandwidth to sustain it
- No testimonials or case studies with fabricated results, replaced sitewide
  with the honest founding client framing already established
- No specialty specific pages or copy, the site targets the whole market by
  design

## Verified Before Handoff

- `tsc --noEmit`, zero errors
- `eslint .`, zero errors, zero warnings
- `next build`, all 9 routes plus sitemap.xml and robots.txt generate
  successfully as static content
- Every text and background color pairing in the design system checked
  against WCAG AA contrast, all pass, most with significant margin
- A real headless browser was not available in the environment this was
  built in, so an actual Lighthouse score could not be produced here. Run
  Lighthouse in Chrome DevTools against the production build once deployed
  to confirm the target score.
