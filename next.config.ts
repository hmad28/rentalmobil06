import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  async redirects() {
    return [
      { source: "/sewa-mobil-banjarmasin", destination: "/rental-mobil-banjarmasin", permanent: true },
      { source: "/layanan/dengan-supir", destination: "/armada", permanent: true },
      { source: "/layanan/sewa-hiace", destination: "/armada/hiace-commuter", permanent: true },
    ];
  },
  experimental: {
    cpus: 4,
  },
};

export default nextConfig;
