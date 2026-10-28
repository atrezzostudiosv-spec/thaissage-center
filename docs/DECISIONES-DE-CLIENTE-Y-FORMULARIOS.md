# Thaissage Center — Client authorizations and temporary form setup
**Decision date:** 2026-10-28
**Status:** Authorized by client via Atrezzo project instruction; implementation scoped to `work/home-v1`.

## Approved and binding
1. Thaissage Center has granted permission to develop the website and create/use original illustrative cinematic photographs, provided they fit the brand's warm, delicate wellness identity.
2. The design team has creative freedom over photographic composition, architecture, movement and presentation. Do not invent treatments, products, credentials, rates, outcomes, staff or locations.
3. Improve the explanation of existing treatments without changing what the business actually offers or adding medical claims.
4. Keep **existing Fresha booking links for Frisco, Flower Mound, Southlake**; do not send bookings through the website contact form or simulate bookings.
5. During testing, direct website **contact** inquiries to Atrezzo Studios. Known test recipient: `atrezzostudiosv@gmail.com` through FormSubmit. Before public launch replace with the client-approved production recipient/integration and reverify delivery.
6. The client has authorized the scope and existing source information for development. Technical end-to-end testing still must be performed. Where earlier published source copies conflict (e.g., Southlake suite), do not invent a reconciled value; the Home currently omits the ambiguous suite.

## Implemented now
- Home navigation includes Contact and an original editorial contact section.
- Contact form `action=https://formsubmit.co/atrezzostudiosv@gmail.com`; with JS it submits to `https://formsubmit.co/ajax/atrezzostudiosv@gmail.com`.
- Fields: name, email, optional preferred center, message, explicit demo consent; spam honeypot.
- Clear testing-only notice; sensitive data is discouraged; no false confirmation of email delivery.
- Existing Fresha/Square endpoints are unchanged.
- Demo stays `noindex,nofollow,noarchive`.

## Verification gates
- **Code integration:** verify by reading committed files and exercising browser validation, success and error flows with stubbed network response.
- **Real delivery:** NOT VERIFIED. FormSubmit may request activation by the Atrezzo recipient and receipt of a test message in the actual inbox must be checked; do not mark finished until then.
- **Images:** client's general use approval resolves the permission restriction, but externally hosted illustrative placeholders currently present in the Home have **not yet been replaced** by repository-owned original generated photographic assets. Do not claim otherwise.
- **Production:** client email destination, privacy notice, final photos, internal pages, cross-device testing and reservations must be reviewed before go-live.

**Reminder:** this documentation records a business decision, not an assertion of production readiness.
