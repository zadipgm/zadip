import { useRouter } from "next/router";
import type { ReactElement } from "react";
import Layout from "../../../../comonents/Layouts/PageLayout";
import ProductDetails from "../../../../comonents/ProductPageComponents/ProductDetails";
import { NextPageWithLayout } from "../../../_app";
import { TechnicalSpecsMainPage } from "../../styled.components";
import detailsPageData from "../../../../DataLayer/product.json";

const Page: NextPageWithLayout = () => {
  const router = useRouter();
  const query = router?.query?.sub_category;
  const data = detailsPageData.all.filter((item) =>
    item.link.includes(query as string)
  );
  return (
    <TechnicalSpecsMainPage>
      <ProductDetails />
    </TechnicalSpecsMainPage>
  );
};

Page.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Page;
