# Thaissage Center — Home Philosophy mobile background
**Date:** 30 October 2026
**Scope:** Home / #our-approach / mobile <=720 px only.

## User direction
1. Remove the separate photo ABOVE the text on mobile.
2. Use a full-bleed photographic background spanning the section's entire width and at least 100svh (auto-grows if copy needs more).
3. Use the original, light floral-spa image chosen for the section, visually related to the pale photographic backgrounds in Locations.
4. Add a calibrated WHITE gradient for copy readability, never a green image overlay.

## Implementation
- New image: `assets/images/thaissage-philosophy-white-floral-background-mobile.webp` — 941 × 1672, optimized WebP (57,386 bytes) from the generated illustration approved for this change.
- New style: `assets/css/home-philosophy-mobile-v1.css`, loaded after existing mobile stylesheet for isolation.
- Inside mobile rules: `.intro-photograph` display none; `#our-approach` gets image+white overlay using CSS background cover; section min-height 100svh, auto content height; original headings, paragraphs, CTA, and DOM unchanged.
- Original desktop photo block and composition stay untouched for widths >720px. No other Home section is selected by the CSS. No new JS, wheel interception, animation or locking.
- Print disables background photo; demonstration remains noindex.

## Validation
- GitHub image SHA and filename linked from CSS, CSS linked from Home, no duplicate id or content changes.
- Structural/static check of breakpoint and selectors; desktop regression expected by CSS scope, but browser rendering at 375/390/430/768/1024/1440 and iPhone Safari not yet independently verified.
- Final confirmation of full-screen crop and white overlay should be by real mobile render.
