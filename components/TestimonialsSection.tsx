"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import CtaButton from "./CtaButton";

interface TestimonialsSectionProps {
  onOpenQuote: () => void;
}

interface Testimonial {
  name: string;
  photo: string;
  text: string;
}

export default function TestimonialsSection({
  onOpenQuote,
}: TestimonialsSectionProps) {
  const testimonials: Testimonial[] = [
    {
      name: "Lynn M.",
      photo: "/images/20_cda-lynn-m.png",
      text: '"Thank you so much Sam service was above and beyond made for a great experience."',
    },
    {
      name: "Virtual F.",
      photo: "/images/22_cda-Virtual-F..png",
      text: '"6 out of 5 stars. Excellent service Quick Detailed Honest Friendly."',
    },
    {
      name: "Gurpreet D.",
      photo: "/images/23_cda-gurpreet-d..png",
      text: '"Got my tire alignment done here recently and honestly had a really good experience. The whole place is clean, organized, and the staff was easy to deal with. They explained everything properly, got the job done on time, and the pricing was fair too. Car drives great now with no issues. You can tell they actually care about the work they do and not just trying to upsell you on everything. Hard to find good service like that these days. Definitely recommend this dealership for service work."',
    },
    {
      name: "Elmi I.",
      photo: "/images/24_cda-Elmi-I..png",
      text: '"The service was exceptional and he was patient throughout the entire process. Would definitely recommend him."',
    },
    {
      name: "Peter K.",
      photo: "/images/25_cda-peter-k..png",
      text: '"Just picked up my 2018 Dodge Ram Laramie . Thanks to Sam for getting all the little Paint touch ups done as he had promised."',
    },
    {
      name: "Michael",
      photo: "/images/26_cda-michael.png",
      text: '"Dealt w/ Sam Aziz - Incredible experience. Worked with me from top to bottom, nobody else. Addressed every single one of my questions, comments and concerns about all inquires for vehicles, including the one I settled on."',
    },
    {
      name: "Ratanna",
      photo: "/images/27_cda-Rattana.png",
      text: '"Sam is great! He\'s quick, honest, and knows what he\'s doing. He\'s the guy who can help getting the car."',
    },
    {
      name: "CK M.",
      photo: "/images/28_cda-ck-m.png",
      text: '"Awesome service ! Sam was very helpful, he did what others couldn\'t do. 100 % recommended this dealership."',
    },
  ];

  const N = testimonials.length;
  // Clone testimonials 3x for seamless infinite looping in both directions
  const infiniteList = [...testimonials, ...testimonials, ...testimonials];

  const [currentIndex, setCurrentIndex] = useState(N);
  const [withTransition, setWithTransition] = useState(true);
  const [cardsPerView, setCardsPerView] = useState(3);
  const touchStartX = useRef<number | null>(null);
  const touchDeltaX = useRef<number>(0);
  const isInteracting = useRef(false);

  useEffect(() => {
    const updateCardsPerView = () => {
      if (window.innerWidth < 768) {
        setCardsPerView(1);
      } else if (window.innerWidth < 1024) {
        setCardsPerView(2);
      } else {
        setCardsPerView(3);
      }
    };
    updateCardsPerView();
    window.addEventListener("resize", updateCardsPerView);
    return () => window.removeEventListener("resize", updateCardsPerView);
  }, []);

  const nextSlide = () => {
    setWithTransition(true);
    setCurrentIndex((prev) => prev + 1);
  };

  const prevSlide = () => {
    setWithTransition(true);
    setCurrentIndex((prev) => prev - 1);
  };

  // Seamless jump without transition when reaching the boundaries of the cloned sets
  const handleTransitionEnd = () => {
    if (currentIndex >= 2 * N) {
      setWithTransition(false);
      setCurrentIndex((prev) => prev - N);
    } else if (currentIndex < N) {
      setWithTransition(false);
      setCurrentIndex((prev) => prev + N);
    }
  };

  // Re-enable transition after seamless instant repositioning
  useEffect(() => {
    if (!withTransition) {
      const frame = requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setWithTransition(true);
        });
      });
      return () => cancelAnimationFrame(frame);
    }
  }, [withTransition]);

  // Autoplay with pause on hover/interaction
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isInteracting.current) {
        nextSlide();
      }
    }, 5500);
    return () => clearInterval(interval);
  }, []);

  // Touch handlers for mobile swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    touchDeltaX.current = 0;
    isInteracting.current = true;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (touchStartX.current !== null) {
      touchDeltaX.current = e.touches[0].clientX - touchStartX.current;
    }
  };

  const handleTouchEnd = () => {
    if (touchDeltaX.current < -40) {
      nextSlide();
    } else if (touchDeltaX.current > 40) {
      prevSlide();
    }
    touchStartX.current = null;
    touchDeltaX.current = 0;
    setTimeout(() => {
      isInteracting.current = false;
    }, 1000);
  };

  const activeDotIndex = ((currentIndex % N) + N) % N;

  return (
    <section id="reviews" className="w-full bg-white py-14 px-4 sm:px-8 border-b border-gray-100">
      <div className="max-w-[1200px] mx-auto text-center">
        {/* Title */}
        <h2 className="font-anton text-3xl sm:text-5xl lg:text-[54px] uppercase text-[rgba(0,0,0,0.95)] tracking-wide mb-3">
          Happy CUSTOMERS
        </h2>

        {/* 5-Stars Badge */}
        <div className="flex justify-center mb-8">
          <Image
            src="/images/19_Stars.png"
            alt="5 Stars Rating"
            width={240}
            height={50}
            className="h-9 w-auto object-contain"
          />
        </div>

        {/* Testimonials Slider Container matching live ClickFunnels styling */}
        <div
          className="relative max-w-[1100px] mx-auto rounded-[20px] shadow-[0_8px_24px_rgba(0,0,0,0.12)] border border-black/[0.08] bg-black/[0.03] backdrop-blur-[10px] py-6 px-3 sm:px-6 my-8 select-none"
          onMouseEnter={() => {
            isInteracting.current = true;
          }}
          onMouseLeave={() => {
            isInteracting.current = false;
          }}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Previous Arrow Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                prevSlide();
              }}
              type="button"
              aria-label="Previous review"
              className="shrink-0 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-black/[0.08] hover:bg-[#333] hover:text-white text-[#333] flex items-center justify-center text-lg sm:text-xl font-bold transition shadow-[0_4px_8px_rgba(0,0,0,0.1)] cursor-pointer z-10"
            >
              ❮
            </button>

            {/* Slider Viewport with STRICT overflow-hidden and ZERO internal padding */}
            <div className="overflow-hidden w-full p-0">
              <div
                className="testimonial-track flex"
                onTransitionEnd={handleTransitionEnd}
                style={{
                  transform: `translateX(-${(100 / cardsPerView) * currentIndex}%)`,
                  transition: withTransition
                    ? "transform 0.5s cubic-bezier(0.25, 1, 0.5, 1)"
                    : "none",
                }}
              >
                {infiniteList.map((t, idx) => (
                  <div
                    key={idx}
                    className="shrink-0 px-2 sm:px-3 box-border text-center"
                    style={{ width: `${100 / cardsPerView}%` }}
                  >
                    <div className="h-full flex flex-col justify-between items-center py-2">
                      {/* Avatar */}
                      <div className="w-[90px] h-[90px] mb-3 flex items-center justify-center">
                        <Image
                          src={t.photo}
                          alt={t.name}
                          width={90}
                          height={90}
                          className="w-[85px] h-auto object-contain"
                        />
                      </div>

                      {/* Review Text */}
                      <p className="text-[#444] italic text-[15px] sm:text-[16px] leading-[1.6] line-clamp-6 px-1">
                        {t.text}
                      </p>

                      {/* Name, Stars, Google Reviews */}
                      <div className="mt-4 w-full">
                        <h4 className="font-bold text-[#111] text-[16px] mb-1">
                          — {t.name}
                        </h4>
                        <div className="text-[#FFD700] text-[20px] mb-2">
                          ★★★★★
                        </div>
                        <div className="flex justify-center">
                          <Image
                            src="/images/21_Google-Customer-Reviews-Logo-min.png"
                            alt="Google Customer Reviews"
                            width={110}
                            height={28}
                            className="h-[26px] w-auto object-contain"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Next Arrow Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                nextSlide();
              }}
              type="button"
              aria-label="Next review"
              className="shrink-0 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-black/[0.08] hover:bg-[#333] hover:text-white text-[#333] flex items-center justify-center text-lg sm:text-xl font-bold transition shadow-[0_4px_8px_rgba(0,0,0,0.1)] cursor-pointer z-10"
            >
              ❯
            </button>
          </div>

          {/* Dot Pagination for Mobile / Tablet */}
          <div className="flex justify-center gap-1.5 mt-4 pt-2">
            {Array.from({ length: N }).map((_, dIdx) => (
              <button
                key={dIdx}
                onClick={() => {
                  setWithTransition(true);
                  setCurrentIndex(N + dIdx);
                }}
                aria-label={`Go to slide ${dIdx + 1}`}
                className={`w-2.5 h-2.5 rounded-full transition-all cursor-pointer ${
                  activeDotIndex === dIdx
                    ? "bg-[#1cc76a] w-5"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Larger SEO Trust Warranty Graphic with Outline Card & Hover Lift Effect */}
        <div className="max-w-[1100px] w-full mx-auto mt-14 mb-10 px-2 flex justify-center">
          <div className="w-full bg-white border border-gray-300 rounded-[20px] p-2.5 sm:p-4 shadow-sm hover-lift-image">
            <Image
              src="/images/30_cda-SEO-Img-n-1-.png"
              alt="Cardora Certified Safe, Insured and Guaranteed Services"
              width={1100}
              height={180}
              className="w-full h-auto object-contain rounded-[12px]"
            />
          </div>
        </div>

        {/* Green Bottom CTA Banner */}
        <div className="pt-6 pb-2 flex flex-col items-center space-y-3">
          <CtaButton onClick={onOpenQuote} />
          <div className="w-full max-w-[430px] text-center pt-1">
            <p className="text-2xl sm:text-[30px] font-bold text-black tracking-tight">
              CALL NOW{" "}
              <a
                href="tel:(647) 492-2636"
                className="text-[#1cc76a] font-bold hover:underline"
              >
                (647) 492-2636
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
