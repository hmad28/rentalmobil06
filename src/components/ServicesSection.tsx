import React from "react";
import Link from "next/link";
import { Star, UserCheck, Key, Plane, Briefcase, Palmtree, Truck } from "lucide-react";

export const ServicesSection = () => {
  const services = [
    {
      title: "Sewa Mobil dengan Supir",
      description:
        "Layanan penyewaan mobil yang mencakup kendaraan beserta pengemudi profesional, jujur, dan berpengalaman.",
      icon: UserCheck,
      link: null,
    },
    {
      title: "Sewa Mobil Lepas Kunci",
      description:
        "Penyewaan mobil tanpa pengemudi, memberikan kebebasan penuh untuk mengatur rute perjalanan Anda sendiri.",
      icon: Key,
      link: "/layanan/lepas-kunci",
    },
    {
      title: "Drop Off & Antar Jemput",
      description:
        "Layanan antar jemput bandara Syamsudin Noor, pelabuhan Trisakti, hotel, atau lokasi sesuai permintaan Anda.",
      icon: Plane,
      link: "/layanan/antar-jemput-bandara",
    },
    {
      title: "Kemitraan Perusahaan",
      description:
        "Kami melayani kerjasama penyewaan kendaraan bulanan/tahunan untuk instansi pemerintah maupun swasta.",
      icon: Briefcase,
      link: null,
    },
    {
      title: "Layanan Wisata Kalsel",
      description:
        "Paket perjalanan wisata religi, alam, atau kuliner di Kalimantan Selatan dengan armada nyaman dan driver handal.",
      icon: Palmtree,
      link: null,
    },
    {
      title: "Jasa Angkut Barang",
      description:
        "Tersedia unit khusus seperti Gran Max atau Pick Up untuk kebutuhan pindahan dan logistik barang Anda.",
      icon: Truck,
      link: null,
    },
  ];

  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column: Heading & Owner Photo */}
          <div className="lg:w-3/4 mx-auto md:mx-0 text-center">
            <h2 className="text-3xl font-bold text-gray-800 lg:text-4xl">PELAYANAN KAMI</h2>
            <p className="mt-3 text-gray-800">Kami menyediakan beberapa pelayanan</p>
            <div className="flex justify-center items-center mt-5">
              <span className="w-24 h-[1px] bg-red-800" />
              <Star className="w-5 h-5 mx-2 text-red-800 fill-red-800" />
              <span className="w-24 h-[1px] bg-red-800" />
            </div>
            <div className="flex justify-center items-center mt-5">
              <img
                src="/images/owner-deaz-rental_Z1iYmhF.webp"
                alt="Owner Deaz Rental Mobil Banjarmasin"
                title="Owner Deaz Rental Mobil Banjarmasin"
                loading="lazy"
                width={400}
                height={500}
                className="w-72 h-auto rounded-lg lg:w-96 shadow-lg"
              />
            </div>
          </div>

          {/* Right Column: 6 Services Grid */}
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-10 sm:col-span-1">
            {services.map((s, idx) => {
              const IconComponent = s.icon;
              return (
                <li key={idx} className="flex gap-x-5">
                  <span className="shrink-0 inline-flex justify-center items-center w-[40px] h-[40px] rounded-full border border-gray-200 bg-white text-gray-800 shadow-sm">
                    <IconComponent className="w-5 h-5 text-red-800" />
                  </span>
                  <div className="grow text-left">
                    <h3 className="text-base font-bold text-gray-800">{s.title}</h3>
                    <p className="mt-1 text-sm text-gray-600 leading-snug">{s.description}</p>
                    {s.link && (
                      <Link
                        href={s.link}
                        className="mt-2 inline-block text-xs font-bold text-red-800 hover:text-red-900 underline"
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
