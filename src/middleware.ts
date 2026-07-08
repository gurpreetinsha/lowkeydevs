import { defineMiddleware } from "astro:middleware";

export const onRequest = defineMiddleware(async (context, next) => {
  const response = await next();
  const url = new URL(context.request.url);
  
  if (url.hostname.endsWith('.pages.dev')) {
    response.headers.set('X-Robots-Tag', 'noindex, nofollow');
  }
  
  return response;
});
