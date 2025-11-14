import React from "react";
import { KARATE_INFO } from "../../constants/homepage";

const KarateInfoSection: React.FC = () => {
  return (
    <section className="section-padding bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-50/50 to-transparent"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text-secondary">
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
              className="card-gradient p-8 rounded-2xl hover-lift group relative overflow-hidden"
              style={{
                animation: `fadeInUp 0.8s ease-out ${index * 0.15}s both`,
              }}
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#FD1610]/10 to-transparent rounded-bl-full transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="w-12 h-12 bg-gradient-to-br from-[#FD1610] to-[#d4140e] rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg group-hover:shadow-xl">
                  <span className="text-white font-bold text-xl">
                    {index + 1}
                  </span>
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-gray-800 group-hover:text-[#FD1610] transition-colors duration-300">
                  {info.title}
                </h3>
                <p className="text-gray-700 leading-relaxed group-hover:text-gray-800 transition-colors duration-300">
                  {info.content}
                </p>
                <div className="mt-6 flex items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="h-0.5 w-8 bg-gradient-to-r from-[#FD1610] to-[#d4140e] mr-2"></div>
                  <div className="h-0.5 flex-1 bg-gradient-to-r from-[#FD1610] to-transparent"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KarateInfoSection;
