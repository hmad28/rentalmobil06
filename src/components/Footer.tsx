import React from "react";
import Link from "next/link";
import { MapPin, Phone, MessageCircle } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="py-12 bg-[#121212] text-gray-400 border-t border-white/10 text-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          {/* Column 1: Brand Info */}
          <div>
            <Link className="block mb-4" href="/">
              <span className="font-cinzel text-xl font-bold tracking-wider text-white block">
                ZAHRAFFAMIRA
              </span>
              <span className="text-[11px] font-semibold tracking-widest text-[#B8892E] uppercase block">
                Rental Mobil Banjarmasin
              </span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
              Menyediakan pilihan armada terawat untuk kebutuhan keluarga, bisnis, wisata hingga rombongan di Banjarmasin dan sekitarnya.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="font-cinzel text-xs font-bold text-[#E8D5A8] uppercase tracking-wider mb-4">
              Navigasi Cepat
            </h3>
            <ul className="space-y-2.5">
              <li>
                <Link href="/" className="hover:text-[#B8892E] transition-colors">
                  Beranda
                </Link>
              </li>
              <li>
                <Link href="/#armada" className="hover:text-[#B8892E] transition-colors">
                  Pilihan Armada
                </Link>
              </li>
              <li>
                <Link href="/#kenapa-kami" className="hover:text-[#B8892E] transition-colors">
                  Kenapa Memilih Kami
                </Link>
              </li>
              <li>
                <Link href="/#layanan" className="hover:text-[#B8892E] transition-colors">
                  Layanan Kami
                </Link>
              </li>
              <li>
                <Link href="/#cara-booking" className="hover:text-[#B8892E] transition-colors">
                  Cara Pemesanan
                </Link>
              </li>
              <li>
                <Link href="/#faq" className="hover:text-[#B8892E] transition-colors">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Kontak & Area */}
          <div>
            <h3 className="font-cinzel text-xs font-bold text-[#E8D5A8] uppercase tracking-wider mb-4">
              Kontak & Layanan
            </h3>
            <div className="space-y-3">
              <p className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#B8892E] shrink-0 mt-0.5" />
                <span>Banjarmasin & sekitarnya, Kalimantan Selatan</span>
              </p>
              <p className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#B8892E] shrink-0" />
                <a href="tel:6281255964566" className="hover:text-[#B8892E] transition-colors">
                  +6281255964566
                </a>
              </p>
              <p className="flex items-center gap-2.5">
                <MessageCircle className="w-4 h-4 text-[#B8892E] shrink-0" />
                <a
                  href="https://api.whatsapp.com/send/?phone=6281255964566&text=Halo+ZAHRAFFAMIRA+Rental+Mobil&type=phone_number&app_absent=0"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#B8892E] transition-colors"
                >
                  WhatsApp Fast Response
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 text-center text-xs text-gray-500">
          <p>&copy; 2026 ZAHRAFFAMIRA Rental Mobil. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
