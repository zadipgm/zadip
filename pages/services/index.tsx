import * as React from "react";
import Layout from "../../comonents/Layouts/PageLayout";
import { NextPageWithLayout } from "../_app";
import type { ReactElement } from "react";
import ServicesMainCategory from "../../comonents/ServicesPageComponents/ServicesMainCategories";
const Page: NextPageWithLayout = () => {
  return <ServicesMainCategory />;
};

Page.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};
export default Page;
