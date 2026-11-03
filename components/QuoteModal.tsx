"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { MAKES, PHONE_DISPLAY, PHONE_HREF, SERVICES } from "@/lib/site";

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function QuoteModal({ isOpen, onClose }: QuoteModalProps) {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const validate = () => {
    const newErrors: { [key: string]: string } = {};
    if (!formData.name.trim()) newErrors.name = "Please enter your name";
    if (!formData.email.trim()) {
      newErrors.email = "Please enter your email";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }
    if (!formData.phone.trim()) {
      newErrors.phone = "Please enter your phone number";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      router.push("/thank-you");
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#04242d]/85 backdrop-blur-sm overflow-y-auto"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="relative w-full max-w-[620px] bg-white text-black rounded-[16px] p-6 sm:p-10 shadow-2xl my-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close modal"
          className="absolute top-4 right-4 w-9 h-9 rounded-full bg-gray-100 hover:bg-gray-200 text-black flex items-center justify-center text-xl font-bold cursor-pointer transition z-10"
        >
          &times;
        </button>

        {submitted ? (
          <div className="text-center py-8 space-y-4">
            <div className="w-16 h-16 bg-[#1cc76a] rounded-full flex items-center justify-center mx-auto text-white text-3xl font-bold">
              ✓
            </div>
            <h2 className="font-anton text-3xl sm:text-4xl text-white tracking-wide uppercase">
              Thank You!
            </h2>
            <p className="text-gray-300 text-lg">
              We received your details. One of our master mechanics will contact
              you shortly with your free quote.
            </p>
            <p className="text-sm text-gray-400">
              Need immediate assistance? Call us right now:
            </p>
            <a
              href={PHONE_HREF}
              className="inline-block text-[#0fa958] font-bold text-2xl hover:underline"
            >
              {PHONE_DISPLAY}
            </a>
            <div className="pt-4">
              <button
                onClick={onClose}
                className="px-6 py-2.5 rounded-full bg-neutral-800 hover:bg-neutral-700 text-white text-sm font-semibold cursor-pointer"
              >
                Close Window
              </button>
            </div>
          </div>
        ) : (
          <div>
            <h2 className="text-3xl sm:text-[40px] font-bold tracking-tight text-center text-black">
              Enter Your Details
            </h2>

            <form onSubmit={handleSubmit} className="space-y-3.5 mt-4">
              <div>
                <input
                  type="text"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className={`w-full bg-white text-gray-900 placeholder-gray-500 border border-gray-300 rounded-md px-4 py-3 text-base font-medium outline-none focus:ring-2 focus:ring-[#00AF66] transition ${
                    errors.name ? "ring-2 ring-red-500" : ""
                  }`}
                />
                {errors.name && (
                  <p className="text-red-400 text-xs mt-1 ml-1">{errors.name}</p>
                )}
              </div>

              <div>
                <input
                  type="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className={`w-full bg-white text-gray-900 placeholder-gray-500 border border-gray-300 rounded-md px-4 py-3 text-base font-medium outline-none focus:ring-2 focus:ring-[#00AF66] transition ${
                    errors.email ? "ring-2 ring-red-500" : ""
                  }`}
                />
                {errors.email && (
                  <p className="text-red-400 text-xs mt-1 ml-1">{errors.email}</p>
                )}
              </div>

              <div>
                <input
                  type="tel"
                  placeholder="Your Phone No."
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  className={`w-full bg-white text-gray-900 placeholder-gray-500 border border-gray-300 rounded-md px-4 py-3 text-base font-medium outline-none focus:ring-2 focus:ring-[#00AF66] transition ${
                    errors.phone ? "ring-2 ring-red-500" : ""
                  }`}
                />
                {errors.phone && (
                  <p className="text-red-400 text-xs mt-1 ml-1">{errors.phone}</p>
                )}
              </div>

              <div>
                <select
                  aria-label="How can we help?"
                  value={formData.service}
                  onChange={(e) =>
                    setFormData({ ...formData, service: e.target.value })
                  }
                  className={`w-full bg-white border border-gray-300 rounded-md px-4 py-3 text-base font-medium outline-none focus:ring-2 focus:ring-[#00AF66] transition ${
                    formData.service ? "text-gray-900" : "text-gray-500"
                  }`}
                >
                  <option value="">How Can We Help?</option>
                  <optgroup label="Services">
                    {SERVICES.map((service) => (
                      <option key={service.name} value={service.name}>
                        {service.name}
                      </option>
                    ))}
                  </optgroup>
                  <optgroup label="Mechanic for your make">
                    {MAKES.map((make) => (
                      <option key={make.name} value={`${make.name} Mechanic`}>
                        {make.name} Mechanic
                      </option>
                    ))}
                  </optgroup>
                </select>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full bg-[linear-gradient(#00AF66,rgba(0,175,102,0.65))] hover:opacity-90 text-white font-medium py-3.5 px-6 rounded-[12px] text-lg flex items-center justify-center cursor-pointer transition"
                >
                  <span>Get A Free Quote</span>
                </button>
              </div>

              <div className="text-center pt-3 pb-1">
                <p className="text-gray-700 text-sm sm:text-base font-semibold">
                  Or Call Us At:{" "}
                  <a
                    href={PHONE_HREF}
                    className="text-[#00AF66] font-bold hover:underline"
                  >
                    {PHONE_DISPLAY}
                  </a>
                </p>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
