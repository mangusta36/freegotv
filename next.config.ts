import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "freego4k.com" }],
        destination: "https://www.freego4k.com/:path*",
        statusCode: 301,
      },
    ];
  },
};

export default nextConfig;
