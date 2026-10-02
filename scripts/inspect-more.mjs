import fs from 'node:fs';

const html = fs.readFileSync('deazrental_raw.html', 'utf-8');

// Print Hero section
const headerEnd = html.indexOf('</header>');
const heroEnd = html.indexOf('Armada Rental Mobil');
console.log('=== HERO SECTION ===');
console.log(html.substring(headerEnd + 9, heroEnd).substring(0, 2000));

// Print Area Layanan Kami
const areaStart = html.indexOf('Area Layanan Kami');
const areaEnd = html.indexOf('Mengapa Memilih');
console.log('\n=== AREA LAYANAN ===');
console.log(html.substring(areaStart - 100, areaEnd));

// Print Galeri
const galeriStart = html.indexOf('Galeri kami');
const galeriEnd = html.indexOf('<footer');
console.log('\n=== GALERI KAMI ===');
console.log(html.substring(galeriStart - 100, galeriEnd));

// Print Floating buttons / scripts
console.log('\n=== BOTTOM OF BODY ===');
console.log(html.substring(galeriEnd));
