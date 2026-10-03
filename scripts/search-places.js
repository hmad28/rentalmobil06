async function searchPlaces() {
  const query = encodeURIComponent('Zahraffa Rental Mobil');
  const url = 'https://www.google.com/maps/search/' + query;
  const res = await fetch(url, {
    headers: {
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36',
      'Accept-Language': 'id-ID,id;q=0.9,en-US;q=0.8,en;q=0.7'
    }
  });
  const html = await res.text();
  console.log('Search response len:', html.length);
  const regex = /\/maps\/place\/([^/"]+)/g;
  const matches = [];
  let m;
  while ((m = regex.exec(html)) !== null) {
    matches.push(decodeURIComponent(m[1]));
  }
  console.log('Places found:', [...new Set(matches)]);
}
searchPlaces();
