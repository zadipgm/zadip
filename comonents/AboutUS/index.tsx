import * as React from "react";
import Breadcrumb from "../ReuseAbleComponents/Breadcrumb";
import {
  AboutUsContainer,
  AboutusWrapper,
  AboutusDescription,
  AboutusImage,
  AboutusImageWrapper,
  BreadCrumbWrapper,
  OurTeam,
  TeamCards,
  TeamCradsWrapper,
  TeamInfo,
  InfoTitle,
  InfoTitleSkill,
  SocialIcons,
  MemberDescription,
  AboutHeading,
} from "./styled.components";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import Typography from "@mui/material/Typography";
import Links from "@mui/material/Link";
import AnimationBar from "../ReuseAbleComponents/AnimationBar/AnimationBar";
import TwitterSvg from "../../public/icons/twitterSvg";
import LinkedInSvg from "../../public/icons/linkedinSvg";
import FacebookSvg from "../../public/icons/facebookSvg";
import SliderSlick from "../ReuseAbleComponents/SlickSlider";
import partner from "../../DataLayer/client.json";
import { useTranslation } from "react-i18next";
import { useTheme } from "styled-components";
import Link from "next/link";
import SocialIconsReUseable from "../ReuseAbleComponents/SocialIconsReUseable";

const AboutUS = () => {
  const { t } = useTranslation();
  const { isLTR } = useTheme();
  const breadcrumbs = [
    <Links underline="hover" key="1" color="#0196e3" href="/">
      {t("home")}
    </Links>,
    <Typography key="3" color="text.primary" style={{ color: "#0196e3" }}>
      {t("aboutUs")}
    </Typography>,
  ];
  return (
    <AboutUsContainer>
      <BreadCrumbWrapper>
        <AboutHeading>{t("aboutUs")}</AboutHeading>
        <Breadcrumb color={""} breadcrumbs={breadcrumbs} />
      </BreadCrumbWrapper>
      <AnimationBar
        title={`${t("zadipGroups")}`}
        description={`${t("compnaysummry")}`}
        headingColor={"#2193b0"}
        descriptionColor={"#737c85;"}
      />
      <AboutusWrapper>
        <div>
          <h3>{isLTR ? "About The Company" : "عن مجموعة زاد المعلومات"}</h3>
          <AboutusDescription
            dangerouslySetInnerHTML={{ __html: `${t("companyDescription")}` }}
          ></AboutusDescription>
        </div>
        <AboutusImageWrapper>
          <AboutusImage
            src="https://zadip.com/images/values/8.jpg"
            alt="about-us"
            height={500}
            width={600}
          />
        </AboutusImageWrapper>
      </AboutusWrapper>

      <SliderSlick
        sliderData={partner.our_value}
        rows={1}
        sliderToShow={1}
        classname={"our-value-slider"}
        autoplay={true}
        autoplaySpeed={2000}
      />
      <OurTeam>
        <AnimationBar
          title={`${t("ourteam")}`}
          description={`${t("teamDescription")}`}
          headingColor={"#2193b0"}
          descriptionColor={"#737c85;"}
        />
        <TeamCards>
          {/* <Slider {...settings}> */}
          {partner.our_team.map((item) => {
            return (
              <TeamCradsWrapper>
                <img src={item.image} alt="json" width={125} height={125} />
                <TeamInfo className="information">
                  <InfoTitle>{isLTR ? item.name_en : item.name_ar}</InfoTitle>
                  <InfoTitleSkill>
                    {isLTR ? item.position_en : item.position_ar}
                  </InfoTitleSkill>
                </TeamInfo>
                <SocialIconsReUseable classname={"about-page"} />
                {/* <SocialIcons>
                  <Link href={item.twitter}>
                    <TwitterSvg className="icon" />
                  </Link>
                  <Link href={item.linkedIn}>
                    <LinkedInSvg className="icon" />
                  </Link>
                </SocialIcons> */}
              </TeamCradsWrapper>
            );
          })}
        </TeamCards>
      </OurTeam>
      <AnimationBar
        title={`${t("ourClient")}`}
        description={`${t("clientdescription")}`}
        headingColor={"#2193b0"}
        descriptionColor={"#737c85;"}
      />
      <SliderSlick
        sliderData={partner.our_clients}
        rows={1}
        sliderToShow={6}
        classname={"partner-slider"}
        autoplay={true}
        autoplaySpeed={2000}
      />
      {/* <OurClients>
        {clients.our_clients.map((item) => {
          return (
            <ClientWrapper key={item.id}>
              <img src={item.image} alt="adel" width={200} height={200} />
              <ClientTitle>{item.title}</ClientTitle>
              <ClientSector>{item.sector}</ClientSector>
            </ClientWrapper>
          );
        })}
      </OurClients> */}
    </AboutUsContainer>
  );
};
export default AboutUS;
