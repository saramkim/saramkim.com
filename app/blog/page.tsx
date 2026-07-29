import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { formatContentDate } from '@lib/format';
import { getBlogPosts } from '@lib/mdx';

export const metadata: Metadata = {
  title: '글',
  description: '개발, AI, 언어와 생각하는 일에 관해 김사람이 쓴 글.',
  alternates: { canonical: '/blog' },
  openGraph: {
    title: '글 | saramkim',
    description: '개발, AI, 언어와 생각하는 일에 관해 김사람이 쓴 글.',
    url: '/blog',
  },
};

export default function BlogPage() {
  const posts = getBlogPosts();

  return (
    <div className='site-container page-shell'>
      <header className='page-intro'>
        <p className='eyebrow'>Writing</p>
        <h1 className='page-title'>생각을 더 선명하게 만드는 글</h1>
        <p className='page-description'>
          개발과 AI, 언어 그리고 스스로 생각하는 일에 관해 씁니다. 이미 충분히 있는 정보보다 직접 관찰하고 고민한 것을 남깁니다.
        </p>
      </header>

      <div className='divide-y divide-stone-200 border-y border-stone-200'>
        {posts.map((post) => (
          <article key={post.slug}>
            <Link href={`/blog/${post.slug}`} className='article-row group'>
              <div>
                <time className='text-sm tabular-nums text-stone-500' dateTime={post.date}>
                  {formatContentDate(post.date, post.locale)}
                </time>
                {post.updated && post.updated !== post.date && (
                  <span className='ml-3 text-xs text-stone-400'>수정 {formatContentDate(post.updated, post.locale)}</span>
                )}
              </div>
              <div>
                <h2 className='text-2xl font-semibold tracking-tight group-hover:underline group-hover:decoration-1 group-hover:underline-offset-4'>
                  {post.title}
                </h2>
                <p className='mt-2 max-w-2xl leading-7 text-stone-600'>{post.excerpt}</p>
              </div>
              <ArrowUpRight className='hidden text-stone-400 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 md:block' aria-hidden='true' size={20} />
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
}
