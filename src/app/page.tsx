import React from "react";
import { Hero } from "@/components/Hero";
import { FleetSection } from "@/components/FleetSection";
import { ServicesSection } from "@/components/ServicesSection";
import { ServiceAreaSection } from "@/components/ServiceAreaSection";
import { WhyChooseUsSection } from "@/components/WhyChooseUsSection";
import { FaqSection } from "@/components/FaqSection";
import { GallerySection } from "@/components/GallerySection";

export default function Home() {
  return (
    <main className="pt-20">
      <Hero />
      <FleetSection />
      <ServicesSection />
      <ServiceAreaSection />
      <WhyChooseUsSection />
      <FaqSection />
      <GallerySection />
    </main>
  );
}
