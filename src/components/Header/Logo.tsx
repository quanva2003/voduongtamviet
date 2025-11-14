import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg";

const Logo: React.FC = () => {
  return (
    <Link 
      to="/" 
      className="flex items-center flex-1 justify-center group relative"
    >
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-br from-[#FD1610]/20 to-transparent rounded-lg blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <img 
          src={logo} 
          alt="logo" 
          className="h-20 relative z-10 transition-all duration-300 group-hover:scale-105 group-hover:brightness-110" 
        />
      </div>
    </Link>
  );
};

export default Logo;
