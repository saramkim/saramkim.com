import Link from 'next/link';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { getBlogPosts } from '@lib/mdx';
import { formatContentDate } from '@lib/format';
import { pageMetadata } from '@lib/metadata';
import { contactEmail } from '@lib/products';
import { BrandIcon } from '@components/brand';

const description =
  '일상에서 마주친 불편을 해결하는 제품과 도구를 만드는 김사람. 제품을 만드는 생각과 과정, 글을 소개합니다.';
export const metadata = pageMetadata({
  title: '만드는 사람',
  socialTitle: '만드는 사람 | saramkim',
  description,
  path: '/about',
});
const principles = [
  { name: '문제부터 봅니다', description: '기능보다 먼저, 사용자가 실제로 해결하려는 문제를 찾습니다.' },
  { name: '이유를 갖고 만듭니다', description: '관성으로 만들지 않고 모든 선택에 분명한 이유를 둡니다.' },
  { name: '명료하게 정리합니다', description: '코드와 화면, 메시지를 이해하기 쉬운 형태로 정리합니다.' },
];

export default function AboutPage() {
  const posts = getBlogPosts();
  return (
    <div className='site-container page-shell'>
      <header className='about-intro'>
        <div>
          <h1 className='page-title'>
            안녕하세요,
            <br />
            김사람입니다.
          </h1>
          <p className='page-description'>
            일상에서 마주친 불편을 해결하는 제품과 도구를 만듭니다. 직접 사용하고,
            쓰는 사람의 경험을 바탕으로 꾸준히 다듬습니다.
          </p>
          <div className='mt-8 flex flex-wrap gap-6'>
            <a href='https://github.com/saramkim' className='text-link'>
              GitHub <ArrowUpRight size={17} aria-hidden='true' />
            </a>
            <a href={`mailto:${contactEmail}`} className='text-link'>
              {contactEmail}
              <ArrowUpRight size={17} aria-hidden='true' />
            </a>
          </div>
        </div>
        <div className='about-monogram' aria-hidden='true'>
          <BrandIcon />
        </div>
      </header>
      <section className='about-section' aria-labelledby='principles-title'>
        <h2 id='principles-title' className='section-title'>
          만들 때 지키려는 세 가지
        </h2>
        <div className='principle-grid'>
          {principles.map((principle, i) => (
            <article key={principle.name}>
              <span className='index-number'>0{i + 1}</span>
              <h3>{principle.name}</h3>
              <p>{principle.description}</p>
            </article>
          ))}
        </div>
      </section>
      <section className='about-section' aria-labelledby='stories-title'>
        <div className='section-heading'>
          <div>
            <h2 id='stories-title' className='section-title'>
              제품 뒤의 이야기
            </h2>
          </div>
          <Link href='/projects' className='text-link'>
            제작 사례 모두 보기 <ArrowRight size={17} aria-hidden='true' />
          </Link>
        </div>
        <div className='story-links'>
          <Link href='/projects/play-plus' className='help-link'>
            <div>
              <strong>Play Plus</strong>
              <span>영상 시청과 언어 학습을 연결하기까지</span>
            </div>
            <ArrowRight size={19} aria-hidden='true' />
          </Link>
          <Link href='/projects/websubtitle' className='help-link'>
            <div>
              <strong>WebSubtitle</strong>
              <span>웹 영상에 원하는 자막을 더하기까지</span>
            </div>
            <ArrowRight size={19} aria-hidden='true' />
          </Link>
        </div>
      </section>
      <section className='about-section' aria-labelledby='writing-title'>
        <div className='section-heading'>
          <div>
            <h2 id='writing-title' className='section-title'>
              생각을 남기는 곳
            </h2>
          </div>
          <Link href='/blog' className='text-link'>
            모든 글 보기 <ArrowRight size={17} aria-hidden='true' />
          </Link>
        </div>
        <div className='mt-8 divide-y divide-line border-y border-line'>
          {posts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className='article-row group'>
              <time className='text-sm text-muted' dateTime={post.date}>
                {formatContentDate(post.date, post.locale)}
              </time>
              <div>
                <h3 className='text-xl font-semibold group-hover:underline'>{post.title}</h3>
                <p className='mt-2 leading-7 text-body'>{post.excerpt}</p>
              </div>
              <ArrowRight className='hidden md:block' size={19} aria-hidden='true' />
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
