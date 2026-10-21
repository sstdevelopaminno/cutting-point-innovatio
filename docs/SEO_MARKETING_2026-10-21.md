# SEO & Marketing Update — 2026-10-21

## Scope
- Thailand and Laos organic acquisition for CpiPOS.
- Annual package positioning: Starter, Growth, Business, and CUSTOM.
- Facebook Organic posts published separately for Thai and Lao audiences with distinct UTM campaigns.
- SEO updates prepared on branch `seo-th-laos-annual-20261021`.

## Website changes
- `src/components/CpiposPricingCheckout.tsx`
  - Annual pricing is now the primary presentation.
  - Checkout defaults to yearly when a yearly price is available.
  - 2-year and 3-year totals are visible from the yearly price.
- `src/app/packages/pos/page.tsx`
  - Added server-rendered annual pricing content for Google indexing.
  - Added annual pricing metadata, keywords, FAQ structured data, internal links to trial, articles, and Laos.
- `src/app/laos/pos/page.tsx`
  - Expanded Lao-language landing content.
  - Added 1/2/3-year package prices in THB with an explicit LAK quote note.
  - Added Lao SEO metadata, keywords, FAQ content, CUSTOM positioning, and internal trial/contact links.

## Marketing actions
- Thai Facebook post campaign: `annual_packages_th_20261021`.
- Lao Facebook post campaign: `laos_launch_20261021`.
- Both campaigns use organic Facebook UTM attribution.

## Verification
- Source changes were written through GitHub on a dedicated branch.
- Build/deployment verification is recorded after the Vercel preview/production check.
