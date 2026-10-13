import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import cars from "@/data/cars.json";
import {
  Clock,
  ShieldCheck,
  CheckCircle2,
  MessageCircle,
  ArrowRight,
  Plane,
  Building2,
} from "lucide-react";
import { FaqSection } from "@/components/FaqSection";

export const metadata: Metadata = {
  title: "Rental & Sewa Mobil Banjarbaru ✅ Bandara Syamsudin Noor 24 Jam",
  description:
    "Rental mobil Banjarbaru murah terpercaya dari ZAHRAFFAMIRA. Dekat Bandara Syamsudin Noor, Landasan Ulin, & Pemprov Kalsel. Unit Avanza, Innova, Hiace, Fortuner, Alphard siap 24 jam.",
  keywords: [
    "rental mobil banjarbaru",
    "sewa mobil banjarbaru",
    "rental mobil bandara syamsudin noor",
    "sewa mobil landasan ulin",
    "rental mobil banjarbaru lepas kunci",
    "sewa innova banjarbaru",
    "rental hiace banjarbaru",
    "sewa avanza banjarbaru",
    "carter mobil banjarbaru",
    "antar jemput bandara banjarbaru",
  ],
  alternates: {
    canonical: "https://www.zahraffamirarental.com/sewa-mobil-banjarbaru",
  },
  openGraph: {
    title: "Rental & Sewa Mobil Banjarbaru ✅ Bandara Syamsudin Noor 24 Jam",
    description:
      "Layanan rental mobil di Banjarbaru dan sekitar Bandara Internasional Syamsudin Noor. Siap antar lepas kunci & dengan driver.",
    url: "https://www.zahraffamirarental.com/sewa-mobil-banjarbaru",
    siteName: "ZAHRAFFAMIRA Rental Mobil",
    locale: "id_ID",
    type: "website",
    images: ["/images/pelayanan-zahraffa.jpeg"],
  },
};

export default function SewaMobilBanjarbaruPage() {
  const banjarbaruSchema = {
    "@context": "https://schema.org",
    "@type": ["AutoRental", "LocalBusiness"],
    "@id": "https://www.zahraffamirarental.com/sewa-mobil-banjarbaru#business",
    "name": "ZAHRAFFAMIRA Rental Mobil Banjarbaru",
    "url": "https://www.zahraffamirarental.com/sewa-mobil-banjarbaru",
    "telephone": "+6285349166234",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Komplek Dinar Mas 2 Blok AB No. 13 D, Kayu Bawang, Gambut",
      "addressLocality": "Banjarbaru",
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
      { "@type": "City", "name": "Banjarbaru" },
      { "@type": "Place", "name": "Bandara Internasional Syamsudin Noor (BDJ)" },
      { "@type": "AdministrativeArea", "name": "Landasan Ulin" },
      { "@type": "AdministrativeArea", "name": "Banjarbaru Utara" },
      { "@type": "AdministrativeArea", "name": "Banjarbaru Selatan" },
      { "@type": "AdministrativeArea", "name": "Cempaka" },
      { "@type": "AdministrativeArea", "name": "Perkantoran Pemprov Kalsel" },
    ],
  };

  const banjarbaruFaqs = [
    {
      question: "Apakah bisa langsung serah terima mobil di Bandara Syamsudin Noor?",
      answer:
        "Bisa sekali! Kami melayani serah terima armada langsung di area penjemputan Bandara Internasional Syamsudin Noor (BDJ) Banjarbaru. Tim kami akan menunggu kedatangan penerbangan Anda sehingga tidak perlu menunggu lama.",
    },
    {
      question: "Berapa harga sewa mobil harian di Banjarbaru?",
      answer:
        "Tarif sewa mobil kami di Banjarbaru sangat terjangkau: New Avanza mulai Rp 350.000/hari, Innova Reborn Diesel Rp 500.000 – Rp 650.000/hari, Innova Zenix Rp 700.000 – Rp 900.000/hari, dan Toyota Hiace Commuter 15 seat mulai Rp 1.000.000/hari include supir.",
    },
    {
      question: "Apakah melayani perjalanan dinas ke Perkantoran Pemprov Kalsel di Banjarbaru?",
      answer:
        "Ya, kami sering melayani kunjungan kerja instansi, kementerian, dan BUMN ke Komplek Perkantoran Sekretariat Daerah Pemprov Kalsel di Cempaka / Banjarbaru dengan armada representatif seperti Innova Zenix, Fortuner, dan Alphard didampingi supir profesional.",
    },
    {
      question: "Apakah bisa sewa mobil lepas kunci untuk area Banjarbaru & Landasan Ulin?",
      answer:
        "Tentu! Kami melayani sewa lepas kunci untuk domisili Banjarbaru maupun tamu yang sedang menginap di hotel sekitar Bandara / Landasan Ulin dengan syarat E-KTP, SIM A, dan dokumen identitas pendukung yang sah.",
    },
  ];

  return (
    <main className="pt-20 bg-[#FBFAF7] min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(banjarbaruSchema) }}
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
              <li className="text-[#B8892E] font-semibold">Sewa Mobil Banjarbaru</li>
            </ol>
          </nav>

          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-7 space-y-5">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-amber-50 border border-amber-200 rounded-full text-xs font-semibold text-[#B8892E] uppercase tracking-wider font-cinzel">
                <Plane className="w-3.5 h-3.5" />
                Ibukota Provinsi Kalsel & Akses Bandara
              </span>

              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#171717] tracking-tight leading-tight">
                Rental & Sewa Mobil <span className="text-gold-gradient">Banjarbaru</span>
              </h1>

              <p className="text-sm sm:text-base text-[#626262] leading-relaxed">
                Mencari <strong>rental mobil di Kota Banjarbaru</strong> yang dekat dengan <strong>Bandara Internasional Syamsudin Noor</strong>? <strong>ZAHRAFFAMIRA Rental Mobil</strong> menyediakan unit Avanza, Innova Reborn/Zenix, Fortuner, Alphard, hingga Hiace 15-seater. Sangat ideal untuk kebutuhan dinas perkantoran Pemprov Kalsel, bisnis, maupun penjemputan tamu VIP di bandara.
              </p>

              <div className="flex flex-wrap gap-3 pt-2">
                <a
                  href="https://api.whatsapp.com/send/?phone=6285349166234&text=Halo+ZAHRAFFAMIRA+Rental+Mobil+Saya+di+Banjarbaru+ingin+sewa+mobil&type=phone_number&app_absent=0"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3.5 bg-gold-gradient text-white font-bold text-sm rounded-xl inline-flex items-center gap-2 shadow-md hover:opacity-95 transition-all"
                >
                  <MessageCircle className="w-4 h-4" />
                  Pesan via WhatsApp 24 Jam
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
                  <Plane className="w-4 h-4 text-[#B8892E] shrink-0" />
                  <span>Antar Jemput Bandara BDJ</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-[#B8892E] shrink-0" />
                  <span>Siaga 24 Jam Nonstop</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#B8892E] shrink-0" />
                  <span>Unit Resmi Berasuransi</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden bg-white border border-[#E8E4DB] shadow-lg">
                <img
                  src="/images/hiace-ready.jpeg"
                  alt="Rental Mobil Banjarbaru Bandara Syamsudin Noor"
                  title="Sewa Mobil Banjarbaru Terpercaya"
                  width={600}
                  height={450}
                  className="w-full h-auto object-cover"
                />
                <div className="p-4 bg-white border-t border-[#E8E4DB]">
                  <p className="text-xs font-bold text-[#171717]">
                    🛫 Layanan Cepat Bandara Syamsudin Noor
                  </p>
                  <p className="text-xs text-[#626262] mt-0.5">
                    Hanya 15-20 menit dari pangkalan kami ke terminal kedatangan bandara. Bebas antre, langsung jalan.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Keunggulan Banjarbaru */}
      <section className="py-14 sm:py-18 bg-white border-b border-[#E8E4DB]">
        <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#171717] tracking-tight">
              Mengapa Memilih Zahraffamira di Banjarbaru?
            </h2>
            <p className="text-sm sm:text-base text-[#626262] mt-2">
              Kemudahan layanan sewa mobil di pusat pemerintahan dan bandara Kalimantan Selatan
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-[#FBFAF7] border border-[#E8E4DB]">
              <div className="w-10 h-10 rounded-xl bg-amber-50 border border-amber-200 text-[#B8892E] flex items-center justify-center mb-4">
                <Plane className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-[#171717] mb-2">Penjemputan Flight Tepat Waktu</h3>
              <p className="text-xs sm:text-sm text-[#626262] leading-relaxed">
                Kami memantau jadwal kedatangan penerbangan Anda di Bandara Syamsudin Noor untuk memastikan armada dan driver sudah standby saat mendarat.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#FBFAF7] border border-[#E8E4DB]">
              <div className="w-10 h-10 rounded-xl bg-amber-50 border border-amber-200 text-[#B8892E] flex items-center justify-center mb-4">
                <Building2 className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-[#171717] mb-2">Dukungan Kunjungan Dinas Pemprov</h3>
              <p className="text-xs sm:text-sm text-[#626262] leading-relaxed">
                Fasilitas kendaraan kelas atas seperti Innova Zenix dan Alphard dengan invoice resmi serta kelengkapan administrasi perusahaan yang tertib.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#FBFAF7] border border-[#E8E4DB]">
              <div className="w-10 h-10 rounded-xl bg-amber-50 border border-amber-200 text-[#B8892E] flex items-center justify-center mb-4">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-[#171717] mb-2">Harga Transparan Tanpa Tipu-tipu</h3>
              <p className="text-xs sm:text-sm text-[#626262] leading-relaxed">
                Tarif jelas di depan tanpa biaya tambahan tersembunyi. Tersedia paket sewa mobil lepas kunci maupun all-in driver + BBM.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Armada Banjarbaru */}
      <section className="py-14 sm:py-18 bg-[#FBFAF7] border-b border-[#E8E4DB]">
        <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
            <div>
              <p className="text-xs sm:text-sm font-semibold text-[#B8892E] uppercase tracking-wider font-cinzel">
                Armada Pilihan di Banjarbaru
              </p>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#171717] tracking-tight mt-1">
                Pilihan Mobil Favorit Pelanggan Banjarbaru
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
            {cars.slice(2, 6).map((car) => (
              <div
                key={car.id}
                className="bg-white rounded-2xl border border-[#E8E4DB] overflow-hidden hover:shadow-lg transition-all group flex flex-col"
              >
                <div className="relative aspect-4/3 bg-[#F8F6F1]">
                  <img
                    src={car.img}
                    alt={`Sewa ${car.title} Banjarbaru`}
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

      {/* AEO FAQ Banjarbaru */}
      <FaqSection
        title="FAQ Rental Mobil Banjarbaru"
        subtitle="Pertanyaan penting seputar antar-jemput bandara, sewa mobil dinas, dan lepas kunci di Banjarbaru"
        faqs={banjarbaruFaqs}
        id="faq-banjarbaru"
      />
    </main>
  );
}
