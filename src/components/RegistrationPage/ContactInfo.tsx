import React from "react";
import { getContactItems } from "../../constants/footer";

const ContactInfo: React.FC = () => {
  const contactItems = getContactItems();

  return (
    <div
      className="bg-gradient-to-br from-gray-50 to-gray-100 p-6 rounded-2xl border border-gray-200 relative overflow-hidden group animate-fade-in-up"
      style={{ animationDelay: "0.4s", animationFillMode: "both" }}
    >
      <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-[#FD1610]/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      <div className="relative z-10">
        <h3 className="text-lg font-semibold mb-4 text-gray-800 group-hover:text-[#FD1610] transition-colors duration-300">
          Thông tin liên hệ
        </h3>
        <div className="space-y-3 text-gray-700">
          {contactItems.map((contact, index) => {
            const IconComponent = contact.icon;

            const content = (
              <div
                className={`flex items-center transition-colors duration-300 ${
                  contact.isClickable
                    ? "cursor-pointer hover:text-[#FD1610] group/item"
                    : "group-hover:text-gray-800"
                }`}
                style={{
                  animation: `fadeInUp 0.5s ease-out ${
                    0.5 + index * 0.1
                  }s both`,
                }}
              >
                <IconComponent
                  className={`w-5 h-5 mr-2 text-[#FD1610] transition-transform duration-300 ${
                    contact.isClickable
                      ? "group-hover/item:scale-110 group-hover/item:rotate-12"
                      : "group-hover:scale-110"
                  }`}
                />
                <span className="relative">
                  {contact.label}: {contact.value}
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
    </div>
  );
};

export default ContactInfo;
