import type { Metadata } from 'next';
import { Card } from '@components/card';
import { getProjects } from '@lib/mdx';

export const metadata: Metadata = {
  title: '프로젝트',
  description: '프론트엔드 개발자 김사람이 실제 사용자 문제를 해결하며 만든 제품.',
  alternates: { canonical: '/projects' },
  openGraph: {
    title: '프로젝트 | saramkim',
    description: '프론트엔드 개발자 김사람이 실제 사용자 문제를 해결하며 만든 제품.',
    url: '/projects',
  },
};

export default function ProjectsPage() {
  const projects = getProjects();

  return (
    <div className='site-container page-shell'>
      <header className='page-intro'>
        <p className='eyebrow'>Selected work</p>
        <h1 className='page-title'>사용자의 불편에서 시작한 제품</h1>
        <p className='page-description'>
          기능을 더하는 데서 끝내지 않고, 실제로 사용되는 제품이 되기까지 관찰하고 개선한 과정을 기록합니다.
        </p>
      </header>

      <div className='grid gap-5'>
        {projects.map((project) => (
          <Card
            key={project.slug}
            href={`/projects/${project.slug}`}
            title={project.title}
            description={project.description}
            meta='Chrome extension · 5,000+ users'
          />
        ))}
      </div>
    </div>
  );
}
