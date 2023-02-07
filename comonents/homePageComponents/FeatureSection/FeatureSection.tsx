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
  Wrapper,
} from "./styled.components";
import AnimationBar from "../../ReuseAbleComponents/AnimationBar/AnimationBar";
import Slider from "react-slick";
import { useTheme } from "styled-components";
import Link from "next/link";
const FeatureSection = () => {
  const { isLTR, translations, device, colors } = useTheme();

  const settings = {
    dots: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed: 3000,
    autoplay: true,
    arrows: false,
    easing: "linear",
    customPaging: (i: any) => (
      <Wrapper>
        <img
          src={`/images/pro${i + 1}.png`}
          alt="products"
          width={"100%"}
          height={"100%"}
        />
      </Wrapper>
    ),
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 0,
        },
      },
    ],
  };
  return (
    <FeatureSectionParent>
      <AnimationBar
        headingColor={colors.lightBlue}
        descriptionColor={"#737c85"}
        title={translations?.featureProduct}
        description={translations?.featureDescription as string}
        fontSize={"18px"}
      />

      <FeatureSectionContainer>
        <Slider {...settings} className={"feature-section"}>
          <EktefaWrapper direction={isLTR ? "ltr" : "rtl"}>
            <EktefaDescriptionWrapper>
              <EktefaTitle direction={isLTR ? "ltr" : "rtl"}>
                {translations?.featureTitleEktefa}
              </EktefaTitle>
              <EktefaDescription
                direction={isLTR ? "ltr" : "rtl"}
                dangerouslySetInnerHTML={{
                  __html: translations?.featurecardDescriptionEktefa as string,
                }}
              ></EktefaDescription>
              <Link
                href="https://ektefa.net/zadip"
                target={"_blank"}
                aria-label="visit application link"
              >
                {translations?.visitsite}
              </Link>
            </EktefaDescriptionWrapper>
            <EktefaImageWrapper>
              <EktefaImage
                src="/images/ektefa1.svg"
                alt="ektefa"
                width={device === "desktop" ? 657 : 350}
                height={device === "desktop" ? 438 : 350}
              />
            </EktefaImageWrapper>
          </EktefaWrapper>

          <EktefaWrapper direction={isLTR ? "ltr" : "rtl"}>
            <EktefaDescriptionWrapper>
              <EktefaTitle>{translations?.featureTitleNafeth}</EktefaTitle>
              <EktefaDescription
                direction={isLTR ? "ltr" : "rtl"}
                dangerouslySetInnerHTML={{
                  __html: translations?.featurecardDescriptionNafeth as string,
                }}
              ></EktefaDescription>
              <Link
                href="https://nafeth.com/zadip"
                target={"_blank"}
                aria-label="visit application link"
              >
                {translations?.visitsite}
              </Link>
            </EktefaDescriptionWrapper>
            <EktefaImageWrapper>
              <EktefaImage
                src="/images/nafeth.svg"
                alt="nafeth"
                width={device === "desktop" ? 657 : 350}
                height={device === "desktop" ? 438 : 350}
              />
            </EktefaImageWrapper>
          </EktefaWrapper>

          <EktefaWrapper direction={isLTR ? "ltr" : "rtl"}>
            <EktefaDescriptionWrapper>
              <EktefaTitle>{translations?.featureTitleMuaref}</EktefaTitle>
              <EktefaDescription
                direction={isLTR ? "ltr" : "rtl"}
                dangerouslySetInnerHTML={{
                  __html: translations?.featurecardDescriptionMuaref as string,
                }}
              ></EktefaDescription>
              <Link
                href="#"
                target={"_blank"}
                aria-label="visit application link"
              >
                {translations?.visitsite}
              </Link>
            </EktefaDescriptionWrapper>
            <EktefaImageWrapper>
              <EktefaImage
                src="/images/mauref.svg"
                alt="mauref"
                width={device === "desktop" ? 657 : 350}
                height={device === "desktop" ? 438 : 350}
              />
            </EktefaImageWrapper>
          </EktefaWrapper>

          <EktefaWrapper direction={isLTR ? "ltr" : "rtl"}>
            <EktefaDescriptionWrapper>
              <EktefaTitle>{translations?.featureTitleEhtiwa}</EktefaTitle>
              <EktefaDescription
                direction={isLTR ? "ltr" : "rtl"}
                dangerouslySetInnerHTML={{
                  __html: translations?.featurecardDescriptionEhtiwa as string,
                }}
              ></EktefaDescription>
              <Link
                href="https://ehtwa.sa/"
                target={"_blank"}
                aria-label="visit application link"
              >
                {translations?.visitsite}
              </Link>
            </EktefaDescriptionWrapper>
            <EktefaImageWrapper>
              <EktefaImage
                src="/images/ehtiwa.svg"
                alt="ehtiwa"
                width={device === "desktop" ? 657 : 350}
                height={device === "desktop" ? 438 : 350}
              />
            </EktefaImageWrapper>
          </EktefaWrapper>

          <EktefaWrapper direction={isLTR ? "ltr" : "rtl"}>
            <EktefaDescriptionWrapper>
              <EktefaTitle>{translations?.featureTitlecadre}</EktefaTitle>
              <EktefaDescription
                direction={isLTR ? "ltr" : "rtl"}
                dangerouslySetInnerHTML={{
                  __html: translations?.featurecardDescriptionCadre as string,
                }}
              ></EktefaDescription>
              <Link
                href="https://cadre.sa/"
                aria-label="visit application link"
              >
                {translations?.visitsite}
              </Link>
            </EktefaDescriptionWrapper>
            <EktefaImageWrapper>
              <EktefaImage
                src="/images/cadre.svg"
                alt="ektefa"
                width={device === "desktop" ? 657 : 350}
                height={device === "desktop" ? 438 : 350}
              />
            </EktefaImageWrapper>
          </EktefaWrapper>
        </Slider>
      </FeatureSectionContainer>
    </FeatureSectionParent>
  );
};
export default FeatureSection;
