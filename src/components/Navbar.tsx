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
    <header className="fixed top-0 right-0 left-0 z-50 bg-white shadow-sm">
      <div className="mx-auto max-w-screen-xl px-4 lg:px-8 sm:px-6">
        <div className="h-20 flex justify-between items-center">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link className="block text-red-800" href="/">
              <span className="sr-only">Home</span>
              <img
                src="/images/logo_26SpOd.webp"
                alt="Logo Deaz Rental Mobil Banjarmasin"
                title="Logo Deaz Rental Mobil Banjarmasin"
                width={150}
                height={64}
                className="w-auto h-16"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex lg:gap-8" aria-label="Global">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                className="text-base font-medium text-gray-700 transition-colors hover:text-red-800"
                href={link.href}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right Section */}
          <div className="flex items-center gap-4">
            <a
              className="hidden justify-center items-center px-5 py-2.5 text-sm font-semibold text-white bg-red-800 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 hover:bg-red-700 sm:inline-flex transition-colors"
              href="tel:6281255964566"
            >
              <Phone className="w-4 h-4 mr-2" />
              Hubungi Kami
            </a>

            {/* Mobile menu button */}
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 hover:bg-gray-100 lg:hidden"
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
        <nav className="px-4 py-2 bg-white divide-y divide-gray-200 shadow-lg border-t border-gray-100">
          <div className="py-3 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2 text-base font-medium text-gray-700 rounded-lg hover:text-red-800 hover:bg-gray-50 transition-colors"
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
          <div className="py-3">
            <a
              className="w-full flex justify-center items-center px-3 py-2 text-base font-semibold text-white bg-red-800 rounded-md shadow-sm hover:bg-red-700 transition-colors"
              href="tel:6281255964566"
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
