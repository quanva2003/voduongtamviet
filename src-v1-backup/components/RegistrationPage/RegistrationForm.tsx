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
    <div className="animate-fade-in-right">
      <div className="bg-white p-8 rounded-2xl relative overflow-hidden group">
        <div className="relative z-10">
          <h2 className="text-2xl font-bold mb-6 text-center gradient-text-primary">
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
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#FD1610] focus:border-transparent transition-all duration-300 hover:border-[#FD1610]/50 focus:shadow-lg focus:shadow-[#FD1610]/20"
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
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#FD1610] focus:border-transparent transition-all duration-300 hover:border-[#FD1610]/50 focus:shadow-lg focus:shadow-[#FD1610]/20"
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#FD1610] focus:border-transparent transition-all duration-300 hover:border-[#FD1610]/50 focus:shadow-lg focus:shadow-[#FD1610]/20"
                    placeholder={field.placeholder}
                  />
                </div>
              );
            })}

            <button
              type="submit"
              className="w-full btn-gradient text-white font-bold py-4 px-6 rounded-xl uppercase tracking-wider relative overflow-hidden group"
            >
              <span className="relative z-10">{SUBMIT_BUTTON_TEXT}</span>
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegistrationForm;
