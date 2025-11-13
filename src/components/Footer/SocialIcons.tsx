import React from "react";
import { SOCIAL_LINKS } from "../../constants/social";

const SocialIcons: React.FC = () => {
  return (
    <div className="flex space-x-4">
      {SOCIAL_LINKS.map((social) => (
        <a
          key={social.name}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer nofollow"
          className="group relative transition-all duration-300"
          aria-label={social.name}
        >
          <img
            src={social.icon}
            alt={social.alt}
            className="w-6 h-6 transition-all duration-300 group-hover:scale-125 group-hover:brightness-110 group-hover:drop-shadow-lg"
          />
        </a>
      ))}
    </div>
  );
};

export default SocialIcons;
