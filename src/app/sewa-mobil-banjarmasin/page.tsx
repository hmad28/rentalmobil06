import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import cars from "@/data/cars.json";
import {
  MapPin,
  Clock,
  ShieldCheck,
  CheckCircle2,
  MessageCircle,
  Sparkles,
  ArrowRight,
  Waves,
  Building,
} from "lucide-react";
import { FaqSection } from "@/components/FaqSection";

export const metadata: Metadata = {
  title: "Rental & Sewa Mobil Banjarmasin Murah ✅ Lepas Kunci 24 Jam",
  description:
    "Sewa & rental mobil Banjarmasin terpercaya dari ZAHRAFFAMIRA. Unit Avanza, Innova Reborn/Zenix, Fortuner, Alphard, & Hiace 15 seat. Lepas kunci atau supir ramah 24 jam nonstop.",
  keywords: [
    "rental mobil banjarmasin",
    "sewa mobil banjarmasin",
    "rental mobil banjarmasin lepas kunci",
    "sewa mobil banjarmasin murah",
    "rental innova banjarmasin",
    "sewa avanza banjarmasin",
    "sewa hiace banjarmasin",
    "carter mobil banjarmasin",
    "rental mobil banjarmasin 24 jam",
    "sewa mobil pasar terapung banjarmasin",
  ],
  alternates: {
    canonical: "https://zahraffamirarental.com/sewa-mobil-banjarmasin",
  },
  openGraph: {
    title: "Rental & Sewa Mobil Banjarmasin Murah ✅ Lepas Kunci 24 Jam",
    description:
      "Rental mobil terlengkap di Kota Banjarmasin. Unit bersih, wangi, kondisi prima. Tersedia lepas kunci atau dengan driver.",
    url: "https://zahraffamirarental.com/sewa-mobil-banjarmasin",
    siteName: "ZAHRAFFAMIRA Rental Mobil",
    locale: "id_ID",
    type: "website",
    images: ["/images/pelayanan-zahraffa.jpeg"],
  },
};

export default function SewaMobilBanjarmasinPage() {
  const banjarmasinSchema = {
    "@context": "https://schema.org",
    "@type": ["AutoRental", "LocalBusiness"],
    "@id": "https://zahraffamirarental.com/sewa-mobil-banjarmasin#business",
    "name": "ZAHRAFFAMIRA Rental Mobil Banjarmasin",
    "url": "https://zahraffamirarental.com/sewa-mobil-banjarmasin",
    "telephone": "+6285349166234",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Komplek Dinar Mas 2 Blok AB No. 13 D, Kayu Bawang, Gambut",
      "addressLocality": "Banjarmasin",
      "addressRegion": "Kalimantan Selatan",
      "postalCode": "70652",
      "addressCountry": "ID",
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": -3.401417,
      "longitude": 114.6771028,
    },
    "areaServed": [
      { "@type": "City", "name": "Banjarmasin" },
      { "@type": "AdministrativeArea", "name": "Banjarmasin Tengah" },
      { "@type": "AdministrativeArea", "name": "Banjarmasin Utara" },
      { "@type": "AdministrativeArea", "name": "Banjarmasin Selatan" },
      { "@type": "AdministrativeArea", "name": "Banjarmasin Timur" },
      { "@type": "AdministrativeArea", "name": "Banjarmasin Barat" },
      { "@type": "Place", "name": "Pasar Terapung Lok Baintan" },
      { "@type": "Place", "name": "Siring Menara Pandang" },
    ],
  };

  const banjarmasinFaqs = [
    {
      question: "Apakah mobil bisa diantar langsung ke hotel atau alamat di Banjarmasin?",
      answer:
        "Bisa! Kami melayani delivery unit mobil ke seluruh wilayah Kota Banjarmasin, termasuk hotel-hotel ternama (seperti Mercure, Favehotel, Swiss-Belhotel, Rattan Inn, Aston Banua), stasiun perwakilan, maupun alamat rumah/kantor Anda.",
    },
    {
      question: "Berapa tarif sewa mobil harian di Banjarmasin?",
      answer:
        "Tarif sewa mobil kami di Banjarmasin sangat kompetitif: New Avanza dan Grand Avanza mulai Rp 350.000/hari, Innova Reborn Rp 500.000 – Rp 650.000/hari, Innova Zenix Rp 700.000 – Rp 900.000/hari, serta Hiace Commuter 15 seat mulai Rp 1.000.000/hari include supir.",
    },
    {
      question: "Apakah bisa sewa mobil untuk wisata Pasar Terapung Lok Baintan?",
      answer:
        "Sangat bisa! Pasar Terapung Lok Baintan beroperasi sejak subuh (06.00 WITA). Driver kami siap menjemput Anda sejak pukul 05.30 WITA di hotel Banjarmasin untuk memastikan Anda tidak ketinggalan momen eksotis pasar terapung.",
    },
    {
      question: "Bagaimana sistem rental mobil lepas kunci di Banjarmasin?",
      answer:
        "Untuk lepas kunci, Anda cukup menyiapkan E-KTP asli, SIM A aktif, bukti tiket penerbangan/voucher hotel/ID card kantor, dan mengisi formulir verifikasi singkat. Unit akan diantar tepat waktu.",
    },
  ];

  return (
    <main className="pt-20 bg-[#FBFAF7] min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(banjarmasinSchema) }}
      />

      {/* Hero Section */}
      <section className="py-14 sm:py-20 bg-gradient-to-b from-[#F4EFE6] to-[#FBFAF7] border-b border-[#E8E4DB]">
        <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
          <nav className="flex mb-6 text-xs sm:text-sm text-[#737373]" aria-label="Breadcrumb">
            <ol className="flex items-center space-x-2">
              <li>
                <Link href="/" className="hover:text-[#B8892E] transition-colors">
                  Beranda
                </Link>
              </li>
              <li>
                <span className="text-[#A3A3A3]">/</span>
              </li>
              <li className="text-[#B8892E] font-semibold">Sewa Mobil Banjarmasin</li>
            </ol>
          </nav>

          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-7 space-y-5">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-amber-50 border border-amber-200 rounded-full text-xs font-semibold text-[#B8892E] uppercase tracking-wider font-cinzel">
                <Waves className="w-3.5 h-3.5" />
                Kota Seribu Sungai
              </span>

              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#171717] tracking-tight leading-tight">
                Rental & Sewa Mobil <span className="text-gold-gradient">Banjarmasin</span>
              </h1>

              <p className="text-sm sm:text-base text-[#626262] leading-relaxed">
                Butuh jasa <strong>rental mobil di Kota Banjarmasin</strong> dengan unit bersih, prima, dan pelayanan ramah? <strong>ZAHRAFFAMIRA Rental Mobil</strong> melayani rental harian, mingguan, bulanan, carter lepas kunci maupun include driver untuk keperluan dinas, bisnis, pernikahan, serta wisata keluarga ke Pasar Terapung, Menara Pandang Siring, dan Masjid Raya Sabilal Muhtadin.
              </p>

              <div className="flex flex-wrap gap-3 pt-2">
                <a
                  href="https://api.whatsapp.com/send/?phone=6285349166234&text=Halo+ZAHRAFFAMIRA+Rental+Mobil+Saya+di+Banjarmasin+ingin+sewa+mobil&type=phone_number&app_absent=0"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3.5 bg-gold-gradient text-white font-bold text-sm rounded-xl inline-flex items-center gap-2 shadow-md hover:opacity-95 transition-all"
                >
                  <MessageCircle className="w-4 h-4" />
                  Chat WhatsApp 24 Jam
                </a>
                <Link
                  href="/armada"
                  className="px-6 py-3.5 bg-white border border-[#E8E4DB] hover:border-[#DFC88F] text-[#171717] font-semibold text-sm rounded-xl inline-flex items-center gap-2 transition-all"
                >
                  Lihat Semua Armada
                  <ArrowRight className="w-4 h-4 text-[#B8892E]" />
                </Link>
              </div>

              {/* Trust Badges */}
              <div className="pt-4 grid grid-cols-3 gap-3 border-t border-[#E8E4DB] text-xs text-[#525252]">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-[#B8892E] shrink-0" />
                  <span>Siaga 24 Jam</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#B8892E] shrink-0" />
                  <span>Unit Asuransi & Terawat</span>
                </div>
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-[#B8892E] shrink-0" />
                  <span>Bebas Bau Rokok</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden bg-white border border-[#E8E4DB] shadow-lg">
                <img
                  src="/images/avanza-gedung-dinas.jpeg"
                  alt="Rental Mobil Banjarmasin - ZAHRAFFAMIRA"
                  title="Sewa Mobil Banjarmasin Terpercaya"
                  width={600}
                  height={450}
                  className="w-full h-auto object-cover"
                />
                <div className="p-4 bg-white border-t border-[#E8E4DB]">
                  <p className="text-xs font-bold text-[#171717]">
                    🚗 Pilihan Utama Perjalanan Dinas & Wisata
                  </p>
                  <p className="text-xs text-[#626262] mt-0.5">
                    Pengantaran tepat waktu ke hotel, kantor pemerintahan, pusat perbelanjaan, dan bandara.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Layanan Unggulan Banjarmasin */}
      <section className="py-14 sm:py-18 bg-white border-b border-[#E8E4DB]">
        <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#171717] tracking-tight">
              Pilihan Layanan di Kota Banjarmasin
            </h2>
            <p className="text-sm sm:text-base text-[#626262] mt-2">
              Fleksibilitas penuh sesuai kebutuhan mobilitas personal, perusahaan, maupun rombongan
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-[#FBFAF7] border border-[#E8E4DB]">
              <div className="w-10 h-10 rounded-xl bg-amber-50 border border-amber-200 text-[#B8892E] flex items-center justify-center mb-4">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-[#171717] mb-2">Sewa Mobil Lepas Kunci</h3>
              <p className="text-xs sm:text-sm text-[#626262] leading-relaxed">
                Nikmati privasi dan kebebasan berkendara mandiri di Banjarmasin dengan proses verifikasi data yang simpel dan cepat.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#FBFAF7] border border-[#E8E4DB]">
              <div className="w-10 h-10 rounded-xl bg-amber-50 border border-amber-200 text-[#B8892E] flex items-center justify-center mb-4">
                <Building className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-[#171717] mb-2">Sewa dengan Supir Profesional</h3>
              <p className="text-xs sm:text-sm text-[#626262] leading-relaxed">
                Driver ramah, berpengalaman, hafal rute Banjarmasin bebas macet, serta siap melayani kebutuhan protokoler dan bisnis.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#FBFAF7] border border-[#E8E4DB]">
              <div className="w-10 h-10 rounded-xl bg-amber-50 border border-amber-200 text-[#B8892E] flex items-center justify-center mb-4">
                <MapPin className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-[#171717] mb-2">Antar Jemput Bandara (Airport Shuttle)</h3>
              <p className="text-xs sm:text-sm text-[#626262] leading-relaxed">
                Layanan 24 jam dari/ke Bandara Syamsudin Noor. Driver siap standby di pintu kedatangan sebelum Anda mendarat.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Armada Terpopuler Banjarmasin */}
      <section className="py-14 sm:py-18 bg-[#FBFAF7] border-b border-[#E8E4DB]">
        <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
            <div>
              <p className="text-xs sm:text-sm font-semibold text-[#B8892E] uppercase tracking-wider font-cinzel">
                Armada Pilihan di Banjarmasin
              </p>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#171717] tracking-tight mt-1">
                Unit Terlaris untuk Kota Banjarmasin
              </h2>
            </div>
            <Link
              href="/armada"
              className="text-xs sm:text-sm font-bold text-[#B8892E] hover:underline flex items-center gap-1"
            >
              Lihat Seluruh Armada &raquo;
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {cars.slice(0, 4).map((car) => (
              <div
                key={car.id}
                className="bg-white rounded-2xl border border-[#E8E4DB] overflow-hidden hover:shadow-lg transition-all group flex flex-col"
              >
                <div className="relative aspect-4/3 bg-[#F8F6F1]">
                  <img
                    src={car.img}
                    alt={`Sewa ${car.title} Banjarmasin`}
                    width={400}
                    height={300}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                  />
                  <span className="absolute top-3 left-3 px-2.5 py-0.5 text-[11px] font-bold bg-white text-[#9C721D] border border-[#DFC88F] rounded">
                    {car.categoryLabel}
                  </span>
                </div>
                <div className="p-4 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-bold text-base text-[#171717]">
                      {car.fullName}
                    </h3>
                    <p className="text-xs text-[#737373] mt-1">
                      {car.seats} Penumpang • {car.transmission}
                    </p>
                    <p className="text-xs font-semibold text-[#B8892E] mt-2">
                      {car.priceRange}
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-[#F0ECE1] flex gap-2">
                    <Link
                      href={`/armada/${car.id}`}
                      className="flex-1 py-2 bg-[#F8F6F1] hover:bg-[#F0ECE1] text-[11px] font-semibold text-[#171717] rounded-lg text-center transition-colors"
                    >
                      Detail
                    </Link>
                    <a
                      href={car.waLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 py-2 bg-gold-gradient text-white text-[11px] font-semibold rounded-lg text-center shadow-xs"
                    >
                      Booking
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AEO FAQ Banjarmasin */}
      <FaqSection
        title="FAQ Rental Mobil Banjarmasin"
        subtitle="Pertanyaan umum seputar tarif, pengantaran hotel, dan syarat rental mobil di Banjarmasin"
        faqs={banjarmasinFaqs}
        id="faq-banjarmasin"
      />
    </main>
  );
}
