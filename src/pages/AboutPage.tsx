import React from "react";
import { Link } from "react-router-dom";
import {
  HERO_SECTION,
  MISSION_SECTION,
  JOURNEY_TITLE,
  JOURNEY,
  VALUES_TITLE,
  VALUES,
  INSTRUCTORS_TITLE,
  INSTRUCTORS,
  CTA_SECTION,
} from "../constants/aboutpage";

const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
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

      {/* Introduction Section */}
      <section className="section-padding bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div
            className="max-w-4xl mx-auto text-center mb-16"
            data-aos="fade-up"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-[#FD1610] to-[#b0100c] bg-clip-text text-transparent">
              {MISSION_SECTION.title}
            </h2>
            <div className="space-y-6">
              {MISSION_SECTION.paragraphs.map((paragraph, index) => (
                <p
                  key={index}
                  className="text-lg text-gray-700 leading-relaxed"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Journey Timeline */}
      <section className="section-padding bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
              {JOURNEY_TITLE.title}
            </h2>
            <p className="text-lg text-gray-600">{JOURNEY_TITLE.description}</p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-[#FD1610]"></div>

              {JOURNEY.map((item, index) => (
                <div
                  key={index}
                  className="relative flex items-start mb-12"
                  data-aos="fade-right"
                  data-aos-delay={index * 100}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-6 w-6 h-6 bg-gradient-to-br from-[#FD1610] to-[#d4140e] rounded-full border-4 border-white shadow-lg"></div>

                  {/* Content */}
                  <div className="ml-20 bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 border border-gray-100">
                    <div className="flex items-center mb-4">
                      <span className="bg-gradient-to-r from-[#FD1610] to-[#d4140e] text-white px-4 py-2 rounded-full text-sm font-semibold shadow-md">
                        {item.year}
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold mb-4 text-gray-800">
                      {item.title}
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-[#FD1610] to-[#b0100c] bg-clip-text text-transparent">
              {VALUES_TITLE.title}
            </h2>
            <p className="text-lg text-gray-600">{VALUES_TITLE.description}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {VALUES.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <div
                  key={index}
                  className="text-center p-8 bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100"
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
                    {value.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Instructors Section */}
      <section className="section-padding bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
              {INSTRUCTORS_TITLE.title}
            </h2>
            <p className="text-lg text-gray-600">
              {INSTRUCTORS_TITLE.description}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {INSTRUCTORS.map((instructor, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100"
                data-aos="fade-up"
                data-aos-delay={index * 150}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={instructor.image}
                    alt={instructor.name}
                    className="w-full h-64 object-cover transform hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
                <div className="p-8">
                  <h3 className="text-xl font-semibold mb-2 text-gray-800">
                    {instructor.name}
                  </h3>
                  <p className="text-[#FD1610] font-medium mb-2">
                    {instructor.title}
                  </p>
                  <p className="text-gray-600 text-sm mb-2">
                    {instructor.rank}
                  </p>
                  <p className="text-gray-600 text-sm mb-4">
                    {instructor.experience}
                  </p>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    {instructor.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-padding bg-gradient-to-br from-[#FD1610] via-[#d4140e] to-[#b0100c] relative overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <div data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              {CTA_SECTION.title}
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              {CTA_SECTION.description}
            </p>
            <Link
              to={CTA_SECTION.buttonHref}
              className="inline-block bg-white text-[#FD1610] hover:bg-gray-100 font-bold py-4 px-8 rounded-2xl text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              {CTA_SECTION.buttonText}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
