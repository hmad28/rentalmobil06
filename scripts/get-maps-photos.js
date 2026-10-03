const fs = require('fs');

async function getPhotos() {
  const pbs = [
    '!1e2!2e10!3e2!4m2!1s0x2de427cedb877d03%3A0xc4decb64c249efb9!6m3!1s!7e81!15i11050',
    '!1e2!2e10!3e2!4m2!1s14185999509880434617!6m3!1s!7e81!15i11050',
    '!1e3!2e10!3e2!4m2!1s0x2de427cedb877d03%3A0xc4decb64c249efb9!6m3!1s!7e81!15i11050',
    '!1e2!2e2!3m2!1i100!2i100!4m2!1s0x2de427cedb877d03%3A0xc4decb64c249efb9',
    '!1e3!2e2!3m2!1i100!2i100!4m2!1s0x2de427cedb877d03%3A0xc4decb64c249efb9'
  ];

  for (let i = 0; i < pbs.length; i++) {
    const url = `https://www.google.com/maps/preview/photo/listdata?authuser=0&hl=id&gl=id&pb=${pbs[i]}`;
    try {
      const res = await fetch(url, {
        headers: {
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36',
          'Referer': 'https://www.google.com/'
        }
      });
      const text = await res.text();
      console.log(`pb[${i}] status:`, res.status, 'len:', text.length);
      if (text.length > 500) {
        fs.writeFileSync(`scripts/photos_response_${i}.txt`, text, 'utf-8');
        const urls = [...new Set(text.match(/https:\/\/[a-zA-Z0-9\.\-_]+\.googleusercontent\.com\/[a-zA-Z0-9\-_=]+/g) || [])];
        console.log(`pb[${i}] found images:`, urls.length);
        urls.forEach(u => console.log('  ', u));
      }
    } catch (e) {
      console.error(`pb[${i}] error:`, e.message);
    }
  }
}

getPhotos();
