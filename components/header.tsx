'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'Projects', href: '/projects' },
  { name: 'Blog', href: '/blog' },
];

const Header = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((isOpen) => !isOpen);
  };

  const isActive = (href: string) =>
    href === '/' ? pathname === href : pathname === href || pathname.startsWith(`${href}/`);

  return (
    <header className='sticky top-0 z-50 border-b border-stone-200/80 bg-stone-50/90 backdrop-blur-md'>
      <a
        href='#main-content'
        className='fixed left-4 top-3 z-[60] -translate-y-20 rounded-md bg-stone-950 px-4 py-2 text-sm font-medium text-white transition-transform focus:translate-y-0'
      >
        본문으로 건너뛰기
      </a>
      <div className='site-container flex min-h-16 items-center justify-between'>
        <Link
          href='/'
          onClick={() => setIsMenuOpen(false)}
          className='rounded-md text-lg font-semibold tracking-[-0.03em] text-stone-950 transition-opacity hover:opacity-65 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-stone-950 focus-visible:ring-offset-4'
        >
          saramkim
        </Link>

        <nav aria-label='주요 탐색' className='hidden items-center gap-1 md:flex'>
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              aria-current={isActive(link.href) ? 'page' : undefined}
              className={`rounded-lg px-3 py-2 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-stone-950 ${
                isActive(link.href) ? 'bg-stone-200/70 text-stone-950' : 'text-stone-600 hover:bg-stone-100 hover:text-stone-950'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <button
          type='button'
          className='inline-flex size-11 items-center justify-center rounded-lg text-stone-700 transition-colors hover:bg-stone-200/70 hover:text-stone-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-stone-950 md:hidden'
          onClick={toggleMenu}
          aria-label={isMenuOpen ? '메뉴 닫기' : '메뉴 열기'}
          aria-expanded={isMenuOpen}
          aria-controls='mobile-navigation'
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <nav
        id='mobile-navigation'
        aria-label='모바일 탐색'
        hidden={!isMenuOpen}
        className='border-t border-stone-200 px-4 py-3 md:hidden'
      >
        <ul className='space-y-1'>
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                aria-current={isActive(link.href) ? 'page' : undefined}
                className={`flex min-h-11 items-center rounded-lg px-3 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-stone-950 ${
                  isActive(link.href) ? 'bg-stone-200/70 text-stone-950' : 'text-stone-600 hover:bg-stone-100 hover:text-stone-950'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
