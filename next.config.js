/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "/download-all-github-repos",
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;