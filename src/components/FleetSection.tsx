"use client";

import React, { useState } from "react";
import cars from "@/data/cars.json";
import { ArrowRight } from "lucide-react";

export const FleetSection = () => {
  const [activeCategory, setActiveCategory] = useState("Semua");

  const categories = ["Semua", "Keluarga", "Premium", "SUV", "Rombongan"];

  const filteredCars = activeCategory === "Semua"
    ? cars
    : cars.filter((car) => car.category.includes(activeCategory));

  return (
    <section id="armada" className="py-16 sm:py-24 bg-[#F8F6F1] border-b border-[#E8E4DB]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#E8E4DB] mb-3">
            <span className="font-cinzel text-xs font-semibold tracking-wider text-[#B8892E] uppercase">
              ARMADA PILIHAN
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#171717] tracking-tight mb-4">
            Pilihan Armada Terawat
          </h2>
          <p className="text-base text-[#626262]">
            Tentukan kendaraan yang sesuai dengan kebutuhan perjalanan Anda di Banjarmasin dan sekitarnya.
          </p>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                  activeCategory === cat
                    ? "bg-[#B8892E] text-white shadow-xs"
                    : "bg-white text-[#626262] border border-[#E8E4DB] hover:border-[#B8892E] hover:text-[#171717]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Cars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredCars.map((car) => (
            <article
              key={car.id}
              className="bg-white rounded-xl border border-[#E8E4DB] overflow-hidden flex flex-col transition-all duration-300 hover:shadow-md hover:border-[#B8892E]/60 group"
            >
              {/* Image Frame */}
              <div className="relative aspect-[4/3] bg-[#FFFFFF] p-4 flex items-center justify-center border-b border-[#E8E4DB]/60 overflow-hidden">
                <img
                  src={car.img}
                  alt={car.alt}
                  title={car.alt}
                  loading="lazy"
                  width={400}
                  height={300}
                  className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105"
                />
                {/* Category Badge */}
                <div className="absolute top-3 left-3">
                  <span className="px-2.5 py-1 text-[11px] font-semibold bg-[#F8F6F1] text-[#B8892E] border border-[#E8D5A8] rounded-md">
                    {car.categoryLabel}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div className="mb-4">
                  <h3 className="text-lg font-bold text-[#171717] group-hover:text-[#B8892E] transition-colors">
                    {car.title}
                  </h3>
                </div>

                {/* Action Link */}
                <a
                  href={car.waLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 px-4 text-xs sm:text-sm font-semibold text-[#B8892E] bg-[#F8F6F1] hover:bg-[#B8892E] hover:text-white border border-[#E8D5A8] rounded-lg transition-all duration-200 flex items-center justify-center gap-1.5 group/btn"
                >
                  <span>Cek Harga & Ketersediaan</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-1" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
