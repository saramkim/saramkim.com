import { execFileSync } from 'node:child_process';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import sharp from 'sharp';

// Social preview images, all 1200x630. Run with `yarn og:generate` after changing a card or a cover source.
//  - scripts/og/*.html are rendered with the site's own fonts and colours by a local Chrome or Edge.
//  - Blog covers are cropped from the article's lead image so crawlers get a JPEG with known dimensions.
const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const width = 1200;
const height = 630;

const cards = [
  { source: 'scripts/og/default.html', output: 'public/og.png' },
  { source: 'scripts/og/play-plus.html', output: 'public/og/play-plus.png' },
];

// blog slug -> lead image to crop. Add a line here when a post gets its own preview.
const covers = {
  'beyond-the-answer': 'public/images/beyond-the-answer/blank-page.webp',
  'language-still-matters': 'public/images/language-still-matters/flowers.webp',
  'think-or-vanish': 'public/images/think-or-vanish/develop_post.webp',
};

function findBrowser() {
  const candidates = [
    process.env.CHROME_PATH,
    'C:/Program Files/Google/Chrome/Application/chrome.exe',
    'C:/Program Files (x86)/Google/Chrome/Application/chrome.exe',
    'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe',
    '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
    '/usr/bin/google-chrome',
    '/usr/bin/chromium',
  ];
  const found = candidates.find((candidate) => candidate && fs.existsSync(candidate));
  if (!found) {
    throw new Error('Chrome or Edge is required to render the cards. Set CHROME_PATH to its executable.');
  }
  return found;
}

async function render(browser, { source, output }) {
  const profile = fs.mkdtempSync(path.join(os.tmpdir(), 'saramkim-og-'));
  const raw = path.join(profile, 'card.png');
  try {
    execFileSync(browser, [
      '--headless=new',
      '--disable-gpu',
      '--hide-scrollbars',
      '--allow-file-access-from-files',
      '--force-device-scale-factor=1',
      `--user-data-dir=${profile}`,
      `--window-size=${width},${height}`,
      '--virtual-time-budget=4000',
      `--screenshot=${raw}`,
      pathToFileURL(path.join(root, source)).href,
    ], { stdio: 'ignore' });
    const target = path.join(root, output);
    fs.mkdirSync(path.dirname(target), { recursive: true });
    // Some headless builds add browser chrome to the window, so keep exactly the top-left card.
    await sharp(raw).extract({ left: 0, top: 0, width, height }).png({ compressionLevel: 9, palette: true, quality: 92 }).toFile(target);
    console.log(`Rendered ${output}`);
  } finally {
    fs.rmSync(profile, { recursive: true, force: true });
  }
}

const browser = findBrowser();
for (const card of cards) {
  await render(browser, card);
}

const coverDirectory = path.join(root, 'public', 'og', 'blog');
fs.mkdirSync(coverDirectory, { recursive: true });
for (const [slug, source] of Object.entries(covers)) {
  await sharp(path.join(root, source))
    .resize(width, height, { fit: 'cover', position: 'centre' })
    .jpeg({ quality: 84, mozjpeg: true })
    .toFile(path.join(coverDirectory, `${slug}.jpg`));
  console.log(`Cropped public/og/blog/${slug}.jpg`);
}
