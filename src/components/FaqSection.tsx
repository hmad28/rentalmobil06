"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

export const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "Bagaimana cara booking mobil?",
      a: "Pilih armada yang Anda butuhkan di website ini, kemudian klik tombol 'Pesan' atau hubungi WhatsApp kami dengan menginformasikan jadwal dan tujuan perjalanan.",
    },
    {
      q: "Bagaimana cara cek ketersediaan unit?",
      a: "Anda dapat langsung menanyakan ketersediaan jadwal unit secara cepat dan praktis melalui kontak WhatsApp kami.",
    },
    {
      q: "Apa saja armada yang tersedia?",
      a: "Armada yang tersedia meliputi New Avanza, Grand New Avanza, Innova Reborn, Innova Zenix, Toyota Fortuner, Toyota Alphard, Hiace Commuter, dan Hiace Premio.",
    },
    {
      q: "Apakah tersedia layanan dengan driver?",
      a: "Silakan konsultasikan kebutuhan perjalanan Anda dengan tim admin kami via WhatsApp untuk mendapatkan opsi yang paling sesuai.",
    },
    {
      q: "Apakah bisa digunakan untuk perjalanan luar kota?",
      a: "Untuk kebutuhan perjalanan ke luar kota, silakan diskusikan rencana rute dan durasi perjalanan Anda langsung dengan admin kami.",
    },
    {
      q: "Bagaimana metode pembayarannya?",
      a: "Detail mekanisme pembayaran dan konfirmasi reservasi akan diinformasikan secara jelas saat Anda melakukan konsultasi via WhatsApp.",
    },
  ];

  return (
    <section id="faq" className="py-16 sm:py-24 bg-[#F8F6F1] border-b border-[#E8E4DB]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#E8E4DB] mb-3">
            <span className="font-cinzel text-xs font-semibold tracking-wider text-[#B8892E] uppercase">
              PERTANYAAN UMUM
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#171717] tracking-tight mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-base text-[#626262]">
            Informasi seputar cara pemesanan dan layanan rental mobil ZAHRAFFAMIRA.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-white rounded-xl border border-[#E8E4DB] overflow-hidden transition-colors"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 font-bold text-[#171717] hover:text-[#B8892E] transition-colors cursor-pointer"
                >
                  <span className="text-base sm:text-lg">{faq.q}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-[#B8892E] shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-6 pb-5 pt-1 text-sm sm:text-base text-[#626262] leading-relaxed border-t border-[#E8E4DB]/60">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
