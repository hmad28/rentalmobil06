import React from "react";
import { CheckCircle2 } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-[#FFFFFF] border-b border-[#E8E4DB]">
      {/* Subtle background glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#E8D5A8]/20 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20 flex flex-col lg:flex-row items-center justify-between gap-12">
        {/* Left Column: Content */}
        <div className="flex-1 max-w-2xl text-center lg:text-left">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#F8F6F1] border border-[#E8E4DB] mb-6">
            <span className="w-2 h-2 rounded-full bg-[#B8892E]" />
            <span className="font-cinzel text-xs font-semibold tracking-wider text-[#B8892E] uppercase">
              ZAHRAFFAMIRA RENTAL MOBIL
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-3xl sm:text-5xl lg:text-5xl font-extrabold text-[#171717] leading-tight tracking-tight mb-6">
            Rental Mobil Banjarmasin
            <span className="block text-[#B8892E] font-bold mt-1">
              Nyaman untuk Setiap Perjalanan.
            </span>
          </h1>

          {/* Description */}
          <p className="text-base sm:text-lg text-[#626262] leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0">
            Pilihan armada terawat untuk kebutuhan keluarga, bisnis, wisata hingga perjalanan rombongan di Banjarmasin dan sekitarnya.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-8">
            <a
              href="https://api.whatsapp.com/send/?phone=6281255964566&text=Halo+ZAHRAFFAMIRA+Rental+Mobil+Saya+ingin+pesan+rental+mobil&type=phone_number&app_absent=0"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-3.5 text-base font-semibold text-white bg-[#B8892E] hover:bg-[#9A7020] rounded-md shadow-xs transition-all duration-200 text-center"
            >
              Pesan Sekarang
            </a>
            <a
              href="#armada"
              className="w-full sm:w-auto px-8 py-3.5 text-base font-semibold text-[#171717] border border-[#171717] hover:bg-[#F8F6F1] rounded-md transition-all duration-200 text-center"
            >
              Lihat Armada
            </a>
          </div>

          {/* Trust points */}
          <div className="pt-6 border-t border-[#E8E4DB] flex flex-wrap items-center justify-center lg:justify-start gap-y-2 gap-x-6 text-xs sm:text-sm font-medium text-[#171717]">
            <span className="inline-flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#B8892E]" />
              Armada Terawat
            </span>
            <span className="text-[#E8E4DB] hidden sm:inline">•</span>
            <span className="inline-flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#B8892E]" />
              Booking Mudah
            </span>
            <span className="text-[#E8E4DB] hidden sm:inline">•</span>
            <span className="inline-flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#B8892E]" />
              Pelayanan Responsif
            </span>
          </div>
        </div>

        {/* Right Column: Hero Image */}
        <div className="flex-1 w-full max-w-lg lg:max-w-none flex justify-center items-center">
          <div className="relative w-full aspect-[4/3] sm:aspect-[16/10] bg-[#F8F6F1] rounded-2xl border border-[#E8E4DB] p-6 flex items-center justify-center shadow-xs">
            <img
              src="/images/hero-image_UQlab.webp"
              alt="ZAHRAFFAMIRA Rental Mobil Banjarmasin"
              title="ZAHRAFFAMIRA Rental Mobil Banjarmasin"
              loading="eager"
              width={800}
              height={450}
              className="w-full h-auto object-contain transition-transform duration-500 hover:scale-105"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
