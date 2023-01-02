import type { ReactElement } from "react";
import Layout from "../../../../comonents/Layouts/PageLayout";
import { TechnicalSpecsMainPage } from "../../../../comonents/ReuseAbleComponents/TechnicalSpecifications/styled.components";
import ServicesDetail from "../../../../comonents/ServicesPageComponents/ServicesDetails";
import { NextPageWithLayout } from "../../../_app";

const Page: NextPageWithLayout = () => {
  return (
    <TechnicalSpecsMainPage>
      <ServicesDetail page={"muaref"} />
    </TechnicalSpecsMainPage>
  );
};

Page.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Page;
