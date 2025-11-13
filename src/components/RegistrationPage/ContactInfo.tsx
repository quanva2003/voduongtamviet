import React from "react";
import { CONTACT_INFO_TITLE, CONTACT_INFO } from "../../constants/registrationpage";

const ContactInfo: React.FC = () => {
  return (
    <div
      className="bg-gradient-to-br from-gray-50 to-gray-100 p-6 rounded-2xl border border-gray-200"
      data-aos="fade-up"
      data-aos-delay="400"
    >
      <h3 className="text-lg font-semibold mb-4 text-gray-800">
        {CONTACT_INFO_TITLE}
      </h3>
      <div className="space-y-3 text-gray-700">
        {CONTACT_INFO.map((contact, index) => {
          const IconComponent = contact.icon;
          return (
            <p key={index} className="flex items-center">
              <IconComponent className="w-5 h-5 mr-2 text-[#FD1610]" />
              <span>
                {contact.label}: {contact.value}
              </span>
            </p>
          );
        })}
      </div>
    </div>
  );
};

export default ContactInfo;

