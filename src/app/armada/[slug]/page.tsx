import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import cars from "@/data/cars.json";
import {
  Users,
  Briefcase,
  Cog,
  Fuel,
  CheckCircle2,
  MessageCircle,
  Phone,
  ShieldCheck,
  Sparkles,
  MapPin,
  ChevronRight,
  Gauge,
} from "lucide-react";
import { FaqSection } from "@/components/FaqSection";

interface CarDetailProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return cars.map((car) => ({
    slug: car.id,
  }));
}

export async function generateMetadata({
  params,
}: CarDetailProps): Promise<Metadata> {
  const { slug } = await params;
  const car = cars.find((c) => c.id === slug);

  if (!car) {
    return {
      title: "Armada Tidak Ditemukan",
    };
  }

  const title = `Sewa & Rental ${car.fullName} Banjarmasin, Gambut & Banjarbaru`;
  const description = `${car.description.slice(0, 155)}... Booking ${car.title} lepas kunci atau plus driver via WhatsApp 0853-4916-6234.`;

  return {
    title,
    description,
    keywords: [
      `rental ${car.title.toLowerCase()} banjarmasin`,
      `sewa ${car.title.toLowerCase()} banjarmasin`,
      `sewa ${car.title.toLowerCase()} gambut`,
      `rental ${car.title.toLowerCase()} banjarbaru`,
      `harga sewa ${car.title.toLowerCase()} banjarmasin`,
      `carter ${car.title.toLowerCase()} kalsel`,
      `${car.fullName.toLowerCase()}`,
    ],
    alternates: {
      canonical: `https://zahraffamirarental.com/armada/${car.id}`,
    },
    openGraph: {
      title,
      description,
      url: `https://zahraffamirarental.com/armada/${car.id}`,
      siteName: "ZAHRAFFAMIRA Rental Mobil",
      locale: "id_ID",
      type: "website",
      images: [
        {
          url: car.img,
          width: 800,
          height: 600,
          alt: `${car.fullName} - ZAHRAFFAMIRA Rental Mobil`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [car.img],
    },
  };
}

export default async function CarDetailPage({ params }: CarDetailProps) {
  const { slug } = await params;
  const car = cars.find((c) => c.id === slug);

  if (!car) {
    notFound();
  }

  const otherCars = cars.filter((c) => c.id !== car.id).slice(0, 3);

  const carSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["Car", "Product"],
        "@id": `https://zahraffamirarental.com/armada/${car.id}#car`,
        "name": car.fullName,
        "image": `https://zahraffamirarental.com${car.img}`,
        "description": car.description,
        "numberOfSeats": car.seats,
        "vehicleTransmission": car.transmission,
        "fuelType": car.fuel,
        "brand": {
          "@type": "Brand",
          "name": "Toyota",
        },
        "offers": {
          "@type": "AggregateOffer",
          "priceCurrency": "IDR",
          "priceSpecification": {
            "@type": "PriceSpecification",
            "priceCurrency": "IDR",
            "name": car.priceRange,
          },
          "availability": "https://schema.org/InStock",
          "seller": {
            "@id": "https://zahraffamirarental.com/#business",
          },
        },
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Beranda",
            "item": "https://zahraffamirarental.com",
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Armada",
            "item": "https://zahraffamirarental.com/armada",
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": car.fullName,
            "item": `https://zahraffamirarental.com/armada/${car.id}`,
          },
        ],
      },
    ],
  };

  return (
    <main className="pt-20 bg-[#FBFAF7] min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(carSchema) }}
      />

      {/* Breadcrumb Header */}
      <section className="bg-gradient-to-b from-[#F4EFE6] to-[#FBFAF7] border-b border-[#E8E4DB] py-6 sm:py-8">
        <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
          <nav className="flex text-xs sm:text-sm text-[#737373]" aria-label="Breadcrumb">
            <ol className="flex items-center space-x-2">
              <li>
                <Link href="/" className="hover:text-[#B8892E] transition-colors">
                  Beranda
                </Link>
              </li>
              <li>
                <span className="text-[#A3A3A3]">/</span>
              </li>
              <li>
                <Link href="/armada" className="hover:text-[#B8892E] transition-colors">
                  Armada
                </Link>
              </li>
              <li>
                <span className="text-[#A3A3A3]">/</span>
              </li>
              <li className="text-[#B8892E] font-semibold">{car.title}</li>
            </ol>
          </nav>
        </div>
      </section>

      {/* Main Car Presentation */}
      <section className="py-8 sm:py-14">
        <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            
            {/* Left: Car Image & Key Highlights */}
            <div className="lg:col-span-6 space-y-6">
              <div className="relative aspect-4/3 rounded-2xl overflow-hidden bg-white border border-[#E8E4DB] shadow-md">
                <img
                  src={car.img}
                  alt={car.alt}
                  title={car.alt}
                  width={700}
                  height={525}
                  className="w-full h-full object-cover"
                />
                <span className="absolute top-4 left-4 px-3 py-1 text-xs font-bold bg-white/95 text-[#9C721D] border border-[#DFC88F] rounded-md shadow-xs backdrop-blur-xs">
                  {car.categoryLabel}
                </span>
                <span className="absolute bottom-4 right-4 px-3 py-1.5 text-xs sm:text-sm font-bold bg-[#171717]/90 text-[#DFC88F] rounded-lg shadow-xs backdrop-blur-xs">
                  {car.priceRange}
                </span>
              </div>

              {/* Service Badges */}
              <div className="grid grid-cols-3 gap-3 text-center">
                <div className="p-3 bg-white rounded-xl border border-[#E8E4DB]">
                  <ShieldCheck className="w-5 h-5 text-[#B8892E] mx-auto mb-1" />
                  <span className="text-[11px] font-semibold text-[#171717] block">Asuransi & Aman</span>
                </div>
                <div className="p-3 bg-white rounded-xl border border-[#E8E4DB]">
                  <Sparkles className="w-5 h-5 text-[#B8892E] mx-auto mb-1" />
                  <span className="text-[11px] font-semibold text-[#171717] block">Kabin Bersih Wangi</span>
                </div>
                <div className="p-3 bg-white rounded-xl border border-[#E8E4DB]">
                  <MapPin className="w-5 h-5 text-[#B8892E] mx-auto mb-1" />
                  <span className="text-[11px] font-semibold text-[#171717] block">Antar Jemput Bandara</span>
                </div>
              </div>
            </div>

            {/* Right: Car Details & Booking Form CTA */}
            <div className="lg:col-span-6 space-y-6">
              <div>
                <p className="text-xs sm:text-sm font-semibold text-[#B8892E] uppercase tracking-wider font-cinzel mb-1">
                  Armada Pilihan ZAHRAFFAMIRA
                </p>
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#171717] tracking-tight leading-tight">
                  {car.fullName}
                </h1>
                <p className="text-sm sm:text-base text-[#626262] mt-2 italic">
                  &ldquo;{car.tagline}&rdquo;
                </p>
              </div>

              {/* Specs Box */}
              <div className="bg-white rounded-2xl border border-[#E8E4DB] p-5 shadow-xs">
                <h3 className="text-sm font-bold text-[#171717] uppercase tracking-wider mb-4 pb-2 border-b border-[#F0ECE1]">
                  Spesifikasi & Kapasitas
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs sm:text-sm">
                  <div className="flex items-center gap-2.5">
                    <div className="w-9 h-9 rounded-lg bg-amber-50 border border-amber-200 text-[#B8892E] flex items-center justify-center shrink-0">
                      <Users className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[11px] text-[#737373] block">Kapasitas</span>
                      <strong className="text-[#171717]">{car.seats} Penumpang</strong>
                    </div>
                  </div>

                  <div className="flex items-center gap-2.5">
                    <div className="w-9 h-9 rounded-lg bg-amber-50 border border-amber-200 text-[#B8892E] flex items-center justify-center shrink-0">
                      <Briefcase className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[11px] text-[#737373] block">Bagasi</span>
                      <strong className="text-[#171717]">{car.luggage} Koper</strong>
                    </div>
                  </div>

                  <div className="flex items-center gap-2.5">
                    <div className="w-9 h-9 rounded-lg bg-amber-50 border border-amber-200 text-[#B8892E] flex items-center justify-center shrink-0">
                      <Cog className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[11px] text-[#737373] block">Transmisi</span>
                      <strong className="text-[#171717]">{car.transmission}</strong>
                    </div>
                  </div>

                  <div className="flex items-center gap-2.5">
                    <div className="w-9 h-9 rounded-lg bg-amber-50 border border-amber-200 text-[#B8892E] flex items-center justify-center shrink-0">
                      <Fuel className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[11px] text-[#737373] block">Bahan Bakar</span>
                      <strong className="text-[#171717]">{car.fuel}</strong>
                    </div>
                  </div>

                  <div className="flex items-center gap-2.5 sm:col-span-2">
                    <div className="w-9 h-9 rounded-lg bg-amber-50 border border-amber-200 text-[#B8892E] flex items-center justify-center shrink-0">
                      <Gauge className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[11px] text-[#737373] block">Tipe Mesin</span>
                      <strong className="text-[#171717]">{car.engine}</strong>
                    </div>
                  </div>
                </div>
              </div>

              {/* Description */}
              <div className="prose prose-sm text-[#525252] leading-relaxed">
                <p>{car.description}</p>
              </div>

              {/* Key Features */}
              <div className="space-y-2.5">
                <h3 className="text-sm font-bold text-[#171717] uppercase tracking-wider">
                  Fitur & Fasilitas Kenyamanan
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-[#404040]">
                  {car.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#B8892E] shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Ideal Use */}
              <div className="p-4 rounded-xl bg-amber-50/60 border border-amber-200/80 text-xs sm:text-sm">
                <strong className="text-[#9C721D] block mb-1">Rekomendasi Penggunaan:</strong>
                <p className="text-[#525252]">{car.idealFor}</p>
              </div>

              {/* Booking Actions */}
              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <a
                  href={car.waLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-3.5 px-6 bg-gold-gradient text-white font-bold text-sm rounded-xl flex items-center justify-center gap-2 shadow-md hover:opacity-95 transition-all text-center"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>Sewa {car.title} via WhatsApp</span>
                </a>
                <a
                  href="tel:6285349166234"
                  className="py-3.5 px-5 bg-white border border-[#E8E4DB] text-[#171717] font-semibold text-sm rounded-xl hover:border-[#DFC88F] flex items-center justify-center gap-2 transition-all"
                >
                  <Phone className="w-4 h-4 text-[#B8892E]" />
                  <span>Telepon</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Syarat & Ketentuan Sewa */}
      <section className="py-12 bg-white border-t border-[#E8E4DB]">
        <div className="container mx-auto px-4 sm:px-6 max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-6 rounded-2xl bg-[#FBFAF7] border border-[#E8E4DB]">
              <h3 className="text-lg font-bold text-[#171717] mb-3 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-[#B8892E]" />
                Syarat Sewa Lepas Kunci
              </h3>
              <ul className="space-y-2 text-xs sm:text-sm text-[#525252] list-disc list-inside">
                <li>E-KTP asli penyewa (disimpan selama masa sewa atau difoto).</li>
                <li>SIM A yang masih berlaku aktif.</li>
                <li>Kartu identitas penjamin / tiket pesawat PP / voucher hotel.</li>
                <li>Menyetujui formulir perjanjian sewa kendaraan mandiri.</li>
                <li>Pengantaran mobil dapat dilakukan ke Bandara atau Hotel.</li>
              </ul>
            </div>

            <div className="p-6 rounded-2xl bg-[#FBFAF7] border border-[#E8E4DB]">
              <h3 className="text-lg font-bold text-[#171717] mb-3 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-[#B8892E]" />
                Keuntungan Sewa dengan Supir (Driver)
              </h3>
              <ul className="space-y-2 text-xs sm:text-sm text-[#525252] list-disc list-inside">
                <li>Driver profesional, beretika sopan, dan tidak merokok di kabin.</li>
                <li>Hafal rute Banjarmasin, Banjarbaru, Martapura, hingga pelosok Kalsel.</li>
                <li>Bebas lelah menyetir dalam kemacetan atau perjalanan jarak jauh.</li>
                <li>Penyewa tidak dibebani tanggung jawab risiko lecet di jalan.</li>
                <li>Tepat waktu menjemput penerbangan pagi maupun malam hari.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Car Specific FAQs */}
      <FaqSection
        title={`FAQ Seputar Rental ${car.fullName}`}
        subtitle={`Pertanyaan umum yang sering ditanyakan pelanggan seputar pemesanan armada ${car.title}`}
        faqs={car.faqs}
        id="car-faq"
      />

      {/* Other Cars */}
      <section className="py-12 bg-[#FBFAF7] border-t border-[#E8E4DB]">
        <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-xl font-bold text-[#171717]">
              Pilihan Armada Lainnya
            </h3>
            <Link
              href="/armada"
              className="text-xs sm:text-sm font-semibold text-[#B8892E] hover:underline flex items-center gap-1"
            >
              Lihat Semua Armada <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {otherCars.map((oc) => (
              <div
                key={oc.id}
                className="bg-white rounded-xl border border-[#E8E4DB] overflow-hidden hover:shadow-md transition-shadow group flex flex-col"
              >
                <div className="relative aspect-4/3 bg-[#F8F6F1]">
                  <img
                    src={oc.img}
                    alt={oc.alt}
                    width={400}
                    height={300}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                  />
                  <span className="absolute top-2.5 left-2.5 px-2 py-0.5 text-[10px] font-bold bg-white text-[#9C721D] border border-[#DFC88F] rounded">
                    {oc.categoryLabel}
                  </span>
                </div>
                <div className="p-4 flex-1 flex flex-col justify-between">
                  <div>
                    <h4 className="font-bold text-sm text-[#171717] group-hover:text-[#B8892E] transition-colors">
                      {oc.fullName}
                    </h4>
                    <p className="text-xs text-[#737373] mt-1 line-clamp-1">
                      {oc.priceRange}
                    </p>
                  </div>
                  <Link
                    href={`/armada/${oc.id}`}
                    className="mt-3 block w-full text-center py-2 bg-[#F8F6F1] hover:bg-[#F0ECE1] text-xs font-semibold text-[#171717] rounded-lg transition-colors"
                  >
                    Detail Armada &raquo;
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
