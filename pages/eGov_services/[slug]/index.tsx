import type { ReactElement } from "react";
import EGovernmentServices from "../../../comonents/EGovernmentServices";
import Layout from "../../../comonents/Layouts/PageLayout";
import { TechnicalSpecsMainPage } from "../../../comonents/ReuseAbleComponents/TechnicalSpecifications/styled.components";
import { NextPageWithLayout } from "../../_app";

const Page: NextPageWithLayout = () => {
  return (
    <TechnicalSpecsMainPage>
      <EGovernmentServices />
    </TechnicalSpecsMainPage>
  );
};

Page.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Page;
