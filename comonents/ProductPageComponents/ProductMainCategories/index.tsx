import * as React from "react";
import {
  ProductCategoriesContainer,
  ProductCategoriesHeader,
  Title,
  LoadMoreButton,
} from "./styled.comonents";
import Typography from "@mui/material/Typography";
import Links from "@mui/material/Link";
import productData from "../../../DataLayer/product.json";
import Breadcrumb from "../../ReuseAbleComponents/Breadcrumb";
import CardComponent from "../../ReuseAbleComponents/CardComponent";
const ProductCategories = () => {
  const breadcrumbs = [
    <Links underline="hover" key="1" color="inherit" href="/">
      Home
    </Links>,
    <Typography key="3" color="text.primary" style={{ color: "#fff" }}>
      Products
    </Typography>,
  ];
  const imagePerRow = 6;
  const [next, setNext] = React.useState(imagePerRow);
  const handleMoreImage = () => {
    setNext(next + imagePerRow);
  };
  return (
    <>
      <ProductCategoriesContainer>
        <ProductCategoriesHeader>
          <Title>Products</Title>
          <Breadcrumb color="#fff" breadcrumbs={breadcrumbs} />
        </ProductCategoriesHeader>
        <CardComponent cardData={productData.main_products.slice(0, next)} />
        {next < productData.all.length ||
        next < productData.surveillance.length ||
        next < productData.access_control.length ||
        next < productData.building_management.length ? (
          <LoadMoreButton onClick={handleMoreImage}>Load More</LoadMoreButton>
        ) : (
          ""
        )}
      </ProductCategoriesContainer>
    </>
  );
};
export default ProductCategories;
