import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Plane, Clock, ShieldCheck, Smile, MessageCircle, ArrowRight, CheckCircle2 } from "lucide-react";
import { FaqSection } from "@/components/FaqSection";

export const metadata: Metadata = {
  title: "Antar Jemput Bandara Syamsudin Noor (BDJ) 24 Jam - ZAHRAFFAMIRA",
  description:
    "Layanan antar jemput (airport shuttle transfer) Bandara Internasional Syamsudin Noor ke Banjarmasin, Gambut, Banjarbaru, & Martapura. Tepat waktu, bebas antre, standby 24 jam.",
  keywords: [
    "antar jemput bandara syamsudin noor",
    "shuttle bandara banjarmasin",
    "rental mobil bandara syamsudin noor",
    "sewa mobil jemput bandara banjarbaru",
    "airport transfer banjarmasin",
    "carter mobil bandara banjarmasin",
  ],
  alternates: {
    canonical: "https://zahraffamirarental.com/layanan/antar-jemput-bandara",
  },
};

export default function AntarJemputBandaraPage() {
  const faqs = [
    {
      question: "Bagaimana cara memesan antar-jemput di Bandara Syamsudin Noor?",
      answer:
        "Cukup hubungi WhatsApp kami di 0853-4916-6234 sebelum keberangkatan, kirimkan detail nomor penerbangan dan jam estimasi kedatangan (ETA). Driver kami akan menunggu di area pintu keluar kedatangan membawa papan nama penjemputan.",
    },
    {
      question: "Apakah tetap dijemput jika pesawat mengalami delay (keterlambatan)?",
      answer:
        "Ya, tentu! Tim kami secara proaktif memantau status nomor penerbangan Anda. Meskipun penerbangan delay, supir kami tetap akan standby menunggu Anda tiba tanpa biaya penalti.",
    },
    {
      question: "Rute mana saja yang dilayani dari Bandara?",
      answer:
        "Kami melayani pengantaran ke seluruh hotel dan perumahan di Banjarmasin, Gambut, Banjarbaru, Martapura, Pelaihari, hingga ke kota-kota hulu sungai (Rantau, Kandangan, Barabai, Tanjung, Batulicin).",
    },
  ];

  return (
    <main className="pt-20 bg-[#FBFAF7] min-h-screen">
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
              <li>
                <span className="text-[#737373]">Layanan</span>
              </li>
              <li>
                <span className="text-[#A3A3A3]">/</span>
              </li>
              <li className="text-[#B8892E] font-semibold">Antar Jemput Bandara</li>
            </ol>
          </nav>

          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-7 space-y-5">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-amber-50 border border-amber-200 rounded-full text-xs font-semibold text-[#B8892E] uppercase tracking-wider font-cinzel">
                <Plane className="w-3.5 h-3.5" />
                Airport Shuttle Transfer 24 Jam
              </span>

              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#171717] tracking-tight leading-tight">
                Antar Jemput <span className="text-gold-gradient">Bandara Syamsudin Noor</span> (BDJ)
              </h1>

              <p className="text-sm sm:text-base text-[#626262] leading-relaxed">
                Hindari kebingungan mencari taksi dan antrean panjang saat mendarat. <strong>ZAHRAFFAMIRA Rental Mobil</strong> menyediakan layanan antar-jemput bandara tepat waktu, aman, dan nyaman ke Banjarmasin, Gambut, Banjarbaru, Martapura, hingga lintas kota Kalsel.
              </p>

              <div className="flex flex-wrap gap-3 pt-2">
                <a
                  href="https://api.whatsapp.com/send/?phone=6285349166234&text=Halo+ZAHRAFFAMIRA+Rental+Mobil+Saya+ingin+pesan+Antar+Jemput+Bandara&type=phone_number&app_absent=0"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3.5 bg-gold-gradient text-white font-bold text-sm rounded-xl inline-flex items-center gap-2 shadow-md hover:opacity-95 transition-all"
                >
                  <MessageCircle className="w-4 h-4" />
                  Pesan Jemputan Bandara
                </a>
                <Link
                  href="/armada"
                  className="px-6 py-3.5 bg-white border border-[#E8E4DB] hover:border-[#DFC88F] text-[#171717] font-semibold text-sm rounded-xl inline-flex items-center gap-2 transition-all"
                >
                  Lihat Pilihan Mobil
                  <ArrowRight className="w-4 h-4 text-[#B8892E]" />
                </Link>
              </div>

              {/* Badges */}
              <div className="pt-4 grid grid-cols-2 sm:grid-cols-3 gap-3 border-t border-[#E8E4DB] text-xs text-[#525252]">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-[#B8892E] shrink-0" />
                  <span>Pantau Flight Real-Time</span>
                </div>
                <div className="flex items-center gap-2">
                  <Smile className="w-4 h-4 text-[#B8892E] shrink-0" />
                  <span>Driver Ramah & Sopan</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#B8892E] shrink-0" />
                  <span>Pasti Standby di Pintu Tiba</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden bg-white border border-[#E8E4DB] shadow-lg">
                <img
                  src="/images/hiace-ready.jpeg"
                  alt="Antar Jemput Bandara Syamsudin Noor Zahraffamira"
                  width={600}
                  height={450}
                  className="w-full h-auto object-cover"
                />
                <div className="p-4 bg-white border-t border-[#E8E4DB]">
                  <p className="text-xs font-bold text-[#171717]">
                    🛫 Layanan 24 Jam Nonstop
                  </p>
                  <p className="text-xs text-[#626262] mt-0.5">
                    Tersedia mobil keluarga (Avanza, Innova) hingga rombongan (Hiace Commuter 15 seat).
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Keunggulan */}
      <section className="py-14 sm:py-18 bg-white border-b border-[#E8E4DB]">
        <div className="container mx-auto px-4 sm:px-6 max-w-5xl">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#171717]">
              Kenapa Memilih Airport Transfer Kami?
            </h2>
            <p className="text-sm text-[#626262] mt-2">
              Kenyamanan perjalanan Anda adalah prioritas utama sejak pertama kali menginjakkan kaki di Kalsel
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-[#FBFAF7] border border-[#E8E4DB] text-center">
              <div className="w-12 h-12 rounded-xl bg-amber-50 border border-amber-200 text-[#B8892E] flex items-center justify-center mx-auto mb-4">
                <Clock className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-[#171717] mb-2">Selalu Tepat Waktu</h3>
              <p className="text-xs sm:text-sm text-[#626262]">
                Driver standby minimal 30 menit sebelum jadwal pendaratan pesawat Anda di Syamsudin Noor.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#FBFAF7] border border-[#E8E4DB] text-center">
              <div className="w-12 h-12 rounded-xl bg-amber-50 border border-amber-200 text-[#B8892E] flex items-center justify-center mx-auto mb-4">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-[#171717] mb-2">Aman & Terpercaya</h3>
              <p className="text-xs sm:text-sm text-[#626262]">
                Armada selalu bersih ber-AC dingin, bagasi koper aman, serta driver berpenampilan rapi.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#FBFAF7] border border-[#E8E4DB] text-center">
              <div className="w-12 h-12 rounded-xl bg-amber-50 border border-amber-200 text-[#B8892E] flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-[#171717] mb-2">Tarif All-In Transparan</h3>
              <p className="text-xs sm:text-sm text-[#626262]">
                Harga sudah mencakup supir, BBM, serta parkir bandara tanpa biaya siluman.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FaqSection
        title="FAQ Antar Jemput Bandara"
        subtitle="Pertanyaan umum seputar layanan shuttle dan penjemputan Bandara Syamsudin Noor"
        faqs={faqs}
      />
    </main>
  );
}
