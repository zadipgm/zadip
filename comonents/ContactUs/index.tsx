import * as React from "react";
import { useTranslation } from "react-i18next";
import { useTheme } from "styled-components";
import Typography from "@mui/material/Typography";
import Links from "@mui/material/Link";
import {
  AboutHeading,
  BreadCrumbWrapper,
  SocialIcons,
} from "../AboutUS/styled.components";
import Breadcrumb from "../ReuseAbleComponents/Breadcrumb";
import {
  Container,
  FormParent,
  OrderWrapper,
  IconWrapper,
  LocationLink,
  MainWrapper,
  Text,
  Wrapper,
} from "./styled.components";
import OrderNowForm from "../ServicesPageComponents/OrderNowForm";
import LocationSvg from "../../public/icons/locationSvg";
import PhoneSvg from "../../public/icons/phoneSvg";
import EmailSvg from "../../public/icons/emailSvg";
import SocialIconsReUseable from "../ReuseAbleComponents/SocialIconsReUseable";
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
      <FormParent>
        <OrderWrapper>
          <OrderNowForm
            title={t("Contact Us")}
            buttonTitle={t("send")}
            isShow={false}
            classname={"contact-us"}
          />
        </OrderWrapper>
        {/* <MapComponent /> */}
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
              <LocationLink href="tel:920010047">9200 10047</LocationLink>
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
            </Text>
          </MainWrapper>
        </Container>
      </FormParent>
      <SocialIconsReUseable />
    </Wrapper>
  );
};
export default ContactUs;
