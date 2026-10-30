# Thaissage — Philosophy desktop right text contrast V2
30 October 2026

## Defect observed
User screenshot shows right-hand paragraphs over pale illustrated photography at 13 px with desaturated green-grey (#65756A); the small body copy is substantially less legible than the main heading.

## Fix — only desktop/tablet widths ≥721px
- `#our-approach .intro-right > p`: raise text size to clamp(16px,1.12vw,18px), set dark near-black green #202D27, medium 500, line-height 1.76, max-width 530px, intentional paragraph rhythm.
- Link `Discover our treatments`: darker #17251E, bold and 13–15px, stronger underline and clear hover/focus treatment.
- Keep approved text content, title placement, background photography, gradient, hover zoom, scroll, and layout unchanged.
- Existing mobile CSS applies at <=720px and is not edited.
- No script, external service or page route modifications.

## Verification
- CSS selectors in last-loaded Philosophy desktop stylesheet override the old 13px and grey color declarations even though they used !important.
- CSS syntax, unchanged desktop background rules, versioned link, and scope checked in repo.
- Live screenshot at 768/1024/1440 and native mobile viewports remain to be visually confirmed.
