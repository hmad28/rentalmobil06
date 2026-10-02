import fs from 'node:fs';

const html = fs.readFileSync('deazrental_raw.html', 'utf-8');
const armadaStart = html.indexOf('id="armada"');
const pelayananStart = html.indexOf('PELAYANAN KAMI');
const armadaHtml = html.substring(armadaStart, pelayananStart);

// Let's find all <article> in armadaHtml
const articles = armadaHtml.split('<article');
console.log(`Found ${articles.length - 1} car articles.`);

const cars = [];
for (let i = 1; i < articles.length; i++) {
  const art = articles[i];
  const titleMatch = art.match(/<h3[^>]*>([\s\S]*?)<\/h3>/i);
  const imgMatch = art.match(/<img[^>]+src="([^"]+)"[^>]+alt="([^"]*)"/i);
  const waMatch = art.match(/<a[^>]+href="([^"]+)"/i);
  
  cars.push({
    title: titleMatch ? titleMatch[1].trim() : '',
    img: imgMatch ? imgMatch[1].replace('/_astro/', '/images/') : '',
    alt: imgMatch ? imgMatch[2] : '',
    waLink: waMatch ? waMatch[1] : ''
  });
}

console.log(JSON.stringify(cars, null, 2));
fs.writeFileSync('src/data/cars.json', JSON.stringify(cars, null, 2));
