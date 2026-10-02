import React from "react";

export const Hero = () => {
  return (
    <section className="relative overflow-hidden border-b border-[#E8E4DB] min-h-[640px] sm:min-h-[680px] lg:min-h-[660px] xl:min-h-[720px] flex items-center">
      {/* Responsive Background Images */}
      <picture className="absolute inset-0 -z-10 w-full h-full pointer-events-none select-none">
        <source media="(min-width: 1024px)" srcSet="/images/hero-bg-desktop.png" />
        <img
          src="/images/hero-bg-mobile.png"
          alt="Armada ZAHRAFFAMIRA Rental Mobil Banjarmasin"
          className="w-full h-full object-cover object-top lg:object-center"
          loading="eager"
        />
      </picture>

      {/* Gentle readability overlays:
          - Desktop: soft gradient from left to ensure maximum contrast for dark text
          - Mobile: soft gradient from top to protect headline and keep cars visible below
      */}
      <div className="absolute inset-0 -z-5 hidden lg:block bg-gradient-to-r from-white/95 via-white/80 to-transparent w-[55%] pointer-events-none" />
      <div className="absolute inset-0 -z-5 lg:hidden bg-gradient-to-b from-white/95 via-white/85 to-transparent h-[50%] pointer-events-none" />

      <div className="container mx-auto px-6 pt-12 pb-48 sm:pb-56 lg:py-20 relative z-10">
        <div className="max-w-xl text-center lg:text-left mx-auto lg:mx-0">
          {/* Eyebrow */}
          <p className="font-cinzel text-xs sm:text-sm font-extrabold text-gold-gradient tracking-widest uppercase mb-3">
            ZAHRAFFAMIRA RENTAL MOBIL
          </p>

          {/* H1 */}
          <h1 className="text-3xl font-extrabold leading-tight sm:text-5xl lg:text-5xl text-[#171717] mb-6">
            Rental Mobil Banjarmasin{" "}
            <span className="text-gold-gradient block mt-1">Nyaman untuk Setiap Perjalanan.</span>
          </h1>

          {/* Description */}
          <p className="mb-8 text-base sm:text-lg text-[#626262] leading-relaxed">
            Pilihan armada terawat untuk kebutuhan keluarga, bisnis, wisata hingga perjalanan rombongan di Banjarmasin dan sekitarnya.
          </p>

          {/* Buttons */}
          <div className="flex flex-col space-y-4 lg:justify-start sm:flex-row sm:justify-center lg:justify-start sm:items-center sm:space-x-4 sm:space-y-0">
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://api.whatsapp.com/send/?phone=6281255964566&text=Halo+ZAHRAFFAMIRA+Rental+Mobil+Saya+ingin+pesan+rental+mobil&type=phone_number&app_absent=0"
              className="px-8 py-3.5 text-base font-semibold text-white bg-gold-gradient rounded-md cursor-pointer transition-all shadow-md"
            >
              Pesan Sekarang
            </a>
            <a
              href="#armada"
              className="px-8 py-3.5 text-base font-semibold rounded-md border border-[#171717] text-[#171717] bg-white/70 backdrop-blur-xs hover:bg-[#F8F6F1] transition-colors"
            >
              Lihat Armada
            </a>
          </div>

          {/* Trust points */}
          <p className="mt-8 text-xs sm:text-sm font-semibold text-[#171717]">
            Armada Terawat • Booking Mudah • Pelayanan Responsif
          </p>
        </div>
      </div>
    </section>
  );
};
