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

1. `cd hydrogen-storefront`
2. `npm install`
3. `shopify login --store 01n1nx-bc.myshopify.com`
4. `npm run dev`

## Deployment

Preferred path:

1. Create the Hydrogen storefront in Shopify Headless channel
2. Connect the GitHub repository
3. Configure environment variables in Hydrogen / Oxygen hosting
4. Map the production domain once the storefront is stable

## Recommended next implementation steps

1. Replace the placeholder hero pack cards with real product media from Shopify
2. Wire the cart route to real Hydrogen cart handlers
3. Add a mobile drawer and theme toggle using React state
4. Port the remaining homepage sections from the Liquid theme one by one
5. Move branded editorial content into Shopify pages/blogs or metafields where needed
