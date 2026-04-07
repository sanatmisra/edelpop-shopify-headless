import {Link} from '@remix-run/react';
import type {LocaleCode} from '~/lib/site';
import {prefixPath} from '~/lib/site';

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
  return (
    <article className="product-card">
      <Link className="product-card__media" to={prefixPath(locale, `/products/${product.handle}`)}>
        {product.featuredImage ? (
          <img src={product.featuredImage.url} alt={product.featuredImage.altText ?? product.title} />
        ) : (
          <div className="placeholder-tile" />
        )}
      </Link>
      <div className="stack product-card__content">
        <div className="product-card__eyebrow">Edelpop</div>
        <h3>{product.title}</h3>
        <p>{product.shortDescriptor}</p>
        <div className="product-card__row">
          <strong>
            {product.priceRange?.minVariantPrice.amount} {product.priceRange?.minVariantPrice.currencyCode}
          </strong>
          <Link className="button button--ghost" to={prefixPath(locale, `/products/${product.handle}`)}>
            {locale === 'de' ? 'Produkt ansehen' : 'View product'}
          </Link>
        </div>
      </div>
    </article>
  );
}
