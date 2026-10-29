import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';

const outputDirectory = path.join(process.cwd(), 'out');
const readOutput = (file) => fs.readFileSync(path.join(outputDirectory, file), 'utf8');

const home = readOutput('index.html');
assert.match(home, /<html lang="ko"/, 'Home page must declare Korean as its primary language');
assert.ok(home.includes('https://www.saramkim.com/'), 'Home page must use the www canonical URL');
assert.ok(home.includes('https://www.saramkim.com/og.png'), 'Home page must expose the social preview image');
assert.ok(home.includes('영상에 필요한 도구'), 'Home page must contain the product-focused message');
assert.ok(home.includes('id="products"') && home.includes('id="help"'), 'Home must provide product and support anchors');
assert.ok(home.includes('href="/play-plus"') && home.includes('href="https://websubtitle.com"'), 'Home must link to both product destinations');
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
  assert.ok(home.includes(`href="/${route}"`), `Footer must link to ${route}`);
  assert.ok(sitemap.includes(`<loc>${url}</loc>`), `Sitemap must include ${route}`);
}
const backupHome = readOutput('worktrace.html');
const backupPolicy = readOutput(path.join('worktrace', 'privacy.html'));
assert.ok(backupHome.includes('href="/worktrace/privacy"'), 'Backup homepage must link to its privacy policy');
assert.ok(backupPolicy.includes('href="/worktrace"'), 'Backup policy must link to its homepage');

const requiredRoutes = [
  '', 'play-plus', 'about', 'projects', 'projects/play-plus', 'projects/websubtitle',
  'blog', 'blog/hello-world', 'blog/language-still-matters', 'blog/think-or-vanish',
  'play-plus/privacy', 'relay', 'relay/privacy', 'worktrace', 'worktrace/privacy',
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
for (const route of ['play-plus/guide', 'play-plus/updates', 'play-plus/updates/2.0']) {
  assert.ok(!fs.existsSync(path.join(outputDirectory, `${route}.html`)), `Unreleased content must not be exported: ${route}`);
  assert.ok(!sitemap.includes(`https://www.saramkim.com/${route}`), `Unreleased content must not appear in sitemap: ${route}`);
  assert.ok(!home.includes(`href="/${route}`) && !productHome.includes(`href="/${route}`), `Unfinished content must not be linked: ${route}`);
}
for (const route of ['relay', 'relay/privacy']) {
  const page = readOutput(`${route}.html`);
  const counterpart = route === 'relay' ? '/relay/privacy' : '/relay';
  assert.ok(page.includes(`href="${counterpart}"`), `${route} must retain its related app/policy link`);
}
assert.ok(feedbackPolicy.includes('id="online-subtitles"') && feedbackPolicy.includes('id="online-subtitles-en"'), 'Play Plus policy must preserve online-subtitle anchors');
assert.ok(feedbackPolicy.includes('OpenSubtitles'), 'Play Plus policy must preserve its existing disclosure');

console.log('Static export verification passed.');
