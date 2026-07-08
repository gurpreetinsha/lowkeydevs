import type { APIRoute } from 'astro';

export const prerender = false;

const clearCookiesAndRedirect = ({ cookies, redirect }: any) => {
  cookies.delete('sb-access-token', { path: '/' });
  cookies.delete('sb-refresh-token', { path: '/' });
  return redirect('/');
};

export const GET: APIRoute = async (context) => {
  return clearCookiesAndRedirect(context);
};

export const POST: APIRoute = async (context) => {
  return clearCookiesAndRedirect(context);
};
