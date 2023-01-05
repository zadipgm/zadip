import * as React from "react";
import AnimationBar from "../../ReuseAbleComponents/AnimationBar/AnimationBar";
import { RecentNewsSectionContainer } from "./styled.components";
import dynamic from "next/dynamic";
import SimpleSlider from "../../ReuseAbleComponents/SlickSlider";
import SliderSlick from "../../ReuseAbleComponents/SlickSlider";
import { useTranslation } from "react-i18next";
import RecentNews from "../../../DataLayer/news.json";
const RecentNewsSection = () => {
  const { t } = useTranslation();

  return (
    <RecentNewsSectionContainer>
      <AnimationBar
        title={`${t("recentNews")}`}
        description={""}
        headingColor={"#2193b0"}
        descriptionColor={"#737c85;"}
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
