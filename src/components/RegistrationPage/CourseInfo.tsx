import React from "react";
import { COURSE_INFO_TITLE, COURSE_INFO } from "../../constants/registrationpage";

const CourseInfo: React.FC = () => {
  return (
    <div className="mt-16">
      <div
        className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100"
        data-aos="fade-up"
      >
        <h2 className="text-2xl font-bold mb-6 text-center bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
          {COURSE_INFO_TITLE}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {COURSE_INFO.map((info, index) => {
            const IconComponent = info.icon;
            return (
              <div
                key={index}
                className="text-center p-6 bg-gradient-to-br from-white to-gray-50 rounded-2xl border border-gray-100 hover:shadow-lg transition-all duration-300"
                data-aos="fade-up"
                data-aos-delay={(index + 1) * 100}
              >
                <div className="flex justify-center mb-4 transform hover:scale-110 transition-transform duration-300">
                  <IconComponent
                    className="w-16 h-16 text-[#FD1610]"
                    strokeWidth={1.5}
                  />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-gray-800">
                  {info.title}
                </h3>
                <p className="text-gray-600 font-medium">{info.value}</p>
                <p className="text-sm text-gray-500">{info.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CourseInfo;

