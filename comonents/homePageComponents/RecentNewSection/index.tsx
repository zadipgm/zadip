import * as React from "react";
import AnimationBar from "../../ReuseAbleComponents/AnimationBar/AnimationBar";
import { RecentNewsSectionContainer } from "./styled.components";
import dynamic from "next/dynamic";
import SimpleSlider from "../../ReuseAbleComponents/SlickSlider";
import SliderSlick from "../../ReuseAbleComponents/SlickSlider";
import { useTranslation } from "react-i18next";

const RecentNewsSection = () => {
  const recentNews = [
    {
      image: "https://www.zadip.com/en//images/staff/commvault.jpg",
      description_en: "Strategic partnership signed with Commvault",
      description_ar: "زاد المعلومات توقع اتفاقية شراكة مع كومفولت",
    },
    {
      image: "https://zadip.com/images/staff/himayatak.jpg",
      description_en: "ZADIP launches #لحمايتك series",
      description_ar: "زاد المعلومات تطلق حملة #لحمايتك",
    },
    {
      image: "https://zadip.com/images/staff/ramadan.jpg",
      description_en: "Ramadan Kareem",
      description_ar: "رمضان كريم",
    },
    {
      image: "https://zadip.com/images/staff/elmpartners.jpg",
      description_en: "ZADIP honored at Elm partner event",
      description_ar: "تكريم زاد المعلومات ضمن حفل شركاء علم",
    },
    {
      image: "https://zadip.com/images/staff/zadlaunch.jpg",
      description_en: "ZADIP Group launches new website",
      description_ar: "تدشين موقع مجموعة زاد المعلومات الجديد",
    },
    {
      image: "https://zadip.com/images/partners/zk.jpg",
      description_en:
        "ZADIP Group accredited reseller for ZK Technologies in Saudi Arabia",
      description_ar: "زاد المعلومات شريك معتمد لأجهزة زي كي",
    },
    {
      image: "https://zadip.com/images/staff/1.png",
      description_en: "Nafeth mobile application launched",
      description_ar: "اطلاق تطبيق نافذ",
    },
    {
      image: "https://zadip.com/images/staff/motorshow.jpg",
      description_en: "Nafeth showcased in the Riyadh Auto Show 2016",
      description_ar: "تدشين خدمة نافذ خلال المعرض الدولي للسيارات",
    },
  ];
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
