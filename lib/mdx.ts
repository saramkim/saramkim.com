import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { compileMDX } from 'next-mdx-remote/rsc';
import remarkGfm from 'remark-gfm';

export type BlogPost = {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  content: any;
};

const postsDirectory = path.join(process.cwd(), 'content/blog');

export async function getBlogPosts(): Promise<Omit<BlogPost, 'content'>[]> {
  // Create directory if it doesn't exist
  if (!fs.existsSync(postsDirectory)) {
    fs.mkdirSync(postsDirectory, { recursive: true });
  }

  // Get file names under /content/blog
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = await Promise.all(
    fileNames
      .filter((fileName) => fileName.endsWith('.mdx'))
      .map(async (fileName) => {
        // Remove ".mdx" from file name to get slug
        const slug = fileName.replace(/\.mdx$/, '');

        // Read markdown file as string
        const fullPath = path.join(postsDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, 'utf8');

        // Use gray-matter to parse the post metadata section
        const { data } = matter(fileContents);

        // Combine the data with the slug
        return {
          slug,
          title: data.title || 'Untitled',
          date: data.date || new Date().toISOString(),
          excerpt: data.excerpt || '',
        };
      })
  );

  // Sort posts by date
  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

export async function getBlogPost(slug: string): Promise<BlogPost | null> {
  try {
    const fullPath = path.join(postsDirectory, `${slug}.mdx`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    // Use gray-matter to parse the post metadata section
    const { data, content } = matter(fileContents);

    // Compile MDX
    const mdxSource = await compileMDX({
      source: content,
      options: {
        mdxOptions: {
          remarkPlugins: [remarkGfm],
        },
      },
    });

    return {
      slug,
      title: data.title || 'Untitled',
      date: data.date || new Date().toISOString(),
      excerpt: data.excerpt || '',
      content: mdxSource.content,
    };
  } catch (error) {
    console.error(`Error getting blog post for slug ${slug}:`, error);
    return null;
  }
}

const projectsDirectory = path.join(process.cwd(), 'content/projects');

export interface Project {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  content: string;
}

export async function getProjects(): Promise<Omit<Project, 'content'>[]> {
  const fileNames = fs.readdirSync(projectsDirectory);
  const projects = fileNames
    .filter((fileName) => fileName.endsWith('.mdx'))
    .map((fileName) => {
      const slug = fileName.replace(/\.mdx$/, '');
      const fullPath = path.join(projectsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const { data } = matter(fileContents);

      return {
        slug,
        title: data.title,
        date: data.date,
        excerpt: data.excerpt,
      };
    })
    .sort((a, b) => (a.date < b.date ? 1 : -1));

  return projects;
}

export async function getProjectBySlug(slug: string): Promise<Project> {
  const fullPath = path.join(projectsDirectory, `${slug}.mdx`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  return {
    slug,
    title: data.title,
    date: data.date,
    excerpt: data.excerpt,
    content,
  };
}
