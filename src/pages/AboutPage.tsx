import React from "react";
import { Link } from "react-router-dom";
import SEO from "../components/SEO";
import { SEO_DATA } from "../constants/seo";
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
    <>
      <SEO {...SEO_DATA.about} />
      <div className="min-h-screen">
        {/* Hero Section */}
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

        {/* Introduction Section */}
        <section className="section-padding section-gradient-light relative overflow-hidden">
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-[#FD1610] to-[#d4140e] rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tl from-[#FD1610] to-[#d4140e] rounded-full blur-3xl"></div>
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center mb-16 animate-fade-in-up">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 gradient-text-primary">
                {MISSION_SECTION.title}
              </h2>
              <div className="space-y-6">
                {MISSION_SECTION.paragraphs.map((paragraph, index) => (
                  <p
                    key={index}
                    className="text-lg text-gray-700 leading-relaxed animate-fade-in-up"
                    style={{
                      animationDelay: `${0.2 + index * 0.1}s`,
                      animationFillMode: "both",
                    }}
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Journey Timeline */}
        <section className="section-padding section-gradient-light relative overflow-hidden">
          <div className="absolute inset-0 opacity-3">
            <div className="absolute top-1/4 left-0 w-64 h-64 bg-gradient-to-r from-[#FD1610]/10 to-transparent rounded-full blur-2xl"></div>
            <div className="absolute bottom-1/4 right-0 w-64 h-64 bg-gradient-to-l from-[#FD1610]/10 to-transparent rounded-full blur-2xl"></div>
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-16 animate-fade-in-up">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text-secondary">
                {JOURNEY_TITLE.title}
              </h2>
              <p className="text-lg text-gray-600">
                {JOURNEY_TITLE.description}
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="relative">
                {/* Timeline line with gradient */}
                <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-[#FD1610] via-[#d4140e] to-[#FD1610] rounded-full"></div>

                {JOURNEY.map((item, index) => (
                  <div
                    key={index}
                    className="relative flex items-start mb-12 group"
                    style={{
                      animation: `fadeInRight 0.8s ease-out ${
                        index * 0.15
                      }s both`,
                    }}
                  >
                    {/* Timeline dot with pulse */}
                    <div className="absolute left-6 w-6 h-6 bg-gradient-to-br from-[#FD1610] to-[#d4140e] rounded-full border-4 border-white shadow-lg z-10 group-hover:scale-125 transition-transform duration-300">
                      <div className="absolute inset-0 bg-gradient-to-br from-[#FD1610] to-[#d4140e] rounded-full animate-pulse-slow opacity-50"></div>
                    </div>

                    {/* Content */}
                    <div className="ml-20 card-gradient p-8 rounded-2xl hover-lift group relative overflow-hidden">
                      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#FD1610]/5 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      <div className="relative z-10">
                        <div className="flex items-center mb-4">
                          <span className="gradient-primary text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg group-hover:scale-105 transition-transform duration-300">
                            {item.year}
                          </span>
                        </div>
                        <h3 className="text-xl font-semibold mb-4 text-gray-800 group-hover:text-[#FD1610] transition-colors duration-300">
                          {item.title}
                        </h3>
                        <p className="text-gray-700 leading-relaxed group-hover:text-gray-800 transition-colors duration-300">
                          {item.description}
                        </p>
                        <div className="mt-4 h-0.5 w-0 bg-gradient-to-r from-[#FD1610] to-[#d4140e] group-hover:w-full transition-all duration-500 rounded-full"></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="section-padding bg-white relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-50/50 to-transparent"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-16 animate-fade-in-up">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text-primary">
                {VALUES_TITLE.title}
              </h2>
              <p className="text-lg text-gray-600">
                {VALUES_TITLE.description}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {VALUES.map((value, index) => {
                const IconComponent = value.icon;
                return (
                  <div
                    key={index}
                    className="text-center p-8 card-gradient rounded-2xl hover-lift hover-glow group"
                    style={{
                      animation: `fadeInUp 0.8s ease-out ${index * 0.1}s both`,
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
                      {value.title}
                    </h3>
                    <p className="text-gray-700 leading-relaxed group-hover:text-gray-800 transition-colors duration-300">
                      {value.description}
                    </p>
                    <div className="mt-6 h-1 w-0 bg-gradient-to-r from-[#FD1610] to-[#d4140e] group-hover:w-full transition-all duration-500 mx-auto rounded-full"></div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Instructors Section */}
        <section className="section-padding section-gradient-light relative overflow-hidden">
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-[#FD1610] to-[#d4140e] rounded-full blur-3xl animate-pulse-slow"></div>
            <div
              className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-[#FD1610] to-[#d4140e] rounded-full blur-3xl animate-pulse-slow"
              style={{ animationDelay: "1.5s" }}
            ></div>
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-16 animate-fade-in-up">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text-secondary">
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
                  className="card-gradient rounded-2xl overflow-hidden hover-lift group relative"
                  style={{
                    animation: `fadeInUp 0.8s ease-out ${index * 0.15}s both`,
                  }}
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={instructor.image}
                      alt={instructor.name}
                      className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent group-hover:from-black/50 transition-all duration-300"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <div className="h-0.5 w-0 bg-gradient-to-r from-[#FD1610] to-[#d4140e] group-hover:w-full transition-all duration-500"></div>
                    </div>
                  </div>
                  <div className="p-8">
                    <h3 className="text-xl font-semibold mb-2 text-gray-800 group-hover:text-[#FD1610] transition-colors duration-300">
                      {instructor.name}
                    </h3>
                    <p className="gradient-text-primary font-medium mb-2">
                      {instructor.title}
                    </p>
                    <p className="text-gray-600 text-sm mb-2">
                      {instructor.rank}
                    </p>
                    <p className="text-gray-600 text-sm mb-4">
                      {instructor.experience}
                    </p>
                    <p className="text-gray-700 text-sm leading-relaxed group-hover:text-gray-800 transition-colors duration-300">
                      {instructor.description}
                    </p>
                    <div className="mt-4 flex items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="h-0.5 w-8 bg-gradient-to-r from-[#FD1610] to-[#d4140e] mr-2"></div>
                      <div className="h-0.5 flex-1 bg-gradient-to-r from-[#FD1610] to-transparent"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="section-padding gradient-primary relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse-slow"></div>
            <div
              className="absolute bottom-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse-slow"
              style={{ animationDelay: "1s" }}
            ></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-white/5 rounded-full blur-2xl animate-float"></div>
          </div>
          <div className="container mx-auto px-4 text-center relative z-10">
            <div className="animate-fade-in-up">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 animate-scale-in hero-text-shadow">
                {CTA_SECTION.title}
              </h2>
              <p
                className="text-xl text-white/90 mb-8 max-w-2xl mx-auto animate-fade-in-up hero-text-shadow"
                style={{ animationDelay: "0.2s", animationFillMode: "both" }}
              >
                {CTA_SECTION.description}
              </p>
              <Link
                to={CTA_SECTION.buttonHref}
                className="inline-block bg-white text-[#FD1610] font-bold py-4 px-8 rounded-2xl text-lg uppercase tracking-wider relative overflow-hidden group hover-lift hover-glow animate-fade-in-up"
                style={{ animationDelay: "0.4s", animationFillMode: "both" }}
              >
                <span className="relative z-10">{CTA_SECTION.buttonText}</span>
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-[#FD1610]/10 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></span>
                <span className="absolute inset-0 bg-gradient-to-r from-[#FD1610]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AboutPage;
