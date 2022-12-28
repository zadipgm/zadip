import * as React from "react";
import ComprehensiveAddedValue from "./comprehensiveAddedValue";
import FeatureSection from "./FeatureSection/FeatureSection";
import HighLightProductSection from "./HighLightProductSection";
import OurPartnerSection from "./OurPartnerSection";
import RecentNewsSection from "./RecentNewSection";
import TwitterSliderSection from "./TwitterSliderSection";
const HomePage = () => {
  return (
    <>
      <FeatureSection />
      <HighLightProductSection />
      <RecentNewsSection />
      <TwitterSliderSection />
      <OurPartnerSection />
      <ComprehensiveAddedValue />
    </>
  );
};
export default HomePage;
