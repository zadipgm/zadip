import type { ReactElement } from "react";
import * as React from "react";
import { NextPageWithLayout } from "pages/_app";
import FormsDetails from "comonents/DashboardComponents/FormsDetails";
import Layout from "comonents/DashboardComponents/Layouts/PageLayout";
import useSWR from "swr";
import { useFetcher } from "comonents/DashboardComponents/hooks/api/certificate";
const Page: NextPageWithLayout = () => {
  let APP_URL =
    process.env.NODE_ENV === "development"
      ? "http://localhost:5000"
      : "https://api.zadip.sa";
  let fetchurl = `${APP_URL}/get_zadipform` as RequestInfo | URL;
  const { data, error, isLoading } = useSWR(fetchurl, useFetcher);
  return <>{isLoading ? <h2>Loading...</h2> : <FormsDetails data={data} />}</>;
};
Page.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Page;
