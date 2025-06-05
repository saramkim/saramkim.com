import Link from 'next/link';
import { Project } from '@lib/mdx';

interface ProjectCardProps {
  project: Omit<Project, 'content'>;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className='flex flex-col gap-2 border p-6 bg-white rounded-lg hover:bg-gray-50 transition-colors'
    >
      <h2 className='text-2xl font-semibold'>{project.title}</h2>
      <p className='text-gray-600'>{project.description}</p>
    </Link>
  );
}
