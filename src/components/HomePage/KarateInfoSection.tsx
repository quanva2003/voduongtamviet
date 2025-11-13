import React from "react";
import { KARATE_INFO } from "../../constants/homepage";

const KarateInfoSection: React.FC = () => {
  return (
    <section className="section-padding bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
            Tìm hiểu về Karate
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Khám phá những điều thú vị về môn võ thuật truyền thống này
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {KARATE_INFO.map((info, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-white to-gray-50 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 border border-gray-100"
              data-aos="fade-up"
              data-aos-delay={index * 150}
            >
              <div className="w-12 h-12 bg-gradient-to-br from-[#FD1610] to-[#d4140e] rounded-xl flex items-center justify-center mb-6">
                <span className="text-white font-bold text-xl">
                  {index + 1}
                </span>
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-gray-800">
                {info.title}
              </h3>
              <p className="text-gray-700 leading-relaxed">{info.content}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KarateInfoSection;

