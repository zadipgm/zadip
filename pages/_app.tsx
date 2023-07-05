import "../styles/globals.css";
import * as React from "react";
import type { ReactElement, ReactNode } from "react";
import type { NextPage } from "next";
import type { AppContext, AppProps } from "next/app";
import theme from "../global/theme";
import { ThemeProvider } from "styled-components";
export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};
interface Props extends AppProps {
  translations?:
    | typeof import("../locales/ar").default
    | typeof import("../locales/en").default;
  locale: string;
  data: IDataProps[];
}
type AppPropsWithLayout = Props & {
  Component: NextPageWithLayout;
};
interface IDataProps {
  id: number;
  Page_Title: string;
  Meta_Description: string;
  Meta_Keyword_Description: string;
  Meta_og_title: string;
  Meta_og_description: string;
  Meta_og_image: string;
  Page_Name: string;
}
interface IAllPageSeoProps {
  all_page_content: string;
}
const MyApp = ({
  Component,
  pageProps,
  translations,
  locale,
}: AppPropsWithLayout) => {
  const getLayout = Component.getLayout ?? ((page) => page);
  // @ts-ignore
  theme.translations = translations;
  theme.isLTR = locale === "en-US" || locale === "en";
  theme.isRTL = locale === "ar";
  theme.locale = locale === "en-US" || locale === "en" ? "en" : "ar";
  React.useEffect(() => {
    if (window?.innerWidth <= 600) {
      theme.device = "mobile";
    }
    if (window?.innerWidth >= 600 && window?.innerWidth <= 1024) {
      theme.device = "tablet";
    }
    if (window?.innerWidth >= 1024) {
      theme.device = "desktop";
    }
  }, []);

  return getLayout(
    <>
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
  let path: string;

  if (router.asPath === "/" || router.asPath === "") {
    path = "home";
  }
  if (router.asPath === "/muaref/") {
    path = "muaref";
  }
  if (router.asPath === "/professional_services/") {
    path = "professional_services";
  }
  if (router.asPath === "/client_partners/") {
    path = "client_partners";
  }
  if (router.asPath === "/about-us/") {
    path = "about_us";
  }
  if (router.asPath === "/recruitment/") {
    path = "recruitment";
  }
  if (router.asPath === "/eGov_services/tam/") {
    path = "tam";
  }
  if (router.asPath === "/eGov_services/muqeem/") {
    path = "muqeem";
  }
  if (router.asPath === "/eGov_services/masarat/") {
    path = "masarat";
  }
  if (router.asPath === "/eGov_services/smartgate/") {
    path = "smartgate";
  }
  let APP_URL =
    process.env.NODE_ENV === "development"
      ? "http://localhost:5000"
      : "https://api.zadip.sa";
  const res = await fetch(`${APP_URL}/get_head?page=${path}`);
  const data = await res.json();
  const resAllpagesScript = await fetch(`${APP_URL}/get_all`);
  const allPagesScript = await resAllpagesScript.json();
  return { translations, locale, data, allPagesScript };
};
export default MyApp;
