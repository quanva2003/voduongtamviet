import React, { useState, useEffect } from "react";
import Logo from "./Header/Logo";
import Navigation from "./Header/Navigation";
import MobileMenu from "./Header/MobileMenu";
import MenuButton from "./Header/MenuButton";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleMenuClose = () => {
    setIsMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-[9999] transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg"
          : "bg-white/90 backdrop-blur-lg"
      }`}
    >
      <div className="container">
        <div className="flex justify-between items-center py-2 border-b border-gray-200 px-[16px] md:px-0">
          <div className="md:hidden w-10 h-10"></div>
          <Logo />
          <MenuButton isOpen={isMenuOpen} onClick={handleMenuToggle} />
        </div>
        <Navigation />
        <MobileMenu isOpen={isMenuOpen} onClose={handleMenuClose} />
      </div>
    </header>
  );
};

export default Header;
