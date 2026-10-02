import React from "react";
import { Users, Briefcase, Compass, Bus } from "lucide-react";

export const ServicesSection = () => {
  const services = [
    {
      title: "Rental Mobil Keluarga",
      description: "Untuk perjalanan sehari-hari maupun agenda bersama keluarga tercinta.",
      icon: Users,
    },
    {
      title: "Perjalanan Bisnis",
      description: "Pilihan kendaraan prima untuk menunjang kebutuhan kerja dan perjalanan perusahaan.",
      icon: Briefcase,
    },
    {
      title: "Wisata",
      description: "Armada nyaman untuk berbagai kebutuhan perjalanan destinasi wisata di Kalimantan Selatan.",
      icon: Compass,
    },
    {
      title: "Rental Rombongan",
      description: "Hiace Commuter dan Hiace Premio untuk kenyamanan perjalanan bersama grup besar.",
      icon: Bus,
    },
  ];

  return (
    <section id="layanan" className="py-16 sm:py-24 bg-[#F8F6F1] border-b border-[#E8E4DB]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#E8E4DB] mb-3">
            <span className="font-cinzel text-xs font-semibold tracking-wider text-[#B8892E] uppercase">
              LAYANAN KAMI
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#171717] tracking-tight mb-4">
            Solusi Sewa Mobil Fleksibel
          </h2>
          <p className="text-base text-[#626262]">
            Menyesuaikan berbagai kebutuhan mobilitas Anda dengan pilihan armada terlengkap.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s, idx) => {
            const Icon = s.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-xl bg-white border border-[#E8E4DB] transition-all duration-200 hover:border-[#B8892E] hover:shadow-xs group"
              >
                <div className="w-12 h-12 rounded-lg bg-[#F8F6F1] border border-[#E8E4DB] flex items-center justify-center text-[#B8892E] mb-5 group-hover:bg-[#B8892E] group-hover:text-white transition-colors duration-200">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-[#171717] mb-2 group-hover:text-[#B8892E] transition-colors">
                  {s.title}
                </h3>
                <p className="text-sm text-[#626262] leading-relaxed">
                  {s.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
