import type { ReactElement } from "react";

import type { NextPageWithLayout } from "../_app";
import ProfileComponent from "comonents/DashboardComponents/ProfileComponent";
import Layout from "comonents/DashboardComponents/Layouts/PageLayout";
const Page: NextPageWithLayout = () => {
  return <ProfileComponent />;
};
Page.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Page;
