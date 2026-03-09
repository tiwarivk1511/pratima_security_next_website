import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* Static Export Settings for Firebase */
  output: 'export', 
  
  images: {
    unoptimized: true, // Static export mein images ko optimize karne ke liye server nahi hota, isliye ise true karna zaroori hai
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**', 
      },
    ],
  },
  
  // Optional: Agar aap trailing slashes chahte hain (SEO ke liye achha hai)
  trailingSlash: true,
};

export default nextConfig;


// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   /* config options here */
//   images: {
//     remotePatterns: [
//       {
//         protocol: 'https',
//         hostname: '**', // Yeh 'glob star' saare internet domains ko allow kar dega
//       },
//     ],
//   },
// };

// export default nextConfig;
