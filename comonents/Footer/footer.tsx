import * as React from "react";
import {
  FooterContainer,
  FooterWrapper,
  FooterRow,
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
  const { translations } = useTheme();
  return (
    <>
      <FooterContainer>
        <FooterWrapper>
          <FooterRow>
            <FooterCol>
              <FooterHeading>{translations?.contactUs}</FooterHeading>
              <FooterUL>
                <FooterLI>
                  <Link href="#">
                    <MyLocationOutlinedIcon fontSize={"small"} />
                    {translations?.location}
                  </Link>
                </FooterLI>
                <FooterLI>
                  <Link href="tel:920010047">
                    <PhoneAndroidOutlinedIcon fontSize={"small"} /> 920010047
                  </Link>
                </FooterLI>
                <FooterLI>
                  <Link href="mailto:info@zadip.com">
                    <EmailOutlinedIcon fontSize={"small"} /> info@zadip.com
                  </Link>
                </FooterLI>
                <FooterLI>
                  <Link href="#">
                    <CloudDownloadOutlinedIcon fontSize={"small"} />{" "}
                    {translations?.downloadComapnyPRofile}
                  </Link>
                </FooterLI>
              </FooterUL>
            </FooterCol>
            <FooterCol>
              <FooterHeading>{translations?.followUs}</FooterHeading>
              <FooterSocialLink className="social-link">
                <Link href="https://twitter.com/zadipgroup" target={"_blank"}>
                  <TwitterIcon />
                </Link>
                <Link
                  href="https://www.facebook.com/zadipgroup/"
                  target={"_blank"}
                >
                  <FacebookOutlinedIcon />
                </Link>
                <Link
                  href="https://www.youtube.com/channel/UCpcPg5FVYATjR4FMFYtGm0Q/about"
                  target={"_blank"}
                >
                  <YouTubeIcon />
                </Link>
                <Link
                  href="https://www.linkedin.com/company/zadip-group-of-companies"
                  target={"_blank"}
                >
                  <LinkedInIcon />
                </Link>
              </FooterSocialLink>
            </FooterCol>
          </FooterRow>
        </FooterWrapper>
        <FooterCopyRights>
          © 2008 - 2023 {translations?.zadipGroups},{" "}
          {translations?.allRightsReserved}.
          <a href="#">{translations?.privacyPolicy}</a>
        </FooterCopyRights>
      </FooterContainer>
    </>
  );
};
export default Footer;
