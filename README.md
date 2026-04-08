# Edelpop Hydrogen Storefront

This repository root is the headless storefront for Edelpop and is configured for Netlify deployment.

The original Liquid theme now lives in [`/Users/misras/DevSpace/edelpop/shopify-theme`](/Users/misras/DevSpace/edelpop/shopify-theme). It remains the source reference for:

- section hierarchy
- design tokens
- German and English copy structure
- product card behavior
- cart and PDP merchandising patterns

## What this app is for

- Shopify Headless sales channel
- Hydrogen storefront architecture
- Storefront API integration
- German-first storefront routing and content direction
- Netlify Edge deployment

## Before you start

1. Rotate the public and private tokens that were shared in chat.
2. Copy `.env.example` to `.env`.
3. Fill in the rotated values.
4. Keep the private token server-side only.

## Local development

1. Install dependencies:
   `npm install`
2. Log in to Shopify CLI:
   `shopify login --store 01n1nx-bc.myshopify.com`
3. Start Hydrogen:
   `npm run dev`

## Netlify deployment

This app is configured for Netlify Edge Functions.

1. Push the repo to GitHub.
2. In Netlify, create a new site from the repository.
3. Use the repository root as the base directory.
4. Netlify should pick up [`/Users/misras/DevSpace/edelpop/netlify.toml`](/Users/misras/DevSpace/edelpop/netlify.toml).
5. Add the required environment variables in Netlify:
   - `PUBLIC_STORE_DOMAIN`
   - `PUBLIC_STOREFRONT_API_TOKEN`
   - `PRIVATE_STOREFRONT_API_TOKEN` if used server-side
   - `PUBLIC_CHECKOUT_DOMAIN`
   - `SESSION_SECRET`
6. Trigger a deploy.

## Architecture

- `app/root.tsx`: app shell
- `app/lib/site.ts`: locale-aware Edelpop copy and route helpers
- `app/components/*`: reusable Hydrogen components
- `app/routes/*`: storefront routes
- `docs/migration-map.md`: mapping from Liquid sections to Hydrogen components
- `docs/setup-and-deploy.md`: setup, secrets, and Netlify deployment notes
- `shopify-theme/*`: archived Liquid theme source files

## Notes

- This is a migration scaffold, not a finished production storefront.
- It is structured so the existing Liquid build can be ported component-by-component.
