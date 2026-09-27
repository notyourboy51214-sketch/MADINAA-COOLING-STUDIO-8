import React, { useState, useEffect } from "react";
import { Navbar } from "./components/Navbar";
import { HeroSection } from "./components/HeroSection";
import { ServiceIndexSection } from "./components/ServiceIndexSection";
import { RepairSection } from "./components/RepairSection";
import { GasLeakSection } from "./components/GasLeakSection";
import { ServicingSection } from "./components/ServicingSection";
import { InstallationSection } from "./components/InstallationSection";
import { TrustAndReviewsSection } from "./components/TrustAndReviewsSection";
import { ProcessSection } from "./components/ProcessSection";
import { AboutSection } from "./components/AboutSection";
import { GallerySection } from "./components/GallerySection";
import { VisitSection } from "./components/VisitSection";
import { EnquirySection } from "./components/EnquirySection";
import { FinalCtaSection } from "./components/FinalCtaSection";
import { Footer } from "./components/Footer";
import { MobileStickyBar } from "./components/MobileStickyBar";

export default function App() {
  const [activeSection, setActiveSection] = useState<string>("home");
  const [selectedService, setSelectedService] = useState<string>("AC REPAIR");
  const [selectedDetail, setSelectedDetail] = useState<string>("AC not cooling");

  // Track active section as visitor scrolls smoothly down the one-page layout
  useEffect(() => {
    const sectionIds = [
      "home",
      "services",
      "repair",
      "gas-leak",
      "servicing",
      "installation",
      "reviews",
      "process",
      "about",
      "visit",
      "contact",
    ];

    const observerCallback: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -60% 0px",
      threshold: 0,
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleSelectService = (service: string) => {
    setSelectedService(service);
  };

  const handleSelectSymptom = (symptom: string) => {
    setSelectedDetail(symptom);
  };

  return (
    <div className="min-h-screen bg-[#0C1015] text-[#F3F4F6] font-body flex flex-col selection:bg-[#FF6B2C] selection:text-black">
      {/* Fixed Navigation Bar */}
      <Navbar activeSection={activeSection} />

      {/* Main Single Continuous One-Page Flow */}
      <main className="flex-1">
        {/* Section 01: Hero */}
        <HeroSection onSelectService={handleSelectService} />

        {/* Section 02: Service Index */}
        <ServiceIndexSection onSelectService={handleSelectService} />

        {/* Section 03: AC Repair */}
        <RepairSection onSelectSymptom={handleSelectSymptom} />

        {/* Section 04: Gas Leak */}
        <GasLeakSection onSelectService={handleSelectService} />

        {/* Section 05: Servicing */}
        <ServicingSection onSelectService={handleSelectService} />

        {/* Section 06: Installation */}
        <InstallationSection onSelectService={handleSelectService} />

        {/* Section 07 & 08: Customer Experience & Customer Reviews */}
        <TrustAndReviewsSection />

        {/* Section 09: How the Request Works */}
        <ProcessSection />

        {/* Section 10: About the Business */}
        <AboutSection />

        {/* Section 11: Real Business Gallery */}
        <GallerySection />

        {/* Section 12: Visit */}
        <VisitSection />

        {/* Section 13: Contact / Request Service */}
        <EnquirySection
          initialService={selectedService}
          initialDetail={selectedDetail}
        />

        {/* Section 14: Final CTA */}
        <FinalCtaSection />
      </main>

      {/* Section 15: Footer */}
      <Footer />

      {/* Fixed Bottom Action Bar for Mobile (< 15% viewport height) */}
      <MobileStickyBar />
    </div>
  );
}
