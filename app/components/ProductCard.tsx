import type {CSSProperties} from 'react';
import {Link} from 'react-router';
import {
  brandAssets,
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
  const copy = siteCopy[locale];
  const price = product.priceRange?.minVariantPrice;
  const formattedPrice = price
    ? new Intl.NumberFormat(locale === 'de' ? 'de-DE' : 'en-DE', {
        style: 'currency',
        currency: price.currencyCode,
      }).format(Number(price.amount))
    : null;
  const descriptor = copy.product.flavorDescriptors[flavor] ?? product.shortDescriptor;

  return (
    <article className="product-card">
      <Link className="product-card__media" to={prefixPath(locale, `/products/${product.handle}`)}>
        <div
          className="product-card__media-glow"
          style={{'--card-accent': asset.accent} as CSSProperties}
        />
        <img src={asset.front} alt={product.featuredImage?.altText ?? product.title} />
      </Link>

      <div className="stack product-card__content">
        <h3>{product.title}</h3>
        <p>{descriptor}</p>
        <div className="product-card__row">
          <strong>{formattedPrice}</strong>
          <Link className="text-link text-link--compact" to={prefixPath(locale, `/products/${product.handle}`)}>
            {locale === 'de' ? 'Produkt ansehen' : 'View product'}
          </Link>
        </div>
      </div>
    </article>
  );
}
