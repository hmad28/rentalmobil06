import React from "react";

export const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-[#FBFAF7] border-b border-[#E8E4DB] min-h-[660px] sm:min-h-[720px] lg:min-h-[640px] xl:min-h-[720px] flex items-center">
      {/* Responsive Background Images */}
      <picture className="absolute inset-0 -z-10 w-full h-full pointer-events-none select-none">
        <source media="(min-width: 1024px)" srcSet="/images/hero-bg-desktop.png" />
        <img
          src="/images/hero-bg-mobile.png"
          alt="Armada ZAHRAFFAMIRA Rental Mobil Banjarmasin - Avanza, Innova Zenix, Fortuner"
          className="w-full h-full object-cover object-top lg:object-center"
          loading="eager"
        />
      </picture>

      {/* Subtle readability gradient overlays */}
      {/* Desktop: Gentle fade on the left 48% to guarantee maximum text contrast */}
      <div
        className="absolute inset-0 -z-5 hidden lg:block bg-gradient-to-r from-[#FBFAF7]/92 via-[#FBFAF7]/50 to-transparent w-[48%] pointer-events-none"
        aria-hidden="true"
      />
      {/* Mobile: Gentle fade on top 52% so headline and CTAs are crisp while cars below shine */}
      <div
        className="absolute inset-0 -z-5 lg:hidden bg-gradient-to-b from-[#FBFAF7]/92 via-[#FBFAF7]/70 to-transparent h-[52%] pointer-events-none"
        aria-hidden="true"
      />

      <div className="container max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 pt-8 pb-72 sm:pb-80 lg:py-20 relative z-10 w-full">
        {/* Left Column: 43% on Desktop */}
        <div className="w-full lg:w-[43%] xl:w-[42%] text-left">
          {/* Eyebrow */}
          <p className="font-cinzel text-xs sm:text-sm font-bold tracking-widest text-[#B8892E] uppercase mb-3 sm:mb-4">
            ZAHRAFFAMIRA RENTAL MOBIL
          </p>

          {/* Heading */}
          <h1 className="font-manrope text-3xl sm:text-4xl lg:text-[40px] xl:text-[46px] font-extrabold text-[#171717] leading-[1.2] sm:leading-[1.18] tracking-tight mb-4 sm:mb-5">
            Rental Mobil Banjarmasin{" "}
            <span className="text-[#B8892E] block mt-1 sm:mt-1.5">
              Nyaman untuk Setiap Perjalanan.
            </span>
          </h1>

          {/* Description */}
          <p className="font-manrope text-base sm:text-lg text-[#626262] leading-relaxed mb-6 sm:mb-8 max-w-lg">
            Pilihan armada nyaman dan terawat untuk perjalanan keluarga, bisnis, wisata, hingga rombongan.
          </p>

          {/* Buttons: Full width with 12px gap on mobile, inline on sm+ */}
          <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://api.whatsapp.com/send/?phone=6281255964566&text=Halo+ZAHRAFFAMIRA+Rental+Mobil+Saya+ingin+pesan+rental+mobil&type=phone_number&app_absent=0"
              className="w-full sm:w-auto text-center px-7 py-3.5 text-base font-semibold text-white bg-[#B8892E] hover:bg-[#9E7424] rounded-md transition-colors shadow-xs"
            >
              Pesan Sekarang
            </a>
            <a
              href="#armada"
              className="w-full sm:w-auto text-center px-7 py-3.5 text-base font-semibold rounded-md border border-[#171717] text-[#171717] bg-white/70 backdrop-blur-xs hover:bg-[#F0EDE6] transition-colors"
            >
              Lihat Armada
            </a>
          </div>

          {/* Trust Indicators */}
          <p className="font-manrope text-xs sm:text-sm font-semibold text-[#171717] mt-6 sm:mt-8 tracking-wide">
            Armada Terawat • Booking Mudah • Pelayanan Responsif
          </p>
        </div>
      </div>
    </section>
  );
};
