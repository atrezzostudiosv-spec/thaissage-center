# Thaissage Center — Mobile Treatments images V15 (30 October 2026)

## Authorized scope
Replace only mobile Home Treatments photographic assets 02–06 using the five portrait sources supplied by the user. **01 Traditional Thai remains approved and unchanged**. No layout, CSS, text, animation, routes, pricing, booking or desktop treatment photograph changes.

## Source mapping and delivery
- 02 Thai Combination ← image(3).png → thaissage-thai-combination-mobile-portrait-v15.webp (768 × 1664; 88,974 bytes)
- 03 Deep Tissue ← image(4).png → thaissage-deep-tissue-mobile-portrait-v15.webp (768 × 1664; 72,560 bytes)
- 04 Swedish ← image(5).png → thaissage-swedish-mobile-portrait-v15.webp (768 × 1664; 72,360 bytes)
- 05 Couples ← image(6).png → thaissage-couples-mobile-portrait-v15.webp (768 × 1664; 83,628 bytes)
- 06 Specialty / More Ways to Unwind ← image(7).png → thaissage-specialty-mobile-portrait-v15.webp (768 × 1664; 89,732 bytes)

Original source details retained (no person or object redrawing). To fit an approximately 375 × 812 viewport without cropping faces or horizontally stretching people, the source scene is scaled proportionally and subtly blended at the upper/lower edges with an atmospheric, defocused copy of itself. All five images are distinct optimised WebP, with no text baked into the image. Manual 375 × 812 crop simulation checked, including the component's largest photographic scale (~1.08); this is **not a live browser visual test**.

## Code changed
- Only five src/alt entries in `assets/js/home-scroll-ritual-v4.js`; first mobile source remains unchanged.
- Accurate mobile image `height` attribute for new 768×1664 sources (first keeps 768×1024).
- `index.html` query string bump to bypass JS caching.
- Added this QA report and updated status.

## Verification and acceptance
- WebP dimensions/content verified locally; five distinct image Git blob hashes.
- GitHub references and image files checked after commit, with 6/6 unique mobile photo mappings.
- Existing noindex and source page links must remain.
- Live Safari iPhone visual verification at 375/390/430, object fit and all six chapters still due; GitHub deploy success does not certify UX.
- No claim that scenes depict actual Thaissage staff or locations.
