import * as React from "react";
import Breadcrumb from "../ReuseAbleComponents/Breadcrumb";
import {
  AboutUsContainer,
  AboutusWrapper,
  AboutusDescription,
  AboutusImage,
  AboutusImageWrapper,
  BreadCrumbWrapper,
  OurHistory,
  AboutComapny,
  Title,
  Text,
  OurTeam,
  TeamCards,
  TeamCradsWrapper,
  TeamInfo,
  InfoTitle,
  InfoTitleSkill,
  SocialIcons,
  MemberDescription,
  OurClients,
  ClientWrapper,
  ClientTitle,
  ClientSector,
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
import clients from "../../DataLayer/client.json";
import OrderNowForm from "../ServicesPageComponents/OrderNowForm";
import OurPartnerSection from "../homePageComponents/OurPartnerSection";
import SliderSlick from "../ReuseAbleComponents/SlickSlider";
import partner from "../../DataLayer/client.json";

const AboutUS = () => {
  const breadcrumbs = [
    <Links underline="hover" key="1" color="#0196e3" href="/">
      Home
    </Links>,
    <Typography key="3" color="text.primary" style={{ color: "#0196e3" }}>
      about-us
    </Typography>,
  ];
  return (
    <AboutUsContainer>
      <BreadCrumbWrapper>
        <AboutHeading>About</AboutHeading>
        <Breadcrumb color={""} breadcrumbs={breadcrumbs} />
      </BreadCrumbWrapper>
      <AnimationBar
        title={"About the Company"}
        description={
          "Founded in 2004, ZADIP has expanded from a small business to a multi-industry enterprise with operational teams in ICT, Networking, Software Development, Construction and Advertising."
        }
        headingColor={"#2193b0"}
        descriptionColor={"#737c85;"}
      />
      <AboutusWrapper>
        <AboutusDescription>
          Founded in 2004, ZADIP has expanded from a small business to a
          multi-industry enterprise with operational teams in ICT, Networking,
          Software Development, Construction and Advertising. Our rapid
          expansion was only possible through the trust and support our
          customers put in our abilities. <br></br>
          <br></br>Today, ZADIP GROUP, has over 7000 customers all over KSA and
          operates from two offices located in Riyadh and Dammam. Our vigilant
          focus on emerging technologies in the global arena and their local
          relevance is where our service proposition becomes unparalleled and
          fits every business need. We have successfully tied partnerships with
          global leaders in technology, advertising and building frameworks
          harnessing best practices to enhance the dependability of our
          solutions and offerings.
        </AboutusDescription>
        <AboutusImageWrapper>
          <AboutusImage
            src="https://startp-next.envytheme.com/images/about-one.png"
            alt="about-us"
          />
        </AboutusImageWrapper>
      </AboutusWrapper>
      <AboutComapny>
        <OurHistory>
          <Title>Our History</Title>
          <Text>
            Founded in 2004, ZADIP has expanded from a small business to a
            multi-industry enterprise with operational teams in ICT
          </Text>
        </OurHistory>
        <OurHistory>
          <Title>Our Mission</Title>
          <Text>
            Founded in 2004, ZADIP has expanded from a small business to a
            multi-industry enterprise with operational teams in ICT
          </Text>
        </OurHistory>
        <OurHistory>
          <Title>Who We Are</Title>
          <Text>
            Founded in 2004, ZADIP has expanded from a small business to a
            multi-industry enterprise with operational teams in ICT
          </Text>
        </OurHistory>
      </AboutComapny>
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
          title={"Our Awesome Team"}
          description={
            "Founded in 2004, ZADIP has expanded from a small business to a multi-industry enterprise with operational teams in ICT"
          }
          headingColor={"#2193b0"}
          descriptionColor={"#737c85;"}
        />
        <TeamCards>
          {/* <Slider {...settings}> */}
          <TeamCradsWrapper>
            <img
              src="https://startp-next.envytheme.com/images/team-image/team4.jpg"
              alt="json"
            />
            <TeamInfo>
              <InfoTitle>jason</InfoTitle>
              <InfoTitleSkill>UI/UX Designer</InfoTitleSkill>
            </TeamInfo>
            <SocialIcons>
              <TwitterSvg />
              <LinkedInSvg />
              <FacebookSvg />
            </SocialIcons>
            <MemberDescription>
              Small business to a multi-industry teams in ICT{" "}
            </MemberDescription>
          </TeamCradsWrapper>

          <TeamCradsWrapper>
            <img
              src="https://startp-next.envytheme.com/images/team-image/team4.jpg"
              alt="json"
            />
            <TeamInfo>
              <InfoTitle>jason</InfoTitle>
              <InfoTitleSkill>UI/UX Designer</InfoTitleSkill>
            </TeamInfo>
            <SocialIcons>
              <TwitterSvg />
              <LinkedInSvg />
              <FacebookSvg />
            </SocialIcons>
            <MemberDescription>
              Small business to a multi-industry teams in ICT{" "}
            </MemberDescription>
          </TeamCradsWrapper>

          <TeamCradsWrapper>
            <img
              src="https://startp-next.envytheme.com/images/team-image/team4.jpg"
              alt="json"
            />
            <TeamInfo>
              <InfoTitle>jason</InfoTitle>
              <InfoTitleSkill>UI/UX Designer</InfoTitleSkill>
            </TeamInfo>
            <SocialIcons>
              <TwitterSvg />
              <LinkedInSvg />
              <FacebookSvg />
            </SocialIcons>
            <MemberDescription>
              Small business to a multi-industry teams in ICT{" "}
            </MemberDescription>
          </TeamCradsWrapper>

          <TeamCradsWrapper>
            <img
              src="https://startp-next.envytheme.com/images/team-image/team4.jpg"
              alt="json"
            />
            <TeamInfo className="info">
              <InfoTitle>jason</InfoTitle>
              <InfoTitleSkill>UI/UX Designer</InfoTitleSkill>
            </TeamInfo>
            <SocialIcons>
              <TwitterSvg />
              <LinkedInSvg />
              <FacebookSvg />
            </SocialIcons>
            <MemberDescription>
              Small business to a multi-industry teams in ICT{" "}
            </MemberDescription>
          </TeamCradsWrapper>
          {/* </Slider> */}
        </TeamCards>
      </OurTeam>
      <AnimationBar
        title={"Our Happy Clients"}
        description={
          "We have successfully tied partnerships with global leaders in technology, advertising and building frameworks."
        }
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
