import type { NextConfig } from 'next';
const config: NextConfig = {
  agentRules: false,
  output: 'export',
  images: { unoptimized: true },
  poweredByHeader: false,
  ...(process.env.NODE_ENV === 'development' ? {
    async rewrites() { return [{ source: '/api/:path*', destination: 'http://127.0.0.1:3001/api/:path*' }]; }
  } : {}),
};
export default config;
