import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  reactStrictMode: true,
  sassOptions: {
    includePaths: ['src/styles'],
    quiteDeps: true,
    silenceDeprecations: [
      'import',
      'color-functions',
      'global-builtin',
      'if-function',
    ],
    verbose: false,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
      },
    ],
  },
  poweredByHeader: false,
};

export default nextConfig;
