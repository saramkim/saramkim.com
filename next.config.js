/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: { unoptimized: true },
  ...(process.platform === 'win32' && {
    experimental: {
      // Avoid the failing loopback socket between Turbopack and PostCSS on Windows.
      turbopackPluginRuntimeStrategy: 'workerThreads',
    },
  }),
};

module.exports = nextConfig;
