export type Theme = 'light' | 'dark';

export const themeStorageKey = 'theme';

// Browser UI color per theme; matches --color-canvas in app/globals.css.
export const themeColors: Record<Theme, string> = {
  light: '#fbfbf8',
  dark: '#08090b',
};

/*
 * Runs in <head> before first paint so the page never flashes the wrong theme.
 * A saved choice wins; otherwise the system preference decides. CSS relies on data-theme always being set.
 */
export const themeInitScript = `(function(){var d=document.documentElement,t='dark';try{var s=localStorage.getItem('${themeStorageKey}');t=s==='light'||s==='dark'?s:matchMedia('(prefers-color-scheme: light)').matches?'light':'dark';if(s){document.addEventListener('DOMContentLoaded',function(){document.querySelectorAll('meta[name="theme-color"]').forEach(function(m){m.setAttribute('content',t==='light'?'${themeColors.light}':'${themeColors.dark}')})})}}catch(e){}d.dataset.theme=t})()`;

export function applyTheme(theme: Theme) {
  document.documentElement.dataset.theme = theme;
  document.querySelectorAll('meta[name="theme-color"]').forEach((meta) => meta.setAttribute('content', themeColors[theme]));
}

export function readStoredTheme(): Theme | null {
  try {
    const stored = localStorage.getItem(themeStorageKey);
    return stored === 'light' || stored === 'dark' ? stored : null;
  } catch {
    return null;
  }
}

export function storeTheme(theme: Theme) {
  try {
    localStorage.setItem(themeStorageKey, theme);
  } catch {
    // Storage can be blocked; the choice then lasts for this page view only.
  }
}
