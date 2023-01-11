import * as React from "react";
import {
  FeatureSectionContainer,
  FeatureSectionParent,
  EktefaWrapper,
  EktefaImageWrapper,
  EktefaImage,
  EktefaDescriptionWrapper,
  EktefaTitle,
  EktefaDescription,
} from "./styled.components";
import { useTranslation } from "react-i18next";
import AnimationBar from "../../ReuseAbleComponents/AnimationBar/AnimationBar";

import Slider from "react-slick";
import { useTheme } from "styled-components";
const FeatureSection = () => {
  const { t } = useTranslation();
  const { isLTR, device } = useTheme();
  const settings = {
    dots: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed: 3000,
    autoplay: true,
    easing: "linear",
  };
  return (
    <FeatureSectionParent>
      <AnimationBar
        headingColor={"#2193b0"}
        descriptionColor={"#737c85"}
        title={t("featureProduct") as string}
        description={t("featureDescription")}
        fontSize={"22px"}
      />
      <FeatureSectionContainer>
        <Slider {...settings} className={"feature-section"}>
          <EktefaWrapper
            // background={
            //   isLTR
            //     ? "linear-gradient(-30deg,#03a9f5c7 35%,#efefefb8)"
            //     : "linear-gradient(-30deg,#efefefb8 35%,#03a9f5c7)"
            // }
            direction={isLTR ? "ltr" : "rtl"}
          >
            <EktefaDescriptionWrapper>
              <img
                src="/images/ektefa.png"
                alt="Feature"
                width={150}
                height={"auto"}
              />
              <EktefaTitle direction={isLTR ? "ltr" : "rtl"}>
                {t("featureTitleEktefa")}
              </EktefaTitle>
              <EktefaDescription
                direction={isLTR ? "ltr" : "rtl"}
                dangerouslySetInnerHTML={{
                  __html: t("featurecardDescriptionEktefa"),
                }}
              ></EktefaDescription>
            </EktefaDescriptionWrapper>
            <EktefaImageWrapper>
              <EktefaImage
                src="https://ektefa.net/agency/img/illustrations/employee.svg"
                alt="ektefa"
                width={657}
                height={438}
              />
            </EktefaImageWrapper>
          </EktefaWrapper>

          <EktefaWrapper
            // background={
            //   isLTR
            //     ? "linear-gradient(-30deg,#1281c4cf 35%,#efefefb8 )"
            //     : "linear-gradient(-30deg,#efefefb8 35%,#1281c4cf)"
            // }
            direction={isLTR ? "ltr" : "rtl"}
          >
            <EktefaDescriptionWrapper>
              <img
                src="/images/nafeth-light-logo.png"
                alt="nafeth"
                width={150}
                height={"auto"}
              />
              <EktefaTitle>{t("featureTitleNafeth")}</EktefaTitle>
              <EktefaDescription
                direction={isLTR ? "ltr" : "rtl"}
                dangerouslySetInnerHTML={{
                  __html: t("featurecardDescriptionNafeth"),
                }}
              ></EktefaDescription>
            </EktefaDescriptionWrapper>
            <EktefaImageWrapper>
              <EktefaImage
                src="https://nafeth.com/images/nafeth-naql.png"
                alt="nafeth"
                width={657}
                height={438}
              />
            </EktefaImageWrapper>
          </EktefaWrapper>

          <EktefaWrapper
            // background={
            //   isLTR
            //     ? "linear-gradient(-30deg,#0464a1b5 35%,#efefefb8)"
            //     : "linear-gradient(-30deg,#efefefb8, 35%,#0464a1b5)"
            // }
            direction={isLTR ? "ltr" : "rtl"}
          >
            <EktefaDescriptionWrapper>
              <img
                src="/images/mauref.png"
                alt="Feature"
                width={150}
                height={"auto"}
              />
              <EktefaTitle>{t("featureTitleMuaref")}</EktefaTitle>
              <EktefaDescription
                direction={isLTR ? "ltr" : "rtl"}
                dangerouslySetInnerHTML={{
                  __html: t("featurecardDescriptionMuaref"),
                }}
              ></EktefaDescription>
            </EktefaDescriptionWrapper>
            <EktefaImageWrapper>
              <EktefaImage
                src="https://ektefa.net/agency/img/illustrations/qrcode.svg"
                alt="ektefa"
                width={657}
                height={438}
              />
            </EktefaImageWrapper>
          </EktefaWrapper>

          <EktefaWrapper
            // background={
            //   isLTR
            //     ? "linear-gradient(-30deg,#38b7aeab 35%,#efefefb8)"
            //     : "linear-gradient(-30deg,#efefefb8 35%,#38b7aeab)"
            // }
            direction={isLTR ? "ltr" : "rtl"}
          >
            <EktefaDescriptionWrapper>
              <img
                src="/images/ihtiwa.png"
                alt="ehtiwa"
                width={150}
                height={"auto"}
              />
              <EktefaTitle>{t("featureTitleEhtiwa")}</EktefaTitle>
              <EktefaDescription
                direction={isLTR ? "ltr" : "rtl"}
                dangerouslySetInnerHTML={{
                  __html: t("featurecardDescriptionEhtiwa"),
                }}
              ></EktefaDescription>
            </EktefaDescriptionWrapper>
            <EktefaImageWrapper>
              <EktefaImage
                src="https://ektefa.net/agency/img/illustrations/employee.svg"
                alt="ektefa"
                width={657}
                height={438}
              />
            </EktefaImageWrapper>
          </EktefaWrapper>
        </Slider>
      </FeatureSectionContainer>
    </FeatureSectionParent>
  );
};
export default FeatureSection;
