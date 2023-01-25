import * as React from "react";
import { useTheme } from "styled-components";
import { BreadCrumbWrapper, Container, Heading } from "./styled.components";
import Typography from "@mui/material/Typography";
import Links from "@mui/material/Link";
import Breadcrumb from "../ReuseAbleComponents/Breadcrumb";
import AnimationBar from "../ReuseAbleComponents/AnimationBar/AnimationBar";
import OrderNowForm from "../ReuseAbleComponents/OrderNowForm";
import OurPartnerSection from "../homePageComponents/OurPartnerSection";
import ListComponent from "../ReuseAbleComponents/ListComponent";
import list from "../../DataLayer/list.json";
const ProfessionalServices = () => {
  const { isLTR, translations } = useTheme();
  const breadcrumbs = [
    <Links underline="hover" key="1" color="#0196e3" href="/">
      {translations?.home}
    </Links>,
    <Typography key="3" color="text.primary" style={{ color: "#0196e3" }}>
      {translations?.proservicesTitle}
    </Typography>,
  ];
  return (
    <Container>
      <BreadCrumbWrapper>
        <Heading>{translations?.proservicesTitle}</Heading>
        <Breadcrumb color={""} breadcrumbs={breadcrumbs} />
      </BreadCrumbWrapper>
      <AnimationBar
        title={translations?.projects_it}
        description={translations?.proServicesDescription as string}
        headingColor={"#2193b0"}
        descriptionColor={"#737c85;"}
        fontSize={"16px"}
      />
      <ListComponent list={list.professional_list} />
      <OrderNowForm
        title={translations?.contactsalesnow as string}
        buttonTitle={translations?.contactsalesnow as string}
        icon={"salesSvg"}
      />
      <OurPartnerSection
        title={translations?.ourClientsandPartners as string}
      />
    </Container>
  );
};
export default ProfessionalServices;
