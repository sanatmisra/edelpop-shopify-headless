import type {LoaderFunctionArgs} from '@shopify/remix-oxygen';
import {json} from '@shopify/remix-oxygen';
import {useLoaderData} from '@remix-run/react';
import {getLocaleFromPath, siteCopy} from '~/lib/site';

const PAGE_QUERY = `#graphql
  query PageByHandle($handle: String!, $country: CountryCode, $language: LanguageCode)
    @inContext(country: $country, language: $language) {
    page(handle: $handle) {
      title
      body
    }
  }
`;

export async function loader({context, params, request}: LoaderFunctionArgs) {
  const locale = getLocaleFromPath(new URL(request.url).pathname);
  const language = locale === 'de' ? 'DE' : 'EN';
  const {page} = await context.storefront.query(PAGE_QUERY, {
    variables: {handle: params.handle, language, country: 'DE'},
    cache: context.storefront.CacheShort(),
  });

  return json({locale, page, handle: params.handle});
}

export default function GenericPageRoute() {
  const {locale, page, handle} = useLoaderData<typeof loader>();
  const copy = siteCopy[locale];

  const fallbackMap: Record<string, {title: string; intro: string}> = {
    about: copy.pages.about,
    'why-edelpop': copy.pages.why,
    faq: copy.pages.faq,
    wholesale: copy.pages.wholesale,
  };

  const fallback = fallbackMap[handle ?? 'about'];

  return (
    <section className="page-width stack page-stack">
      <div className="section-copy stack">
        <span className="eyebrow">Edelpop</span>
        <h1>{page?.title ?? fallback?.title}</h1>
        <p className="lead">{fallback?.intro}</p>
      </div>
      {page?.body ? <div dangerouslySetInnerHTML={{__html: page.body}} /> : null}
    </section>
  );
}
