import fs from 'node:fs';

const html = fs.readFileSync('deazrental_raw.html', 'utf-8');
const pStart = html.indexOf('PELAYANAN KAMI');
const whyStart = html.indexOf('Mengapa Memilih');
console.log('=== PELAYANAN + AREA ===');
console.log(html.substring(pStart - 100, whyStart));
