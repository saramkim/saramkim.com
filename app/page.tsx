import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { Card } from '@components/card';
import { formatContentDate } from '@lib/format';
import { getBlogPosts, getProjects } from '@lib/mdx';

const principles = [
  {
    name: 'Essence',
    description: '기능보다 먼저, 사용자가 실제로 해결하려는 문제를 찾습니다.',
  },
  {
    name: 'Intention',
    description: '관성으로 만들지 않고 모든 선택에 분명한 이유를 둡니다.',
  },
  {
    name: 'Clarity',
    description: '코드와 화면, 메시지를 이해하기 쉬운 형태로 정리합니다.',
  },
];

export default function Home() {
  const projects = getProjects();
  const posts = getBlogPosts();

  return (
    <>
      <section className='border-b border-stone-200'>
        <div className='site-container grid gap-12 py-20 md:grid-cols-[minmax(0,1fr)_16rem] md:items-end md:py-28'>
          <div className='max-w-3xl'>
            <p className='eyebrow'>Frontend developer · Product-minded</p>
            <h1 className='mt-5 text-balance text-5xl font-semibold tracking-[-0.045em] text-stone-950 sm:text-6xl md:text-7xl'>
              복잡한 문제를,
              <br />
              명료한 제품으로.
            </h1>
            <p className='mt-7 max-w-2xl text-pretty text-lg leading-8 text-stone-600 md:text-xl'>
              사용자가 실제로 겪는 불편을 관찰하고, 더 적은 코드로 오래 쓰이는 웹 제품을 만듭니다.
            </p>
            <div className='mt-9 flex flex-wrap gap-3'>
              <Link href='/projects/play-plus' className='button-primary'>
                Play Plus 보기
                <ArrowUpRight aria-hidden='true' size={17} />
              </Link>
              <a className='button-secondary' href='https://github.com/saramkim' target='_blank' rel='noreferrer'>
                GitHub
                <ArrowUpRight aria-hidden='true' size={17} />
              </a>
            </div>
          </div>

          <dl className='grid grid-cols-3 gap-4 border-t border-stone-300 pt-5 md:grid-cols-1 md:border-l md:border-t-0 md:pl-7 md:pt-0'>
            <div>
              <dt className='text-xs font-medium uppercase tracking-[0.14em] text-stone-500'>Users</dt>
              <dd className='mt-1 text-2xl font-semibold tracking-tight'>5,000+</dd>
            </div>
            <div>
              <dt className='text-xs font-medium uppercase tracking-[0.14em] text-stone-500'>Rating</dt>
              <dd className='mt-1 text-2xl font-semibold tracking-tight'>5.0</dd>
            </div>
            <div>
              <dt className='text-xs font-medium uppercase tracking-[0.14em] text-stone-500'>Ratings</dt>
              <dd className='mt-1 text-2xl font-semibold tracking-tight'>44</dd>
            </div>
          </dl>
        </div>
      </section>

      <section className='site-container py-16 md:py-24' aria-labelledby='featured-projects'>
        <div className='section-heading'>
          <div>
            <p className='eyebrow'>Selected work</p>
            <h2 id='featured-projects' className='section-title'>
              실제 문제에서 시작한 제품
            </h2>
          </div>
          <Link href='/projects' className='text-link'>
            프로젝트 전체 보기
            <ArrowUpRight aria-hidden='true' size={16} />
          </Link>
        </div>
        <div className='mt-9 grid gap-5'>
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
      </section>

      <section className='border-y border-stone-200 bg-white'>
        <div className='site-container py-16 md:py-24'>
          <p className='eyebrow'>Working principles</p>
          <h2 className='section-title max-w-2xl'>좋은 결과는 명확한 판단에서 시작합니다.</h2>
          <div className='mt-10 grid gap-px overflow-hidden rounded-2xl border border-stone-200 bg-stone-200 md:grid-cols-3'>
            {principles.map((principle, index) => (
              <article key={principle.name} className='bg-stone-50 p-7 md:min-h-56'>
                <span className='text-sm tabular-nums text-stone-400'>0{index + 1}</span>
                <h3 className='mt-8 text-xl font-semibold tracking-tight'>{principle.name}</h3>
                <p className='mt-3 leading-7 text-stone-600'>{principle.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className='site-container py-16 md:py-24' aria-labelledby='recent-writing'>
        <div className='section-heading'>
          <div>
            <p className='eyebrow'>Writing</p>
            <h2 id='recent-writing' className='section-title'>
              생각을 언어로 정리합니다
            </h2>
          </div>
          <Link href='/blog' className='text-link'>
            모든 글 보기
            <ArrowUpRight aria-hidden='true' size={16} />
          </Link>
        </div>

        <div className='mt-9 divide-y divide-stone-200 border-y border-stone-200'>
          {posts.map((post) => (
            <article key={post.slug}>
              <Link
                href={`/blog/${post.slug}`}
                className='group grid gap-3 py-7 outline-none transition-colors hover:bg-white focus-visible:bg-white md:grid-cols-[9rem_1fr_auto] md:items-center md:px-4'
              >
                <time className='text-sm tabular-nums text-stone-500' dateTime={post.date}>
                  {formatContentDate(post.date, post.locale)}
                </time>
                <div>
                  <h3 className='text-xl font-semibold tracking-tight group-hover:underline group-hover:decoration-1 group-hover:underline-offset-4'>
                    {post.title}
                  </h3>
                  <p className='mt-1 text-stone-600'>{post.excerpt}</p>
                </div>
                <ArrowUpRight className='hidden text-stone-400 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 md:block' aria-hidden='true' size={20} />
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className='border-t border-stone-200 bg-stone-950 text-stone-50'>
        <div className='site-container py-16 md:flex md:items-end md:justify-between md:py-20'>
          <div>
            <p className='eyebrow text-stone-400'>Contact</p>
            <h2 className='mt-4 max-w-2xl text-3xl font-semibold tracking-[-0.035em] sm:text-4xl'>
              해결할 가치가 있는 문제가 있다면 이야기해 주세요.
            </h2>
          </div>
          <a className='mt-8 inline-flex items-center gap-2 text-base font-medium underline decoration-stone-500 underline-offset-8 hover:decoration-stone-50 md:mt-0' href='mailto:saramkimm@gmail.com'>
            saramkimm@gmail.com
            <ArrowUpRight aria-hidden='true' size={17} />
          </a>
        </div>
      </section>
    </>
  );
}
