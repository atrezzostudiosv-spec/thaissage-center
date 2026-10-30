# Thaissage Center · Our Philosophy desktop — legibility V4
**Date:** 30 October 2026

## Evidence
Screenshot supplied by user at 2048×1024. Headline and especially italic promise blend with bright greenery and daylight, while the flat broad white-to-right gradient washes the image more than it supports the left-side title. Darker body paragraphs on the right are relatively readable already.

## Targeted correction
- Replaced the single broad white wash with two visual reading zones: a soft left-side radial ivory veil behind heading and quote, combined with a light-to-right white gradient behind body copy. Keep the original artwork perceptible, especially below the content.
- Stronger near-black dark green for main title (#192C23), richer forest-green for the italic headline (#355A49) and the italic quote (#2C503F).
- Slightly stronger right-column paragraph tone (#182B22); do **not** change established paragraph font sizes, text, heading hierarchy, link or commercial information.
- Similar local veil applied at 721–1099px where original desktop reading columns stack.
- Only `assets/css/home-philosophy-desktop-v1.css` changed plus its Home stylesheet cache key, with a QA report and project-status update.

## Non-regression
- Existing full-bleed source photo `thaissage-philosophy-contact-line-desktop.webp` is unchanged.
- Smooth, nonblocking hover zoom and reduced-motion exception unchanged.
- Approved mobile Philosophy <=720px, all other Home sections, page routes, navigation and links untouched.
- No cards, blur filter, scroll hijacking, or added animations.

## Validation
- Static selector checks confirm the new background layers and stronger typography, bracket balance, and latest stylesheet cache key.
- GitHub publication to be checked separately. Real browser render at 768/1024/1440 and hover inspection pending; screenshot reasoning is not a measured browser audit.
