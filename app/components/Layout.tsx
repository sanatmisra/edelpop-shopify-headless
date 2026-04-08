import type {PropsWithChildren} from 'react';
import {Link, Outlet, useLocation} from 'react-router';
import {brandAssets, getLocaleFromPath, prefixPath, siteCopy} from '~/lib/site';

export function Layout({children}: PropsWithChildren) {
  const {pathname} = useLocation();
  const locale = getLocaleFromPath(pathname);
  const copy = siteCopy[locale];
  const basePath =
    locale === 'en' ? pathname.replace(/^\/en(?=\/|$)/, '') || '/' : pathname;

  return (
    <div className="shell" data-theme="light">
      <header className="site-header">
        <div className="page-width site-header__inner">
          <Link className="brand-mark" to={prefixPath(locale, '/')}>
            <img className="brand-mark__logo" src={brandAssets.logo} alt={copy.brand} />
          </Link>

          <nav className="site-nav" aria-label="Primary">
            <Link to={prefixPath(locale, '/collections/all')}>{copy.navigation.shop}</Link>
            <Link to={prefixPath(locale, '/pages/about')}>{copy.navigation.about}</Link>
            <Link to={prefixPath(locale, '/pages/faq')}>{copy.navigation.faq}</Link>
          </nav>

          <div className="site-header__actions">
            <div className="language-switch" aria-label="Language switch">
              {locale === 'de' ? (
                <span className="language-switch__current">DE</span>
              ) : (
                <Link to={prefixPath('de', basePath)}>DE</Link>
              )}
              <span>/</span>
              {locale === 'en' ? (
                <span className="language-switch__current">EN</span>
              ) : (
                <Link to={prefixPath('en', basePath)}>EN</Link>
              )}
            </div>

            <Link className="button button--secondary button--compact" to={prefixPath(locale, '/collections/all')}>
              {copy.navigation.shop}
            </Link>
          </div>
        </div>
      </header>

      <main>{children ?? <Outlet />}</main>

      <footer className="site-footer">
        <div className="page-width site-footer__inner">
          <div className="site-footer__wordmark">
            <img src={brandAssets.logo} alt={copy.brand} />
          </div>

          <div className="site-footer__grid">
            <p className="site-footer__intro">{copy.footer.intro}</p>

            <div className="footer-links">
              <Link to={prefixPath(locale, '/collections/all')}>{copy.navigation.shop}</Link>
              <Link to={prefixPath(locale, '/pages/faq')}>{copy.navigation.faq}</Link>
              <Link to={prefixPath(locale, '/pages/contact')}>{copy.navigation.contact}</Link>
              <Link to={prefixPath(locale, '/pages/wholesale')}>{copy.navigation.wholesale}</Link>
              <Link to={prefixPath(locale === 'de' ? 'en' : 'de', basePath)}>
                {locale === 'de' ? 'English' : 'Deutsch'}
              </Link>
            </div>

            <div className="footer-meta">
              <a href="https://instagram.com" target="_blank" rel="noreferrer">
                {copy.footer.meta}
              </a>
              <Link to={prefixPath(locale, '/pages/contact')}>{copy.navigation.contact}</Link>
            </div>
          </div>

          <div className="site-footer__bottom">
            <p>{copy.footer.copyright}</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
