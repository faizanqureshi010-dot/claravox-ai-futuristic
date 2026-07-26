<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

<!-- BEGIN:visual-asset-rules -->
# Visual Asset Approval Rule

No visual asset is added to the website without explicit approval first. This covers: doctor/healthcare staff photos, icons, illustrations, background patterns, 3D graphics, animations, Lottie files, section dividers, card designs, charts, and color palette changes.

Workflow, every time a visual asset is needed:

1. Propose candidates first. Do not implement, install, or reference the asset in code until approved.
2. If you have web search or image search tool access in this session, use it to find real candidate images (e.g. via Unsplash, Pexels, or similar commercially-licensed sources) and present actual URLs/links, not text descriptions of imagined images. If you do not have search tool access, say so explicitly and list specific search terms for the user to check themselves instead of guessing or inventing a URL.
3. For each candidate: the URL/source, the license type (must be free-to-use commercially, e.g. Unsplash License or Pexels License — verify this, don't assume), and where on the site it would be placed.
4. Wait for explicit approval on each candidate before writing any code that references it.
5. No exceptions, including for placeholder/temporary images — a "just for now" image still needs approval first.

# Visual Storytelling Rule

Every major page section should have something visual — not necessarily a photo, but something: an icon, a small illustration, a diagram, a chart, a card treatment. No large section of plain text-only content.

For healthcare/human imagery specifically: premium editorial-style photography (doctors, nurses, specialists, healthcare administrators, medical office settings), not generic-looking stock photography. Source from free commercially-licensed libraries (Unsplash, Pexels) using the Visual Asset Approval Rule above — every image still needs approval before use, this rule only sets the quality/style bar, it does not bypass the approval workflow.
<!-- END:visual-asset-rules -->

<!-- BEGIN:knowledge-centre-content-standard -->
# Knowledge Centre Content Standard

Long-form Knowledge Centre articles should follow this framework, used as a checklist to draw from, not a mandatory 12-part structure enforced rigidly on every article — not every topic needs every section:

1. Problem Definition
2. Why It Matters
3. Core Concepts (use a real comparison table where genuinely useful, not decoration)
4. Step-by-Step Guide
5. Worked Example (concrete scenario, real-sounding codes/payers, not vague generalities)
6. Common Mistakes
7. Operational Impact — explicitly connect the topic to a business metric (e.g. how eligibility verification affects collections, how coding accuracy affects realized lifetime value, how denial management affects revenue leakage, how AR follow-up preserves patient value, how workflow automation reduces administrative friction). This is Claravox's specific differentiator versus generic RCM content — don't skip it.
8. Technology & Automation Perspective — must use the project's existing honest tiered system: Production Ready / Live In Our Operations / Pilot Deployment / Active Development / Architecture & Planning / Future Vision (the complete six tiers, exact naming, as defined in `components/ui/TierBadge.tsx` — the single source of truth — and used consistently on the Technology page and every Healthcare Operations page). Place each capability in whichever of the six tiers it actually belongs to. Never claim a capability is live if it isn't, and never invent a seventh tier or blur two of these together.
9. Metrics to Track
10. FAQs
11. Practical Takeaways
12. Relevant Claravox Services — one subtle mention/link at the end, not woven through the piece, not repeated

Hard rules, non-negotiable:

- Never invent a statistic, percentage, or outcome claim ("clients see X% improvement," "denials drop below Y%") without a real, cited, linkable source (e.g. MGMA, HFMA, CMS). If no real source exists for a claim, don't make the claim — describe the mechanism instead, not a fabricated number.
- One clear call-to-action per article, placed at the end. No mid-article sales pitches, no popup modals, no multiple competing CTAs.
- Any diagram, chart, illustration, or image proposed for an article goes through the existing Visual Asset Approval Rule already in this file — propose first, wait for approval, never embed a stock photo as a substitute for an actual diagram when a diagram would genuinely help (e.g. a workflow diagram, a decision tree, a real data comparison chart).
- Content should read as written for a practice owner solving a real problem, not written to rank for a keyword. Avoid repeating the exact same phrase (e.g. a service name) unnaturally often across a single article purely for SEO density.
<!-- END:knowledge-centre-content-standard -->
