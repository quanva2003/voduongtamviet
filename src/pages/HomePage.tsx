import React from "react";
import SEO from "../components/SEO";
import { SEO_DATA } from "../constants/seo";
import HeroCarousel from "../components/HomePage/HeroCarousel";
import BenefitsSection from "../components/HomePage/BenefitsSection";
import KarateInfoSection from "../components/HomePage/KarateInfoSection";
import CallToAction from "../components/HomePage/CallToAction";

const HomePage: React.FC = () => {
  return (
    <>
      <SEO {...SEO_DATA.home} />
      <div className="min-h-screen">
        <HeroCarousel />
        <BenefitsSection />
        <KarateInfoSection />
        <CallToAction />
      </div>
    </>
  );
};

export default HomePage;
