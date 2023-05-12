const withImages = require('next-images');

module.exports = withImages({
  reactStrictMode: true,
  images: {
    domains: ['drugstoc.com'],
    deviceSizes: [320, 640, 768, 1024, 1600],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  env: {
    FACEBOOK_APP_ID: process.env.FACEBOOK_APP_ID,
    GOOGLE_SITE_VERIFICATION: process.env.GOOGLE_SITE_VERIFICATION,
    GA_TRACKING_ID: process.env.GA_TRACKING_ID,
    MAILCHIMP_API_KEY: process.env.MAILCHIMP_API_KEY,
    MAILCHIMP_AUDIENCE_ID: process.env.MAILCHIMP_AUDIENCE_ID,
    DATA_CENTER: process.env.DATA_CENTER,
  },
});
