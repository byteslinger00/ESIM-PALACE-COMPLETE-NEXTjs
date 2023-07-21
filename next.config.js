/** @type {import('next').NextConfig} */
// const nextConfig = {
//   experimental: {
//     appDir: true,
//   },
  
// }
module.exports = {
  experimental: {
    appDir: true,
  },  
  webpack5: true,
  webpack: (config) => {
    config.resolve.fallback = { fs: false };

    return config;
  },
}
// module.exports = nextConfig
