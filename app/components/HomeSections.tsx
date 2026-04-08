import {Link} from 'react-router';
import {ProductCard} from '~/components/ProductCard';
import {brandAssets, inferFlavor, type LocaleCode, prefixPath, siteCopy} from '~/lib/site';

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

const flavorOrder = ['salt-pepper', 'cheese-herbs', 'caramel'] as const;

export function HomeSections({locale, featuredProducts}: HomeSectionsProps) {
  const copy = siteCopy[locale];
  const orderedProducts = [...featuredProducts].sort(
    (left, right) =>
      flavorOrder.indexOf(inferFlavor(`${left.handle} ${left.title}`)) -
      flavorOrder.indexOf(inferFlavor(`${right.handle} ${right.title}`)),
  );

  return (
    <>
      <section className="section-shell">
        <div className="page-width hero">
          <div className="hero__content stack">
            <div className="section-intro">
              <span className="eyebrow">{copy.hero.eyebrow}</span>
              <h1>{copy.hero.title}</h1>
              <p className="lead">{copy.hero.body}</p>
            </div>

            <div className="hero__actions stack">
              <Link
                className="button button--primary"
                to={prefixPath(locale, '/collections/all')}
              >
                {copy.hero.primaryCta}
              </Link>
              <Link className="text-link" to={prefixPath(locale, '/pages/about')}>
                {copy.hero.secondaryCta}
              </Link>
            </div>
          </div>

          <div className="hero__media">
            <video
              className="hero__media-asset"
              src={brandAssets.heroVideo}
              autoPlay
              loop
              muted
              playsInline
              aria-label={
                locale === 'de'
                  ? 'Edelpop Salz und Pfeffer Hero-Video'
                  : 'Edelpop Salt and Pepper hero video'
              }
            />
          </div>
        </div>
      </section>

      <section className="section-shell section-shell--alt">
        <div className="page-width feature-callout">
          <div className="feature-callout__media">
            <img
              className="feature-callout__pack"
              src={brandAssets.packaging['salt-pepper'].front}
              alt={
                locale === 'de'
                  ? 'Edelpop Salz & Pfeffer Packung'
                  : 'Edelpop Salt & Pepper pack'
              }
            />
          </div>

          <div className="feature-callout__content stack">
            <div className="section-intro">
              <span className="eyebrow">{copy.featuredFlavor.eyebrow}</span>
              <h2>{copy.featuredFlavor.title}</h2>
              <p className="feature-callout__tagline">{copy.featuredFlavor.tagline}</p>
              <p className="lead">{copy.featuredFlavor.body}</p>
            </div>

            <Link
              className="button button--secondary"
              to={prefixPath(locale, '/products/salt-pepper')}
            >
              {copy.featuredFlavor.cta}
            </Link>
          </div>
        </div>
      </section>

      <section className="section-shell statement-section">
        <div className="page-width statement-section__layout">
          <div className="statement-section__body">
            <span className="eyebrow">{copy.statement.eyebrow}</span>
            <h2>{copy.statement.title}</h2>

            <div className="statement-section__grid">
              {copy.statement.items.map((item) => (
                <div key={item.label} className="statement-item">
                  <span className="statement-item__label">{item.label}</span>
                  <p>{item.body}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="statement-section__visual">
            <img
              src={brandAssets.lifestyle.saltPepperSquare}
              alt="Edelpop lifestyle detail"
            />
          </div>
        </div>
      </section>

      <section className="section-shell section-shell--alt">
        <div className="page-width range-section">
          <div className="range-section__header">
            <span className="eyebrow">{copy.range.eyebrow}</span>
            <h2>{copy.range.title}</h2>
            <p className="lead">{copy.range.body}</p>
          </div>

          <div className="product-grid">
            {orderedProducts.map((product) => (
              <ProductCard key={product.handle} locale={locale} product={product} />
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell section-shell--dark">
        <div className="page-width story-feature">
          <div className="story-feature__content stack">
            <div className="section-intro">
              <span className="eyebrow">{copy.story.eyebrow}</span>
              <h2>{copy.story.title}</h2>
              <p className="lead">{copy.story.body}</p>
            </div>

            <Link className="text-link" to={prefixPath(locale, '/pages/about')}>
              {copy.story.cta}
            </Link>
          </div>

          <div className="story-feature__media">
            <img
              className="story-feature__image"
              src={brandAssets.lifestyle.saltPepperLandscape}
              alt="Edelpop lifestyle scene"
            />
          </div>
        </div>
      </section>

      <section className="section-shell newsletter-section">
        <div className="page-width">
          <div className="newsletter-section__copy">
            <span className="eyebrow">{copy.newsletter.eyebrow}</span>
            <h2>{copy.newsletter.title}</h2>
            <p className="lead">{copy.newsletter.body}</p>

            <form className="newsletter-form">
              <input
                type="email"
                placeholder={locale === 'de' ? 'E-Mail-Adresse' : 'Email address'}
              />
              <button className="button button--secondary" type="submit">
                {copy.newsletter.cta}
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
