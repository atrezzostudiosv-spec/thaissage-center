# Thaissage Center — Desktop Treatments / Text-to-CTA spacing

**Date:** 30 October 2026
**Approved user reference:** screenshot with red band between treatment copy and the two action buttons.

## Change implemented
- `assets/css/treatments-chapters.css`: desktop-only `.cinema-meta` bottom margin changed from `clamp(13px,1.7svh,21px)` to `clamp(70px,9svh,84px)`, yielding ~80px at 890px viewport height.
- Desktop compact heights (<=720px): previously `9px`, now `clamp(38px,6.8svh,48px)` to maintain separation without pushing the title into the upper chrome.
- The established `.cinema-copy` bottom position and `.cinema-actions` placement remain unchanged, meaning increased margin raises kicker/title/description/meta and does not lower the booking/details actions.
- `index.html` CSS cache key bumped so a fresh version is requested.

## Protected
- No JS modifications, no scroll progress changes, no navigation changes, no link changes.
- No CSS changes outside the original (min-width:1025px, min-height:560px, no reduced-motion) immersive desktop media query.
- Mobile layouts and their photographic treatments are untouched. No changes to Photography, Philosophy or other sections.

## Static checks
- Exact style rules matched before changing; CSS brace counts balanced after edit.
- Link to stylesheet refreshed; no duplicate stylesheet.
- Desktop action row and positioning declarations remain identical to prior version.
- QA in live browser at 1025, 1280, 1440 and compact heights remains unverified (do not mark as visual-pass until verified).
