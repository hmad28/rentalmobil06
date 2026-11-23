import React from "react";
import type { Metadata } from "next";
import { Hero } from "@/components/Hero";
import { FleetSection } from "@/components/FleetSection";
import { ServicesSection } from "@/components/ServicesSection";
import { ServiceAreaSection } from "@/components/ServiceAreaSection";
import { WhyChooseUsSection } from "@/components/WhyChooseUsSection";
import { FaqSection } from "@/components/FaqSection";
import { GallerySection } from "@/components/GallerySection";

export const metadata: Metadata = {
  alternates: {
    canonical: "https://www.zahraffamirarental.com",
  },
};

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
