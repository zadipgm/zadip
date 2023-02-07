import * as React from "react";
import Layout from "../../comonents/Layouts/PageLayout";
import { NextPageWithLayout } from "../_app";
import type { ReactElement } from "react";
import OurClientsAndPartners from "../../comonents/AboutUS/OurClientsAndPartners";
const Page: NextPageWithLayout = () => {
  return <OurClientsAndPartners />;
};

Page.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};
export default Page;
