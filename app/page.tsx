import Link from 'next/link';
import { ArrowDown, ArrowRight, ArrowUpRight, Bookmark, Captions, FileText, Repeat2 } from 'lucide-react';
import { ProductMark } from '@components/product-mark';
import { playPlusStoreUrl, webSubtitleUrl } from '@lib/products';

export default function Home() {
  return (
    <>
      <section className='home-hero site-container'>
        <div className='hero-topline'>
          <p className='eyebrow'>Independent tools by saramkim</p>
          <span className='hero-note'>작은 도구로, 더 편한 일상</span>
        </div>
        <div className='hero-grid'>
          <div>
            <h1 className='home-title'>
              영상에 필요한 도구,
              <br />
              <span>브라우저 안에서.</span>
            </h1>
            <p className='hero-description'>
              자막을 더하고, 놓친 구간을 다시 보고.
              <br className='hidden sm:block' /> 익숙한 시청 환경에서 쓰는 확장 프로그램을 만듭니다.
            </p>
            <a href='#products' className='button-primary mt-8'>
              제품 살펴보기 <ArrowDown size={17} aria-hidden='true' />
            </a>
          </div>
          <div className='hero-index' aria-label='제품 바로가기'>
            <span className='eyebrow'>Find your tool</span>
            <Link href='/play-plus' className='hero-index-link'>
              <span className='index-number'>01</span>
              <div>
                <strong>Play Plus</strong>
                <span>쿠팡플레이로 언어를 공부할 때</span>
              </div>
              <ArrowUpRight size={20} aria-hidden='true' />
            </Link>
            <a href={webSubtitleUrl} className='hero-index-link'>
              <span className='index-number'>02</span>
              <div>
                <strong>WebSubtitle</strong>
                <span>웹 영상에 내 자막이 필요할 때</span>
              </div>
              <ArrowUpRight size={20} aria-hidden='true' />
            </a>
          </div>
        </div>
      </section>

      <section id='products' className='site-container products-section' aria-labelledby='products-title'>
        <div className='product-section-heading'>
          <h2 id='products-title'>일상에서 쓰는 제품</h2>
          <p>필요한 도구를 골라보세요.</p>
        </div>
        <article className='product-feature product-feature-play' aria-labelledby='play-title'>
          <div className='product-identity'>
            <div className='product-tile-top'>
              <span className='product-category'>COUPANG PLAY · CHROME EXTENSION</span>
              <span className='product-number'>01</span>
            </div>
            <ProductMark product='play-plus' large />
            <div>
              <p className='product-tile-name'>Play Plus</p>
              <p className='product-tile-description'>시청을 공부로 이어주는 도구</p>
            </div>
          </div>
          <div className='product-description'>
            <p className='eyebrow'>Watch. Repeat. Remember.</p>
            <h3 id='play-title'>
              놓친 한 문장까지,
              <br />내 속도로.
            </h3>
            <p className='product-body'>
              쿠팡플레이에서 두 언어의 자막을 함께 보고, 필요한 구간을 반복하세요. 기억하고 싶은 자막은 저장해
              다시 살펴볼 수 있습니다.
            </p>
            <ul className='feature-tags' aria-label='Play Plus 주요 기능'>
              <li>
                <Captions size={16} aria-hidden='true' />
                이중 자막
              </li>
              <li>
                <Repeat2 size={16} aria-hidden='true' />
                구간 반복
              </li>
              <li>
                <Bookmark size={16} aria-hidden='true' />
                자막 저장
              </li>
            </ul>
            <div className='product-actions'>
              <Link href='/play-plus' className='button-primary'>
                Play Plus 알아보기 <ArrowRight size={17} aria-hidden='true' />
              </Link>
              <a href={playPlusStoreUrl} className='text-link'>
                Chrome에 설치 <ArrowUpRight size={16} aria-hidden='true' />
              </a>
            </div>
          </div>
        </article>
        <article className='product-feature product-feature-web' aria-labelledby='web-title'>
          <div className='product-identity'>
            <div className='product-tile-top'>
              <span className='product-category'>WEB VIDEO · CHROME EXTENSION</span>
              <span className='product-number'>02</span>
            </div>
            <ProductMark product='websubtitle' large />
            <div>
              <p className='product-tile-name'>WebSubtitle</p>
              <p className='product-tile-description'>보고 있는 영상에, 원하는 자막</p>
            </div>
          </div>
          <div className='product-description'>
            <p className='eyebrow'>Your video. Your subtitles.</p>
            <h3 id='web-title'>
              자막이 필요할 때,
              <br />
              보던 곳에서 바로.
            </h3>
            <p className='product-body'>
              지원되는 웹 영상에 원하는 자막을 더하세요. 자막 파일을 불러오고, 영상에 맞춰 싱크와 표시 방식을
              조절할 수 있습니다.
            </p>
            <ul className='feature-tags' aria-label='WebSubtitle 주요 기능'>
              <li>
                <FileText size={16} aria-hidden='true' />
                자막 파일 불러오기
              </li>
              <li>
                <Captions size={16} aria-hidden='true' />
                표시·싱크 조절
              </li>
            </ul>
            <div className='product-actions'>
              <a href={webSubtitleUrl} className='button-primary'>
                WebSubtitle 사이트 <ArrowUpRight size={17} aria-hidden='true' />
              </a>
              <span className='product-action-note'>설치와 사용 안내를 한곳에서</span>
            </div>
          </div>
        </article>
      </section>

      <section id='help' className='site-container help-section' aria-labelledby='help-title'>
        <div>
          <p className='eyebrow'>Here to help</p>
          <h2 id='help-title' className='section-title'>
            사용하다 막히셨나요?
          </h2>
          <p className='mt-4 max-w-md leading-7 text-stone-600'>제품에 맞는 문의 경로를 안내해 드릴게요.</p>
        </div>
        <div className='help-links'>
          <Link href='/play-plus#support' className='help-link'>
            <div>
              <strong>Play Plus 문의</strong>
              <span>사용 중 겪은 문제나 개선 의견을 알려주세요.</span>
            </div>
            <ArrowRight size={20} aria-hidden='true' />
          </Link>
          <a href={`${webSubtitleUrl}/help`} className='help-link'>
            <div>
              <strong>WebSubtitle 도움말</strong>
              <span>전용 사이트에서 사용법과 문제 해결을 확인하세요.</span>
            </div>
            <ArrowUpRight size={20} aria-hidden='true' />
          </a>
        </div>
      </section>

      <section className='maker-section'>
        <div className='site-container maker-inner'>
          <div className='maker-avatar' aria-hidden='true'>
            sk.
          </div>
          <div className='maker-copy'>
            <p className='eyebrow'>Made by a person</p>
            <h2>안녕하세요, 김사람입니다.</h2>
            <p>직접 겪은 불편에서 출발해, 계속 쓰고 싶은 웹 제품을 만듭니다.</p>
          </div>
          <Link href='/about' className='text-link'>
            만드는 사람과 기록 <ArrowRight size={17} aria-hidden='true' />
          </Link>
        </div>
      </section>
    </>
  );
}
