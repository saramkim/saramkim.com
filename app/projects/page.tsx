import { getProjects } from '@lib/mdx';
import { ProjectCard } from '@components/project-card';

export default async function ProjectPage() {
  const projects = await getProjects();

  return (
    <div className='max-w-2xl mx-auto'>
      <h1 className='text-3xl md:text-4xl font-bold mb-8'>Projects</h1>

      <div className='space-y-10'>
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </div>
  );
}
