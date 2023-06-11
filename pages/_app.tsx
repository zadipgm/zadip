import "../styles/globals.css";
import * as React from "react";
import type { ReactElement, ReactNode } from "react";
import type { NextPage } from "next";
import type { AppContext, AppProps } from "next/app";
import Head from "next/head";
import theme from "../global/theme";
import { ThemeProvider } from "styled-components";
import axios from "axios";
import { useRouter } from "next/router";
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
  const [data, setData] = React.useState<IDataProps[]>([]);
  const [allPageData, setAllPageData] = React.useState<IAllPageSeoProps[]>([]);
  const [isLoading, setLoading] = React.useState(false);
  const router = useRouter();
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
  const fetchPageSeo = async () => {
    try {
      const response = await axios.get(`${APP_URL}/get_head`, {
        params: {
          page: `${path}`,
        },
      });
      setData(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  const fetchAllPageSeo = async () => {
    try {
      const response = await axios.get(`${APP_URL}/get_all`);
      setAllPageData(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  React.useEffect(() => {
    setLoading(true);
    fetchPageSeo();
    fetchAllPageSeo();
  }, []);
  return getLayout(
    <>
      <ThemeProvider theme={theme}>
        <Head>
          <meta
            name="viewport"
            key="viewport"
            content="width=device-width, height=device-height ,initial-scale=1.0, shrink-to-fit=no"
          />
          {data && (
            <>
              <title>{data[0]?.Page_Title}</title>
              <meta name="robots" content="index,follow" />
              <link href="https://zadip.sa" rel="canonical" />
              <meta name="description" content={data[0]?.Meta_Description} />
              <meta
                name="keywords"
                content={data[0]?.Meta_Keyword_Description}
              />
              <meta property="og:url" content="https://zadip.sa" />
              <meta property="og:site_name" content="zadip" />
              <meta property="og:title" content={data[0]?.Meta_og_title} />
              <meta
                property="og:description"
                content={data[0]?.Meta_og_description}
              />
              <meta property="og:type" content="website" />
              <meta property="og:image:alt" content="about zadip" />
              <meta property="og:image:type" content="image/png" />
              <meta property="og:image" content={data[0]?.Meta_og_image} />
              <meta property="og:image:width" content="1200" />
              <meta property="og:image:height" content="630" />
            </>
          )}
          <style
            dangerouslySetInnerHTML={{
              __html: allPageData[0]?.all_page_content,
            }}
          ></style>
        </Head>
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
