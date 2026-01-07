import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  output: 'export', // This tells Next.js to build a static site
  trailingSlash: true, // This creates /about/index.html instead of /about.html
  images: {
    unoptimized: true, // Add this line to fix the error
  }
};

export default nextConfig;
