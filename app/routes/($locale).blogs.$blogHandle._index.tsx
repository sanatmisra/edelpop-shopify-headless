import type {LoaderFunctionArgs} from 'react-router';
import {Link, useLoaderData} from 'react-router';
import {getLocaleFromPath, prefixPath} from '~/lib/site';

const BLOG_QUERY = `#graphql
  query BlogByHandle($blogHandle: String!, $country: CountryCode, $language: LanguageCode)
    @inContext(country: $country, language: $language) {
    blog(handle: $blogHandle) {
      title
      articles(first: 9) {
        nodes {
          handle
          title
          excerpt
        }
      }
    }
  }
`;

export async function loader({context, params, request}: LoaderFunctionArgs) {
  const locale = getLocaleFromPath(new URL(request.url).pathname);
  const language = locale === 'de' ? 'DE' : 'EN';
  const {blog} = await context.storefront.query(BLOG_QUERY, {
    variables: {blogHandle: params.blogHandle, language, country: 'DE'},
    cache: context.storefront.CacheShort(),
  });

  return {locale, blog, blogHandle: params.blogHandle};
}

export default function BlogIndexRoute() {
  const {locale, blog, blogHandle} = useLoaderData<typeof loader>();

  const placeholders = locale === 'de'
    ? [
        ['Was ist Makhana und warum snackt Deutschland gerade darauf?', 'Ein kompakter Einstieg in die Welt von Foxnuts, Textur und Röstung.'],
        ['Geröstet statt frittiert: Warum sich der Crunch anders anfühlt', 'Wie Röstung, Leichtigkeit und Geschmack im Alltag zusammenspielen.'],
        ['Drei Sorten, viele Momente', 'Salt & Pepper, Cheese & Herbs und Caramel im richtigen Moment.'],
      ]
    : [
        ['What is makhana and why is Germany starting to snack on it?', 'A concise introduction to foxnuts, texture and roasting.'],
        ['Roasted instead of fried: why the crunch feels different', 'How roasting, lightness and flavour come together in real routines.'],
        ['Three flavours, many moments', 'Salt & Pepper, Cheese & Herbs and Caramel at the right time.'],
      ];

  return (
    <section className="page-width stack page-stack">
      <div className="section-copy stack">
        <span className="eyebrow">Journal</span>
        <h1>{blog?.title ?? 'Journal'}</h1>
      </div>
      <div className="editorial-grid">
        {blog?.articles?.nodes?.length
          ? blog.articles.nodes.map((article: any) => (
              <article className="editorial-card" key={article.handle}>
                <h3>
                  <Link to={prefixPath(locale, `/blogs/${blogHandle}/${article.handle}`)}>{article.title}</Link>
                </h3>
                <p>{article.excerpt}</p>
              </article>
            ))
          : placeholders.map(([title, excerpt]) => (
              <article className="editorial-card" key={title}>
                <h3>{title}</h3>
                <p>{excerpt}</p>
              </article>
            ))}
      </div>
    </section>
  );
}
