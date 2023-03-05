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
  Page_Title: string;
  Meta_Name: string;
  Meta_Description: string;
  Meta_Property: string;
  Meta_Property_Description: string;
}
interface IData {
  data: IDataProps[];
}
const MyApp = ({
  Component,
  pageProps,
  translations,
  locale,
}: AppPropsWithLayout) => {
  const getLayout = Component.getLayout ?? ((page) => page);
  const [data, setData] = React.useState<IDataProps[]>();
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

  if (router.asPath === "/") {
    path = "home";
  }
  if (router.asPath === "/muaref/") {
    path = "muaref";
  }
  if (router.asPath === "/professional_services/") {
    path = "professional services";
  }
  if (router.asPath === "/client_partners/") {
    path = "client partners";
  }
  if (router.asPath === "/about-us/") {
    path = "about us";
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

  React.useEffect(() => {
    console.log("here is process", process.env.NODE_ENV);
    setLoading(true);
    const fetchItem = async () => {
      try {
        const response = await axios.get("https://api.zadip.sa/get_head", {
          params: {
            page: `${path}`,
          },
        });
        setData(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchItem();
  }, []);
  const handlePageMeta = () => {
    return (
      data &&
      data.map((item, index) => {
        return (
          <>
            {item.Page_Title.length > 0 && <title>{item.Page_Title}</title>}
            {item.Meta_Name.length > 0 && item.Meta_Description.length > 0 && (
              <meta name={item.Meta_Name} content={item.Meta_Description} />
            )}
            {item.Meta_Property.length > 0 &&
              item.Meta_Property_Description.length > 0 && (
                <meta
                  property={item.Meta_Property}
                  content={item.Meta_Property_Description}
                />
              )}
          </>
        );
      })
    );
  };
  return getLayout(
    <>
      <Head>
        <meta
          name="viewport"
          key="viewport"
          content="width=device-width, height=device-height ,initial-scale=1.0, shrink-to-fit=no"
        />

        {handlePageMeta()}
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
