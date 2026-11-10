import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';

const outputDirectory = path.join(process.cwd(), 'out');
const readOutput = (file) => fs.readFileSync(path.join(outputDirectory, file), 'utf8');

const home = readOutput('index.html');
assert.match(home, /<html lang="ko"/, 'Home page must declare Korean as its primary language');
assert.ok(home.includes('https://www.saramkim.com/'), 'Home page must use the www canonical URL');
assert.ok(home.includes('https://www.saramkim.com/og.png'), 'Home page must expose the social preview image');
assert.ok(home.includes('자막만 내 방식대로'), 'Home page must contain the product-focused message');
assert.ok(home.includes('id="products"') && home.includes('id="help"'), 'Home must provide product and support anchors');
assert.ok(home.includes('href="/play-plus"') && home.includes('href="https://websubtitle.com/ko"'), 'Home must link to both product destinations');
assert.ok(!home.includes('5,000') && !home.includes('44 ratings'), 'Home must not advertise historical statistics as current');

const blogPost = readOutput(path.join('blog', 'language-still-matters.html'));
assert.ok(blogPost.includes('Language Still Matters | saramkim'), 'Blog post must have a page-specific title');
assert.ok(
  blogPost.includes('https://www.saramkim.com/blog/language-still-matters'),
  'Blog post must have a page-specific canonical URL',
);
assert.ok(blogPost.includes('article'), 'Blog post must expose article Open Graph metadata');
assert.ok(blogPost.includes('width="1024" height="1024"'), 'Article image must include intrinsic dimensions');
assert.ok(blogPost.includes('loading="lazy"'), 'Article image must be lazy-loaded');

const project = readOutput(path.join('projects', 'play-plus.html'));
assert.ok(project.includes('Play Plus | saramkim'), 'Project must have a page-specific title');
assert.ok(project.includes('5,000'), 'Case study must preserve its historical user count');
assert.ok(project.replaceAll(/<!--.*?-->/g, '').includes('2026년 7월 29일 기준의 기록'), 'Case study must date historical statistics');
assert.ok(project.includes('href="/play-plus"'), 'Case study must lead users to the product page');

const sitemap = readOutput('sitemap.xml');
assert.ok(sitemap.includes('<loc>https://www.saramkim.com'), 'Sitemap must use the canonical www host');
assert.ok(!sitemap.includes('<loc>https://saramkim.com'), 'Sitemap must not emit the redirecting apex host');

const robots = readOutput('robots.txt');
assert.ok(robots.includes('Sitemap: https://www.saramkim.com/sitemap.xml'), 'robots.txt must reference the canonical sitemap');

const optimizedImage = path.join(outputDirectory, 'images', 'language-still-matters', 'flowers.webp');
assert.ok(fs.statSync(optimizedImage).size < 250_000, 'The primary article image must remain below 250 KB');
assert.ok(!fs.existsSync(path.join(outputDirectory, 'og-image.png')), 'Legacy social image must not be exported');

const feedbackPolicy = readOutput(path.join('play-plus', 'privacy.html'));
assert.ok(feedbackPolicy.includes('https://www.saramkim.com/play-plus/privacy'), 'Feedback policy must use its own canonical URL');
assert.ok(feedbackPolicy.includes('id="korean"') && feedbackPolicy.includes('id="english"'), 'Feedback policy must provide both languages');
assert.ok(feedbackPolicy.includes('김유준') && feedbackPolicy.includes('mailto:saramkimm@gmail.com'), 'Feedback policy must identify the approved operator and contact');
assert.ok(feedbackPolicy.includes('90일') && feedbackPolicy.includes('seven additional days'), 'Feedback policy must explain live and recovery retention');
assert.ok(sitemap.includes('https://www.saramkim.com/play-plus/privacy'), 'Sitemap must include the feedback policy');
assert.ok(home.includes('href="/play-plus/privacy"'), 'Footer must link to the feedback policy');

for (const route of ['worktrace', 'worktrace/privacy']) {
  const page = readOutput(`${route}.html`);
  const url = `https://www.saramkim.com/${route}`;
  assert.ok(page.includes(`<link rel="canonical" href="${url}"`), `${route} must use its own canonical URL`);
  assert.ok(page.includes(`<meta property="og:url" content="${url}"`), `${route} must use its own Open Graph URL`);
  assert.ok(page.includes('id="korean" lang="ko"') && page.includes('id="english" lang="en"'), `${route} must provide both languages`);
  assert.ok(page.includes('김유준') && page.includes('mailto:saramkimm@gmail.com'), `${route} must identify the operator and contact`);
  assert.ok(sitemap.includes(`<loc>${url}</loc>`), `Sitemap must include ${route}`);
}
const backupHome = readOutput('worktrace.html');
assert.ok(home.includes('href="/worktrace"'), 'Footer must retain access to the personal app information');
const backupPolicy = readOutput(path.join('worktrace', 'privacy.html'));
assert.ok(backupHome.includes('href="/worktrace/privacy"'), 'Backup homepage must link to its privacy policy');
assert.ok(backupPolicy.includes('href="/worktrace"'), 'Backup policy must link to its homepage');

const requiredRoutes = [
  '', 'play-plus', 'about', 'projects', 'projects/play-plus', 'projects/websubtitle',
  'blog', 'blog/hello-world', 'blog/language-still-matters', 'blog/think-or-vanish',
  'play-plus/privacy', 'play-plus/guide', 'play-plus/updates/2.0', 'worktrace', 'worktrace/privacy',
];
for (const route of requiredRoutes) {
  const html = readOutput(route ? `${route}.html` : 'index.html');
  const canonical = `https://www.saramkim.com${route ? `/${route}` : ''}`;
  assert.ok(html.includes(`<link rel="canonical" href="${canonical}"`), `${route || 'Home'} must retain its canonical`);
  assert.ok(sitemap.includes(`<loc>${canonical.replace(/\/$/, '')}</loc>`) || sitemap.includes(`<loc>${canonical}</loc>`), `${route || 'Home'} must appear in sitemap`);
  assert.ok(html.includes('id="main-content"'), `${route || 'Home'} must retain the skip-link destination`);
  for (const [, href] of html.matchAll(/<a\b[^>]*\bhref="([^"]+)"/g)) {
    if (!href.startsWith('/') && !href.startsWith('#')) continue;
    const url = new URL(href.replaceAll('&amp;', '&'), `https://www.saramkim.com/${route}`);
    if (url.hostname !== 'www.saramkim.com') continue;
    const pathname = decodeURIComponent(url.pathname).replace(/\/$/, '');
    const file = pathname ? `${pathname.slice(1)}.html` : 'index.html';
    assert.ok(fs.existsSync(path.join(outputDirectory, file)), `${route || 'Home'} links to a missing route: ${href}`);
    if (url.hash) {
      const target = readOutput(file);
      assert.ok(target.includes(`id="${decodeURIComponent(url.hash.slice(1))}"`), `${route || 'Home'} links to a missing anchor: ${href}`);
    }
  }
}

const productHome = readOutput('play-plus.html');
assert.ok(productHome.includes('id="support"') && productHome.includes('id="features"'), 'Product page must provide its section destinations');
assert.ok(productHome.includes('href="/projects/play-plus"'), 'Product page must retain access to the case study');
assert.ok(productHome.includes('href="/play-plus/privacy"'), 'Product page must link to its existing privacy policy');
// Guide pages must be exported, linked, and indexable in the default build.
const guideRoutes = ['play-plus/guide', 'play-plus/updates/2.0'];
const [guidePage, updatePage] = guideRoutes.map((route) => readOutput(route + '.html'));
for (const route of guideRoutes) {
  const page = readOutput(route + '.html');
  assert.ok(productHome.includes('href="/' + route + '"'), 'Product page must link to ' + route);
  assert.doesNotMatch(page, /<meta[^>]+(?:noindex|nofollow|noimageindex)/i, 'Public guide must allow indexing: ' + route);
  assert.ok(!page.includes('data-capture-pending'), 'Public guide must have all captures: ' + route);
  assert.ok(!page.includes('검색엔진 비공개'), 'Public guide must not claim to be private: ' + route);
}
assert.ok(guidePage.includes('href="/play-plus/updates/2.0"'), 'Guide must link to the update notes');
assert.ok(updatePage.includes('href="/play-plus/guide"'), 'Update notes must link to the guide');
assert.ok(!fs.existsSync(path.join(outputDirectory, 'play-plus', 'updates.html')), 'No version index page exists yet');
for (const route of ['relay', 'relay/privacy']) {
  assert.ok(!fs.existsSync(path.join(outputDirectory, `${route}.html`)), `Retired page must not be exported: ${route}`);
  assert.ok(!sitemap.includes(`<loc>https://www.saramkim.com/${route}</loc>`), `Retired page must not appear in sitemap: ${route}`);
}
assert.ok(feedbackPolicy.includes('id="online-subtitles"') && feedbackPolicy.includes('id="online-subtitles-en"'), 'Play Plus policy must preserve online-subtitle anchors');
assert.ok(feedbackPolicy.includes('OpenSubtitles'), 'Play Plus policy must preserve its existing disclosure');

// Link previews: Next.js replaces a layout's openGraph/twitter objects wholesale when a page sets its own, so every
// page is checked for the image, its size and the large card. The image must exist and really be 1200x630 PNG/JPEG
// (WebP is unreliable in Kakao and some other crawlers).
function imageSize(file) {
  const bytes = fs.readFileSync(file);
  if (bytes.subarray(1, 4).toString('latin1') === 'PNG') {
    return { type: 'png', width: bytes.readUInt32BE(16), height: bytes.readUInt32BE(20) };
  }
  if (bytes[0] === 0xff && bytes[1] === 0xd8) {
    let offset = 2;
    while (offset + 9 < bytes.length) {
      if (bytes[offset] !== 0xff) { offset += 1; continue; }
      const marker = bytes[offset + 1];
      if (marker >= 0xc0 && marker <= 0xcf && ![0xc4, 0xc8, 0xcc].includes(marker)) {
        return { type: 'jpeg', width: bytes.readUInt16BE(offset + 7), height: bytes.readUInt16BE(offset + 5) };
      }
      offset += 2 + bytes.readUInt16BE(offset + 2);
    }
  }
  return { type: 'unknown', width: 0, height: 0 };
}
const exportedPages = [];
const collectPages = (directory) => {
  for (const entry of fs.readdirSync(directory, { withFileTypes: true })) {
    const full = path.join(directory, entry.name);
    if (entry.isDirectory()) {
      if (!['_next', '_not-found'].includes(entry.name)) collectPages(full);
    } else if (entry.name.endsWith('.html') && entry.name !== '404.html' && entry.name !== '_not-found.html') {
      exportedPages.push(path.relative(outputDirectory, full));
    }
  }
};
collectPages(outputDirectory);
assert.ok(exportedPages.length >= requiredRoutes.length, 'Social preview check must cover every exported page');
const metaContent = (html, attribute, name) =>
  html.match(new RegExp(`<meta ${attribute}="${name}" content="([^"]*)"`))?.[1];
for (const page of exportedPages) {
  const html = readOutput(page);
  const image = metaContent(html, 'property', 'og:image');
  assert.ok(image?.startsWith('https://www.saramkim.com/'), `${page} must set an absolute og:image`);
  assert.equal(metaContent(html, 'property', 'og:image:width'), '1200', `${page} must declare og:image width`);
  assert.equal(metaContent(html, 'property', 'og:image:height'), '630', `${page} must declare og:image height`);
  assert.equal(metaContent(html, 'name', 'twitter:card'), 'summary_large_image', `${page} must use the large Twitter card`);
  assert.equal(metaContent(html, 'name', 'twitter:image'), image, `${page} must reuse og:image for Twitter`);
  assert.ok(metaContent(html, 'property', 'og:site_name'), `${page} must keep og:site_name`);
  const file = path.join(outputDirectory, new URL(image).pathname);
  assert.ok(fs.existsSync(file), `${page} og:image is missing from the export: ${image}`);
  const size = imageSize(file);
  assert.ok(['png', 'jpeg'].includes(size.type), `${page} og:image must be PNG or JPEG: ${image}`);
  assert.deepEqual([size.width, size.height], [1200, 630], `${page} og:image must be 1200x630: ${image}`);
  assert.ok(fs.statSync(file).size < 400_000, `${page} og:image should stay under 400 KB: ${image}`);
}
assert.ok(productHome.includes('https://www.saramkim.com/og/play-plus.png'), 'Play Plus page must use its own preview image');

console.log('Static export verification passed.');
