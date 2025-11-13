import React from "react";
import {
  FORM_TITLE,
  FORM_FIELDS,
  LOCATIONS,
  SUBMIT_BUTTON_TEXT,
} from "../../constants/registrationpage";

interface FormData {
  name: string;
  email: string;
  phone: string;
  age: string;
  experience: string;
  location: string;
  message: string;
}

interface RegistrationFormProps {
  formData: FormData;
  onInputChange: (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => void;
  onSubmit: (e: React.FormEvent) => void;
}

const RegistrationForm: React.FC<RegistrationFormProps> = ({
  formData,
  onInputChange,
  onSubmit,
}) => {
  return (
    <div data-aos="fade-right">
      <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
        <h2 className="text-2xl font-bold mb-6 text-center bg-gradient-to-r from-[#FD1610] to-[#b0100c] bg-clip-text text-transparent">
          {FORM_TITLE}
        </h2>
        <form onSubmit={onSubmit} className="space-y-6">
          {FORM_FIELDS.map((field) => {
            if (field.type === "select") {
              return (
                <div key={field.name}>
                  <label
                    htmlFor={field.name}
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    {field.label} {field.required && "*"}
                  </label>
                  <select
                    id={field.name}
                    name={field.name}
                    required={field.required}
                    value={formData[field.name as keyof FormData] as string}
                    onChange={onInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#FD1610] focus:border-transparent transition-all duration-300"
                  >
                    {field.name === "location" ? (
                      <>
                        <option value="">Chọn cơ sở học</option>
                        {LOCATIONS.map((location) => (
                          <option key={location.id} value={location.id}>
                            {location.name}
                          </option>
                        ))}
                      </>
                    ) : (
                      field.options?.map((option) => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))
                    )}
                  </select>
                </div>
              );
            }

            if (field.type === "textarea") {
              return (
                <div key={field.name}>
                  <label
                    htmlFor={field.name}
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    {field.label}
                  </label>
                  <textarea
                    id={field.name}
                    name={field.name}
                    rows={4}
                    value={formData[field.name as keyof FormData] as string}
                    onChange={onInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#FD1610] focus:border-transparent transition-all duration-300"
                    placeholder={field.placeholder}
                  />
                </div>
              );
            }

            return (
              <div key={field.name}>
                <label
                  htmlFor={field.name}
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  {field.label} {field.required && "*"}
                </label>
                <input
                  type={field.type}
                  id={field.name}
                  name={field.name}
                  required={field.required}
                  min={field.name === "age" ? "5" : undefined}
                  max={field.name === "age" ? "80" : undefined}
                  value={formData[field.name as keyof FormData] as string}
                  onChange={onInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#FD1610] focus:border-transparent transition-all duration-300"
                  placeholder={field.placeholder}
                />
              </div>
            );
          })}

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-[#FD1610] to-[#d4140e] hover:from-[#d4140e] hover:to-[#b0100c] text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            {SUBMIT_BUTTON_TEXT}
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegistrationForm;
