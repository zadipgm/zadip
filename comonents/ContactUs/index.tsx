import * as React from "react";
import { useTranslation } from "react-i18next";
import { useTheme } from "styled-components";
import Typography from "@mui/material/Typography";
import Links from "@mui/material/Link";
import { AboutHeading, BreadCrumbWrapper } from "../AboutUS/styled.components";
import Breadcrumb from "../ReuseAbleComponents/Breadcrumb";
import {
  Container,
  OrderWrapper,
  IconWrapper,
  LocationLink,
  MainWrapper,
  Text,
  Wrapper,
} from "./styled.components";
import OrderNowForm from "../ReuseAbleComponents/OrderNowForm";
import LocationSvg from "../../public/icons/locationSvg";
import PhoneSvg from "../../public/icons/phoneSvg";
import EmailSvg from "../../public/icons/emailSvg";
import AnimationBar from "../ReuseAbleComponents/AnimationBar/AnimationBar";
import SimpleGoogleMap from "../SimpleGoogleMap";
const ContactUs = () => {
  const { t } = useTranslation();
  const { isLTR } = useTheme();
  const breadcrumbs = [
    <Links underline="hover" key="1" color="#0196e3" href="/">
      {t("home")}
    </Links>,
    <Typography key="3" color="text.primary" style={{ color: "#0196e3" }}>
      {t("Contact Us")}
    </Typography>,
  ];
  return (
    <Wrapper>
      <BreadCrumbWrapper>
        <AboutHeading>{t("Contact Us")}</AboutHeading>
        <Breadcrumb color={""} breadcrumbs={breadcrumbs} />
      </BreadCrumbWrapper>
      <AnimationBar
        description={`${t("contactusDescription")}`}
        title={`${t("letusaddValue")}`}
        headingColor={"#2193b0"}
        descriptionColor={"#737c85"}
        fontSize={"18px"}
      />
      <Container>
        <MainWrapper>
          <IconWrapper className="icons">
            <LocationSvg fill="#fff" width="40px" height="40px" />
          </IconWrapper>
          <Text>
            {isLTR ? " Adress:" : "العنوان:"}
            <LocationLink
              href="https://goo.gl/maps/v3MgU1yH4p12"
              target={"_blank"}
            >
              {isLTR
                ? " Prince Fahad Bin Ibrahim Al-Saud Road, Malaz, Riyadh"
                : " شارع الامير فهد بن ابراهيم - الملز - الرياض "}
            </LocationLink>
          </Text>
        </MainWrapper>
        <MainWrapper>
          <IconWrapper className="icons">
            <PhoneSvg fill="#fff" width="40px" height="40px" />
          </IconWrapper>
          <Text>
            {isLTR ? " Phone Number:" : "رقم التليفون:"}
            <LocationLink href="tel://920010047">920010047</LocationLink>|
            <a href="tel://+966-11-4747771">+966-11-4776526</a>
          </Text>
        </MainWrapper>
        <MainWrapper>
          <IconWrapper className="icons">
            <EmailSvg fill="#fff" width="40px" height="40px" />
          </IconWrapper>
          <Text>
            {isLTR ? "Email Address:" : " عنوان البريد الالكترونى:"}
            <LocationLink href="mailto:info@zadip.com">
              info@zadip.com
            </LocationLink>
            |<a href="mailto:it@zadip.com">it@zadip.com</a>
          </Text>
        </MainWrapper>
      </Container>
      <OrderWrapper>
        <OrderNowForm
          title={isLTR ? "Contact Sales Now" : "اتصل بالمبيعات الآن"}
          buttonTitle={t("send")}
          isShow={false}
          classname={"contact-us"}
        />
      </OrderWrapper>
      {/* <SimpleGoogleMap lat={12} long={12} /> */}
    </Wrapper>
  );
};
export default ContactUs;
