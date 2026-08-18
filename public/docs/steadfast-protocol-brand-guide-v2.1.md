# Steadfast Protocol — Visual Identity Guide

**Version 2.1 · 17 August 2026**

> **v2.1 is a documentation patch.** No artwork, geometry, colour value, cutoff
> or file changed from v2.0. This release restores the typography system,
> symbolism table and artwork governance rules that were present in v1.0 but
> dropped from the v2.0 document, and strengthens the favicon and contrast
> rules. v1.0 remains archived at `archive/v1.0/`; this document supersedes
> both and should be read alone.

---

## 1. Brand foundation

Steadfast Protocol represents security and technology built on enduring
principles. The identity communicates stability under pressure, disciplined
systems thinking, technical precision, trust, and a Christian foundation
expressed through integrated symbolism rather than overt religious ornament.

**Brand attributes**

- **Steadfast** — reliable under pressure; consistent when conditions change.
- **Precise** — disciplined thinking, exact systems, evidence-driven execution.
- **Principled** — decisions anchored in enduring values rather than convenience.
- **Protective** — security is stewardship, not theatre.
- **Purposeful** — technology must serve a real human, business or mission outcome.
- **Modern** — innovative without chasing novelty.
- **Trustworthy** — clear communication, controlled claims, no manufactured certainty.

**Brand narrative**

The shield expresses protection and layered defence. The anchor represents
stability, hope, reliability and an unwavering foundation. The anchor's shaft
and crossbar form a subtle Christian cross, integrating faith into the structure
rather than adding it as decoration. The rope represents connection,
craftsmanship and strength through disciplined systems working together. The
upward flukes signify direction, purpose and forward movement. The closed ring
and fully enclosed shield communicate continuity, perimeter integrity and
unbroken commitment.

---

## 2. Logo anatomy and symbolism

| Element | Meaning |
| --- | --- |
| **Closed shield** | Protection, perimeter integrity, stewardship, security. |
| **Double border** | Defence in depth, layered safeguards, resilience. |
| **Anchor** | Steadfastness, stability, reliability, hope, foundation. |
| **Subtle cross** | Christian foundation, truth, service, moral conviction. Formed by the anchor shaft and crossbar; never added as a separate symbol. |
| **Closed ring** | Continuity, completeness, covenant-like commitment, unbroken purpose. |
| **Rope** | Connection, commitment, craftsmanship, integrated strength. |
| **Upward flukes** | Direction, mission, purpose, forward movement. |
| **Technical geometry** | Precision, systems thinking, discipline, modern technology. |

**Internal theological reference.** The anchor symbolism aligns with Hebrews
6:19 — hope as an anchor for the soul. Public-facing use stays measured and
professional. The faith meaning is intended to be discovered through the mark,
not announced through additional iconography.

---

## 3. Canonical artwork governance

These rules exist because the identity previously suffered repeated emblem
drift across assets. They are the mechanism that prevents recurrence and must
not be relaxed.

- `sp-master-emblem.svg` is the **sole source of truth** for full-detail emblem
  geometry.
- Symmetric geometry is authored **once on the left** and reflected across the
  vertical centre axis.
- The **rope is the only intentionally asymmetric element**.
- The shield bottom and the lower anchor junction are **single centreline
  vertices** — no fork, no doubled point, no butt caps meeting.
- **Never redraw the emblem from a PNG.**
- **Never independently edit the right half** of symmetric geometry.
- Any geometry change is made **once in the master**, then the entire suite is
  re-derived.
- Individual exported files are **outputs, not alternate masters**. Never patch
  an export in place of correcting the source.

---

## 4. Logo hierarchy

**Primary — horizontal.** The horizontal lockup is the primary logo, for
navbars, document headers, slide footers, email signatures, letterheads and
most digital placements. Emblem-to-wordmark gap is 30% of emblem width; the
wordmark cap-block is optically centred on the emblem.

**Secondary — stacked.** For hero placements, square compositions, signage,
apparel, cover art and social graphics.

**Compact horizontal.** Below 24px total lockup height, use the compact version
with STEADFAST only. Phase 4B testing found 24px to be the smallest height at
which PROTOCOL remains reliably identifiable.

---

## 5. Wordmark

| Specification | v2.0/2.1 |
| --- | --- |
| STEADFAST | Unchanged from v1.0 |
| PROTOCOL cap height | 50% target; 49.32% measured in raster realisation |
| PROTOCOL visible span | 68.99% of STEADFAST width |
| Tracking | 0.25em |
| Flanking rules | **Removed** |
| Shared wordmark | One canonical object reused across all lockups |

The outlined vector wordmark in the official lockups is authoritative. Do not
retype it when an approved lockup exists.

- STEADFAST: `#D9DADC` on dark, `#0C1524` on light.
- PROTOCOL: `#4C8FFF` on dark, `#1D4ED8` on light.

---

## 6. Typography

### Primary family — Sora

Sora is the primary supporting typeface for all Steadfast Protocol
communications. It was selected because its geometric construction complements
the emblem, its controlled curves echo the ring and shield, and it reads modern
without becoming sci-fi or gaming-oriented.

| Weight | Use |
| --- | --- |
| Sora 700 | Major headings, strong display |
| Sora 600 | Section headings, interface emphasis |
| Sora 500 | Labels, subheads, navigation |
| Sora 400 | Body copy |

### Technical secondary — IBM Plex Mono

Use sparingly for code, technical identifiers, version numbers, metrics,
evidence labels, and protocol or system references. **Do not** use for
long-form body copy, and never as a substitute for the official wordmark.

### Digital fallback stack

```
Sora, Inter, "Segoe UI", Arial, sans-serif
```

---

## 7. Colour system

| Token | Hex | Use |
| --- | --- | --- |
| Brand Navy | `#000413` | Primary dark field |
| Alternate Navy | `#050B18` | Lifted dark field |
| Flat Brand Blue | `#4C8FFF` | Digital-default emblem; PROTOCOL on dark |
| Expressive Top | `#5097EE` | Two-stop expressive gradient start |
| Expressive Bottom | `#1356C3` | Two-stop expressive gradient end |
| Expressive Rope | `#337FE0` | Rope mid-tone fill in the expressive treatment |
| STEADFAST Dark | `#D9DADC` | Wordmark on dark and transparent-dark |
| STEADFAST Light | `#0C1524` | Wordmark on light |
| PROTOCOL Light | `#1D4ED8` | PROTOCOL on light fields |
| Monochrome White | `#F4F7FC` | Single-colour light reproduction |
| Monochrome Black | `#0C1524` | Single-colour dark reproduction |

The emblem must read blue overall. Do not shift the palette toward cyan, teal,
turquoise, purple or grey.

---

## 8. Emblem treatment hierarchy

**Digital default — true flat.** A single `#4C8FFF` treatment with no gradient,
shading, highlights or contact shadows. Use for website, app UI, social, email,
decks and documents.

**Expressive — two-stop.** Exactly one linear gradient, `#5097EE` → `#1356C3`,
with no specular highlight layer. Use for print, large format, hero placements
and merchandise. **Do not use below 96px.**

**Retired — full dimensional.** The v1.0 multi-stop dimensional emblem is
retired. It remains at `archive/v1.0/dimensional-emblem.svg` for historical
record only and must not be used in new production work.

---

## 9. Responsive system

Cutoffs were determined from actual-size renders, not assumption.

| Emblem size | Rope | Treatment | Lockup |
| --- | --- | --- | --- |
| ≥256px | Yes | Flat default; expressive allowed | Full when ≥24px tall |
| 128–255px | Yes | Flat default; expressive allowed | Full when ≥24px tall |
| 96–127px | Yes | Flat default; expressive allowed | Full ≥24px; compact below |
| 64–95px | No | Flat, no-rope only | Full ≥24px; compact below |
| 33–63px | No | Flat, no-rope only | No wordmark below 24px |
| 16 / 32 / 48px | N/A | Native favicon master | No wordmark |

**Rope cutoff: 96px.** At 64px the two wraps merge into a compact mass around
the crossbar.

**Full-lockup threshold: 24px.** At 20px, PROTOCOL counters and stems merge
enough to fail the secondary-line legibility test.

**Note on the 33–63px band.** Non-favicon icons in this range use the flat
no-rope emblem, *not* a favicon master. The favicon masters are reserved for
16, 32 and 48 exactly.

---

## 10. Favicon policy

The three favicon sizes are **three separate masters**, not one drawing at
three scales.

- **16px** — hand-authored directly on a 16×16 pixel grid. Never generated
  from the SVG.
- **32px** — independent native-size master.
- **48px** — independent native-size master.

All three are authored as a left half and structurally mirrored, giving zero
mirror mismatch by construction.

**Prohibited:** smooth-resampling one favicon size to produce another, and
regenerating any favicon size from `sp-master-emblem.svg`. Rendering the SVG at
32px would technically satisfy "do not smooth-resample" while still violating
this policy — it is prohibited regardless of method.

---

## 11. Clear space and backgrounds

Define **X** as the diameter of the anchor's closed ring. Minimum clear space
around a lockup is **0.5X**; preferred is **1X**. No text, image crop, rule,
edge or other mark may intrude.

- **Dark fields:** `#000413` preferred; `#050B18` is the approved alternate.
- **Light fields:** use the approved light variant. Never place the dark lockup
  directly on white.

### Mid-tone restriction — hard rule

PROTOCOL `#4C8FFF` measures **1.26:1** contrast against mid-grey `#808080` —
effectively invisible. Against brand navy it measures **6.51:1**.

Transparent lockups are for **controlled dark or light backgrounds only**. Do
not place transparent wordmark lockups on mid-tone grey, mid-tone photography,
or any field above roughly 40% luminance without a controlled backing area. Use
the light variant instead.

---

## 12. Watermark

The production watermark is the monochrome white emblem at **12% opacity**,
emblem only. Higher-opacity renders are QA inspection aids and must not be
distributed as brand assets.

---

## 13. Approved asset families

1. **Primary horizontal** — flat, compact and expressive families in dark, light and transparent.
2. **Secondary stacked** — flat and expressive families.
3. **Icons** — flat, expressive and no-rope responsive families.
4. **Platform** — Open Graph, email signature and social profile rebuilt flat; Apple, Android and watermark assets unchanged.
5. **Reduced** — monochrome white and black.
6. **Favicons** — native 16, 32 and 48 masters plus `favicon.ico`.

---

## 14. Incorrect usage

- Do not stretch, distort, rotate or recolour the mark.
- Do not alter the canonical shield or anchor geometry, the border hierarchy, the closed shield top, or the closed anchor ring.
- Do not reintroduce the flanking rules.
- Do not use the expressive emblem below 96px.
- Do not use the retired dimensional emblem.
- Do not add a separate cross or any new religious or technical iconography.
- Do not add circuitry, nodes, binary, locks, crowns, doves, fish, stars, compass points, rays, monograms or taglines.
- Do not add drop shadows, outer glow, chrome, heavy bevel or blur.
- Do not smooth-resample or regenerate favicon masters.
- Do not patch individual exports after a master change.

---

## 15. Production QA

Verify numerically and report measured values. Do not assert compliance.

- Emblem aspect ratio: **0.779 ± 0.005** across every asset.
- Favicons 16/32/48: **zero mirror mismatches**.
- Master symmetry structural, rope excluded.
- One centred shield bottom vertex; nothing below the anchor-arm junction.
- Flat emblem: one ink colour, **>80%** exact brand-blue rendered ink.
- Expressive SVG: **exactly two** gradient stops.
- Transparent exports: **zero** outside-alpha plate deviation.
- PROTOCOL: 50% target cap height; **66–72%** of STEADFAST span.
- Wordmark **0.00% different** across lockups (shared object).
- Horizontal carries primary designation.
- Full-lockup threshold 24px; compact below.
- Retired dimensional emblem absent from production assets.
- v1.0 preserved intact under `archive/v1.0/`.

**QA previews must use nearest-neighbour enlargement.** Smooth resampling
manufactures intermediate colours and hides exactly the defects this checklist
exists to catch — false flats, halos, and pixel asymmetry.

---

## 16. Governance and versioning

All derivatives are generated from the shared geometry, treatment and wordmark
sources. Exports are never edited directly.

| Change | Version bump |
| --- | --- |
| Export or packaging corrections; documentation | Patch (2.0 → 2.1) |
| New approved applications, canonical mark unchanged | Minor (2.1 → 2.2) |
| Canonical emblem, wordmark, core palette or typography | Major (2.1 → 3.0) |

**Steadfast Protocol Visual Identity v2.1** — released 17 August 2026.
v2.0 supersedes v1.0; v2.1 supersedes both. v1.0 archived intact.

This Markdown file is the source of truth for the guide. PDF and DOCX versions
are derived outputs and follow the same rule as artwork exports: correct the
source, then re-derive.
