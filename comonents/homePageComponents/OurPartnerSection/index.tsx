import * as React from "react";
import AnimationBar from "../../ReuseAbleComponents/AnimationBar/AnimationBar";
import SliderSlick from "../../ReuseAbleComponents/SlickSlider";
import { OurPartnerSectionContainer } from "./styled.components";
const OurPartnerSection = () => {
  const partners = [
    {
      image: "https://www.zadip.com/en//images/staff/commvault.jpg",
      description: "",
    },
    {
      image: "https://www.zadip.com/en//images/staff/elmpartners.jpg",
      description: "",
    },
    {
      image: "https://www.zadip.com/en//images/staff/himayatak.jpg",
      description: "",
    },
    {
      image: "https://www.zadip.com/en//images/staff/zadlaunch.jpg",
      description: "",
    },
    {
      image: "https://www.zadip.com/en//images/staff/ramadan.jpg",
      description: "",
    },
    {
      image: "https://www.zadip.com/en//images/staff/ramadan.jpg",
      description: "",
    },
    {
      image: "https://www.zadip.com/en//images/staff/ramadan.jpg",
      description: "",
    },

    {
      image: "https://www.zadip.com/en//images/staff/ramadan.jpg",
      description: "",
    },
    {
      image: "https://www.zadip.com/en//images/partners/zk.jpg",
      description: "",
    },
    {
      image: "https://www.zadip.com/en//images/staff/commvault.jpg",
      description: "",
    },
    {
      image: "https://www.zadip.com/en//images/staff/commvault.jpg",
      description: "",
    },
  ];
  return (
    <OurPartnerSectionContainer>
      <AnimationBar
        title="Our Partners"
        description=""
        headingColor={"#2193b0"}
        descriptionColor={"#737c85;"}
      />
      <SliderSlick
        sliderData={partners}
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
