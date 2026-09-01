# NAVARO Web

Public marketing and community website for NAVARO.

This repository serves the public-facing NAVARO site. It is separate from the authenticated application (`navaro-app`) and the internal beta operations dashboard (`navaro-admin`).

## Product role

`navaro-web` owns:

- the public NAVARO landing experience;
- SK/EN/PL localized marketing pages;
- OfferGen early-access pages;
- beta request intake;
- the public NAVARO Business Circle landing page at `/circle`.

The current product positioning should align with `navaro-app`: NAVARO is a beta commercial workflow platform built around Company Record, Contacts, Relationship Hub, OfferGen, Invoice/offer context, Discovery Review, and reviewable AI assistance. OfferGen is a key module, not the whole product.

## Main routes

- `/` — Slovak default landing page.
- `/en`, `/pl` — localized landing pages.
- `/offergen-early-access` — Slovak OfferGen early-access page.
- `/en/offergen-early-access`, `/pl/offergen-early-access` — localized OfferGen early-access pages.
- `/circle` — NAVARO Business Circle public landing page.
- `/api/beta-request` — beta request form endpoint using Resend.

## Business Circle direction

Business Circle should be treated as a consent-led community and go-to-market surface, not as a default-public member marketplace.

Near-term direction:

- keep `/circle` as the public hub;
- collect member profile opt-ins explicitly;
- publish only approved member copy;
- support short profiles with what a member offers and what they are looking for;
- introduce thematic circles such as AI/automation for SMEs, tenders/offer preparation, accounting operations, short-term rentals, IT services, B2B services, and SK/CZ/CEE local growth;
- start with curated/static content before building app-native profile management.

## Environment

Expected production configuration includes:

- `RESEND_API_KEY` for beta request email delivery;
- an approved sender/from address for Resend;
- destination email configuration for beta requests, if supported by the deployed code;
- links pointing to the production app domain, currently expected to be `https://app.navaro.pro`.

Do not commit secrets or customer/member contact data.

## Development

```bash
npm install
npm run dev
```

Open http://localhost:3000.

Before shipping a change:

```bash
npm run lint
npm run build
```

## Cross-repository alignment

Keep public copy synchronized with:

- `navaro-app` docs, especially `docs/product-current-state-2026-09-01.md`, `docs/handover/current-state.md`, and `docs/product-backlog.md`;
- `navaro-admin` beta invite/admin operations behavior;
- the current production app URL and beta onboarding flow.
