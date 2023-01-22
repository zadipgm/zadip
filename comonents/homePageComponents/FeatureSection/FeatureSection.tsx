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
  const { isLTR, translations } = useTheme();
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
        title={translations?.featureProduct}
        description={translations?.featureDescription as string}
        fontSize={"18px"}
      />
      <FeatureSectionContainer>
        <Slider {...settings} className={"feature-section"}>
          <EktefaWrapper direction={isLTR ? "ltr" : "rtl"}>
            <EktefaDescriptionWrapper>
              <img
                src="/images/ektefa.png"
                alt="ektefa"
                width={100}
                height={"auto"}
              />
              <EktefaTitle direction={isLTR ? "ltr" : "rtl"}>
                {translations?.featureTitleEktefa}
              </EktefaTitle>
              <EktefaDescription
                direction={isLTR ? "ltr" : "rtl"}
                dangerouslySetInnerHTML={{
                  __html: translations?.featurecardDescriptionEktefa as string,
                }}
              ></EktefaDescription>
              <Link href="https://ektefa.net/zadip" target={"_blank"}>
                {translations?.visitsite}
              </Link>
            </EktefaDescriptionWrapper>
            <EktefaImageWrapper>
              <EktefaImage
                src="/images/ektefa1.svg"
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
              <EktefaTitle>{translations?.featureTitleNafeth}</EktefaTitle>
              <EktefaDescription
                direction={isLTR ? "ltr" : "rtl"}
                dangerouslySetInnerHTML={{
                  __html: translations?.featurecardDescriptionNafeth as string,
                }}
              ></EktefaDescription>
              <Link href="https://nafeth.com/zadip" target={"_blank"}>
                {translations?.visitsite}
              </Link>
            </EktefaDescriptionWrapper>
            <EktefaImageWrapper>
              <EktefaImage
                src="/images/nafeth.svg"
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
                alt="mauref"
                width={100}
                height={60}
              />
              <EktefaTitle>{translations?.featureTitleMuaref}</EktefaTitle>
              <EktefaDescription
                direction={isLTR ? "ltr" : "rtl"}
                dangerouslySetInnerHTML={{
                  __html: translations?.featurecardDescriptionMuaref as string,
                }}
              ></EktefaDescription>
              <Link href="#" target={"_blank"}>
                {translations?.visitsite}
              </Link>
            </EktefaDescriptionWrapper>
            <EktefaImageWrapper>
              <EktefaImage
                src="/images/mauref.svg"
                alt="mauref"
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
              <EktefaTitle>{translations?.featureTitleEhtiwa}</EktefaTitle>
              <EktefaDescription
                direction={isLTR ? "ltr" : "rtl"}
                dangerouslySetInnerHTML={{
                  __html: translations?.featurecardDescriptionEhtiwa as string,
                }}
              ></EktefaDescription>
              <Link href="https://ehtwa.sa/" target={"_blank"}>
                {translations?.visitsite}
              </Link>
            </EktefaDescriptionWrapper>
            <EktefaImageWrapper>
              <EktefaImage
                src="/images/ehtiwa.svg"
                alt="ehtiwa"
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
              <EktefaTitle>{translations?.featureTitlecadre}</EktefaTitle>
              <EktefaDescription
                direction={isLTR ? "ltr" : "rtl"}
                dangerouslySetInnerHTML={{
                  __html: translations?.featurecardDescriptionCadre as string,
                }}
              ></EktefaDescription>
              <Link href="https://cadre.sa/">{translations?.visitsite}</Link>
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
