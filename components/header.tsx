'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Wordmark } from '@components/brand';

const navLinks = [
  { name: '제품', href: '/#products' },
  { name: '도움·문의', href: '/#help' },
  { name: '만드는 사람', href: '/about' },
];

const Header = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((isOpen) => !isOpen);
  };

  const isActive = (href: string) =>
    !href.includes('#') && (pathname === href || pathname.startsWith(`${href}/`));

  return (
    <header className='site-header sticky top-0 z-50 border-b border-line backdrop-blur-md'>
      <a
        href='#main-content'
        className='fixed left-4 top-3 z-[60] -translate-y-20 rounded-md bg-accent px-4 py-2 text-sm font-medium text-canvas transition-transform focus:translate-y-0'
      >
        본문으로 건너뛰기
      </a>
      <div className='site-container flex min-h-16 items-center justify-between'>
        <Link
          href='/'
          onClick={() => setIsMenuOpen(false)}
          className='rounded-md text-lg font-semibold tracking-[-0.03em] text-ink transition-opacity hover:opacity-65'
        >
          <Wordmark />
        </Link>

        <nav aria-label='주요 탐색' className='hidden items-center gap-1 md:flex'>
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              aria-current={isActive(link.href) ? 'page' : undefined}
              className={`rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                isActive(link.href) ? 'bg-raised text-ink' : 'text-body hover:bg-raised hover:text-ink'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <button
          type='button'
          className='inline-flex size-11 items-center justify-center rounded-lg text-body transition-colors hover:bg-raised hover:text-ink md:hidden'
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
        className='border-t border-line px-4 py-3 md:hidden'
      >
        <ul className='space-y-1'>
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                aria-current={isActive(link.href) ? 'page' : undefined}
                className={`flex min-h-11 items-center rounded-lg px-3 text-sm font-medium transition-colors ${
                  isActive(link.href) ? 'bg-raised text-ink' : 'text-body hover:bg-raised hover:text-ink'
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
