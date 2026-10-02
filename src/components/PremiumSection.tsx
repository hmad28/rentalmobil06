import React from "react";
import { ArrowRight, Sparkles } from "lucide-react";

export const PremiumSection = () => {
  const premiumCars = [
    {
      title: "Toyota Alphard",
      subtitle: "Luxury MPV",
      img: "/images/Toyota_Alphard_Z9sSio.webp",
      waLink: "https://api.whatsapp.com/send/?phone=6281255964566&text=Halo%20ZAHRAFFAMIRA%20Rental%20Mobil%2C%20saya%20tertarik%20dengan%20armada%20premium%20*Toyota%20Alphard*&type=phone_number&app_absent=0",
    },
    {
      title: "Toyota Fortuner",
      subtitle: "Prestige SUV",
      img: "/images/Toyota_Fortuner_GR_Sport_2fN98a.webp",
      waLink: "https://api.whatsapp.com/send/?phone=6281255964566&text=Halo%20ZAHRAFFAMIRA%20Rental%20Mobil%2C%20saya%20tertarik%20dengan%20armada%20premium%20*Toyota%20Fortuner*&type=phone_number&app_absent=0",
    },
    {
      title: "Innova Zenix",
      subtitle: "Modern Comfort",
      img: "/images/Toyota_Innova_Zenix_Zkm8IB.webp",
      waLink: "https://api.whatsapp.com/send/?phone=6281255964566&text=Halo%20ZAHRAFFAMIRA%20Rental%20Mobil%2C%20saya%20tertarik%20dengan%20armada%20premium%20*Innova%20Zenix*&type=phone_number&app_absent=0",
    },
  ];

  return (
    <section className="py-20 sm:py-28 bg-[#171717] text-white relative overflow-hidden">
      {/* Subtle gold gradient accent on dark */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#B8892E]/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-2xl mx-auto text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-[#B8892E]/30 mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#B8892E]" />
            <span className="font-cinzel text-xs font-semibold tracking-widest text-[#E8D5A8] uppercase">
              PREMIUM COLLECTION
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-4">
            Perjalanan Lebih Berkelas.
          </h2>
          <p className="text-base sm:text-lg text-gray-300 max-w-xl mx-auto leading-relaxed">
            Pilihan armada premium untuk kenyamanan lebih dan impresi terbaik selama agenda penting Anda.
          </p>
        </div>

        {/* 3 Premium Vehicle Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto mb-12">
          {premiumCars.map((car, idx) => (
            <div
              key={idx}
              className="bg-[#212121] rounded-2xl border border-white/10 overflow-hidden transition-all duration-300 hover:border-[#B8892E]/60 hover:shadow-2xl hover:shadow-[#B8892E]/10 group flex flex-col justify-between"
            >
              <div className="relative aspect-[4/3] bg-gradient-to-b from-[#2a2a2a] to-[#212121] p-6 flex items-center justify-center overflow-hidden">
                <img
                  src={car.img}
                  alt={car.title}
                  title={car.title}
                  loading="lazy"
                  width={400}
                  height={300}
                  className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <div className="p-6 border-t border-white/5">
                <span className="text-xs font-medium text-[#E8D5A8] uppercase tracking-wider block mb-1">
                  {car.subtitle}
                </span>
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-[#E8D5A8] transition-colors">
                  {car.title}
                </h3>
                <a
                  href={car.waLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[#B8892E] hover:text-[#E8D5A8] transition-colors group-hover:translate-x-1"
                >
                  <span>Konsultasi Unit</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <a
            href="https://api.whatsapp.com/send/?phone=6281255964566&text=Halo+ZAHRAFFAMIRA+Rental+Mobil+Saya+ingin+tanya+armada+premium&type=phone_number&app_absent=0"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3.5 text-base font-semibold text-white bg-[#B8892E] hover:bg-[#9A7020] rounded-md shadow-lg transition-all duration-200"
          >
            <span>Lihat Armada Premium</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};
