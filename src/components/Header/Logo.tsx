import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg";

const Logo: React.FC = () => {
  return (
    <Link to="/" className="flex items-center flex-1 justify-center">
      <img src={logo} alt="logo" className="h-20" />
    </Link>
  );
};

export default Logo;
