import * as React from "react";
import type { ReactElement } from "react";
import { NextPageWithLayout } from "pages/_app";
import Layout from "comonents/DashboardComponents/Layouts/PageLayout";
import Ratings from "comonents/DashboardComponents/Ratings";
const Page: NextPageWithLayout = () => {
  return <Ratings />;
};
Page.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Page;
