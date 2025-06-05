import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Header from '@components/header';
import Footer from '@components/footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://saramkim.com'),
  title: 'saramkim',
  description: 'Personal website and blog of saramkim - Frontend Developer',
  keywords: ['saramkim', 'Software Engineer', 'Frontend Developer', 'Blog', 'Portfolio'],
  authors: [{ name: 'saramkim' }],
  creator: 'saramkim',
  publisher: 'saramkim',
  openGraph: {
    title: 'saramkim',
    description: 'Personal website and blog of saramkim - Frontend Developer',
    url: 'https://saramkim.com',
    siteName: 'saramkim',
    locale: 'en_US',
    type: 'website',
    images: ['/og-image.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'saramkim',
    description: 'Personal website and blog of saramkim - Frontend Developer',
    images: ['/og-image.png'],
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

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className={`${inter.className} bg-white text-black min-h-screen flex flex-col`}>
        <Header />
        <main className='grow container mx-auto px-4 py-8 md:px-6 md:py-12'>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
