import React from "react";

export const WhyChooseUsSection = () => {
  return (
    <div className="bg-[#F8F6F1] border-b border-[#E8E4DB]">
      <div className="max-w-[85rem] px-4 py-12 sm:px-6 lg:px-8 lg:py-16 mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Card Left */}
          <div className="bg-white p-8 sm:p-10 rounded-2xl border border-[#E8E4DB] shadow-xs">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#171717] mb-4 uppercase font-cinzel">
              Mengapa Memilih ZAHRAFFAMIRA?
            </h2>
            <p className="text-[#626262] text-base sm:text-lg mb-8 leading-relaxed">
              Kami adalah jasa penyedia rental mobil yang berlokasi di Banjarmasin dan Banjarbaru terpercaya. Fokus utama kami adalah memberikan pelayanan terbaik demi kenyamanan Anda selama di perjalanan.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 bg-[#F8F6F1] rounded-xl border border-[#E8E4DB] text-center">
                <span className="block text-2xl sm:text-3xl font-extrabold text-[#B8892E]">24/7</span>
                <span className="text-xs sm:text-sm font-semibold text-[#171717]">Layanan Support</span>
              </div>
              <div className="p-4 bg-[#F8F6F1] rounded-xl border border-[#E8E4DB] text-center">
                <span className="block text-2xl sm:text-3xl font-extrabold text-[#B8892E]">Terpercaya</span>
                <span className="text-xs sm:text-sm font-semibold text-[#171717]">Pilihan Utama</span>
              </div>
            </div>
          </div>

          {/* Image Right with Badge */}
          <div className="relative">
            <img
              src="/images/15_Z1IyzQ1.webp"
              alt="Armada ZAHRAFFAMIRA Rental Mobil"
              loading="lazy"
              width={600}
              height={400}
              className="rounded-2xl shadow-xl border border-[#E8E4DB] transition-transform hover:scale-[1.02] duration-500 w-full"
            />
            <div className="absolute -bottom-4 -right-4 bg-[#171717] text-[#E8D5A8] border border-[#B8892E]/40 p-4 rounded-xl shadow-lg hidden sm:block">
              <span className="block text-2xl font-bold text-white">8+ Unit</span>
              <span className="text-xs text-[#E8D5A8]">Pilihan Armada Terawat</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
