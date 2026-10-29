import type { Metadata } from 'next';
import { Card } from '@components/card';
import { getProjects } from '@lib/mdx';

export const metadata: Metadata = {
  title: '제작 사례',
  description: 'Play Plus와 WebSubtitle을 만들며 고민한 문제와 제작 과정의 기록.',
  alternates: { canonical: '/projects' },
  openGraph: {
    title: '제작 사례 | saramkim',
    description: 'Play Plus와 WebSubtitle을 만들며 고민한 문제와 제작 과정의 기록.',
    url: '/projects',
  },
};

export default function ProjectsPage() {
  const projects = getProjects();

  return (
    <div className='site-container page-shell'>
      <header className='page-intro'>
        <p className='eyebrow'>Behind the products</p>
        <h1 className='page-title'>제품을 만든 과정</h1>
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
            meta={project.meta}
          />
        ))}
      </div>
    </div>
  );
}
