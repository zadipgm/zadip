import type { ReactElement } from "react";
import Layout from "../../../comonents/Layouts/PageLayout";
import ProductSubCategory from "../../../comonents/ProductPageComponents/ProductSubCategory";
import ServicesCategory from "../../../comonents/ServicesPageComponents/ServicesSubCategory";
import { NextPageWithLayout } from "../../_app";

const Page: NextPageWithLayout = () => {
  return <ServicesCategory />;
};

Page.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Page;
