import React from "react";
import HeroCarousel from "../components/HomePage/HeroCarousel";
import BenefitsSection from "../components/HomePage/BenefitsSection";
import KarateInfoSection from "../components/HomePage/KarateInfoSection";
import CallToAction from "../components/HomePage/CallToAction";

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen">
      <HeroCarousel />
      <BenefitsSection />
      <KarateInfoSection />
      <CallToAction />
    </div>
  );
};

export default HomePage;
