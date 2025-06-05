import { MetadataRoute } from 'next';
import { getBlogPosts, getProjects } from '@lib/mdx';

export const dynamic = 'force-static';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://saramkim.com';

  const staticPages = ['', '/projects', '/blog'].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    priority: route === '' ? 1 : 0.8,
  }));

  const projects = await getProjects();
  const projectPages = projects.map((project) => ({
    url: `${baseUrl}/projects/${project.slug}`,
    lastModified: new Date(),
    priority: 0.7,
  }));

  const blogPosts = await getBlogPosts();
  const blogPages = blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    priority: 0.6,
  }));

  return [...staticPages, ...projectPages, ...blogPages];
}
