const { withContentlayer } = require('next-contentlayer')

module.exports = withContentlayer()({
  // Your Next.js config...
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
})