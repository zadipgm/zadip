import type { ReactElement } from "react";
import Layout from "../../../comonents/Layouts/PageLayout";
import ProductSubCategory from "../../../comonents/ProductPageComponents/ProductSubCategory";
import { NextPageWithLayout } from "../../_app";

const Page: NextPageWithLayout = () => {
  return <ProductSubCategory />;
};

Page.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Page;
