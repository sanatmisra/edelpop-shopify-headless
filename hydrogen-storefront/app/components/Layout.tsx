import {Link, Outlet, useLocation} from '@remix-run/react';
import type {PropsWithChildren} from 'react';
import {getLocaleFromPath, prefixPath, siteCopy} from '~/lib/site';

export function Layout({children}: PropsWithChildren) {
  const {pathname} = useLocation();
  const locale = getLocaleFromPath(pathname);
  const copy = siteCopy[locale];

  return (
    <div className="shell" data-theme="light">
      <header className="site-header">
        <div className="page-width site-header__inner">
          <Link className="brand-mark" to={prefixPath(locale, '/')}>
            {copy.brand}
          </Link>
          <nav className="site-nav">
            <Link to={prefixPath(locale, '/collections/all')}>{copy.navigation.shop}</Link>
            <Link to={prefixPath(locale, '/pages/bundles')}>{copy.navigation.bundles}</Link>
            <Link to={prefixPath(locale, '/pages/about')}>{copy.navigation.about}</Link>
            <Link to={prefixPath(locale, '/blogs/journal')}>{copy.navigation.journal}</Link>
            <Link to={prefixPath(locale, '/pages/wholesale')}>{copy.navigation.wholesale}</Link>
          </nav>
        </div>
      </header>

      <main>{children ?? <Outlet />}</main>

      <footer className="site-footer">
        <div className="page-width site-footer__inner">
          <div className="stack">
            <div className="brand-mark brand-mark--large">{copy.brand}</div>
            <p>{copy.footer.intro}</p>
          </div>
          <div className="footer-links">
            <Link to={prefixPath(locale, '/collections/all')}>{copy.navigation.shop}</Link>
            <Link to={prefixPath(locale, '/pages/faq')}>{copy.navigation.faq}</Link>
            <Link to={prefixPath(locale, '/pages/contact')}>{copy.navigation.contact}</Link>
            <Link to={prefixPath(locale === 'de' ? 'en' : 'de', pathname)}>
              {locale === 'de' ? 'English' : 'Deutsch'}
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
