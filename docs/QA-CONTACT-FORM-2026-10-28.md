# QA — Contact form and client permissions (2026-10-28)

## Scope
Changes on `work/home-v1` only: Contact navigation, editorial Contact section, Atrezzo test form, client permissions, source-of-truth documentation. No changes to Fresha booking URLs.

## VERIFIED in GitHub (static source inspection)
- `web/index.html`, `web/assets/css/styles.css` and `web/assets/js/app.js` read successfully from GitHub after changes.
- Exactly three distinct Fresha location URLs remain present: Frisco, Flower Mound and Southlake.
- All `#hash` anchors resolve to an existing element ID; no duplicate HTML IDs.
- Contact nav anchors appear on desktop, mobile, and footer.
- Form uses POST with FormSubmit test recipient `atrezzostudiosv@gmail.com`; AJAX enhancement uses its documented `/ajax/` endpoint.
- Name, email, message required; location optional; demo consent required; fields labelled.
- Submission status uses `role=status` and `aria-live`; errors do not claim a sent email.
- `noindex,nofollow,noarchive` remains on this HTML preview; `robots.txt` also disallows crawling.
- Contact CSS includes responsive single-column rules at 940px and 720px.
- JavaScript syntax passed `node --check` on a locally reconstructed QA fixture.
- Static QA: 14/14 source assertions for the GitHub version; 16/16 for the locally reconstructed fixture.

## NOT VERIFIED
- Browser interaction for the newly added contact section: the local Chromium test environment denied navigation to both localhost and file URLs (`ERR_BLOCKED_BY_ADMINISTRATOR`). **Do not count responsive viewports as newly passed.**
- AJAX success/error branches in a live browser. Code paths exist, but they have not been executed successfully.
- Live FormSubmit submission and **receipt** in the Atrezzo inbox. Initial FormSubmit confirmation by email may be required.
- Production contact destination, privacy/legal notice, and final generated photos stored and optimized in the repository.
- Complete services and booking lifecycle, beyond presence of URLs.

## Action before marking closed
Perform browser QA at 375, 768, 1024 and 1440 px in an environment with permitted navigation and confirm the first actual test submission is delivered to the Atrezzo inbox (including any activation step).

**Current status:** implementation committed, **EN VALIDACIÓN**. Not ready for publication.
