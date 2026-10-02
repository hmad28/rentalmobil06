import React from "react";
import { Hero } from "@/components/Hero";
import { FleetSection } from "@/components/FleetSection";
import { WhyChooseUsSection } from "@/components/WhyChooseUsSection";
import { ServicesSection } from "@/components/ServicesSection";
import { PremiumSection } from "@/components/PremiumSection";
import { BookingFlowSection } from "@/components/BookingFlowSection";
import { AboutSection } from "@/components/AboutSection";
import { ServiceAreaSection } from "@/components/ServiceAreaSection";
import { FaqSection } from "@/components/FaqSection";
import { CtaSection } from "@/components/CtaSection";

export default function Home() {
  return (
    <main className="pt-20">
      {/* 1. Hero Section */}
      <Hero />

      {/* 2. Armada (Dominant right after Hero) */}
      <FleetSection />

      {/* 3. Kenapa ZAHRAFFAMIRA */}
      <WhyChooseUsSection />

      {/* 4. Layanan Kami */}
      <ServicesSection />

      {/* 5. Premium Collection (Dark Section) */}
      <PremiumSection />

      {/* 6. Cara Booking */}
      <BookingFlowSection />

      {/* 7. Tentang Kami */}
      <AboutSection />

      {/* 8. Area Layanan */}
      <ServiceAreaSection />

      {/* 9. FAQ Section */}
      <FaqSection />

      {/* 10. Final WhatsApp CTA */}
      <CtaSection />
    </main>
  );
}
