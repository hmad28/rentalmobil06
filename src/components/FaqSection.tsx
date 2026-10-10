"use client";

import React, { useState } from "react";
import { ChevronDown, MessageCircle, HelpCircle } from "lucide-react";

export interface FaqItem {
  question: string;
  answer: string;
}

export const defaultFaqs: FaqItem[] = [
  {
    question: "Berapa harga sewa mobil di Zahraffamira Rental Mobil Banjarmasin?",
    answer:
      "Tarif sewa mobil di Zahraffamira sangat terjangkau dan transparan: mulai dari Rp 350.000/hari untuk city car & LMPV (New Avanza, Grand Avanza). Kelas MPV premium seperti Innova Reborn dan Innova Zenix berkisar Rp 500.000 – Rp 800.000/hari. Untuk mobil rombongan wisata (Hiace Commuter 15 seat & Hiace Premio VIP) serta armada luxury Toyota Fortuner & Alphard, hubungi WhatsApp kami di 0853-4916-6234 untuk penawaran harga terbaik sesuai rute dan durasi.",
  },
  {
    question: "Apakah tersedia sewa mobil lepas kunci dan dengan supir (driver)?",
    answer:
      "Ya, kami menyediakan kedua opsi layanan. Untuk lepas kunci, persyaratannya mudah dan cepat: E-KTP asli, SIM A aktif, bukti identitas pendukung/tiket perjalanan, dan verifikasi singkat. Bagi Anda yang ingin perjalanan lebih santai atau belum menguasai jalan di Kalsel, kami menyediakan driver berpengalaman, ramah, sopan, dan hafal jalan pintas di Banjarmasin, Banjarbaru, Martapura, hingga luar kota.",
  },
  {
    question: "Berapa kapasitas penumpang Toyota Hiace Commuter dan Hiace Premio?",
    answer:
      "Toyota Hiace Commuter berkapasitas hingga 14–15 tempat duduk penumpang, sangat cocok untuk rombongan keluarga, ziarah Sekumpul, carter dinas, atau wisata Kalsel. Sedangkan Toyota Hiace Premio berkapasitas 10–12 tempat duduk dengan interior lebih lega, suspensi lebih empuk, dan legroom luas bernuansa VIP eksekutif.",
  },
  {
    question: "Apakah melayani antar-jemput Bandara Internasional Syamsudin Noor (BDJ)?",
    answer:
      "Ya, kami melayani antar-jemput (shuttle / airport drop-off & pick-up) Bandara Internasional Syamsudin Noor (BDJ) selama 24 jam nonstop. Driver kami akan standby tepat waktu sebelum pesawat Anda mendarat untuk mengantar ke hotel atau tujuan di Banjarmasin, Gambut, Banjarbaru, Martapura, hingga pelosok Kalimantan Selatan.",
  },
  {
    question: "Di mana alamat lokasi garasi fisik Zahraffamira Rental Mobil?",
    answer:
      "Garasi utama kami berlokasi di Komplek Dinar Mas 2 Blok AB No. 13 D, Kayu Bawang, Kec. Gambut, Kab. Banjar, Kalimantan Selatan 70652 (koordinat GPS: -3.401417, 114.6771028). Lokasi Gambut sangat strategis, berada tepat di jalur penghubung antara Kota Banjarmasin dan Kota Banjarbaru.",
  },
  {
    question: "Bagaimana cara booking dan apa metode pembayarannya?",
    answer:
      "Pemesanan sangat praktis: hubungi kami via WhatsApp di 0853-4916-6234, sebutkan jenis mobil yang diinginkan, tanggal sewa, dan lokasi penjemputan/pengantaran. Pembayaran dapat dilakukan secara tunai (cash) maupun transfer bank resmi (BCA, Mandiri, BRI, BNI). Kami melayani booking darurat 24 jam.",
  },
];

interface FaqSectionProps {
  title?: string;
  subtitle?: string;
  faqs?: FaqItem[];
  id?: string;
}

export const FaqSection: React.FC<FaqSectionProps> = ({
  title = "Pertanyaan Sering Diajukan (FAQ)",
  subtitle = "Jawaban lengkap seputar sewa mobil, harga, syarat lepas kunci, dan layanan supir di Banjarmasin & sekitarnya",
  faqs = defaultFaqs,
  id = "faq",
}) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer,
      },
    })),
  };

  return (
    <section id={id} className="py-16 sm:py-20 bg-[#FDFBF7] border-b border-[#E8E4DB]">
      {/* FAQ Schema for AEO / Google Rich Snippets */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="container mx-auto px-4 sm:px-6 max-w-4xl">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-50 border border-amber-200/80 rounded-full text-xs font-semibold text-[#B8892E] uppercase tracking-wider font-cinzel mb-3">
            <HelpCircle className="w-3.5 h-3.5" />
            Answer Engine & Information
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#171717] tracking-tight">
            {title}
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#626262] max-w-2xl mx-auto leading-relaxed">
            {subtitle}
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`rounded-xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? "bg-white border-[#DFC88F] shadow-sm"
                    : "bg-white/80 border-[#E8E4DB] hover:border-[#DFC88F]/60"
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(index)}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="text-base sm:text-lg font-bold text-[#171717] leading-snug">
                    {faq.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${
                      isOpen
                        ? "bg-[#B8892E] text-white rotate-180"
                        : "bg-[#F8F6F1] text-[#626262]"
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 sm:px-6 sm:pb-6 pt-0 text-sm sm:text-base text-[#525252] leading-relaxed border-t border-[#F4EFE6] mt-1 pt-4">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Small WhatsApp CTA under FAQ */}
        <div className="mt-10 p-6 bg-white rounded-2xl border border-[#E8E4DB] text-center flex flex-col sm:flex-row items-center justify-between gap-4 shadow-2xs">
          <div className="text-left">
            <h4 className="text-base font-bold text-[#171717]">
              Punya pertanyaan lain seputar armada & jadwal?
            </h4>
            <p className="text-xs sm:text-sm text-[#626262] mt-0.5">
              Customer service kami online 24 jam siap menjawab kebutuhan rental Anda.
            </p>
          </div>
          <a
            href="https://api.whatsapp.com/send/?phone=6285349166234&text=Halo+ZAHRAFFAMIRA+Rental+Mobil+saya+ingin+tanya+info+rental+mobil&type=phone_number&app_absent=0"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-gold-gradient text-white font-semibold text-sm rounded-lg hover:opacity-95 transition-all shadow-xs shrink-0 cursor-pointer"
          >
            <MessageCircle className="w-4 h-4" />
            Tanya via WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};
