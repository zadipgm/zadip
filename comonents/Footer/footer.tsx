import * as React from "react";
import {
  FooterContainer,
  FooterWrapper,
  FooterMain,
  FooterCol,
  FooterHeading,
  FooterUL,
  FooterLI,
  FooterSocialLink,
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
import Link from "next/link";
import { useTheme } from "styled-components";
const Footer = () => {
  const { translations, locale } = useTheme();
  const showInMapClicked = () => {
    window.open(
      "https://maps.google.com?q=" + "24.653892364630916, 46.729899904499504"
    );
  };
  return (
    <>
      <FooterContainer>
        <FooterWrapper>
          <FooterMain>
            <FooterCol>
              <FooterHeading>{translations?.contactUs}</FooterHeading>
              <FooterUL>
                <FooterLI onClick={showInMapClicked}>
                  <Link href="#">
                    <MyLocationOutlinedIcon fontSize={"small"} />
                    {translations?.location}
                  </Link>
                </FooterLI>
                <FooterLI>
                  <Link href="tel:// 9200 10047">
                    <PhoneAndroidOutlinedIcon fontSize={"small"} /> 920010047
                  </Link>
                </FooterLI>
                <FooterLI>
                  <Link href="mailto:info@zadip.com">
                    <EmailOutlinedIcon fontSize={"small"} /> info@zadip.com
                  </Link>
                </FooterLI>
                <FooterLI>
                  <Link href="/images/zadip-profile.pdf" target={"_blank"}>
                    <CloudDownloadOutlinedIcon fontSize={"small"} />{" "}
                    {translations?.downloadComapnyPRofile}
                  </Link>
                </FooterLI>
              </FooterUL>
            </FooterCol>
            <FooterCol>
              <FooterHeading>{translations?.followUs}</FooterHeading>
              <FooterSocialLink className="social-link">
                <Link
                  href="https://twitter.com/zadipgroup"
                  target={"_blank"}
                  aria-label="Twitter"
                >
                  <TwitterIcon />
                </Link>
                <Link
                  href="https://www.facebook.com/zadipgroup/"
                  target={"_blank"}
                  aria-label="Facebook"
                >
                  <FacebookOutlinedIcon />
                </Link>
                <Link
                  href="https://www.youtube.com/channel/UCpcPg5FVYATjR4FMFYtGm0Q/about"
                  target={"_blank"}
                  aria-label="youtube"
                >
                  <YouTubeIcon />
                </Link>
                <Link
                  href="https://www.linkedin.com/company/zadip-group-of-companies"
                  target={"_blank"}
                  aria-label="LinkedIn"
                >
                  <LinkedInIcon />
                </Link>
              </FooterSocialLink>
            </FooterCol>
            <FooterCol className="logo">
              <Link href={"/"}>
                <img
                  src="/images/zadiplogo.png"
                  alt="logo"
                  width={240}
                  height={"100%"}
                />
              </Link>
            </FooterCol>
          </FooterMain>
        </FooterWrapper>
        <FooterCopyRights>
          ?? 2008 - 2023 {translations?.zadipGroups},{" "}
          {translations?.allRightsReserved}.
          <a href={`/${locale}/privacypolicy`}>{translations?.privacyPolicy}</a>
        </FooterCopyRights>
      </FooterContainer>
    </>
  );
};
export default Footer;
