import type { ReactElement } from "react";
import EGovernmentServices from "../../../comonents/EGovernmentServices";
import { EGovernmentServicesMainPage } from "../../../comonents/EGovernmentServices/styled.components";
import Layout from "../../../comonents/Layouts/PageLayout";
import { NextPageWithLayout } from "../../_app";

const Page: NextPageWithLayout = () => {
  return (
    <EGovernmentServicesMainPage>
      <EGovernmentServices />
    </EGovernmentServicesMainPage>
  );
};

Page.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Page;
