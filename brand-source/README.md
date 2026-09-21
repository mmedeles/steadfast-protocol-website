# Steadfast Protocol — brand source

Working library for the identity. Nothing here is served: the website's copies
live in `public/` (see "What the site serves" below). Current artwork is
**emblem v2.2** — clean vectors rebuilt from the v2.1 trace.

## Folders

| Folder | Contents |
| --- | --- |
| `01-primary-horizontal/` | Primary horizontal lockups, flat and expressive, in dark / light / transparent. SVG plus 869×310 PNG. |
| `03-icons/` | Shield icon family at 1024×1024: flat, expressive and no-rope, each in dark / light / transparent. SVG plus PNG. |
| `05-platform/` | `email-signature-360x96.png` and `social-profile-1024.png`. The touch, Chrome and Open Graph images are generated into `public/05-platform/`. |
| `06-monochrome/` | Single-colour emblem: white `#F4F7FC`, black `#0C1524`. SVG plus 1024×1024 PNG. |
| `favicons/` | Favicon pixel masters: 16, 32 and 48 PNG. Each size is independently authored — never resample one from another. |
| `source/` | Canonical masters (`sp-master-emblem.svg`, `-norope`, `-expressive`), the generator `sp-emblem-build.py`, and the Sora OFL licence. |
| `docs/` | The brand guide. Carries the v2.1 document plus the v2.2 changelog at the top. |
| `qa/` | `v2.2/` holds the drop's report, before/after comparisons and the family sheet. |
| `archive/` | `v2.1-traced/` — the superseded bitmap-trace artwork, kept for reference. `v1/` — v1-era artwork on the old off-palette gradient. |

## Colour

- Emblem on dark or transparent: `#4C8FFF`. On light: `#1D4ED8`.
- Wordmark: STEADFAST `#D9DADC` on dark, `#0C1524` on light. PROTOCOL takes the
  emblem colour.
- Dark plates: `#000413`. Light plates: `#FFFFFF`.
- Expressive emblem: two-stop linear gradient `#5097EE` → `#1356C3`, top to
  bottom. Exactly two stops; the wordmark stays flat.

## Rules

- Regenerate derivatives from `source/`; never edit an export by hand.
- Lockup wordmarks are Sora converted to outlines, so the files carry no font
  dependency. PROTOCOL tracking is 1.187em in the lockups; the website solves it
  per size pair (1.181em at 11.2px, 1.132em at 9.6px) because CSS letter-spacing
  trails the last letter.
- Transparent artwork is for dark fields only — never place it on a mid-tone
  (~40%+ luminance) background.

## What the site serves

`public/03-icons/sp-icon-transparent.svg` (navbar and footer emblem),
`public/04-favicons/` (favicon SVG, PNGs and ICO), `public/favicon.ico`
(multi-size 16/32/48), and `public/05-platform/` (Apple touch, Android Chrome
192/512, Open Graph). `favicon.svg` is deliberately still the v2.1 drawing: it
has its own small-size tuning and faceting is invisible at 16–32px.
