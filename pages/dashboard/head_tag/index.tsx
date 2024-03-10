import HeadTagComponent from "comonents/DashboardComponents/HeadTagComponent";
import Layout from "comonents/DashboardComponents/Layouts/PageLayout";
import type { ReactElement } from "react";

import type { NextPageWithLayout } from "../../_app";
import Cookies from "js-cookie";
import LoginPage from "pages/login";
const Page: NextPageWithLayout = () => {
  let token = Cookies.get("token");
  return (
    <>
      {token != "" || token !== undefined ? (
        <HeadTagComponent />
      ) : (
        <LoginPage />
      )}
      ;
    </>
  );
};
Page.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Page;
