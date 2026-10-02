import React from "react";
import Link from "next/link";

export const ServiceAreaSection = () => {
  const areas = [
    { label: "Rental Mobil Banjarmasin", href: "/sewa-mobil-banjarmasin" },
    { label: "Rental Mobil Banjarbaru", href: "/sewa-mobil-banjarbaru" },
    { label: "Sewa Mobil Lepas Kunci", href: "/layanan/lepas-kunci" },
    { label: "Antar Jemput Bandara", href: "/layanan/antar-jemput-bandara" },
  ];

  return (
    <section className="py-12 bg-white border-y border-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-center mb-8 text-gray-900">Area Layanan Kami</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {areas.map((area, idx) => (
            <Link
              key={idx}
              href={area.href}
              className="px-6 py-3 bg-gray-50 rounded-full text-gray-800 font-bold hover:bg-red-800 hover:text-white transition-all shadow-sm"
            >
              {area.label}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
