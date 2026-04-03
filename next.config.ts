import type { NextConfig } from 'next';

// Enable basePath/assetPrefix only for production exports (e.g. GitHub Pages)
const isProd = process.env.NODE_ENV === 'production';
const basePath = isProd ? '/nova-auditorium' : '';
const assetPrefix = isProd ? '/nova-auditorium/' : '';

const nextConfig: NextConfig = {
  output: 'export', // Enable static export for GitHub Pages
  images: {
    unoptimized: true, // Required for static export
  },
  basePath,
  assetPrefix,
};

export default nextConfig;
