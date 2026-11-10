import 'pretendard/dist/web/variable/pretendardvariable-dynamic-subset.css';
import './globals.css';
import type { Metadata, Viewport } from 'next';
import { GeistMono } from 'geist/font/mono';
import Header from '@components/header';
import Footer from '@components/footer';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { siteUrl } from '@lib/metadata';
import { themeColors, themeInitScript } from '@lib/theme';

const siteDescription = '보던 영상 그대로, 자막만 내 방식대로. Play Plus와 WebSubtitle의 제품 소개, 설치와 사용 지원을 만나보세요.';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'saramkim — 일상에서 쓰는 브라우저 도구',
    template: '%s | saramkim',
  },
  description: siteDescription,
  applicationName: 'saramkim',
  authors: [{ name: '김사람', url: siteUrl }],
  creator: '김사람',
  publisher: '김사람',
  alternates: {
    canonical: '/',
  },
  verification: {
    other: { 'naver-site-verification': '5cbeb6a183147dfcb62f46586b3778446cf87bfb' },
  },
  openGraph: {
    title: 'saramkim — 일상에서 쓰는 브라우저 도구',
    description: siteDescription,
    url: siteUrl,
    siteName: 'saramkim',
    locale: 'ko_KR',
    type: 'website',
    images: [
      {
        url: '/og.png',
        width: 1200,
        height: 630,
        alt: 'saramkim — Play Plus & WebSubtitle',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'saramkim — 일상에서 쓰는 브라우저 도구',
    description: siteDescription,
    images: ['/og.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: themeColors.light },
    { media: '(prefers-color-scheme: dark)', color: themeColors.dark },
  ],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    // The head script sets data-theme before hydration, so React must not flag the attribute.
    <html lang='ko' className={GeistMono.variable} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body className='min-h-screen'>
        <div className='flex min-h-screen flex-col'>
          <Header />
          <main id='main-content' tabIndex={-1} className='grow'>
            {children}
          </main>
          <Footer />
        </div>
        <SpeedInsights />
      </body>
    </html>
  );
}
