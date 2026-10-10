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
  Building2,
  Compass,
} from "lucide-react";
import { FaqSection } from "@/components/FaqSection";

export const metadata: Metadata = {
  title: "Rental Mobil Gambut Terdekat & Sewa Hiace 24 Jam - ZAHRAFFAMIRA",
  description:
    "Rental mobil Gambut terpercaya berlokasi di Komplek Dinar Mas 2. Melayani sewa mobil lepas kunci, dengan supir, dan carter Hiace 24 jam ke Jl. A. Yani KM 12-17, Liang Anggang, & Bandara Syamsudin Noor.",
  keywords: [
    "rental mobil gambut",
    "sewa mobil gambut",
    "rental hiace commuter gambut",
    "sewa hiace gambut",
    "carter mobil gambut",
    "rental mobil terdekat gambut",
    "sewa avanza gambut",
    "sewa innova gambut",
    "rental mobil komplek dinar mas gambut",
    "zahraffamira rental mobil gambut",
  ],
  alternates: {
    canonical: "https://zahraffamirarental.com/rental-mobil-gambut",
  },
  openGraph: {
    title: "Rental Mobil Gambut Terdekat & Sewa Hiace 24 Jam - ZAHRAFFAMIRA",
    description:
      "Garasi utama di Gambut (Komplek Dinar Mas 2). Pilihan unit Avanza, Innova, Hiace, Fortuner, Alphard siap antar cepat.",
    url: "https://zahraffamirarental.com/rental-mobil-gambut",
    siteName: "ZAHRAFFAMIRA Rental Mobil",
    locale: "id_ID",
    type: "website",
    images: ["/images/pelayanan-zahraffa.jpeg"],
  },
};

export default function RentalMobilGambutPage() {
  const gambutSchema = {
    "@context": "https://schema.org",
    "@type": ["AutoRental", "LocalBusiness"],
    "@id": "https://zahraffamirarental.com/rental-mobil-gambut#business",
    "name": "ZAHRAFFAMIRA Rental Mobil Gambut",
    "alternateName": "Home Zahraffa Rental Mobil Gambut",
    "url": "https://zahraffamirarental.com/rental-mobil-gambut",
    "telephone": "+6285349166234",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Komplek Dinar Mas 2 Blok AB No. 13 D, Kayu Bawang",
      "addressLocality": "Gambut",
      "addressRegion": "Kalimantan Selatan",
      "postalCode": "70652",
      "addressCountry": "ID",
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": -3.401417,
      "longitude": 114.6771028,
    },
    "hasMap": "https://maps.app.goo.gl/yC66naVpd1xchSg1A",
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        "opens": "00:00",
        "closes": "23:59",
      },
    ],
    "areaServed": [
      { "@type": "AdministrativeArea", "name": "Kecamatan Gambut" },
      { "@type": "AdministrativeArea", "name": "Kayu Bawang" },
      { "@type": "AdministrativeArea", "name": "Liang Anggang" },
      { "@type": "AdministrativeArea", "name": "Kota Citra Graha" },
      { "@type": "Place", "name": "Jalan A. Yani KM 12 - 17" },
    ],
  };

  const gambutFaqs = [
    {
      question: "Di mana alamat garasi rental mobil Zahraffamira di Gambut?",
      answer:
        "Garasi fisik kami berada di Komplek Dinar Mas 2 Blok AB No. 13 D, Desa Kayu Bawang, Kec. Gambut, Kab. Banjar, Kalsel 70652. Anda bisa datang langsung untuk survei unit atau meminta armada diantar langsung ke rumah/kantor Anda di area Gambut.",
    },
    {
      question: "Berapa lama estimasi pengantaran mobil ke lokasi saya di Gambut?",
      answer:
        "Karena pangkalan garasi kami berdomisili langsung di Gambut, armada dapat tiba di lokasi Anda dalam waktu 15–30 menit setelah reservasi dan kelengkapan data diverifikasi.",
    },
    {
      question: "Apakah melayani penjemputan dari Gambut ke Bandara Syamsudin Noor?",
      answer:
        "Tentu! Lokasi Gambut sangat dekat dengan akses Bandara Syamsudin Noor (sekitar 15–20 menit). Kami siap melayani shuttle drop-off maupun pick-up 24 jam nonstop.",
    },
    {
      question: "Bisa sewa Hiace Commuter untuk rombongan keluarga di Gambut?",
      answer:
        "Bisa sekali! Kami memiliki armada Hiace Commuter 15 seat dan Hiace Premio VIP yang berdomisili di Gambut, siap untuk acara ziarah, hajatan keluarga, carter wisata, maupun dinas instansi.",
    },
  ];

  return (
    <main className="pt-20 bg-[#FBFAF7] min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(gambutSchema) }}
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
              <li className="text-[#B8892E] font-semibold">Rental Mobil Gambut</li>
            </ol>
          </nav>

          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-7 space-y-5">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-amber-50 border border-amber-200 rounded-full text-xs font-semibold text-[#B8892E] uppercase tracking-wider font-cinzel">
                <MapPin className="w-3.5 h-3.5" />
                Pusat Garasi Utama di Gambut
              </span>

              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#171717] tracking-tight leading-tight">
                Rental Mobil <span className="text-gold-gradient">Gambut</span> & Sewa Hiace 24 Jam
              </h1>

              <p className="text-sm sm:text-base text-[#626262] leading-relaxed">
                Mencari <strong>rental mobil di Gambut</strong> dengan unit terawat dan pengantaran tercepat? <strong>ZAHRAFFAMIRA Rental Mobil</strong> berpangkalan langsung di <strong>Komplek Dinar Mas 2 Gambut</strong>. Kami melayani sewa harian, mingguan, bulanan, lepas kunci, maupun plus driver profesional untuk rute Banjarmasin, Banjarbaru, dan seluruh Kalimantan Selatan.
              </p>

              <div className="flex flex-wrap gap-3 pt-2">
                <a
                  href="https://api.whatsapp.com/send/?phone=6285349166234&text=Halo+ZAHRAFFAMIRA+Rental+Mobil+Saya+di+Gambut+ingin+sewa+mobil&type=phone_number&app_absent=0"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3.5 bg-gold-gradient text-white font-bold text-sm rounded-xl inline-flex items-center gap-2 shadow-md hover:opacity-95 transition-all"
                >
                  <MessageCircle className="w-4 h-4" />
                  Booking Cepat via WhatsApp
                </a>
                <Link
                  href="/armada"
                  className="px-6 py-3.5 bg-white border border-[#E8E4DB] hover:border-[#DFC88F] text-[#171717] font-semibold text-sm rounded-xl inline-flex items-center gap-2 transition-all"
                >
                  Lihat Pilihan Armada
                  <ArrowRight className="w-4 h-4 text-[#B8892E]" />
                </Link>
              </div>

              {/* Trust Badges */}
              <div className="pt-4 grid grid-cols-3 gap-3 border-t border-[#E8E4DB] text-xs text-[#525252]">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-[#B8892E] shrink-0" />
                  <span>Siaga 24 Jam Nonstop</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#B8892E] shrink-0" />
                  <span>Garasi Fisik Resmi</span>
                </div>
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-[#B8892E] shrink-0" />
                  <span>Antar Cepat 15 Menit</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden bg-white border border-[#E8E4DB] shadow-lg">
                <img
                  src="/images/pelayanan-zahraffa.jpeg"
                  alt="Garasi Zahraffamira Rental Mobil Gambut"
                  title="Rental Mobil Gambut Terpercaya"
                  width={600}
                  height={450}
                  className="w-full h-auto object-cover"
                />
                <div className="p-4 bg-white border-t border-[#E8E4DB]">
                  <p className="text-xs font-bold text-[#171717]">
                    📍 Alamat Garasi Fisik:
                  </p>
                  <p className="text-xs text-[#626262] mt-0.5">
                    Komplek Dinar Mas 2 Blok AB No. 13 D, Kayu Bawang, Kec. Gambut, Kab. Banjar, Kalsel 70652
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Keunggulan Garasi di Gambut */}
      <section className="py-14 sm:py-18 bg-white border-b border-[#E8E4DB]">
        <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#171717] tracking-tight">
              Mengapa Memilih Rental Mobil Kami di Gambut?
            </h2>
            <p className="text-sm sm:text-base text-[#626262] mt-2">
              Keunggulan strategis pangkalan fisik kami memberikan keuntungan langsung bagi mobilitas Anda
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-[#FBFAF7] border border-[#E8E4DB] hover:border-[#DFC88F] transition-colors">
              <div className="w-12 h-12 rounded-xl bg-amber-50 border border-amber-200 text-[#B8892E] flex items-center justify-center mb-4">
                <Building2 className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-[#171717] mb-2">Pangkalan Lokal & Transparan</h3>
              <p className="text-xs sm:text-sm text-[#626262] leading-relaxed">
                Garasi fisik jelas di Komplek Dinar Mas 2 Gambut. Anda bebas datang untuk memeriksa kelayakan unit dan transaksi lebih aman tanpa rasa cemas.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#FBFAF7] border border-[#E8E4DB] hover:border-[#DFC88F] transition-colors">
              <div className="w-12 h-12 rounded-xl bg-amber-50 border border-amber-200 text-[#B8892E] flex items-center justify-center mb-4">
                <Compass className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-[#171717] mb-2">Akses Kilat Jalur A. Yani & Bandara</h3>
              <p className="text-xs sm:text-sm text-[#626262] leading-relaxed">
                Posisi Gambut berada di tengah antara Banjarmasin dan Banjarbaru. Sangat cepat mengakses Bandara Syamsudin Noor dan jalan lingkar luar.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#FBFAF7] border border-[#E8E4DB] hover:border-[#DFC88F] transition-colors">
              <div className="w-12 h-12 rounded-xl bg-amber-50 border border-amber-200 text-[#B8892E] flex items-center justify-center mb-4">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-[#171717] mb-2">Spesialis Hiace & Mobil Keluarga</h3>
              <p className="text-xs sm:text-sm text-[#626262] leading-relaxed">
                Sedia Hiace Commuter 15 seat, Hiace Premio VIP, Innova Zenix/Reborn, dan Avanza. Armada selalu bersih, wangi, dan diservis teratur.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Armada Pilihan di Gambut */}
      <section className="py-14 sm:py-18 bg-[#FBFAF7] border-b border-[#E8E4DB]">
        <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
            <div>
              <p className="text-xs sm:text-sm font-semibold text-[#B8892E] uppercase tracking-wider font-cinzel">
                Pilihan Mobil Siap Pakai di Gambut
              </p>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#171717] tracking-tight mt-1">
                Armada Favorit Rental Gambut
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
                    alt={`Sewa ${car.title} Gambut`}
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

      {/* Area Cakupan Gambut */}
      <section className="py-12 bg-white border-b border-[#E8E4DB]">
        <div className="container mx-auto px-4 sm:px-6 max-w-4xl text-center">
          <h3 className="text-lg font-bold text-[#171717] mb-3">
            Area Layanan Antar-Jemput di Gambut & Sekitarnya
          </h3>
          <p className="text-xs sm:text-sm text-[#626262] mb-6">
            Kami siap mengantar unit langsung ke tempat tinggal, kantor, perumahan, atau titik temu Anda:
          </p>
          <div className="flex flex-wrap justify-center gap-2 text-xs">
            {[
              "Komplek Dinar Mas 1 & 2",
              "Desa Kayu Bawang",
              "Jl. A. Yani KM 12 - 17",
              "Kota Citra Graha (KCG)",
              "Liang Anggang",
              "Pasar Gambut",
              "Tambak Sirang",
              "Banyu Hirang",
              "Malintang",
              "Akses Bandara Syamsudin Noor",
            ].map((area, idx) => (
              <span
                key={idx}
                className="px-3 py-1.5 bg-[#FBFAF7] border border-[#E8E4DB] rounded-full text-[#404040] font-medium"
              >
                ✓ {area}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* AEO FAQ Gambut */}
      <FaqSection
        title="FAQ Rental Mobil Gambut"
        subtitle="Pertanyaan penting seputar garasi, durasi sewa, dan pengantaran armada di wilayah Gambut"
        faqs={gambutFaqs}
        id="faq-gambut"
      />
    </main>
  );
}
