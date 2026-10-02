import React from "react";

export const Hero = () => {
  return (
    <section className="bg-[#FBFAF7] border-b border-[#E8E4DB] relative overflow-hidden pt-8 pb-12 sm:pt-12 sm:pb-16 lg:py-16 xl:py-20">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center lg:items-end justify-between gap-8 sm:gap-10 lg:gap-8">
          {/* Left Column: 43% on Desktop */}
          <div className="w-full lg:w-[43%] shrink-0 text-left">
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
            <p className="font-manrope text-base sm:text-lg text-[#626262] leading-relaxed mb-6 sm:mb-8">
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
                className="w-full sm:w-auto text-center px-7 py-3.5 text-base font-semibold rounded-md border border-[#171717] text-[#171717] hover:bg-[#F0EDE6] transition-colors"
              >
                Lihat Armada
              </a>
            </div>

            {/* Trust Indicators: Strictly placed before vehicle image on mobile */}
            <p className="font-manrope text-xs sm:text-sm font-semibold text-[#171717] mt-6 sm:mt-8 tracking-wide">
              Armada Terawat • Booking Mudah • Pelayanan Responsif
            </p>
          </div>

          {/* Right Column: 57% on Desktop (Appears below CTAs & Trust on mobile) */}
          <div className="w-full lg:w-[57%] shrink-0 flex flex-col justify-end items-center lg:items-end relative mt-4 sm:mt-6 lg:mt-0">
            {/* Subtle warm gold radial glow behind the vehicles */}
            <div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[85%] h-[85%] rounded-full bg-[radial-gradient(circle_at_center,rgba(184,137,46,0.12)_0%,rgba(184,137,46,0.03)_50%,transparent_70%)] pointer-events-none -z-10"
              aria-hidden="true"
            />

            {/* Foreground Vehicle Image with Realistic Shadow */}
            <div className="relative w-full max-w-lg sm:max-w-xl lg:max-w-none flex justify-center lg:justify-end">
              <img
                src="/images/hero-image_UQlab.webp"
                alt="Armada ZAHRAFFAMIRA Rental Mobil Banjarmasin - Avanza, Innova Zenix, Fortuner"
                title="Armada ZAHRAFFAMIRA Rental Mobil Banjarmasin"
                width={1024}
                height={400}
                className="w-full h-auto object-contain select-none drop-shadow-[0_10px_15px_rgba(0,0,0,0.08)] transition-transform duration-500 hover:scale-[1.01]"
              />

              {/* Realistic contact shadow beneath tires */}
              <div
                className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-[92%] h-4 bg-black/12 blur-md rounded-full pointer-events-none -z-5"
                aria-hidden="true"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
