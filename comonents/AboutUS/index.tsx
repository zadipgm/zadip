import * as React from "react";
import Breadcrumb from "../ReuseAbleComponents/Breadcrumb";
import {
  AboutUsContainer,
  BreadCrumbWrapper,
  AboutHeading,
  AboutusList,
  AboutusListItem,
} from "./styled.components";
import Typography from "@mui/material/Typography";
import Links from "@mui/material/Link";
import AnimationBar from "../ReuseAbleComponents/AnimationBar/AnimationBar";
import { useTranslation } from "react-i18next";
import { useTheme } from "styled-components";
import OurPartnerSection from "../homePageComponents/OurPartnerSection";
import OrderNowForm from "../ReuseAbleComponents/OrderNowForm";

const AboutUS = () => {
  const { t } = useTranslation();
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
        title={translations?.projects_it}
        description={translations?.companySummry as string}
        headingColor={"#2193b0"}
        descriptionColor={"#737c85;"}
        fontSize={"16px"}
      />
      <AboutusList>
        <AboutusListItem>
          {isLTR ? "Monitoring and control systems" : "أنظمة المراقبة والتحكم"}
        </AboutusListItem>
        <AboutusListItem>
          {isLTR
            ? "Fire fighting and alarm systems"
            : "أنظمة مكافحة الحريق والانذار"}
        </AboutusListItem>
        <AboutusListItem>
          {isLTR
            ? "Intelligent building management systems"
            : "أنظمة إدارة المباني الذكية"}
        </AboutusListItem>
        <AboutusListItem>
          {isLTR
            ? "Wired and wireless network systems"
            : "أنظمة الشبكات السلكية واللاسلكية"}
        </AboutusListItem>
        <AboutusListItem>
          {isLTR
            ? "Electrical installations of all kinds"
            : "التمديدات الكهربائية بأنواعها"}
        </AboutusListItem>
        <AboutusListItem>
          {isLTR
            ? "Communication extensions of all kinds"
            : "تمديدات الاتصالات بأنواعها"}
        </AboutusListItem>
        <AboutusListItem>
          {isLTR
            ? "Install and organize endpoints"
            : "تركيب وتنظيم النقاط الطرفية"}
        </AboutusListItem>
        <AboutusListItem>
          {isLTR
            ? "Supplies of all kinds of electronic devices"
            : "توريدات الأجهزة الالكترونية بأنواعها"}
        </AboutusListItem>
        <AboutusListItem>
          {isLTR
            ? "Hall and conference systems equipment"
            : "تجهيزات أنظمة القاعات والمؤتمرات"}
        </AboutusListItem>
        <AboutusListItem>
          {isLTR
            ? "IP exchange systems of all kinds"
            : "أنظمة سنترالات الاي بي بأنواعها"}
        </AboutusListItem>
        <AboutusListItem>
          {isLTR
            ? "Attendance, departure and fingerprint systems"
            : "أنظمة أجهزة الحضور والانصراف والبصمة"}
        </AboutusListItem>
      </AboutusList>
      <OrderNowForm
        title={translations?.contactsalesnow as string}
        buttonTitle={translations?.contactsalesnow as string}
        icon={"salesSvg"}
      />
      <OurPartnerSection />
    </AboutUsContainer>
  );
};
export default AboutUS;
