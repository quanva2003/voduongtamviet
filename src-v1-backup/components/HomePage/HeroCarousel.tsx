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
                  <div className="text-white animate-fade-in-up">
                    <h1 className="hero-title text-5xl md:text-7xl font-bold mb-4 leading-tight hero-text-shadow uppercase tracking-tight animate-slide-in-left">
                      {slide.title}
                    </h1>
                    <h2 className="hero-subtitle text-2xl md:text-3xl mb-6 text-white font-bold hero-text-shadow uppercase tracking-wider animate-fade-in-up" style={{animationDelay: '0.2s', animationFillMode: 'both'}}>
                      {slide.subtitle}
                    </h2>
                    <p className="hero-description text-white text-lg md:text-xl mb-8 opacity-95 leading-relaxed hero-text-shadow max-w-2xl animate-fade-in-up" style={{animationDelay: '0.4s', animationFillMode: 'both'}}>
                      {slide.description}
                    </p>
                    <Link
                      to="/registration"
                      className="inline-block btn-gradient !text-white font-bold py-4 px-10 rounded-lg text-lg uppercase tracking-wider relative overflow-hidden group"
                      style={{animationDelay: '0.6s', animationFillMode: 'both'}}
                    >
                      <span className="relative z-10">Bắt Đầu Hành Trình</span>
                      <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-20 transform -skew-x-12 group-hover:translate-x-full transition-all duration-700"></span>
                    </Link>
                  </div>
                  <div className="hidden lg:block animate-float" style={{animationDelay: '0.3s'}}></div>
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

