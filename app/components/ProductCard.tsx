import {Link} from 'react-router';
import {
  brandAssets,
  flavorMeta,
  inferFlavor,
  type LocaleCode,
  prefixPath,
  siteCopy,
} from '~/lib/site';

type Money = {
  amount: string;
  currencyCode: string;
};

type ProductCardProps = {
  locale: LocaleCode;
  product: {
    handle: string;
    title: string;
    featuredImage?: {
      url: string;
      altText?: string | null;
    } | null;
    priceRange?: {
      minVariantPrice: Money;
    };
    shortDescriptor?: string;
  };
};

export function ProductCard({locale, product}: ProductCardProps) {
  const flavor = inferFlavor(`${product.handle} ${product.title}`);
  const asset = brandAssets.packaging[flavor];
  const localizedFlavorName =
    locale === 'de' ? flavorMeta[flavor].deTitle : flavorMeta[flavor].title;
  const descriptor = siteCopy[locale].product.flavorDescriptors[flavor] ?? product.shortDescriptor;
  const price = product.priceRange?.minVariantPrice;
  const formattedPrice = price
    ? new Intl.NumberFormat(locale === 'de' ? 'de-DE' : 'en-DE', {
        style: 'currency',
        currency: price.currencyCode,
      }).format(Number(price.amount))
    : locale === 'de'
      ? '2,49 €'
      : '€2.49';

  return (
    <article className="product-card">
      <Link className="product-card__media" to={prefixPath(locale, `/products/${product.handle}`)}>
        <img src={asset.front} alt={product.featuredImage?.altText ?? localizedFlavorName} />
      </Link>

      <div className="product-card__content">
        <div className="product-card__header">
          <h3>{localizedFlavorName}</h3>
          <span className="product-card__price">{formattedPrice}</span>
        </div>

        <div className="product-card__body">
          <p className="product-card__descriptor">{descriptor}</p>
          <Link className="text-link" to={prefixPath(locale, `/products/${product.handle}`)}>
            {locale === 'de' ? 'Produkt ansehen' : 'View product'}
          </Link>
        </div>
      </div>
    </article>
  );
}
