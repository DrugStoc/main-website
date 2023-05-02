const withImages = require('next-images');

module.exports = withImages({
  reactStrictMode: true,
  images: {
    domains: ['drugstoc.com'],
    deviceSizes: [320, 640, 768, 1024, 1600],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
});
