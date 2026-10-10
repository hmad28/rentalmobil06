import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Star, MessageCircle, Quote, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Testimoni Pelanggan - ZAHRAFFAMIRA Rental Mobil Banjarmasin",
  description:
    "Ulasan dan pengalaman nyata pelanggan yang menyewa mobil di ZAHRAFFAMIRA Rental Mobil Banjarmasin, Gambut, Banjarbaru, & Martapura. Pelayanan memuaskan dan armada prima.",
  alternates: {
    canonical: "https://zahraffamirarental.com/testimoni",
  },
};

const reviews = [
  {
    name: "Rudi Hartono",
    city: "Banjarmasin",
    role: "Perjalanan Dinas BUMN",
    rating: 5,
    comment:
      "Pelayanan sangat memuaskan, unit Innova Zenix sangat bersih dan wangi. Driver juga ramah dan sangat menguasai jalan di Banjarmasin. Pasti akan sewa di Zahraffamira lagi untuk agenda kantor berikutnya.",
  },
  {
    name: "Anita Wijaya",
    city: "Banjarbaru",
    role: "Wisata Keluarga",
    rating: 5,
    comment:
      "Harga sangat terjangkau dengan kualitas unit mobil yang super terawat. Proses serah terima lepas kunci New Avanza sangat cepat dan tidak berbelit-belit. Sangat direkomendasikan!",
  },
  {
    name: "H. Faisal Rahman",
    city: "Martapura",
    role: "Carter Rombongan Ziarah",
    rating: 5,
    comment:
      "Sewa Hiace Commuter 15 seat untuk rombongan keluarga ziarah ke Sekumpul dan Datu Kalampayan. AC dingin merata sampai baris belakang, driver sabar dan santun. Sangat berkah.",
  },
  {
    name: "Dr. Hendra Gunawan",
    city: "Jakarta (Tamu Kedinasan)",
    role: "Airport Shuttle & Kunjungan Proyek",
    rating: 5,
    comment:
      "Layanan antar-jemput Bandara Syamsudin Noor sangat tepat waktu. Driver sudah standby memegang papan nama saat pesawat kami mendarat. Sangat profesional!",
  },
  {
    name: "Siti Rahmah",
    city: "Gambut",
    role: "Acara Pernikahan (Wedding Car)",
    rating: 5,
    comment:
      "Garasi Zahraffamira di Komplek Dinar Mas Gambut sangat dekat dari rumah. Mobil Fortuner yang kami sewa untuk pengantin kondisinya mengkilap dan mewah. Terima kasih banyak!",
  },
  {
    name: "Bambang Sudarsono",
    city: "Surabaya",
    role: "Kunjungan Bisnis Tambang",
    rating: 5,
    comment:
      "Sudah langganan berkali-kali setiap ke Kalsel. Kondisi Innova Reborn Diesel selalu tangguh saat menempuh perjalanan luar kota ke Rantau dan Tanjung. Adminnya fast response 24 jam.",
  },
];

export default function TestimoniPage() {
  return (
    <main className="pt-20 bg-[#FBFAF7] min-h-screen">
      {/* Header */}
      <section className="py-14 sm:py-18 bg-gradient-to-b from-[#F4EFE6] to-[#FBFAF7] border-b border-[#E8E4DB]">
        <div className="container mx-auto px-4 sm:px-6 max-w-4xl text-center">
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
              <li className="text-[#B8892E] font-semibold">Testimoni Pelanggan</li>
            </ol>
          </nav>

          <div className="flex items-center justify-center gap-1 text-amber-500 mb-3">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
            ))}
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#171717] tracking-tight mb-4">
            Testimoni <span className="text-gold-gradient">Pelanggan</span>
          </h1>
          <p className="text-sm sm:text-base text-[#626262] max-w-2xl mx-auto leading-relaxed">
            Pengalaman nyata dari pelanggan perorangan, keluarga, dan perusahaan yang telah mempercayakan perjalanan mereka kepada ZAHRAFFAMIRA Rental Mobil.
          </p>
        </div>
      </section>

      {/* Reviews Grid */}
      <section className="py-12 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.map((rev, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-[#E8E4DB] p-6 shadow-xs hover:shadow-md hover:border-[#DFC88F] transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex text-amber-400">
                      {[...Array(rev.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                    <Quote className="w-5 h-5 text-amber-200" />
                  </div>
                  <p className="text-xs sm:text-sm text-[#525252] leading-relaxed italic mb-6">
                    &ldquo;{rev.comment}&rdquo;
                  </p>
                </div>

                <div className="pt-4 border-t border-[#F0ECE1] flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-amber-100 text-[#9C721D] font-bold flex items-center justify-center text-sm shrink-0">
                    {rev.name.charAt(0)}
                  </div>
                  <div>
                    <strong className="text-sm text-[#171717] block leading-snug">
                      {rev.name}
                    </strong>
                    <span className="text-[11px] text-[#737373] block">
                      {rev.role} • {rev.city}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Box */}
          <div className="mt-14 bg-gradient-to-r from-[#171717] to-[#2B2B2B] rounded-2xl p-8 sm:p-10 text-white text-center shadow-lg max-w-3xl mx-auto">
            <ShieldCheck className="w-10 h-10 text-[#DFC88F] mx-auto mb-3" />
            <h3 className="text-2xl font-bold mb-2">Siap Merasakan Layanan Terbaik Kami?</h3>
            <p className="text-xs sm:text-sm text-gray-300 max-w-xl mx-auto mb-6 leading-relaxed">
              Bergabunglah dengan ribuan pelanggan puas kami di Banjarmasin, Gambut, Banjarbaru, dan Martapura. Pesan sekarang untuk mendapatkan unit favorit Anda!
            </p>
            <a
              href="https://api.whatsapp.com/send/?phone=6285349166234&text=Halo+ZAHRAFFAMIRA+saya+ingin+booking+mobil&type=phone_number&app_absent=0"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3.5 bg-gold-gradient text-white font-bold text-sm rounded-xl inline-flex items-center gap-2 shadow-md hover:opacity-95 transition-all"
            >
              <MessageCircle className="w-4 h-4" />
              Booking via WhatsApp Sekarang
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
