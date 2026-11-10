import Link from 'next/link';
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Bookmark,
  Captions,
  FileText,
  Info,
  Monitor,
  Repeat2,
} from 'lucide-react';
import { JsonLd } from '@components/json-ld';
import { ProductMark } from '@components/product-mark';
import { pageMetadata, playPlusOgImage } from '@lib/metadata';
import { contactEmail, playPlusStoreUrl } from '@lib/products';
import { playPlusSchema } from '@lib/structured-data';

const description =
  '쿠팡플레이에서 이중 자막, 구간 반복, 자막 저장으로 내 속도에 맞춰 언어를 공부하세요. Play Plus 소개, 설치와 문의 안내.';
export const metadata = pageMetadata({
  title: 'Play Plus — 쿠팡플레이로 언어 공부',
  description,
  path: '/play-plus',
  image: playPlusOgImage,
  imageAlt: 'Play Plus — 보던 쿠팡플레이가, 언어 공부가 됩니다.',
});

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
      '현재 자막이나 직접 지정한 구간을 반복하세요. 자막 단위로 이동하고 재생 속도를 조절하며, 자주 쓰는 동작은 단축키로 지정할 수 있습니다.',
  },
  {
    icon: Bookmark,
    title: '훑어보고, 모아서 복습',
    description:
      '전체 자막을 시간 순으로 훑고, 클릭해 해당 장면으로 이동하세요. 다시 보고 싶은 자막은 저장해 따로 모아 복습할 수 있습니다.',
  },
  {
    icon: FileText,
    title: '내 자막 파일도 함께',
    description:
      '자막이 없는 영상에는 가지고 있는 자막 파일(SRT, SMI, VTT)을 등록하세요. 자막이 영상과 어긋나면 0.1초 단위로 타이밍(싱크)을 맞출 수 있습니다.',
  },
];

export default function PlayPlusPage() {
  return (
    <>
      <JsonLd data={playPlusSchema} />
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
              보던 쿠팡플레이가,
              <br />
              <span>언어 공부가 됩니다.</span>
            </h1>
            <p className='hero-description max-w-xl'>두 언어로 이해하고, 반복해서 듣고, 문장을 저장하세요.</p>
            <div className='product-actions'>
              <a href={playPlusStoreUrl} className='button-primary install-link'>
                Chrome에 Play Plus 설치 <ArrowUpRight size={17} aria-hidden='true' />
              </a>
              <p className='install-note'>
                <Monitor size={16} aria-hidden='true' />
                PC의 Chrome에서 설치할 수 있어요
              </p>
              <a href='#features' className='text-link'>
                기능 살펴보기 <ArrowRight size={16} aria-hidden='true' />
              </a>
            </div>
            <p className='mt-5 text-sm leading-6 text-muted'>데스크톱 Chrome · 쿠팡플레이 전용</p>
          </div>
          {/* A drawn screen, not a capture: the site's dark "screen" with Play Plus's two subtitle lines. */}
          <div className='play-screen' data-theme='dark' aria-hidden='true'>
            <div className='play-screen-subtitles'>
              <p className='play-screen-primary' lang='en'>
                I finally caught that line.
              </p>
              <p className='play-screen-secondary'>이제야 그 문장이 들렸어.</p>
            </div>
          </div>
        </div>
      </section>
      <section id='features' className='site-container py-16 md:py-24' aria-labelledby='features-title'>
        <div className='product-section-heading'>
          <h2 id='features-title'>필요한 만큼, 내 방식대로</h2>
          <p>시청과 복습 사이를 연결합니다.</p>
        </div>
        <ul className='feature-list'>
          {features.map(({ icon: Icon, title, description: body }) => (
            <li key={title}>
              <Icon size={22} aria-hidden='true' />
              <h3>{title}</h3>
              <p>{body}</p>
            </li>
          ))}
        </ul>
      </section>
      <section className='getting-started'>
        <div className='site-container py-16 md:py-20'>
          <h2 className='section-title'>설치하고, 보던 영상을 열어보세요.</h2>
          <ol className='start-steps'>
            <li>
              <h3>
                <span aria-hidden='true'>1</span>Chrome에 설치
              </h3>
              <p>Chrome 웹 스토어에서 Play Plus를 추가합니다.</p>
            </li>
            <li>
              <h3>
                <span aria-hidden='true'>2</span>쿠팡플레이에서 재생
              </h3>
              <p>영상을 열고 브라우저의 Play Plus 아이콘을 눌러 시작합니다.</p>
            </li>
            <li>
              <h3>
                <span aria-hidden='true'>3</span>내게 맞게 조절
              </h3>
              <p>자막과 재생 설정을 조절하며 시청하세요.</p>
            </li>
          </ol>
          <p className='start-tip'>
            <Info size={18} aria-hidden='true' />
            <span>자막이 두 번 겹쳐 보이면 쿠팡플레이의 기본 자막을 꺼주세요.</span>
          </p>
          <p className='product-compatibility'>
            쿠팡플레이 이용에는 해당 서비스의 계정과 이용 조건이 적용됩니다. Play Plus는 쿠팡플레이와 공식적인
            관계가 없는 독립 확장 프로그램입니다.
          </p>
        </div>
      </section>
      <section id='support' className='site-container support-section' aria-labelledby='support-title'>
        <div>
          <h2 id='support-title' className='section-title'>
            잘 쓰실 수 있도록.
          </h2>
          <p className='mt-5 max-w-lg leading-8 text-body'>
            문제가 생겼거나 개선할 점이 있다면 이메일로 알려주세요. 설치한 확장 프로그램 버전과 문제가 생긴
            상황을 함께 적어주시면 확인에 도움이 됩니다.
          </p>
          <p className='mt-3 max-w-lg text-sm leading-7 text-muted'>
            계정 정보, 비밀번호나 민감한 개인정보는 보내지 마세요.
          </p>
          <a className='text-link mt-6' href={`mailto:${contactEmail}`}>
            {contactEmail}
            <ArrowUpRight size={17} aria-hidden='true' />
          </a>
        </div>
        <div className='support-resources'>
          <Link href='/play-plus/guide' className='help-link'>
            <div>
              <strong>기본 사용법</strong>
              <span>패널 열기부터 자막 조절·반복·문장 저장까지</span>
            </div>
            <ArrowRight size={19} aria-hidden='true' />
          </Link>
          <Link href='/play-plus/updates/2.0' className='help-link'>
            <div>
              <strong>2.0 변경 안내</strong>
              <span>달라진 화면과 기능, 기존 설정·자료 안내</span>
            </div>
            <ArrowRight size={19} aria-hidden='true' />
          </Link>
          <a href={playPlusStoreUrl} className='help-link install-link'>
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
