import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import cars from "@/data/cars.json";
import { Users, Briefcase, Cog, Fuel, CheckCircle2, MessageCircle, ArrowRight, ShieldCheck, Sparkles } from "lucide-react";
import { FaqSection } from "@/components/FaqSection";

export const metadata: Metadata = {
  title: "Daftar Armada Rental Mobil Banjarmasin, Gambut & Banjarbaru",
  description:
    "Pilihan lengkap armada Zahraffamira Rental Mobil: New Avanza, Grand Avanza, Innova Reborn, Innova Zenix, Fortuner, Alphard, Hiace Commuter 15 seat, & Hiace Premio VIP. Unit terawat, bersih, siap lepas kunci atau supir.",
  keywords: [
    "armada rental mobil banjarmasin",
    "sewa avanza banjarmasin",
    "sewa innova banjarmasin",
    "sewa hiace commuter banjarmasin",
    "sewa hiace premio gambut",
    "rental alphard banjarmasin",
    "rental fortuner banjarmasin",
    "daftar harga rental mobil banjarmasin",
  ],
  alternates: {
    canonical: "https://zahraffamirarental.com/armada",
  },
};

export default function ArmadaPage() {
  const armadaListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Armada Rental Mobil ZAHRAFFAMIRA",
    "description": "Daftar unit kendaraan rental mobil di Banjarmasin, Gambut, dan Banjarbaru",
    "itemListElement": cars.map((car, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@type": "Car",
        "name": car.fullName,
        "image": `https://zahraffamirarental.com${car.img}`,
        "url": `https://zahraffamirarental.com/armada/${car.id}`,
        "description": car.description,
        "numberOfSeats": car.seats,
        "offers": {
          "@type": "Offer",
          "priceCurrency": "IDR",
          "availability": "https://schema.org/InStock",
        },
      },
    })),
  };

  return (
    <main className="pt-20 bg-[#FBFAF7] min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(armadaListSchema) }}
      />

      {/* Header Banner */}
      <section className="py-14 sm:py-18 bg-gradient-to-b from-[#F4EFE6] to-[#FBFAF7] border-b border-[#E8E4DB]">
        <div className="container mx-auto px-4 sm:px-6 max-w-5xl text-center">
          {/* Breadcrumbs */}
          <nav className="flex justify-center mb-6 text-xs sm:text-sm text-[#737373]" aria-label="Breadcrumb">
            <ol className="flex items-center space-x-2">
              <li>
                <Link href="/" className="hover:text-[#B8892E] transition-colors">
                  Beranda
                </Link>
              </li>
              <li>
                <span className="text-[#A3A3A3]">/</span>
              </li>
              <li className="text-[#B8892E] font-semibold">Armada</li>
            </ol>
          </nav>

          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-amber-50 border border-amber-200 rounded-full text-xs font-semibold text-[#B8892E] uppercase tracking-wider font-cinzel mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            Pilihan Unit Terawat & Siap Jalan
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#171717] tracking-tight mb-4">
            Armada <span className="text-gold-gradient">ZAHRAFFAMIRA</span> Rental Mobil
          </h1>
          <p className="text-sm sm:text-base text-[#626262] max-w-3xl mx-auto leading-relaxed">
            Dari mobil keluarga ekonomis hingga MPV mewah eksekutif dan minibus pariwisata 15-seater. Seluruh armada kami rutin diservis berkala, ber-AC dingin, bersih wangi, serta siap menemani perjalanan dinas, wisata, dan acara penting Anda di Kalimantan Selatan.
          </p>
        </div>
      </section>

      {/* Cars Grid */}
      <section className="py-12 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
            {cars.map((car) => (
              <article
                key={car.id}
                className="overflow-hidden flex flex-col bg-white rounded-2xl border border-[#E8E4DB] shadow-xs hover:shadow-xl hover:border-[#DFC88F] transition-all duration-300 group"
              >
                {/* Image Section */}
                <div className="relative aspect-4/3 w-full overflow-hidden bg-[#F8F6F1] border-b border-[#E8E4DB]">
                  <img
                    src={car.img}
                    alt={car.alt}
                    title={car.alt}
                    loading="lazy"
                    width={400}
                    height={300}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
                    <span className="px-2.5 py-1 text-[11px] font-bold bg-white/95 text-[#9C721D] border border-[#DFC88F] rounded-md shadow-2xs backdrop-blur-xs">
                      {car.categoryLabel}
                    </span>
                  </div>
                  <div className="absolute bottom-3 right-3">
                    <span className="px-2.5 py-1 text-xs font-semibold bg-[#171717]/85 text-[#DFC88F] rounded-md backdrop-blur-xs">
                      {car.priceRange}
                    </span>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <h2 className="text-xl font-bold text-[#171717] group-hover:text-[#B8892E] transition-colors leading-snug">
                      <Link href={`/armada/${car.id}`}>{car.fullName}</Link>
                    </h2>
                    <p className="text-xs text-[#737373] mt-1 line-clamp-2">
                      {car.tagline}
                    </p>

                    {/* Specs Badges */}
                    <div className="grid grid-cols-2 gap-2 mt-4 pt-4 border-t border-[#F0ECE1] text-xs text-[#525252]">
                      <div className="flex items-center gap-1.5">
                        <Users className="w-3.5 h-3.5 text-[#B8892E] shrink-0" />
                        <span>{car.seats} Penumpang</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Briefcase className="w-3.5 h-3.5 text-[#B8892E] shrink-0" />
                        <span>{car.luggage} Koper</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Cog className="w-3.5 h-3.5 text-[#B8892E] shrink-0" />
                        <span className="truncate">{car.transmission}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Fuel className="w-3.5 h-3.5 text-[#B8892E] shrink-0" />
                        <span className="truncate">{car.fuel.split(" ")[0]}</span>
                      </div>
                    </div>
                  </div>

                  {/* Buttons */}
                  <div className="mt-6 pt-4 border-t border-[#F0ECE1] space-y-2">
                    <Link
                      href={`/armada/${car.id}`}
                      className="w-full py-2.5 px-3 bg-[#F8F6F1] hover:bg-[#F2ECE1] text-[#171717] text-xs font-semibold rounded-lg text-center flex items-center justify-center gap-1.5 transition-colors"
                    >
                      <span>Lihat Spesifikasi & Detail</span>
                      <ArrowRight className="w-3.5 h-3.5 text-[#B8892E]" />
                    </Link>
                    <a
                      href={car.waLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-2.5 px-3 bg-gold-gradient text-white text-xs font-semibold rounded-lg text-center flex items-center justify-center gap-1.5 shadow-xs hover:opacity-95 transition-opacity"
                    >
                      <MessageCircle className="w-3.5 h-3.5" />
                      <span>Booking via WhatsApp</span>
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Fleet Guarantee Section */}
      <section className="py-12 bg-white border-y border-[#E8E4DB]">
        <div className="container mx-auto px-4 sm:px-6 max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="p-6 rounded-xl bg-[#FBFAF7] border border-[#E8E4DB]/80">
              <ShieldCheck className="w-8 h-8 text-[#B8892E] mx-auto mb-3" />
              <h3 className="text-base font-bold text-[#171717] mb-1">Kondisi Unit Selalu Prima</h3>
              <p className="text-xs sm:text-sm text-[#626262]">
                Seluruh kendaraan diservis berkala di bengkel resmi dengan penggantian oli dan pengecekan ban rutin.
              </p>
            </div>
            <div className="p-6 rounded-xl bg-[#FBFAF7] border border-[#E8E4DB]/80">
              <Sparkles className="w-8 h-8 text-[#B8892E] mx-auto mb-3" />
              <h3 className="text-base font-bold text-[#171717] mb-1">Kabin Bersih & Wangi</h3>
              <p className="text-xs sm:text-sm text-[#626262]">
                Cuci luar dalam dan fogging disinfektan sebelum unit diserahkan kepada penyewa.
              </p>
            </div>
            <div className="p-6 rounded-xl bg-[#FBFAF7] border border-[#E8E4DB]/80">
              <CheckCircle2 className="w-8 h-8 text-[#B8892E] mx-auto mb-3" />
              <h3 className="text-base font-bold text-[#171717] mb-1">Opsi Lepas Kunci & Driver</h3>
              <p className="text-xs sm:text-sm text-[#626262]">
                Fleksibilitas sewa mandiri dengan syarat mudah atau ditemani driver ramah yang hafal rute Kalsel.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FaqSection
        title="FAQ Seputar Armada Zahraffamira"
        subtitle="Pertanyaan umum mengenai kapasitas, ketersediaan unit, dan tarif rental"
      />
    </main>
  );
}
