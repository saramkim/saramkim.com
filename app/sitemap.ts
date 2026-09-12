import type { MetadataRoute } from 'next';
import { newestDate } from '@lib/format';
import { getBlogPosts, getProjects } from '@lib/mdx';

export const dynamic = 'force-static';

const baseUrl = 'https://www.saramkim.com';
const asDate = (date: string | undefined) => (date ? new Date(`${date}T00:00:00Z`) : undefined);

export default function sitemap(): MetadataRoute.Sitemap {
  const projects = getProjects();
  const blogPosts = getBlogPosts();
  const latestProjectDate = newestDate(projects.map((project) => project.updated));
  const latestBlogDate = newestDate(blogPosts.map((post) => post.updated ?? post.date));
  const latestSiteDate = newestDate([latestProjectDate, latestBlogDate]);

  const staticPages: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/relay`,
      lastModified: asDate('2026-09-13'),
      changeFrequency: 'yearly',
      priority: 0.5,
    },
    {
      url: `${baseUrl}/relay/privacy`,
      lastModified: asDate('2026-09-13'),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: baseUrl,
      lastModified: asDate(latestSiteDate),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: `${baseUrl}/projects`,
      lastModified: asDate(latestProjectDate),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: asDate(latestBlogDate),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
  ];

  const projectPages: MetadataRoute.Sitemap = projects.map((project) => ({
    url: `${baseUrl}/projects/${project.slug}`,
    lastModified: asDate(project.updated),
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  const blogPages: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: asDate(post.updated ?? post.date),
    changeFrequency: 'yearly',
    priority: 0.6,
  }));

  return [...staticPages, ...projectPages, ...blogPages];
}
