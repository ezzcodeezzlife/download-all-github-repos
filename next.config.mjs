/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",        // enable static export
  basePath: "/download-all-github-repos", // must match your repo name
  images: {
    unoptimized: true,     // needed since no Image Optimization on static export
  },
};

module.exports = nextConfig;
