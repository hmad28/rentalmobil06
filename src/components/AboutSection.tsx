import React from "react";
import { Car } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="tentang-kami" className="py-16 sm:py-24 bg-[#F8F6F1] border-b border-[#E8E4DB]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto bg-white rounded-2xl border border-[#E8E4DB] p-8 sm:p-12 shadow-2xs">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex-1 text-center md:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F8F6F1] border border-[#E8E4DB] mb-3">
                <span className="font-cinzel text-xs font-semibold tracking-wider text-[#B8892E] uppercase">
                  TENTANG KAMI
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#171717] tracking-tight mb-4">
                Tentang ZAHRAFFAMIRA
              </h2>
              <p className="text-base text-[#626262] leading-relaxed max-w-xl">
                ZAHRAFFAMIRA Rental Mobil menyediakan berbagai pilihan kendaraan untuk menunjang kebutuhan perjalanan di Banjarmasin dan sekitarnya. Kami mengutamakan armada yang bersih, terawat, dan siap pakai demi kenyamanan Anda.
              </p>
            </div>

            {/* Verified Stat Only */}
            <div className="w-full md:w-auto flex justify-center">
              <div className="px-8 py-6 rounded-xl bg-[#F8F6F1] border border-[#E8E4DB] text-center min-w-[200px]">
                <div className="w-10 h-10 rounded-full bg-white border border-[#E8D5A8] flex items-center justify-center text-[#B8892E] mx-auto mb-2">
                  <Car className="w-5 h-5" />
                </div>
                <span className="font-manrope text-3xl sm:text-4xl font-extrabold text-[#171717] block">
                  8
                </span>
                <span className="text-xs font-semibold text-[#B8892E] uppercase tracking-wider block mt-1">
                  Pilihan Armada Terawat
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
