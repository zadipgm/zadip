import type { ReactElement } from "react";
import * as React from "react";

import { NextPageWithLayout } from "pages/_app";
import FormsDetails from "comonents/DashboardComponents/FormsDetails";
import Layout from "comonents/DashboardComponents/Layouts/PageLayout";
const Page: NextPageWithLayout = () => {
  return <FormsDetails />;
};
Page.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Page;
