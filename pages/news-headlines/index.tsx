import * as React from "react";
import Layout from "../../comonents/Layouts/PageLayout";
import ProductCategories from "../../comonents/ProductPageComponents/ProductMainCategories";
import { NextPageWithLayout } from "../_app";
import type { ReactElement } from "react";
import News from "../../comonents/News";
const Page: NextPageWithLayout = () => {
  return <News />;
};

Page.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};
export default Page;
