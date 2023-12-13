import * as React from "react";
import Layout from "../../comonents/Layouts/PageLayout";
import { NextPageWithLayout } from "../_app";
import type { ReactElement } from "react";
import AboutUS from "../../comonents/AboutUS";
import EktefaForm from "comonents/EktefaForm";
const Page: NextPageWithLayout = () => {
  return <EktefaForm />;
};

Page.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};
export default Page;
