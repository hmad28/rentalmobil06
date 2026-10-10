import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Handshake, Car, Building2, UserCheck, MessageCircle, CheckCircle2, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Kerjasama Kemitraan - ZAHRAFFAMIRA Rental Mobil",
  description:
    "Peluang kerjasama dan kemitraan sewa mobil untuk perusahaan, instansi BUMN, agen wisata, dan pemilik armada di Banjarmasin, Gambut, & Banjarbaru.",
  alternates: {
    canonical: "https://zahraffamirarental.com/kerjasama-kemitraan",
  },
};

export default function KerjasamaPage() {
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
              <li className="text-[#B8892E] font-semibold">Kerjasama Kemitraan</li>
            </ol>
          </nav>

          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-amber-50 border border-amber-200 rounded-full text-xs font-semibold text-[#B8892E] uppercase tracking-wider font-cinzel mb-3">
            <Handshake className="w-3.5 h-3.5" />
            Partnership & Corporate Solution
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#171717] tracking-tight mb-4">
            Bermitra dengan <span className="text-gold-gradient">ZAHRAFFAMIRA</span>
          </h1>
          <p className="text-sm sm:text-base text-[#626262] max-w-2xl mx-auto leading-relaxed">
            Solusi transportasi terintegrasi untuk kebutuhan korporasi, kontrak sewa bulanan instansi pemerintah, travel pariwisata, hingga titip kelola unit kendaraan di Kalimantan Selatan.
          </p>
        </div>
      </section>

      {/* Program Kemitraan */}
      <section className="py-12 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl border border-[#E8E4DB] p-6 shadow-xs hover:border-[#DFC88F] transition-all flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-amber-50 border border-amber-200 text-[#B8892E] flex items-center justify-center mb-4">
                  <Building2 className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-[#171717] mb-2">Sewa Korporat & Instansi</h3>
                <p className="text-xs sm:text-sm text-[#626262] leading-relaxed mb-4">
                  Penyediaan kendaraan operasional bulanan/tahunan untuk perusahaan BUMN, perbankan, instansi dinas, kontraktor tambang, dan perkebunan dengan invoice resmi & unit backup.
                </p>
              </div>
              <ul className="space-y-2 text-xs text-[#525252] pt-4 border-t border-[#F0ECE1]">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#B8892E]" />
                  <span>Kontrak fleksibel bulanan / tahunan</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#B8892E]" />
                  <span>Faktur pajak & invoice resmi</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl border border-[#E8E4DB] p-6 shadow-xs hover:border-[#DFC88F] transition-all flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-amber-50 border border-amber-200 text-[#B8892E] flex items-center justify-center mb-4">
                  <Car className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-[#171717] mb-2">Mitra Pemilik Armada (Titip Unit)</h3>
                <p className="text-xs sm:text-sm text-[#626262] leading-relaxed mb-4">
                  Optimalkan kendaraan Anda yang jarang terpakai (Avanza, Innova, Hiace, Fortuner) dengan sistem bagi hasil transparan, manajemen perawatan, dan sistem proteksi keamanan.
                </p>
              </div>
              <ul className="space-y-2 text-xs text-[#525252] pt-4 border-t border-[#F0ECE1]">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#B8892E]" />
                  <span>Bagi hasil menguntungkan & tepat waktu</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#B8892E]" />
                  <span>Unit dipantau GPS & dirawat berkala</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl border border-[#E8E4DB] p-6 shadow-xs hover:border-[#DFC88F] transition-all flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-amber-50 border border-amber-200 text-[#B8892E] flex items-center justify-center mb-4">
                  <UserCheck className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-[#171717] mb-2">Mitra Agen Wisata & Travel</h3>
                <p className="text-xs sm:text-sm text-[#626262] leading-relaxed mb-4">
                  Kerja sama penyediaan armada pariwisata (Hiace Commuter 15 seat, Hiace Premio VIP) untuk tour operator luar kota yang membawa rombongan ke Kalimantan Selatan.
                </p>
              </div>
              <ul className="space-y-2 text-xs text-[#525252] pt-4 border-t border-[#F0ECE1]">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#B8892E]" />
                  <span>Komisi agen & rate B2B spesial</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#B8892E]" />
                  <span>Driver ramah standar tour guide</span>
                </li>
              </ul>
            </div>
          </div>

          {/* CTA Box */}
          <div className="mt-14 bg-gradient-to-r from-[#171717] to-[#2B2B2B] rounded-2xl p-8 sm:p-10 text-white text-center shadow-lg max-w-3xl mx-auto">
            <ShieldCheck className="w-10 h-10 text-[#DFC88F] mx-auto mb-3" />
            <h3 className="text-2xl font-bold mb-2">Diskusikan Kemitraan Bersama Kami</h3>
            <p className="text-xs sm:text-sm text-gray-300 max-w-xl mx-auto mb-6 leading-relaxed">
              Tim manajemen Zahraffamira siap menyusun proposal penawaran khusus sesuai spesifikasi armada dan kebutuhan anggaran instansi Anda.
            </p>
            <a
              href="https://api.whatsapp.com/send/?phone=6285349166234&text=Halo+ZAHRAFFAMIRA+saya+tertarik+kerjasama+kemitraan&type=phone_number&app_absent=0"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3.5 bg-gold-gradient text-white font-bold text-sm rounded-xl inline-flex items-center gap-2 shadow-md hover:opacity-95 transition-all"
            >
              <MessageCircle className="w-4 h-4" />
              Konsultasi Kemitraan via WhatsApp
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
