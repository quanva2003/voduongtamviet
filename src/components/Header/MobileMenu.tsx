import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { NAVIGATION_ITEMS } from "../../constants/navigation";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
  const location = useLocation();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed min-h-screen inset-0 bg-black/50 backdrop-blur-sm z-[9998] md:hidden transition-opacity duration-300"
        onClick={onClose}
      />

      {/* Menu */}
      <div
        className={`fixed top-0 right-0 h-screen w-80 max-w-[85vw] bg-white shadow-2xl z-[9999] md:hidden transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-200 gradient-primary relative overflow-hidden">
            <div className="absolute inset-0 opacity-20">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white rounded-full blur-2xl"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-white rounded-full blur-xl"></div>
            </div>
            <h2 className="text-xl font-bold text-white relative z-10 animate-fade-in-right">Menu</h2>
            <button
              onClick={onClose}
              className="p-2 rounded-lg hover:bg-white/20 transition-all duration-300 relative z-10 group hover:scale-110"
              aria-label="Close menu"
            >
              <svg
                className="w-6 h-6 text-white transition-transform duration-300 group-hover:rotate-90"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* Navigation Items */}
          <nav className="flex-1 overflow-y-auto py-6 px-4">
            <div className="space-y-2">
              {NAVIGATION_ITEMS.map((item, index) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`group flex items-center gap-4 px-4 py-4 rounded-xl transition-all duration-300 relative overflow-hidden ${
                    location.pathname === item.href
                      ? "gradient-primary text-white shadow-lg"
                      : "text-gray-700 hover:bg-gray-100 hover:text-[#FD1610]"
                  }`}
                  onClick={onClose}
                  style={{
                    animation: `slideInRight 0.4s ease-out ${
                      index * 0.1
                    }s both`,
                  }}
                >
                  {/* Hover gradient effect */}
                  {location.pathname !== item.href && (
                    <div className="absolute inset-0 bg-gradient-to-r from-[#FD1610]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  )}
                  
                  {item.icon && (
                    <div
                      className={`flex-shrink-0 relative z-10 transition-all duration-300 ${
                        location.pathname === item.href
                          ? "text-white scale-110"
                          : "text-[#FD1610] group-hover:scale-110 group-hover:rotate-12"
                      }`}
                    >
                      <svg
                        className="w-5 h-5"
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
                    </div>
                  )}
                  <span className="font-semibold text-base uppercase tracking-wide relative z-10">
                    {item.name}
                  </span>
                  {location.pathname === item.href && (
                    <div className="ml-auto w-2 h-2 bg-white rounded-full animate-pulse-slow relative z-10"></div>
                  )}
                  
                  {/* Active indicator line */}
                  {location.pathname === item.href && (
                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-white/50 rounded-r-full"></div>
                  )}
                </Link>
              ))}
            </div>
          </nav>

          {/* Footer */}
          <div className="p-6 border-t border-gray-200 bg-gradient-to-br from-gray-50 to-gray-100">
            <p className="text-sm text-gray-600 text-center font-medium">
              Võ đường Tâm Việt
            </p>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        @keyframes fadeInRight {
          from {
            opacity: 0;
            transform: translateX(-10px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        .animate-fade-in-right {
          animation: fadeInRight 0.5s ease-out;
        }
      `}</style>
    </>
  );
};

export default MobileMenu;
