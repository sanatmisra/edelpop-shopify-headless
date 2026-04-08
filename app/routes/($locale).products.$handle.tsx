import type {LoaderFunctionArgs} from 'react-router';
import {useLoaderData} from 'react-router';
import {getLocaleFromPath, siteCopy} from '~/lib/site';

const PRODUCT_QUERY = `#graphql
  query ProductByHandle($handle: String!, $country: CountryCode, $language: LanguageCode)
    @inContext(country: $country, language: $language) {
    product(handle: $handle) {
      title
      description
      images(first: 6) {
        nodes {
          url
          altText
        }
      }
      priceRange {
        minVariantPrice {
          amount
          currencyCode
        }
      }
    }
  }
`;

export async function loader({context, params, request}: LoaderFunctionArgs) {
  const locale = getLocaleFromPath(new URL(request.url).pathname);
  const language = locale === 'de' ? 'DE' : 'EN';
  const {product} = await context.storefront.query(PRODUCT_QUERY, {
    variables: {handle: params.handle, language, country: 'DE'},
    cache: context.storefront.CacheShort(),
  });
  return {locale, product};
}

export default function ProductRoute() {
  const {locale, product} = useLoaderData<typeof loader>();
  const copy = siteCopy[locale];

  return (
    <section className="page-width stack page-stack">
      <div className="product-page-grid">
        <div className="product-gallery">
          {product?.images?.nodes?.map((image: any) => (
            <div key={image.url} className="product-gallery__item">
              <img src={image.url} alt={image.altText ?? product.title} />
            </div>
          ))}
        </div>
        <div className="product-buybox">
          <span className="eyebrow">Edelpop</span>
          <h1>{product?.title}</h1>
          <p className="lead">{copy.product.descriptor}</p>
          <div className="product-buybox__row">
            <strong>
              {product?.priceRange?.minVariantPrice?.amount} {product?.priceRange?.minVariantPrice?.currencyCode}
            </strong>
            <span>{copy.product.tax}</span>
          </div>
          <div className="pill-row">
            <span className="badge">Geröstet statt frittiert</span>
            <span className="badge">Leicht und knusprig</span>
            <span className="badge">Moderner Premium-Snack</span>
          </div>
          <div className="service-strip">
            {copy.product.service.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
          <button className="button" type="button">
            {locale === 'de' ? 'In den Warenkorb' : 'Add to cart'}
          </button>
          <details open>
            <summary>{locale === 'de' ? 'Geschmacksprofil' : 'Flavour notes'}</summary>
            <p>{copy.product.notes}</p>
          </details>
          <details>
            <summary>{locale === 'de' ? 'Textur' : 'Texture'}</summary>
            <p>{copy.product.texture}</p>
          </details>
          <details>
            <summary>{locale === 'de' ? 'Produktdetails' : 'Product details'}</summary>
            <p>{product?.description}</p>
          </details>
        </div>
      </div>
    </section>
  );
}
