import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

// Original outlined lettering based on the approved wordmark study. No font dependency.
// The icon reuses the wordmark's first glyph, including its diagonal terminals.
const s = 'M73 0 79 20 42 25C30 27 28 29 29 33C30 37 37 38 50 41C72 46 83 52 83 67C83 86 67 94 43 96L8 99 1 80 39 75C51 74 55 71 54 67C53 63 46 62 32 59C12 55 0 48 0 33C0 13 17 4 40 2Z';
const a = 'M9 6C22 1 36 0 49 0C77 0 91 13 91 40V96H63V86C56 94 45 98 32 98C12 98 0 87 0 70C0 49 17 38 42 38C50 38 57 39 63 42V39C63 27 56 23 43 23C31 23 19 25 5 30ZM63 61C58 58 51 57 44 57C33 57 27 61 27 68C27 74 33 78 41 78C53 78 63 72 63 64Z';
const r = 'M0 2H28V15C36 5 46 0 61 0V27C40 25 29 34 29 52V96H0Z';
const m = 'M0 2H28V13C35 4 44 0 55 0C68 0 77 5 82 15C90 5 100 0 112 0C133 0 145 13 145 37V96H116V44C116 30 113 25 104 25C94 25 90 32 90 44V96H61V44C61 30 57 25 49 25C39 25 29 32 29 44V96H0Z';
const k = 'M0 6 29 0V73L59 40H94L55 83 97 136H62L29 94V136H0Z';
const i = 'M0 5 29 0V25L0 30ZM0 40H29V136H0Z';
const glyph = (d, x, y = 40) => `<path transform="translate(${x} ${y})" d="${d}"/>`;
const letters = glyph(s, 0, 38) + glyph(a, 88) + glyph(r, 189) + glyph(a, 259) + glyph(m, 360) + glyph(k, 516, 0) + glyph(i, 623, 0) + glyph(m, 662);
const svg = (width, height, content) => `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">${content}</svg>\n`;
const wordmark = svg(807, 138, `<g fill="#111111" fill-rule="evenodd">${letters}</g>`);
const icon = svg(128, 128, `<rect width="128" height="128" rx="27" fill="#111111"/><path transform="translate(32 26) scale(.77)" fill="#ffffff" d="${s}"/>`);
// Apple applies its own mask; supply an opaque, full-bleed tile.
const apple = icon.replace('rx="27"', 'rx="0"');
const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const brand = path.join(root, 'public', 'brand');
await fs.mkdir(brand, { recursive: true });
await fs.writeFile(path.join(brand, 'wordmark.svg'), wordmark);
await fs.writeFile(path.join(brand, 'icon.svg'), icon);
await sharp(Buffer.from(icon)).resize(512, 512).png().toFile(path.join(root, 'app', 'icon.png'));
await sharp(Buffer.from(apple)).resize(180, 180).png().toFile(path.join(root, 'app', 'apple-icon.png'));

// ICO directory with PNG frames for standard browser tab / Windows sizes.
const sizes = [16, 32, 48];
const frames = await Promise.all(sizes.map(size => sharp(Buffer.from(icon)).resize(size, size).png().toBuffer()));
const directory = Buffer.alloc(6 + sizes.length * 16);
directory.writeUInt16LE(1, 2);
directory.writeUInt16LE(sizes.length, 4);
let offset = directory.length;
frames.forEach((frame, index) => {
  const entry = 6 + index * 16;
  directory[entry] = sizes[index];
  directory[entry + 1] = sizes[index];
  directory.writeUInt16LE(1, entry + 4);
  directory.writeUInt16LE(32, entry + 6);
  directory.writeUInt32LE(frame.length, entry + 8);
  directory.writeUInt32LE(offset, entry + 12);
  offset += frame.length;
});
await fs.writeFile(path.join(root, 'app', 'favicon.ico'), Buffer.concat([directory, ...frames]));
console.log('Generated wordmark, icon SVG, 512px PNG, 180px Apple icon and 16/32/48px ICO.');
