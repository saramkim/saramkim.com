import type { Metadata } from 'next';

// Merge this release change only after confirming the Chrome Web Store publication.
export const guideReleased = true;

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
