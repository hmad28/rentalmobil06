import React from "react";

export const WhyChooseUsSection = () => {
  return (
    <div className="bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-500">
      <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Card Left */}
          <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/20">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 uppercase">
              Mengapa Memilih Deaz Rental?
            </h2>
            <p className="text-gray-800 text-lg mb-6 leading-relaxed">
              Kami adalah jasa penyedia rental mobil yang berlokasi di (Banjarmasin - Banjarbaru)
              Terpercaya. Fokus utama kami adalah memberikan pelayanan terbaik demi kenyamanan Anda
              selama di perjalanan.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 bg-white/20 rounded-lg text-center">
                <span className="block text-2xl font-bold text-red-800">24/7</span>
                <span className="text-sm font-medium text-gray-800">Layanan Support</span>
              </div>
              <div className="p-4 bg-white/20 rounded-lg text-center">
                <span className="block text-2xl font-bold text-red-800">Terpercaya</span>
                <span className="text-sm font-medium text-gray-800">Pilihan Utama</span>
              </div>
            </div>
          </div>

          {/* Image Right with Badge */}
          <div className="relative">
            <img
              src="/images/15_Z1IyzQ1.webp"
              alt="Armada Deaz Rental"
              loading="lazy"
              width={600}
              height={400}
              className="rounded-xl shadow-2xl transition-transform hover:scale-[1.02] duration-500 w-full"
            />
            <div className="absolute -bottom-4 -right-4 bg-red-800 text-white p-4 rounded-xl shadow-lg hidden sm:block">
              <span className="block text-2xl font-bold">10+ Tahun</span>
              <span className="text-xs">Pengalaman Melayani</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
