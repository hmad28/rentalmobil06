import React from "react";
import { MessageCircle, Phone } from "lucide-react";

export const CtaSection = () => {
  return (
    <section className="py-20 sm:py-24 bg-[#171717] text-white relative overflow-hidden">
      {/* Background soft glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#B8892E]/15 via-transparent to-transparent pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center max-w-3xl">
        <span className="font-cinzel text-xs font-semibold tracking-widest text-[#E8D5A8] uppercase block mb-3">
          RESERVASI MUDAH & CEPAT
        </span>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-6">
          Siap Memulai Perjalanan Bersama ZAHRAFFAMIRA?
        </h2>
        <p className="text-base sm:text-lg text-gray-300 leading-relaxed mb-8 max-w-xl mx-auto">
          Konsultasikan kebutuhan armada dan jadwal perjalanan Anda langsung bersama kami via WhatsApp.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="https://api.whatsapp.com/send/?phone=6281255964566&text=Halo+ZAHRAFFAMIRA+Rental+Mobil+Saya+ingin+reservasi+mobil&type=phone_number&app_absent=0"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 text-base font-semibold text-white bg-[#B8892E] hover:bg-[#9A7020] rounded-md shadow-lg transition-all duration-200"
          >
            <MessageCircle className="w-5 h-5" />
            <span>Hubungi via WhatsApp</span>
          </a>
          <a
            href="tel:6281255964566"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 text-base font-semibold text-white border border-white/20 hover:bg-white/10 rounded-md transition-all duration-200"
          >
            <Phone className="w-5 h-5" />
            <span>Telepon Langsung</span>
          </a>
        </div>
      </div>
    </section>
  );
};
