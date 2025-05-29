import { notFound } from 'next/navigation';
import { format } from 'date-fns';
import { getBlogPost, getBlogPosts } from '@lib/mdx';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export async function generateStaticParams() {
  const posts = await getBlogPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = await getBlogPost(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <div className='max-w-2xl mx-auto'>
      <Link href='/blog' className='inline-flex items-center text-gray-600 hover:text-black mb-8 group'>
        <ArrowLeft size={16} className='mr-2 transition-transform group-hover:-translate-x-1' />
        <span>Back to all posts</span>
      </Link>

      <article>
        <header className='mb-8 pb-8 border-b border-gray-200'>
          <h1 className='text-3xl md:text-4xl font-bold mb-4'>{post.title}</h1>
          <time className='text-gray-500'>{format(new Date(post.date), 'MMMM d, yyyy')}</time>
        </header>

        <div className='prose prose-black max-w-none'>{post.content}</div>
      </article>
    </div>
  );
}
