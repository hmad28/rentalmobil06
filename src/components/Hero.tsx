import React from "react";

export const Hero = () => {
  return (
    <section className="container mx-auto flex flex-col justify-center p-6 lg:flex-row lg:justify-between lg:py-20 sm:py-12">
      <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md lg:text-left xl:max-w-lg">
        {/* Eyebrow */}
        <p className="font-cinzel text-xs font-extrabold text-gold-gradient tracking-widest uppercase mb-3">
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
        <div className="flex flex-col space-y-4 lg:justify-start sm:flex-row sm:justify-center sm:items-center sm:space-x-4 sm:space-y-0">
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://api.whatsapp.com/send/?phone=6281255964566&text=Halo+ZAHRAFFAMIRA+Rental+Mobil+Saya+ingin+pesan+rental+mobil&type=phone_number&app_absent=0"
            className="px-8 py-3.5 text-base font-semibold text-white bg-gold-gradient rounded-md cursor-pointer transition-all"
          >
            Pesan Sekarang
          </a>
          <a
            href="#armada"
            className="px-8 py-3.5 text-base font-semibold rounded-md border border-[#171717] text-[#171717] hover:bg-[#F8F6F1] transition-colors"
          >
            Lihat Armada
          </a>
        </div>

        {/* Trust points */}
        <p className="mt-8 text-xs sm:text-sm font-medium text-[#171717]">
          Armada Terawat • Booking Mudah • Pelayanan Responsif
        </p>
      </div>

      <div className="h-72 flex justify-center items-center p-6 mt-8 2xl:h-128 lg:h-96 lg:mt-0 sm:h-80 xl:h-112 animate-shimmer bg-[#F8F6F1] rounded-xl border border-[#E8E4DB]">
        <img
          src="/images/hero-image_UQlab.webp"
          alt="ZAHRAFFAMIRA Rental Mobil Banjarmasin"
          title="ZAHRAFFAMIRA Rental Mobil Banjarmasin"
          loading="eager"
          width={1024}
          height={400}
          className="h-72 object-contain 2xl:h-128 lg:h-96 sm:h-80 xl:h-112 transition-transform duration-500 hover:scale-105"
        />
      </div>
    </section>
  );
};
