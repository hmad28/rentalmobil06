"use client";

import React, { useState } from "react";
import cars from "@/data/cars.json";

export const FleetSection = () => {
  const [activeCategory, setActiveCategory] = useState("Semua");
  const categories = ["Semua", "Keluarga", "Premium", "SUV", "Rombongan"];

  const filteredCars = activeCategory === "Semua"
    ? cars
    : cars.filter((car) => car.category.includes(activeCategory));

  return (
    <section id="armada" className="py-16 bg-white border-b border-[#E8E4DB]">
      <div className="container mx-auto px-4">
        <h2 className="mb-3 text-lg sm:text-xl font-extrabold text-center text-gold-gradient uppercase tracking-wider font-cinzel">
          Armada Rental Mobil Banjarmasin
        </h2>
        <h3 className="mb-8 text-3xl sm:text-4xl font-bold text-center text-[#171717]">
          Booking sekarang untuk <span className="text-gold-gradient">harga promo</span> terbaik
        </h3>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                activeCategory === cat
                  ? "bg-gold-gradient text-white shadow-xs"
                  : "bg-[#F8F6F1] text-[#626262] border border-[#E8E4DB] hover:border-[#DFC88F] hover:text-[#171717]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Car Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {filteredCars.map((car, index) => (
            <article
              key={index}
              className="overflow-hidden flex flex-col bg-white rounded-md border border-[#E8E4DB] shadow-xs hover:shadow-md hover:border-[#DFC88F] transition-all group"
            >
              <div className="flex flex-col flex-1">
                <figure className="relative aspect-square w-full overflow-hidden bg-[#F8F6F1] border-b border-[#E8E4DB]/60">
                  <img
                    src={car.img}
                    alt={car.alt}
                    title={car.alt}
                    loading="lazy"
                    width={400}
                    height={400}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Category Pill Tag */}
                  <span className="absolute top-2.5 left-2.5 px-2.5 py-1 text-[11px] font-semibold bg-white/95 text-[#9C721D] border border-[#DFC88F] rounded shadow-2xs backdrop-blur-xs">
                    {car.categoryLabel}
                  </span>
                </figure>
                <div className="p-4 text-center">
                  <h4 className="text-base font-bold text-[#171717] group-hover:text-[#B8892E] transition-colors leading-tight">
                    {car.title}
                  </h4>
                </div>
              </div>
              <a
                href={car.waLink}
                target="_blank"
                rel="noopener noreferrer"
                className="py-3 px-4 font-semibold text-xs sm:text-sm text-center text-white bg-gold-gradient rounded-b-md transition-all block cursor-pointer"
              >
                Cek Harga & Ketersediaan →
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
