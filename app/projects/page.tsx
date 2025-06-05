import Link from 'next/link';
import { getProjects } from '@lib/mdx';

export default async function ProjectPage() {
  const projects = await getProjects();

  return (
    <div className='max-w-2xl mx-auto'>
      <h1 className='text-3xl md:text-4xl font-bold mb-8'>Projects</h1>

      <div className='space-y-10'>
        {projects.map((project) => (
          <Link
            key={project.slug}
            href={`/projects/${project.slug}`}
            className='flex flex-col gap-2 border p-6 bg-white rounded-lg hover:bg-gray-50 transition-colors'
          >
            <h2 className='text-2xl font-semibold'>{project.title}</h2>
            <p className='text-gray-600'>{project.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
