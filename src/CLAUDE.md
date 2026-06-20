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

## Visual identity — already implemented, follow exactly, do not redesign
- Background: var(--color-ink) #0a0e14
- Surfaces: var(--color-surface) #11161f, var(--color-surface-2) #171d29
- Borders: var(--color-line) #232a38
- Text: var(--color-text) #e8e9ed, muted: var(--color-muted) #8b93a1
- Accents: var(--color-signal) #2dd4bf (primary, technical), var(--color-wheat)
  #e8b854 (secondary, use sparingly)
- Fonts: font-display (Space Grotesk, headlines only), font-sans (IBM Plex
  Sans, body copy), font-mono (IBM Plex Mono, labels/eyebrows/status text)
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