import Layout from "comonents/DashboardComponents/Layouts/PageLayout";
import type { ReactElement } from "react";

import type { NextPageWithLayout } from "../../_app";
import Certificate from "comonents/DashboardComponents/Certificate";
const Page: NextPageWithLayout = () => {
  return <Certificate />;
};
Page.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Page;
