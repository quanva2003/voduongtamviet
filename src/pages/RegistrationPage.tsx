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
      <div className="min-h-screen section-gradient-light relative overflow-hidden">
        <div className="absolute inset-0 opacity-3">
          <div className="absolute top-1/4 left-0 w-96 h-96 bg-gradient-to-r from-[#FD1610]/10 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-gradient-to-l from-[#FD1610]/10 to-transparent rounded-full blur-3xl"></div>
        </div>
        <HeroSection />

        <div className="container mx-auto px-4 py-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <RegistrationForm
              formData={formData}
              onInputChange={handleInputChange}
              onSubmit={handleSubmit}
            />

            <div className="animate-fade-in-left">
              <div className="bg-white p-8 rounded-2xl relative overflow-hidden group">
                <div className="relative z-10">
                  <h2 className="text-2xl font-bold mb-6 text-center gradient-text-secondary">
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
          </div>

          <CourseInfo />
        </div>
      </div>
    </>
  );
};

export default RegistrationPage;
