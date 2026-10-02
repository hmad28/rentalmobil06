import React from "react";
import { ShieldCheck, Car, MessageSquareText, ThumbsUp } from "lucide-react";

export const WhyChooseUsSection = () => {
  const points = [
    {
      title: "Armada Terawat",
      description: "Kendaraan dipersiapkan dan dicek berkala untuk memberikan perjalanan yang aman dan nyaman.",
      icon: ShieldCheck,
    },
    {
      title: "Pilihan Sesuai Kebutuhan",
      description: "Tersedia mulai dari kendaraan keluarga, SUV tangguh, hingga kapasitas rombongan besar.",
      icon: Car,
    },
    {
      title: "Booking Praktis",
      description: "Pilih armada dan konsultasikan jadwal serta rute langsung melalui WhatsApp dengan mudah.",
      icon: MessageSquareText,
    },
    {
      title: "Pelayanan Responsif",
      description: "Tim kami siap membantu merekomendasikan kendaraan terbaik sesuai agenda perjalanan Anda.",
      icon: ThumbsUp,
    },
  ];

  return (
    <section id="kenapa-kami" className="py-16 sm:py-24 bg-white border-b border-[#E8E4DB]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F8F6F1] border border-[#E8E4DB] mb-3">
            <span className="font-cinzel text-xs font-semibold tracking-wider text-[#B8892E] uppercase">
              KEUNGGULAN
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#171717] tracking-tight mb-4">
            Kenapa Memilih ZAHRAFFAMIRA?
          </h2>
          <p className="text-base text-[#626262]">
            Fokus utama kami adalah memberikan pengalaman sewa kendaraan yang nyaman, aman, dan tanpa repot.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {points.map((pt, idx) => {
            const Icon = pt.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-xl bg-[#F8F6F1] border border-[#E8E4DB] transition-all duration-200 hover:border-[#B8892E]/60 hover:-translate-y-0.5"
              >
                <div className="w-12 h-12 rounded-lg bg-white border border-[#E8E4DB] flex items-center justify-center text-[#B8892E] mb-5 shadow-2xs">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-[#171717] mb-2">
                  {pt.title}
                </h3>
                <p className="text-sm text-[#626262] leading-relaxed">
                  {pt.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
