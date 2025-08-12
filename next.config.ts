import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  
  images: {
    remotePatterns: [new URL('https://placehold.co/**')],
    dangerouslyAllowSVG: true
  },
  /* config options here */
  experimental: {
    globalNotFound: true,
  },
  
};

export default nextConfig;
