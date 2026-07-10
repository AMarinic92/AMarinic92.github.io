import type { NextConfig } from "next";

// Static export for GitHub Pages. This is a user page served at the root
// domain (amarinic92.github.io), so no basePath / assetPrefix is needed.
const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
  trailingSlash: true,
};

export default nextConfig;
