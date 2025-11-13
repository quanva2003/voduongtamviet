import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo-white.svg";
import { FOOTER_INFO } from "../../constants/footer";
import SocialIcons from "./SocialIcons";

const LogoSection: React.FC = () => {
  return (
    <div className="col-span-1 md:col-span-2">
      <Link to="/" className="flex items-center space-x-2 mb-4">
        <img src={logo} alt="logo" className="h-12 rounded-full" />
        <div>
          <h3 className="text-xl font-bold">{FOOTER_INFO.name}</h3>
          <p className="text-gray-400">{FOOTER_INFO.subtitle}</p>
        </div>
      </Link>
      <p className="text-gray-400 mb-4">{FOOTER_INFO.description}</p>
      <SocialIcons />
    </div>
  );
};

export default LogoSection;

