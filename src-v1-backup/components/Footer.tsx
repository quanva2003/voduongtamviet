import React from "react";
import LogoSection from "./Footer/LogoSection";
import QuickLinks from "./Footer/QuickLinks";
import ContactInfo from "./Footer/ContactInfo";
import Copyright from "./Footer/Copyright";

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <LogoSection />
          <QuickLinks />
          <ContactInfo />
        </div>
        <Copyright />
      </div>
    </footer>
  );
};

export default Footer;
