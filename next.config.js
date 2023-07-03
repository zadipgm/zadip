/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,

  headers: async () => [
    {
      source: "/:all*(svg|jpg|png)",
      locale: false,
      headers: [
        { key: "Cache-control", value: "public, immutable, max-age=31536000" },
      ],
    },
  ],

  i18n: {
    locales: ["ar", "en"],
    defaultLocale: "ar",
    localeDetection: false,
  },
  trailingSlash: true,
};

module.exports = nextConfig;
