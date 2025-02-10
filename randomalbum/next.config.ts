import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true, // Ignore ESLint rules during builds
  },
  /* other config options here */
};

export default nextConfig;
