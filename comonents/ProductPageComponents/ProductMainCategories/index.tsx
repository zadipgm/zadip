import * as React from "react";
import {
  ProductCategoriesContainer,
  ProductCategoriesHeader,
  Title,
} from "./styled.comonents";
import Typography from "@mui/material/Typography";
import Links from "@mui/material/Link";
import productData from "../../../DataLayer/product.json";
import Breadcrumb from "../../ReuseAbleComponents/Breadcrumb";
import { useTranslation } from "react-i18next";
import CardComponent from "../../ReuseAbleComponents/CardComponent";
const ProductCategories = () => {
  const { t } = useTranslation();
  const breadcrumbs = [
    <Links underline="hover" key="1" color="inherit" href="/">
      {t("home")}
    </Links>,
    <Typography key="3" color="text.primary" style={{ color: "#fff" }}>
      {t("products")}
    </Typography>,
  ];
  return (
    <>
      <ProductCategoriesContainer>
        <ProductCategoriesHeader>
          <Title>{t("products")}</Title>
          <Breadcrumb color="#fff" breadcrumbs={breadcrumbs} />
        </ProductCategoriesHeader>
        <CardComponent cardData={productData.main_products} />
      </ProductCategoriesContainer>
    </>
  );
};
export default ProductCategories;
