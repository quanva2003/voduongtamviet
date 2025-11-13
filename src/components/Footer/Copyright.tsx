import React from "react";
import { FOOTER_INFO } from "../../constants/footer";

const Copyright: React.FC = () => {
  return (
    <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
      <p>{FOOTER_INFO.copyright}</p>
    </div>
  );
};

export default Copyright;

