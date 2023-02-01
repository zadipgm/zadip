import HomePage from "../comonents/homePageComponents";
import type { ReactElement } from "react";
import Layout from "../comonents/Layouts/PageLayout/index";
import type { NextPageWithLayout } from "./_app";
const Page: NextPageWithLayout = () => {
  return <HomePage />;
};
Page.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Page;
