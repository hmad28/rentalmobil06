"use client";

import React, { useState } from "react";
import { Phone, MessageCircle, ChevronDown } from "lucide-react";

export const FloatingContact = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="fixed bottom-6 right-6 z-[60] flex flex-col items-center gap-3">
      {/* Expanded items */}
      <div
        id="floatingContact"
        className={`flex flex-col gap-3 transition-all duration-300 ${
          isOpen
            ? "translate-y-0 opacity-100 pointer-events-auto"
            : "translate-y-4 opacity-0 pointer-events-none"
        }`}
      >
        <a
          href="tel:6281255964566"
          className="w-12 h-12 flex justify-center items-center rounded-full bg-[#171717] text-[#E8D5A8] border border-[#E8D5A8]/30 shadow-lg hover:bg-black transition-all hover:-translate-y-1"
          title="Telepon"
          aria-label="Telepon"
        >
          <Phone className="w-5 h-5" />
        </a>

        <a
          href="https://api.whatsapp.com/send/?phone=6281255964566&text=Halo+ZAHRAFFAMIRA+Rental+Mobil+Saya+ingin+tanya+rental+mobil&type=phone_number&app_absent=0"
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 flex justify-center items-center rounded-full bg-[#25D366] text-white shadow-lg hover:bg-[#20ba59] transition-all hover:-translate-y-1"
          title="WhatsApp"
          aria-label="WhatsApp"
        >
          <MessageCircle className="w-6 h-6" />
        </a>
      </div>

      {/* Main toggle */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="w-13 h-13 flex justify-center items-center rounded-full bg-[#B8892E] text-white shadow-xl hover:bg-[#9A7020] transition-colors cursor-pointer"
        aria-label="Toggle contact buttons"
      >
        <ChevronDown
          className={`w-7 h-7 transition-transform duration-300 ${
            isOpen ? "rotate-0" : "rotate-180"
          }`}
        />
      </button>
    </div>
  );
};
