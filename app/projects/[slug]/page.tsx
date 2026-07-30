import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import { MDXRemote } from 'next-mdx-remote/rsc';
import remarkGfm from 'remark-gfm';
import MDXComponents from '@components/mdx-components';
import { formatContentDate } from '@lib/format';
import { getProjectBySlug, getProjects } from '@lib/mdx';

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {};
  }

  const canonical = `/projects/${project.slug}`;
  const image = project.ogImage ?? '/og.png';

  return {
    title: project.title,
    description: project.description,
    alternates: { canonical },
    openGraph: {
      title: project.title,
      description: project.description,
      url: canonical,
      type: 'website',
      locale: project.locale === 'ko' ? 'ko_KR' : 'en_US',
      images: [{ url: image, alt: project.title }],
    },
    twitter: {
      card: 'summary_large_image',
      title: project.title,
      description: project.description,
      images: [image],
    },
  };
}

export function generateStaticParams() {
  return getProjects().map((project) => ({ slug: project.slug }));
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const stats = [
    project.users ? { label: 'Users', value: project.users } : null,
    project.rating ? { label: 'Rating', value: project.rating } : null,
    project.updated
      ? { label: 'Updated', value: formatContentDate(project.updated, project.locale) }
      : null,
  ].filter((stat): stat is { label: string; value: string } => stat !== null);

  const links = [
    project.websiteUrl ? { label: '웹사이트', href: project.websiteUrl } : null,
    project.storeUrl ? { label: 'Chrome 웹 스토어', href: project.storeUrl } : null,
  ].filter((link): link is { label: string; href: string } => link !== null);

  return (
    <div className='site-container article-shell'>
      <Link href='/projects' className='back-link'>
        <ArrowLeft aria-hidden='true' size={16} />
        모든 프로젝트
      </Link>

      <article lang={project.locale}>
        <header className='article-header'>
          <p className='eyebrow'>Case study</p>
          <h1 className='article-title'>{project.title}</h1>
          <p className='mt-5 max-w-2xl text-lg leading-8 text-stone-600'>{project.description}</p>

          {stats.length > 0 && (
            <dl className='mt-9 grid gap-5 border-y border-stone-200 py-6 sm:grid-cols-3'>
              {stats.map((stat) => (
                <div key={stat.label}>
                  <dt className='stat-label'>{stat.label}</dt>
                  <dd className='stat-value text-base'>{stat.value}</dd>
                </div>
              ))}
            </dl>
          )}

          {links.length > 0 && (
            <div className='mt-8 flex flex-wrap gap-3'>
              {links.map((link, index) => (
                <a
                  key={link.href}
                  href={link.href}
                  target='_blank'
                  rel='noreferrer'
                  className={index === 0 ? 'button-primary' : 'button-secondary'}
                >
                  {link.label}
                  <ArrowUpRight aria-hidden='true' size={17} />
                </a>
              ))}
            </div>
          )}
        </header>

        <div className='prose prose-stone prose-lg max-w-none'>
          <MDXRemote
            source={project.content}
            components={MDXComponents}
            options={{ mdxOptions: { remarkPlugins: [remarkGfm] } }}
          />
        </div>
      </article>
    </div>
  );
}
