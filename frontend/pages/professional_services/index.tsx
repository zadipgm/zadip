import * as React from "react";
import Layout from "../../comonents/Layouts/PageLayout";
import { NextPageWithLayout } from "../_app";
import type { ReactElement } from "react";
import ProfessionalServices from "../../comonents/ProfessionalServices";
const Page: NextPageWithLayout = () => {
  return <ProfessionalServices />;
};

Page.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};
export default Page;
