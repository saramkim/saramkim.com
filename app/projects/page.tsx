import { getProjects } from '@lib/mdx';
import { Card } from '@components/card';

export default async function ProjectPage() {
  const projects = await getProjects();

  return (
    <div className='max-w-2xl mx-auto'>
      <h1 className='text-3xl md:text-4xl font-bold mb-8'>Projects</h1>

      <div className='space-y-10'>
        {projects.map((project) => (
          <Card
            key={project.slug}
            href={`/projects/${project.slug}`}
            title={project.title}
            description={project.description}
          />
        ))}
      </div>
    </div>
  );
}
