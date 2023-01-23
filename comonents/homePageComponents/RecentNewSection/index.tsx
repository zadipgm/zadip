import * as React from "react";
import AnimationBar from "../../ReuseAbleComponents/AnimationBar/AnimationBar";
import { RecentNewsSectionContainer } from "./styled.components";
import SliderSlick from "../../ReuseAbleComponents/SlickSlider";
import RecentNews from "../../../DataLayer/news.json";
import { useTheme } from "styled-components";
const RecentNewsSection = () => {
  const { translations } = useTheme();
  return (
    <RecentNewsSectionContainer>
      <AnimationBar
        title={translations?.recentNews}
        description={""}
        headingColor={"#2193b0"}
        descriptionColor={"#737c85;"}
        fontSize={"22px"}
      />
      <SliderSlick
        sliderData={RecentNews.recentNews}
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
