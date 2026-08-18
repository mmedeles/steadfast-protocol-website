# Steadfast Protocol — Website

## Business context
Steadfast Protocol, LLC is a software development, AI tooling, and workflow
automation consultancy based in North Dakota. Domain: steadfastprotocol.com.
Contact: mmedeles@steadfastprotocol.com.

The name is deliberate: "Steadfast" carries a subtle Christian undertone
(steadfast faith/love) and "Protocol" is straightforward technical/
cybersecurity language. NEVER use overt religious branding, symbols, or
scripture references. The undertone shows up only through word choice —
steadfast, anchored, dependable, holds under load, established — never
explicit.

## Visual identity — brand guide v2.1, follow exactly, do not redesign
See `public/docs/steadfast-protocol-brand-guide-v2.1.md` for the full spec.
Current asset drop lives under `public/01-primary-horizontal/`,
`02-secondary-stacked/`, `03-icons/`, `04-favicons/`, `05-platform/`,
`06-monochrome/`, `source/` — the older `public/primary/`, `secondary/`,
`icons/`, `favicons/`, `platform/`, `guide/` and `qa/QA-REPORT-v2.1.*`
trees are superseded and unreferenced by any component; safe to delete
if a cleanup pass ever happens, just hasn't been asked for yet.
- Background: var(--color-ink) #000413, alternate: var(--color-surface) #050B18
- Surfaces: var(--color-surface-2) #0A1424
- Borders: var(--color-line) #16233A
- Text: var(--color-text) #D9DADC, muted: var(--color-muted) #8E9AAF
- Accent: var(--color-signal) #4C8FFF (flat, digital default) — var(--color-signal-hi)
  #5097EE / var(--color-signal-lo) #1356C3 are the expressive-gradient stops,
  not for flat digital use. No secondary/wheat accent in v2.1.
- Fonts: font-display and font-sans both resolve to Sora (700 major
  headings/hero, 600 section headings, 500 labels/subheads/nav, 400 body),
  font-mono is IBM Plex Mono — sparingly, for the terminal panel, eyebrow
  labels and status indicators, never body copy.
- Logo: horizontal lockup is primary (`public/01-primary-horizontal/sp-horizontal-*`),
  used at every breakpoint — no compact/emblem-only fallback anymore. Navbar
  40px, Footer 48px. Transparent lockups are for dark backgrounds only —
  never place on mid-tone (~40%+ luminance) fields.
  **Rebalanced asset (measured, not guessed):** as of this drop, PROTOCOL's
  cap height is a fixed ~19.9% of the total rendered lockup height (STEADFAST
  is ~40.5%) — verified via `getBBox()` on the wordmark paths, cross-checked
  against the SVG's own `<metadata>` ("STEADFAST cap height 57.5% of emblem
  height"). PROTOCOL cap height in px ≈ 0.199 × (Image `height` prop): ~8.0px
  at 40px (navbar), ~9.6px at 48px (footer) — both crisp and distinct at
  400% zoom, unlike the earlier (now superseded) 1600×500-viewBox asset where
  PROTOCOL was only ~7% of lockup height and stayed a blur even at 60px.
  If this asset is ever swapped again, re-measure with `getBBox()` before
  picking a size — don't assume the old ~7%/~14.5% ratios still apply.
- Signature motif: a terminal/"connection status" aesthetic — small mono-font
  status indicators, blinking-dot badges like "connection: steadfast"
  (see Footer.tsx for the existing pattern)
- Stay restrained: no gradients as a default, no neon-green hacker cliché, no
  01/02/03 numbering unless the content is a genuine sequence

## Tech stack
- Next.js 16, App Router, TypeScript, Tailwind v4 (CSS-based theme in
  src/app/globals.css via @theme — there is no tailwind.config file)
- Components live in src/components/
- Existing files: src/app/layout.tsx, src/app/globals.css,
  src/components/Navbar.tsx, src/components/Footer.tsx, src/app/page.tsx

## Pages needed
- / — hero with the connection-status signature element, services overview,
  short about teaser, CTA to contact
- /services — Custom Software Development, AI Tooling & Integration,
  Workflow Automation, Technical Consulting / Dev Shop Collaboration
- /about — founder story, North Dakota basis, philosophy of reliability
- /contact — contact info, a form (client-side only for now — no backend
  wired up yet, mark this clearly with a TODO comment), mailto fallback

## Copy voice
Plain, confident, technical but human. Active voice. No filler buzzwords
("synergy," "leverage," "cutting-edge"). Speak to what the client gets, not
how the system works internally.

## Conventions
- Every page wraps content in the existing Navbar and Footer — don't
  duplicate or recreate them
- Keep components small, named clearly, one job each
- Mobile-first responsive, test down to 375px width


## Engagement model (real facts — use exactly, don't invent details)
- Based in Bismarck, ND. Serves clients across North Dakota; meetings can be
  in-person or fully remote depending on the client.
- First step for a new client: a free discovery call (phone, video, or
  in-person) to scope the work.
- After the discovery call: a written proposal with scope and a quote.
- Do not invent specific turnaround times (e.g. "48 hours"), exact pricing
  numbers, or guarantees beyond what's stated here.