import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import cars from "@/data/cars.json";
import {
  MapPin,
  Clock,
  MessageCircle,
  Sparkles,
  ArrowRight,
  HeartHandshake,
  Landmark,
} from "lucide-react";
import { FaqSection } from "@/components/FaqSection";

export const metadata: Metadata = {
  title: "Rental Mobil Martapura & Sewa Hiace Ziarah Sekumpul - ZAHRAFFAMIRA",
  description:
    "Rental mobil Martapura murah & terpercaya. Spesialis sewa Hiace rombongan ziarah Guru Sekumpul, wisata Tahura Sultan Adam, Kiram Park, dan Pasar Intan CBS. Driver ramah dan hafal jalan.",
  keywords: [
    "rental mobil martapura",
    "sewa mobil martapura",
    "sewa hiace ziarah sekumpul",
    "rental hiace martapura",
    "carter mobil martapura",
    "sewa mobil pasar intan martapura",
    "rental innova martapura",
    "sewa mobil ziarah kalsel",
    "rental mobil tahura sultan adam",
  ],
  alternates: {
    canonical: "https://zahraffamirarental.com/rental-mobil-martapura",
  },
  openGraph: {
    title: "Rental Mobil Martapura & Sewa Hiace Ziarah Sekumpul - ZAHRAFFAMIRA",
    description:
      "Sewa mobil dan carter Hiace di Martapura. Cocok untuk ziarah Sekumpul, wisata religi, dan perjalanan dinas di Kabupaten Banjar.",
    url: "https://zahraffamirarental.com/rental-mobil-martapura",
    siteName: "ZAHRAFFAMIRA Rental Mobil",
    locale: "id_ID",
    type: "website",
    images: ["/images/pelayanan-zahraffa.jpeg"],
  },
};

export default function RentalMobilMartapuraPage() {
  const martapuraSchema = {
    "@context": "https://schema.org",
    "@type": ["AutoRental", "LocalBusiness"],
    "@id": "https://zahraffamirarental.com/rental-mobil-martapura#business",
    "name": "ZAHRAFFAMIRA Rental Mobil Martapura",
    "url": "https://zahraffamirarental.com/rental-mobil-martapura",
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
    "areaServed": [
      { "@type": "City", "name": "Martapura" },
      { "@type": "AdministrativeArea", "name": "Sekumpul" },
      { "@type": "AdministrativeArea", "name": "Kabupaten Banjar" },
      { "@type": "Place", "name": "Kubah Guru Sekumpul" },
      { "@type": "Place", "name": "Tahura Sultan Adam" },
      { "@type": "Place", "name": "Kiram Park" },
    ],
  };

  const martapuraFaqs = [
    {
      question: "Apakah Zahraffamira melayani carter Hiace untuk ziarah Guru Sekumpul?",
      answer:
        "Sangat melayani! Kami memiliki armada Toyota Hiace Commuter 15 seat dan Hiace Premio VIP yang sering disewa oleh rombongan peziarah dari berbagai daerah untuk mengunjungi Kubah Guru Sekumpul Martapura, Datu Kalampayan (Astambul), dan Datu Sanggul.",
    },
    {
      question: "Berapa lama waktu tempuh dari Bandara Syamsudin Noor ke Martapura?",
      answer:
        "Jarak Bandara Syamsudin Noor ke Martapura sekitar 15–20 kilometer dengan estimasi waktu tempuh 25–35 menit via Jl. Karang Anyar atau Jl. A. Yani. Driver kami siap menjemput Anda langsung di terminal kedatangan.",
    },
    {
      question: "Apakah bisa sewa mobil untuk wisata ke Tahura Sultan Adam dan Kiram Park?",
      answer:
        "Tentu! Armada kami seperti Innova Reborn Diesel, Innova Zenix, Fortuner, maupun Avanza sangat tangguh dan prima untuk menempuh rute perbukitan di Tahura Sultan Adam Mandiangin, Danau Riam Kanan, dan Kiram Park.",
    },
    {
      question: "Apakah driver rental Zahraffamira menguasai rute dan etika di Sekumpul Martapura?",
      answer:
        "Ya, semua driver kami beretika sopan, santun, tidak merokok saat berkendara, serta sangat hafal titik-titik parkir yang aman di area Sekumpul Martapura, terutama saat jadwal ramai seperti malam Senin atau haul.",
    },
  ];

  return (
    <main className="pt-20 bg-[#FBFAF7] min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(martapuraSchema) }}
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
              <li className="text-[#B8892E] font-semibold">Rental Mobil Martapura</li>
            </ol>
          </nav>

          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-7 space-y-5">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-amber-50 border border-amber-200 rounded-full text-xs font-semibold text-[#B8892E] uppercase tracking-wider font-cinzel">
                <Landmark className="w-3.5 h-3.5" />
                Kota Intan & Wisata Religi
              </span>

              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#171717] tracking-tight leading-tight">
                Rental Mobil <span className="text-gold-gradient">Martapura</span> & Carter Hiace Sekumpul
              </h1>

              <p className="text-sm sm:text-base text-[#626262] leading-relaxed">
                Butuh layanan transportasi terpercaya di <strong>Kota Martapura</strong>? <strong>ZAHRAFFAMIRA Rental Mobil</strong> menyediakan pilihan sewa Avanza, Innova Reborn/Zenix, Fortuner, Alphard, hingga minibus Hiace 15-seater untuk ziarah Guru Sekumpul, belanja permata di Pasar Cahaya Bumi Selamat (CBS), serta wisata alam Tahura Mandiangin dan Kiram Park.
              </p>

              <div className="flex flex-wrap gap-3 pt-2">
                <a
                  href="https://api.whatsapp.com/send/?phone=6285349166234&text=Halo+ZAHRAFFAMIRA+Rental+Mobil+Saya+ingin+sewa+mobil+di+Martapura&type=phone_number&app_absent=0"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3.5 bg-gold-gradient text-white font-bold text-sm rounded-xl inline-flex items-center gap-2 shadow-md hover:opacity-95 transition-all"
                >
                  <MessageCircle className="w-4 h-4" />
                  Pesan via WhatsApp
                </a>
                <Link
                  href="/armada"
                  className="px-6 py-3.5 bg-white border border-[#E8E4DB] hover:border-[#DFC88F] text-[#171717] font-semibold text-sm rounded-xl inline-flex items-center gap-2 transition-all"
                >
                  Pilihan Armada
                  <ArrowRight className="w-4 h-4 text-[#B8892E]" />
                </Link>
              </div>

              {/* Trust Badges */}
              <div className="pt-4 grid grid-cols-3 gap-3 border-t border-[#E8E4DB] text-xs text-[#525252]">
                <div className="flex items-center gap-2">
                  <HeartHandshake className="w-4 h-4 text-[#B8892E] shrink-0" />
                  <span>Driver Ramah & Santun</span>
                </div>
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-[#B8892E] shrink-0" />
                  <span>Unit Bersih & Nyaman</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-[#B8892E] shrink-0" />
                  <span>Layanan Siaga 24 Jam</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden bg-white border border-[#E8E4DB] shadow-lg">
                <img
                  src="/images/lineup-armada-pascasarjana.jpeg"
                  alt="Rental Hiace Martapura Ziarah Sekumpul"
                  title="Sewa Hiace Rombongan Martapura"
                  width={600}
                  height={450}
                  className="w-full h-auto object-cover"
                />
                <div className="p-4 bg-white border-t border-[#E8E4DB]">
                  <p className="text-xs font-bold text-[#171717]">
                    ⭐ Spesialis Carter Rombongan Wisata Religi
                  </p>
                  <p className="text-xs text-[#626262] mt-0.5">
                    Hiace Commuter 15 seat & Hiace Premio VIP siap mengantar peziarah dan keluarga besar ke seluruh destinasi di Martapura.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Destinasi Wisata Favorit di Martapura */}
      <section className="py-14 sm:py-18 bg-white border-b border-[#E8E4DB]">
        <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#171717] tracking-tight">
              Destinasi Populer Bersama Zahraffamira di Martapura
            </h2>
            <p className="text-sm sm:text-base text-[#626262] mt-2">
              Nikmati perjalanan wisata dan ziarah tanpa repot menyetir atau memikirkan rute jalan
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-[#FBFAF7] border border-[#E8E4DB]">
              <div className="w-10 h-10 rounded-xl bg-amber-50 border border-amber-200 text-[#B8892E] flex items-center justify-center mb-4">
                <Landmark className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-[#171717] mb-2">Ziarah Kubah Guru Sekumpul</h3>
              <p className="text-xs sm:text-sm text-[#626262] leading-relaxed">
                Pusat ziarah ulama karismatik KH. Muhammad Zaini Abdul Ghani (Guru Sekumpul). Driver kami siap mendampingi rombongan dengan waktu tunggu fleksibel.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#FBFAF7] border border-[#E8E4DB]">
              <div className="w-10 h-10 rounded-xl bg-amber-50 border border-amber-200 text-[#B8892E] flex items-center justify-center mb-4">
                <Sparkles className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-[#171717] mb-2">Pasar Intan Cahaya Bumi Selamat (CBS)</h3>
              <p className="text-xs sm:text-sm text-[#626262] leading-relaxed">
                Pusat cenderamata batu permata, intan berlian, kerajinan kain sasirangan, dan oleh-oleh khas Kalimantan Selatan di pusat kota Martapura.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#FBFAF7] border border-[#E8E4DB]">
              <div className="w-10 h-10 rounded-xl bg-amber-50 border border-amber-200 text-[#B8892E] flex items-center justify-center mb-4">
                <MapPin className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-[#171717] mb-2">Tahura Sultan Adam & Kiram Park</h3>
              <p className="text-xs sm:text-sm text-[#626262] leading-relaxed">
                Pemandangan perbukitan asri, benteng Belanda, paralayang, dan wisata alam pegunungan sejuk yang cocok untuk refreshing keluarga akhir pekan.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Armada Rekomendasi Martapura */}
      <section className="py-14 sm:py-18 bg-[#FBFAF7] border-b border-[#E8E4DB]">
        <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
            <div>
              <p className="text-xs sm:text-sm font-semibold text-[#B8892E] uppercase tracking-wider font-cinzel">
                Pilihan Unit Rombongan & Keluarga
              </p>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#171717] tracking-tight mt-1">
                Armada Pilihan Rute Martapura
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
            {cars.filter((c) => c.category.includes("Rombongan") || c.id === "innova-reborn" || c.id === "new-avanza").slice(0, 4).map((car) => (
              <div
                key={car.id}
                className="bg-white rounded-2xl border border-[#E8E4DB] overflow-hidden hover:shadow-lg transition-all group flex flex-col"
              >
                <div className="relative aspect-4/3 bg-[#F8F6F1]">
                  <img
                    src={car.img}
                    alt={`Sewa ${car.title} Martapura`}
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

      {/* AEO FAQ Martapura */}
      <FaqSection
        title="FAQ Rental Mobil Martapura"
        subtitle="Pertanyaan penting seputar sewa mobil, carter ziarah Sekumpul, dan wisata di Martapura"
        faqs={martapuraFaqs}
        id="faq-martapura"
      />
    </main>
  );
}
