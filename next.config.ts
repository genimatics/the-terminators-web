import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,

  // ✅ Fully static export
  output: 'export',
  trailingSlash: true,

  // ✅ Required for static hosting (e.g. GoDaddy)
  images: {
    unoptimized: true,
  },

  devIndicators: {
    position: 'bottom-right',
  },

  experimental: {},
};

export default nextConfig;
