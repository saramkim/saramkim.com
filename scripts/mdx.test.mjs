import assert from 'node:assert/strict';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { after, test } from 'node:test';

const originalCwd = process.cwd();
const fixture = fs.mkdtempSync(path.join(os.tmpdir(), 'saramkim-mdx-'));
fs.mkdirSync(path.join(fixture, 'content/blog'), { recursive: true });
fs.mkdirSync(path.join(fixture, 'content/projects'), { recursive: true });
process.chdir(fixture);
const { getBlogPost, getBlogPosts, getProjectBySlug, getProjects } = await import('../lib/mdx.ts');
after(() => {
  process.chdir(originalCwd);
  fs.rmSync(fixture, { recursive: true, force: true });
});

function writeContent(kind, dates) {
  const fields = { title: 'Test', excerpt: 'Test excerpt', description: 'Test project', ...dates };
  fs.writeFileSync(path.join(fixture, 'content', kind, 'test.mdx'),
    `---\n${Object.entries(fields).map(([key, value]) => `${key}: ${JSON.stringify(value)}`).join('\n')}\n---\nTest body\n`);
}

test('all content date fields reject impossible days and malformed dates', () => {
  for (const value of ['2026-02-31', '2025-02-29', '2026-04-31', '2026-13-01', '2026-00-01', '2026-01-00', '2026-2-01', 'not-a-date']) {
    for (const field of ['date', 'updated']) {
      writeContent('blog', { date: '2024-02-29', [field]: value });
      assert.throws(() => getBlogPost('test'), /Invalid.*date/);
      assert.throws(getBlogPosts, /Invalid.*date/);
    }
    for (const field of ['updated', 'statsAsOf']) {
      writeContent('projects', { [field]: value });
      assert.throws(() => getProjectBySlug('test'), /Invalid.*date/);
      assert.throws(getProjects, /Invalid.*date/);
    }
  }
});

test('valid leap days, ordinary dates, optional fields and missing content retain behavior', () => {
  for (const value of ['2024-02-29', '2000-02-29', '2026-02-28', '2026-04-30']) {
    writeContent('blog', { date: value, updated: value });
    assert.equal(getBlogPost('test').date, value);
    assert.equal(getBlogPosts()[0].updated, value);
    writeContent('projects', { updated: value, statsAsOf: value });
    assert.equal(getProjectBySlug('test').statsAsOf, value);
    assert.equal(getProjects()[0].updated, value);
  }
  writeContent('blog', { date: '2026-01-01' });
  writeContent('projects', {});
  assert.equal(getBlogPost('test').updated, undefined);
  assert.equal(getProjectBySlug('test').updated, undefined);
  assert.equal(getBlogPost('missing'), null);
  assert.equal(getProjectBySlug('missing'), null);
});
