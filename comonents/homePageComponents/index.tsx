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
      <Head>
        <meta
          name="description"
          content=" Founded in 2004, ZADIP has expanded from a small business to a multi-industry enterprise with operational teams in ICT, Networking, Software Development, Construction and Advertising. Our rapid expansion was only possible through the trust and support our customers put in our abilities. "
        />
      </Head>
      <FeatureSection />
      <ProductSection />
      <OurPartnerSection title={translations?.ourpartner as string} />
      <ProfessionalServices />
      <ComprehensiveAddedValue />
    </>
  );
};
export default HomePage;
