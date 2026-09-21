# Steadfast Protocol emblem v2.2 — clean-vector rebuild

The v2.1 master (`sp-master-emblem.svg`) was a bitmap trace: 849 segments, 0% curves, 99% of coordinates snapped
to whole pixels. It rendered fine at web sizes and faceted at print sizes. v2.2 is a geometric reconstruction of the
same mark, fitted to the trace by measurement.

## Files

| File | Use |
| --- | --- |
| `sp-master-emblem.svg` | Canonical emblem, flat `#4C8FFF`. Same coordinate frame as v2.1 (viewBox `1 1 639 820`), so it drops into any existing wrapper unchanged. |
| `sp-master-emblem-norope.svg` | Rope-free tier (below 96px). Same frame. |
| `sp-horizontal-light.svg` | Light fields. Emblem `#1D4ED8`, STEADFAST `#0C1524`, PROTOCOL `#1D4ED8`. No background, tight viewBox. |
| `sp-horizontal-transparent.svg` | Dark fields. Emblem `#4C8FFF`, STEADFAST `#D9DADC`, PROTOCOL `#4C8FFF`. No background, tight viewBox. |
| `sp-horizontal-dark.svg` | As transparent, on a `#000413` plate with clear space of one ring diameter. |
| `source/sp-emblem-build.py` | Generator. Re-running it reproduces all five files byte-for-byte (verified). |

## Construction

Shield: one silhouette (straight sides, 46.3° chamfers, fitted cubic, straight diagonal into a single vertex), with
both borders built as exact parallel offsets of it. Ring: true circles. Shaft: straight taper, 32 → 40 units wide.
Crossbar: rectangle plus true-circle terminals. Arms: fitted cubic edges; flukes: straight-edged heads. Left half
authored, right half mirrored. Rope: stroked Bézier centrelines, tapered where it turns behind the shaft, with
twist gaps and knockouts converted to filled outlines, so no masks or strokes remain in the files.

## Fit to the traced v2.1 master

Units are the master frame (emblem 635 units wide; 1 unit ≈ 0.16% of emblem width).

| Feature | IoU | Mean deviation | 95th pct |
| --- | --- | --- | --- |
| Ring + upper shaft | 0.976 | 0.31 | 0.67 |
| Arms, flukes, lower shaft | 0.971 | 0.49 | 1.37 |
| Crossbar + terminals (away from rope) | 0.992 | 0.13 | 0.47 |
| Shield outer border | 0.929 | 0.69 | 3.14 |
| Shield inner border | 0.322* | 1.06 | 3.40 |
| Rope | 0.592 | 3.46 | 11.05 |

\* A 3-unit-wide line: a 3-unit shift zeroes its IoU. The deviation columns are the meaningful measure.

## Deliberate departures — review these

1. **Uniform border weights.** The trace's outer border varied from 17 to 23 units (thinner along the bottom); the
   inner border's inset varied from 28 to 34.5. v2.2 uses 20 / 11 gap / 3 everywhere. Largest shift: 3.4 units at
   the top and bottom of the inner border.
2. **Rope redrawn.** Same path and arrangement, but one consistent diameter (20 units; the trace varied 16–25),
   clean twist gaps instead of traced lumps, tapered ends where it passes behind the shaft, and the two wraps
   sitting directly against each other. The knot is about 16 units shorter than the trace.

Everything else matches within about 1.4 units at the 95th percentile.

## Lockups

Built from the website navbar values captured from `Navbar.tsx`: STEADFAST Sora 700 at 0.330 × visible emblem
height, 0.08em tracking; PROTOCOL Sora 500 at 0.154 ×; line gap and emblem gap as rendered on the site. Wordmark
converted to outlines (no `<text>`, no font dependency). Sora is SIL OFL — licence in `source/`.

One change from the site: **PROTOCOL tracking is 1.187em, not 1.06em.** At 1.06em the live site's PROTOCOL ends
~10px short of STEADFAST, because CSS letter-spacing trails the last letter. 1.187em makes the letters end flush.
Updating the site to match is a one-line change.

The emblem-to-wordmark gap (0.47 × emblem height) matches the site. It is wider than the older brand-guide figure
because the site's icon sits in a padded square box; tighten it in both places or neither.

## Checks

- No `<text>`, `<image>` or base64 in any file; only the listed colours present.
- Mirror symmetry of the construction (rope-free): 0 pixels differ at 4× render.
- `favicon.svg` not rebuilt: it has its own small-size tuning, and faceting is invisible at 16–32px.
