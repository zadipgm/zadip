/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  i18n: {
    locales: ["ar", "en"],
    defaultLocale: "ar",
    localeDetection: false,
  },
  trailingSlash: true,
  experimental: {
    fontLoaders: [
      { loader: "@next/font/google", options: { subsets: ["arabic"] } },
    ],
  },
};

module.exports = nextConfig;
