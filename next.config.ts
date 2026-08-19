import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/ketelzwart",
  images: { unoptimized: true },
  trailingSlash: true,
};

export default nextConfig;
