import fs from 'node:fs';

const html = fs.readFileSync('deazrental_raw.html', 'utf-8');
const whyStart = html.indexOf('Mengapa Memilih');
const footerStart = html.indexOf('<footer');
console.log('=== WHY CHOOSE US + GALERI ===');
console.log(html.substring(whyStart - 100, footerStart));
