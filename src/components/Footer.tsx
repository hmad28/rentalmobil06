import React from "react";
import Link from "next/link";
import { MapPin, Phone, Mail, MessageCircle } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="py-8 text-white bg-red-900">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-4">
          {/* Column 1: Info */}
          <div className="md:col-span-1">
            <h3 className="mb-4 text-xl font-bold text-yellow-300 uppercase tracking-wider">
              Deaz Rental Mobil Banjarmasin
            </h3>
            <p className="text-gray-200 text-sm leading-relaxed">
              Solusi terbaik untuk <span className="font-bold">Rental Mobil Banjarmasin</span> dan{" "}
              <span className="font-bold">Rental Mobil Banjarbaru</span>. Kami menyediakan armada
              pilihan dengan kondisi prima dan pelayanan driver profesional untuk menemani perjalanan
              bisnis dan wisata Anda di Kalimantan Selatan.
            </p>
          </div>

          {/* Column 2: Layanan Utama */}
          <div>
            <h3 className="mb-4 text-lg font-bold text-yellow-300 uppercase tracking-wider">
              Layanan Utama
            </h3>
            <ul className="space-y-2 text-sm text-gray-200">
              <li>
                <Link href="/sewa-mobil-banjarmasin" className="hover:text-yellow-300 transition-colors">
                  Rental Mobil Banjarmasin
                </Link>
              </li>
              <li>
                <Link href="/sewa-mobil-banjarbaru" className="hover:text-yellow-300 transition-colors">
                  Rental Mobil Banjarbaru
                </Link>
              </li>
              <li>
                <Link href="/layanan/lepas-kunci" className="hover:text-yellow-300 transition-colors">
                  Sewa Mobil Lepas Kunci
                </Link>
              </li>
              <li>
                <Link href="/layanan/antar-jemput-bandara" className="hover:text-yellow-300 transition-colors">
                  Antar Jemput Bandara
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-yellow-300 transition-colors">
                  Blog & Tips Wisata
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Kontak & Lokasi */}
          <div>
            <h3 className="mb-4 text-lg font-bold text-yellow-300 uppercase tracking-wider">
              Kontak & Lokasi
            </h3>
            <p className="mb-3 text-sm flex items-start gap-2">
              <MapPin className="w-4 h-4 mt-1 text-yellow-300 shrink-0" />
              <span>Banjarmasin, Kalimantan Selatan</span>
            </p>
            <p className="mb-3 text-sm flex items-center gap-2">
              <Phone className="w-4 h-4 text-yellow-300 shrink-0" />
              <a href="tel:6281255964566" className="hover:text-yellow-300 transition-colors">
                +6281255964566
              </a>
            </p>
            <p className="mb-4 text-sm flex items-center gap-2">
              <Mail className="w-4 h-4 text-yellow-300 shrink-0" />
              <a href="mailto:info@deazrental.com" className="hover:text-yellow-300 transition-colors">
                info@deazrental.com
              </a>
            </p>

            {/* Social Icons */}
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/deazrentalmobilbanjarmasin"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white/10 rounded-full hover:bg-yellow-400 hover:text-red-900 transition-all"
                aria-label="Facebook"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/deazrentalmobilbanjarmasin"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white/10 rounded-full hover:bg-yellow-400 hover:text-red-900 transition-all"
                aria-label="Instagram"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a
                href="https://wa.me/6281255964566"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white/10 rounded-full hover:bg-yellow-400 hover:text-red-900 transition-all"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Column 4: Peta Lokasi */}
          <div>
            <h3 className="mb-4 text-lg font-bold text-yellow-300 uppercase tracking-wider">
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
                title="Map Deaz Rental Mobil"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 text-center border-t border-red-800/60 pt-6">
          <p className="text-sm text-gray-300">
            &copy; 2026 Deaz Rental Mobil Banjarmasin. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
