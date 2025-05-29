'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

const Header = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Blog', href: '/blog' },
  ];

  return (
    <header className='border-b border-gray-200'>
      <div className='container mx-auto px-4 py-4 flex justify-between items-center'>
        <Link href='/' className='text-xl font-bold'>
          Saram Kim
        </Link>

        {/* Desktop Navigation */}
        <nav className='hidden md:flex space-x-8'>
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-gray-600 hover:text-black transition-colors ${
                pathname === link.href ? 'text-black font-medium' : ''
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button className='md:hidden' onClick={toggleMenu} aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className='md:hidden py-4 px-4 border-t border-gray-200'>
          <ul className='space-y-4'>
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`block text-gray-600 hover:text-black transition-colors ${
                    pathname === link.href ? 'text-black font-medium' : ''
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
