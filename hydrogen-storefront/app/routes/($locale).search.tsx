import {useLocation} from '@remix-run/react';
import {getLocaleFromPath} from '~/lib/site';

export default function SearchRoute() {
  const locale = getLocaleFromPath(useLocation().pathname);

  return (
    <section className="page-width stack page-stack">
      <div className="section-copy stack">
        <span className="eyebrow">{locale === 'de' ? 'Suche' : 'Search'}</span>
        <h1>{locale === 'de' ? 'Finde Sorten, Seiten und Stories.' : 'Find flavours, pages and stories.'}</h1>
      </div>
      <form className="newsletter-form">
        <input type="search" placeholder={locale === 'de' ? 'Suche nach Edelpop' : 'Search Edelpop'} />
        <button className="button" type="submit">
          {locale === 'de' ? 'Suchen' : 'Search'}
        </button>
      </form>
    </section>
  );
}
