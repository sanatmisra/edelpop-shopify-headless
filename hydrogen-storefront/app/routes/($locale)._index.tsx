import type {LoaderFunctionArgs} from '@shopify/remix-oxygen';
import {json} from '@shopify/remix-oxygen';
import {useLoaderData} from '@remix-run/react';
import {HomeSections} from '~/components/HomeSections';
import {getLocaleFromPath, type LocaleCode, siteCopy} from '~/lib/site';

const FEATURED_PRODUCTS_QUERY = `#graphql
  query FeaturedProducts($country: CountryCode, $language: LanguageCode)
    @inContext(country: $country, language: $language) {
    products(first: 4, sortKey: BEST_SELLING) {
      nodes {
        handle
        title
        featuredImage {
          url
          altText
        }
        priceRange {
          minVariantPrice {
            amount
            currencyCode
          }
        }
      }
    }
  }
`;

export async function loader({context, request}: LoaderFunctionArgs) {
  const locale = getLocaleFromPath(new URL(request.url).pathname);
  const language = locale === 'de' ? 'DE' : 'EN';

  const {products} = await context.storefront.query(FEATURED_PRODUCTS_QUERY, {
    variables: {language, country: 'DE'},
    cache: context.storefront.CacheShort(),
  });

  const copy = siteCopy[locale];
  const featuredProducts = (products?.nodes ?? []).map((product: any) => ({
    ...product,
    shortDescriptor: copy.product.descriptor,
  }));

  return json({locale, featuredProducts});
}

export default function Home() {
  const {locale, featuredProducts} = useLoaderData<typeof loader>();

  return <HomeSections locale={locale as LocaleCode} featuredProducts={featuredProducts} />;
}
