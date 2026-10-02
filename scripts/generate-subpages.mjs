import fs from 'node:fs';
import path from 'node:path';

const pages = [
  {
    slug: 'sewa-mobil-banjarmasin',
    file: 'sewa-mobil-banjarmasin.main.html',
    dest: 'src/app/sewa-mobil-banjarmasin/page.tsx',
    title: 'Rental Mobil Banjarmasin & Sewa Murah ✅ Lepas Kunci 24 Jam',
    description: 'Sewa & Rental Mobil Banjarmasin murah terpercaya. Unit Avanza, Innova, Hiace, Fortuner, Alphard lepas kunci atau dengan supir 24 jam.'
  },
  {
    slug: 'sewa-mobil-banjarbaru',
    file: 'sewa-mobil-banjarbaru.main.html',
    dest: 'src/app/sewa-mobil-banjarbaru/page.tsx',
    title: 'Rental Mobil Banjarbaru & Sewa Murah ✅ Bandara 24 Jam',
    description: 'Rental dan sewa mobil di Banjarbaru dekat Bandara Syamsudin Noor. Harga murah, unit terawat, lepas kunci atau driver ramah.'
  },
  {
    slug: 'tentang-kami',
    file: 'tentang-kami.main.html',
    dest: 'src/app/tentang-kami/page.tsx',
    title: 'Tentang Kami - Deaz Rental Mobil Banjarmasin',
    description: 'Profil Deaz Rental Mobil Banjarmasin dan Banjarbaru. Penyedia jasa transportasi sewa mobil terpercaya dengan komitmen pelayanan prima.'
  },
  {
    slug: 'pembayaran',
    file: 'pembayaran.main.html',
    dest: 'src/app/pembayaran/page.tsx',
    title: 'Metode Pembayaran - Deaz Rental Mobil Banjarmasin',
    description: 'Informasi rekening bank resmi dan tata cara pembayaran sewa rental mobil di Deaz Rental Mobil Banjarmasin.'
  },
  {
    slug: 'kerjasama-kemitraan',
    file: 'kerjasama-kemitraan.main.html',
    dest: 'src/app/kerjasama-kemitraan/page.tsx',
    title: 'Kerjasama Kemitraan - Deaz Rental Mobil Banjarmasin',
    description: 'Peluang kerjasama dan kemitraan rental mobil untuk instansi, korporasi, serta pemilik kendaraan di Banjarmasin.'
  },
  {
    slug: 'kontak',
    file: 'kontak.main.html',
    dest: 'src/app/kontak/page.tsx',
    title: 'Hubungi Kami - Deaz Rental Mobil Banjarmasin',
    description: 'Hubungi Deaz Rental Mobil Banjarmasin untuk konsultasi, reservasi, dan sewa armada 24 jam via WhatsApp dan telepon.'
  },
  {
    slug: 'testimoni',
    file: 'testimoni.main.html',
    dest: 'src/app/testimoni/page.tsx',
    title: 'Testimoni Pelanggan - Deaz Rental Mobil Banjarmasin',
    description: 'Ulasan dan testimoni pengalaman nyata pelanggan yang menyewa mobil di Deaz Rental Mobil Banjarmasin dan Banjarbaru.'
  },
  {
    slug: 'blog',
    file: 'blog.main.html',
    dest: 'src/app/blog/page.tsx',
    title: 'Blog & Panduan Wisata Kalimantan Selatan - Deaz Rental',
    description: 'Artikel tips perjalanan, info wisata Banjarmasin, panduan rental mobil, dan kuliner khas Kalimantan Selatan.'
  },
  {
    slug: 'layanan/lepas-kunci',
    file: 'layanan_lepas-kunci.main.html',
    dest: 'src/app/layanan/lepas-kunci/page.tsx',
    title: 'Sewa Mobil Lepas Kunci Banjarmasin & Banjarbaru - Deaz Rental',
    description: 'Layanan sewa mobil lepas kunci murah dan mudah di Banjarmasin dan Banjarbaru. Syarat mudah dan proses cepat.'
  },
  {
    slug: 'layanan/antar-jemput-bandara',
    file: 'layanan_antar-jemput-bandara.main.html',
    dest: 'src/app/layanan/antar-jemput-bandara/page.tsx',
    title: 'Antar Jemput Bandara Syamsudin Noor Banjarbaru - Deaz Rental',
    description: 'Layanan antar jemput drop off bandara Syamsudin Noor ke Banjarmasin, Banjarbaru, Martapura tepat waktu 24 jam.'
  }
];

for (const p of pages) {
  const srcHtmlPath = path.join('docs/subpages', p.file);
  if (!fs.existsSync(srcHtmlPath)) {
    console.warn(`File ${srcHtmlPath} does not exist!`);
    continue;
  }
  const rawHtml = fs.readFileSync(srcHtmlPath, 'utf-8');
  
  // Make sure dest directory exists
  const destDir = path.dirname(p.dest);
  if (!fs.existsSync(destDir)) {
    fs.mkdirSync(destDir, { recursive: true });
  }

  // Escape backticks in html if any
  const escapedHtml = rawHtml.replace(/`/g, '\\`').replace(/\${/g, '\\${');

  const pageContent = `import type { Metadata } from "next";

export const metadata: Metadata = {
  title: ${JSON.stringify(p.title)},
  description: ${JSON.stringify(p.description)},
};

const rawHtml = \`${escapedHtml}\`;

export default function Page() {
  return <div dangerouslySetInnerHTML={{ __html: rawHtml }} />;
}
`;

  fs.writeFileSync(p.dest, pageContent);
  console.log(`Generated ${p.dest}`);
}
