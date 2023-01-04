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
import { useTheme } from "styled-components";
import { useTranslation } from "react-i18next";
const ProductSubCategory = () => {
  const { locale } = React.useContext(LocaleContext);
  const router = useRouter();
  const { t } = useTranslation();
  const breadcrumbs = [
    <Links underline="hover" key="1" color="inherit" href="/">
      {t("home")}
    </Links>,
    <Links
      underline="hover"
      key="2"
      color="inherit"
      href={`/${locale}/products`}
    >
      {t("products")}
    </Links>,
    <Typography key="3" color="text.primary" style={{ color: "#fff" }}>
      {(router.query?.sub_category as string)?.replaceAll("_", " ")}
    </Typography>,
  ];
  const query = router?.query?.type;
  const filteredProducts = productData.all.filter(
    (item) => item.type === query
  );
  const main_category = filteredProducts[0];
  const { isLTR } = useTheme();
  return (
    <ProductSubCategoryContainer bgimage={main_category?.main_image}>
      <ProductSubCategoryWrapper>
        <ProductBreadcrumbWrapper>
          <Breadcrumb color={"#fff"} breadcrumbs={breadcrumbs} />
        </ProductBreadcrumbWrapper>
        <AnimationBar
          title={
            isLTR ? main_category?.main_title_en : main_category?.main_title_ar
          }
          icon={main_category?.icon}
          color={"#fff"}
          description={t("featureDescription")}
          headingColor={"#fff"}
          descriptionColor={"#fff"}
        />
        <SubCategory sub_categories={filteredProducts} page={"products"} />
      </ProductSubCategoryWrapper>
    </ProductSubCategoryContainer>
  );
};
export default ProductSubCategory;
