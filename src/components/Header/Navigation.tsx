import React from "react";
import { Link, useLocation } from "react-router-dom";
import { NAVIGATION_ITEMS } from "../../constants/navigation";

const Navigation: React.FC = () => {
  const location = useLocation();

  return (
    <div className="hidden md:flex justify-center items-center py-3">
      <nav className="flex flex-row gap-6 items-center">
        {NAVIGATION_ITEMS.map((item, index) => (
          <Link
            key={item.name}
            to={item.href}
            className={`text-sm uppercase tracking-wider transition-all pb-1 duration-300 relative group ${
              location.pathname === item.href
                ? "text-[#FD1610] font-semibold"
                : "text-black font-medium hover:text-[#FD1610]"
            } flex items-center gap-1`}
            style={{
              animation: `fadeInDown 0.6s ease-out ${index * 0.1}s both`
            }}
          >
            {/* Active underline with gradient */}
            {location.pathname === item.href ? (
              <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#FD1610] via-[#d4140e] to-[#FD1610] rounded-full"></span>
            ) : (
              <span className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-[#FD1610] to-[#d4140e] rounded-full w-0 group-hover:w-full transition-all duration-300"></span>
            )}
            
            {item.icon && (
              <svg
                className={`w-4 h-4 transition-transform duration-300 ${
                  location.pathname === item.href 
                    ? "scale-110" 
                    : "group-hover:scale-110 group-hover:rotate-12"
                }`}
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
            <span className="relative z-10">{item.name}</span>
            
            {/* Hover glow effect */}
            {location.pathname !== item.href && (
              <span className="absolute inset-0 bg-gradient-to-r from-[#FD1610]/10 to-transparent rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-0"></span>
            )}
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default Navigation;
