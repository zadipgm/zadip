import HeadTagComponent from "comonents/DashboardComponents/HeadTagComponent";
import Layout from "comonents/DashboardComponents/Layouts/PageLayout";
import type { ReactElement } from "react";

import type { NextPageWithLayout } from "../_app";
const Page: NextPageWithLayout = () => {
  return <HeadTagComponent />;
};
Page.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Page;
