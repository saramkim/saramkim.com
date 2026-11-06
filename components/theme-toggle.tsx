'use client';

import { Moon, Sun } from 'lucide-react';
import { useEffect } from 'react';
import { applyTheme, readStoredTheme, storeTheme } from '@lib/theme';

export function ThemeToggle() {
  useEffect(() => {
    // Next re-inserts the theme-color metas after hydration; re-sync them with the theme the head script chose.
    applyTheme(document.documentElement.dataset.theme === 'light' ? 'light' : 'dark');

    // Follow system changes until the visitor picks a theme themselves.
    const query = window.matchMedia('(prefers-color-scheme: light)');
    const onChange = (event: MediaQueryListEvent) => {
      if (!readStoredTheme()) applyTheme(event.matches ? 'light' : 'dark');
    };
    query.addEventListener('change', onChange);
    return () => query.removeEventListener('change', onChange);
  }, []);

  const toggle = () => {
    const next = document.documentElement.dataset.theme === 'light' ? 'dark' : 'light';
    applyTheme(next);
    storeTheme(next);
  };

  // Both icons render; CSS shows the one for the theme set by the head script, so there is no hydration mismatch.
  return (
    <button
      type='button'
      onClick={toggle}
      aria-label='밝은 테마와 어두운 테마 전환'
      className='theme-toggle inline-flex size-11 items-center justify-center rounded-lg text-body transition-colors hover:bg-raised hover:text-ink'
    >
      <Sun size={20} aria-hidden='true' className='theme-icon-sun' />
      <Moon size={20} aria-hidden='true' className='theme-icon-moon' />
    </button>
  );
}
