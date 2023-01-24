import * as React from "react";
import { useTheme } from "styled-components";
import {
  BreadCrumbWrapper,
  Container,
  Heading,
  List,
  ListItem,
} from "./styled.components";
import Typography from "@mui/material/Typography";
import Links from "@mui/material/Link";
import Breadcrumb from "../ReuseAbleComponents/Breadcrumb";
import AnimationBar from "../ReuseAbleComponents/AnimationBar/AnimationBar";
import OrderNowForm from "../ReuseAbleComponents/OrderNowForm";
import OurPartnerSection from "../homePageComponents/OurPartnerSection";
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
      <List>
        <ListItem>
          {isLTR ? "Monitoring and control systems" : "أنظمة المراقبة والتحكم"}
        </ListItem>
        <ListItem>
          {isLTR
            ? "Fire fighting and alarm systems"
            : "أنظمة مكافحة الحريق والانذار"}
        </ListItem>
        <ListItem>
          {isLTR
            ? "Intelligent building management systems"
            : "أنظمة إدارة المباني الذكية"}
        </ListItem>
        <ListItem>
          {isLTR
            ? "Wired and wireless network systems"
            : "أنظمة الشبكات السلكية واللاسلكية"}
        </ListItem>
        <ListItem>
          {isLTR
            ? "Electrical installations of all kinds"
            : "التمديدات الكهربائية بأنواعها"}
        </ListItem>
        <ListItem>
          {isLTR
            ? "Communication extensions of all kinds"
            : "تمديدات الاتصالات بأنواعها"}
        </ListItem>
        <ListItem>
          {isLTR
            ? "Install and organize endpoints"
            : "تركيب وتنظيم النقاط الطرفية"}
        </ListItem>
        <ListItem>
          {isLTR
            ? "Supplies of all kinds of electronic devices"
            : "توريدات الأجهزة الالكترونية بأنواعها"}
        </ListItem>
        <ListItem>
          {isLTR
            ? "Hall and conference systems equipment"
            : "تجهيزات أنظمة القاعات والمؤتمرات"}
        </ListItem>
        <ListItem>
          {isLTR
            ? "IP exchange systems of all kinds"
            : "أنظمة سنترالات الاي بي بأنواعها"}
        </ListItem>
        <ListItem>
          {isLTR
            ? "Attendance, departure and fingerprint systems"
            : "أنظمة أجهزة الحضور والانصراف والبصمة"}
        </ListItem>
      </List>
      <OrderNowForm
        title={translations?.contactsalesnow as string}
        buttonTitle={translations?.contactsalesnow as string}
        icon={"salesSvg"}
      />
      <OurPartnerSection />
    </Container>
  );
};
export default ProfessionalServices;
