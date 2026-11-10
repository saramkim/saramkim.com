import { defaultOgImage, siteName, siteUrl } from './metadata';
import { playPlusStoreUrl } from './products';

// Only facts the pages already state. No ratings, review counts or prices: those must not be invented, and the
// site deliberately avoids presenting historical statistics as current.
const absolute = (path: string) => new URL(path, siteUrl).href;

const maker = {
  '@type': 'Person',
  name: '김사람',
  alternateName: siteName,
  url: absolute('/about'),
};

export const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: siteName,
  url: absolute('/'),
  inLanguage: 'ko-KR',
  description: '보던 영상 그대로, 자막만 내 방식대로. Play Plus와 WebSubtitle의 제품 소개, 설치와 사용 지원.',
  publisher: maker,
};

export const playPlusSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Play Plus',
  url: absolute('/play-plus'),
  applicationCategory: 'EducationalApplication',
  operatingSystem: 'Chrome (desktop)',
  description:
    '쿠팡플레이에서 이중 자막, 구간 반복, 자막 저장으로 내 속도에 맞춰 언어를 공부하는 Chrome 확장 프로그램.',
  inLanguage: ['ko', 'en'],
  image: absolute('/og/play-plus.png'),
  downloadUrl: playPlusStoreUrl,
  author: maker,
};

type ArticleInput = {
  title: string;
  excerpt: string;
  slug: string;
  date: string;
  updated?: string;
  locale: string;
  ogImage?: string;
};

export function articleSchema(post: ArticleInput) {
  const url = absolute(`/blog/${post.slug}`);
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt,
    url,
    mainEntityOfPage: url,
    datePublished: `${post.date}T00:00:00Z`,
    dateModified: `${post.updated ?? post.date}T00:00:00Z`,
    inLanguage: post.locale === 'ko' ? 'ko-KR' : 'en-US',
    image: absolute(post.ogImage ?? defaultOgImage),
    author: maker,
    publisher: maker,
  };
}
