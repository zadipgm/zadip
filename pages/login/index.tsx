import type { ReactElement } from "react";
import Layout from "../../comonents/Layouts/PageLayout";

import LogIn from "../../comonents/Login";
import { NextPageWithLayout } from "../_app";

const Page: NextPageWithLayout = () => {
  return <LogIn />;
};

Page.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Page;
