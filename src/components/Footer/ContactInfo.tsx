import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import { CONTACT_INFO } from "../../constants/footer";

const ContactInfo: React.FC = () => {
  return (
    <div>
      <h4 className="text-lg font-semibold mb-4">Liên hệ</h4>
      <div className="space-y-3 text-gray-400">
        <div className="flex items-center space-x-2">
          <Mail className="w-5 h-5 text-[#FD1610]" />
          <span>{CONTACT_INFO.email}</span>
        </div>
        <div className="flex items-center space-x-2">
          <Phone className="w-5 h-5 text-[#FD1610]" />
          <span>{CONTACT_INFO.phone}</span>
        </div>
        <div className="flex items-start space-x-2">
          <MapPin className="w-5 h-5 text-[#FD1610]" />
          <span>{CONTACT_INFO.address}</span>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
