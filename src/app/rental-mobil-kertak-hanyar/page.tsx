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
  Car,
  Compass,
} from "lucide-react";
import { FaqSection } from "@/components/FaqSection";

export const metadata: Metadata = {
  title: "Rental Mobil Kertak Hanyar Murah & Sewa Mobil 24 Jam - ZAHRAFFAMIRA",
  description:
    "Rental mobil Kertak Hanyar terpercaya dari ZAHRAFFAMIRA. Unit Avanza, Innova Reborn/Zenix, Hiace & Fortuner siap antar cepat ke CitraLand, Manarap, Jl. A. Yani Km 7-11, & Aston Banua. Lepas kunci atau driver 24 jam.",
  keywords: [
    "rental mobil kertak hanyar",
    "sewa mobil kertak hanyar",
    "rental mobil citraland banjarmasin",
    "rental mobil aston banua",
    "rental mobil manarap",
    "sewa avanza kertak hanyar",
    "sewa innova kertak hanyar",
    "sewa hiace kertak hanyar",
    "rental mobil kabupaten banjar",
    "carter mobil kertak hanyar",
  ],
  alternates: {
    canonical: "https://www.zahraffamirarental.com/rental-mobil-kertak-hanyar",
  },
  openGraph: {
    title: "Rental Mobil Kertak Hanyar Murah & Sewa Mobil 24 Jam - ZAHRAFFAMIRA",
    description:
      "Layanan sewa dan rental mobil di Kertak Hanyar, Kabupaten Banjar. Antar unit cepat ke CitraLand, Manarap, & Aston Banua. Avanza, Innova, Hiace, Fortuner 24 Jam.",
    url: "https://www.zahraffamirarental.com/rental-mobil-kertak-hanyar",
    siteName: "ZAHRAFFAMIRA Rental Mobil",
    locale: "id_ID",
    type: "website",
    images: ["/images/pelayanan-zahraffa.jpeg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rental Mobil Kertak Hanyar Murah & Sewa Mobil 24 Jam - ZAHRAFFAMIRA",
    description:
      "Rental mobil di Kertak Hanyar, CitraLand, Manarap, Aston Banua. Armada prima Avanza, Innova, Fortuner, Hiace 24 Jam.",
    images: ["/images/pelayanan-zahraffa.jpeg"],
  },
};

export default function RentalMobilKertakHanyarPage() {
  const kertakHanyarSchema = {
    "@context": "https://schema.org",
    "@type": ["AutoRental", "LocalBusiness"],
    "@id": "https://www.zahraffamirarental.com/rental-mobil-kertak-hanyar#business",
    "name": "ZAHRAFFAMIRA Rental Mobil Kertak Hanyar",
    "alternateName": [
      "Sewa Mobil Kertak Hanyar",
      "Rental Mobil CitraLand Banjarmasin Zahraffamira",
      "Home Zahraffa Rental Mobil Kertak Hanyar",
    ],
    "url": "https://www.zahraffamirarental.com/rental-mobil-kertak-hanyar",
    "telephone": "+6285349166234",
    "priceRange": "$$",
    "currenciesAccepted": "IDR",
    "paymentAccepted": "Cash, Transfer Bank",
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
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        "opens": "00:00",
        "closes": "23:59",
      },
    ],
    "areaServed": [
      { "@type": "AdministrativeArea", "name": "Kecamatan Kertak Hanyar" },
      { "@type": "AdministrativeArea", "name": "Kabupaten Banjar" },
      { "@type": "Place", "name": "CitraLand Banjarmasin" },
      { "@type": "Place", "name": "Perumahan Manarap" },
      { "@type": "Place", "name": "Hotel Aston Banua & Convention Center" },
      { "@type": "Place", "name": "The Grand Banua" },
      { "@type": "Place", "name": "Jalan Ahmad Yani KM 7 - 11" },
      { "@type": "Place", "name": "Pasar Ahad Kertak Hanyar" },
    ],
    "sameAs": [
      "https://www.instagram.com/sewa_haice_commuter_gambut_bjm",
      "https://www.tiktok.com/@sewa_haice_commut",
      "https://www.facebook.com/share/1JpX3qfg3T/",
      "https://maps.app.goo.gl/yC66naVpd1xchSg1A",
    ],
  };

  const kertakHanyarFaqs = [
    {
      question: "Apakah mobil rental bisa diantar langsung ke CitraLand atau perumahan di Kertak Hanyar?",
      answer:
        "Ya, tentu saja! Kami melayani pengantaran unit langsung ke depan rumah Anda di Perumahan CitraLand Banjarmasin, Manarap Baru, Manarap Lama, Komplek Mandar Sari, Kertak Hanyar I & II, maupun perumahan di sepanjang koridor Jl. A. Yani Km 7 hingga Km 11.",
    },
    {
      question: "Berapa lama estimasi pengantaran mobil ke Kertak Hanyar?",
      answer:
        "Karena pool dan garasi utama ZAHRAFFAMIRA berlokasi di Gambut (Jl. A. Yani Km 13), jarak ke Kertak Hanyar (Km 7–11) sangat dekat, hanya sekitar 10–15 menit perjalanan. Unit dapat tiba dengan cepat dan tepat waktu sesuai jadwal yang Anda tentukan.",
    },
    {
      question: "Apakah melayani penjemputan tamu di Hotel Aston Banua & Grand Banua?",
      answer:
        "Sangat sering! Hotel Aston Banua & Convention Center (Grand Banua Km 11.8) adalah salah satu titik antar-jemput utama kami di Kertak Hanyar. Kami melayani sewa mobil eksekutif (Innova Reborn, Innova Zenix, Fortuner, Alphard) maupun Hiace untuk keperluan tamu seminar, pernikahan, dan transit bandara.",
    },
    {
      question: "Bagaimana syarat sewa mobil lepas kunci di Kertak Hanyar?",
      answer:
        "Untuk sewa lepas kunci di Kertak Hanyar, Anda cukup melampirkan foto KTP, SIM A aktif, bukti identitas penunjang (ID Card kerja/kantor atau bukti domisili), serta akun media sosial aktif. Proses verifikasi cepat dan transparan tanpa biaya tersembunyi.",
    },
    {
      question: "Apakah tersedia armada minibus seperti Hiace untuk rombongan di Kertak Hanyar?",
      answer:
        "Tersedia! Kami mengoperasikan Toyota Hiace Commuter 15 kursi dan Hiace Premio VIP ber-AC sejuk dengan driver berpengalaman, sangat cocok untuk rombongan keluarga besar, ziarah, maupun gathering kantor.",
    },
  ];

  return (
    <main className="pt-20 bg-[#FBFAF7] min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(kertakHanyarSchema) }}
      />

      {/* Hero Section */}
      <section className="py-14 sm:py-20 bg-gradient-to-b from-[#F4EFE6] to-[#FBFAF7] border-b border-[#E8E4DB]">
        <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
          {/* Breadcrumb */}
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
              <li>
                <Link href="/#area-layanan" className="hover:text-[#B8892E] transition-colors">
                  Area Layanan
                </Link>
              </li>
              <li>
                <span className="text-[#A3A3A3]">/</span>
              </li>
              <li className="text-[#B8892E] font-semibold">Rental Mobil Kertak Hanyar</li>
            </ol>
          </nav>

          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-7 space-y-5">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-amber-50 border border-amber-200 rounded-full text-xs font-semibold text-[#B8892E] uppercase tracking-wider font-cinzel">
                <MapPin className="w-3.5 h-3.5" />
                Kecamatan Kertak Hanyar, Kabupaten Banjar
              </span>

              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#171717] tracking-tight leading-tight">
                Rental Mobil <span className="text-gold-gradient">Kertak Hanyar</span> & CitraLand 24 Jam
              </h1>

              <p className="text-sm sm:text-base text-[#626262] leading-relaxed">
                Butuh jasa <strong>rental mobil di Kertak Hanyar</strong> dengan unit prima dan respon cepat? <strong>ZAHRAFFAMIRA Rental Mobil</strong> melayani pengantaran armada langsung ke rumah Anda di kawasan <strong>CitraLand Banjarmasin, Manarap, Mandar Sari, koridor Jl. A. Yani Km 7–11</strong>, hingga tamu meeting di <strong>Hotel Aston Banua & Grand Banua</strong>. Tersedia opsi lepas kunci atau dengan supir ramah yang siap melayani 24 jam.
              </p>

              <div className="flex flex-wrap gap-3 pt-2">
                <a
                  href="https://api.whatsapp.com/send/?phone=6285349166234&text=Halo+ZAHRAFFAMIRA+Rental+Mobil+Saya+di+Kertak+Hanyar+ingin+sewa+mobil&type=phone_number&app_absent=0"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3.5 bg-gold-gradient text-white font-bold text-sm rounded-xl inline-flex items-center gap-2 shadow-md hover:opacity-95 transition-all"
                >
                  <MessageCircle className="w-4 h-4" />
                  Pesan Mobil di Kertak Hanyar
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
                  <span>Antar Cepat 10–15 Mnt</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#B8892E] shrink-0" />
                  <span>Lepas Kunci / Driver</span>
                </div>
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-[#B8892E] shrink-0" />
                  <span>Kondisi Mobil Wangi & Bersih</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden bg-white border border-[#E8E4DB] shadow-lg">
                <img
                  src="/images/pelayanan-zahraffa.jpeg"
                  alt="Rental Mobil Kertak Hanyar ZAHRAFFAMIRA"
                  title="Rental Mobil Kertak Hanyar CitraLand Aston Banua"
                  width={600}
                  height={450}
                  className="w-full h-auto object-cover"
                />
                <div className="p-4 bg-white border-t border-[#E8E4DB]">
                  <p className="text-xs font-bold text-[#171717]">
                    📍 Area Coverage Kertak Hanyar:
                  </p>
                  <p className="text-xs text-[#626262] mt-0.5">
                    Jl. A. Yani Km 7–11, Perumahan CitraLand, Manarap, Mandar Sari, Aston Banua Hotel & Grand Banua, Kab. Banjar.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Keunggulan Sewa Mobil di Kertak Hanyar */}
      <section className="py-14 sm:py-18 bg-white border-b border-[#E8E4DB]">
        <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#171717] tracking-tight">
              Kenapa Memilih Rental Mobil Kami di Kertak Hanyar?
            </h2>
            <p className="text-sm sm:text-base text-[#626262] mt-2">
              Kemudahan mobilitas warga perumahan, tamu hotel, dan pelaku usaha di koridor emas Kertak Hanyar
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-[#FBFAF7] border border-[#E8E4DB] hover:border-[#DFC88F] transition-colors">
              <div className="w-12 h-12 rounded-xl bg-amber-50 border border-amber-200 text-[#B8892E] flex items-center justify-center mb-4">
                <Clock className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-[#171717] mb-2">Pool Sangat Dekat (10 Menit)</h3>
              <p className="text-xs sm:text-sm text-[#626262] leading-relaxed">
                Garasi utama kami berada di Gambut (Km 13), tepat bersebelahan dengan Kertak Hanyar (Km 7–11). Pengantaran mobil dilakukan secara ekspres langsung ke alamat Anda.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#FBFAF7] border border-[#E8E4DB] hover:border-[#DFC88F] transition-colors">
              <div className="w-12 h-12 rounded-xl bg-amber-50 border border-amber-200 text-[#B8892E] flex items-center justify-center mb-4">
                <Building2 className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-[#171717] mb-2">Antar Jemput Hotel & Perumahan</h3>
              <p className="text-xs sm:text-sm text-[#626262] leading-relaxed">
                Siap antar ke lobby Aston Banua Hotel, The Grand Banua, cluster CitraLand, perumahan Manarap Baru/Lama, hingga kantor instansi di sepanjang Jl. A. Yani.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#FBFAF7] border border-[#E8E4DB] hover:border-[#DFC88F] transition-colors">
              <div className="w-12 h-12 rounded-xl bg-amber-50 border border-amber-200 text-[#B8892E] flex items-center justify-center mb-4">
                <Car className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-[#171717] mb-2">Pilihan Armada Terbaru & Terawat</h3>
              <p className="text-xs sm:text-sm text-[#626262] leading-relaxed">
                Mulai dari New Avanza untuk keperluan harian, Innova Reborn & Zenix untuk kenyamanan eksekutif, Fortuner gagah, hingga Toyota Hiace 15 kursi untuk rombongan.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Armada Pilihan Kertak Hanyar */}
      <section className="py-14 sm:py-18 bg-[#FBFAF7] border-b border-[#E8E4DB]">
        <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
            <div>
              <p className="text-xs sm:text-sm font-semibold text-[#B8892E] uppercase tracking-wider font-cinzel">
                Pilihan Mobil Siap Jalan di Kertak Hanyar
              </p>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#171717] tracking-tight mt-1">
                Armada Favorit Warga Kertak Hanyar & Tamu Hotel
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
                    alt={`Sewa ${car.title} Kertak Hanyar`}
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
                      href={`https://api.whatsapp.com/send/?phone=6285349166234&text=Halo+ZAHRAFFAMIRA+Rental+Mobil+Saya+di+Kertak+Hanyar+ingin+sewa+${encodeURIComponent(car.title)}&type=phone_number&app_absent=0`}
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

      {/* Titik Antar-Jemput di Kertak Hanyar */}
      <section className="py-12 bg-white border-b border-[#E8E4DB]">
        <div className="container mx-auto px-4 sm:px-6 max-w-4xl text-center">
          <h3 className="text-lg font-bold text-[#171717] mb-3">
            Titik Pengantaran Populer di Kertak Hanyar & Sekitarnya
          </h3>
          <p className="text-xs sm:text-sm text-[#626262] mb-6">
            Unit mobil langsung diantar ke lokasi perumahan, hotel, atau titik temu Anda di wilayah Kertak Hanyar:
          </p>
          <div className="flex flex-wrap justify-center gap-2 text-xs">
            {[
              "Perumahan CitraLand Banjarmasin",
              "Hotel Aston Banua & Convention Center",
              "The Grand Banua Km 11.8",
              "Perumahan Manarap Baru & Lama",
              "Komplek Mandar Sari",
              "Kertak Hanyar I & II",
              "Pasar Ahad Kertak Hanyar (Km 7)",
              "Jl. A. Yani Km 7 s/d Km 11",
              "Komplek Mahligai & Pemurus",
              "Rute Menuju Bandara Syamsudin Noor",
            ].map((spot, idx) => (
              <span
                key={idx}
                className="px-3 py-1.5 bg-[#FBFAF7] border border-[#E8E4DB] rounded-full text-[#404040] font-medium"
              >
                ✓ {spot}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Hub Internal Links */}
      <section className="py-10 bg-[#FBF9F5] border-b border-[#E8E4DB]">
        <div className="container mx-auto px-4 sm:px-6 max-w-5xl">
          <div className="text-center mb-6">
            <h4 className="text-sm font-bold uppercase tracking-wider text-[#B8892E] font-cinzel">
              Jaringan Layanan Terdekat
            </h4>
            <p className="text-xs sm:text-sm text-[#626262] mt-1">
              Selain Kertak Hanyar, kami juga melayani area sekitar dengan tarif bersahabat:
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center text-xs">
            <Link
              href="/rental-mobil-gambut"
              className="p-3 bg-white rounded-xl border border-[#E8E4DB] hover:border-[#DFC88F] text-[#171717] font-semibold hover:text-[#B8892E] transition-all"
            >
              Rental Mobil Gambut (Garasi) &raquo;
            </Link>
            <Link
              href="/rental-mobil-banjarmasin"
              className="p-3 bg-white rounded-xl border border-[#E8E4DB] hover:border-[#DFC88F] text-[#171717] font-semibold hover:text-[#B8892E] transition-all"
            >
              Rental Mobil Banjarmasin &raquo;
            </Link>
            <Link
              href="/sewa-mobil-banjarbaru"
              className="p-3 bg-white rounded-xl border border-[#E8E4DB] hover:border-[#DFC88F] text-[#171717] font-semibold hover:text-[#B8892E] transition-all"
            >
              Rental Mobil Banjarbaru &raquo;
            </Link>
            <Link
              href="/rental-mobil-martapura"
              className="p-3 bg-white rounded-xl border border-[#E8E4DB] hover:border-[#DFC88F] text-[#171717] font-semibold hover:text-[#B8892E] transition-all"
            >
              Rental Mobil Martapura &raquo;
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Kertak Hanyar */}
      <FaqSection
        title="FAQ Rental Mobil Kertak Hanyar"
        subtitle="Pertanyaan penting seputar pengantaran ke CitraLand, Hotel Aston Banua, dan syarat sewa di Kertak Hanyar"
        faqs={kertakHanyarFaqs}
        id="faq-kertak-hanyar"
      />
    </main>
  );
}
