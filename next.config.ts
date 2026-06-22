import type { NextConfig } from "next";


const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath: "",
  assetPrefix: "",
  images: {
    loader: "custom",
    loaderFile: "./lib/image-loader.ts",
  },
};

export default nextConfig;
