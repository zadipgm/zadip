import * as React from "react";
import productData from "../../../DataLayer/product.json";
import AnimationBar from "../../ReuseAbleComponents/AnimationBar/AnimationBar";
import Breadcrumb from "../../ReuseAbleComponents/Breadcrumb";
import {
  ProductSubCategoryContainer,
  ProductSubCategoryWrapper,
  ProductBreadcrumbWrapper,
} from "./styled.components";
import Typography from "@mui/material/Typography";
import Links from "@mui/material/Link";
import { useRouter } from "next/router";
import LocaleContext from "../../../LocaleContext";
import SubCategory from "../../ReuseAbleComponents/SubCategories";
const ProductSubCategory = () => {
  const { locale } = React.useContext(LocaleContext);
  const router = useRouter();
  const breadcrumbs = [
    <Links underline="hover" key="1" color="inherit" href="/">
      Home
    </Links>,
    <Links
      underline="hover"
      key="2"
      color="inherit"
      href={`/${locale}/products`}
    >
      Products
    </Links>,
    <Typography key="3" color="text.primary" style={{ color: "#fff" }}>
      {router.query.sub_category}
    </Typography>,
  ];
  const filteredProducts = productData.all.filter(
    (item) => item.type === router.query.type
  );

  return (
    <ProductSubCategoryContainer>
      <ProductSubCategoryWrapper>
        <ProductBreadcrumbWrapper>
          <Breadcrumb color={"#fff"} breadcrumbs={breadcrumbs} />
        </ProductBreadcrumbWrapper>
        <AnimationBar
          title="survillence"
          icon={"survillenceSvg"}
          color={"#fff"}
          description="We have successfully tied partnerships with global leaders in technology, advertising and building frameworks harnessing best practices to enhance the dependability of our solutions and offerings."
          headingColor={"#fff"}
          descriptionColor={"#fff"}
        />
        <SubCategory sub_categories={filteredProducts} page={"products"} />
      </ProductSubCategoryWrapper>
    </ProductSubCategoryContainer>
  );
};
export default ProductSubCategory;
