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
import { useTranslation } from "react-i18next";
import Links from "@mui/material/Link";
const ServicesMainCategory = () => {
  const { t } = useTranslation();
  const breadcrumbs = [
    <Links underline="hover" key="1" color="inherit" href="/">
      {t("home")}
    </Links>,
    <Typography key="3" color="text.primary" style={{ color: "#fff" }}>
      {t("services")}
    </Typography>,
  ];
  return (
    <ServicesMainContainer>
      <ServicesMainHeader>
        <Title>{t("services")}</Title>
        <Breadcrumb color="#fff" breadcrumbs={breadcrumbs} />
      </ServicesMainHeader>
      <CardComponent cardData={servicesData.main_services} />
    </ServicesMainContainer>
  );
};
export default ServicesMainCategory;
