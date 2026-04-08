/* eslint-disable eslint-comments/disable-enable-pair */
/* eslint-disable eslint-comments/no-unlimited-disable */
/* eslint-disable */
import type * as StorefrontAPI from '@shopify/hydrogen/storefront-api-types';

export type FeaturedProductsQueryVariables = StorefrontAPI.Exact<{
  country?: StorefrontAPI.InputMaybe<StorefrontAPI.CountryCode>;
  language?: StorefrontAPI.InputMaybe<StorefrontAPI.LanguageCode>;
}>;

export type FeaturedProductsQuery = {
  products: {
    nodes: Array<
      Pick<StorefrontAPI.Product, 'handle' | 'title'> & {
        featuredImage?: StorefrontAPI.Maybe<
          Pick<StorefrontAPI.Image, 'url' | 'altText'>
        >;
        priceRange: {
          minVariantPrice: Pick<
            StorefrontAPI.MoneyV2,
            'amount' | 'currencyCode'
          >;
        };
      }
    >;
  };
};

export type ArticleByHandleQueryVariables = StorefrontAPI.Exact<{
  blogHandle: StorefrontAPI.Scalars['String']['input'];
  articleHandle: StorefrontAPI.Scalars['String']['input'];
  country?: StorefrontAPI.InputMaybe<StorefrontAPI.CountryCode>;
  language?: StorefrontAPI.InputMaybe<StorefrontAPI.LanguageCode>;
}>;

export type ArticleByHandleQuery = {
  blog?: StorefrontAPI.Maybe<{
    articleByHandle?: StorefrontAPI.Maybe<
      Pick<StorefrontAPI.Article, 'title' | 'contentHtml'>
    >;
  }>;
};

export type BlogByHandleQueryVariables = StorefrontAPI.Exact<{
  blogHandle: StorefrontAPI.Scalars['String']['input'];
  country?: StorefrontAPI.InputMaybe<StorefrontAPI.CountryCode>;
  language?: StorefrontAPI.InputMaybe<StorefrontAPI.LanguageCode>;
}>;

export type BlogByHandleQuery = {
  blog?: StorefrontAPI.Maybe<
    Pick<StorefrontAPI.Blog, 'title'> & {
      articles: {
        nodes: Array<
          Pick<StorefrontAPI.Article, 'handle' | 'title' | 'excerpt'>
        >;
      };
    }
  >;
};

export type CollectionByHandleQueryVariables = StorefrontAPI.Exact<{
  handle: StorefrontAPI.Scalars['String']['input'];
  country?: StorefrontAPI.InputMaybe<StorefrontAPI.CountryCode>;
  language?: StorefrontAPI.InputMaybe<StorefrontAPI.LanguageCode>;
}>;

export type CollectionByHandleQuery = {
  collection?: StorefrontAPI.Maybe<
    Pick<StorefrontAPI.Collection, 'title' | 'description'> & {
      products: {
        nodes: Array<
          Pick<StorefrontAPI.Product, 'handle' | 'title'> & {
            featuredImage?: StorefrontAPI.Maybe<
              Pick<StorefrontAPI.Image, 'url' | 'altText'>
            >;
            priceRange: {
              minVariantPrice: Pick<
                StorefrontAPI.MoneyV2,
                'amount' | 'currencyCode'
              >;
            };
          }
        >;
      };
    }
  >;
};

export type PageByHandleQueryVariables = StorefrontAPI.Exact<{
  handle: StorefrontAPI.Scalars['String']['input'];
  country?: StorefrontAPI.InputMaybe<StorefrontAPI.CountryCode>;
  language?: StorefrontAPI.InputMaybe<StorefrontAPI.LanguageCode>;
}>;

export type PageByHandleQuery = {
  page?: StorefrontAPI.Maybe<Pick<StorefrontAPI.Page, 'title' | 'body'>>;
};

export type ProductByHandleQueryVariables = StorefrontAPI.Exact<{
  handle: StorefrontAPI.Scalars['String']['input'];
  country?: StorefrontAPI.InputMaybe<StorefrontAPI.CountryCode>;
  language?: StorefrontAPI.InputMaybe<StorefrontAPI.LanguageCode>;
}>;

export type ProductByHandleQuery = {
  product?: StorefrontAPI.Maybe<
    Pick<StorefrontAPI.Product, 'title' | 'description'> & {
      images: {nodes: Array<Pick<StorefrontAPI.Image, 'url' | 'altText'>>};
      priceRange: {
        minVariantPrice: Pick<StorefrontAPI.MoneyV2, 'amount' | 'currencyCode'>;
      };
    }
  >;
};

interface GeneratedQueryTypes {
  '#graphql\n  query FeaturedProducts($country: CountryCode, $language: LanguageCode)\n    @inContext(country: $country, language: $language) {\n    products(first: 3, sortKey: BEST_SELLING) {\n      nodes {\n        handle\n        title\n        featuredImage {\n          url\n          altText\n        }\n        priceRange {\n          minVariantPrice {\n            amount\n            currencyCode\n          }\n        }\n      }\n    }\n  }\n': {
    return: FeaturedProductsQuery;
    variables: FeaturedProductsQueryVariables;
  };
  '#graphql\n  query ArticleByHandle(\n    $blogHandle: String!\n    $articleHandle: String!\n    $country: CountryCode\n    $language: LanguageCode\n  ) @inContext(country: $country, language: $language) {\n    blog(handle: $blogHandle) {\n      articleByHandle(handle: $articleHandle) {\n        title\n        contentHtml\n      }\n    }\n  }\n': {
    return: ArticleByHandleQuery;
    variables: ArticleByHandleQueryVariables;
  };
  '#graphql\n  query BlogByHandle($blogHandle: String!, $country: CountryCode, $language: LanguageCode)\n    @inContext(country: $country, language: $language) {\n    blog(handle: $blogHandle) {\n      title\n      articles(first: 9) {\n        nodes {\n          handle\n          title\n          excerpt\n        }\n      }\n    }\n  }\n': {
    return: BlogByHandleQuery;
    variables: BlogByHandleQueryVariables;
  };
  '#graphql\n  query CollectionByHandle($handle: String!, $country: CountryCode, $language: LanguageCode)\n    @inContext(country: $country, language: $language) {\n    collection(handle: $handle) {\n      title\n      description\n      products(first: 12) {\n        nodes {\n          handle\n          title\n          featuredImage {\n            url\n            altText\n          }\n          priceRange {\n            minVariantPrice {\n              amount\n              currencyCode\n            }\n          }\n        }\n      }\n    }\n  }\n': {
    return: CollectionByHandleQuery;
    variables: CollectionByHandleQueryVariables;
  };
  '#graphql\n  query PageByHandle($handle: String!, $country: CountryCode, $language: LanguageCode)\n    @inContext(country: $country, language: $language) {\n    page(handle: $handle) {\n      title\n      body\n    }\n  }\n': {
    return: PageByHandleQuery;
    variables: PageByHandleQueryVariables;
  };
  '#graphql\n  query ProductByHandle($handle: String!, $country: CountryCode, $language: LanguageCode)\n    @inContext(country: $country, language: $language) {\n    product(handle: $handle) {\n      title\n      description\n      images(first: 6) {\n        nodes {\n          url\n          altText\n        }\n      }\n      priceRange {\n        minVariantPrice {\n          amount\n          currencyCode\n        }\n      }\n    }\n  }\n': {
    return: ProductByHandleQuery;
    variables: ProductByHandleQueryVariables;
  };
}

interface GeneratedMutationTypes {}

declare module '@shopify/hydrogen' {
  interface StorefrontQueries extends GeneratedQueryTypes {}
  interface StorefrontMutations extends GeneratedMutationTypes {}
}
