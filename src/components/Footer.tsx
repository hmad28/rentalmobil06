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
            <Link href="/" className="inline-block mb-4 group">
              <img
                src="/images/logo-cropped.png"
                alt="ZAHRAFFAMIRA Rental Mobil Banjarmasin"
                title="ZAHRAFFAMIRA Rental Mobil Banjarmasin"
                width={1580}
                height={562}
                className="h-11 w-auto object-contain transition-transform group-hover:scale-[1.02]"
              />
            </Link>
            <p className="text-gray-300 text-sm leading-relaxed">
              Solusi terbaik untuk <span className="font-bold text-white">Rental Mobil Banjarmasin</span> dan{" "}
              <span className="font-bold text-white">Banjarbaru</span>. Kami menyediakan armada
              pilihan dengan kondisi prima dan pelayanan driver profesional untuk menemani perjalanan
              bisnis dan wisata Anda di Kalimantan Selatan.
            </p>
          </div>

          {/* Column 2: Layanan Utama */}
          <div>
            <h3 className="mb-4 text-sm font-bold text-gold-gradient-light uppercase tracking-wider font-cinzel">
              Layanan Utama
            </h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <Link href="/sewa-mobil-banjarmasin" className="hover:text-[#DFC88F] transition-colors">
                  Rental Mobil Banjarmasin
                </Link>
              </li>
              <li>
                <Link href="/sewa-mobil-banjarbaru" className="hover:text-[#DFC88F] transition-colors">
                  Rental Mobil Banjarbaru
                </Link>
              </li>
              <li>
                <Link href="/layanan/lepas-kunci" className="hover:text-[#DFC88F] transition-colors">
                  Sewa Mobil Lepas Kunci
                </Link>
              </li>
              <li>
                <Link href="/layanan/antar-jemput-bandara" className="hover:text-[#DFC88F] transition-colors">
                  Antar Jemput Bandara
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-[#DFC88F] transition-colors">
                  Blog & Tips Wisata
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Kontak & Lokasi */}
          <div>
            <h3 className="mb-4 text-sm font-bold text-gold-gradient-light uppercase tracking-wider font-cinzel">
              Kontak & Lokasi
            </h3>
            <p className="mb-3 text-sm flex items-start gap-2 text-gray-300">
              <MapPin className="w-4 h-4 mt-1 text-[#DFC88F] shrink-0" />
              <span>Banjarmasin & Banjarbaru, Kalimantan Selatan</span>
            </p>
            <p className="mb-3 text-sm flex items-center gap-2 text-gray-300">
              <Phone className="w-4 h-4 text-[#DFC88F] shrink-0" />
              <a href="tel:6285349166234" className="hover:text-[#DFC88F] transition-colors">
                +62 853-4916-6234
              </a>
            </p>
            <p className="mb-4 text-sm flex items-center gap-2 text-gray-300">
              <Mail className="w-4 h-4 text-[#DFC88F] shrink-0" />
              <a href="mailto:info@deazrental.com" className="hover:text-[#DFC88F] transition-colors">
                info@zahraffamirarental.com
              </a>
            </p>

            {/* Social Icons */}
            <div className="flex space-x-3">
              <a
                href="https://wa.me/6285349166234"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white/10 rounded-full hover:bg-gold-gradient hover:text-white transition-all text-[#E8D5A8]"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
              <a
                href="tel:6285349166234"
                className="p-2 bg-white/10 rounded-full hover:bg-gold-gradient hover:text-white transition-all text-[#E8D5A8]"
                aria-label="Telepon"
              >
                <Phone className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 4: Peta Lokasi */}
          <div>
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-bold text-[#E8D5A8] uppercase tracking-wider font-cinzel">
                Peta Lokasi
              </h3>
              <a
                href="https://maps.app.goo.gl/yC66naVpd1xchSg1A"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[11px] text-[#DFC88F] hover:underline"
              >
                Buka Maps &raquo;
              </a>
            </div>
            <div className="rounded-lg overflow-hidden h-32 border border-white/20 shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3982.5298!2d114.6745279!3d-3.401417!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2de427cedb877d03%3A0xc4decb64c249efb9!2sHome%20Zahraffa%20Rental%20Mobil!5e0!3m2!1sid!2sid!4v1727928000000!5m2!1sid!2sid"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                title="Peta Lokasi Home Zahraffa Rental Mobil"
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
