import {Link} from 'react-router';
import {ProductCard} from '~/components/ProductCard';
import {
  brandAssets,
  type LocaleCode,
  prefixPath,
  siteCopy,
} from '~/lib/site';

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
      <section className="hero page-width">
        <div className="hero__content stack">
          <div className="stack hero__intro">
            <span className="eyebrow">{copy.hero.eyebrow}</span>
            <h1>{copy.hero.title}</h1>
            <p className="lead">{copy.hero.body}</p>
          </div>
          <div className="hero-proof">{copy.hero.proof}</div>
          <div className="hero__actions stack">
            <Link className="button" to={prefixPath(locale, '/collections/all')}>
              {copy.hero.primaryCta}
            </Link>
            <Link className="text-link" to={prefixPath(locale, '/pages/about')}>
              {copy.hero.secondaryCta}
            </Link>
          </div>
        </div>

        <div className="hero__visual">
          <div className="hero-media-frame">
            <img
              className="hero-media"
              src={brandAssets.lifestyle.saltPepperLandscape}
              alt="Edelpop Salt & Pepper lifestyle hero"
            />
            <img
              className="hero-pack"
              src={brandAssets.packaging['salt-pepper'].front}
              alt="Edelpop Salt & Pepper pack"
            />
          </div>
        </div>
      </section>

      <section className="page-width product-edit">
        <div className="section-heading stack">
          <span className="eyebrow">{locale === 'de' ? 'Die Range' : 'The edit'}</span>
          <h2>
            {locale === 'de'
              ? 'Drei Sorten, klar kuratiert.'
              : 'Three flavours, cleanly curated.'}
          </h2>
          <p className="lead">
            {locale === 'de'
              ? 'Salt & Pepper, Cheese & Herbs und Caramel bilden die Kernrange. Jede Sorte bleibt leicht, geröstet und visuell ruhig.'
              : 'Salt & Pepper, Cheese & Herbs and Caramel form the core range. Each one stays light, roasted and visually restrained.'}
          </p>
        </div>
        <div className="product-grid">
          {featuredProducts.map((product) => (
            <ProductCard key={product.handle} locale={locale} product={product} />
          ))}
        </div>
      </section>

      <section className="page-width story-section">
        <div className="story-section__media">
          <img
            src={brandAssets.lifestyle.saltPepperSquare}
            alt="Edelpop Salt & Pepper lifestyle still"
          />
        </div>
        <div className="story-section__content stack">
          <span className="eyebrow">{copy.story.eyebrow}</span>
          <h2>{copy.story.title}</h2>
          <p className="lead">{copy.story.body}</p>
          <Link className="text-link" to={prefixPath(locale, '/pages/about')}>
            {copy.story.cta}
          </Link>
        </div>
      </section>

      <section className="page-width newsletter-section">
        <div className="newsletter-section__copy stack">
          <span className="eyebrow">{copy.newsletter.eyebrow}</span>
          <h2>{copy.newsletter.title}</h2>
          <p className="lead">{copy.newsletter.body}</p>
          <form className="newsletter-form">
            <input
              type="email"
              placeholder={locale === 'de' ? 'E-Mail-Adresse' : 'Email address'}
            />
            <button className="button" type="submit">
              {copy.newsletter.cta}
            </button>
          </form>
        </div>
        <div className="newsletter-section__visual" aria-hidden="true">
          <img
            className="newsletter-pack newsletter-pack--front"
            src={brandAssets.packaging['salt-pepper'].front}
            alt=""
          />
        </div>
      </section>
    </div>
  );
}
