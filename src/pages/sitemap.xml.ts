import type { APIRoute } from 'astro';
import { registry, categories } from '../tools/registry';

export const prerender = true;

const BASE_URL = 'https://lowkeydevs.com';

export const GET: APIRoute = () => {
  const lastmod = new Date().toISOString().split('T')[0];

  // Define static pages
  const pages = [
    { url: `${BASE_URL}/`, priority: '1.0', changefreq: 'daily' },
    { url: `${BASE_URL}/about`, priority: '0.8', changefreq: 'monthly' },
    { url: `${BASE_URL}/privacy`, priority: '0.5', changefreq: 'monthly' },
  ];

  // Define dynamic tool pages
  const toolsPages = registry.map(tool => ({
    url: `${BASE_URL}/tools/${tool.slug}`,
    priority: '0.9',
    changefreq: 'weekly',
  }));

  // Define dynamic category pages (only categories that actually contain tools)
  const activeCategories = categories.filter(cat =>
    registry.some(tool => tool.category === cat.slug)
  );
  const categoriesPages = activeCategories.map(cat => ({
    url: `${BASE_URL}/tools/category/${cat.slug}`,
    priority: '0.7',
    changefreq: 'weekly',
  }));

  const allUrls = [...pages, ...toolsPages, ...categoriesPages];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allUrls
  .map(
    page => `  <url>
    <loc>${page.url}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`
  )
  .join('\n')}
</urlset>`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
};
