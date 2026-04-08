import type {LoaderFunctionArgs} from 'react-router';
import {useLoaderData} from 'react-router';
import {ProductCard} from '~/components/ProductCard';
import {getLocaleFromPath, type LocaleCode, siteCopy} from '~/lib/site';

const COLLECTION_QUERY = `#graphql
  query CollectionByHandle($handle: String!, $country: CountryCode, $language: LanguageCode)
    @inContext(country: $country, language: $language) {
    collection(handle: $handle) {
      title
      description
      products(first: 12) {
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
  }
`;

export async function loader({context, params, request}: LoaderFunctionArgs) {
  const locale = getLocaleFromPath(new URL(request.url).pathname);
  const language = locale === 'de' ? 'DE' : 'EN';
  const {collection} = await context.storefront.query(COLLECTION_QUERY, {
    variables: {handle: params.handle, language, country: 'DE'},
    cache: context.storefront.CacheShort(),
  });

  return {locale, collection};
}

export default function CollectionRoute() {
  const {locale, collection} = useLoaderData<typeof loader>();
  const copy = siteCopy[locale as LocaleCode];

  return (
    <section className="page-width stack page-stack">
      <div className="section-copy stack">
        <span className="eyebrow">{locale === 'de' ? 'Edelpop Shop' : 'Edelpop shop'}</span>
        <h1>{collection?.title ?? copy.navigation.shop}</h1>
        <p className="lead">
          {collection?.description || (locale === 'de'
            ? 'Drei Sorten, leichter Crunch und eine klare Auswahl für moderne Snack-Routinen.'
            : 'Three flavours, light crunch and a clear range for modern snack routines.')}
        </p>
      </div>
      <div className="product-grid">
        {collection?.products?.nodes?.map((product: any) => (
          <ProductCard
            key={product.handle}
            locale={locale as LocaleCode}
            product={{...product, shortDescriptor: copy.product.descriptor}}
          />
        ))}
      </div>
    </section>
  );
}
