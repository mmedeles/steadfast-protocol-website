# Steadfast Protocol — Website

## Business context
Steadfast Protocol, LLC is a software development, AI tooling, and workflow
automation consultancy based in North Dakota. Domain: steadfastprotocol.com.
Contact: mmedeles@steadfastprotocol.com, (701) 368-9524
(tel:+17013689524).

The name is deliberate: "Steadfast" carries a subtle Christian undertone
(steadfast faith/love) and "Protocol" is straightforward technical/
cybersecurity language. NEVER use overt religious branding, symbols, or
scripture references. The undertone shows up only through word choice —
steadfast, anchored, dependable, holds under load, established — never
explicit.

## Visual identity — brand guide v2.1, follow exactly, do not redesign
See `brand-source/docs/steadfast-protocol-brand-guide-v2.1.md` for the full spec.
`public/` is served verbatim, so it holds ONLY files the site references:
`03-icons/sp-icon-transparent.svg` (navbar/footer emblem), `04-favicons/*`,
`05-platform/` android-chrome-192/512, apple-touch-icon-180 and
open-graph-1200x630. The full brand asset drop (lockups, stacked, icon
variants, monochrome, source masters, QA reports, brand guide, the older
superseded trees) lives in `brand-source/` at the repo root, which is not
served. Copy a file into `public/` only when a component starts using it.
- Background: var(--color-ink) #000413, alternate: var(--color-surface) #050B18
- Surfaces: var(--color-surface-2) #0A1424
- Borders: var(--color-line) #16233A. Form field outlines only:
  var(--color-field-line) #5A6982 (3.32:1 on surface-2 — WCAG 1.4.11)
- Text: var(--color-text) #D9DADC, muted: var(--color-muted) #8E9AAF
- Accent: var(--color-signal) #4C8FFF (flat, digital default) — var(--color-signal-hi)
  #5097EE / var(--color-signal-lo) #1356C3 are the expressive-gradient stops,
  not for flat digital use. No secondary/wheat accent in v2.1.
- Fonts: font-display and font-sans both resolve to Sora (700 major
  headings/hero, 600 section headings, 500 labels/subheads/nav, 400 body),
  font-mono is IBM Plex Mono — sparingly, for the terminal panel, eyebrow
  labels and status indicators, never body copy.
- Logo (since commit 5a52f34): navbar and footer do NOT use the horizontal
  lockup SVG. Both render the emblem `public/03-icons/sp-icon-transparent.svg`
  (1024×1024 viewBox; the visible anchor-shield is ≈72.8% of the box height)
  next to live Sora text — STEADFAST (700, tracking 0.08em, text-text) over
  PROTOCOL (500, wide tracking, text-signal). Measured in Chrome:
  - Navbar md+: emblem box 100px (`md:h-25`, visible ≈72.8px), STEADFAST
    24px font ≈18px cap height, PROTOCOL 11.2px font ≈9px cap height. Bar
    padding `md:py-[18px]` → 136px bar.
  - Navbar <md: emblem box 48px (`h-12`, visible ≈34.9px), STEADFAST 20px
    ≈15px cap, PROTOCOL 9.6px ≈7px cap. Bar padding `py-3` → 72px bar.
  - Footer: emblem box 80px (`h-20`, visible ≈58.2px), STEADFAST 20px ≈15px
    cap, PROTOCOL 9.6px ≈7px cap. The logo link is `w-max` so the lg footer
    grid reserves its full width (226px) instead of letting it overlap the
    SERVICES column.
  Cap heights are canvas `measureText` ascent, ±0.5px. The horizontal
  lockups in `brand-source/01-primary-horizontal/` remain the brand's
  primary mark for other media. Transparent assets are for dark backgrounds
  only — never place on mid-tone (~40%+ luminance) fields.
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