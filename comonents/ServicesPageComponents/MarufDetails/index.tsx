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
import VedioComponent from "../../ReuseAbleComponents/Vedio";
import { useTranslation } from "react-i18next";

const MuarefDetails = () => {
  const { locale } = React.useContext(LocaleContext);
  const router = useRouter();
  const { t } = useTranslation();
  const breadcrumbs = [
    <Links underline="hover" key="1" color="inherit" href="/">
      {t("home")}
    </Links>,
    <Links
      underline="hover"
      key="2"
      color="inherit"
      href={`/${locale}/${"services"}`}
    >
      {t("services")}
    </Links>,
    <Links
      underline="hover"
      key="2"
      color="inherit"
      href={`/${locale}/${"services"}/${router.query.detail}?type=${
        router.query.detail
      }`}
    >
      {router.query.detail}
    </Links>,
    <Links
      underline="hover"
      key="2"
      color="inherit"
      href={`/${locale}/${"services"}/${router?.query?.sub_category}?type=${
        router.query.detail
      }`}
    >
      {(router.query?.sub_category as string).replaceAll("_", " ")}
    </Links>,
  ];
  return (
    <Container>
      <PageBreadCrumbWrapper>
        <GoBackButton onClick={() => router.back()}>
          <KeyboardBackspaceIcon />
          {t("goBack")}
        </GoBackButton>
        <Breadcrumb color="#0196e3" breadcrumbs={breadcrumbs} />
      </PageBreadCrumbWrapper>
      <AnimationBar
        title={`${t("muarefQR")}`}
        description={`${t("goodbyebiometric")}`}
        headingColor={"#2193b0"}
        descriptionColor={"#737c85"}
        fontSize={"22px"}
      />
      <MuarefSectionContainer>
        <VedioComponent />
        <Description
          dangerouslySetInnerHTML={{ __html: `${t("maurefdescription")}` }}
        ></Description>{" "}
      </MuarefSectionContainer>
      <MuarefCompatibleWrapper>
        <MuarefBGImage>
          <Text>{t("compatible")}</Text>
          <Image
            src="https://www.zadip.com/en/images/products/muaref/ektefa.png"
            alt="ektef"
            width={178}
            height={58}
          />
          <MuarefDescription>{t("compatibleDescription")}</MuarefDescription>
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
            title={`${t("valuedDistributors")}`}
            description={""}
            headingColor={"#2193b0"}
            descriptionColor={""}
          />
          <Wrapper>
            <ImageWrapper>
              <TechImage
                src="https://www.zadip.com/en/images/partners/tecsub.png"
                alt="tecs"
              />
              <ValueLink href="https://www.techsup.co/" target={"_blank"}>
                {t("techSup")}
              </ValueLink>
            </ImageWrapper>
            <ImageWrapper>
              <HRGateImage
                src="https://www.zadip.com/en/images/partners/hrgate.png"
                alt="tecs"
              />
              <ValueLink href="https://www.techsup.co/" target={"_blank"}>
                {" "}
                {t("hrGate")}
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
