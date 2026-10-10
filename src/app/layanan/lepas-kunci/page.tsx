import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Key, ShieldCheck, CheckCircle2, MessageCircle, ArrowRight, FileText, Briefcase } from "lucide-react";
import { FaqSection } from "@/components/FaqSection";

export const metadata: Metadata = {
  title: "Sewa Mobil Lepas Kunci Banjarmasin, Gambut & Banjarbaru - ZAHRAFFAMIRA",
  description:
    "Layanan sewa & rental mobil lepas kunci (self-drive) di Banjarmasin, Gambut, Banjarbaru. Syarat mudah, proses verifikasi cepat, unit Avanza, Innova, & Fortuner siap jalan.",
  keywords: [
    "sewa mobil lepas kunci banjarmasin",
    "rental mobil banjarmasin lepas kunci",
    "sewa mobil lepas kunci banjarbaru",
    "rental mobil lepas kunci gambut",
    "syarat rental mobil lepas kunci banjarmasin",
    "sewa avanza lepas kunci banjarmasin",
    "sewa innova lepas kunci banjarmasin",
  ],
  alternates: {
    canonical: "https://zahraffamirarental.com/layanan/lepas-kunci",
  },
};

export default function LepasKunciPage() {
  const faqs = [
    {
      question: "Apa saja syarat utama sewa mobil lepas kunci di Zahraffamira?",
      answer:
        "Syarat untuk perorangan: E-KTP asli (Banjarmasin/Kalsel atau penjamin lokal), SIM A yang masih berlaku, dan dokumen pendukung (tiket penerbangan/voucher hotel/KK). Untuk perusahaan: SIUP/NIB, NPWP, fotokopi KTP direksi/PIC, dan PO resmi.",
    },
    {
      question: "Apakah penyewa luar kota bisa sewa mobil lepas kunci?",
      answer:
        "Bisa! Bagi tamu dari luar kota/luar pulau yang datang untuk dinas atau wisata, kami memerlukan bukti tiket pesawat pulang-pergi (PP), bukti reservasi hotel, serta ID Card instansi/kantor tempat Anda bekerja.",
    },
    {
      question: "Bagaimana sistem serah terima dan pengembalian unit lepas kunci?",
      answer:
        "Unit dapat diambil di garasi kami di Gambut atau diantar langsung ke Bandara Syamsudin Noor, hotel, atau alamat yang disepakati. Petugas kami akan melakukan cek fisik kendaraan bersama dan serah terima kunci serta STNK.",
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
              <li className="text-[#B8892E] font-semibold">Sewa Lepas Kunci</li>
            </ol>
          </nav>

          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-7 space-y-5">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-amber-50 border border-amber-200 rounded-full text-xs font-semibold text-[#B8892E] uppercase tracking-wider font-cinzel">
                <Key className="w-3.5 h-3.5" />
                Self-Drive Experience
              </span>

              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#171717] tracking-tight leading-tight">
                Sewa Mobil <span className="text-gold-gradient">Lepas Kunci</span> Banjarmasin & Banjarbaru
              </h1>

              <p className="text-sm sm:text-base text-[#626262] leading-relaxed">
                Nikmati privasi penuh dan kebebasan mengeksplorasi Kalimantan Selatan tanpa supir. <strong>ZAHRAFFAMIRA Rental Mobil</strong> menyediakan armada prima seperti Toyota New Avanza, Grand Avanza, Innova Reborn, dan Innova Zenix dengan proses administrasi mudah dan serah terima cepat.
              </p>

              <div className="flex flex-wrap gap-3 pt-2">
                <a
                  href="https://api.whatsapp.com/send/?phone=6285349166234&text=Halo+ZAHRAFFAMIRA+Rental+Mobil+Saya+ingin+tanya+Sewa+Mobil+Lepas+Kunci&type=phone_number&app_absent=0"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3.5 bg-gold-gradient text-white font-bold text-sm rounded-xl inline-flex items-center gap-2 shadow-md hover:opacity-95 transition-all"
                >
                  <MessageCircle className="w-4 h-4" />
                  Cek Syarat via WhatsApp
                </a>
                <Link
                  href="/armada"
                  className="px-6 py-3.5 bg-white border border-[#E8E4DB] hover:border-[#DFC88F] text-[#171717] font-semibold text-sm rounded-xl inline-flex items-center gap-2 transition-all"
                >
                  Pilihan Mobil Lepas Kunci
                  <ArrowRight className="w-4 h-4 text-[#B8892E]" />
                </Link>
              </div>

              {/* Badges */}
              <div className="pt-4 grid grid-cols-2 sm:grid-cols-3 gap-3 border-t border-[#E8E4DB] text-xs text-[#525252]">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#B8892E] shrink-0" />
                  <span>Verifikasi Data Cepat</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#B8892E] shrink-0" />
                  <span>Kondisi Mesin Terjamin</span>
                </div>
                <div className="flex items-center gap-2">
                  <Key className="w-4 h-4 text-[#B8892E] shrink-0" />
                  <span>Bisa Antar ke Bandara</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden bg-white border border-[#E8E4DB] shadow-lg">
                <img
                  src="/images/avanza-wisata-pulau-mas.jpeg"
                  alt="Sewa Mobil Lepas Kunci Zahraffamira"
                  width={600}
                  height={450}
                  className="w-full h-auto object-cover"
                />
                <div className="p-4 bg-white border-t border-[#E8E4DB]">
                  <p className="text-xs font-bold text-[#171717]">
                    🔑 Kebebasan Penuh Berkendara Mandiri
                  </p>
                  <p className="text-xs text-[#626262] mt-0.5">
                    Unit bersih, wangi, ber-AC dingin, dan ban tebal siap menemani rute Anda di Kalimantan Selatan.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ketentuan Sewa */}
      <section className="py-14 sm:py-18 bg-white border-b border-[#E8E4DB]">
        <div className="container mx-auto px-4 sm:px-6 max-w-5xl">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#171717]">
              Ketentuan & Persyaratan Lepas Kunci
            </h2>
            <p className="text-sm text-[#626262] mt-2">
              Prosedur verifikasi standar demi keamanan bersama bagi penyewa pribadi maupun institusi
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-6 rounded-2xl bg-[#FBFAF7] border border-[#E8E4DB]">
              <div className="w-10 h-10 rounded-xl bg-amber-50 border border-amber-200 text-[#B8892E] flex items-center justify-center mb-4">
                <FileText className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-[#171717] mb-3">Syarat Perorangan / Pribadi</h3>
              <ul className="space-y-2.5 text-xs sm:text-sm text-[#525252]">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#B8892E] shrink-0 mt-0.5" />
                  <span>E-KTP asli (domisili Kalsel atau identitas penjamin)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#B8892E] shrink-0 mt-0.5" />
                  <span>SIM A aktif yang masih berlaku</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#B8892E] shrink-0 mt-0.5" />
                  <span>Bukti tiket pesawat PP & voucher hotel (bagi tamu luar kota)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#B8892E] shrink-0 mt-0.5" />
                  <span>Kartu Keluarga (KK) / Akun media sosial aktif</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#B8892E] shrink-0 mt-0.5" />
                  <span>Menandatangani formulir serah terima kendaraan</span>
                </li>
              </ul>
            </div>

            <div className="p-6 rounded-2xl bg-[#FBFAF7] border border-[#E8E4DB]">
              <div className="w-10 h-10 rounded-xl bg-amber-50 border border-amber-200 text-[#B8892E] flex items-center justify-center mb-4">
                <Briefcase className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-[#171717] mb-3">Syarat Perusahaan / Instansi</h3>
              <ul className="space-y-2.5 text-xs sm:text-sm text-[#525252]">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#B8892E] shrink-0 mt-0.5" />
                  <span>NIB / SIUP & NPWP Perusahaan</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#B8892E] shrink-0 mt-0.5" />
                  <span>Surat Keterangan Domisili Usaha</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#B8892E] shrink-0 mt-0.5" />
                  <span>Purchase Order (PO) atau Surat Perintah Kerja (SPK)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#B8892E] shrink-0 mt-0.5" />
                  <span>KTP penanggung jawab / pemakai unit</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#B8892E] shrink-0 mt-0.5" />
                  <span>Tersedia opsi invoice bulanan & kontrak kerja sama</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FaqSection
        title="FAQ Sewa Lepas Kunci"
        subtitle="Pertanyaan penting seputar proses administrasi, deposit, dan syarat sewa mobil tanpa supir"
        faqs={faqs}
      />
    </main>
  );
}
