# Thaissage Center — Gift Cards mobile portrait replacement V6
Date: 30 October 2026

## Requirement
Replace Gift Cards scene only on mobile with an exclusive, vertical photo composed for the already approved white heading, descriptive copy and live Explore Gift Cards button. Do not modify layout or desktop photo.

## Asset and design
- New image `assets/images/thaissage-gift-cards-ritual-mobile-exclusive.webp`: 899×1748, 79,308 bytes. AI-generated illustrative image, not a real Thaissage employee, guest, location, or actual gift card.
- Clean photo with warm amber ambiance and spa bodywork. No baked-in lettering, buttons, logos, fake gift cards, or source-brand claims.
- Tested background-cover 375×812, 390×844, 430×932 previews with simulated *existing* mobile scrim; no unnatural stretching or disproportionate crop.
- Source is chosen to communicate the experience being gifted, not to represent a specific product appearance or treatment location.

## Implementation
- ONLY mobile `@media(max-width:720px)` in `assets/css/home-finale-polish-v5.css` updates the `.gift-scroll-journey .gift-photo` background-image and shifts object positioning to 50% center.
- `index.html` version parameter increments to ensure new CSS loads.
- Unchanged: desktop background, actual Gift Cards heading/body/CTA and Square checkout URL, overlay gradient, photo zoom JS, scroll behavior, text styling and all other sections. Demo remains noindex.

## Validation and closure
- WebP dimensions/content verified in source runtime, Git blob uploaded.
- GitHub tree checks and Pages deployment to verify next; browser render and checkout navigation remain not independently tested.
- Atrezzo phase remains in **visual validation** until real mobile browser screenshots prove final result.
