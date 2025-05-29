import Link from 'next/link';
import { format } from 'date-fns';
import { getBlogPosts } from '@lib/mdx';

export default async function BlogPage() {
  const posts = await getBlogPosts();

  return (
    <div className='max-w-2xl mx-auto'>
      <h1 className='text-3xl md:text-4xl font-bold mb-8'>Blog</h1>

      {posts.length === 0 ? (
        <div className='text-center py-12'>
          <p className='text-lg text-gray-600 mb-4'>No blog posts yet.</p>
          <p className='text-gray-500'>Check back soon for new content!</p>
        </div>
      ) : (
        <div className='space-y-10'>
          {posts.map((post) => (
            <article key={post.slug} className='border-b border-gray-200 pb-8 last:border-0'>
              <Link href={`/blog/${post.slug}`}>
                <h2 className='text-2xl font-bold mb-2 hover:underline'>{post.title}</h2>
              </Link>
              <time className='text-sm text-gray-500 block mb-3'>{format(new Date(post.date), 'MMMM d, yyyy')}</time>
              {post.excerpt && <p className='text-gray-700'>{post.excerpt}</p>}
              <Link href={`/blog/${post.slug}`} className='inline-block mt-4 text-gray-800 hover:underline'>
                Read more
              </Link>
            </article>
          ))}
        </div>
      )}
    </div>
  );
}
