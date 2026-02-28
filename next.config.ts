import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**', // Yeh 'glob star' saare internet domains ko allow kar dega
      },
    ],
  },
};

export default nextConfig;
