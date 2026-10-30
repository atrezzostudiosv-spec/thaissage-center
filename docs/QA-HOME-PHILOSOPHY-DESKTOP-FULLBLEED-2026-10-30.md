# Thaissage / Home Our Philosophy — Desktop full-bleed conversion
**Date:** 30 October 2026.
**Authorized request:** the photo currently confined to the left should occupy the full background of the Philosophy section on desktop, with a soft mouse hover zoom, never interrupting scroll.

## Source audit and decision
- Existing intro photo: `thaissage-signature-phuket-floral-ritual.webp` (840×1050 WebP). This same approved image is reused on desktop instead of inventing an unrelated picture. Its native resolution is portrait and may be soft at 1440px: live image crispness remains a QA point.
- Existing desktop markup contains .intro-photograph in column 1 and intro text in column 2; mobile already has a full-bleed background using a different image with rules <=720px.
- Keep mobile as approved. Change desktop-only rules in a new standalone CSS loaded after all prior styles.

## Implementation
- New `assets/css/home-philosophy-desktop-v1.css`, scoped to `#our-approach` at min-width 721px.
- Old separate photo `.intro-photograph` hidden **only above 720px**, not deleted from HTML.
- The same image is a section-size `::before` background layer, covering full width and height; strong white-to-ivory gradient `::after` keeps all text readable.
- Reorganized content into two overlay editorial columns at >=1100px; stacked editorial reading width at 721–1099px. Section has min-height 100svh and expands for copy.
- Desktop hover zoom `scale(1.012 -> 1.07)` over 2.8 seconds on devices with hover and a fine pointer; native scroll unchanged, no wheel listeners, no sticky state, no JS.
- `prefers-reduced-motion:reduce` disables zoom. Print removes overlays. Mobile backgrounds remain untouched.
- All headings, paragraphs and Discover our treatments link retained exactly as in current Home.

## Validation
- Source CSS selectors and stylesheet order inspected; six service paths and booking code not modified.
- Static CSS brace counts validated. GitHub tree and Pages deployment should be verified.
- Responsive browser/real device visual QA at 375,768,1024,1440 and midway widths remains **not verified** by code inspection alone.
- Photo upscaling at desktop widths is a known consideration; no claim that an 840px source is native full-resolution desktop.
