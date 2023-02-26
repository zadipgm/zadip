import * as React from "react";
import Layout from "../../comonents/Layouts/PageLayout";
import { NextPageWithLayout } from "../_app";
import type { ReactElement } from "react";
import PrivacyPolicy from "comonents/Privacy Policy";
const Page: NextPageWithLayout = () => {
  return <PrivacyPolicy />;
};

Page.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};
export default Page;
