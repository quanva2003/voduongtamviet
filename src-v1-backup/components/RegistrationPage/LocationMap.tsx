import React from "react";
import { LOCATIONS } from "../../constants/registrationpage";

interface LocationMapProps {
  selectedLocation: string | null;
}

const LocationMap: React.FC<LocationMapProps> = ({ selectedLocation }) => {
  const selectedLocationData = LOCATIONS.find(
    (loc) => loc.id === selectedLocation
  );

  if (!selectedLocationData) return null;

  return (
    <div className="mb-6" data-aos="fade-up" data-aos-delay="300">
      <h3 className="text-lg font-semibold mb-4 text-gray-800">
        Bản đồ: {selectedLocationData.name}
      </h3>
      <div className="w-full h-64 rounded-2xl overflow-hidden shadow-lg">
        <iframe
          src={selectedLocationData.mapUrl}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title={selectedLocationData.name}
        ></iframe>
      </div>
    </div>
  );
};

export default LocationMap;

