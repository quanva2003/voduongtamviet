import React from "react";
import { Link } from "react-router-dom";
import { QUICK_LINKS } from "../../constants/footer";

const QuickLinks: React.FC = () => {
  return (
    <div>
      <h4 className="text-lg font-semibold mb-4">Liên kết nhanh</h4>
      <ul className="space-y-2">
        {QUICK_LINKS.map((link) => (
          <li key={link.href}>
            <Link
              to={link.href}
              className="text-gray-400 hover:text-white transition-colors"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default QuickLinks;

