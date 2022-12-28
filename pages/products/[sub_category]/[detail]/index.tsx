import type { ReactElement } from "react";
import Layout from "../../../../comonents/Layouts/PageLayout";
import ProductDetails from "../../../../comonents/ProductPageComponents/ProductDetails";
import { TechmicalSpecsMainPage } from "../../../../comonents/ReuseAbleComponents/TechnicalSpecifications/styled.components";
import { NextPageWithLayout } from "../../../_app";

const Page: NextPageWithLayout = () => {
  return (
    <TechmicalSpecsMainPage>
      <ProductDetails />
    </TechmicalSpecsMainPage>
  );
};

Page.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Page;
