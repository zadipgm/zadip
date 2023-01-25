import * as React from "react";
import { useTheme } from "styled-components";
import ComprehensiveAddedValue from "./comprehensiveAddedValue";
import FeatureSection from "./FeatureSection/FeatureSection";
import HighLightProductSection from "./HighLightProductSection";
import OurPartnerSection from "./OurPartnerSection";
import ProfessionalServices from "./ProServices";
const HomePage = () => {
  const { translations } = useTheme();
  return (
    <>
      <FeatureSection />
      <HighLightProductSection />
      <OurPartnerSection title={translations?.ourpartner as string} />
      <ProfessionalServices />
      <ComprehensiveAddedValue />
    </>
  );
};
export default HomePage;
