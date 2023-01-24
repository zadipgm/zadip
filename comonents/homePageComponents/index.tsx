import * as React from "react";
import ComprehensiveAddedValue from "./comprehensiveAddedValue";
import FeatureSection from "./FeatureSection/FeatureSection";
import HighLightProductSection from "./HighLightProductSection";
import OurPartnerSection from "./OurPartnerSection";
import ProfessionalServices from "./ProServices";
const HomePage = () => {
  return (
    <>
      <FeatureSection />
      <HighLightProductSection />
      <ProfessionalServices />
      <OurPartnerSection />
      <ComprehensiveAddedValue />
    </>
  );
};
export default HomePage;
