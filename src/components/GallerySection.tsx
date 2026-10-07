"use client";

import React, { useState, useRef, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight, X, Maximize2, MapPin, Star, ShieldCheck, MessageCircle, ExternalLink } from "lucide-react";
import { InstagramIcon, TikTokIcon, FacebookIcon } from "@/components/icons";

interface GalleryItem {
  src: string;
  title: string;
  plate: string;
  category: "all" | "hiace" | "avanza" | "innova_garasi";
  badge: string;
  desc: string;
}

const galleryData: GalleryItem[] = [
  {
    src: "/images/maps/armada-hiace-lineup.jpg",
    title: "Lineup 4 Unit Toyota Hiace Commuter",
    plate: "DA 7226 RY • DA 7098 BM • DK 7029 JW • B 7268 UDB",
    category: "hiace",
    badge: "4 Unit Berjejer",
    desc: "Kesiapan armada Toyota Hiace Commuter putih berjejer rapi di lapangan terbuka, siap melayani carter rombongan, wisata Kalsel, dinas instansi, dan antar jemput bandara.",
  },
  {
    src: "/images/maps/garasi-zahraffa-1.jpg",
    title: "Garasi Home Zahraffa Rental Mobil",
    plate: "DA 1154 BG • DA 1066 OC • DA 1680 BS",
    category: "innova_garasi",
    badge: "Garasi Resmi Gambut",
    desc: "Tampak depan garasi resmi Home Zahraffa di Komplek Dinar Mas 2, Gambut, Kab. Banjar. Unit selalu bersih, terawat, dan siap jalan tepat waktu.",
  },
  {
    src: "/images/maps/hiace-commuter-front.jpg",
    title: "Toyota Hiace Commuter Putih (DA 8597 PA)",
    plate: "DA 8597 PA",
    category: "hiace",
    badge: "Unit Hiace 16 Seat",
    desc: "Unit Toyota Hiace Commuter putih 16 kursi penumpang di carport garasi. Kabin luas, AC dingin merata hingga baris belakang, suspensi empuk untuk rombongan.",
  },
  {
    src: "/images/maps/avanza-allnew-black.jpg",
    title: "Toyota All New Avanza Hitam (DA 1680 BS)",
    plate: "DA 1680 BS",
    category: "avanza",
    badge: "All New Avanza",
    desc: "All New Avanza hitam mengkilap setelah dicuci dan disanitasi menyeluruh di carport. Siap melayani perjalanan harian keluarga maupun carter dinas.",
  },
  {
    src: "/images/maps/innova-reborn-garage.jpg",
    title: "Toyota Innova Reborn Dark Grey (DA 1989 AC)",
    plate: "DA 1989 AC",
    category: "innova_garasi",
    badge: "Innova Reborn",
    desc: "Toyota Innova Reborn warna abu-abu gelap terawat di dalam garasi. Pilihan favorit keluarga dan tamu VIP dengan kenyamanan suspensi kelas atas.",
  },
  {
    src: "/images/maps/garasi-zahraffa-2.jpg",
    title: "Dokumentasi Armada di Home Zahraffa",
    plate: "DA 1989 AC • DA 1847 BF • DA 1154 BG",
    category: "innova_garasi",
    badge: "Garasi & Perawatan",
    desc: "Dokumentasi Innova Reborn dan Avanza yang siap meluncur di halaman garasi Zahraffa Rental Mobil Banjarmasin.",
  },
  {
    src: "/images/maps/avanza-outdoor.jpg",
    title: "2 Unit Grand Avanza di Lokasi Wisata",
    plate: "DA 1154 BG & Silver Series",
    category: "avanza",
    badge: "Wisata Kalsel",
    desc: "Dokumentasi armada Toyota Grand Avanza saat mengantar perjalanan wisata di Kalimantan Selatan di bawah langit cerah.",
  },
  {
    src: "/images/maps/avanza-grand-silver.jpg",
    title: "Toyota Grand Avanza Silver (DA 1154 BG)",
    plate: "DA 1154 BG",
    category: "avanza",
    badge: "Grand Avanza",
    desc: "Tampak depan Toyota Grand Avanza silver. Bodi mulus, mesin prima, irit BBM dan sangat lincah untuk rute perkotaan maupun antar kabupaten.",
  },
  {
    src: "/images/maps/hiace-rear.jpg",
    title: "Toyota Hiace Commuter (DA 7098 BM)",
    plate: "DA 7098 BM",
    category: "hiace",
    badge: "Tampak Belakang",
    desc: "Tampak belakang Toyota Hiace Commuter berplat DA asli Kalimantan Selatan dengan stiker resmi Wira Toyota.",
  },
  {
    src: "/images/pelayanan-zahraffa.jpeg",
    title: "Armada Hiace Ready di Garasi Home Zahraffa",
    plate: "DA 7098 BM & DA White Series",
    category: "hiace",
    badge: "Hiace Ready",
    desc: "Dokumentasi armada Toyota Hiace Commuter putih yang selalu ready dan terawat di garasi Home Zahraffa Rental Mobil.",
  },
];

export const GallerySection = () => {
  const [activeFilter, setActiveFilter] = useState<string>("all");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const filteredImages = activeFilter === "all"
    ? galleryData
    : galleryData.filter((item) => item.category === activeFilter);

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const offset = direction === "left" ? -420 : 420;
      scrollContainerRef.current.scrollBy({ left: offset, behavior: "smooth" });
    }
  };

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
  };

  const closeLightbox = useCallback(() => {
    setLightboxIndex(null);
  }, []);

  const prevLightbox = useCallback(() => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + filteredImages.length) % filteredImages.length);
    }
  }, [lightboxIndex, filteredImages.length]);

  const nextLightbox = useCallback(() => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % filteredImages.length);
    }
  }, [lightboxIndex, filteredImages.length]);

  useEffect(() => {
    if (lightboxIndex !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [lightboxIndex]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") prevLightbox();
      if (e.key === "ArrowRight") nextLightbox();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxIndex, closeLightbox, prevLightbox, nextLightbox]);

  const currentItem = lightboxIndex !== null ? filteredImages[lightboxIndex] : null;

  return (
    <section id="galeri" className="py-16 sm:py-20 bg-[#FBFAF7] border-b border-[#E8E4DB] relative">
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <p className="text-xs sm:text-sm font-semibold tracking-widest text-[#B8892E] uppercase font-cinzel mb-2">
            Dokumentasi Riil & Garasi Resmi
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#171717] tracking-tight mb-4">
            Galeri Armada Nyata Zahraffa Rental
          </h2>
          <p className="text-sm sm:text-base text-[#626262] leading-relaxed">
            Foto asli unit operasional kami langsung dari garasi Gambut dan rute perjalanan wisata di Kalimantan Selatan (Plat DA Kalsel). Bersih, wangi, dan selalu diservis berkala sebelum melayani Anda.
          </p>

          {/* Google Maps Trust Badge */}
          <div className="mt-5 inline-flex flex-wrap items-center justify-center gap-2 sm:gap-3 bg-white px-4 py-2 rounded-full border border-[#E8E4DB] shadow-xs">
            <span className="flex items-center text-amber-500 gap-0.5 text-xs sm:text-sm">
              <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
              <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
              <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
              <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
              <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
              <strong className="text-[#171717] font-bold ml-1.5">5.0</strong>
            </span>
            <span className="text-[#A39D93]">•</span>
            <span className="text-xs sm:text-sm text-[#404040] font-medium flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              Google Maps Verified: Home Zahraffa Rental Mobil
            </span>
            <a
              href="https://maps.app.goo.gl/yC66naVpd1xchSg1A"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-semibold text-[#B8892E] hover:text-[#9E7424] hover:underline flex items-center gap-0.5"
            >
              Lihat Maps <ExternalLink className="w-3 h-3 ml-0.5" />
            </a>
            <span className="text-[#A39D93]">•</span>
            <a
              href="https://www.instagram.com/sewa_haice_commuter_gambut_bjm"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-semibold text-[#B8892E] hover:text-[#9E7424] hover:underline flex items-center gap-1"
            >
              <InstagramIcon className="w-3.5 h-3.5" /> Instagram
            </a>
            <span className="text-[#A39D93]">•</span>
            <a
              href="https://www.tiktok.com/@sewa_haice_commut"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-semibold text-[#B8892E] hover:text-[#9E7424] hover:underline flex items-center gap-1"
            >
              <TikTokIcon className="w-3.5 h-3.5" /> TikTok
            </a>
            <span className="text-[#A39D93]">•</span>
            <a
              href="https://www.facebook.com/share/1JpX3qfg3T/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-semibold text-[#B8892E] hover:text-[#9E7424] hover:underline flex items-center gap-1"
            >
              <FacebookIcon className="w-3.5 h-3.5" /> Facebook
            </a>
          </div>
        </div>

        {/* Filter Category Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
          {[
            { id: "all", label: `Semua Foto (${galleryData.length})` },
            { id: "hiace", label: `Toyota Hiace (4)` },
            { id: "avanza", label: `Toyota Avanza (3)` },
            { id: "innova_garasi", label: `Innova & Garasi (3)` },
          ].map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveFilter(tab.id)}
              className={`px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                activeFilter === tab.id
                  ? "bg-[#B8892E] text-white shadow-xs"
                  : "bg-white text-[#626262] border border-[#E8E4DB] hover:border-[#B8892E] hover:text-[#171717]"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Carousel / Grid Container */}
        <div className="relative group">
          {/* Left Arrow */}
          <button
            type="button"
            onClick={() => scroll("left")}
            aria-label="Foto sebelumnya"
            className="hidden sm:flex absolute -left-4 top-1/2 -translate-y-1/2 z-20 w-11 h-11 items-center justify-center rounded-full bg-white text-[#171717] border border-[#E8E4DB] shadow-md hover:bg-[#B8892E] hover:text-white transition-all cursor-pointer"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Right Arrow */}
          <button
            type="button"
            onClick={() => scroll("right")}
            aria-label="Foto berikutnya"
            className="hidden sm:flex absolute -right-4 top-1/2 -translate-y-1/2 z-20 w-11 h-11 items-center justify-center rounded-full bg-white text-[#171717] border border-[#E8E4DB] shadow-md hover:bg-[#B8892E] hover:text-white transition-all cursor-pointer"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Cards Track */}
          <div
            ref={scrollContainerRef}
            className="flex overflow-x-auto gap-4 sm:gap-5 pb-4 pt-1 snap-x snap-mandatory scroll-smooth no-scrollbar"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {filteredImages.map((item, index) => (
              <div
                key={index}
                onClick={() => openLightbox(index)}
                className="snap-start shrink-0 w-[280px] sm:w-[340px] md:w-[370px] bg-white rounded-xl border border-[#E8E4DB] overflow-hidden shadow-xs hover:shadow-lg hover:border-[#B8892E] transition-all duration-300 cursor-pointer flex flex-col group/card"
              >
                {/* Photo Image Frame */}
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#F2EFE9]">
                  <img
                    src={item.src}
                    alt={item.title}
                    title={item.title}
                    loading="lazy"
                    width={600}
                    height={450}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover/card:scale-105"
                  />
                  
                  {/* Badge top-left */}
                  <div className="absolute top-3 left-3 bg-[#171717]/85 backdrop-blur-xs text-white text-[11px] font-semibold px-2.5 py-1 rounded-md border border-white/20">
                    {item.badge}
                  </div>

                  {/* Zoom indicator top-right */}
                  <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/50 text-white flex items-center justify-center opacity-0 group-hover/card:opacity-100 transition-opacity">
                    <Maximize2 className="w-4 h-4" />
                  </div>

                  {/* Gradient shadow on bottom */}
                  <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
                  
                  {/* Plate on bottom left of image */}
                  <div className="absolute bottom-2.5 left-3 text-white text-xs font-medium flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-[#DFC88F]" />
                    <span className="font-mono text-[11px] tracking-wide text-amber-200">{item.plate}</span>
                  </div>
                </div>

                {/* Card Info */}
                <div className="p-4 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-bold text-[#171717] text-base group-hover/card:text-[#B8892E] transition-colors line-clamp-1 mb-1.5">
                      {item.title}
                    </h3>
                    <p className="text-xs text-[#626262] leading-relaxed line-clamp-2">
                      {item.desc}
                    </p>
                  </div>
                  <div className="mt-3 pt-3 border-t border-[#F0ECE1] flex items-center justify-between text-xs text-[#B8892E] font-semibold">
                    <span>Lihat Foto Penuh</span>
                    <span className="group-hover/card:translate-x-1 transition-transform">→</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Swipe Hint */}
        <p className="text-center text-xs text-[#8A857B] mt-4 flex items-center justify-center gap-1.5">
          <span>← Geser ke samping untuk melihat seluruh 9 foto dokumentasi asli →</span>
        </p>
      </div>

      {/* Lightbox Modal */}
      {lightboxIndex !== null && currentItem && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-black/95 flex flex-col justify-between items-center transition-opacity p-3 sm:p-6"
          onClick={closeLightbox}
        >
          {/* Top Bar */}
          <div
            className="w-full max-w-5xl flex items-center justify-between text-white z-50 pb-2"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center gap-2">
              <span className="bg-[#B8892E] text-white text-xs font-bold px-2.5 py-1 rounded-md">
                {currentItem.badge}
              </span>
              <span className="text-xs text-neutral-400">
                Foto {lightboxIndex + 1} dari {filteredImages.length}
              </span>
            </div>
            <button
              type="button"
              onClick={closeLightbox}
              className="p-2 text-white/80 hover:text-white hover:bg-white/10 rounded-full transition-all cursor-pointer"
              aria-label="Tutup foto"
            >
              <X className="w-6 h-6 sm:w-8 sm:h-8" />
            </button>
          </div>

          {/* Main Photo Center */}
          <div
            className="relative w-full max-w-5xl flex-1 flex items-center justify-center my-2"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Prev Button */}
            <button
              type="button"
              onClick={prevLightbox}
              className="absolute left-2 sm:left-4 z-50 p-2.5 sm:p-3 rounded-full bg-black/60 hover:bg-[#B8892E] text-white transition-all cursor-pointer border border-white/20"
              aria-label="Foto sebelumnya"
            >
              <ChevronLeft className="w-6 h-6 sm:w-8 sm:h-8" />
            </button>

            {/* Image */}
            <img
              src={currentItem.src}
              alt={currentItem.title}
              className="max-h-[65vh] sm:max-h-[72vh] w-auto max-w-full object-contain rounded-lg shadow-2xl select-none"
            />

            {/* Next Button */}
            <button
              type="button"
              onClick={nextLightbox}
              className="absolute right-2 sm:right-4 z-50 p-2.5 sm:p-3 rounded-full bg-black/60 hover:bg-[#B8892E] text-white transition-all cursor-pointer border border-white/20"
              aria-label="Foto berikutnya"
            >
              <ChevronRight className="w-6 h-6 sm:w-8 sm:h-8" />
            </button>
          </div>

          {/* Bottom Caption & Action */}
          <div
            className="w-full max-w-5xl bg-[#171717] rounded-xl border border-white/10 p-4 sm:p-5 text-white flex flex-col sm:flex-row sm:items-center justify-between gap-4 z-50"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="space-y-1">
              <div className="flex flex-wrap items-center gap-2">
                <h4 className="text-base sm:text-lg font-bold text-white">
                  {currentItem.title}
                </h4>
                <span className="font-mono text-xs text-amber-400 bg-amber-950/60 px-2 py-0.5 rounded border border-amber-800/40">
                  {currentItem.plate}
                </span>
              </div>
              <p className="text-xs sm:text-sm text-neutral-300 max-w-2xl leading-relaxed">
                {currentItem.desc}
              </p>
            </div>

            <div className="flex items-center gap-2 shrink-0">
              <a
                href={`https://wa.me/6285349166234?text=${encodeURIComponent(
                  `Halo Zahraffa Rental Mobil, saya melihat foto ${currentItem.title} (${currentItem.plate}) di website dan ingin tanya ketersediaan sewa unit ini.`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba5a] text-white font-semibold text-xs sm:text-sm px-4 py-2.5 rounded-lg transition-all"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                Tanya Unit Ini via WA
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
