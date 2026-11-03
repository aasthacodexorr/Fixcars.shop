import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  devIndicators: false,
  // Lets a phone on the same Wi-Fi load the dev server. Without this the browser
  // can't fetch dev assets, so the 3D wheel never appears on the phone. Update it
  // if this computer's network address changes. Production is unaffected.
  allowedDevOrigins: ["192.168.1.66"],
  experimental: {
    agentFeedback: true,
  },
  cacheComponents: true,
  partialPrefetching: true,
  async headers() {
    // File names here aren't hashed, so browsers reuse them for a day and then
    // refresh in the background. Replacing an image shows up within a day.
    return [
      {
        source: "/images/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=86400, stale-while-revalidate=604800",
          },
        ],
      },
    ];
  },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
