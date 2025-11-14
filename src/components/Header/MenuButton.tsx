import React from "react";

interface MenuButtonProps {
  isOpen: boolean;
  onClick: () => void;
}

const MenuButton: React.FC<MenuButtonProps> = ({ isOpen, onClick }) => {
  return (
    <button
      className="md:hidden mb-5 w-10 h-10 transition-all duration-300 text-black hover:text-[#FD1610] relative group"
      onClick={onClick}
      aria-label="Toggle menu"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-[#FD1610]/10 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      <svg
        className={`w-10 h-10 relative z-10 transition-all duration-300 ${
          isOpen ? "rotate-90 scale-110" : "group-hover:scale-110"
        }`}
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        {isOpen ? (
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M6 18L18 6M6 6l12 12"
            className="transition-all duration-300"
          />
        ) : (
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
            className="transition-all duration-300"
          />
        )}
      </svg>
    </button>
  );
};

export default MenuButton;
