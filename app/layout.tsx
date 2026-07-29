import './globals.css';
import type { Metadata } from 'next';
import Header from '@components/header';
import Footer from '@components/footer';
import { SpeedInsights } from '@vercel/speed-insights/next';

const siteUrl = 'https://www.saramkim.com';
const siteDescription = '복잡한 문제를 명료한 웹 제품으로 만드는 프론트엔드 개발자 김사람의 포트폴리오와 글.';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'saramkim — Frontend Developer',
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
    title: 'saramkim — Frontend Developer',
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
        alt: 'Saram Kim — Frontend Developer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'saramkim — Frontend Developer',
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
          <main id='main-content' className='grow'>
            {children}
          </main>
          <Footer />
        </div>
        <SpeedInsights />
      </body>
    </html>
  );
}
