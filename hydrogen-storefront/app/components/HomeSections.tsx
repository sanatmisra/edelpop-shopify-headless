import {Link} from '@remix-run/react';
import type {LocaleCode} from '~/lib/site';
import {prefixPath, siteCopy} from '~/lib/site';
import {ProductCard} from '~/components/ProductCard';

type HomeSectionsProps = {
  locale: LocaleCode;
  featuredProducts: Array<{
    handle: string;
    title: string;
    featuredImage?: {url: string; altText?: string | null} | null;
    priceRange?: {minVariantPrice: {amount: string; currencyCode: string}};
    shortDescriptor?: string;
  }>;
};

export function HomeSections({locale, featuredProducts}: HomeSectionsProps) {
  const copy = siteCopy[locale];

  return (
    <div className="stack page-stack">
      <section className="hero-block page-width">
        <div className="hero-block__content stack">
          <span className="eyebrow">{copy.hero.eyebrow}</span>
          <h1>{copy.hero.title}</h1>
          <p className="lead">{copy.hero.body}</p>
          <div className="hero-proof">{copy.hero.proof}</div>
          <div className="button-row">
            <Link className="button" to={prefixPath(locale, '/collections/all')}>
              {copy.hero.primaryCta}
            </Link>
            <Link className="button button--secondary" to={prefixPath(locale, '/pages/why-edelpop')}>
              {copy.hero.secondaryCta}
            </Link>
          </div>
        </div>
        <div className="hero-block__visual">
          <div className="sticker">{copy.hero.sticker}</div>
          <div className="packshot-grid">
            <div className="packshot-card"><strong>Salt &amp; Pepper</strong><span>Leicht, würzig, klar.</span></div>
            <div className="packshot-card"><strong>Cheese &amp; Herbs</strong><span>Cremig, kräutrig, rund.</span></div>
            <div className="packshot-card"><strong>Caramel</strong><span>Warm, weich, snackbar.</span></div>
          </div>
        </div>
      </section>

      <section className="trust-grid page-width">
        {copy.trust.map((item) => (
          <article className="trust-card" key={item.title}>
            <span>{item.kicker}</span>
            <strong>{item.title}</strong>
          </article>
        ))}
      </section>

      <section className="page-width stack">
        <div className="section-copy stack">
          <span className="eyebrow">{copy.statement.eyebrow}</span>
          <h2>{copy.statement.title}</h2>
          <p className="lead">{copy.statement.body}</p>
        </div>
      </section>

      <section className="page-width stack">
        <div className="section-copy stack">
          <span className="eyebrow">{locale === 'de' ? 'Edelpop Bestseller' : 'Edelpop bestsellers'}</span>
          <h2>{locale === 'de' ? 'Unsere Sorten für den ersten Griff und den schnellen Wiederkauf.' : 'Our flavours for the first reach and the repeat order.'}</h2>
        </div>
        <div className="product-grid">
          {featuredProducts.map((product) => (
            <ProductCard key={product.handle} locale={locale} product={product} />
          ))}
        </div>
      </section>

      <section className="page-width stack">
        <div className="section-copy stack">
          <span className="eyebrow">{copy.newsletter.eyebrow}</span>
          <h2>{copy.newsletter.title}</h2>
          <p className="lead">{copy.newsletter.body}</p>
        </div>
        <form className="newsletter-form">
          <input type="email" placeholder={locale === 'de' ? 'E-Mail-Adresse' : 'Email address'} />
          <button className="button" type="submit">
            {copy.newsletter.cta}
          </button>
        </form>
      </section>
    </div>
  );
}
