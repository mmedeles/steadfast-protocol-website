# Steadfast Protocol Web Assets — v2.1

This package is an export of the approved v2.x identity. No mark redesign is introduced.

## Use
- Primary website logo: `primary/sp-horizontal-*.svg`
- Under 24px lockup height: `sp-horizontal-compact-*`
- Icon >=96px: `icons/sp-icon-*`
- Icon <96px (non-favicon): `icons/sp-icon-noRope-transparent.svg`
- Exact 16/32/48 browser icons: use the independent PNG masters in `favicons/`
- `favicons/favicon.svg` is a scalable no-rope browser fallback and is **not** a source for the native PNG favicon masters.

## Source policy
`source/sp-master-emblem.svg` is the web canonical geometry/treatment source. All production SVG lockups use real vector paths and outlined wordmark geometry: no `<text>`, embedded raster, base64, filters or gradients.

The expressive two-stop source is retained in `source/` as an approved reference treatment, but no expressive production asset is included in this web subset because it was not requested. The retired v1 dimensional treatment is absent.
