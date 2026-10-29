import './globals.css';
import type { Metadata } from 'next';
import Header from '@components/header';
import Footer from '@components/footer';
import { SpeedInsights } from '@vercel/speed-insights/next';

const siteUrl = 'https://www.saramkim.com';
const siteDescription = '영상에 필요한 도구, 브라우저 안에서. Play Plus와 WebSubtitle의 제품 소개, 설치와 사용 지원을 만나보세요.';

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
  openGraph: {
    title: 'saramkim — 일상에서 쓰는 브라우저 도구',
    description: siteDescription,
    url: siteUrl,
    siteName: 'saramkim',
    locale: 'ko_KR',
    alternateLocale: ['en_US'],
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

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang='ko'>
      <body className='min-h-screen bg-stone-50 text-stone-950 antialiased'>
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
