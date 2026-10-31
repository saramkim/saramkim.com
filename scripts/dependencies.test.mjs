import assert from 'node:assert/strict';
import fs from 'node:fs';
import { createRequire } from 'node:module';
import { test } from 'node:test';

const require = createRequire(import.meta.url);
const fromEslint = createRequire(require.resolve('eslint'));
const fromImportPlugin = createRequire(require.resolve('eslint-plugin-import'));
const modern = fromEslint('minimatch');
const legacy = fromImportPlugin('minimatch');

test('the minimatch advisory exception is confined to the unaffected legacy implementation', () => {
  const lock = fs.readFileSync(new URL('../yarn.lock', import.meta.url), 'utf8');
  const versions = [...lock.matchAll(/resolution: "minimatch@npm:([^"]+)"/g)].map(match => match[1]);
  assert.deepEqual(new Set(versions), new Set(['3.1.5', '11.0.3']));
  const source = fs.readFileSync(fromImportPlugin.resolve('minimatch'), 'utf8');
  assert.doesNotMatch(source, /firstPhasePreProcess|secondPhasePreProcess|optimizationLevel/);
  assert.equal(typeof legacy, 'function');
  assert.equal(legacy('app/blog/page.tsx', '**/*.{ts,tsx}'), true);
  assert.equal(legacy('app/blog/page.css', '**/*.{ts,tsx}'), false);
});

test('modern minimatch bounds glob amplification and preserves normal matches', () => {
  const pattern = Array(30).fill('**/../a/b').join('/');
  const matcher = new modern.Minimatch(pattern, { optimizationLevel: 2, braceExpandMax: 64 });
  assert.equal(matcher.set.length, 64);
  const large = new modern.Minimatch('{x,*}/{0..999}', { optimizationLevel: 2 });
  assert.equal(large.set.length, 2000);
  assert.equal(large.match('x/5'), true);
  assert.equal(large.match('y/999'), true);
  assert.equal(large.match('.y/5'), false);
  assert.equal(modern.minimatch('app/blog/page.tsx', '**/*.tsx', { dot: true }), true);
});

test('MDX code languages cannot add classes via encoded spaces or tabs', async () => {
  const { serialize } = await import('next-mdx-remote/serialize');
  for (const language of ['js&#x20;injected', 'js&#x9;injected', 'js']) {
    const result = await serialize('```' + language + '\nconst value = 1;\n```');
    assert.match(result.compiledSource, /language-js/);
    assert.doesNotMatch(result.compiledSource, /injected/);
    assert.match(result.compiledSource, /const value = 1/);
  }
});

test('ESLint 10 retains React, accessibility, import and TypeScript diagnostics', async () => {
  const { ESLint } = await import('eslint');
  const eslint = new ESLint();
  const [result] = await eslint.lintText(
    'import { useState } from "react";\nimport { useState as again } from "react";\nexport default function Example() { return <><img src="/x.png" /><div>{[1].map(x => <span>{x}</span>)}</div></>; }',
    { filePath: 'app/dependency-fixture.tsx' },
  );
  const rules = new Set(result.messages.map(message => message.ruleId));
  const [anonymousExport] = await eslint.lintText('export default {};', { filePath: 'lib/dependency-fixture.ts' });
  for (const message of anonymousExport.messages) rules.add(message.ruleId);
  for (const rule of ['react/jsx-key', 'jsx-a11y/alt-text', 'import/no-anonymous-default-export', '@typescript-eslint/no-unused-vars']) {
    assert.ok(rules.has(rule), `Missing diagnostic: ${rule}`);
  }
});
