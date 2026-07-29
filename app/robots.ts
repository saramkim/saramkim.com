import type { MetadataRoute } from 'next';

export const dynamic = 'force-static';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    host: 'https://www.saramkim.com',
    sitemap: 'https://www.saramkim.com/sitemap.xml',
  };
}
