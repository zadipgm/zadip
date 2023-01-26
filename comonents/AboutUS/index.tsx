import * as React from "react";
import Breadcrumb from "../ReuseAbleComponents/Breadcrumb";
import {
  AboutUsContainer,
  BreadCrumbWrapper,
  AboutHeading,
  AboutCompanyWrapper,
  AboutusDescription,
  DesWrapper,
  Title,
} from "./styled.components";
import Typography from "@mui/material/Typography";
import Links from "@mui/material/Link";
import AnimationBar from "../ReuseAbleComponents/AnimationBar/AnimationBar";
import { useTheme } from "styled-components";
import OurPartnerSection from "../homePageComponents/OurPartnerSection";
import ListComponent from "../ReuseAbleComponents/ListComponent";
import list from "../../DataLayer/list.json";
const AboutUS = () => {
  const { translations } = useTheme();
  const breadcrumbs = [
    <Links underline="hover" key="1" color="#0196e3" href="/">
      {translations?.home}
    </Links>,
    <Typography key="3" color="text.primary" style={{ color: "#0196e3" }}>
      {translations?.aboutUs}
    </Typography>,
  ];
  return (
    <AboutUsContainer>
      <BreadCrumbWrapper>
        <AboutHeading>{translations?.aboutUs}</AboutHeading>
        <Breadcrumb color={""} breadcrumbs={breadcrumbs} />
      </BreadCrumbWrapper>
      <AnimationBar
        title={translations?.abouttheCompany}
        description={""}
        headingColor={"#2193b0"}
        descriptionColor={"#737c85;"}
        fontSize={"16px"}
      />
      <AboutCompanyWrapper>
        <DesWrapper>
          <AboutusDescription
            dangerouslySetInnerHTML={{
              __html: translations?.aboutUsDescription as string,
            }}
          ></AboutusDescription>
        </DesWrapper>
        <img src="/images/abouts-side-svg.svg" alt="about-img" width={"50%"} />
      </AboutCompanyWrapper>
      <AnimationBar
        title={translations?.ourGoal}
        description={""}
        headingColor={"#2193b0"}
        descriptionColor={"#737c85;"}
        fontSize={"16px"}
      />
      <ListComponent list={list.about_list} />
      <OurPartnerSection
        title={translations?.ourClientsandPartners as string}
      />
    </AboutUsContainer>
  );
};
export default AboutUS;
