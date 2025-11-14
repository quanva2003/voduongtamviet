import React from "react";
import { Link } from "react-router-dom";
import { CTA_SECTION } from "../../constants/homepage";

const CallToAction: React.FC = () => {
  return (
    <section className="section-padding gradient-primary relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse-slow" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-white/5 rounded-full blur-2xl animate-float"></div>
      </div>
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 uppercase tracking-tight animate-scale-in">
            {CTA_SECTION.title}
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto animate-fade-in-up" style={{animationDelay: '0.2s', animationFillMode: 'both'}}>
            {CTA_SECTION.description}
          </p>
          <Link
            to={CTA_SECTION.buttonHref}
            className="inline-block bg-white text-[#FD1610] font-bold py-4 px-10 rounded-2xl text-lg uppercase tracking-wider relative overflow-hidden group hover-lift hover-glow animate-fade-in-up"
            style={{animationDelay: '0.4s', animationFillMode: 'both'}}
          >
            <span className="relative z-10">{CTA_SECTION.buttonText}</span>
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-[#FD1610]/10 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></span>
            <span className="absolute inset-0 bg-gradient-to-r from-[#FD1610]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;

