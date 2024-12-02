/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "files.quartr.com",
        port: "",
        pathname: "/company-logos/**",
      },
    ],
  },
};

module.exports = nextConfig;
