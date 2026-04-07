import type {LinksFunction, LoaderFunctionArgs} from '@shopify/remix-oxygen';
import {json} from '@shopify/remix-oxygen';
import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
} from '@remix-run/react';
import {Layout} from '~/components/Layout';
import appStyles from '~/styles/app.css?url';
import {getLocaleFromPath} from '~/lib/site';

export const links: LinksFunction = () => [{rel: 'stylesheet', href: appStyles}];

export async function loader({request}: LoaderFunctionArgs) {
  const url = new URL(request.url);
  return json({
    locale: getLocaleFromPath(url.pathname),
  });
}

export default function App() {
  useLoaderData<typeof loader>();

  return (
    <html lang="de">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <Layout>
          <Outlet />
        </Layout>
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}
