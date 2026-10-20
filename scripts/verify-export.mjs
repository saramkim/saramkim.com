import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';

const outputDirectory = path.join(process.cwd(), 'out');
const readOutput = (file) => fs.readFileSync(path.join(outputDirectory, file), 'utf8');

const home = readOutput('index.html');
assert.match(home, /<html lang="ko"/, 'Home page must declare Korean as its primary language');
assert.ok(home.includes('https://www.saramkim.com/'), 'Home page must use the www canonical URL');
assert.ok(home.includes('https://www.saramkim.com/og.png'), 'Home page must expose the social preview image');
assert.ok(home.includes('복잡한 문제를'), 'Home page must contain the primary product message');

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
assert.ok(project.includes('5,000'), 'Project must include the current user count');

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

console.log('Static export verification passed.');
