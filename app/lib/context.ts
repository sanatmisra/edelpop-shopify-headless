import {createHydrogenContext} from '@shopify/hydrogen';
import {AppSession} from '~/lib/session';

export async function createHydrogenRouterContext(
  request: Request,
  env: Env,
  executionContext: ExecutionContext,
) {
  if (!env?.SESSION_SECRET) {
    throw new Error('SESSION_SECRET environment variable is not set');
  }

  const waitUntil = executionContext.waitUntil.bind(executionContext);
  const [cache, session] = await Promise.all([
    caches.open('hydrogen'),
    AppSession.init(request, [env.SESSION_SECRET]),
  ]);

  const url = new URL(request.url);
  const isEnglish = url.pathname.startsWith('/en');

  return createHydrogenContext({
    env,
    request,
    cache,
    waitUntil,
    session,
    i18n: {
      language: isEnglish ? 'EN' : 'DE',
      country: 'DE',
    },
  });
}
