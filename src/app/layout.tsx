import type { Metadata } from "next";
import { Manrope, Cinzel } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FloatingContact } from "@/components/FloatingContact";
import Script from "next/script";
import { LucideIconsInit } from "@/components/LucideIconsInit";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const cinzel = Cinzel({
  subsets: ["latin"],
  variable: "--font-cinzel",
  weight: ["600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://deazrental.com"),
  title: "ZAHRAFFAMIRA - Rental Mobil Banjarmasin | Nyaman untuk Setiap Perjalanan",
  description:
    "Pilihan armada terawat untuk kebutuhan keluarga, bisnis, wisata hingga perjalanan rombongan di Banjarmasin dan sekitarnya. Booking praktis via WhatsApp.",
  keywords: [
    "rental mobil banjarmasin",
    "sewa mobil banjarmasin",
    "rental mobil banjarbaru",
    "zahraffamira rental mobil",
    "sewa avanza banjarmasin",
    "sewa innova zenix banjarmasin",
    "sewa alphard banjarmasin",
    "sewa hiace banjarmasin",
  ],
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
  openGraph: {
    title: "ZAHRAFFAMIRA - Rental Mobil Banjarmasin | Nyaman untuk Setiap Perjalanan",
    description:
      "Pilihan armada terawat untuk kebutuhan keluarga, bisnis, wisata hingga perjalanan rombongan di Banjarmasin dan sekitarnya.",
    url: "https://deazrental.com/",
    siteName: "ZAHRAFFAMIRA Rental Mobil",
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
    <html lang="id" className={`${manrope.variable} ${cinzel.variable} h-full scroll-smooth`}>
      <head>
        <Script
          src="https://unpkg.com/lucide@0.562.0/dist/umd/lucide.min.js"
          strategy="afterInteractive"
        />
      </head>
      <body className="font-manrope bg-white text-[#626262] min-h-full flex flex-col antialiased selection:bg-[#E8D5A8] selection:text-[#171717]">
        <LucideIconsInit />
        <Navbar />
        <div className="flex-1">{children}</div>
        <Footer />
        <FloatingContact />
      </body>
    </html>
  );
}
