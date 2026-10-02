import fs from 'node:fs';
import path from 'node:path';
import https from 'node:https';

const urls = [
  'https://deazrental.com/sewa-mobil-banjarmasin',
  'https://deazrental.com/sewa-mobil-banjarbaru',
  'https://deazrental.com/tentang-kami',
  'https://deazrental.com/pembayaran',
  'https://deazrental.com/kerjasama-kemitraan',
  'https://deazrental.com/kontak',
  'https://deazrental.com/testimoni',
  'https://deazrental.com/blog',
  'https://deazrental.com/layanan/lepas-kunci',
  'https://deazrental.com/layanan/antar-jemput-bandara'
];

const publicImagesDir = path.resolve('public/images');
const subpagesDir = path.resolve('docs/subpages');
if (!fs.existsSync(subpagesDir)) fs.mkdirSync(subpagesDir, { recursive: true });

async function downloadFile(urlPath, filename) {
  const fullUrl = urlPath.startsWith('http') ? urlPath : `https://deazrental.com${urlPath}`;
  const dest = path.join(publicImagesDir, filename);
  if (fs.existsSync(dest)) return;

  return new Promise((resolve) => {
    https.get(fullUrl, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        https.get(res.headers.location, (redirectRes) => {
          const file = fs.createWriteStream(dest);
          redirectRes.pipe(file);
          file.on('finish', () => { file.close(); resolve(); });
        }).on('error', () => resolve());
        return;
      }
      if (res.statusCode !== 200) return resolve();
      const file = fs.createWriteStream(dest);
      res.pipe(file);
      file.on('finish', () => { file.close(); resolve(); });
    }).on('error', () => resolve());
  });
}

async function scrapeAll() {
  for (const url of urls) {
    const slug = url.replace('https://deazrental.com/', '').replace(/\//g, '_');
    console.log(`Fetching ${url}...`);
    try {
      const res = await fetch(url);
      const text = await res.text();
      fs.writeFileSync(path.join(subpagesDir, `${slug}.html`), text);

      const imgRegex = /src="(\/_astro\/[^"]+)"/g;
      let m;
      while ((m = imgRegex.exec(text)) !== null) {
        const imgUrl = m[1];
        const fn = path.basename(imgUrl);
        await downloadFile(imgUrl, fn);
      }
    } catch (e) {
      console.error(`Error on ${url}:`, e);
    }
  }
  console.log('All subpages fetched and assets downloaded.');
}

scrapeAll();
