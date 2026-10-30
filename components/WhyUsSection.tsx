"use client";

import React from "react";
import Image from "next/image";

export default function WhyUsSection() {
  const features = [
    {
      img: "/images/11_Latest-Scanners-Machinery-Diagnostic-Tools2.png",
      title: "Expert Brake Repairs",
    },
    {
      img: "/images/12_15-Years-of-Experience.png",
      title: "Customization For Brake Systems",
    },
    {
      img: "/images/13_Fully-Qualified-Technicians2.png",
      title: "Skilled Brake Technicians",
    },
    {
      img: "/images/14_Less-Expensive-Than-Dealerships3.png",
      title: "Comprehensive Range Of Brake Services",
    },
    {
      img: "/images/15_Genuine-Parts-Or-Equivalents.png",
      title: "Genuine Brake Parts & Accessories",
    },
    {
      img: "/images/16_Maintain-Your-Warranty2.png",
      title: "Customer Satisfaction Guaranteed",
    },
    {
      img: "/images/17_Fast-Bookings-Service.png",
      title: "Quick Turnaround Time",
    },
    {
      img: "/images/18_Convenient-Location-Parking3.png",
      title: "Convenient Location & Parking",
    },
  ];

  return (
    <section
      id="why"
      className="relative w-full text-white py-16 sm:py-20 px-4 sm:px-8 bg-cover bg-center bg-no-repeat bg-fixed"
      style={{
        backgroundImage: `linear-gradient(rgba(5, 6, 10, 0.75), rgba(5, 6, 10, 0.75)), url('/images/blue-bg-4-prar.png')`,
      }}
    >
      <div className="relative max-w-[1200px] mx-auto z-10 text-center">
        <h2 className="font-anton text-3xl sm:text-5xl lg:text-[54px] uppercase text-white tracking-wide mb-14">
          WHY GET YOUR BRAKES FIXED BY US?
        </h2>

        {/* 8 Feature Items Grid (4 columns x 2 rows) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10">
          {features.map((feat, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center text-center p-3 rounded-xl transition"
            >
              <div className="w-24 h-24 relative flex items-center justify-center mb-5">
                <Image
                  src={feat.img}
                  alt={feat.title}
                  width={100}
                  height={100}
                  className="max-h-20 w-auto object-contain drop-shadow-md"
                />
              </div>
              <h3 className="font-lato text-lg sm:text-[21px] font-bold text-white max-w-[230px] leading-snug">
                {feat.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
