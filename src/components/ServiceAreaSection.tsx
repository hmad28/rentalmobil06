import React from "react";
import Link from "next/link";

export const ServiceAreaSection = () => {
  const areas = [
    { label: "Rental Mobil Gambut (Garasi)", href: "/rental-mobil-gambut" },
    { label: "Rental Mobil Banjarmasin", href: "/sewa-mobil-banjarmasin" },
    { label: "Rental Mobil Banjarbaru", href: "/sewa-mobil-banjarbaru" },
    { label: "Rental Mobil Martapura", href: "/rental-mobil-martapura" },
    { label: "Sewa Mobil Lepas Kunci", href: "/layanan/lepas-kunci" },
    { label: "Antar Jemput Bandara BDJ", href: "/layanan/antar-jemput-bandara" },
  ];

  return (
    <section className="py-12 bg-white border-b border-[#E8E4DB]">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-center mb-8 text-[#171717]">
          Area Layanan Kami
        </h2>
        <div className="flex flex-wrap justify-center gap-4">
          {areas.map((area, idx) => (
            <Link
              key={idx}
              href={area.href}
              className="px-6 py-3 bg-[#F8F6F1] border border-[#E8E4DB] rounded-full text-[#171717] font-semibold hover:bg-gold-gradient hover:text-white hover:border-transparent transition-all shadow-2xs"
            >
              {area.label}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
