import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { getProjects } from '@lib/mdx';
import { ProjectCard } from '@components/project-card';

export default async function Home() {
  const projects = await getProjects();

  return (
    <div className='max-w-2xl mx-auto'>
      <section className='mb-12'>
        <h1 className='text-3xl md:text-4xl font-bold mb-6'>Saram Kim</h1>
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
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>

      <section>
        <h2 className='text-2xl font-bold mb-4'>Latest Writings</h2>
        <Link href='/blog' className='inline-flex items-center group'>
          <span className='mr-2 group-hover:underline'>Visit my blog</span>
          <ArrowRight size={16} className='transition-transform group-hover:translate-x-1' />
        </Link>
      </section>
    </div>
  );
}
