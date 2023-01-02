import * as React from "react";
import AnimationBar from "../../ReuseAbleComponents/AnimationBar/AnimationBar";
import TechnicalSpecsTable from "../../ReuseAbleComponents/TechnicalSpecifications";
import {
  Container,
  MuarefVedioWrapper,
  MuarefSectionContainer,
  Description,
  MuarefCompatibleWrapper,
  MuarefBGImage,
  Text,
  Image,
  MuarefDescription,
  Link,
  ValuedWrapper,
  ValuedDistributors,
  Heading,
  Wrapper,
  ImageWrapper,
  TechImage,
  ValueLink,
  HRGateImage,
} from "./styled.components";
import _data from "../../../DataLayer/technicalSpecsTable.json";
import {
  GoBackButton,
  PageBreadCrumbWrapper,
} from "../../ReuseAbleComponents/DetailsComponent/styled.components";
import Breadcrumb from "../../ReuseAbleComponents/Breadcrumb";
import LocaleContext from "../../../LocaleContext";
import Links from "@mui/material/Link";
import { useRouter } from "next/router";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import HighLightProductSection from "../../homePageComponents/HighLightProductSection";
import VedioComponent from "../../ReuseAbleComponents/Vedio";

const MuarefDetails = () => {
  const { locale } = React.useContext(LocaleContext);
  const router = useRouter();
  const breadcrumbs = [
    <Links underline="hover" key="1" color="inherit" href="/">
      Home
    </Links>,
    <Links
      underline="hover"
      key="2"
      color="inherit"
      href={`/${locale}/${"services"}`}
    >
      {"services"}
    </Links>,
    <Links
      underline="hover"
      key="2"
      color="inherit"
      href={`/${locale}/${"services"}/${router?.query?.sub_category}?type=${
        router.query.detail
      }`}
    >
      {router.query.sub_category}
    </Links>,
  ];
  return (
    <Container>
      <PageBreadCrumbWrapper>
        <GoBackButton onClick={() => router.back()}>
          <KeyboardBackspaceIcon />
          Go Back
        </GoBackButton>
        <Breadcrumb color="#0196e3" breadcrumbs={breadcrumbs} />
      </PageBreadCrumbWrapper>
      <AnimationBar
        title={"Muaref QR"}
        description={"Goodbye Biometric Devices!"}
        headingColor={"#2193b0"}
        descriptionColor={"#737c85"}
      />
      <MuarefSectionContainer>
        <VedioComponent />
        <Description>
          Keep your workspace safe for yourself and others. Muaref is our QR
          based attendance system that seamlessly links with Ektefa and all our
          cloud solutions to provide safe and contactless attendance technology.
          <br></br>
          Using <strong>Muaref</strong> with your{" "}
          <a href="https://ektefa.net">Ektefa</a> Ektefa mobile application to
          mark attendance, you don't even need to select Check-In or Check-Out,
          the system will do it for you. Your attendance is updared and
          reflected in front of you within seconds.
        </Description>{" "}
      </MuarefSectionContainer>
      <MuarefCompatibleWrapper>
        <MuarefBGImage>
          <Text>100% COMPATIBLE WITH</Text>
          <Image
            src="https://www.zadip.com/en/images/products/muaref/ektefa.png"
            alt="ektef"
            width={178}
            height={58}
          />
          <MuarefDescription>
            Muaref if completely compatible with Ektefa - the premium Human
            Resources Management System.{" "}
          </MuarefDescription>
        </MuarefBGImage>
        <MuarefCompatibleWrapper>
          <Link href="https://play.google.com/store/apps/details?id=com.zadip.muaref">
            <Image
              src="https://zadip.com/images/playstore.png"
              alt="ektef"
              width={200}
              height={77}
            />
          </Link>
        </MuarefCompatibleWrapper>
      </MuarefCompatibleWrapper>
      <ValuedWrapper>
        <ValuedDistributors>
          <AnimationBar
            title={"Valued Distributors"}
            description={""}
            headingColor={"#2193b0"}
            descriptionColor={"#737c85"}
          />
          <Wrapper>
            <ImageWrapper>
              <TechImage
                src="https://www.zadip.com/en/images/partners/tecsub.png"
                alt="tecs"
              />
              <ValueLink href="https://www.techsup.co/" target={"_blank"}>
                {" "}
                Techsup Marketing Support Co.{" "}
              </ValueLink>
            </ImageWrapper>
            <ImageWrapper>
              <HRGateImage
                src="https://www.zadip.com/en/images/partners/hrgate.png"
                alt="tecs"
              />
              <ValueLink href="https://www.techsup.co/" target={"_blank"}>
                {" "}
                HR Gate.{" "}
              </ValueLink>
            </ImageWrapper>
          </Wrapper>
        </ValuedDistributors>
      </ValuedWrapper>
      <TechnicalSpecsTable
        data={_data.muaref_features}
        title={"Features"}
        page={"muaref"}
      />
    </Container>
  );
};
export default MuarefDetails;
