import React from "react";
import { getContactItems } from "../../constants/footer";

const ContactInfo: React.FC = () => {
  const contactItems = getContactItems();

  return (
    <div>
      <h4 className="text-lg font-semibold mb-4">Liên hệ</h4>
      <div className="space-y-3 text-gray-400">
        {contactItems.map((contact, index) => {
          const IconComponent = contact.icon;

          const content = (
            <div
              className={`flex items-center space-x-2 transition-colors duration-300 ${
                contact.label === "Địa chỉ" ? "items-start" : "items-center"
              } ${
                contact.isClickable
                  ? "cursor-pointer hover:text-white group/item"
                  : ""
              }`}
            >
              <IconComponent
                className={`w-5 h-5 text-[#FD1610] transition-transform duration-300 ${
                  contact.isClickable
                    ? "group-hover/item:scale-110 group-hover/item:rotate-12"
                    : ""
                }`}
              />
              <span className="relative">
                {contact.value}
                {contact.isClickable && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#FD1610] to-[#d4140e] scale-x-0 group-hover/item:scale-x-100 transition-transform duration-300 origin-left"></span>
                )}
              </span>
            </div>
          );

          if (contact.isClickable && contact.href) {
            return (
              <a
                key={index}
                href={contact.href}
                className="block no-underline"
                target={contact.label === "Địa chỉ" ? "_blank" : undefined}
                rel={
                  contact.label === "Địa chỉ"
                    ? "noopener noreferrer"
                    : undefined
                }
              >
                {content}
              </a>
            );
          }

          return <div key={index}>{content}</div>;
        })}
      </div>
    </div>
  );
};

export default ContactInfo;
