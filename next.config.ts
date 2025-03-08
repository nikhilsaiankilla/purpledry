import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true, // Ensures React runs in strict mode
  swcMinify: true, // Enables SWC compiler for faster builds
  typescript: {
    ignoreBuildErrors: false, // Ensures type errors fail the build (set to `true` to ignore errors)
  },
  eslint: {
    ignoreDuringBuilds: false, // Prevents ignoring ESLint errors during builds
  },
};

export default nextConfig;
