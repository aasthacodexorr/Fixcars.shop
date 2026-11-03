"use client";

import React, { useState } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import AccentBar from "@/components/AccentBar";
import CustomerOffers from "@/components/CustomerOffers";
import TechniciansSection from "@/components/TechniciansSection";
import GuaranteeSection from "@/components/GuaranteeSection";
import ServicesSection from "@/components/ServicesSection";
import WhyUsSection from "@/components/WhyUsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import Footer from "@/components/Footer";
import QuoteModal from "@/components/QuoteModal";

export default function Home() {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);

  const handleOpenQuote = () => setIsQuoteModalOpen(true);
  const handleCloseQuote = () => setIsQuoteModalOpen(false);

  return (
    <main className="min-h-screen flex flex-col bg-white overflow-x-hidden selection:bg-[#1cc76a] selection:text-white">
      {/* Interactive Modal */}
      <QuoteModal isOpen={isQuoteModalOpen} onClose={handleCloseQuote} />

      {/* Top Header */}
      <Header onOpenQuote={handleOpenQuote} />

      {/* Hero Section */}
      <Hero onOpenQuote={handleOpenQuote} />

      {/* Blue Accent Bar 1 */}
      <AccentBar text="Providing Exceptional Service And Personalized Attention" />

      {/* New Customer Offer */}
      <CustomerOffers onOpenQuote={handleOpenQuote} />

      {/* Qualified Technicians Section */}
      <TechniciansSection />

      {/* Peace of Mind Guarantee */}
      <GuaranteeSection onOpenQuote={handleOpenQuote} />

      {/* Blue Accent Bar 2 */}
      <AccentBar text="Specialized Brake Technicians" />

      {/* Brakes Services */}
      <ServicesSection onOpenQuote={handleOpenQuote} />

      {/* Blue Accent Bar 3 */}
      <AccentBar text="5 Star Rated Service" />

      {/* Why Choose Us 8 Features */}
      <WhyUsSection />

      {/* Blue Accent Bar 4 */}
      <AccentBar text="Trustworthy & Reliable Advice" />

      {/* Customer Reviews & Slider */}
      <TestimonialsSection onOpenQuote={handleOpenQuote} />

      {/* Footer */}
      <Footer />
    </main>
  );
}
