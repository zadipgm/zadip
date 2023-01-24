import * as React from "react";
import Breadcrumb from "../ReuseAbleComponents/Breadcrumb";
import {
  AboutUsContainer,
  BreadCrumbWrapper,
  AboutHeading,
  AboutCompanyWrapper,
  AboutusDescription,
  ImageWrapper,
  DesWrapper,
  Title,
  AboutusListItem,
  AboutusList,
} from "./styled.components";
import Typography from "@mui/material/Typography";
import Links from "@mui/material/Link";
import AnimationBar from "../ReuseAbleComponents/AnimationBar/AnimationBar";
import { useTheme } from "styled-components";
import OurPartnerSection from "../homePageComponents/OurPartnerSection";
import OrderNowForm from "../ReuseAbleComponents/OrderNowForm";

const AboutUS = () => {
  const { isLTR, translations } = useTheme();
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
        description={translations?.companySummry as string}
        headingColor={"#2193b0"}
        descriptionColor={"#737c85;"}
        fontSize={"16px"}
      />
      <AboutCompanyWrapper>
        <DesWrapper>
          <Title>{translations?.zadInfo}</Title>

          <AboutusDescription
            dangerouslySetInnerHTML={{
              __html: translations?.aboutUsDescription as string,
            }}
          ></AboutusDescription>
        </DesWrapper>
        <img src="/images/ektefa1.svg" alt="about-img" width={"50%"} />
      </AboutCompanyWrapper>
      <AnimationBar
        title={translations?.ourGoal}
        description={""}
        headingColor={"#2193b0"}
        descriptionColor={"#737c85;"}
        fontSize={"16px"}
      />
      <AboutusList>
        <AboutusListItem>
          {isLTR
            ? "We help our clients achieve their technical goals"
            : "نساعد عملاؤنا في تحقيق أهدافهم التقنية"}
        </AboutusListItem>
        <AboutusListItem>
          {isLTR
            ? "Carry out any work we do with accuracy and high quality"
            : "انجاز أي عمل نقوم به بدقة وجودة عالية"}
        </AboutusListItem>
        <AboutusListItem>
          {isLTR
            ? "To have added value in everything we offer"
            : "ان يكون هناك قيمة مضافة في كل ما نقدمه"}
        </AboutusListItem>
        <AboutusListItem>
          {isLTR
            ? "To create software technology products that serve the private and government sectors"
            : "ان نخلق منتجات تقنية برمجية تخدم القطاع الخاص والحكومي"}
        </AboutusListItem>
      </AboutusList>

      <OurPartnerSection />
    </AboutUsContainer>
  );
};
export default AboutUS;
