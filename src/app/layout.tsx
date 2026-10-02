import type { Metadata } from "next";
import { Overpass } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FloatingContact } from "@/components/FloatingContact";

import Script from "next/script";
import { LucideIconsInit } from "@/components/LucideIconsInit";

const overpass = Overpass({
  subsets: ["latin"],
  variable: "--font-overpass",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://deazrental.com"),
  title: "Rental Mobil Banjarmasin Murah ✅ Sewa Mobil Banjarbaru 24 Jam | Deaz Rental",
  description:
    "Rental & sewa mobil Banjarmasin Banjarbaru terpercaya ✅ 15+ armada terawat ✅ Lepas kunci / supir ✅ Antar jemput bandara 24 jam. Hubungi sekarang!",
  keywords: [
    "rental mobil banjarmasin",
    "sewa mobil banjarmasin",
    "rental mobil banjarbaru",
    "sewa mobil banjarbaru",
    "rental mobil lepas kunci",
    "antar jemput bandara syamsudin noor",
  ],
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
  openGraph: {
    title: "Rental Mobil Banjarmasin Murah ✅ Sewa Mobil Banjarbaru 24 Jam | Deaz Rental",
    description:
      "Rental & sewa mobil Banjarmasin Banjarbaru terpercaya ✅ 15+ armada terawat ✅ Lepas kunci / supir ✅ Antar jemput bandara 24 jam. Hubungi sekarang!",
    url: "https://deazrental.com/",
    siteName: "Deaz Rental",
    images: [
      {
        url: "/images/hero-image_UQlab.webp",
        width: 1024,
        height: 400,
        alt: "Deaz Rental Mobil Banjarmasin Banjarbaru",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={`${overpass.variable} h-full scroll-smooth`}>
      <head>
        <Script
          src="https://unpkg.com/lucide@0.562.0/dist/umd/lucide.min.js"
          strategy="afterInteractive"
        />
      </head>
      <body className={`${overpass.className} bg-gray-100 font-sans min-h-full flex flex-col text-gray-900`}>
        <LucideIconsInit />
        <Navbar />
        <div className="flex-1">{children}</div>
        <Footer />
        <FloatingContact />
      </body>
    </html>
  );
}
