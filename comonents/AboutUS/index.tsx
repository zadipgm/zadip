import * as React from "react";
import Breadcrumb from "../ReuseAbleComponents/Breadcrumb";
import {
  AboutUsContainer,
  BreadCrumbWrapper,
  Title,
  AboutCompanyWrapper,
  AboutusDescription,
  DesWrapper,
} from "./styled.components";
import Typography from "@mui/material/Typography";
import Links from "@mui/material/Link";
import AnimationBar from "../ReuseAbleComponents/AnimationBar/AnimationBar";
import { useTheme } from "styled-components";
import OurPartnerSection from "../homePageComponents/OurPartnerSection";
import ListComponent from "../ReuseAbleComponents/ListComponent";
import list from "../../DataLayer/list.json";
const AboutUS = () => {
  const { translations, device, colors } = useTheme();
  const breadcrumbs = [
    <Links underline="hover" key="1" color={colors.lightBlue} href="/">
      {translations?.home}
    </Links>,
    <Typography
      key="3"
      color="text.primary"
      style={{ color: colors.lightBlue }}
    >
      {translations?.aboutUs}
    </Typography>,
  ];
  return (
    <AboutUsContainer>
      <BreadCrumbWrapper>
        <Title>{translations?.aboutUs}</Title>
        <Breadcrumb color={""} breadcrumbs={breadcrumbs} />
      </BreadCrumbWrapper>
      <AnimationBar
        title={translations?.abouttheCompany}
        description={""}
        headingColor={colors.lightBlue}
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
        <img
          src="/images/abouts-side-svg.webp"
          alt="about-img"
          width={device === "desktop" ? "50%" : "100%"}
          height={"100%"}
        />
      </AboutCompanyWrapper>
      <AnimationBar
        title={translations?.ourGoal}
        description={""}
        headingColor={colors.lightBlue}
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
