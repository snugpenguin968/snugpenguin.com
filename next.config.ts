import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  /* config options here */
  // Redirects do not work in static export (output: 'export'). 
  // We must handle redirects via Cloudflare _redirects file or rely on client-side routing.
  // For now, I will comment out the redirects as they are incompatible with static export config within Next.js itself.
  // async redirects() {
  //   return [
  //     {
  //       source: '/about',
  //       destination: '/#about',
  //       permanent: true,
  //     },
  //   ];
  // },
};

export default nextConfig;
