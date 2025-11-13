import React, { useState } from "react";
import SEO from "../components/SEO";
import { SEO_DATA } from "../constants/seo";
import HeroSection from "../components/RegistrationPage/HeroSection";
import RegistrationForm from "../components/RegistrationPage/RegistrationForm";
import LocationList from "../components/RegistrationPage/LocationList";
import LocationMap from "../components/RegistrationPage/LocationMap";
import ContactInfo from "../components/RegistrationPage/ContactInfo";
import CourseInfo from "../components/RegistrationPage/CourseInfo";
import {
  LOCATIONS_TITLE,
  SUCCESS_MESSAGE,
} from "../constants/registrationpage";

const RegistrationPage: React.FC = () => {
  const [selectedLocation, setSelectedLocation] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    age: "",
    experience: "",
    location: "",
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(SUCCESS_MESSAGE);
    console.log("Form submitted:", formData);
  };

  const handleLocationSelect = (locationId: string) => {
    setSelectedLocation(locationId);
  };

  return (
    <>
      <SEO {...SEO_DATA.registration} />
      <div className="min-h-screen">
        <HeroSection />

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <RegistrationForm
            formData={formData}
            onInputChange={handleInputChange}
            onSubmit={handleSubmit}
          />

          <div data-aos="fade-left">
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
              <h2 className="text-2xl font-bold mb-6 text-center bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
                {LOCATIONS_TITLE}
              </h2>

              <LocationList
                selectedLocation={selectedLocation}
                onLocationSelect={handleLocationSelect}
              />

              <LocationMap selectedLocation={selectedLocation} />

              <ContactInfo />
            </div>
          </div>
        </div>

        <CourseInfo />
      </div>
    </div>
    </>
  );
};

export default RegistrationPage;
