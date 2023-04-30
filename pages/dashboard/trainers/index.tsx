import * as React from "react";
import type { ReactElement } from "react";
import { NextPageWithLayout } from "pages/_app";
import Layout from "comonents/DashboardComponents/Layouts/PageLayout";
import Trainer from "comonents/DashboardComponents/Trainers";
const Page: NextPageWithLayout = () => {
  return <Trainer />;
};
Page.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Page;
