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
import CardComponent from "../../ReuseAbleComponents/CardComponent";
import { useTheme } from "styled-components";
const ProductCategories = () => {
  const { translations } = useTheme();
  const breadcrumbs = [
    <Links underline="hover" key="1" color="inherit" href="/">
      {translations?.home}
    </Links>,
    <Typography key="3" color="text.primary" style={{ color: "#fff" }}>
      {translations?.products}
    </Typography>,
  ];
  return (
    <>
      <ProductCategoriesContainer>
        <ProductCategoriesHeader>
          <Title>{translations?.products}</Title>
          <Breadcrumb color="#fff" breadcrumbs={breadcrumbs} />
        </ProductCategoriesHeader>
        <CardComponent cardData={productData.main_products} />
      </ProductCategoriesContainer>
    </>
  );
};
export default ProductCategories;
