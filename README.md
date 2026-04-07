# Edelpop Shopify Theme

Production-minded Shopify Online Store 2.0 starter theme for Edelpop, built mobile-first with German as the default language and English as the secondary locale.

## What is included

- OS 2.0 architecture with `layout`, `sections`, `snippets`, `templates`, `assets`, `config`, and `locales`
- Long-scroll, configurable homepage
- Mobile-first product, collection, cart, search, and editorial templates
- Tokenized light mode and dark mode
- German-first translations with English parity
- Merchant-editable section schemas for key homepage and content blocks

## How to preview in Shopify

1. Create a new Shopify theme in a development store.
2. Upload the full folder structure from this repository.
3. In the Shopify theme editor, assign:
   - `page.about` to the About page
   - `page.why-edelpop` to the Why Edelpop page
   - `page.faq` to the FAQ page
   - `page.contact` to the Contact page
   - `page.wholesale` to the Wholesale page
   - `page.stockists` to the Stockists page
   - `page.bundles` to the Bundles page
4. Create or connect products, collections, blog posts, and navigation as needed.

## Where to replace brand assets

- Logo:
  - Theme settings → `Brand assets` → `Logo`
  - Optional inverse logo for dark mode: `logo_inverse`
- Fonts:
  - Theme settings → `Brand assets`
  - Update `font_display`, `font_heading`, `font_body`
- Colors:
  - Theme settings → `Light mode colors`
  - Theme settings → `Dark mode colors`
- Hero packshots and homepage imagery:
  - Shopify theme editor → each homepage section block/image setting
- Product packshots:
  - Replace through Shopify product media
- Lifestyle imagery:
  - Homepage `brand-statement`, `featured-flavor`, `lifestyle-gallery`
  - Page hero sections in the customizer

## Where to replace copy

- Theme editor:
  - Homepage section headings, CTAs, badges, testimonial text, retailer placeholders
- Locale files:
  - [locales/de.default.json](/Users/misras/DevSpace/edelpop/locales/de.default.json)
  - [locales/en.default.json](/Users/misras/DevSpace/edelpop/locales/en.default.json)
- Editorial page content:
  - Section settings inside each page template

## Homepage editing map

- Hero: [sections/hero-edelpop.liquid](/Users/misras/DevSpace/edelpop/sections/hero-edelpop.liquid)
- Trust strip: [sections/trust-strip.liquid](/Users/misras/DevSpace/edelpop/sections/trust-strip.liquid)
- Category cards: [sections/category-cards.liquid](/Users/misras/DevSpace/edelpop/sections/category-cards.liquid)
- Brand statement: [sections/brand-statement.liquid](/Users/misras/DevSpace/edelpop/sections/brand-statement.liquid)
- Benefits: [sections/benefits-icons.liquid](/Users/misras/DevSpace/edelpop/sections/benefits-icons.liquid)
- Featured flavor: [sections/featured-flavor.liquid](/Users/misras/DevSpace/edelpop/sections/featured-flavor.liquid)
- Bestsellers: [sections/bestsellers-grid.liquid](/Users/misras/DevSpace/edelpop/sections/bestsellers-grid.liquid)
- Bundle spotlight: [sections/bundle-spotlight.liquid](/Users/misras/DevSpace/edelpop/sections/bundle-spotlight.liquid)
- Testimonials: [sections/testimonials-slider.liquid](/Users/misras/DevSpace/edelpop/sections/testimonials-slider.liquid)
- Retail proof: [sections/retailer-strip.liquid](/Users/misras/DevSpace/edelpop/sections/retailer-strip.liquid)
- Lifestyle gallery: [sections/lifestyle-gallery.liquid](/Users/misras/DevSpace/edelpop/sections/lifestyle-gallery.liquid)
- Newsletter CTA: [sections/newsletter-cta.liquid](/Users/misras/DevSpace/edelpop/sections/newsletter-cta.liquid)

## Product and collection editing

- Product card markup: [snippets/product-card.liquid](/Users/misras/DevSpace/edelpop/snippets/product-card.liquid)
- Product template: [sections/main-product.liquid](/Users/misras/DevSpace/edelpop/sections/main-product.liquid)
- Collection template: [sections/main-collection-product-grid.liquid](/Users/misras/DevSpace/edelpop/sections/main-collection-product-grid.liquid)

## How to add more flavours or products

1. Add the product in Shopify admin.
2. Upload product media and complete product description/metafields.
3. Add the product to the relevant collection.
4. If needed, add new category cards, bundle references, or homepage hero packshots in the customizer.

## Dark mode

- Toggle is in the header and mobile drawer.
- Preference is stored in `localStorage` under `edelpop-theme`.
- Theme tokens are defined in [layout/theme.liquid](/Users/misras/DevSpace/edelpop/layout/theme.liquid) and consumed in [assets/base.css](/Users/misras/DevSpace/edelpop/assets/base.css).

## Language switcher

- Implemented with Shopify localization forms in:
  - [sections/header.liquid](/Users/misras/DevSpace/edelpop/sections/header.liquid)
  - [sections/footer.liquid](/Users/misras/DevSpace/edelpop/sections/footer.liquid)
- Default copy is German.
- English lives in [locales/en.default.json](/Users/misras/DevSpace/edelpop/locales/en.default.json).

## Notes

- This version intentionally uses configurable tokens instead of hardcoding a final Edelpop identity, so your brand assets can be dropped in without refactoring the theme.
- Replace placeholder imagery and sample page copy before launch.
