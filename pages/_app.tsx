import "../styles/globals.css";
import * as React from "react";
import type { ReactElement, ReactNode } from "react";
import type { NextPage, NextPageContext } from "next";
import type { AppContext, AppProps } from "next/app";
import Head from "next/head";
import theme from "../global/theme";
import { useRouter } from "next/router";
import { ThemeProvider } from "styled-components";
import i18n from "../i18n";
export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};
interface Props extends AppProps {
  translations?:
    | typeof import("../locales/ar").default
    | typeof import("../locales/en").default;
  locale: string;
}
type AppPropsWithLayout = Props & {
  Component: NextPageWithLayout;
};
const MyApp = ({
  Component,
  pageProps,
  translations,
  locale,
}: AppPropsWithLayout) => {
  const getLayout = Component.getLayout ?? ((page) => page);
  theme.direction = locale === "ar" ? "rtl" : "ltr";
  // @ts-ignore
  theme.translations = translations;
  theme.isLTR = locale === "en-US" || locale === "en";
  theme.isRTL = locale === "ar";
  theme.locale = locale === "en-US" || locale === "en" ? "en" : "ar";

  React.useEffect(() => {
    i18n.changeLanguage(locale);
    if (window?.innerWidth <= 600) {
      theme.device = "mobile";
    } else {
      theme.device = "desktop";
    }
  }),
    [];
  return getLayout(
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="icon"
          href="https://www.zadip.com/en/favicons/favicon_96x96.png"
        />
      </Head>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
};
MyApp.getInitialProps = async ({ router }: AppContext) => {
  const { locale } = router;
  const { default: arLocalStrings } = await import("../locales/ar");
  const { default: enLocalStrings } = await import("../locales/en");
  const translations = locale === "ar" ? arLocalStrings : enLocalStrings;
  return { translations, locale };
};
export default MyApp;
