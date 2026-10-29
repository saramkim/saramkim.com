import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, ArrowUpRight, Bookmark, Captions, FileText, Repeat2 } from 'lucide-react';
import { ProductMark } from '@components/product-mark';
import { contactEmail, playPlusStoreUrl } from '@lib/products';

const description =
  '쿠팡플레이에서 이중 자막, 구간 반복, 자막 저장으로 내 속도에 맞춰 언어를 공부하세요. Play Plus 소개, 설치와 문의 안내.';
export const metadata: Metadata = {
  title: 'Play Plus — 쿠팡플레이로 언어 공부',
  description,
  alternates: { canonical: '/play-plus' },
  openGraph: { title: 'Play Plus — 쿠팡플레이로 언어 공부', description, url: '/play-plus' },
  twitter: { title: 'Play Plus — 쿠팡플레이로 언어 공부', description },
};

const features = [
  {
    icon: Captions,
    title: '두 언어를 나란히',
    description:
      '영어와 한국어 자막을 함께 보거나 필요한 언어만 선택하세요. 자막의 크기와 위치, 색상도 조절할 수 있습니다.',
  },
  {
    icon: Repeat2,
    title: '이해할 때까지 다시',
    description:
      '현재 자막이나 직접 지정한 구간을 반복하세요. 자막을 기준으로 이동하고 재생 속도를 조절할 수 있습니다.',
  },
  {
    icon: Bookmark,
    title: '기억할 문장을 모아',
    description:
      '다시 보고 싶은 자막을 저장하세요. 저장한 문장을 모아 복습하고 해당 장면으로 돌아갈 수 있습니다.',
  },
  {
    icon: FileText,
    title: '내 자막 파일도 함께',
    description: '가지고 있는 VTT, SRT, SMI 파일을 등록하세요. 영상에 맞춰 자막의 싱크를 조절할 수 있습니다.',
  },
];

export default function PlayPlusPage() {
  return (
    <>
      <section className='product-hero site-container'>
        <Link href='/#products' className='back-link'>
          <ArrowLeft size={16} aria-hidden='true' /> 제품 살펴보기
        </Link>
        <div className='product-hero-grid'>
          <div>
            <div className='flex items-center gap-4'>
              <ProductMark product='play-plus' />
              <p className='eyebrow'>Play Plus · Chrome extension</p>
            </div>
            <h1 className='product-page-title'>
              보는 데서 한 걸음 더,
              <br />
              <span>내 속도로 공부하세요.</span>
            </h1>
            <p className='hero-description max-w-xl'>
              쿠팡플레이에 자막 학습 도구를 더합니다.
              <br />두 언어로 이해하고, 반복해서 듣고, 문장을 저장하세요.
            </p>
            <div className='mt-8 flex flex-wrap items-center gap-5'>
              <a href={playPlusStoreUrl} className='button-primary'>
                Chrome에 Play Plus 설치 <ArrowUpRight size={17} aria-hidden='true' />
              </a>
              <a href='#features' className='text-link'>
                기능 살펴보기 <ArrowRight size={16} aria-hidden='true' />
              </a>
            </div>
            <p className='mt-5 text-sm leading-6 text-stone-500'>데스크톱 Chrome · 쿠팡플레이 전용</p>
          </div>
          <aside className='play-summary' aria-label='Play Plus 사용 흐름'>
            <p className='eyebrow'>A little more than watching</p>
            <ol>
              <li>
                <span>01</span>
                <div>
                  <strong>이해하고</strong>
                  <p>두 언어의 자막을 함께</p>
                </div>
                <Captions size={25} aria-hidden='true' />
              </li>
              <li>
                <span>02</span>
                <div>
                  <strong>반복하고</strong>
                  <p>필요한 구간을 다시</p>
                </div>
                <Repeat2 size={25} aria-hidden='true' />
              </li>
              <li>
                <span>03</span>
                <div>
                  <strong>기억하세요</strong>
                  <p>저장한 문장으로 복습</p>
                </div>
                <Bookmark size={25} aria-hidden='true' />
              </li>
            </ol>
            <p className='summary-caption'>익숙한 시청 환경에서 이어지는 학습</p>
          </aside>
        </div>
      </section>
      <section id='features' className='site-container py-16 md:py-24' aria-labelledby='features-title'>
        <div className='product-section-heading'>
          <h2 id='features-title'>필요한 만큼, 내 방식대로</h2>
          <p>시청과 복습 사이를 연결합니다.</p>
        </div>
        <div className='capability-grid'>
          {features.map(({ icon: Icon, title, description: body }, index) => (
            <article key={title} className='capability'>
              <div className='flex items-center justify-between'>
                <Icon size={25} aria-hidden='true' />
                <span className='index-number'>0{index + 1}</span>
              </div>
              <h3>{title}</h3>
              <p>{body}</p>
            </article>
          ))}
        </div>
      </section>
      <section className='getting-started'>
        <div className='site-container py-16 md:py-20'>
          <p className='eyebrow'>Start with a video</p>
          <h2 className='section-title'>설치하고, 보던 영상을 열어보세요.</h2>
          <ol className='start-steps'>
            <li>
              <span>1</span>
              <h3>Chrome에 설치</h3>
              <p>Chrome 웹 스토어에서 Play Plus를 추가합니다.</p>
            </li>
            <li>
              <span>2</span>
              <h3>쿠팡플레이에서 재생</h3>
              <p>영상을 열고 브라우저의 Play Plus 아이콘을 눌러 시작합니다.</p>
            </li>
            <li>
              <span>3</span>
              <h3>내게 맞게 조절</h3>
              <p>자막과 재생 설정을 조절하며 시청하세요. 기본 자막과 겹치면 쿠팡플레이 자막을 꺼주세요.</p>
            </li>
          </ol>
          <p className='product-compatibility'>
            쿠팡플레이 이용에는 해당 서비스의 계정과 이용 조건이 적용됩니다. Play Plus는 쿠팡플레이와 공식적인
            관계가 없는 독립 확장 프로그램입니다.
          </p>
        </div>
      </section>
      <section id='support' className='site-container support-section' aria-labelledby='support-title'>
        <div>
          <p className='eyebrow'>Support</p>
          <h2 id='support-title' className='section-title'>
            잘 쓰실 수 있도록.
          </h2>
          <p className='mt-5 max-w-lg leading-8 text-stone-600'>
            문제가 생겼거나 개선할 점이 있다면 이메일로 알려주세요. 설치한 확장 프로그램 버전과 문제가 생긴
            상황을 함께 적어주시면 확인에 도움이 됩니다.
          </p>
          <p className='mt-3 max-w-lg text-sm leading-7 text-stone-500'>
            계정 정보, 비밀번호나 민감한 개인정보는 보내지 마세요.
          </p>
          <a className='text-link mt-6' href={`mailto:${contactEmail}`}>
            {contactEmail}
            <ArrowUpRight size={17} aria-hidden='true' />
          </a>
        </div>
        <div className='support-resources'>
          <a href={playPlusStoreUrl} className='help-link'>
            <div>
              <strong>Chrome 웹 스토어</strong>
              <span>설치와 공개 버전 정보</span>
            </div>
            <ArrowUpRight size={19} aria-hidden='true' />
          </a>
          <Link href='/play-plus/privacy' className='help-link'>
            <div>
              <strong>개인정보처리방침</strong>
              <span>처리하는 정보와 보관·삭제 안내</span>
            </div>
            <ArrowRight size={19} aria-hidden='true' />
          </Link>
          <Link href='/projects/play-plus' className='help-link'>
            <div>
              <strong>만들게 된 이야기</strong>
              <span>개발 배경과 제작 과정</span>
            </div>
            <ArrowRight size={19} aria-hidden='true' />
          </Link>
        </div>
      </section>
    </>
  );
}
