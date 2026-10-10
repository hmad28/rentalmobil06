import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { CreditCard, CheckCircle2, MessageCircle, HelpCircle, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Metode Pembayaran Resmi - ZAHRAFFAMIRA Rental Mobil",
  description:
    "Informasi rekening bank resmi dan tata cara pembayaran sewa rental mobil di ZAHRAFFAMIRA Rental Mobil Banjarmasin, Gambut, & Banjarbaru. Pembayaran aman dan transparan.",
  alternates: {
    canonical: "https://zahraffamirarental.com/pembayaran",
  },
};

const bankAccounts = [
  {
    bank: "BCA",
    number: "0512274992",
    holder: "a.n AZMIANOOR",
    logo: "/images/bca_Z2ngJh5.webp",
  },
  {
    bank: "BRI",
    number: "000301001020564",
    holder: "a.n AZMIANOOR, SH",
    logo: "/images/bri_LeIhN.webp",
  },
  {
    bank: "Mandiri",
    number: "0310015777181",
    holder: "a.n AZMIANOOR",
    logo: "/images/mandiri_1u4SzS.webp",
  },
  {
    bank: "BNI",
    number: "1185485247",
    holder: "a.n AZMIANOOR",
    logo: "/images/bni_qViOE.webp",
  },
];

export default function PembayaranPage() {
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
              <li className="text-[#B8892E] font-semibold">Metode Pembayaran</li>
            </ol>
          </nav>

          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-amber-50 border border-amber-200 rounded-full text-xs font-semibold text-[#B8892E] uppercase tracking-wider font-cinzel mb-3">
            <ShieldCheck className="w-3.5 h-3.5" />
            Transaksi Resmi & Terverifikasi
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#171717] tracking-tight mb-4">
            Metode <span className="text-gold-gradient">Pembayaran</span>
          </h1>
          <p className="text-sm sm:text-base text-[#626262] max-w-2xl mx-auto leading-relaxed">
            Pilihan transaksi pembayaran yang mudah, transparan, dan aman untuk kenyamanan sewa kendaraan Anda bersama ZAHRAFFAMIRA Rental Mobil.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left: Rekening & Langkah */}
            <div className="lg:col-span-7 space-y-8">
              <div className="bg-white rounded-2xl border border-[#E8E4DB] p-6 shadow-xs">
                <h2 className="text-lg font-bold text-[#171717] flex items-center gap-2 pb-4 border-b border-[#F0ECE1]">
                  <CreditCard className="w-5 h-5 text-[#B8892E]" />
                  Rekening Bank Resmi
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
                  {bankAccounts.map((account, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded-xl border border-[#E8E4DB] bg-[#FBFAF7] hover:border-[#DFC88F] transition-all flex items-center gap-4"
                    >
                      <div className="w-16 h-10 bg-white rounded-lg p-1.5 border border-[#E8E4DB] flex items-center justify-center shrink-0">
                        <img
                          src={account.logo}
                          alt={account.bank}
                          width={60}
                          height={24}
                          className="max-h-6 w-auto object-contain"
                        />
                      </div>
                      <div>
                        <strong className="text-sm text-[#171717] block font-mono tracking-wide">
                          {account.number}
                        </strong>
                        <span className="text-xs text-[#737373]">{account.holder}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Langkah Pembayaran */}
              <div className="bg-white rounded-2xl border border-[#E8E4DB] p-6 shadow-xs">
                <h2 className="text-lg font-bold text-[#171717] pb-4 border-b border-[#F0ECE1]">
                  Tata Cara Pembayaran
                </h2>
                <ol className="space-y-4 mt-6 text-xs sm:text-sm text-[#525252]">
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-amber-100 text-[#9C721D] font-bold flex items-center justify-center shrink-0 text-xs">
                      1
                    </span>
                    <span>Pilih tipe armada dan jadwal pemakaian, lalu konfirmasi dengan admin via WhatsApp.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-amber-100 text-[#9C721D] font-bold flex items-center justify-center shrink-0 text-xs">
                      2
                    </span>
                    <span>Lakukan transfer uang muka (DP) atau pelunasan ke salah satu rekening bank resmi di atas.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-amber-100 text-[#9C721D] font-bold flex items-center justify-center shrink-0 text-xs">
                      3
                    </span>
                    <span>Kirim bukti transfer/resi ke nomor WhatsApp resmi kami (+62 853-4916-6234).</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-amber-100 text-[#9C721D] font-bold flex items-center justify-center shrink-0 text-xs">
                      4
                    </span>
                    <span>Admin akan memverifikasi dan mengirimkan surat konfirmasi reservasi unit mobil Anda.</span>
                  </li>
                </ol>
              </div>
            </div>

            {/* Right: Kebijakan & Bantuan */}
            <div className="lg:col-span-5 space-y-6">
              <div className="bg-white rounded-2xl border border-[#E8E4DB] p-6 shadow-xs">
                <h3 className="text-base font-bold text-[#171717] pb-3 border-b border-[#F0ECE1]">
                  Kebijakan Pembayaran
                </h3>
                <ul className="space-y-3 mt-4 text-xs sm:text-sm text-[#525252]">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#B8892E] shrink-0 mt-0.5" />
                    <span>Pembayaran tunai dapat dilakukan saat serah terima unit di tempat.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#B8892E] shrink-0 mt-0.5" />
                    <span>Tersedia invoice resmi perusahaan dan kwitansi bermaterai (bila diperlukan).</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#B8892E] shrink-0 mt-0.5" />
                    <span>Pembatalan jadwal harap diinformasikan minimal 24 jam sebelum jadwal sewa.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#B8892E] shrink-0 mt-0.5" />
                    <span>Tidak ada biaya tersembunyi yang ditambahkan di luar kesepakatan awal.</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-[#171717] to-[#2B2B2B] text-white rounded-2xl p-6 shadow-md text-center">
                <HelpCircle className="w-8 h-8 text-[#DFC88F] mx-auto mb-3" />
                <h4 className="text-base font-bold mb-1">Butuh Bantuan Transaksi?</h4>
                <p className="text-xs text-gray-300 mb-5 leading-relaxed">
                  Hubungi admin kami 24 jam bila ada kendala transfer atau membutuhkan rekening alternatif.
                </p>
                <a
                  href="https://api.whatsapp.com/send/?phone=6285349166234&text=Halo+ZAHRAFFAMIRA+saya+ingin+konfirmasi+pembayaran&type=phone_number&app_absent=0"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 bg-gold-gradient text-white font-bold text-xs rounded-xl inline-flex items-center justify-center gap-2 shadow-xs"
                >
                  <MessageCircle className="w-4 h-4" />
                  Konfirmasi via WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
