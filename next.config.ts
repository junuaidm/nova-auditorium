import type { NextConfig } from 'next';

const isProd = process.env.NODE_ENV === 'production';
const githubPagesBasePath = '/nova-auditorium';

const nextConfig: NextConfig = {
  output: 'export', // Enable static export for GitHub Pages
  basePath: isProd ? githubPagesBasePath : '', // Subdirectory for GitHub Pages
  env: {
    NEXT_PUBLIC_BASE_PATH: isProd ? githubPagesBasePath : '',
  },
  images: {
    unoptimized: true, // Required for static export
  },
};

export default nextConfig;
