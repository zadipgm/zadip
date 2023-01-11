import * as React from "react";
import {
  // FooterContainerOne,
  // FooterWrapper,
  // FooterVisionImage,
  // FooterDescription,
  FooterParent,
  // Title,
  // Description,
  // FooterImageWrapper,
  // FooterContainerTwo,
  // FooterTwoImageWrapper,
  // FooterTwoImage,
  // FooterTwoDescriptionWrapper,
  // FooterTwoDescription,
  // FooterSecondParent,
  FooterContanerThree,
  FooterContanerThreeWrapper,
  FooterContanerThreeRow,
  FooterContanerThreeCol,
  FooterContanerThreeHeading,
  FooterContanerThreeUL,
  FooterContanerThreeLI,
  FooterContanerThreeSocialLink,
  FooterCopyRights,
} from "./styled.components";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import MyLocationOutlinedIcon from "@mui/icons-material/MyLocationOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import PhoneAndroidOutlinedIcon from "@mui/icons-material/PhoneAndroidOutlined";
import CloudDownloadOutlinedIcon from "@mui/icons-material/CloudDownloadOutlined";
import { useRouter } from "next/router";
import Link from "next/link";
import { useTranslation } from "react-i18next";
const Footer = () => {
  const { t } = useTranslation();
  return (
    <>
      <FooterContanerThree className="footer">
        <FooterContanerThreeWrapper className="container">
          <FooterContanerThreeRow className="row">
            <FooterContanerThreeCol className="footer-col">
              <FooterContanerThreeHeading>
                {t("quickLinks")}
              </FooterContanerThreeHeading>
              <FooterContanerThreeUL>
                <FooterContanerThreeLI>
                  <Link href="#">{t("featureTitleEktefa")}</Link>
                </FooterContanerThreeLI>
                <FooterContanerThreeLI>
                  <Link href="#">{t("featureTitleNafeth")}</Link>
                </FooterContanerThreeLI>
                <FooterContanerThreeLI>
                  <Link href="#">{t("egovService")}</Link>
                </FooterContanerThreeLI>
              </FooterContanerThreeUL>
            </FooterContanerThreeCol>
            <FooterContanerThreeCol className="footer-col">
              <FooterContanerThreeHeading>
                {t("contactUs")}
              </FooterContanerThreeHeading>
              <FooterContanerThreeUL>
                <FooterContanerThreeLI>
                  <Link href="#">
                    <MyLocationOutlinedIcon fontSize={"small"} />
                    {t("location")}
                  </Link>
                </FooterContanerThreeLI>
                <FooterContanerThreeLI>
                  <Link href="tel:920010047">
                    <PhoneAndroidOutlinedIcon fontSize={"small"} /> 9200 10047
                  </Link>
                </FooterContanerThreeLI>
                <FooterContanerThreeLI>
                  <Link href="mailto:info@zadip.com">
                    <EmailOutlinedIcon fontSize={"small"} /> info@zadip.com
                  </Link>
                </FooterContanerThreeLI>
                <FooterContanerThreeLI>
                  <Link href="#">
                    <CloudDownloadOutlinedIcon fontSize={"small"} />{" "}
                    {t("downloadComapnyPRofile")}
                  </Link>
                </FooterContanerThreeLI>
              </FooterContanerThreeUL>
            </FooterContanerThreeCol>
            <FooterContanerThreeCol className="footer-col">
              <FooterContanerThreeHeading>
                {t("followUs")}
              </FooterContanerThreeHeading>
              <FooterContanerThreeSocialLink className="social-link">
                <Link href="#">
                  <TwitterIcon />
                </Link>
                <Link href="#">
                  <FacebookOutlinedIcon />
                </Link>
                <Link href="#">
                  <YouTubeIcon />
                </Link>
                <Link href="#">
                  <LinkedInIcon />
                </Link>
              </FooterContanerThreeSocialLink>
            </FooterContanerThreeCol>
          </FooterContanerThreeRow>
        </FooterContanerThreeWrapper>
        <FooterCopyRights>
          © 2008 - 2022 {t("zadipGroups")}, {t("allRightsReserved")}.
          <a href="#">{t("privacyPolicy")}</a>
        </FooterCopyRights>
      </FooterContanerThree>
    </>
  );
};
export default Footer;
