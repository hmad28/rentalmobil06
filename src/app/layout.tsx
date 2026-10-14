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
  metadataBase: new URL("https://www.zahraffamirarental.com"),
  title: {
    default: "ZAHRAFFAMIRA - Rental Mobil Kertak Hanyar, Gambut & Banjarmasin",
    template: "%s | ZAHRAFFAMIRA Rental Mobil",
  },
  description:
    "ZAHRAFFAMIRA Rental Mobil melayani sewa dan rental mobil di Kertak Hanyar, Gambut, Banjarmasin, dan Kabupaten Banjar. Unit Avanza, Innova, Hiace, Fortuner, Alphard siap lepas kunci atau supir 24 jam.",
  keywords: [
    "rental mobil kertak hanyar",
    "sewa mobil kertak hanyar",
    "rental mobil gambut",
    "sewa mobil gambut",
    "rental mobil banjarmasin",
    "sewa mobil banjarmasin",
    "rental mobil banjar",
    "rental mobil kabupaten banjar",
    "rental mobil banjarbaru",
    "sewa mobil banjarbaru",
    "rental mobil martapura",
    "sewa mobil martapura",
    "sewa hiace banjarmasin",
    "rental hiace commuter gambut",
    "sewa hiace premio banjarmasin",
    "rental innova reborn banjarmasin",
    "sewa innova zenix banjarmasin",
    "rental alphard banjarmasin",
    "sewa fortuner banjarmasin",
    "antar jemput bandara syamsudin noor",
    "carter mobil banjarmasin",
    "zahraffamira rental mobil",
  ],
  authors: [{ name: "ZAHRAFFAMIRA Rental Mobil", url: "https://www.zahraffamirarental.com" }],
  creator: "ZAHRAFFAMIRA Rental Mobil",
  publisher: "ZAHRAFFAMIRA Rental Mobil",
  formatDetection: {
    telephone: true,
    address: true,
  },
  alternates: {
    canonical: "https://www.zahraffamirarental.com",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-48x48.png", type: "image/png", sizes: "48x48" },
    ],
    shortcut: [
      { url: "/favicon.ico", sizes: "any" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  manifest: "/manifest.webmanifest",
  openGraph: {
    title: "ZAHRAFFAMIRA - Rental Mobil Kertak Hanyar, Gambut & Banjarmasin 24 Jam",
    description:
      "Rental & sewa mobil terbaik di Kertak Hanyar, Gambut, Banjarmasin, dan Kabupaten Banjar. Avanza, Innova, Hiace, Fortuner, Alphard siap lepas kunci / supir 24 jam.",
    url: "https://www.zahraffamirarental.com",
    siteName: "ZAHRAFFAMIRA Rental Mobil",
    locale: "id_ID",
    type: "website",
    images: [
      {
        url: "/images/pelayanan-zahraffa.jpeg",
        width: 1200,
        height: 630,
        alt: "ZAHRAFFAMIRA Rental Mobil Kertak Hanyar Gambut Banjarmasin",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ZAHRAFFAMIRA - Rental Mobil Kertak Hanyar, Gambut & Banjarmasin 24 Jam",
    description:
      "Rental mobil terpercaya di Kertak Hanyar, Gambut, Banjarmasin & Kabupaten Banjar. Unit prima Avanza, Innova, Fortuner, Alphard, Hiace. Layanan 24 Jam.",
    images: ["/images/pelayanan-zahraffa.jpeg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const globalJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["AutoRental", "LocalBusiness"],
      "@id": "https://www.zahraffamirarental.com/#business",
      "name": "ZAHRAFFAMIRA Rental Mobil",
      "alternateName": [
        "Home Zahraffa Rental Mobil",
        "Zahraffamira Rental Mobil Kertak Hanyar",
        "Rental Mobil Gambut Zahraffamira",
        "Zahraffamira Rental Mobil Banjarmasin",
        "Sewa Hiace Banjarmasin Zahraffamira",
      ],
      "url": "https://www.zahraffamirarental.com",
      "logo": "https://www.zahraffamirarental.com/images/logo-cropped.png",
      "image": [
        "https://www.zahraffamirarental.com/images/pelayanan-zahraffa.jpeg",
        "https://www.zahraffamirarental.com/images/lineup-armada-pascasarjana.jpeg",
        "https://www.zahraffamirarental.com/images/hiace-ready.jpeg",
        "https://www.zahraffamirarental.com/images/logo-cropped.png",
      ],
      "telephone": "+6285349166234",
      "email": "info@zahraffamirarental.com",
      "priceRange": "$$",
      "currenciesAccepted": "IDR",
      "paymentAccepted": "Cash, Transfer Bank",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Komplek Dinar Mas 2 Blok AB No. 13 D, Kayu Bawang",
        "addressLocality": "Gambut",
        "addressRegion": "Kalimantan Selatan",
        "postalCode": "70652",
        "addressCountry": "ID",
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": -3.401417,
        "longitude": 114.6771028,
      },
      "hasMap": "https://maps.app.goo.gl/yC66naVpd1xchSg1A",
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
            "Sunday",
          ],
          "opens": "00:00",
          "closes": "23:59",
        },
      ],
      "areaServed": [
        { "@type": "AdministrativeArea", "name": "Kertak Hanyar, Kabupaten Banjar" },
        { "@type": "AdministrativeArea", "name": "Gambut, Kabupaten Banjar" },
        { "@type": "AdministrativeArea", "name": "Kabupaten Banjar" },
        { "@type": "City", "name": "Banjarmasin" },
        { "@type": "City", "name": "Banjarbaru" },
        { "@type": "City", "name": "Martapura" },
        { "@type": "Place", "name": "Bandara Internasional Syamsudin Noor (BDJ)" },
        { "@type": "AdministrativeArea", "name": "Kalimantan Selatan" },
      ],
      "sameAs": [
        "https://www.instagram.com/sewa_haice_commuter_gambut_bjm",
        "https://www.tiktok.com/@sewa_haice_commut",
        "https://www.facebook.com/share/1JpX3qfg3T/",
        "https://maps.app.goo.gl/yC66naVpd1xchSg1A",
      ],
    },
    {
      "@type": "Organization",
      "@id": "https://www.zahraffamirarental.com/#organization",
      "name": "ZAHRAFFAMIRA Rental Mobil",
      "url": "https://www.zahraffamirarental.com",
      "logo": "https://www.zahraffamirarental.com/images/logo-cropped.png",
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+6285349166234",
        "contactType": "customer service",
        "areaServed": "ID",
        "availableLanguage": ["Indonesian", "Banjar"],
      },
      "sameAs": [
        "https://www.instagram.com/sewa_haice_commuter_gambut_bjm",
        "https://www.tiktok.com/@sewa_haice_commut",
        "https://www.facebook.com/share/1JpX3qfg3T/",
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://www.zahraffamirarental.com/#website",
      "url": "https://www.zahraffamirarental.com",
      "name": "ZAHRAFFAMIRA Rental Mobil",
      "publisher": {
        "@id": "https://www.zahraffamirarental.com/#organization",
      },
      "inLanguage": "id-ID",
    },
  ],
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(globalJsonLd) }}
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
