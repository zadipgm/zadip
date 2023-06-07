import Layout from "comonents/DashboardComponents/Layouts/PageLayout";
import type { ReactElement } from "react";
import useSWR from "swr";
import GenerateCertificate from "comonents/DashboardComponents/Certificate/generate";
import { NextPageWithLayout } from "pages/_app";
import { useFetcher } from "comonents/DashboardComponents/hooks/api/certificate";
const Page: NextPageWithLayout = () => {
  let APP_URL =
    process.env.NODE_ENV === "development"
      ? "http://localhost:5000"
      : "https://api.zadip.sa";
  let fetchurl = `${APP_URL}/users` as RequestInfo | URL;
  const { data, error, isLoading } = useSWR(fetchurl, useFetcher);
  return (
    <>
      {isLoading ? (
        <h2>Loading...</h2>
      ) : (
        <GenerateCertificate userData={data} />
      )}
    </>
  );
};
Page.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Page;
