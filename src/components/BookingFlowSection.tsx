import React from "react";
import { MessageCircle } from "lucide-react";

export const BookingFlowSection = () => {
  const steps = [
    {
      num: "01",
      title: "Pilih Mobil",
      description: "Tentukan armada yang sesuai dengan kebutuhan dan kapasitas perjalanan Anda.",
    },
    {
      num: "02",
      title: "Tentukan Jadwal",
      description: "Informasikan tanggal sewa, durasi, dan rencana rute perjalanan Anda.",
    },
    {
      num: "03",
      title: "Konfirmasi via WhatsApp",
      description: "Lanjutkan pemesanan dan verifikasi ketersediaan armada langsung bersama tim kami.",
    },
  ];

  return (
    <section id="cara-booking" className="py-16 sm:py-24 bg-white border-b border-[#E8E4DB]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F8F6F1] border border-[#E8E4DB] mb-3">
            <span className="font-cinzel text-xs font-semibold tracking-wider text-[#B8892E] uppercase">
              PROSES PRAKTIS
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#171717] tracking-tight mb-4">
            Booking Mobil Jadi Lebih Mudah
          </h2>
          <p className="text-base text-[#626262]">
            Hanya 3 langkah sederhana untuk memastikan armada siap menemani perjalanan Anda.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto relative">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="bg-[#F8F6F1] rounded-2xl border border-[#E8E4DB] p-8 relative flex flex-col justify-between hover:border-[#B8892E]/60 transition-all duration-200"
            >
              <div>
                <span className="font-cinzel text-3xl font-extrabold text-[#B8892E] block mb-4">
                  {step.num}
                </span>
                <h3 className="text-xl font-bold text-[#171717] mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-[#626262] leading-relaxed">
                  {step.description}
                </p>
              </div>

              {idx === 2 && (
                <div className="mt-6 pt-6 border-t border-[#E8E4DB]">
                  <a
                    href="https://api.whatsapp.com/send/?phone=6281255964566&text=Halo+ZAHRAFFAMIRA+Rental+Mobil+Saya+ingin+booking+mobil&type=phone_number&app_absent=0"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-bold text-white bg-[#B8892E] hover:bg-[#9A7020] px-4 py-2.5 rounded-lg transition-colors w-full justify-center"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Chat WhatsApp Sekarang</span>
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
