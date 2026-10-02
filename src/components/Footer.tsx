import React from "react";
import Link from "next/link";
import { MapPin, Phone, Mail, MessageCircle } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="py-12 text-white bg-[#171717] border-t border-[#E8E4DB]/20">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-4">
          {/* Column 1: Info */}
          <div className="md:col-span-1">
            <h3 className="mb-4 text-xl font-bold text-[#E8D5A8] uppercase tracking-wider font-cinzel">
              ZAHRAFFAMIRA RENTAL MOBIL
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Solusi terbaik untuk <span className="font-bold text-white">Rental Mobil Banjarmasin</span> dan{" "}
              <span className="font-bold text-white">Banjarbaru</span>. Kami menyediakan armada
              pilihan dengan kondisi prima dan pelayanan driver profesional untuk menemani perjalanan
              bisnis dan wisata Anda di Kalimantan Selatan.
            </p>
          </div>

          {/* Column 2: Layanan Utama */}
          <div>
            <h3 className="mb-4 text-sm font-bold text-[#E8D5A8] uppercase tracking-wider font-cinzel">
              Layanan Utama
            </h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <Link href="/sewa-mobil-banjarmasin" className="hover:text-[#B8892E] transition-colors">
                  Rental Mobil Banjarmasin
                </Link>
              </li>
              <li>
                <Link href="/sewa-mobil-banjarbaru" className="hover:text-[#B8892E] transition-colors">
                  Rental Mobil Banjarbaru
                </Link>
              </li>
              <li>
                <Link href="/layanan/lepas-kunci" className="hover:text-[#B8892E] transition-colors">
                  Sewa Mobil Lepas Kunci
                </Link>
              </li>
              <li>
                <Link href="/layanan/antar-jemput-bandara" className="hover:text-[#B8892E] transition-colors">
                  Antar Jemput Bandara
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-[#B8892E] transition-colors">
                  Blog & Tips Wisata
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Kontak & Lokasi */}
          <div>
            <h3 className="mb-4 text-sm font-bold text-[#E8D5A8] uppercase tracking-wider font-cinzel">
              Kontak & Lokasi
            </h3>
            <p className="mb-3 text-sm flex items-start gap-2 text-gray-300">
              <MapPin className="w-4 h-4 mt-1 text-[#B8892E] shrink-0" />
              <span>Banjarmasin & Banjarbaru, Kalimantan Selatan</span>
            </p>
            <p className="mb-3 text-sm flex items-center gap-2 text-gray-300">
              <Phone className="w-4 h-4 text-[#B8892E] shrink-0" />
              <a href="tel:6281255964566" className="hover:text-[#B8892E] transition-colors">
                +6281255964566
              </a>
            </p>
            <p className="mb-4 text-sm flex items-center gap-2 text-gray-300">
              <Mail className="w-4 h-4 text-[#B8892E] shrink-0" />
              <a href="mailto:info@deazrental.com" className="hover:text-[#B8892E] transition-colors">
                info@zahraffamirarental.com
              </a>
            </p>

            {/* Social Icons */}
            <div className="flex space-x-3">
              <a
                href="https://wa.me/6281255964566"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white/10 rounded-full hover:bg-[#B8892E] hover:text-white transition-all text-[#E8D5A8]"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
              <a
                href="tel:6281255964566"
                className="p-2 bg-white/10 rounded-full hover:bg-[#B8892E] hover:text-white transition-all text-[#E8D5A8]"
                aria-label="Telepon"
              >
                <Phone className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 4: Peta Lokasi */}
          <div>
            <h3 className="mb-4 text-sm font-bold text-[#E8D5A8] uppercase tracking-wider font-cinzel">
              Peta Lokasi
            </h3>
            <div className="rounded-lg overflow-hidden h-32 border border-white/20 shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d31866.141113921487!2d114.58675!3d-3.283702!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2de423850da00111%3A0x3374eb35838bae7f!2sDEAZ%20RENTAL%20MOBIL%20BANJARMASIN!5e0!3m2!1sen!2sid!4v1723464391757!5m2!1sen!2sid"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                title="Peta Lokasi Rental Mobil Banjarmasin"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 text-center border-t border-white/10 pt-6">
          <p className="text-xs sm:text-sm text-gray-400">
            &copy; 2026 ZAHRAFFAMIRA Rental Mobil Banjarmasin. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
