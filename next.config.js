// Unreleased Play Plus guide routes use the `page.preview.tsx` file name. They become routes only when
// PLAY_PLUS_GUIDE_PREVIEW=1, so a default build (CI, Vercel production and preview) never exports them.
const guidePreview = process.env.PLAY_PLUS_GUIDE_PREVIEW === '1';

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: { unoptimized: true },
  pageExtensions: guidePreview ? ['preview.tsx', 'tsx', 'ts', 'jsx', 'js'] : ['tsx', 'ts', 'jsx', 'js'],
  ...(process.platform === 'win32' && {
    experimental: {
      // Avoid the failing loopback socket between Turbopack and PostCSS on Windows.
      turbopackPluginRuntimeStrategy: 'workerThreads',
    },
  }),
};

module.exports = nextConfig;
