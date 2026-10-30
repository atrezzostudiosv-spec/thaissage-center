# Thaissage Center — Desktop Treatments + Details (30 October 2026)

## Approved scope
User requested a Details action for each of six desktop immersive treatment chapters, visible beside Book Now. Do not touch mobile treatments, approved layout, photographs, booking or scroll experience.

## Implementation
- `assets/js/treatments-chapters.js`: six existing interior service routes mapped to the original six card order, and a secondary `+ Details` anchor added to each desktop `.cinema-panel` beside the existing `Book Now` anchor inside `.cinema-actions`.
- `assets/css/treatments-chapters.css`: action row and subtly outlined editorial secondary pill, scoped entirely within the preexisting desktop-only media query `min-width:1025px;min-height:560px;prefers-reduced-motion:no-preference`; short-height rule retains alignment. Existing booking CTA style retained.
- `index.html`: updates query-string versions of these two files to avoid stale browser cache.
- The original booking-selector event listener and click forwarding remain unchanged; no new scroll interception or viewport behavior.

## Verified static conditions
- All six destinations exist in main:
  1. `/massage-services/thai-massage/`
  2. `/massage-services/thai-combination-massage/`
  3. `/massage-services/deep-tissue-massage/`
  4. `/massage-services/swedish-massage/`
  5. `/massage-services/couples-massage/`
  6. `/massage-services/specialty-massages/`
- No edits to mobile JS/CSS, Signature, Hero, Locations, Philosophy, intro content or pricing.
- Noindex retained in demo. Accessibility: native anchors, descriptive aria labels, visible focus indicator, no elements inserted outside the original active-panel inert management.

## Remaining
Live visual interaction test on desktop 1025/1280/1440px, short-height desktop, click targets, and browser regression remain to be verified. GitHub static checks and successful Pages deployment are not proof of live click tests.
