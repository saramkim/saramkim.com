import { getBlogPosts, getProjects } from '@lib/mdx';
import { Card } from '@components/card';
import { format } from 'date-fns';

export default async function Home() {
  const projects = await getProjects();
  const posts = await getBlogPosts();
  const latestPost = posts[0];

  return (
    <div className='max-w-2xl mx-auto'>
      <section className='mb-12'>
        <h1 className='text-3xl md:text-4xl font-bold mb-6'>saramkim</h1>
        <div className='flex flex-col gap-4'>
          <p>Frontend Developer.</p>
          <p>Essence. Intention. Clarity.</p>
          <p>Less code. Clear message. Real value.</p>
        </div>
      </section>

      <section className='mb-12'>
        <h2 className='text-2xl font-bold mb-4'>Projects</h2>
        <div className='space-y-6'>
          {projects.map((project) => (
            <Card
              key={project.slug}
              href={`/projects/${project.slug}`}
              title={project.title}
              description={project.description}
            />
          ))}
        </div>
      </section>

      <section className='space-y-4'>
        <div className='flex items-baseline gap-2'>
          <h2 className='text-2xl font-bold'>Latest Post</h2>
          {latestPost && (
            <time className='text-sm text-gray-500'>{format(new Date(latestPost.date), 'MMMM d, yyyy')}</time>
          )}
        </div>
        {latestPost ? (
          <Card href={`/blog/${latestPost.slug}`} title={latestPost.title} description={latestPost.excerpt} />
        ) : (
          <p>No posts yet</p>
        )}
      </section>
    </div>
  );
}
