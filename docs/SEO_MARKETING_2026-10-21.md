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
- Source changes were written through GitHub on branch `seo-th-laos-annual-20261021`, reviewed through PR #21, and squash-merged to `main`.
- The first production deployment exposed a TypeScript union error for the optional `popular` pricing flag; no failed build replaced the working production deployment.
- Added explicit `popular: false` values for Starter and Business on both Thailand and Laos annual pricing arrays.
- Production deployment `dpl_26svZgzW62e3KPGpu3v4YeJ6junM` completed with state `READY`.
- Verified `https://cuttingpointinnovation.vercel.app/packages/pos` returns HTTP 200 with annual-price metadata and server-rendered Starter 3,780, Growth 5,940, Business 16,200, 2-year/3-year prices, CUSTOM, FAQ schema, and Trial/internal links.
- Verified `https://cuttingpointinnovation.vercel.app/laos/pos` returns HTTP 200 with Lao content, Starter/Growth/Business annual prices, CUSTOM positioning, LAK quotation notice, and trial/contact CTAs.
- Verified `https://cuttingpointinnovation.vercel.app/sitemap.xml` returns HTTP 200 and contains `/packages/pos`, `/laos/pos`, and `/trial/pos`.
- Search Console connector currently returns no cached Search Analytics rows for the checked period; no SEO traffic/results were inferred or fabricated.
