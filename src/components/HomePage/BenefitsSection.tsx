import React from "react";
import { BENEFITS } from "../../constants/homepage";

const BenefitsSection: React.FC = () => {
  return (
    <section className="section-padding section-gradient-light relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-[#FD1610] to-[#d4140e] rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-[#FD1610] to-[#d4140e] rounded-full blur-3xl animate-pulse-slow" style={{animationDelay: '1.5s'}}></div>
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text-primary">
            Lợi ích của việc học Karate
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Karate không chỉ là môn võ thuật mà còn là cách sống, giúp phát
            triển toàn diện cả thể chất và tinh thần
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {BENEFITS.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <div
                key={index}
                className="text-center p-8 card-gradient rounded-2xl hover-lift hover-glow group"
                style={{
                  animation: `fadeInUp 0.8s ease-out ${index * 0.1}s both`
                }}
              >
                <div className="flex justify-center mb-6 icon-bounce">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#FD1610] to-[#d4140e] rounded-full blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
                    <IconComponent
                      className="w-16 h-16 text-[#FD1610] relative z-10"
                      strokeWidth={1.5}
                    />
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-4 text-gray-800 group-hover:text-[#FD1610] transition-colors duration-300">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                  {benefit.description}
                </p>
                <div className="mt-6 h-1 w-0 bg-gradient-to-r from-[#FD1610] to-[#d4140e] group-hover:w-full transition-all duration-500 mx-auto rounded-full"></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;

