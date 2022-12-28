import * as React from "react";
import AnimationBar from "../../ReuseAbleComponents/AnimationBar/AnimationBar";
import { RecentNewsSectionContainer } from "./styled.components";
import dynamic from "next/dynamic";
import SimpleSlider from "../../ReuseAbleComponents/SlickSlider";
import SliderSlick from "../../ReuseAbleComponents/SlickSlider";

const RecentNewsSection = () => {
  const recentNews = [
    {
      image: "https://www.zadip.com/en//images/staff/commvault.jpg",
      description: "Strategic partnership signed with Commvault",
    },
    {
      image: "https://www.zadip.com/en//images/staff/elmpartners.jpg",
      description: "Strategic partnership signed with Commvault",
    },
    {
      image: "https://www.zadip.com/en//images/staff/himayatak.jpg",
      description: "Strategic partnership signed with Commvault",
    },
    {
      image: "https://www.zadip.com/en//images/staff/zadlaunch.jpg",
      description: "Strategic partnership signed with Commvault",
    },
    {
      image: "https://www.zadip.com/en//images/staff/ramadan.jpg",
      description: "Strategic partnership signed with Commvault",
    },
    {
      image: "https://www.zadip.com/en//images/partners/zk.jpg",
      description: "Strategic partnership signed with Commvault",
    },
    {
      image: "https://www.zadip.com/en//images/staff/commvault.jpg",
      description: "Strategic partnership signed with Commvault",
    },
    {
      image: "https://www.zadip.com/en//images/staff/commvault.jpg",
      description: "Strategic partnership signed with Commvault",
    },
  ];
  return (
    <RecentNewsSectionContainer>
      <AnimationBar
        title={"Recent News"}
        description={""}
        headingColor={"#2193b0"}
        descriptionColor={"#737c85;"}
      />
      <SliderSlick
        sliderData={recentNews}
        rows={2}
        sliderToShow={3}
        autoplay={false}
        autoplaySpeed={0}
        classname={"recent-news"}
      />
    </RecentNewsSectionContainer>
  );
};

export default RecentNewsSection;
