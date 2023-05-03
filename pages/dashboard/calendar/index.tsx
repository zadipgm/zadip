import Layout from "comonents/DashboardComponents/Layouts/PageLayout";
import type { ReactElement } from "react";

import type { NextPageWithLayout } from "../../_app";
import Calendar from "comonents/DashboardComponents/Calendar";
const Page: NextPageWithLayout = () => {
  return <Calendar />;
};
Page.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Page;
