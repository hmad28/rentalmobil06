import React from "react";
import cars from "@/data/cars.json";

export const FleetSection = () => {
  return (
    <section id="armada" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="mb-4 text-xl font-bold text-center text-red-800 uppercase tracking-wider">
          Armada Rental Mobil Banjarmasin
        </h2>
        <h3 className="mb-12 text-4xl sm:text-5xl font-bold text-center lg:mb-24 text-gray-900">
          Booking sekarang untuk <span className="text-red-800">harga promo</span> terbaik
        </h3>

        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-6">
          {cars.map((car, index) => (
            <article
              key={index}
              className="overflow-hidden flex flex-col bg-red-700 rounded-md shadow-lg hover:shadow-xl transition-shadow group"
            >
              <div className="flex flex-col flex-1">
                <figure className="relative aspect-[4/3] bg-gray-200 overflow-hidden animate-shimmer">
                  <img
                    src={car.img}
                    alt={car.alt}
                    title={car.alt}
                    loading="lazy"
                    width={400}
                    height={300}
                    className="w-full h-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
                  />
                  {/* Gradient Overlay - protects branding */}
                  <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-red-700 to-transparent" />
                </figure>
                <div className="p-3 text-white">
                  <h3 className="text-sm sm:text-base font-bold text-center leading-tight">
                    {car.title}
                  </h3>
                </div>
              </div>
              <a
                href={car.waLink}
                target="_blank"
                rel="noopener noreferrer"
                className="py-4 font-bold text-center text-yellow-300 bg-red-900 rounded-b-md hover:bg-red-950 transition-colors"
              >
                Pesan disini
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
