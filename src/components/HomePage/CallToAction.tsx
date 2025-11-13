import React from "react";
import { Link } from "react-router-dom";
import { CTA_SECTION } from "../../constants/homepage";

const CallToAction: React.FC = () => {
  return (
    <section className="section-padding bg-gradient-to-br from-[#FD1610] via-[#d4140e] to-[#b0100c] relative overflow-hidden">
      <div className="absolute inset-0 bg-black opacity-10"></div>
      <div className="container mx-auto px-4 text-center relative z-10">
        <div data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 uppercase tracking-tight">
            {CTA_SECTION.title}
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            {CTA_SECTION.description}
          </p>
          <Link
            to={CTA_SECTION.buttonHref}
            className="inline-block bg-white text-[#FD1610] hover:bg-gray-100 font-bold py-4 px-10 rounded-2xl text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl uppercase tracking-wider"
          >
            {CTA_SECTION.buttonText}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;

