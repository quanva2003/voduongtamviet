import React from "react";
import { Link, useLocation } from "react-router-dom";
import { NAVIGATION_ITEMS } from "../../constants/navigation";

const Navigation: React.FC = () => {
  const location = useLocation();

  return (
    <div className="hidden md:flex justify-center items-center py-3">
      <nav className="flex flex-row gap-6 items-center">
        {NAVIGATION_ITEMS.map((item) => (
          <Link
            key={item.name}
            to={item.href}
            className={`text-sm uppercase tracking-wider transition-all pb-1 duration-200 ${
              location.pathname === item.href
                ? "text-[#FD1610] font-semibold border-b-2 border-[#FD1610]"
                : "text-black font-medium hover:text-[#FD1610]"
            } flex items-center gap-1`}
          >
            {item.icon && (
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            )}
            {item.name}
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default Navigation;
