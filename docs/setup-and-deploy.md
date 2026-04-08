# Hydrogen Setup and Deploy Notes

## Secrets

Do not use the tokens previously pasted in chat.

Rotate them first in Shopify, then place only the rotated values in local and hosted secrets.

Recommended environment variables:

- `PUBLIC_STORE_DOMAIN=01n1nx-bc.myshopify.com`
- `PUBLIC_STOREFRONT_API_TOKEN=...`
- `PRIVATE_STOREFRONT_API_TOKEN=...` only if genuinely needed server-side
- `PUBLIC_CHECKOUT_DOMAIN=edelpop.de`
- `SESSION_SECRET=...`

## Why `01n1nx-bc.myshopify.com` matters

Use the Shopify store domain for API access.

Use `edelpop.de` only as the customer-facing domain and checkout/domain mapping target.

## Local preview

1. `cd /Users/misras/DevSpace/edelpop`
2. `npm install`
3. `shopify login --store 01n1nx-bc.myshopify.com`
4. `npm run dev`

## Netlify deployment

This app is configured for Netlify Edge Functions.

1. Push the repository to GitHub.
2. In Netlify, create a new site from the GitHub repository.
3. Use the repository root as the base directory.
4. Let Netlify use the build settings from `netlify.toml`.
5. Add these environment variables in Netlify:
   - `PUBLIC_STORE_DOMAIN`
   - `PUBLIC_STOREFRONT_API_TOKEN`
   - `PRIVATE_STOREFRONT_API_TOKEN` if used server-side
   - `PUBLIC_CHECKOUT_DOMAIN`
   - `SESSION_SECRET`
6. Set `NODE_VERSION=22` in Netlify if it is not already inherited from `netlify.toml`.
7. Deploy and verify the generated site URL before mapping `edelpop.de`.

## Build behavior

- Build command: `npm run build`
- Published output: `dist/client`
- Runtime: Netlify Edge Functions
- Config file: [`/Users/misras/DevSpace/edelpop/netlify.toml`](/Users/misras/DevSpace/edelpop/netlify.toml)

## Repository layout

- Headless storefront app: [`/Users/misras/DevSpace/edelpop`](/Users/misras/DevSpace/edelpop)
- Archived Liquid theme: [`/Users/misras/DevSpace/edelpop/shopify-theme`](/Users/misras/DevSpace/edelpop/shopify-theme)

## Recommended next implementation steps

1. Replace the placeholder hero pack cards with real product media from Shopify
2. Wire the cart route to real Hydrogen cart handlers
3. Add a mobile drawer and theme toggle using React state
4. Port the remaining homepage sections from the Liquid theme one by one
5. Move branded editorial content into Shopify pages/blogs or metafields where needed
