import React from "react";
import Link from "next/link";
import cars from "@/data/cars.json";
import { MessageCircle, ArrowRight, Table } from "lucide-react";

interface ArmadaPricingTableProps {
  title?: string;
  subtitle?: string;
  id?: string;
}

export const ArmadaPricingTable: React.FC<ArmadaPricingTableProps> = ({
  title = "Tabel Tarif & Spesifikasi Rental Mobil Banjarmasin",
  subtitle = "Tarif sewa mobil harian di Zahraffamira Rental Mobil Banjarmasin & Gambut mulai dari Rp 350.000/hari untuk New Avanza lepas kunci hingga Rp 2.500.000/hari untuk Toyota Alphard VIP. Seluruh armada dalam kondisi terawat, ber-AC dingin, wangi, dan siap diantar 24 jam.",
  id = "tabel-harga",
}) => {
  return (
    <section id={id} className="py-12 sm:py-16 bg-white border-b border-[#E8E4DB]">
      <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-50 border border-amber-200/80 rounded-full text-xs font-semibold text-[#B8892E] uppercase tracking-wider font-cinzel mb-3">
            <Table className="w-3.5 h-3.5" />
            Transparansi Tarif & Spesifikasi
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#171717] tracking-tight">
            {title}
          </h2>
          {/* Answer-first 40-60 words direct paragraph for AEO and Answer Engines */}
          <p className="mt-3 text-sm sm:text-base text-[#626262] leading-relaxed">
            {subtitle}
          </p>
        </div>

        {/* Semantic HTML Table */}
        <div className="overflow-x-auto rounded-2xl border border-[#E8E4DB] shadow-xs bg-[#FBFAF7]">
          <table className="w-full text-left border-collapse text-xs sm:text-sm">
            <caption className="sr-only">
              Daftar Tarif dan Spesifikasi Armada Rental Mobil Zahraffamira Banjarmasin
            </caption>
            <thead>
              <tr className="bg-[#F4EFE6] border-b border-[#E8E4DB] text-[#171717]">
                <th scope="col" className="py-3.5 px-4 font-bold">
                  Unit Kendaraan
                </th>
                <th scope="col" className="py-3.5 px-4 font-bold">
                  Kategori
                </th>
                <th scope="col" className="py-3.5 px-4 font-bold text-center">
                  Kapasitas
                </th>
                <th scope="col" className="py-3.5 px-4 font-bold">
                  Transmisi
                </th>
                <th scope="col" className="py-3.5 px-4 font-bold">
                  Pilihan Layanan
                </th>
                <th scope="col" className="py-3.5 px-4 font-bold text-right">
                  Estimasi Tarif Harian
                </th>
                <th scope="col" className="py-3.5 px-4 font-bold text-center">
                  Reservasi
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#E8E4DB]/80 bg-white">
              {cars.map((car) => {
                const isHiace = car.id.includes("hiace");
                const isAlphard = car.id === "toyota-alphard";
                const isFortuner = car.id === "toyota-fortuner";
                const rentalType = isHiace || isAlphard || isFortuner ? "Include Supir" : "Lepas Kunci / Supir";

                return (
                  <tr
                    key={car.id}
                    className="hover:bg-amber-50/40 transition-colors"
                  >
                    <th scope="row" className="py-3.5 px-4 font-bold text-[#171717]">
                      <Link
                        href={`/armada/${car.id}`}
                        className="hover:text-[#B8892E] transition-colors flex items-center gap-1.5"
                      >
                        <span>{car.fullName}</span>
                      </Link>
                    </th>
                    <td className="py-3.5 px-4 text-[#525252]">
                      <span className="px-2 py-0.5 rounded bg-[#F8F6F1] text-[#9C721D] border border-[#DFC88F]/60 text-[11px] font-semibold">
                        {car.categoryLabel}
                      </span>
                    </td>
                    <td className="py-3.5 px-4 text-[#525252] text-center font-medium">
                      {car.seats} Kursi
                    </td>
                    <td className="py-3.5 px-4 text-[#626262]">
                      {car.transmission}
                    </td>
                    <td className="py-3.5 px-4 text-[#626262]">
                      <span className="inline-flex items-center gap-1 text-[11px]">
                        ✓ {rentalType}
                      </span>
                    </td>
                    <td className="py-3.5 px-4 text-right font-bold text-[#B8892E]">
                      {car.priceRange}
                    </td>
                    <td className="py-3.5 px-4 text-center">
                      <a
                        href={car.waLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 px-3 py-1.5 bg-gold-gradient text-white rounded-md text-[11px] font-semibold hover:opacity-95 shadow-2xs transition-opacity"
                        aria-label={`Booking ${car.title} via WhatsApp`}
                      >
                        <MessageCircle className="w-3 h-3" />
                        <span>Sewa</span>
                      </a>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        <div className="mt-4 p-4 rounded-xl bg-[#FBF9F5] border border-[#E8E4DB] flex flex-col sm:flex-row items-center justify-between text-xs text-[#626262] gap-2">
          <p>
            * Tarif di atas dapat bervariasi pada periode high season (Libur Nasional, Lebaran, Haul Sekumpul). Melayani sewa mingguan, bulanan, & kontrak instansi.
          </p>
          <a
            href="https://api.whatsapp.com/send/?phone=6285349166234&text=Halo+ZAHRAFFAMIRA+Rental+Mobil+saya+ingin+konsultasi+tarif+sewa+mobil&type=phone_number&app_absent=0"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#B8892E] font-bold hover:underline shrink-0 flex items-center gap-1"
          >
            <span>Konsultasi Paket Khusus</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
};
