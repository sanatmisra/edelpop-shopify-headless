import type {LoaderFunctionArgs} from 'react-router';
import {useLoaderData} from 'react-router';
import {getLocaleFromPath} from '~/lib/site';

const ARTICLE_QUERY = `#graphql
  query ArticleByHandle(
    $blogHandle: String!
    $articleHandle: String!
    $country: CountryCode
    $language: LanguageCode
  ) @inContext(country: $country, language: $language) {
    blog(handle: $blogHandle) {
      articleByHandle(handle: $articleHandle) {
        title
        contentHtml
      }
    }
  }
`;

export async function loader({context, params, request}: LoaderFunctionArgs) {
  const locale = getLocaleFromPath(new URL(request.url).pathname);
  const language = locale === 'de' ? 'DE' : 'EN';
  const {blog} = await context.storefront.query(ARTICLE_QUERY, {
    variables: {
      blogHandle: params.blogHandle,
      articleHandle: params.articleHandle,
      language,
      country: 'DE',
    },
    cache: context.storefront.CacheShort(),
  });

  return {article: blog?.articleByHandle};
}

export default function ArticleRoute() {
  const {article} = useLoaderData<typeof loader>();

  return (
    <article className="page-width stack page-stack article-shell">
      <h1>{article?.title}</h1>
      {article?.contentHtml ? (
        <div dangerouslySetInnerHTML={{__html: article.contentHtml}} />
      ) : null}
    </article>
  );
}
