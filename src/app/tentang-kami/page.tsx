import React from "react";
import type { Metadata } from "next";
import { ShieldCheck, MapPin, MessageCircle, Star, Clock, Users } from "lucide-react";
import { GallerySection } from "@/components/GallerySection";

export const metadata: Metadata = {
  title: "Tentang Kami - Zahraffa Rental Mobil Banjarmasin",
  description: "Profil Home Zahraffa Rental Mobil Banjarmasin dan Banjarbaru. Penyedia jasa transportasi sewa mobil terpercaya dengan komitmen pelayanan prima dan armada terawat berplat DA lokal.",
};

export default function TentangKamiPage() {
  return (
    <main className="pt-20 bg-[#FBFAF7]">
      {/* Hero Header */}
      <section className="py-14 sm:py-20 bg-gradient-to-b from-[#F4EFE6] to-[#FBFAF7] border-b border-[#E8E4DB]">
        <div className="container mx-auto px-4 sm:px-6 max-w-5xl text-center">
          <p className="text-xs sm:text-sm font-semibold tracking-widest text-[#B8892E] uppercase font-cinzel mb-3">
            Profil Resmi & Komitmen Kami
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#171717] tracking-tight mb-5">
            Tentang <span className="text-[#B8892E]">ZAHRAFFAMIRA</span> Rental Mobil
          </h1>
          <p className="text-base sm:text-lg text-[#626262] leading-relaxed max-w-2xl mx-auto mb-6">
            Penyedia jasa rental mobil terpercaya di Banjarmasin, Banjarbaru, Gambut, dan seluruh wilayah Kalimantan Selatan. Menghadirkan kenyamanan, keamanan, dan ketepatan waktu untuk setiap perjalanan Anda.
          </p>
          <div className="inline-flex flex-wrap items-center justify-center gap-3 bg-white px-5 py-2.5 rounded-full border border-[#E8E4DB] shadow-xs text-xs sm:text-sm text-[#404040]">
            <span className="flex items-center gap-1 text-amber-500 font-bold">
              <Star className="w-4 h-4 fill-amber-400 text-amber-400" /> 5.0 di Google Maps
            </span>
            <span className="text-[#A39D93]">•</span>
            <span className="flex items-center gap-1 text-emerald-600 font-medium">
              <ShieldCheck className="w-4 h-4" /> Home Zahraffa Terverifikasi
            </span>
            <span className="text-[#A39D93]">•</span>
            <span className="flex items-center gap-1 text-[#626262]">
              <MapPin className="w-4 h-4 text-[#B8892E]" /> Gambut, Kab. Banjar
            </span>
          </div>
        </div>
      </section>

      {/* Story & Company Info */}
      <section className="py-16 bg-white border-b border-[#E8E4DB]">
        <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Visual Garage / Fleet Photo */}
            <div className="lg:col-span-6 relative">
              <div className="relative rounded-2xl overflow-hidden border border-[#E8E4DB] shadow-lg group">
                <img
                  src="/images/maps/armada-hiace-lineup.jpg"
                  alt="Armada Toyota Hiace Zahraffa Rental Mobil"
                  className="w-full h-[360px] sm:h-[420px] object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="bg-[#B8892E] text-white text-[11px] font-bold px-2.5 py-1 rounded-md mb-1.5 inline-block">
                    Dokumentasi Asli Google Maps
                  </span>
                  <p className="font-bold text-base sm:text-lg">Lineup Armada Toyota Hiace Zahraffa</p>
                  <p className="text-xs text-neutral-300">Siap melayani perjalanan wisata, keluarga, dan instansi dinas</p>
                </div>
              </div>

              {/* Overlapping secondary real photo */}
              <div className="hidden sm:block absolute -bottom-8 -right-6 w-56 rounded-xl overflow-hidden border-4 border-white shadow-xl">
                <img
                  src="/images/maps/garasi-zahraffa-1.jpg"
                  alt="Garasi Home Zahraffa Gambut"
                  className="w-full h-36 object-cover"
                />
                <div className="bg-[#171717] px-3 py-1.5 text-center text-white text-[11px] font-semibold">
                  Garasi Home Zahraffa
                </div>
              </div>
            </div>

            {/* Content text */}
            <div className="lg:col-span-6 space-y-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#B8892E] font-cinzel">
                  Siapa Kami
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#171717] mt-1 tracking-tight">
                  Dedikasi Kenyamanan & Keamanan Perjalanan Anda
                </h2>
              </div>

              <p className="text-[#626262] text-sm sm:text-base leading-relaxed">
                <strong>Zahraffa Rental Mobil (Home Zahraffa)</strong> adalah penyedia layanan rental mobil profesional berlokasi di Gambut, Kabupaten Banjar, yang melayani seluruh penjuru kota Banjarmasin, Banjarbaru, dan sekitarnya.
              </p>

              <p className="text-[#626262] text-sm sm:text-base leading-relaxed">
                Kami menyediakan armada lengkap dan terawat mulai dari MPV keluarga seperti <strong>Avanza dan Innova Reborn</strong>, hingga unit berkapasitas besar seperti <strong>Toyota Hiace Commuter & Premio</strong>, serta armada premium seperti <strong>Fortuner dan Alphard</strong>.
              </p>

              {/* Stat Highlights */}
              <div className="grid grid-cols-3 gap-3 pt-2">
                <div className="p-4 bg-[#FBFAF7] rounded-xl border border-[#E8E4DB] text-center">
                  <span className="block text-2xl sm:text-3xl font-extrabold text-[#B8892E]">100%</span>
                  <span className="text-xs text-[#626262] font-medium">Plat DA Resmi</span>
                </div>
                <div className="p-4 bg-[#FBFAF7] rounded-xl border border-[#E8E4DB] text-center">
                  <span className="block text-2xl sm:text-3xl font-extrabold text-[#B8892E]">5.0 ★</span>
                  <span className="text-xs text-[#626262] font-medium">Rating Maps</span>
                </div>
                <div className="p-4 bg-[#FBFAF7] rounded-xl border border-[#E8E4DB] text-center">
                  <span className="block text-2xl sm:text-3xl font-extrabold text-[#B8892E]">24 Jam</span>
                  <span className="text-xs text-[#626262] font-medium">Layanan Siaga</span>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href="https://wa.me/6285349166234?text=Halo+Zahraffa+Rental+Mobil,+saya+ingin+konsultasi+kebutuhan+sewa+mobil"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#B8892E] hover:bg-[#9E7424] text-white font-semibold text-sm px-6 py-3 rounded-lg shadow-sm transition-all"
                >
                  <MessageCircle className="w-4 h-4 fill-white" />
                  Hubungi Admin Zahraffa via WhatsApp
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Core Advantages */}
      <section className="py-16 bg-[#FBFAF7] border-b border-[#E8E4DB]">
        <div className="container mx-auto px-4 sm:px-6 max-w-5xl">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-[#B8892E] font-cinzel">
              Kelebihan Layanan
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#171717] mt-1 tracking-tight">
              Mengapa Memilih Zahraffa Rental?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 bg-white rounded-xl border border-[#E8E4DB] shadow-xs">
              <div className="w-12 h-12 rounded-xl bg-amber-50 border border-amber-200 text-[#B8892E] flex items-center justify-center mb-4">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-base text-[#171717] mb-2">Armada Nyata & Terawat</h3>
              <p className="text-xs sm:text-sm text-[#626262] leading-relaxed">
                Unit asli milik operasional dengan plat lokal DA. Kondisi mesin selalu dicek berkala di bengkel resmi serta kabin bersih dan wangi.
              </p>
            </div>

            <div className="p-6 bg-white rounded-xl border border-[#E8E4DB] shadow-xs">
              <div className="w-12 h-12 rounded-xl bg-amber-50 border border-amber-200 text-[#B8892E] flex items-center justify-center mb-4">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-base text-[#171717] mb-2">Driver Ramah & Berpengalaman</h3>
              <p className="text-xs sm:text-sm text-[#626262] leading-relaxed">
                Pengemudi kami sangat paham rute Banjarmasin, Banjarbaru, Martapura, hingga rute luar kota seperti Hulu Sungai, Batulicin, dan Kotabaru.
              </p>
            </div>

            <div className="p-6 bg-white rounded-xl border border-[#E8E4DB] shadow-xs">
              <div className="w-12 h-12 rounded-xl bg-amber-50 border border-amber-200 text-[#B8892E] flex items-center justify-center mb-4">
                <Clock className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-base text-[#171717] mb-2">Tepat Waktu & Siaga 24 Jam</h3>
              <p className="text-xs sm:text-sm text-[#626262] leading-relaxed">
                Jaminan penjemputan on-time baik di Bandara Syamsudin Noor, hotel, kantor, maupun kediaman Anda di seluruh Kalimantan Selatan.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Real Fleet & Garage Gallery Section */}
      <GallerySection />
    </main>
  );
}
