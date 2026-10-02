import fs from 'node:fs';
import path from 'node:path';

const publicImages = fs.readdirSync('public/images');
const cars = JSON.parse(fs.readFileSync('src/data/cars.json', 'utf-8'));

let missing = 0;
for (const car of cars) {
  const filename = path.basename(car.img);
  if (!publicImages.includes(filename)) {
    console.error(`MISSING CAR IMAGE: ${filename}`);
    missing++;
  }
}

for (let i = 1; i <= 15; i++) {
  const found = publicImages.some(f => f.startsWith(`${i}.`));
  if (!found) {
    console.error(`MISSING GALLERY IMAGE: ${i}`);
    missing++;
  }
}

const keyImages = [
  'logo_26SpOd.webp',
  'hero-image_UQlab.webp',
  'owner-deaz-rental_Z1iYmhF.webp',
  '15_Z1IyzQ1.webp',
  'favicon.png'
];

for (const img of keyImages) {
  if (!publicImages.includes(img)) {
    console.error(`MISSING KEY IMAGE: ${img}`);
    missing++;
  }
}

if (missing === 0) {
  console.log('ALL ASSETS VERIFIED 100%! No missing images.');
} else {
  console.error(`Total missing assets: ${missing}`);
}
