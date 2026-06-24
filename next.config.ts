import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // Static export for GitHub Pages hosting
  output: "export",
  // GitHub Pages serves from /wiz/ subdirectory
  basePath: isProd ? "/wiz" : "",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
