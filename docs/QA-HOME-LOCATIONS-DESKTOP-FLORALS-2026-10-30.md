# Thaissage Center · Locations / desktop backdrop art direction

Date: 30 October 2026  
Scope: Home → Choose Your Center (#locations), **tablet and desktop only (>=721px)**.

## Source audit
- Original desktop section used a pale green base plus 15%-opacity `thaissage-hero-spa-interior-desktop.webp` as a ::before, unlike the bright florals in the approved mobile.
- Mobile CSS V10/V11 uses `thaissage-locations-white-marble-flowers-mobile.webp` (320×569 px, ~4 KB) with a white down-gradient. This is far too low-resolution to stretch across 1440px+.
- The actual phone background declarations, headings, center buttons, content, links and photo remain untouched.

## Implementation
- Added purpose-made 1672×941 image `assets/images/thaissage-locations-white-marble-flowers-desktop.webp` (84,832 bytes). Light white marble, plumeria and restrained foliage on the right, clean open pale area on left. Illustrative image, not claimed to be an actual Thaissage interior.
- Added `assets/css/home-locations-desktop-background-v1.css` at the END of Home's stylesheet list to override desktop background only.
- At >=721px, the section's background is photo cover with a light ivory overlay. Disabled the old green hero pseudo-image. Existing foreground composition retained.
- At <=720px, CSS doesn't apply, so the approved mobile asset and appearance stay intact. Reduced-motion needs no animation; print removes backdrop.

## QA checkpoints
- Confirm new asset present in repository and stylesheet loaded after earlier conflicting desktop rules.
- Confirm the DOM still contains Frisco, Flower Mound and Southlake; appointment and map links unchanged.
- Viewport checks at 768, 1024 and 1440px remain **live visual pending**. Static CSS tests confirm no overlap with phone selectors.
- GitHub Pages workflow success confirms publication, NOT live visual perfection.
