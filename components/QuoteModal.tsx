"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function QuoteModal({ isOpen, onClose }: QuoteModalProps) {
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
      setSubmitted(true);
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-white/95 backdrop-blur-sm overflow-y-auto animate-fadeIn"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="relative w-full max-w-[620px] bg-black text-white rounded-[25px] border-[3px] border-[#1cc76a] p-6 sm:p-10 shadow-2xl my-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close modal"
          className="absolute top-4 right-4 w-9 h-9 rounded-full bg-neutral-800 hover:bg-neutral-700 text-white flex items-center justify-center text-xl font-bold cursor-pointer transition z-10"
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
              href="tel:(647) 492-2636"
              className="inline-block text-[#0fa958] font-bold text-2xl hover:underline"
            >
              (647) 492-2636
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
            <h2 className="font-anton text-3xl sm:text-5xl text-center text-white tracking-wide uppercase">
              Enter Your Details
            </h2>

            <div className="flex justify-center my-3">
              <Image
                src="/images/0_arrow-down.gif"
                alt="Scroll down indicator"
                width={70}
                height={70}
                className="animate-bounce-arrow"
                unoptimized
              />
            </div>

            <form onSubmit={handleSubmit} className="space-y-3.5 mt-4">
              <div>
                <input
                  type="text"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className={`w-full bg-white text-gray-900 placeholder-gray-500 rounded-md px-4 py-3 text-base font-medium outline-none focus:ring-2 focus:ring-[#1cc76a] transition ${
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
                  className={`w-full bg-white text-gray-900 placeholder-gray-500 rounded-md px-4 py-3 text-base font-medium outline-none focus:ring-2 focus:ring-[#1cc76a] transition ${
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
                  className={`w-full bg-white text-gray-900 placeholder-gray-500 rounded-md px-4 py-3 text-base font-medium outline-none focus:ring-2 focus:ring-[#1cc76a] transition ${
                    errors.phone ? "ring-2 ring-red-500" : ""
                  }`}
                />
                {errors.phone && (
                  <p className="text-red-400 text-xs mt-1 ml-1">{errors.phone}</p>
                )}
              </div>

              <div>
                <input
                  type="text"
                  placeholder="How Can We Help?"
                  value={formData.service}
                  onChange={(e) =>
                    setFormData({ ...formData, service: e.target.value })
                  }
                  className="w-full bg-white text-gray-900 placeholder-gray-500 rounded-md px-4 py-3 text-base font-medium outline-none focus:ring-2 focus:ring-[#1cc76a] transition"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full bg-[#1cc76a] hover:bg-[#17a858] text-white font-bold py-3.5 px-6 rounded-full text-xl sm:text-2xl flex items-center justify-center gap-2 btn-pulse-glow btn-glimmer shadow-lg cursor-pointer transition transform active:scale-[0.98]"
                >
                  <span>👉</span>
                  <span>Get A Free Quote</span>
                  <span>👈</span>
                </button>
              </div>

              <div className="text-center pt-3 pb-1">
                <p className="text-gray-300 text-sm sm:text-base font-semibold">
                  Or Call Us At:{" "}
                  <a
                    href="tel:(647) 492-2636"
                    className="text-[#1cc76a] font-bold hover:underline"
                  >
                    (647) 492-2636
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
