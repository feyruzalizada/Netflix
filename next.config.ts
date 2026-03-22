import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typescript: { ignoreBuildErrors: true },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "picsum.photos",
      },
    ],
  },
  async headers() {
    return [
      {
        source: "/api/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "DENY" },
        ],
      },
      {
        source: "/api/stream",
        headers: [
          { key: "Cache-Control", value: "no-store, no-cache" },
          { key: "X-Accel-Buffering", value: "no" },
        ],
      },
    ];
  },
  async rewrites() {
    return [];
  },
};

export default nextConfig;
