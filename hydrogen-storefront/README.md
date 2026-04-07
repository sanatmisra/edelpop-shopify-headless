# Edelpop Hydrogen Storefront

This directory is the headless migration target for Edelpop.

It does not replace the Liquid theme in the repo root. The Liquid theme remains the source reference for:

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
- future Oxygen deployment

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

## Architecture

- `app/root.tsx`: app shell
- `app/lib/site.ts`: locale-aware Edelpop copy and route helpers
- `app/components/*`: reusable Hydrogen components
- `app/routes/*`: storefront routes
- `docs/migration-map.md`: mapping from Liquid sections to Hydrogen components
- `docs/setup-and-deploy.md`: setup, secrets, and deployment notes

## Notes

- This is a migration scaffold, not a finished production storefront.
- It is structured so the existing Liquid build can be ported component-by-component.
