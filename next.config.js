/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  i18n: {
    locales: ["ar", "en"],
    defaultLocale: "ar",
    localeDetection: false,
    domains: [
      {
        domain: "http://localhost:3000/",
        defaultLocale: "en",
      },
      {
        domain: "http://localhost:3000/",
        defaultLocale: "ar",
      },
    ],
  },
  trailingSlash: true,
  experimental: {
    fontLoaders: [
      { loader: "@next/font/google", options: { subsets: ["arabic"] } },
    ],
  },
};

module.exports = nextConfig;
