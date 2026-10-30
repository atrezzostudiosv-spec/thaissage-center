# Thaissage Center — Mobile Treatments v13 · Photography and editorial layout

**Date:** 30 October 2026
**Scope:** HOME / OUR TREATMENTS / mobile-only. User supplied two annotated screenshots. Do not alter approved Hero, Locations, desktop, Signature, footer or inner treatment pages.

## User's annotated visual coordinates
- **Green horizontal reference**: beginning of the purple-outlined treatments information block must move up to approximately 26% of phone screen height.
- **Book Now**: explicit prohibition on moving/modifying the CTA.
- **+ Details**: remove underline (border-bottom), keep internal service link.
- **SCROLL TO EXPLORE**: relocate from far left to the **right, immediately before the horizontal progress line**.
- **Images**: previous 1100×760 desktop crops were unsatisfactory on iPhone; choose a more suitable, visually distinct image per treatment with legible white text.

## Implementation
### JavaScript
Updated `assets/js/home-scroll-ritual-v4.js`:
- Mobile treatment scenes now specify `mobileImage` and `mobileAlt` separately from the original `image` / `alt` of the static cards. The six desktop cards and desktop `treatments-chapters.js` remain unchanged.
- The mobile info area is a new `.scroll-ritual-information` node; Book Now remains alone in the original `.scroll-ritual-copy`, preserving the **previously approved bottom CTA anchor**. Both nodes receive identical fade/vertical entrance states.
- All six `+ Details` routes, the 2×3 progress navigation, the existing booking-location selector, native scroll and zoom behavior are retained.

### Mobile imagery — existing optimized project WebP assets
1. **Traditional Thai**: `thaissage-thai-massage-ritual-mobile.webp` (vertical ritual with therapist).
2. **Thai Combination**: `thaissage-treatment-thai-combination-cinematic.webp` (distinct close-up image with mobile-specific focal crop; source remains landscape, flagged for further photographic art direction).
3. **Deep Tissue**: `thaissage-massage-hands-treatment-mobile.webp` (portrait, firmer leg pressure).
4. **Swedish**: `thaissage-gift-experience-mobile.webp` (portrait, smooth back massage scene).
5. **Couples**: `thaissage-hero-spa-interior-mobile.webp` (portrait of treatment room; **illustrative**, not an image showing two therapists or two guests; stronger couple-specific photography remains an artistic enhancement candidate).
6. **More Ways to Unwind**: `thaissage-signature-phuket-floral-ritual.webp` (portrait floral/spa ritual close-up, rather than an overscaled, blurred landscape crop).

**Integrity:** all six unique referenced files were re-read from GitHub as base64; WebP signatures and SHAs verified. Project images are illustrative; not attributed to actual Thaissage branches/staff. No licensing-unverified images introduced. Note: no newly rendered stock/AI photo was committed in this change; it is a deliberate, image-safe asset reassignment, not a claim of six brand-new photographs.

### CSS
New `assets/css/home-treatments-mobile-v13.css`, loaded after v12 with cache-busting `20261030-photos-copy-v13-1`:
- Information block top `clamp(185px,26svh,322px)` on standard phones; compact adjustments for <=390px and 660–715px heights.
- **Book Now** remains anchored `bottom:calc(314px + env(safe-area-inset-bottom,0px))` exactly as v12 (compact-height fallback also retains v12 value).
- `+ Details` has no underline or bottom border, including hover; keyboard focus retains a visible rectangular outline.
- Right-side scroll indicator: text + line grouped by `justify-content:flex-end`, gap 12px.
- Different image focal positions by chapter; middle-third BLACK photographic shading ensures text legibility without green gradients.
- Only mobile `max-width:720px`, with the same minimum-height and reduced-motion conditions as the enhanced story.

## Static QA results — GitHub
- CSS v13 after v12, JS v13 versioned; complete re-read of both files.
- JS valid syntax; CSS braces balanced; six image paths exist and start with `RIFF/WEBP`.
- Exactly six distinct image sources; five are portrait sources from the project's asset catalog, one is a selective mobile focal crop from the wide Thai Combination source.
- Info group separated from booking CTA, both animated together, CTA anchor unchanged, + Details underline removed, scroll label grouped right.
- Six internal Details routes and the established Fresha source selectors unaffected.
- Desktop cinematic controller independent, `noindex,nofollow,noarchive` retained.

## OPEN / must not mark approved
- **Visual rendering in real iPhone browser** at 375, 390 and 430px: copy starts close to green line; no overlap with unchanged Book Now, scroll hint, 2-column names or fixed booking bar. Test all six titles and their varying copy lengths; 6th has the longest description.
- Assess photographic quality and representation: the portrait room assigned to Couples does not visually depict a pair, and Thai Combination currently uses an art-directed crop of the landscape asset. If insufficient, obtain two properly commissioned/generated portrait treatment images instead of reusing unverifiable commercial imagery.
- Check full native-scroll arrival/zoom in Safari, direct chapter selection, Details links, and reduced-motion/low-height fallback; no browser screenshot verification took place in this run.
- Verify 768, 1024, 1440px regressions unchanged.

**State:** IMPLEMENTED & STATICALLY VERIFIED IN GITHUB. MOBILE VISUAL / PHOTO ART DIRECTION PENDING CLIENT REVIEW.
