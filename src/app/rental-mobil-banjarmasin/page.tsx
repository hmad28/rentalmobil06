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
  Briefcase,
  Compass,
} from "lucide-react";
import { FaqSection } from "@/components/FaqSection";

export const metadata: Metadata = {
  title: "Rental Mobil Banjarmasin Murah & Terpercaya - ZAHRAFFAMIRA",
  description:
    "Jasa rental mobil Banjarmasin resmi dari ZAHRAFFAMIRA. Unit New Avanza, Innova Reborn/Zenix, Fortuner, Alphard & Hiace. Siap antar ke hotel, kantor BUMN, & mall 24 jam nonstop.",
  keywords: [
    "rental mobil banjarmasin",
    "rental mobil banjarmasin murah",
    "rental mobil banjarmasin lepas kunci",
    "rental innova banjarmasin",
    "rental avanza banjarmasin",
    "rental alphard banjarmasin",
    "rental fortuner banjarmasin",
    "rental hiace banjarmasin",
    "rental mobil hotel banjarmasin",
    "carter mobil banjarmasin",
  ],
  alternates: {
    canonical: "https://www.zahraffamirarental.com/rental-mobil-banjarmasin",
  },
  openGraph: {
    title: "Rental Mobil Banjarmasin Murah & Terpercaya - ZAHRAFFAMIRA",
    description:
      "Layanan rental mobil terlengkap di Kota Banjarmasin. Unit prima Avanza, Innova, Hiace, Fortuner, Alphard siap lepas kunci atau driver 24 jam.",
    url: "https://www.zahraffamirarental.com/rental-mobil-banjarmasin",
    siteName: "ZAHRAFFAMIRA Rental Mobil",
    locale: "id_ID",
    type: "website",
    images: ["/images/pelayanan-zahraffa.jpeg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rental Mobil Banjarmasin Murah & Terpercaya - ZAHRAFFAMIRA",
    description:
      "Rental mobil di Kota Banjarmasin. Antar unit ke hotel bintang, pusat kantor, & bandara. Unit bersih & wangi 24 jam.",
    images: ["/images/pelayanan-zahraffa.jpeg"],
  },
};

export default function RentalMobilBanjarmasinPage() {
  const banjarmasinSchema = {
    "@context": "https://schema.org",
    "@type": ["AutoRental", "LocalBusiness"],
    "@id": "https://www.zahraffamirarental.com/rental-mobil-banjarmasin#business",
    "name": "ZAHRAFFAMIRA Rental Mobil Banjarmasin",
    "alternateName": [
      "Rental Mobil Banjarmasin Terpercaya",
      "Home Zahraffa Rental Mobil Banjarmasin",
      "Zahraffamira Sewa Mobil Banjarmasin",
    ],
    "url": "https://www.zahraffamirarental.com/rental-mobil-banjarmasin",
    "telephone": "+6285349166234",
    "priceRange": "$$",
    "currenciesAccepted": "IDR",
    "paymentAccepted": "Cash, Transfer Bank",
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
      { "@type": "City", "name": "Banjarmasin" },
      { "@type": "AdministrativeArea", "name": "Banjarmasin Tengah" },
      { "@type": "AdministrativeArea", "name": "Banjarmasin Selatan" },
      { "@type": "AdministrativeArea", "name": "Banjarmasin Timur" },
      { "@type": "AdministrativeArea", "name": "Banjarmasin Barat" },
      { "@type": "AdministrativeArea", "name": "Banjarmasin Utara" },
      { "@type": "Place", "name": "Duta Mall Banjarmasin" },
      { "@type": "Place", "name": "Kawasan Bisnis Lambung Mangkurat" },
      { "@type": "Place", "name": "Siring Menara Pandang" },
      { "@type": "Place", "name": "Masjid Raya Sabilal Muhtadin" },
    ],
    "sameAs": [
      "https://www.instagram.com/sewa_haice_commuter_gambut_bjm",
      "https://www.tiktok.com/@sewa_haice_commut",
      "https://www.facebook.com/share/1JpX3qfg3T/",
      "https://maps.app.goo.gl/yC66naVpd1xchSg1A",
    ],
  };

  const banjarmasinFaqs = [
    {
      question: "Apakah unit mobil bisa diantar langsung ke hotel tempat saya menginap di Banjarmasin?",
      answer:
        "Bisa sekali! Kami melayani pengantaran armada ke seluruh hotel berbintang di Kota Banjarmasin seperti Mercure Banjarmasin, Golden Tulip Galaxy, Swiss-Belhotel Borneo, Rattan Inn, Favehotel A. Yani, TreePark, dan hotel lainnya tanpa ribet.",
    },
    {
      question: "Apakah tersedia paket rental mobil bulanan untuk kantor / BUMN di Banjarmasin?",
      answer:
        "Ya, kami menyediakan kontrak sewa mobil jangka pendek maupun jangka panjang (mingguan hingga bulanan) untuk instansi pemerintah, BUMN, perbankan, dan swasta di Kota Banjarmasin dengan fasilitas perawatan unit rutin dan pergantian mobil pengganti bila servis berkala.",
    },
    {
      question: "Berapa lama waktu yang dibutuhkan untuk pengantaran unit ke pusat Kota Banjarmasin?",
      answer:
        "Pengantaran mobil ke wilayah Banjarmasin Tengah, Selatan, dan Timur membutuhkan waktu sekitar 20–35 menit tergantung kondisi lalu lintas Jl. A. Yani. Anda juga dapat memesan lebih awal untuk memastikan mobil sudah standby sebelum Anda tiba.",
    },
    {
      question: "Apakah ada mobil mewah seperti Fortuner atau Alphard untuk penjemputan tamu VIP di Banjarmasin?",
      answer:
        "Kami memiliki unit Toyota Fortuner VRZ/GR Sport dan Toyota Alphard Transformer berpenampilan elegan, ber-AC dingin, wangi, serta dikemudikan oleh supir berpakaian rapi dan profesional untuk protokoler VIP.",
    },
    {
      question: "Bagaimana cara booking rental mobil di Banjarmasin?",
      answer:
        "Cukup hubungi customer service kami melalui WhatsApp di 0853-4916-6234, infokan tipe mobil yang diinginkan, tanggal sewa, serta lokasi penyerahan unit di Banjarmasin. Data akan langsung diproses dengan cepat.",
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
              <li className="text-[#B8892E] font-semibold">Rental Mobil Banjarmasin</li>
            </ol>
          </nav>

          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-7 space-y-5">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-amber-50 border border-amber-200 rounded-full text-xs font-semibold text-[#B8892E] uppercase tracking-wider font-cinzel">
                <MapPin className="w-3.5 h-3.5" />
                Pusat Kota Banjarmasin & Sekitarnya
              </span>

              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#171717] tracking-tight leading-tight">
                Rental Mobil <span className="text-gold-gradient">Banjarmasin</span> Terpercaya & Cepat
              </h1>

              <p className="text-sm sm:text-base text-[#626262] leading-relaxed">
                Mencari <strong>rental mobil di Banjarmasin</strong> dengan unit terawat, wangi, dan pelayanan tepat waktu? <strong>ZAHRAFFAMIRA Rental Mobil</strong> menyediakan armada terlengkap untuk perjalanan dinas kantor, operasional bisnis di koridor Lambung Mangkurat, wisata kuliner & budaya Kota Seribu Sungai, hingga antar-jemput hotel berbintang dan Bandara Syamsudin Noor.
              </p>

              <div className="flex flex-wrap gap-3 pt-2">
                <a
                  href="https://api.whatsapp.com/send/?phone=6285349166234&text=Halo+ZAHRAFFAMIRA+Rental+Mobil+Saya+di+Banjarmasin+ingin+sewa+mobil&type=phone_number&app_absent=0"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3.5 bg-gold-gradient text-white font-bold text-sm rounded-xl inline-flex items-center gap-2 shadow-md hover:opacity-95 transition-all"
                >
                  <MessageCircle className="w-4 h-4" />
                  Pesan Mobil di Banjarmasin
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
                  <span>Layanan 24 Jam Nonstop</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#B8892E] shrink-0" />
                  <span>Lepas Kunci & Plus Driver</span>
                </div>
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-[#B8892E] shrink-0" />
                  <span>Antar Langsung ke Hotel</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden bg-white border border-[#E8E4DB] shadow-lg">
                <img
                  src="/images/pelayanan-zahraffa.jpeg"
                  alt="Rental Mobil Banjarmasin ZAHRAFFAMIRA"
                  title="Rental Mobil Kota Banjarmasin Kalimantan Selatan"
                  width={600}
                  height={450}
                  className="w-full h-auto object-cover"
                />
                <div className="p-4 bg-white border-t border-[#E8E4DB]">
                  <p className="text-xs font-bold text-[#171717]">
                    📍 Jangkauan Kota Banjarmasin:
                  </p>
                  <p className="text-xs text-[#626262] mt-0.5">
                    Banjarmasin Tengah, Selatan, Timur, Barat, Utara, Duta Mall, & seluruh hotel berbintang.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Keunggulan Rental Mobil di Banjarmasin */}
      <section className="py-14 sm:py-18 bg-white border-b border-[#E8E4DB]">
        <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#171717] tracking-tight">
              Kenapa Memilih Rental Mobil Kami di Kota Banjarmasin?
            </h2>
            <p className="text-sm sm:text-base text-[#626262] mt-2">
              Solusi mobilitas praktis, fleksibel, dan terpercaya untuk agenda bisnis maupun liburan keluarga Anda
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-[#FBFAF7] border border-[#E8E4DB] hover:border-[#DFC88F] transition-colors">
              <div className="w-12 h-12 rounded-xl bg-amber-50 border border-amber-200 text-[#B8892E] flex items-center justify-center mb-4">
                <Building2 className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-[#171717] mb-2">Siap Antar ke Seluruh Hotel & Mall</h3>
              <p className="text-xs sm:text-sm text-[#626262] leading-relaxed">
                Unit mobil diantar tepat di lobi hotel tempat Anda menginap atau kawasan Duta Mall Banjarmasin, sehingga Anda tidak perlu repot mencari transportasi tambahan.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#FBFAF7] border border-[#E8E4DB] hover:border-[#DFC88F] transition-colors">
              <div className="w-12 h-12 rounded-xl bg-amber-50 border border-amber-200 text-[#B8892E] flex items-center justify-center mb-4">
                <Briefcase className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-[#171717] mb-2">Driver Paham Rute & Berpengalaman</h3>
              <p className="text-xs sm:text-sm text-[#626262] leading-relaxed">
                Pengemudi kami ramah, berbusana rapi, menguasai jalan tembus anti-macet Banjarmasin, dan terbiasa melayani tamu dinas kementerian, BUMN, maupun rombongan VIP.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#FBFAF7] border border-[#E8E4DB] hover:border-[#DFC88F] transition-colors">
              <div className="w-12 h-12 rounded-xl bg-amber-50 border border-amber-200 text-[#B8892E] flex items-center justify-center mb-4">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-[#171717] mb-2">Tarif Transparan Tanpa Biaya Siluman</h3>
              <p className="text-xs sm:text-sm text-[#626262] leading-relaxed">
                Biaya rental jelas sejak awal, tanpa pungutan tersembunyi. Tersedia paket harian, mingguan, bulanan, all-in supir + BBM sesuai kebutuhan Anda.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Armada Pilihan Banjarmasin */}
      <section className="py-14 sm:py-18 bg-[#FBFAF7] border-b border-[#E8E4DB]">
        <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
            <div>
              <p className="text-xs sm:text-sm font-semibold text-[#B8892E] uppercase tracking-wider font-cinzel">
                Pilihan Mobil Siap Jalan di Banjarmasin
              </p>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#171717] tracking-tight mt-1">
                Armada Rental Mobil Terpopuler di Banjarmasin
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
                    alt={`Rental ${car.title} Banjarmasin`}
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
                      href={`https://api.whatsapp.com/send/?phone=6285349166234&text=Halo+ZAHRAFFAMIRA+Rental+Mobil+Saya+di+Banjarmasin+ingin+sewa+${encodeURIComponent(car.title)}&type=phone_number&app_absent=0`}
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

      {/* Titik Antar-Jemput di Kota Banjarmasin */}
      <section className="py-12 bg-white border-b border-[#E8E4DB]">
        <div className="container mx-auto px-4 sm:px-6 max-w-4xl text-center">
          <h3 className="text-lg font-bold text-[#171717] mb-3">
            Destinasi & Titik Antar Populer di Kota Banjarmasin
          </h3>
          <p className="text-xs sm:text-sm text-[#626262] mb-6">
            Layanan penjemputan dan pengantaran mobil tepat waktu di lokasi penting Kota Banjarmasin:
          </p>
          <div className="flex flex-wrap justify-center gap-2 text-xs">
            {[
              "Hotel Mercure & Golden Tulip Galaxy",
              "Swiss-Belhotel & Rattan Inn Banjarmasin",
              "Duta Mall & Sentra Kuliner Kuripan",
              "Kawasan Bisnis Jl. Lambung Mangkurat",
              "Siring Menara Pandang & Patung Bekantan",
              "Pasar Terapung Siring & Lok Baintan",
              "Pelabuhan Trisakti Banjarmasin",
              "Masjid Raya Sabilal Muhtadin",
              "Kawasan Pemukiman Kayu Tangi & Sultan Adam",
              "Antar Jemput Bandara Syamsudin Noor (BDJ)",
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
              Area Layanan Kami Lainnya
            </h4>
            <p className="text-xs sm:text-sm text-[#626262] mt-1">
              Kami juga melayani seluruh wilayah penyangga Kota Banjarmasin:
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center text-xs">
            <Link
              href="/rental-mobil-kertak-hanyar"
              className="p-3 bg-white rounded-xl border border-[#E8E4DB] hover:border-[#DFC88F] text-[#171717] font-semibold hover:text-[#B8892E] transition-all"
            >
              Rental Mobil Kertak Hanyar &raquo;
            </Link>
            <Link
              href="/rental-mobil-gambut"
              className="p-3 bg-white rounded-xl border border-[#E8E4DB] hover:border-[#DFC88F] text-[#171717] font-semibold hover:text-[#B8892E] transition-all"
            >
              Rental Mobil Gambut (Garasi) &raquo;
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

      {/* FAQ Banjarmasin */}
      <FaqSection
        title="FAQ Rental Mobil Banjarmasin"
        subtitle="Pertanyaan umum seputar layanan antar-jemput, tarif sewa harian, dan pemesanan di Kota Banjarmasin"
        faqs={banjarmasinFaqs}
        id="faq-banjarmasin"
      />
    </main>
  );
}
