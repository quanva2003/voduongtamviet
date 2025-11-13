import React from "react";
import { HERO_SECTION } from "../../constants/registrationpage";

const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-[55vh] bg-gradient-to-r from-[#FD1610] to-[#b0100c] flex items-end justify-center pb-20">
      <div className="text-center text-white px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          {HERO_SECTION.title}
        </h1>
        <p className="text-xl md:text-2xl opacity-90">
          {HERO_SECTION.subtitle}
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
