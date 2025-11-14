import React from "react";
import { HERO_SECTION } from "../../constants/registrationpage";

const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-[55vh] gradient-primary flex items-end justify-center pb-20 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse-slow"></div>
        <div
          className="absolute bottom-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse-slow"
          style={{ animationDelay: "1s" }}
        ></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-white/5 rounded-full blur-2xl animate-float"></div>
      </div>
      <div className="text-center text-white px-4 relative z-10">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in-down hero-text-shadow">
          {HERO_SECTION.title}
        </h1>
        <p
          className="text-xl md:text-2xl opacity-90 animate-fade-in-up hero-text-shadow"
          style={{ animationDelay: "0.2s", animationFillMode: "both" }}
        >
          {HERO_SECTION.subtitle}
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
