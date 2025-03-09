"use client";

import { useState } from "react";
import Button from "@/components/Button";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    location: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="w-full py-16 px-6 text-center">
      <h2 className="text-3xl font-bold text-primary">Get Started Today!</h2>
      <p className="text-lg text-gray-600 mt-4">
        Fill out the form below, and our team will get in touch with you.
      </p>
      <form className="mt-8 max-w-2xl mx-auto bg-white/80 backdrop-blur-md shadow-lg rounded-lg p-8 border border-gray-200">
        {[
          { id: "name", label: "Full Name", type: "text", placeholder: "Enter your name" },
          { id: "phone", label: "Phone Number", type: "tel", placeholder: "Enter your phone number" },
          { id: "location", label: "Location", type: "text", placeholder: "Enter your location" },
        ].map((field, index) => (
          <div key={index} className="relative mb-6">
            <input
              type={field.type}
              id={field.id}
              name={field.id}
              value={formData[field.id as keyof typeof formData]}
              onChange={handleChange}
              required
              className="peer w-full border border-gray-300 rounded-lg p-3 text-gray-900 bg-transparent outline-none transition-all duration-300 focus:border-primary focus:ring-2 focus:ring-primary"
              placeholder={field.placeholder}
            />
            {/* Label - Hide when input has value */}
            {!formData[field.id as keyof typeof formData] && (
              <label
                htmlFor={field.id}
                className="absolute left-3 top-3 text-gray-500 text-sm transition-all duration-300 peer-placeholder-shown:top-3 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:top-[-10px] peer-focus:text-sm peer-focus:text-primary bg-white px-1"
              >
                {field.label}
              </label>
            )}
          </div>
        ))}
        <Button
          href="#"
          className="w-full bg-primary text-white py-3 rounded-lg text-lg font-semibold shadow-md transition-transform duration-300 hover:scale-105 hover:shadow-lg"
          ariaLabel="Submit Partner Form"
        >
          Submit
        </Button>
      </form>
    </section>
  );
};

export default ContactForm;
