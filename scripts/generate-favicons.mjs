import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

function createIco(images) {
  const count = images.length;
  const headerLen = 6;
  const dirEntryLen = 16;
  let offset = headerLen + dirEntryLen * count;

  const header = Buffer.alloc(headerLen);
  header.writeUInt16LE(0, 0); // reserved
  header.writeUInt16LE(1, 2); // type 1 = ICO
  header.writeUInt16LE(count, 4); // count

  const dirEntries = [];
  for (const img of images) {
    const entry = Buffer.alloc(dirEntryLen);
    entry.writeUInt8(img.width >= 256 ? 0 : img.width, 0);
    entry.writeUInt8(img.height >= 256 ? 0 : img.height, 1);
    entry.writeUInt8(0, 2); // color count
    entry.writeUInt8(0, 3); // reserved
    entry.writeUInt16LE(1, 4); // color planes
    entry.writeUInt16LE(32, 6); // bits per pixel
    entry.writeUInt32LE(img.buffer.length, 8); // size of image data
    entry.writeUInt32LE(offset, 12); // offset
    dirEntries.push(entry);
    offset += img.buffer.length;
  }

  return Buffer.concat([header, ...dirEntries, ...images.map((img) => img.buffer)]);
}

async function main() {
  const masterPath = path.resolve('public/favicon.png');
  if (!fs.existsSync(masterPath)) {
    throw new Error('Master favicon not found at ' + masterPath);
  }
  const masterBuf = fs.readFileSync(masterPath);
  console.log('Read master favicon from public/favicon.png:', masterBuf.length, 'bytes');

  // Generate PNG sizes
  const size16 = await sharp(masterBuf).resize(16, 16, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } }).png().toBuffer();
  const size32 = await sharp(masterBuf).resize(32, 32, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } }).png().toBuffer();
  const size48 = await sharp(masterBuf).resize(48, 48, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } }).png().toBuffer();
  const size96 = await sharp(masterBuf).resize(96, 96, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } }).png().toBuffer();
  const size180 = await sharp(masterBuf).resize(180, 180, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } }).png().toBuffer();
  const size192 = await sharp(masterBuf).resize(192, 192, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } }).png().toBuffer();
  const size512 = await sharp(masterBuf).resize(512, 512, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } }).png().toBuffer();

  // Multi-resolution ICO (16, 32, 48, 128)
  const icoBuffer = createIco([
    { width: 16, height: 16, buffer: size16 },
    { width: 32, height: 32, buffer: size32 },
    { width: 48, height: 48, buffer: size48 },
    { width: 128, height: 128, buffer: masterBuf },
  ]);

  // Write all icons
  fs.writeFileSync('public/favicon.ico', icoBuffer);
  fs.writeFileSync('src/app/favicon.ico', icoBuffer);
  console.log('Updated public/favicon.ico and src/app/favicon.ico (Multi-size ICO):', icoBuffer.length, 'bytes');

  fs.writeFileSync('public/favicon-48x48.png', size48);
  fs.writeFileSync('public/favicon-96x96.png', size96);
  fs.writeFileSync('public/apple-touch-icon.png', size180);
  fs.writeFileSync('public/apple-touch-icon-precomposed.png', size180);
  fs.writeFileSync('public/icon.png', size192);
  fs.writeFileSync('public/icon-512.png', size512);
  fs.writeFileSync('public/images/favicon.png', masterBuf); // Overwrite old 10424 bytes file!
  fs.writeFileSync('public/seo/favicon.png', masterBuf);
  fs.writeFileSync('public/seo/apple-touch-icon.png', size180);

  console.log('All favicon variants generated successfully from public/favicon.png!');
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
