import Layout from "comonents/DashboardComponents/Layouts/PageLayout";
import type { ReactElement } from "react";

import type { NextPageWithLayout } from "../../_app";
import Bookings from "comonents/DashboardComponents/Bookings";
const Page: NextPageWithLayout = () => {
  return <Bookings />;
};
Page.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Page;
