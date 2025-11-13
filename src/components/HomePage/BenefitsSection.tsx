import React from "react";
import { BENEFITS } from "../../constants/homepage";

const BenefitsSection: React.FC = () => {
  return (
    <section className="section-padding bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-[#FD1610] to-[#d4140e] bg-clip-text text-transparent">
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
                className="text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="flex justify-center mb-6 transform hover:scale-110 transition-transform duration-300">
                  <IconComponent
                    className="w-16 h-16 text-[#FD1610]"
                    strokeWidth={1.5}
                  />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-gray-800">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;

