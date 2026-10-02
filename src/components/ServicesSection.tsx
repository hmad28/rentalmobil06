import React from "react";
import Link from "next/link";
import { Star, Users, Briefcase, Palmtree, Bus, Key, Plane } from "lucide-react";

export const ServicesSection = () => {
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
          {/* Left Column: Heading, Star divider & Owner/Representative Photo */}
          <div className="lg:w-3/4 mx-auto md:mx-0 text-center">
            <h2 className="text-3xl font-bold text-[#171717] lg:text-4xl font-cinzel">
              PELAYANAN KAMI
            </h2>
            <p className="mt-3 text-[#626262]">
              Pilihan layanan transportasi terbaik di Banjarmasin
            </p>
            <div className="flex justify-center items-center mt-5">
              <span className="w-24 h-[1px] bg-gradient-to-r from-transparent via-[#C99E42] to-[#B8892E]" />
              <Star className="w-5 h-5 mx-2 text-[#C99E42] fill-[#C99E42]" />
              <span className="w-24 h-[1px] bg-gradient-to-l from-transparent via-[#C99E42] to-[#B8892E]" />
            </div>
            <div className="flex justify-center items-center mt-6">
              <img
                src="/images/owner-deaz-rental_Z1iYmhF.webp"
                alt="ZAHRAFFAMIRA Rental Mobil Banjarmasin"
                title="Pelayanan ZAHRAFFAMIRA Rental Mobil"
                loading="lazy"
                width={400}
                height={500}
                className="w-72 h-auto rounded-lg lg:w-96 shadow-lg border border-[#DFC88F]/50"
              />
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
