import type { ReactElement } from "react";
import Layout from "../components/Layouts/PageLayout/index";
import HomePage from "../components/home/index";
import type { NextPageWithLayout } from "./_app";
import SideNavBar from "@/components/SideNavBar";
const Page: NextPageWithLayout = () => {
  return <HomePage />;
};
Page.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Page;
