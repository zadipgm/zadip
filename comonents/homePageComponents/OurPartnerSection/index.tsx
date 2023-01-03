import * as React from "react";
import AnimationBar from "../../ReuseAbleComponents/AnimationBar/AnimationBar";
import SliderSlick from "../../ReuseAbleComponents/SlickSlider";
import { OurPartnerSectionContainer } from "./styled.components";
import partner from "../../../DataLayer/client.json";
const OurPartnerSection = () => {
  return (
    <OurPartnerSectionContainer>
      <AnimationBar
        title="Our Partners"
        description=""
        headingColor={"#2193b0"}
        descriptionColor={"#737c85;"}
      />
      <SliderSlick
        sliderData={partner.partners}
        rows={1}
        sliderToShow={6}
        classname={"partner-slider"}
        autoplay={true}
        autoplaySpeed={2000}
      />
    </OurPartnerSectionContainer>
  );
};
export default OurPartnerSection;
