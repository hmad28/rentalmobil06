import React from "react";
import Link from "next/link";
import { MapPin, ArrowRight } from "lucide-react";

export const ServiceAreaSection = () => {
  const serviceHubs = [
    {
      title: "Rental Mobil Kertak Hanyar",
      subtitle: "Kec. Kertak Hanyar, Kab. Banjar",
      desc: "Layanan pengantaran mobil ke Jl. A. Yani Km 7–11, CitraLand Banjarmasin, kawasan perumahan Manarap, Mandar Sari, Pasar Ahad, hingga Hotel Aston Banua & Grand Banua.",
      href: "/rental-mobil-kertak-hanyar",
      badge: "Antar Jemput Cepat",
      highlights: ["CitraLand & Manarap", "Jl. A. Yani Km 7–11", "Hotel Aston Banua"],
    },
    {
      title: "Rental Mobil Gambut (Garasi Utama)",
      subtitle: "Komplek Dinar Mas 2, Gambut",
      desc: "Pusat pool dan garasi fisik ZAHRAFFAMIRA (Km 12–17). Bebas biaya antar-jemput garasi, armada selalu ready stock, dan respon darurat 24 jam nonstop.",
      href: "/rental-mobil-gambut",
      badge: "Basecamp / Pool",
      highlights: ["Komplek Dinar Mas 2", "Jl. A. Yani Km 12–17", "Ready Unit 24 Jam"],
    },
    {
      title: "Rental Mobil Banjarmasin",
      subtitle: "Kota Banjarmasin & Sekitarnya",
      desc: "Menjangkau seluruh wilayah Banjarmasin (Tengah, Selatan, Timur, Barat, Utara). Antar unit ke hotel bintang, pusat bisnis Lambung Mangkurat, dan wisata Siring / Pasar Terapung.",
      href: "/rental-mobil-banjarmasin",
      badge: "Layanan Populer",
      highlights: ["Hotel & Penginapan", "Pusat Bisnis & Kantor", "Wisata Pasar Terapung"],
    },
    {
      title: "Rental Mobil Banjarbaru & Bandara",
      subtitle: "Kota Banjarbaru & Bandara BDJ",
      desc: "Antar-jemput Bandara Internasional Syamsudin Noor (BDJ), Komplek Perkantoran Pemprov Kalsel, Loktabat, dan Guntung Payung tanpa repot antre.",
      href: "/sewa-mobil-banjarbaru",
      badge: "Transit Bandara",
      highlights: ["Bandara Syamsudin Noor", "Perkantoran Pemprov", "Loktabat & Simpang 4"],
    },
    {
      title: "Rental Mobil Martapura & Kab. Banjar",
      subtitle: "Kota Martapura & Kab. Banjar",
      desc: "Armada nyaman untuk agenda ziarah kubah Sekumpul Martapura, sentra permata Cahaya Bumi Selamat (CBS), dinas Pemkab Banjar, dan rute Hulu Sungai.",
      href: "/rental-mobil-martapura",
      badge: "Ziarah & Wisata",
      highlights: ["Kubah Sekumpul", "Pertokoan CBS Intan", "Kabupaten Banjar"],
    },
  ];

  const serviceCategories = [
    { label: "Sewa Mobil Lepas Kunci", href: "/layanan/lepas-kunci" },
    { label: "Sewa Mobil Plus Supir", href: "/layanan/dengan-supir" },
    { label: "Sewa Hiace Commuter & Premio", href: "/layanan/sewa-hiace" },
    { label: "Antar Jemput Bandara BDJ", href: "/layanan/antar-jemput-bandara" },
    { label: "Carter Mobil Luar Kota Kalsel", href: "/kontak" },
  ];

  return (
    <section className="py-16 sm:py-20 bg-[#FBF9F5] border-b border-[#E8E4DB]" id="area-layanan">
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase font-cinzel bg-amber-50 text-[#B8892E] border border-amber-200 mb-3">
            <MapPin className="w-3.5 h-3.5" />
            Jangkauan Layanan Lokal Terlengkap
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#171717] tracking-tight">
            Area Layanan Rental Mobil di Kalimantan Selatan
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#626262] leading-relaxed">
            ZAHRAFFAMIRA berdomisili di Gambut dan siap mengantarkan unit tepat waktu ke seluruh kawasan{" "}
            <strong>Kertak Hanyar, Gambut, Banjarmasin, Banjarbaru, dan Kabupaten Banjar</strong>. Dapatkan kemudahan
            sewa harian, mingguan, maupun bulanan dengan pilihan lepas kunci atau supir ramah berpengalaman.
          </p>
        </div>

        {/* Grid cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12">
          {serviceHubs.map((hub, idx) => (
            <article
              key={idx}
              className="bg-white rounded-2xl border border-[#E8E4DB] p-6 flex flex-col justify-between hover:shadow-lg hover:border-[#DFC88F] transition-all group"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded bg-[#F8F6F1] text-[#9C721D] border border-[#DFC88F]/60">
                    {hub.badge}
                  </span>
                  <MapPin className="w-4 h-4 text-[#B8892E]" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-[#171717] group-hover:text-[#B8892E] transition-colors mb-1">
                  {hub.title}
                </h3>
                <p className="text-xs font-medium text-[#8C8270] mb-3">
                  {hub.subtitle}
                </p>
                <p className="text-xs sm:text-sm text-[#626262] leading-relaxed mb-4">
                  {hub.desc}
                </p>
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {hub.highlights.map((item, hIdx) => (
                    <span
                      key={hIdx}
                      className="text-[11px] text-[#555] bg-[#F7F5EE] px-2 py-0.5 rounded border border-[#E5E0D3]"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
              <Link
                href={hub.href}
                className="inline-flex items-center justify-between w-full pt-3 border-t border-[#F0ECE1] text-xs sm:text-sm font-semibold text-[#B8892E] group-hover:text-[#9E7424] transition-colors"
              >
                <span>Lihat Layanan {hub.title.replace("Rental Mobil ", "")}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </article>
          ))}
        </div>

        {/* Quick Category Links */}
        <div className="bg-white rounded-2xl border border-[#E8E4DB] p-6 sm:p-8">
          <div className="text-center sm:text-left sm:flex sm:items-center sm:justify-between gap-4 mb-4">
            <div>
              <h4 className="text-base font-bold text-[#171717]">
                Pilihan Jenis Layanan & Carter
              </h4>
              <p className="text-xs sm:text-sm text-[#626262]">
                Tersedia untuk semua rute di Kertak Hanyar, Gambut, Banjarmasin, Banjarbaru, dan sekitarnya:
              </p>
            </div>
            <a
              href="https://api.whatsapp.com/send/?phone=6285349166234&text=Halo+ZAHRAFFAMIRA+Rental+Mobil+Saya+ingin+tanya+layanan+rental+mobil&type=phone_number&app_absent=0"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 sm:mt-0 inline-flex items-center justify-center px-4 py-2 text-xs font-semibold text-white bg-gold-gradient rounded-md shadow-xs hover:opacity-95 transition-opacity shrink-0"
            >
              Konsultasi Rute via WhatsApp
            </a>
          </div>
          <div className="flex flex-wrap gap-2.5 pt-2">
            {serviceCategories.map((cat, cIdx) => (
              <Link
                key={cIdx}
                href={cat.href}
                className="px-4 py-2 bg-[#F8F6F1] border border-[#E8E4DB] rounded-full text-xs sm:text-sm font-medium text-[#171717] hover:bg-gold-gradient hover:text-white hover:border-transparent transition-all shadow-2xs"
              >
                {cat.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
