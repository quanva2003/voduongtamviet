import React from "react";
import { Link } from "react-router-dom";
import { Carousel } from "antd";
import { HERO_SLIDES } from "../../constants/homepage";

const HeroCarousel: React.FC = () => {
  return (
    <section className="relative h-screen overflow-hidden">
      <Carousel
        autoplay
        autoplaySpeed={5000}
        effect="fade"
        dots={true}
        dotPosition="bottom"
        arrows={true}
        draggable={true}
        swipeToSlide={true}
        className="h-full"
      >
        {HERO_SLIDES.map((slide, index) => (
          <div key={index} className="relative h-screen pb-20">
            <div className="absolute inset-0">
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 hero-gradient-overlay"></div>
            </div>

            <div className="relative z-10 flex items-end h-full">
              <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                  <div className="text-white">
                    <h1 className="hero-title text-5xl md:text-7xl font-bold mb-4 leading-tight hero-text-shadow uppercase tracking-tight">
                      {slide.title}
                    </h1>
                    <h2 className="hero-subtitle text-2xl md:text-3xl mb-6 text-white font-bold hero-text-shadow uppercase tracking-wider">
                      {slide.subtitle}
                    </h2>
                    <p className="hero-description text-white text-lg md:text-xl mb-8 opacity-95 leading-relaxed hero-text-shadow max-w-2xl">
                      {slide.description}
                    </p>
                    <Link
                      to="/registration"
                      className="inline-block !bg-[#FD1610] hover:bg-[#d4140e] !text-white font-bold py-4 px-10 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl uppercase tracking-wider"
                    >
                      Bắt Đầu Hành Trình
                    </Link>
                  </div>
                  <div className="hidden lg:block"></div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </section>
  );
};

export default HeroCarousel;

