import type { Metadata } from 'next';

// Keep false until Play Plus 2.0 is published on the Chrome Web Store and every pending capture is replaced.
// While false the pages are noindex/nofollow and show a preview notice. The routes themselves exist only
// in a PLAY_PLUS_GUIDE_PREVIEW=1 build (see next.config.js).
export const guideReleased = false;

export const guidePaths = {
  guide: '/play-plus/guide',
  updates: '/play-plus/updates/2.0',
} as const;

export const guideRobots: Metadata['robots'] = guideReleased
  ? { index: true, follow: true }
  : {
      index: false,
      follow: false,
      nocache: true,
      googleBot: { index: false, follow: false, noimageindex: true },
    };
