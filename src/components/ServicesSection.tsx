"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Star, Users, Briefcase, Palmtree, Bus, Key, Plane } from "lucide-react";

export const ServicesSection = () => {
  const serviceShowcase = [
    {
      title: "Event & Rombongan VIP",
      desc: "Konvoi puluhan armada Toyota Hiace pengawalan resmi polisi",
      src: "/images/konvoi-hiace-event-vip.jpeg",
      badge: "Konvoi VIP & Event Besar",
    },
    {
      title: "Wisata Alam Kalsel",
      desc: "All New Avanza (DA 1680 BS) di Wisata Alam Pulau Mas",
      src: "/images/avanza-wisata-pulau-mas.jpeg",
      badge: "Wisata Keluarga",
    },
    {
      title: "Agenda Dinas & Kampus",
      desc: "Deretan armada terparkir rapi di Gedung Pascasarjana",
      src: "/images/lineup-armada-pascasarjana.jpeg",
      badge: "Dinas & Instansi",
    },
    {
      title: "Armada Ready di Garasi",
      desc: "Toyota Hiace siap berangkat di garasi Home Zahraffa Gambut",
      src: "/images/pelayanan-zahraffa.jpeg",
      badge: "Garasi Resmi",
    },
  ];

  const [activePhotoIndex, setActivePhotoIndex] = useState(0);
  const currentPhoto = serviceShowcase[activePhotoIndex];

  const services = [
    {
      title: "Rental Mobil Keluarga",
      description: "Layanan penyewaan kendaraan terawat untuk perjalanan sehari-hari maupun agenda bersama keluarga.",
      icon: Users,
      link: null,
    },
    {
      title: "Perjalanan Bisnis",
      description: "Pilihan unit kendaraan prima dan representatif untuk mendukung urusan dinas dan agenda kerja perusahaan.",
      icon: Briefcase,
      link: null,
    },
    {
      title: "Layanan Wisata Kalsel",
      description: "Paket perjalanan wisata alam, religi, maupun kuliner di Kalimantan Selatan dengan armada nyaman.",
      icon: Palmtree,
      link: null,
    },
    {
      title: "Rental Rombongan",
      description: "Tersedia unit Hiace Commuter dan Hiace Premio untuk kenyamanan perjalanan bersama rombongan atau grup.",
      icon: Bus,
      link: null,
    },
    {
      title: "Sewa Mobil Lepas Kunci",
      description: "Penyewaan mobil tanpa pengemudi, memberikan keleluasaan penuh untuk mengatur rute perjalanan Anda sendiri.",
      icon: Key,
      link: "/layanan/lepas-kunci",
    },
    {
      title: "Drop Off & Antar Jemput",
      description: "Layanan penjemputan bandara Syamsudin Noor, hotel, atau lokasi tertentu sesuai jadwal Anda.",
      icon: Plane,
      link: "/layanan/antar-jemput-bandara",
    },
  ];

  return (
    <div className="py-16 bg-[#F8F6F1] border-b border-[#E8E4DB]">
      <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          {/* Left Column: Heading, Star divider & Interactive Service Showcase Photo */}
          <div className="lg:w-11/12 mx-auto md:mx-0 text-center">
            <h2 className="text-3xl font-bold text-[#171717] lg:text-4xl font-cinzel">
              PELAYANAN KAMI
            </h2>
            <p className="mt-3 text-[#626262]">
              Pilihan layanan transportasi terbaik & terpercaya di Banjarmasin
            </p>
            <div className="flex justify-center items-center mt-5">
              <span className="w-24 h-[1px] bg-gradient-to-r from-transparent via-[#C99E42] to-[#B8892E]" />
              <Star className="w-5 h-5 mx-2 text-[#C99E42] fill-[#C99E42]" />
              <span className="w-24 h-[1px] bg-gradient-to-l from-transparent via-[#C99E42] to-[#B8892E]" />
            </div>

            {/* Main Featured Photo Box */}
            <div className="mt-6 relative rounded-2xl overflow-hidden border border-[#DFC88F]/60 shadow-lg bg-white group">
              <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full overflow-hidden bg-neutral-900">
                <img
                  src={currentPhoto.src}
                  alt={currentPhoto.title}
                  title="Pelayanan ZAHRAFFAMIRA Rental Mobil"
                  loading="lazy"
                  width={700}
                  height={450}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent pointer-events-none" />

                {/* Top Badge */}
                <div className="absolute top-3 left-3 bg-[#171717]/85 backdrop-blur-xs text-white text-[11px] font-bold px-2.5 py-1 rounded-md border border-white/20">
                  {currentPhoto.badge}
                </div>

                {/* Caption at bottom */}
                <div className="absolute bottom-3 left-3 right-3 text-left text-white">
                  <h3 className="font-bold text-sm sm:text-base text-white drop-shadow-sm">
                    {currentPhoto.title}
                  </h3>
                  <p className="text-xs text-neutral-300 drop-shadow-xs line-clamp-1">
                    {currentPhoto.desc}
                  </p>
                </div>
              </div>
            </div>

            {/* Photo Switcher Pills */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mt-3">
              {serviceShowcase.map((item, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setActivePhotoIndex(idx)}
                  className={`px-2.5 py-2 rounded-lg text-xs font-semibold text-center transition-all cursor-pointer border ${
                    activePhotoIndex === idx
                      ? "bg-[#B8892E] text-white border-[#B8892E] shadow-xs"
                      : "bg-white text-[#626262] border-[#E8E4DB] hover:border-[#DFC88F] hover:text-[#171717]"
                  }`}
                >
                  <span className="block truncate">{item.title}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Right Column: 6 Services Grid */}
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8 sm:col-span-1">
            {services.map((s, idx) => {
              const IconComponent = s.icon;
              return (
                <li key={idx} className="flex gap-x-4">
                  <span className="shrink-0 inline-flex justify-center items-center w-[42px] h-[42px] rounded-full border border-[#DFC88F]/60 bg-gradient-to-br from-white to-[#FAF6EE] text-[#9C721D] shadow-2xs">
                    <IconComponent className="w-5 h-5" />
                  </span>
                  <div className="grow text-left">
                    <h3 className="text-base font-bold text-[#171717]">{s.title}</h3>
                    <p className="mt-1 text-sm text-[#626262] leading-snug">{s.description}</p>
                    {s.link && (
                      <Link
                        href={s.link}
                        className="mt-2 inline-block text-xs font-bold text-[#9C721D] hover:text-[#B8892E] underline"
                      >
                        Selengkapnya &raquo;
                      </Link>
                    )}
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};
