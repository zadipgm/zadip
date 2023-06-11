import type { ReactElement } from "react";
import Layout from "../comonents/Layouts/PageLayout/index";
import type { NextPageWithLayout } from "./_app";
import ErrorPage from "comonents/ErrorPage";
const Page: NextPageWithLayout = () => {
  return <ErrorPage />;
};
Page.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Page;
