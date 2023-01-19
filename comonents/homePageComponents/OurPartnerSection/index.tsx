import * as React from "react";
import AnimationBar from "../../ReuseAbleComponents/AnimationBar/AnimationBar";
import SliderSlick from "../../ReuseAbleComponents/SlickSlider";
import { OurPartnerSectionContainer } from "./styled.components";
import partner from "../../../DataLayer/client.json";
import { useTranslation } from "react-i18next";
import { useTheme } from "styled-components";
const OurPartnerSection = () => {
  const { t } = useTranslation();
  const { translations } = useTheme();
  return (
    <OurPartnerSectionContainer>
      <AnimationBar
        title={translations?.ourpartner}
        description=""
        headingColor={"#2193b0"}
        descriptionColor={"#737c85;"}
        fontSize={"22px"}
      />
      <SliderSlick
        sliderData={partner.partners}
        rows={1}
        sliderToShow={6}
        speed={4000}
        classname={"partner-slider"}
        autoplay={true}
        autoplaySpeed={0}
      />
    </OurPartnerSectionContainer>
  );
};
export default OurPartnerSection;
