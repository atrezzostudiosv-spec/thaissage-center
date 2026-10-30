# Thaissage Center · Home mobile treatments / exclusive image assets V14
**Date:** 2026-10-30. **Scope:** only mobile-only six photographic background sources in Home Treatments. No layout, booking, desktop, routes, or other sections modified.

## Deliverables
Six 768×1024 WebP portraits, with filenames and alt texts individually mapped:
- 1. `thaissage-traditional-thai-mobile-exclusive.webp` — Illustrative traditional Thai assisted stretching on a floor mat
- 2. `thaissage-thai-combination-mobile-exclusive.webp` — Illustrative assisted arm and shoulder mobility during Thai combination massage
- 3. `thaissage-deep-tissue-mobile-exclusive.webp` — Illustrative focused pressure on the upper back during deep tissue massage
- 4. `thaissage-swedish-mobile-exclusive.webp` — Illustrative massage oil application during a Swedish massage treatment
- 5. `thaissage-couples-mobile-exclusive.webp` — Illustrative couples massage with two guests receiving treatments side by side
- 6. `thaissage-specialty-mobile-exclusive.webp` — Illustrative herbal compress and spa ritual for specialty wellness treatments

The images are illustrative creative assets, not photographs of Thaissage staff, real guests or actual branches. One is an individually composed photograph and five are portrait compositions extracted and optimized from bespoke illustrative concept images, with no web UI or marketing copy embedded. No claim is made that these photographs document actual services rendered.

## Code integration
- Only `mobileScenes` src / alt in `assets/js/home-scroll-ritual-v4.js` is remapped.
- `index.html` version parameter updates the same JS asset for cache invalidation.
- Existing mobile 6-chapter narrative, selectors, + Details, booking, typography, animation, and desktop original images are unchanged.
- Same files apply at <=720px when min-height and motion preference permit enhanced mode. Smaller-height and reduced-motion fallback preserves original cards as previously approved.

## Verification
- Portrait sizes confirmed locally 768×1024, six non-empty RIFF/WEBP files verified.
- Six unique Git blobs stored and linked to repository tree.
- JS source mapping and alt strings checked against six new image filenames, no old src in mobile map.
- GitHub Pages deployment status and live mobile photographic QA are separate checks; do not mark live browser rendering verified based solely on repository inspection.
