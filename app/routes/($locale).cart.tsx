import {useLocation} from 'react-router';
import {getLocaleFromPath} from '~/lib/site';

export default function CartRoute() {
  const locale = getLocaleFromPath(useLocation().pathname);

  return (
    <section className="page-width stack page-stack">
      <div className="section-copy stack">
        <span className="eyebrow">{locale === 'de' ? 'Warenkorb' : 'Cart'}</span>
        <h1>{locale === 'de' ? 'Fast geschafft. Edelpop liegt schon bereit.' : 'Almost there. Your Edelpop selection is waiting.'}</h1>
        <p className="lead">
          {locale === 'de'
            ? 'Die finale Cart- und Checkout-Integration läuft in Hydrogen über Shopify Cart APIs und Checkout URLs.'
            : 'Final cart and checkout behavior should be wired through Shopify Cart APIs and checkout URLs in Hydrogen.'}
        </p>
      </div>
    </section>
  );
}
