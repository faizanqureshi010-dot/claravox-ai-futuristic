export const siteConfig = {
  name: "Claravox Healthcare",
  url: "https://claravoxhealthcare.com",
  description:
    "Claravox Healthcare recovers revenue lost to denied claims, slow AR, and billing inefficiency for independent US physician practices. Book a free consultation, no commitment.",
  email: "info@claravoxhealthcare.com",
  // PLACEHOLDER — a real phone number is coming in a few days. This is
  // intentionally NOT formatted like a real, working US number (no
  // "555" pattern or valid area code shape) so it can't be mistaken for
  // a working line if this ships before the real number is ready.
  // Every consumer of siteConfig.phone builds a `tel:` link from it —
  // that link will be non-functional until this is replaced. See the
  // "Consumers of these fields" list for exactly what to update.
  // TODO: replace with the real phone number.
  phone: "PHONE-NUMBER-PENDING",
  phoneDisplay: "Phone Number Coming Soon",
  // TODO: verify this is the real, current mailing address before
  // launch — left untouched here, flagging only per explicit request,
  // not because it's known to be inaccurate.
  address: {
    streetAddress: "8 The Green, Ste A",
    addressLocality: "Dover",
    addressRegion: "DE",
    postalCode: "19901",
    addressCountry: "US",
  },
};

export type NavIconName =
  | "workflow"
  | "fileText"
  | "tag"
  | "badgeCheck"
  | "shieldCheck"
  | "fileCheck2"
  | "landmark"
  | "refreshCcw"
  | "trendingUp"
  | "sparkles"
  | "layoutGrid"
  | "brainCircuit"
  | "milestone"
  | "building2"
  | "award"
  | "mail"
  | "stethoscope"
  | "activity"
  | "heartPulse"
  | "bone"
  | "brain"
  | "heartHandshake"
  | "pill"
  | "dumbbell"
  | "ambulance"
  | "users";

export type NavLeafItem = {
  title: string;
  href?: string;
  description?: string;
  icon: NavIconName;
};

export type NavColumn = {
  heading: string;
  items: NavLeafItem[];
};

export type PanelCta = { label: string; href: string };

export type NavEntry =
  | { type: "link"; label: string; href: string }
  | { type: "mega"; label: string; columns: NavColumn[]; panelCta?: PanelCta }
  | {
      type: "featured";
      label: string;
      featured: NavLeafItem & { badge: string };
      items: NavLeafItem[];
      panelCta?: PanelCta;
    }
  | { type: "cards"; label: string; items: NavLeafItem[]; browseAllHref?: string; browseAllLabel?: string }
  | { type: "dropdown"; label: string; items: NavLeafItem[]; panelCta?: PanelCta };

export const primaryNav: NavEntry[] = [
  {
    type: "mega",
    label: "Healthcare Operations",
    columns: [
      {
        heading: "Revenue Cycle",
        items: [
          {
            title: "Revenue Cycle Management",
            href: "/revenue-cycle-management",
            icon: "workflow",
            description: "The full cycle, coordinated end to end.",
          },
          {
            title: "Medical Billing",
            href: "/medical-billing",
            icon: "fileText",
            description: "Clean claims, built right the first time.",
          },
          {
            title: "Medical Coding",
            href: "/medical-coding",
            icon: "tag",
            description: "Accurate coding that supports compliant reimbursement.",
          },
        ],
      },
      {
        heading: "Patient Access",
        items: [
          {
            title: "Credentialing",
            href: "/credentialing",
            icon: "badgeCheck",
            description: "Payer enrollment handled end to end.",
          },
          {
            title: "Eligibility Verification",
            href: "/eligibility-verification",
            icon: "shieldCheck",
            description: "Coverage confirmed before a claim is ever filed.",
          },
          {
            title: "Prior Authorization",
            href: "/prior-authorization",
            icon: "fileCheck2",
            description: "Approvals secured before care is delivered.",
          },
        ],
      },
      {
        heading: "Financial Operations",
        items: [
          {
            title: "Payment Posting",
            href: "/payment-posting",
            icon: "landmark",
            description: "Payments reconciled against what was billed.",
          },
          {
            title: "Denial Management",
            href: "/denial-management",
            icon: "refreshCcw",
            description: "Denials resolved, and kept from recurring.",
          },
          {
            title: "Accounts Receivable Follow-Up",
            href: "/accounts-receivable",
            icon: "trendingUp",
            description: "Aging claims followed until they're resolved.",
          },
        ],
      },
    ],
    panelCta: { label: "Discuss Your Operations", href: "/get-your-free-audit" },
  },
  {
    type: "featured",
    label: "AI Solutions",
    featured: {
      title: "AI Appointment Agent",
      badge: "Featured",
      href: "/technology",
      icon: "sparkles",
      description: "Our production-ready, HIPAA-compliant booking agent.",
    },
    items: [
      {
        title: "Workflow Automation",
        href: "/technology",
        icon: "layoutGrid",
        description: "Front-office automation, tested on our own systems.",
      },
      {
        title: "Technology Framework",
        href: "/technology",
        icon: "brainCircuit",
        description: "The six-tier system behind every technology claim we make.",
      },
      {
        title: "Healthcare AI",
        href: "/technology",
        icon: "workflow",
        description: "Where automation is genuinely active today.",
      },
      {
        title: "Automation Roadmap",
        href: "/technology",
        icon: "milestone",
        description: "The architecture planned for what comes next.",
      },
    ],
    panelCta: { label: "Explore AI Solutions", href: "/technology" },
  },
  {
    type: "cards",
    label: "Industries",
    browseAllHref: "/who-we-serve",
    browseAllLabel: "See every specialty we support",
    items: [
      { title: "Family Medicine", icon: "stethoscope" },
      { title: "Internal Medicine", icon: "activity" },
      { title: "Cardiology", icon: "heartPulse" },
      { title: "Dermatology", icon: "sparkles" },
      { title: "Orthopaedics", icon: "bone" },
      { title: "Neurology", icon: "brain" },
      { title: "Behavioural Health", icon: "heartHandshake" },
      { title: "Pain Management", icon: "pill" },
      { title: "Physical Therapy", icon: "dumbbell" },
      { title: "Urgent Care", icon: "ambulance" },
      { title: "Multi-specialty Practices", icon: "users" },
    ],
  },
  { type: "link", label: "Knowledge Centre", href: "/resources" },
  {
    type: "dropdown",
    label: "Company",
    items: [
      { title: "About", href: "/about", icon: "building2", description: "Our identity, philosophy, and vision." },
      { title: "Why Claravox", href: "/why-claravox", icon: "award", description: "How we're different, and what it costs." },
      {
        title: "Compliance & Security",
        href: "/compliance-and-security",
        icon: "shieldCheck",
        description: "HIPAA-aligned processes and a BAA on every contract.",
      },
      { title: "Contact", href: "/contact", icon: "mail", description: "Reach the team directly." },
    ],
    panelCta: { label: "Talk with Our Team", href: "/contact" },
  },
];

export const footerNav = {
  operations: [
    { label: "Revenue Cycle Management", href: "/revenue-cycle-management" },
    { label: "Medical Billing", href: "/medical-billing" },
    { label: "Medical Coding", href: "/medical-coding" },
    { label: "Credentialing", href: "/credentialing" },
    { label: "Eligibility Verification", href: "/eligibility-verification" },
    { label: "Prior Authorization", href: "/prior-authorization" },
    { label: "Payment Posting", href: "/payment-posting" },
    { label: "Denial Management", href: "/denial-management" },
    { label: "Accounts Receivable Follow-Up", href: "/accounts-receivable" },
  ],
  aiSolutions: [
    { label: "AI Appointment Agent", href: "/technology" },
    { label: "Workflow Automation", href: "/technology" },
    { label: "Healthcare AI", href: "/technology" },
    { label: "Technology Framework", href: "/technology" },
    { label: "Automation Roadmap", href: "/technology" },
  ],
  industries: {
    items: [
      "Family Medicine",
      "Internal Medicine",
      "Cardiology",
      "Dermatology",
      "Orthopaedics",
      "Behavioural Health",
      "Urgent Care",
      "Multi-specialty Practices",
    ],
    browseAllHref: "/who-we-serve",
    browseAllLabel: "See All Industries",
  },
  company: [
    { label: "About", href: "/about" },
    { label: "Why Claravox", href: "/why-claravox" },
    { label: "Compliance & Security", href: "/compliance-and-security" },
    { label: "Knowledge Centre", href: "/resources" },
    { label: "Contact", href: "/contact" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Terms & Conditions", href: "/terms-of-service" },
    { label: "Cookie Policy", href: "/cookie-policy" },
    { label: "Accessibility Statement", href: "/accessibility-statement" },
  ],
};
