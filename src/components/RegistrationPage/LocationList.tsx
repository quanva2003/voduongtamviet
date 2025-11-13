import React from "react";
import { MapPin, User, Clock } from "lucide-react";
import { LOCATIONS } from "../../constants/registrationpage";

interface LocationListProps {
  selectedLocation: string | null;
  onLocationSelect: (locationId: string) => void;
}

const LocationList: React.FC<LocationListProps> = ({
  selectedLocation,
  onLocationSelect,
}) => {
  return (
    <div className="space-y-4 mb-8">
      {LOCATIONS.map((location, index) => (
        <div
          key={location.id}
          className={`p-6 border-2 rounded-2xl cursor-pointer transition-all duration-300 transform hover:-translate-y-1 ${
            selectedLocation === location.id
              ? "border-[#FD1610] bg-gradient-to-br from-red-50 to-red-100 shadow-lg"
              : "border-gray-200 hover:border-[#FD1610]/30 hover:shadow-md"
          }`}
          onClick={() => onLocationSelect(location.id)}
          data-aos="fade-up"
          data-aos-delay={index * 100}
        >
          <h3 className="font-semibold text-lg text-black mb-2">
            {location.name}
          </h3>
          <p className="text-gray-600 mb-2 flex items-center">
            <MapPin className="w-4 h-4 mr-2 text-[#FD1610]" />
            {location.address}
          </p>
          <p className="text-gray-600 mb-2 flex items-center">
            <User className="w-4 h-4 mr-2 text-[#FD1610]" />
            {location.instructor}
          </p>
          <p className="text-gray-600 flex items-center">
            <Clock className="w-4 h-4 mr-2 text-[#FD1610]" />
            {location.schedule}
          </p>
        </div>
      ))}
    </div>
  );
};

export default LocationList;
