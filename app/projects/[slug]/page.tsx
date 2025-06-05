import { Metadata } from 'next';
import { getProjectBySlug, getProjects } from '@lib/mdx';
import { MDXRemote } from 'next-mdx-remote/rsc';
import MDXComponents from '@components/mdx-components';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const project = await getProjectBySlug((await params).slug);
  return {
    title: project.title,
    description: project.description,
  };
}

export async function generateStaticParams() {
  const projects = await getProjects();
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectPage({ params }: Props) {
  const project = await getProjectBySlug((await params).slug);

  return (
    <div className='max-w-2xl mx-auto'>
      <Link href='/projects' className='inline-flex items-center text-gray-600 hover:text-black mb-8 group'>
        <ArrowLeft size={16} className='mr-2 transition-transform group-hover:-translate-x-1' />
        <span>Back to all projects</span>
      </Link>

      <article>
        <header className='mb-8 pb-8 border-b border-gray-200'>
          <h1 className='text-3xl md:text-4xl font-bold mb-4'>{project.title}</h1>
          <p className='text-gray-600'>{project.description}</p>
        </header>

        <div className='prose prose-black max-w-none'>
          <MDXRemote source={project.content} components={MDXComponents} />
        </div>
      </article>
    </div>
  );
}
