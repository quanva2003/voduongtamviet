import React from "react";
import {
  COURSE_INFO_TITLE,
  COURSE_INFO,
} from "../../constants/registrationpage";

const CourseInfo: React.FC = () => {
  return (
    <div className="mt-16">
      <div className="bg-white p-8 rounded-2xl relative overflow-hidden group animate-fade-in-up">
        <div className="relative z-10">
          <h2 className="text-2xl font-bold mb-6 text-center gradient-text-secondary">
            {COURSE_INFO_TITLE}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {COURSE_INFO.map((info, index) => {
              const IconComponent = info.icon;
              return (
                <div
                  key={index}
                  className="text-center p-6 card-gradient rounded-2xl hover-glow group relative overflow-hidden"
                  style={{
                    animation: `fadeInUp 0.8s ease-out ${index * 0.15}s both`,
                  }}
                >
                  <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-[#FD1610]/5 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative z-10">
                    <div className="flex justify-center mb-4 icon-bounce">
                      <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-br from-[#FD1610] to-[#d4140e] rounded-full blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
                        <IconComponent
                          className="w-16 h-16 text-[#FD1610] relative z-10"
                          strokeWidth={1.5}
                        />
                      </div>
                    </div>
                    <h3 className="text-lg font-semibold mb-2 text-gray-800 group-hover:text-[#FD1610] transition-colors duration-300">
                      {info.title}
                    </h3>
                    <p className="text-gray-600 font-medium group-hover:text-gray-700 transition-colors duration-300">
                      {info.value}
                    </p>
                    <p className="text-sm text-gray-500 group-hover:text-gray-600 transition-colors duration-300">
                      {info.description}
                    </p>
                    <div className="mt-4 h-0.5 w-0 bg-gradient-to-r from-[#FD1610] to-[#d4140e] group-hover:w-full transition-all duration-500 mx-auto rounded-full"></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseInfo;
