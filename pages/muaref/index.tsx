import * as React from "react";
import Layout from "../../comonents/Layouts/PageLayout";
import { NextPageWithLayout } from "../_app";
import type { ReactElement } from "react";
import ContactUs from "../../comonents/ContactUs";
import MuarefPage from "../../comonents/Muaref";
const Page: NextPageWithLayout = () => {
  return <MuarefPage />;
};

Page.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};
export default Page;
