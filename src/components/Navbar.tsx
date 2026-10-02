"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Phone } from "lucide-react";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { label: "Beranda", href: "/" },
    { label: "Banjarmasin", href: "/sewa-mobil-banjarmasin" },
    { label: "Banjarbaru", href: "/sewa-mobil-banjarbaru" },
    { label: "Tentang Kami", href: "/tentang-kami" },
    { label: "Pembayaran", href: "/pembayaran" },
    { label: "Kerjasama", href: "/kerjasama-kemitraan" },
    { label: "Kontak", href: "/kontak" },
    { label: "Testimoni", href: "/testimoni" },
    { label: "Blog", href: "/blog" },
  ];

  return (
    <header className="fixed top-0 right-0 left-0 z-50 bg-white/95 backdrop-blur-md border-b border-[#E8E4DB] shadow-xs">
      <div className="mx-auto max-w-screen-xl px-4 lg:px-8 sm:px-6">
        <div className="h-20 flex justify-between items-center">
          {/* Logo / Branding */}
          <div className="flex-shrink-0">
            <Link className="block group" href="/">
              <span className="font-cinzel text-xl sm:text-2xl font-bold tracking-wider text-[#171717] block leading-none">
                ZAHRAFFAMIRA
              </span>
              <span className="text-[10px] sm:text-xs font-semibold tracking-widest text-[#B8892E] uppercase block mt-1">
                Rental Mobil Banjarmasin
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex lg:gap-7 items-center" aria-label="Global">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                className="text-sm font-medium text-[#171717] transition-colors hover:text-[#B8892E]"
                href={link.href}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right Section */}
          <div className="flex items-center gap-4">
            <a
              className="hidden justify-center items-center px-5 py-2.5 text-sm font-semibold text-white bg-[#B8892E] hover:bg-[#9A7020] rounded-md shadow-xs focus:outline-none transition-all duration-200 sm:inline-flex"
              href="https://api.whatsapp.com/send/?phone=6281255964566&text=Halo+ZAHRAFFAMIRA+Rental+Mobil+Saya+ingin+tanya+rental+mobil&type=phone_number&app_absent=0"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Phone className="w-4 h-4 mr-2" />
              Hubungi Kami
            </a>

            {/* Mobile menu button */}
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-[#171717] rounded-md focus:outline-none hover:bg-[#F8F6F1] lg:hidden"
              aria-expanded={isOpen}
              aria-label="Toggle navigation"
            >
              <div className="w-6 h-6 flex flex-col justify-center items-center relative">
                <span
                  className={`w-6 h-0.5 bg-current transition-all duration-300 ease-in-out transform origin-center ${
                    isOpen ? "rotate-45 translate-y-0" : "-translate-y-1.5"
                  }`}
                />
                <span
                  className={`w-6 h-0.5 bg-current transition-all duration-300 ease-in-out transform origin-center ${
                    isOpen ? "opacity-0" : ""
                  }`}
                />
                <span
                  className={`w-6 h-0.5 bg-current transition-all duration-300 ease-in-out transform origin-center ${
                    isOpen ? "-rotate-45 translate-y-0" : "translate-y-1.5"
                  }`}
                />
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0 pointer-events-none"
        }`}
      >
        <nav className="px-4 py-3 bg-white border-t border-[#E8E4DB] shadow-lg">
          <div className="py-2 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2 text-base font-medium text-[#171717] rounded-lg hover:text-[#B8892E] hover:bg-[#F8F6F1] transition-colors"
                href={link.href}
              >
                {link.label === "Banjarmasin"
                  ? "Rental Mobil Banjarmasin"
                  : link.label === "Banjarbaru"
                  ? "Rental Mobil Banjarbaru"
                  : link.label === "Kerjasama"
                  ? "Kerjasama Kemitraan"
                  : link.label}
              </Link>
            ))}
          </div>
          <div className="pt-3 pb-2 border-t border-[#E8E4DB]">
            <a
              className="w-full flex justify-center items-center px-4 py-2.5 text-base font-semibold text-white bg-[#B8892E] hover:bg-[#9A7020] rounded-md shadow-xs transition-colors"
              href="https://api.whatsapp.com/send/?phone=6281255964566&text=Halo+ZAHRAFFAMIRA+Rental+Mobil+Saya+ingin+tanya+rental+mobil&type=phone_number&app_absent=0"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Phone className="w-4 h-4 mr-2" />
              Hubungi Kami
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
};
