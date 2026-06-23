import type { NextConfig } from "next";

const isProd = process.env.GITHUB_ACTIONS === 'true';

const nextConfig: NextConfig = {
  output: 'export',
  images: { unoptimized: true },
  basePath: isProd ? '/lilywang-portfolio' : '',
  assetPrefix: isProd ? '/lilywang-portfolio/' : '',
  env: {
    NEXT_PUBLIC_BASE_PATH: isProd ? '/lilywang-portfolio' : '',
  },
};

export default nextConfig;
