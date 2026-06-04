import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Root path for Turbopack resolution when multiple lockfiles exist
  turbopack: {
    root: __dirname,
  },

  // Image optimization
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [],
    unoptimized: false,
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60 * 60 * 24 * 365, // 1 year
  },

  // Compression and minification
  compress: true,
  poweredByHeader: false,

  // SWR (Stale-While-Revalidate) for better caching
  onDemandEntries: {
    maxInactiveAge: 60 * 60 * 1000,
    pagesBufferLength: 5,
  },

  // Experimental optimizations
  experimental: {
    optimizePackageImports: ["@radix-ui", "lucide-react"],
  },

  // Headers for caching
  async headers() {
    return [
      {
        source: "/images/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        source: "/videos/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
