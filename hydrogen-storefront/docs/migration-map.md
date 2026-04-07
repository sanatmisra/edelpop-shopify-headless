# Liquid to Hydrogen Migration Map

## Purpose

This document maps the existing Edelpop Liquid theme to the new Hydrogen storefront so the migration stays systematic.

## Shell

- `layout/theme.liquid` -> `app/root.tsx`
- `sections/header.liquid` -> `app/components/Layout.tsx`
- `sections/footer.liquid` -> `app/components/Layout.tsx`
- `assets/base.css` -> `app/styles/app.css`
- `assets/theme.js` -> React state/hooks and Hydrogen route interactions

## Homepage

- `sections/hero-edelpop.liquid` -> `app/components/HomeSections.tsx` hero block
- `sections/trust-strip.liquid` -> `app/components/HomeSections.tsx` trust grid
- `sections/category-cards.liquid` -> next component slice in `HomeSections.tsx`
- `sections/brand-statement.liquid` -> next component slice in `HomeSections.tsx`
- `sections/benefits-icons.liquid` -> next component slice in `HomeSections.tsx`
- `sections/featured-flavor.liquid` -> next component slice in `HomeSections.tsx`
- `sections/bestsellers-grid.liquid` -> `ProductCard.tsx` + homepage product grid
- `sections/bundle-spotlight.liquid` -> future `BundleSpotlight.tsx`
- `sections/testimonials-slider.liquid` -> future `TestimonialsSlider.tsx`
- `sections/retailer-strip.liquid` -> future `RetailProof.tsx`
- `sections/lifestyle-gallery.liquid` -> future `LifestyleGallery.tsx`
- `sections/newsletter-cta.liquid` -> newsletter block in `HomeSections.tsx`

## Commerce

- `snippets/product-card.liquid` -> `app/components/ProductCard.tsx`
- `sections/main-collection-product-grid.liquid` -> `app/routes/($locale).collections.$handle.tsx`
- `sections/main-product.liquid` -> `app/routes/($locale).products.$handle.tsx`
- `sections/cart-drawer.liquid` -> future cart drawer component tied to Hydrogen cart state
- `sections/main-cart.liquid` -> `app/routes/($locale).cart.tsx`
- `sections/main-search.liquid` -> `app/routes/($locale).search.tsx`

## Editorial and pages

- `sections/page-about-content.liquid` -> `app/routes/($locale).pages.$handle.tsx` with CMS content and branded fallbacks
- `sections/page-why-edelpop-content.liquid` -> same route, different handle logic
- `sections/page-faq-content.liquid` -> same route plus FAQ component
- `sections/page-wholesale-content.liquid` -> same route plus wholesale component
- `sections/main-blog.liquid` -> `app/routes/($locale).blogs.$blogHandle._index.tsx`
- `sections/main-article.liquid` -> `app/routes/($locale).blogs.$blogHandle.$articleHandle.tsx`

## Locales and copy

- `locales/de.default.json` -> `app/lib/site.ts` German copy object
- `locales/en.default.json` -> `app/lib/site.ts` English copy object

## What still needs to be ported

- full mobile drawer navigation
- real cart mutation flows
- variant selection and optimistic cart UX
- customer account integration
- search result fetching
- dynamic CMS/page sectioning from Shopify data
- dark mode toggle state and persistence
