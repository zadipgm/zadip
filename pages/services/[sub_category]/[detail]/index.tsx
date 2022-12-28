import type { ReactElement } from "react";
import Layout from "../../../../comonents/Layouts/PageLayout";
import { TechmicalSpecsMainPage } from "../../../../comonents/ReuseAbleComponents/TechnicalSpecifications/styled.components";
import ServicesDetail from "../../../../comonents/ServicesPageComponents/ServicesDetails";
import { NextPageWithLayout } from "../../../_app";

const Page: NextPageWithLayout = () => {
  return (
    <TechmicalSpecsMainPage>
      <ServicesDetail page={"muaref"} />
    </TechmicalSpecsMainPage>
  );
};

Page.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Page;
