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
          className={`p-6 border-2 rounded-2xl cursor-pointer transition-all duration-300 relative overflow-hidden group ${
            selectedLocation === location.id
              ? "border-[#FD1610] gradient-card shadow-lg"
              : "border-gray-200 hover:border-[#FD1610]/50 hover:shadow-lg"
          }`}
          onClick={() => onLocationSelect(location.id)}
          style={{
            animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`,
          }}
        >
          {selectedLocation === location.id && (
            <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-[#FD1610]/20 to-transparent rounded-bl-full"></div>
          )}
          <div className="relative z-10">
            <h3
              className={`font-semibold text-lg mb-2 transition-colors duration-300 ${
                selectedLocation === location.id
                  ? "text-[#FD1610]"
                  : "text-black group-hover:text-[#FD1610]"
              }`}
            >
              {location.name}
            </h3>
            <p className="text-gray-600 mb-2 flex items-center group-hover:text-gray-700 transition-colors duration-300">
              <MapPin className="w-4 h-4 mr-2 text-[#FD1610] group-hover:scale-110 transition-transform duration-300" />
              {location.address}
            </p>
            <p className="text-gray-600 mb-2 flex items-center group-hover:text-gray-700 transition-colors duration-300">
              <User className="w-4 h-4 mr-2 text-[#FD1610] group-hover:scale-110 transition-transform duration-300" />
              {location.instructor}
            </p>
            <p className="text-gray-600 flex items-center group-hover:text-gray-700 transition-colors duration-300">
              <Clock className="w-4 h-4 mr-2 text-[#FD1610] group-hover:scale-110 transition-transform duration-300" />
              {location.schedule}
            </p>
            {selectedLocation === location.id && (
              <div className="mt-4 h-0.5 w-full bg-gradient-to-r from-[#FD1610] to-[#d4140e] rounded-full"></div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default LocationList;
