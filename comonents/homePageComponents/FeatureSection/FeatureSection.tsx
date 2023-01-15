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
import Link from "next/link";
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
          <EktefaWrapper direction={isLTR ? "ltr" : "rtl"}>
            <EktefaDescriptionWrapper>
              <img
                src="/images/ektefa.png"
                alt="Feature"
                width={100}
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
              <Link href="https://ektefa.net">{t("visitsite")}</Link>
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

          <EktefaWrapper direction={isLTR ? "ltr" : "rtl"}>
            <EktefaDescriptionWrapper>
              <img
                src="/images/nafeth-light-logo.png"
                alt="nafeth"
                width={100}
                height={60}
              />
              <EktefaTitle>{t("featureTitleNafeth")}</EktefaTitle>
              <EktefaDescription
                direction={isLTR ? "ltr" : "rtl"}
                dangerouslySetInnerHTML={{
                  __html: t("featurecardDescriptionNafeth"),
                }}
              ></EktefaDescription>
              <Link href="https://nafeth.com">{t("visitsite")}</Link>
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

          <EktefaWrapper direction={isLTR ? "ltr" : "rtl"}>
            <EktefaDescriptionWrapper>
              <img
                src="/images/mauref.png"
                alt="Feature"
                width={100}
                height={60}
              />
              <EktefaTitle>{t("featureTitleMuaref")}</EktefaTitle>
              <EktefaDescription
                direction={isLTR ? "ltr" : "rtl"}
                dangerouslySetInnerHTML={{
                  __html: t("featurecardDescriptionMuaref"),
                }}
              ></EktefaDescription>
              <Link href="#">{t("visitsite")}</Link>
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

          <EktefaWrapper direction={isLTR ? "ltr" : "rtl"}>
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
              <Link href="#">{t("visitsite")}</Link>
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

          <EktefaWrapper direction={isLTR ? "ltr" : "rtl"}>
            <EktefaDescriptionWrapper>
              <img
                src="/images/cadre.png"
                alt="cadre"
                width={150}
                height={"auto"}
              />
              <EktefaTitle>{t("featureTitlecadre")}</EktefaTitle>
              <EktefaDescription
                direction={isLTR ? "ltr" : "rtl"}
                dangerouslySetInnerHTML={{
                  __html: t("featurecardDescriptionCadre"),
                }}
              ></EktefaDescription>
              <Link href="https://cadre.sa/">{t("visitsite")}</Link>
            </EktefaDescriptionWrapper>
            <EktefaImageWrapper>
              <EktefaImage
                src="/images/cadre.svg"
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
