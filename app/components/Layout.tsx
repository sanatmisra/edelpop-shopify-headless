import {Link, Outlet, useLocation} from 'react-router';
import type {PropsWithChildren} from 'react';
import {brandAssets, getLocaleFromPath, prefixPath, siteCopy} from '~/lib/site';

export function Layout({children}: PropsWithChildren) {
  const {pathname} = useLocation();
  const locale = getLocaleFromPath(pathname);
  const copy = siteCopy[locale];

  return (
    <div className="shell" data-theme="light">
      <header className="site-header">
        <div className="page-width site-header__inner">
          <Link className="brand-mark" to={prefixPath(locale, '/')}>
            <img className="brand-mark__logo" src={brandAssets.logo} alt={copy.brand} />
          </Link>

          <nav className="site-nav">
            <Link to={prefixPath(locale, '/collections/all')}>{copy.navigation.shop}</Link>
            <Link to={prefixPath(locale, '/pages/about')}>{copy.navigation.about}</Link>
            <Link to={prefixPath(locale, '/pages/faq')}>{copy.navigation.faq}</Link>
          </nav>

          <div className="site-header__actions">
            <Link className="header-pill" to={prefixPath(locale === 'de' ? 'en' : 'de', pathname)}>
              {locale === 'de' ? 'EN' : 'DE'}
            </Link>
            <Link className="button button--compact" to={prefixPath(locale, '/collections/all')}>
              Shop
            </Link>
          </div>
        </div>
      </header>

      <main>{children ?? <Outlet />}</main>

      <footer className="site-footer">
        <div className="page-width site-footer__inner">
          <div className="stack site-footer__brand">
            <img className="brand-mark__footer" src={brandAssets.logo} alt={copy.brand} />
            <p>{copy.footer.intro}</p>
          </div>

          <div className="footer-links">
            <Link to={prefixPath(locale, '/collections/all')}>{copy.navigation.shop}</Link>
            <Link to={prefixPath(locale, '/pages/about')}>{copy.navigation.about}</Link>
            <Link to={prefixPath(locale, '/pages/faq')}>{copy.navigation.faq}</Link>
            <Link to={prefixPath(locale, '/pages/contact')}>{copy.navigation.contact}</Link>
            <Link to={prefixPath(locale, '/pages/wholesale')}>{copy.navigation.wholesale}</Link>
            <Link to={prefixPath(locale === 'de' ? 'en' : 'de', pathname)}>
              {locale === 'de' ? 'English' : 'Deutsch'}
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
