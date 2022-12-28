import * as React from "react";
import CardComponent from "../../ReuseAbleComponents/CardComponent";
import {
  ServicesMainContainer,
  ServicesMainHeader,
  Title,
} from "./styled.components";
import servicesData from "../../../DataLayer/services.json";
import Breadcrumb from "../../ReuseAbleComponents/Breadcrumb";
import Typography from "@mui/material/Typography";
import Links from "@mui/material/Link";
import { LoadMoreButton } from "../../ProductPageComponents/ProductMainCategories/styled.comonents";
const ServicesMainCategory = () => {
  const imagePerRow = 6;
  const [next, setNext] = React.useState(imagePerRow);
  const handleMoreImage = () => {
    setNext(next + imagePerRow);
  };
  const breadcrumbs = [
    <Links underline="hover" key="1" color="inherit" href="/">
      Home
    </Links>,
    <Typography key="3" color="text.primary" style={{ color: "#fff" }}>
      Services
    </Typography>,
  ];
  return (
    <ServicesMainContainer>
      <ServicesMainHeader>
        <Title>Services</Title>
        <Breadcrumb color="#fff" breadcrumbs={breadcrumbs} />
      </ServicesMainHeader>
      <CardComponent cardData={servicesData.main_services.slice(0, next)} />
      <LoadMoreButton onClick={handleMoreImage}>Load More</LoadMoreButton>
    </ServicesMainContainer>
  );
};
export default ServicesMainCategory;
