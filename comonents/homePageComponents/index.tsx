import Head from "next/head";
import * as React from "react";
import { useTheme } from "styled-components";
import ComprehensiveAddedValue from "./comprehensiveAddedValue";
import FeatureSection from "./FeatureSection/FeatureSection";
import OurPartnerSection from "./OurPartnerSection";
import ProductSection from "./ProductsSection";
import ProfessionalServices from "./ProServicesSection";
const HomePage = () => {
  const { translations } = useTheme();
  return (
    <>
      <FeatureSection />
      <ProductSection />
      <OurPartnerSection title={translations?.ourpartner as string} />
      <ProfessionalServices />
      <ComprehensiveAddedValue />
    </>
  );
};
export default HomePage;
