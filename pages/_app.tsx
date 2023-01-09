import "../styles/globals.css";
import * as React from "react";
import type { ReactElement, ReactNode } from "react";
import type { NextPage } from "next";
import type { AppProps } from "next/app";
import Head from "next/head";
import { Cairo } from "@next/font/google";
import theme from "../global/theme";
import { useRouter } from "next/router";
import { ThemeProvider } from "styled-components";
export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

const MyApp = ({ Component, pageProps }: AppPropsWithLayout) => {
  const router = useRouter();
  const { locale } = router;
  const getLayout = Component.getLayout ?? ((page) => page);
  const arLocalStrings = import("../locales/ar");
  const enLocalStrings = import("../locales/en");

  const translations = locale === "ar" ? arLocalStrings : enLocalStrings;
  theme.direction = locale === "ar" ? "rtl" : "ltr";
  // @ts-ignore
  theme.translations = translations;
  theme.isLTR = locale === "en-US";
  theme.isRTL = locale === "ar";
  theme.locale = locale === "en-US" ? "en-US" : "ar";

  return getLayout(
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          rel="icon"
          href="https://www.zadip.com/en/favicons/favicon_96x96.png"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Cairo"
          rel="stylesheet"
        ></link>
      </Head>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
};
export default MyApp;
