"use client";

import React, { useState, useRef, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

export const GallerySection = () => {
  const galleryImages = [
    { src: "/images/1.DOG_iZwZ_ZCq2mP.webp", alt: "Galeri 1 Deaz Rental" },
    { src: "/images/2.CbeGwr1F_1hoWvt.webp", alt: "Galeri 2 Deaz Rental" },
    { src: "/images/3.Di3s-bA5_ZHyRrz.webp", alt: "Galeri 3 Deaz Rental" },
    { src: "/images/4.B40etl_r_1M90HK.webp", alt: "Galeri 4 Deaz Rental" },
    { src: "/images/5.BK9D3Rr0_ZKSFR1.webp", alt: "Galeri 5 Deaz Rental" },
    { src: "/images/6.CgXklAZ8_2sT1TI.webp", alt: "Galeri 6 Deaz Rental" },
    { src: "/images/7.CYkhxhZn_Z1Ok7iv.webp", alt: "Galeri 7 Deaz Rental" },
    { src: "/images/8.BQUXjo_c_1cEBiO.webp", alt: "Galeri 8 Deaz Rental" },
    { src: "/images/9.DX1uZBbe_Z5ROD.webp", alt: "Galeri 9 Deaz Rental" },
    { src: "/images/10.Coui8cs8_ZpCvJ9.webp", alt: "Galeri 10 Deaz Rental" },
    { src: "/images/11.CjUPcT9C_WWBAL.webp", alt: "Galeri 11 Deaz Rental" },
    { src: "/images/12.DHht49Dw_Z1VI5fh.webp", alt: "Galeri 12 Deaz Rental" },
    { src: "/images/13.Du3sydx3_Za6Tzz.webp", alt: "Galeri 13 Deaz Rental" },
    { src: "/images/14.DY1mHdbC_6XrrD.webp", alt: "Galeri 14 Deaz Rental" },
    { src: "/images/15.DaTbW5bd_y5ECp.webp", alt: "Galeri 15 Deaz Rental" },
  ];

  const containerRef = useRef<HTMLDivElement>(null);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const scrollLeft = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({
        left: -containerRef.current.clientWidth / 2,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({
        left: containerRef.current.clientWidth / 2,
        behavior: "smooth",
      });
    }
  };

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
  };

  const closeLightbox = useCallback(() => {
    setLightboxIndex(null);
  }, []);

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

  const prevLightbox = useCallback(() => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + galleryImages.length) % galleryImages.length);
    }
  }, [lightboxIndex, galleryImages.length]);

  const nextLightbox = useCallback(() => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % galleryImages.length);
    }
  }, [lightboxIndex, galleryImages.length]);

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

  return (
    <section className="py-16 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <h2 className="text-xl font-bold text-center text-red-800 uppercase tracking-wider mb-2">
          Galeri kami
        </h2>
        <h3 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-8">
          Dokumentasi Deaz Rental Mobil Banjarmasin bersama pelanggan
        </h3>

        {/* Carousel Wrapper */}
        <div className="relative group">
          <button
            type="button"
            onClick={scrollLeft}
            className="absolute left-2 top-1/2 -translate-y-1/2 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-white/80 shadow-md text-gray-800 hover:bg-white transition-all cursor-pointer"
            aria-label="Previous"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            type="button"
            onClick={scrollRight}
            className="absolute right-2 top-1/2 -translate-y-1/2 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-white/80 shadow-md text-gray-800 hover:bg-white transition-all cursor-pointer"
            aria-label="Next"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          <div
            ref={containerRef}
            id="galleryContainer"
            className="snap-x snap-mandatory flex overflow-x-auto gap-4 py-4 scroll-smooth no-scrollbar"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {galleryImages.map((img, idx) => (
              <div
                key={idx}
                className="snap-center shrink-0 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 cursor-pointer"
                onClick={() => openLightbox(idx)}
              >
                <div className="rounded-lg shadow-lg overflow-hidden h-64 bg-gray-100 animate-shimmer">
                  <img
                    src={img.src}
                    alt={img.alt}
                    title={img.alt}
                    loading="lazy"
                    width={400}
                    height={300}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <p className="text-center text-sm text-gray-400 mt-2">
          Geser untuk melihat foto lainnya
        </p>
      </div>

      {/* Lightbox Modal */}
      {lightboxIndex !== null && (
        <div
          id="lightbox"
          className="fixed inset-0 z-50 bg-black/90 flex justify-center items-center transition-opacity duration-300"
          onClick={closeLightbox}
        >
          <button
            type="button"
            onClick={closeLightbox}
            className="absolute top-4 right-4 text-white hover:text-gray-300 z-50 cursor-pointer"
            aria-label="Close Lightbox"
          >
            <X className="w-10 h-10" />
          </button>

          <div
            className="relative w-full max-w-4xl max-h-[90vh] flex justify-center items-center p-4"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={prevLightbox}
              className="absolute left-4 text-white hover:text-gray-300 z-50 bg-black/50 rounded-full p-2 cursor-pointer"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-8 h-8" />
            </button>

            <img
              src={galleryImages[lightboxIndex].src}
              alt={galleryImages[lightboxIndex].alt}
              className="max-w-full max-h-[85vh] object-contain rounded shadow-2xl transition-transform duration-300 scale-100"
            />

            <button
              type="button"
              onClick={nextLightbox}
              className="absolute right-4 text-white hover:text-gray-300 z-50 bg-black/50 rounded-full p-2 cursor-pointer"
              aria-label="Next image"
            >
              <ChevronRight className="w-8 h-8" />
            </button>
          </div>
        </div>
      )}
    </section>
  );
};
