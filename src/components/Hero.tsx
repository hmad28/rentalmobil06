import React from "react";

export const Hero = () => {
  return (
    <section className="container mx-auto flex flex-col justify-center p-6 lg:flex-row lg:justify-between lg:py-24 sm:py-12">
      <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md lg:text-left xl:max-w-lg">
        <h1 className="text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl text-gray-900">
          Rental Mobil <span className="text-red-800">Banjarmasin</span> & Banjarbaru Terpercaya
        </h1>
        <p className="mt-6 mb-8 text-lg sm:mb-12 text-gray-700 leading-relaxed">
          Cari persewaan atau <span className="font-bold">carter mobil</span> terpercaya? Deaz Rental
          Mobil Banjarmasin menyediakan layanan{" "}
          <span className="font-bold">Rental Mobil Banjarmasin</span> dan{" "}
          <span className="font-bold">Banjarbaru</span> dengan armada terbaru, harga murah, dan
          pelayanan profesional untuk segala kebutuhan Anda.
        </p>
        <div className="flex flex-col space-y-4 lg:justify-start sm:flex-row sm:justify-center sm:items-center sm:space-x-4 sm:space-y-0">
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://api.whatsapp.com/send/?phone=6281255964566&text=Halo+Deaz+Rental+Saya+ingin+tanya+rental+mobil+Banjarmasin+Banjarbaru&type=phone_number&app_absent=0"
            className="px-8 py-3 text-lg font-semibold text-gray-50 bg-red-800 rounded hover:bg-red-900 transition-colors shadow-md"
          >
            Pesan Sekarang
          </a>
          <a
            href="#armada"
            className="px-8 py-3 text-lg font-semibold rounded border border-gray-800 text-gray-800 hover:bg-gray-100 transition-colors"
          >
            Lihat Armada
          </a>
        </div>
      </div>

      <div className="h-72 flex justify-center items-center p-6 mt-8 2xl:h-128 lg:h-96 lg:mt-0 sm:h-80 xl:h-112 animate-shimmer bg-gray-50 rounded-lg">
        <img
          src="/images/hero-image_UQlab.webp"
          alt="Rental Mobil Banjarmasin Banjarbaru - Deaz Rental"
          title="Rental Mobil Banjarmasin Banjarbaru Terpercaya"
          loading="eager"
          width={1024}
          height={400}
          className="h-72 object-contain 2xl:h-128 lg:h-96 sm:h-80 xl:h-112"
        />
      </div>
    </section>
  );
};
