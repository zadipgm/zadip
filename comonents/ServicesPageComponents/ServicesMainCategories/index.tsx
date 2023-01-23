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
import { useTheme } from "styled-components";
const ServicesMainCategory = () => {
  const { translations } = useTheme();
  const breadcrumbs = [
    <Links underline="hover" key="1" color="inherit" href="/">
      {translations?.home}
    </Links>,
    <Typography key="3" color="text.primary" style={{ color: "#fff" }}>
      {translations?.services}
    </Typography>,
  ];
  return (
    <ServicesMainContainer>
      <ServicesMainHeader>
        <Title>{translations?.services}</Title>
        <Breadcrumb color="#fff" breadcrumbs={breadcrumbs} />
      </ServicesMainHeader>
      <CardComponent cardData={servicesData.main_services} />
    </ServicesMainContainer>
  );
};
export default ServicesMainCategory;
