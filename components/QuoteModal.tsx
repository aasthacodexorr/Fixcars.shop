"use client";

import React, { useState, useEffect, useMemo } from "react";
import { useRouter, usePathname } from "next/navigation";
import { PHONE_DISPLAY, PHONE_HREF } from "@/lib/site";
import { getServiceInfo } from "@/lib/services";

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  serviceSlug?: string;
  serviceOverride?: string;
}

export default function QuoteModal({
  isOpen,
  onClose,
  serviceSlug: propSlug,
  serviceOverride,
}: QuoteModalProps) {
  const router = useRouter();
  const pathname = usePathname();

  // Resolve active service dynamically from override, prop, or current URL pathname (null on homepage)
  const activeService = useMemo(() => {
    return getServiceInfo(serviceOverride || propSlug || pathname);
  }, [serviceOverride, propSlug, pathname]);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setSubmitError(null);

    const serviceToSubmit =
      formData.service.trim() || activeService?.name || "General Inquiry";

    try {
      const response = await fetch("/api/quote", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          service: serviceToSubmit,
        }),
      });

      const result = await response.json().catch(() => ({}));

      if (!response.ok) {
        throw new Error(result.error || "Failed to submit quote request.");
      }

      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        service: "",
      });

      // If submitted from a service page, redirect to that service's dedicated thank you page.
      // If submitted from home page, simply redirect to /thank-you with no query params.
      const targetThankYou = activeService?.slug
        ? `/${activeService.slug}/thank-you`
        : "/thank-you";

      router.push(targetThankYou);
      onClose();
    } catch (err: any) {
      console.error("Quote submission error:", err);
      setSubmitError(
        err?.message || "Something went wrong. Please call us directly."
      );
    } finally {
      setIsSubmitting(false);
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
          className="absolute top-3 right-4 w-10 h-10 rounded-full text-gray-600 flex items-center justify-center text-4xl leading-none cursor-pointer transition z-10 hover:text-black"
        >
          <span className="flex items-center justify-center h-full w-full">×</span>
        </button>

        {submitted ? (
          <div className="text-center py-8 space-y-4">
            <div className="w-16 h-16 bg-[#1cc76a] rounded-full flex items-center justify-center mx-auto text-white text-3xl font-bold">
              ✓
            </div>
            <h2 className="font-anton text-3xl sm:text-4xl text-black tracking-wide uppercase">
              Thank You!
            </h2>
            <p className="text-gray-700 text-lg">
              We received your details. One of our master mechanics will contact
              you shortly with your free quote.
            </p>
            <p className="text-sm text-gray-600">
              Need immediate assistance? Call us right now:
            </p>
            <a
              href={PHONE_HREF}
              className="inline-block text-[#00AF66] font-bold text-2xl hover:underline"
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
                  disabled={isSubmitting}
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className={`w-full bg-white text-gray-900 placeholder-gray-500 border border-gray-300 rounded-md px-4 py-3 text-base font-medium outline-none focus:ring-2 focus:ring-[#00AF66] transition ${
                    errors.name ? "ring-2 ring-red-500" : ""
                  }`}
                />
                {errors.name && (
                  <p className="text-red-500 text-xs mt-1 ml-1 font-medium">
                    {errors.name}
                  </p>
                )}
              </div>

              <div>
                <input
                  type="email"
                  placeholder="Your Email"
                  disabled={isSubmitting}
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className={`w-full bg-white text-gray-900 placeholder-gray-500 border border-gray-300 rounded-md px-4 py-3 text-base font-medium outline-none focus:ring-2 focus:ring-[#00AF66] transition ${
                    errors.email ? "ring-2 ring-red-500" : ""
                  }`}
                />
                {errors.email && (
                  <p className="text-red-500 text-xs mt-1 ml-1 font-medium">
                    {errors.email}
                  </p>
                )}
              </div>

              <div>
                <input
                  type="tel"
                  placeholder="Your Phone No."
                  disabled={isSubmitting}
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  className={`w-full bg-white text-gray-900 placeholder-gray-500 border border-gray-300 rounded-md px-4 py-3 text-base font-medium outline-none focus:ring-2 focus:ring-[#00AF66] transition ${
                    errors.phone ? "ring-2 ring-red-500" : ""
                  }`}
                />
                {errors.phone && (
                  <p className="text-red-500 text-xs mt-1 ml-1 font-medium">
                    {errors.phone}
                  </p>
                )}
              </div>

              <div>
                <input
                  type="text"
                  placeholder="How Can We Help?"
                  disabled={isSubmitting}
                  value={formData.service}
                  onChange={(e) =>
                    setFormData({ ...formData, service: e.target.value })
                  }
                  className={`w-full bg-white text-gray-900 placeholder-gray-500 border border-gray-300 rounded-md px-4 py-3 text-base font-medium outline-none focus:ring-2 focus:ring-[#00AF66] transition ${
                    errors.service ? "ring-2 ring-red-500" : ""
                  }`}
                />
                {errors.service && (
                  <p className="text-red-500 text-xs mt-1 ml-1 font-medium">
                    {errors.service}
                  </p>
                )}
              </div>

              {submitError && (
                <div className="bg-red-50 border border-red-200 text-red-700 text-sm p-3 rounded-md">
                  {submitError}
                </div>
              )}

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full bg-[linear-gradient(#00AF66,rgba(0,175,102,0.65))] hover:opacity-90 text-white font-medium py-3.5 px-6 rounded-[12px] text-lg flex items-center justify-center cursor-pointer transition ${
                    isSubmitting ? "opacity-75 cursor-not-allowed" : ""
                  }`}
                >
                  <span>{isSubmitting ? "Sending..." : "Get A Free Quote"}</span>
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
