import fs from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';

type Frontmatter = Record<string, unknown>;

export type BlogPostSummary = {
  slug: string;
  title: string;
  date: string;
  updated?: string;
  excerpt: string;
  locale: string;
  ogImage?: string;
};

export type BlogPost = BlogPostSummary & {
  content: string;
};

export type ProjectSummary = {
  slug: string;
  title: string;
  description: string;
  updated?: string;
  locale: string;
  ogImage?: string;
  meta?: string;
  users?: string;
  rating?: string;
  websiteUrl?: string;
  storeUrl?: string;
};

export type Project = ProjectSummary & {
  content: string;
};

const contentDirectory = path.join(process.cwd(), 'content');
const postsDirectory = path.join(contentDirectory, 'blog');
const projectsDirectory = path.join(contentDirectory, 'projects');
const datePattern = /^\d{4}-\d{2}-\d{2}$/;

function listMdxFiles(directory: string): string[] {
  if (!fs.existsSync(directory)) {
    throw new Error(`Content directory does not exist: ${directory}`);
  }

  return fs
    .readdirSync(directory, { withFileTypes: true })
    .filter((entry) => entry.isFile() && entry.name.endsWith('.mdx'))
    .map((entry) => entry.name);
}

function readMdxFile(directory: string, slug: string) {
  const filePath = path.join(directory, `${slug}.mdx`);
  const fileContents = fs.readFileSync(filePath, 'utf8');
  return matter(fileContents);
}

function requiredString(data: Frontmatter, key: string, source: string): string {
  const value = data[key];
  if (typeof value !== 'string' || value.trim().length === 0) {
    throw new Error(`Missing or invalid "${key}" in ${source}`);
  }

  return value.trim();
}

function optionalString(data: Frontmatter, key: string, source: string): string | undefined {
  const value = data[key];
  if (value === undefined) {
    return undefined;
  }
  if (typeof value !== 'string' || value.trim().length === 0) {
    throw new Error(`Invalid "${key}" in ${source}`);
  }

  return value.trim();
}

function contentDate(data: Frontmatter, key: string, source: string, required = false): string | undefined {
  const value = required ? requiredString(data, key, source) : optionalString(data, key, source);
  if (value === undefined) {
    return undefined;
  }
  if (!datePattern.test(value) || Number.isNaN(Date.parse(`${value}T00:00:00Z`))) {
    throw new Error(`Invalid "${key}" date in ${source}; expected YYYY-MM-DD`);
  }

  return value;
}

function parseBlogSummary(fileName: string): BlogPostSummary {
  const slug = fileName.replace(/\.mdx$/, '');
  const { data } = readMdxFile(postsDirectory, slug);

  return {
    slug,
    title: requiredString(data, 'title', fileName),
    date: contentDate(data, 'date', fileName, true)!,
    updated: contentDate(data, 'updated', fileName),
    excerpt: requiredString(data, 'excerpt', fileName),
    locale: optionalString(data, 'locale', fileName) ?? 'ko',
    ogImage: optionalString(data, 'ogImage', fileName),
  };
}

function parseProjectSummary(fileName: string): ProjectSummary {
  const slug = fileName.replace(/\.mdx$/, '');
  const { data } = readMdxFile(projectsDirectory, slug);

  return {
    slug,
    title: requiredString(data, 'title', fileName),
    description: requiredString(data, 'description', fileName),
    updated: contentDate(data, 'updated', fileName),
    locale: optionalString(data, 'locale', fileName) ?? 'ko',
    ogImage: optionalString(data, 'ogImage', fileName),
    meta: optionalString(data, 'meta', fileName),
    users: optionalString(data, 'users', fileName),
    rating: optionalString(data, 'rating', fileName),
    websiteUrl: optionalString(data, 'websiteUrl', fileName),
    storeUrl: optionalString(data, 'storeUrl', fileName),
  };
}

export function getBlogPosts(): BlogPostSummary[] {
  return listMdxFiles(postsDirectory)
    .map(parseBlogSummary)
    .sort((a, b) => b.date.localeCompare(a.date));
}

export function getBlogPost(slug: string): BlogPost | null {
  const fileName = `${slug}.mdx`;

  try {
    const summary = parseBlogSummary(fileName);
    const { content } = readMdxFile(postsDirectory, slug);
    return { ...summary, content };
  } catch (error) {
    if (error instanceof Error && 'code' in error && error.code === 'ENOENT') {
      return null;
    }
    throw error;
  }
}

export function getProjects(): ProjectSummary[] {
  return listMdxFiles(projectsDirectory).map(parseProjectSummary);
}

export function getProjectBySlug(slug: string): Project | null {
  const fileName = `${slug}.mdx`;

  try {
    const summary = parseProjectSummary(fileName);
    const { content } = readMdxFile(projectsDirectory, slug);
    return { ...summary, content };
  } catch (error) {
    if (error instanceof Error && 'code' in error && error.code === 'ENOENT') {
      return null;
    }
    throw error;
  }
}
