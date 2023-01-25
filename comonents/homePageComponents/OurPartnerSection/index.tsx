import * as React from "react";
import AnimationBar from "../../ReuseAbleComponents/AnimationBar/AnimationBar";
import SliderSlick from "../../ReuseAbleComponents/SlickSlider";
import { OurPartnerSectionContainer } from "./styled.components";
import partner from "../../../DataLayer/client.json";
import { useTheme } from "styled-components";
interface IProps {
  title: string;
}
const OurPartnerSection = ({ title }: IProps) => {
  const { translations } = useTheme();
  return (
    <OurPartnerSectionContainer>
      <AnimationBar
        title={title}
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
