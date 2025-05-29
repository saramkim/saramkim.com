import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Header from '@components/header';
import Footer from '@components/footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Saram Kim',
  description: 'Personal website and blog of Saram Kim',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className={`${inter.className} bg-white text-black min-h-screen flex flex-col`}>
        <Header />
        <main className='flex-grow container mx-auto px-4 py-8 md:px-6 md:py-12'>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
