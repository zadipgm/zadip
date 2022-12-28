import * as React from "react";
import Layout from "../../comonents/Layouts/PageLayout";
import ProductCategories from "../../comonents/ProductPageComponents/ProductMainCategories";
import { NextPageWithLayout } from "../_app";
import type { ReactElement } from "react";
const Page: NextPageWithLayout = () => {
  return <ProductCategories />;
};

Page.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};
export default Page;
