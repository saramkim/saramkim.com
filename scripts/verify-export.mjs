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

console.log('Static export verification passed.');
