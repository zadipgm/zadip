/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  i18n: {
    locales: ["en-US", "ar"],
    defaultLocale: "en-US",
    localeDetection: true,

    domains: [
      {
        domain: "http://localhost:3000/",
        defaultLocale: "en-US",
      },
      {
        domain: "http://localhost:3000/",
        defaultLocale: "ar",
      },
    ],
  },
  experimental: {
    fontLoaders: [
      { loader: "@next/font/google", options: { subsets: ["arabic"] } },
    ],
  },
};

module.exports = nextConfig;
