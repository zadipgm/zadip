import Layout from "comonents/DashboardComponents/Layouts/PageLayout";
import type { ReactElement } from "react";

import GenerateCertificate from "comonents/DashboardComponents/Certificate/generate";
import { NextPageWithLayout } from "pages/_app";
const Page: NextPageWithLayout = () => {
  return <GenerateCertificate />;
};
Page.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Page;
