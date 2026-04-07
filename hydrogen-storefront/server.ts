import {createRequestHandler} from '@shopify/remix-oxygen';

export default {
  async fetch(
    request: Request,
    env: Env,
    executionContext: ExecutionContext,
  ): Promise<Response> {
    const handleRequest = createRequestHandler({
      build: await import('virtual:remix/server-build'),
      mode: env.NODE_ENV,
      getLoadContext() {
        return {
          sessionSecret: env.SESSION_SECRET,
          env,
        };
      },
    });

    return handleRequest(request, executionContext);
  },
};
