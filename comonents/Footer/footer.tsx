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
const Footer = () => {
  const router = useRouter();
  return (
    <>
      <FooterParent>
        {/* {router.pathname === "/" && (
          <FooterContainerOne>
            <FooterWrapper>
              <FooterImageWrapper>
                <FooterVisionImage
                  src="https://www.zadip.com/en/images/vision2030.png"
                  width={"auto"}
                  height={"auto"}
                />
              </FooterImageWrapper>
              <FooterDescription>
                <Title>Comprehensive Added Value</Title>
                <Description>
                  The Vision 2030 initiative by the Custodian of the Two Holy
                  Mosques, King Salman Bin Abdulaziz Al-Saud, may Allah protect
                  him, derives its importance from the fast-paced and dynamic
                  world we live in. The solutions of tomorrow are the ideas that
                  we work on today. ZADIP has been tirelessly working with its
                  esteemed group of partners and technology enthusiasts to bring
                  emerging technologies into the service of our country and her
                  people.
                  <br></br>
                  <br></br> We present our humble acknowledgement and
                  determination to this ambitious initiative and pray for the
                  success and pride that it would bring to our countrymen and
                  the Muslim ummah.
                </Description>
              </FooterDescription>
            </FooterWrapper>
          </FooterContainerOne>
        )} */}
      </FooterParent>
      {/* <FooterSecondParent>
        {router.pathname === "/" && (
          <FooterContainerTwo>
            <FooterTwoImageWrapper>
              <FooterTwoImage src="https://www.zadip.com/en/images/logo-full-color.png" />
            </FooterTwoImageWrapper>
            <FooterTwoDescriptionWrapper>
              <FooterTwoDescription>
                <strong>ZADIP Group</strong>, has{" "}
                <span> over 7000 customers </span>
                all over KSA and operates from two offices located in Riyadh and
                Dammam. Our vigilant focus on emerging technologies in the
                global arena and their local relevance is where our service
                proposition becomes unparalleled and fits every business need.
                We have successfully tied partnerships with global leaders in
                technology, advertising and building frameworks harnessing best
                practices to enhance the dependability of our solutions and
                offerings.
              </FooterTwoDescription>
            </FooterTwoDescriptionWrapper>
          </FooterContainerTwo>
        )}
      </FooterSecondParent> */}
      <FooterContanerThree className="footer">
        <FooterContanerThreeWrapper className="container">
          <FooterContanerThreeRow className="row">
            <FooterContanerThreeCol className="footer-col">
              <FooterContanerThreeHeading>
                Quick Links
              </FooterContanerThreeHeading>
              <FooterContanerThreeUL>
                <FooterContanerThreeLI>
                  <Link href="#">Nafeth</Link>
                </FooterContanerThreeLI>
                <FooterContanerThreeLI>
                  <Link href="#">Ektefa</Link>
                </FooterContanerThreeLI>
                <FooterContanerThreeLI>
                  <Link href="#">eGov Services Portal</Link>
                </FooterContanerThreeLI>
                <FooterContanerThreeLI>
                  <Link href="/products">Products</Link>
                </FooterContanerThreeLI>
                <FooterContanerThreeLI>
                  <Link href="/services">Services</Link>
                </FooterContanerThreeLI>
              </FooterContanerThreeUL>
            </FooterContanerThreeCol>
            <FooterContanerThreeCol className="footer-col">
              <FooterContanerThreeHeading>
                Contact US
              </FooterContanerThreeHeading>
              <FooterContanerThreeUL>
                <FooterContanerThreeLI>
                  <Link href="#">
                    <MyLocationOutlinedIcon fontSize={"small"} /> Prince Fahad
                    Bin Ibrahim Al-Saud Road, Malaz, Riyadh
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
                    <CloudDownloadOutlinedIcon fontSize={"small"} /> Download
                    Company Profile
                  </Link>
                </FooterContanerThreeLI>
              </FooterContanerThreeUL>
            </FooterContanerThreeCol>
            <FooterContanerThreeCol className="footer-col">
              <FooterContanerThreeHeading>Follow Us</FooterContanerThreeHeading>
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
          © 2008 - 2022 ZADIP Group, All Rights Reserved. |{" "}
          <a href="#">Privacy Policy</a>
        </FooterCopyRights>
      </FooterContanerThree>
    </>
  );
};
export default Footer;
