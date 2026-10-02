import React from "react";
import { MapPin } from "lucide-react";

export const ServiceAreaSection = () => {
  const areas = [
    "Banjarmasin",
    "Banjarbaru",
    "Martapura",
    "Bandara Syamsudin Noor",
  ];

  return (
    <section className="py-16 sm:py-20 bg-white border-b border-[#E8E4DB]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F8F6F1] border border-[#E8E4DB] mb-3">
            <span className="font-cinzel text-xs font-semibold tracking-wider text-[#B8892E] uppercase">
              WILAYAH LAYANAN
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#171717] tracking-tight mb-3">
            Melayani Perjalanan di Banjarmasin & Sekitarnya
          </h2>
          <p className="text-sm sm:text-base text-[#626262]">
            Fokus melayani mobilitas masyarakat, keluarga, instansi, maupun tamu dari luar daerah.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3 max-w-3xl mx-auto">
          {areas.map((area, idx) => (
            <div
              key={idx}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#F8F6F1] border border-[#E8E4DB] text-[#171717] text-sm font-semibold hover:border-[#B8892E] transition-colors"
            >
              <MapPin className="w-4 h-4 text-[#B8892E]" />
              <span>{area}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
