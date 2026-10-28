# Thaissage Center — Header & Hero visual refinement
**Date:** 2026-10-28
**Scope:** Header and Home hero only; requested and approved by the client. Do not reopen the rest of the Home.

## Changes
- Header overlays the photograph with floating, translucent smoked-glass nav, warm light brand, and a discreet darker fixed background after scrolling.
- Header and hero booking CTA use rounded capsules with an accessible arrow circle that travels **left → right** on hover, focus and active/touch.
- Primary copy (H1, paragraph, navigation labels) remains **exactly unchanged**.
- Hero photo, service content, layouts below the hero, booked locations and Squarespace/Square gift card link unchanged.
- Warmer/lighter hero photographic overlay; no dominant green palette.
- Social proof, Frisco only: **4.8/5** sourced from Birdeye Frisco Thaissage Center review aggregator (rating shown 4.8 among 402 combined reviews, reported including Google reviews), **not** represented as a directly verified live Google rating. Google Maps search link opens the corresponding business query. No false customer portraits or fabricated testimonial counts.
  - Source reviewed 2026-10-28: https://reviews.birdeye.com/thaissage-center-thai-massage-157261421711900
  - Rating may change; recheck live Google Business profile before launch. The page says 'Frisco customer reviews', not '5/5 on Google'.
- Compact translucent eGift panel at lower-right of hero with an illustrative in-repository WebP photo and direct link to the existing Square gift-card checkout.
- Touch-friendly menu, narrow-screen layout and reduced-motion states are accounted for.

## Static verification (GitHub code inspected after changes)
17/17 checks passed for source-level invariants: original hero text, eight retained sections, three identical Fresha URLs, Square destination, selector code, Google link, two animated buttons, valid hash anchors, no duplicate IDs, CSS brace balance, reduced motion, mobile header CTA hiding, and noindex.

## Not yet verified
Rendered screenshots and functional browser QA at 375/768/1024/1440 px *of this specific new design*. Test arrow movement on hover/touch, gift card interaction, contrast over photo and cross-device menu. Do not declare complete visual QA on code checks alone.

## Deployment
The GitHub Pages preview uses the **root of main**. Work source lives in `work/home-v1/web/`. Mirror just `web/index.html` and `web/assets/css/styles.css` to the root `main` without modifying unrelated sections.

**Status: EN VALIDACIÓN VISUAL**, not final production.
