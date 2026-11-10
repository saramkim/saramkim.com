import type { MetadataRoute } from 'next';
import { newestDate } from '@lib/format';
import { siteUrl as baseUrl } from '@lib/metadata';
import { getBlogPosts, getProjects } from '@lib/mdx';

export const dynamic = 'force-static';

const asDate = (date: string | undefined) => (date ? new Date(`${date}T00:00:00Z`) : undefined);

// Only url and lastModified: Google ignores changefreq and priority, so they are not maintained here.
export default function sitemap(): MetadataRoute.Sitemap {
  const projects = getProjects();
  const blogPosts = getBlogPosts();
  const latestProjectDate = newestDate(projects.map((project) => project.updated));
  const latestBlogDate = newestDate(blogPosts.map((post) => post.updated ?? post.date));
  const productSiteUpdated = '2026-11-08';
  const latestSiteDate = newestDate([latestProjectDate, latestBlogDate, productSiteUpdated]);

  const staticPages: MetadataRoute.Sitemap = [
    { url: baseUrl, lastModified: asDate(latestSiteDate) },
    { url: `${baseUrl}/play-plus`, lastModified: asDate(productSiteUpdated) },
    { url: `${baseUrl}/play-plus/guide`, lastModified: asDate('2026-11-08') },
    { url: `${baseUrl}/play-plus/updates/2.0`, lastModified: asDate('2026-11-08') },
    { url: `${baseUrl}/play-plus/privacy`, lastModified: asDate('2026-10-16') },
    { url: `${baseUrl}/worktrace`, lastModified: asDate('2026-10-20') },
    { url: `${baseUrl}/worktrace/privacy`, lastModified: asDate('2026-10-20') },
    { url: `${baseUrl}/about`, lastModified: asDate(productSiteUpdated) },
    { url: `${baseUrl}/projects`, lastModified: asDate(latestProjectDate) },
    { url: `${baseUrl}/blog`, lastModified: asDate(latestBlogDate) },
  ];

  const projectPages: MetadataRoute.Sitemap = projects.map((project) => ({
    url: `${baseUrl}/projects/${project.slug}`,
    lastModified: asDate(project.updated),
  }));

  const blogPages: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: asDate(post.updated ?? post.date),
  }));

  return [...staticPages, ...projectPages, ...blogPages];
}
