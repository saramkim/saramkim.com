import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft } from 'lucide-react';
import { MDXRemote } from 'next-mdx-remote/rsc';
import remarkGfm from 'remark-gfm';
import MDXComponents from '@components/mdx-components';
import { formatContentDate } from '@lib/format';
import { getBlogPost, getBlogPosts } from '@lib/mdx';

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getBlogPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    return {};
  }

  const canonical = `/blog/${post.slug}`;
  const image = post.ogImage ?? '/og.png';

  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: canonical,
      type: 'article',
      locale: post.locale === 'ko' ? 'ko_KR' : 'en_US',
      publishedTime: `${post.date}T00:00:00Z`,
      modifiedTime: `${post.updated ?? post.date}T00:00:00Z`,
      images: [{ url: image, alt: post.title }],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
      images: [image],
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    notFound();
  }

  return (
    <div className='site-container article-shell'>
      <Link href='/blog' className='back-link'>
        <ArrowLeft aria-hidden='true' size={16} />
        모든 글
      </Link>

      <article lang={post.locale}>
        <header className='article-header'>
          <p className='eyebrow'>Writing</p>
          <h1 className='article-title'>{post.title}</h1>
          <p className='mt-5 max-w-2xl text-lg leading-8 text-stone-600'>{post.excerpt}</p>
          <div className='mt-7 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-stone-500'>
            <time dateTime={post.date}>발행 {formatContentDate(post.date, post.locale)}</time>
            {post.updated && post.updated !== post.date && (
              <time dateTime={post.updated}>수정 {formatContentDate(post.updated, post.locale)}</time>
            )}
          </div>
        </header>

        <div className='prose prose-stone prose-lg max-w-none'>
          <MDXRemote
            source={post.content}
            components={MDXComponents}
            options={{ mdxOptions: { remarkPlugins: [remarkGfm] } }}
          />
        </div>
      </article>
    </div>
  );
}
