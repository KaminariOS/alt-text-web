import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  images: { unoptimized: true },
  basePath: '/alt-text-web',
  assetPrefix: '/alt-text-web',
};

export default nextConfig;
