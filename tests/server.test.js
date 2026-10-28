import assert from 'node:assert/strict';
import path from 'node:path';
import { test } from 'node:test';
import { fileURLToPath } from 'node:url';
import { safeResolve } from '../server.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const baseDir = path.resolve(__dirname, '../wh-arcade/standalone');

test('safeResolve permits valid relative filenames within baseDir', () => {
  const result = safeResolve(baseDir, 'red-scare.html');
  assert.equal(result, path.join(baseDir, 'red-scare.html'));

  const urlEncoded = safeResolve(baseDir, 'build-the-wall.html');
  assert.equal(urlEncoded, path.join(baseDir, 'build-the-wall.html'));
});

test('safeResolve rejects path traversal attempts', () => {
  assert.equal(safeResolve(baseDir, '../../index.html'), null, 'relative parent traversal');
  assert.equal(safeResolve(baseDir, '..%2F..%2Findex.html'), null, 'encoded forward slash traversal');
  assert.equal(safeResolve(baseDir, '..%5C..%5Cindex.html'), null, 'encoded backslash traversal');
  assert.equal(safeResolve(baseDir, '%2e%2e%2f%2e%2e%2fserver.js'), null, 'double dot encoded traversal');
  assert.equal(safeResolve(baseDir, 'sub/../../server.js'), null, 'nested escape traversal');
});

test('safeResolve rejects null bytes and absolute paths outside baseDir', () => {
  assert.equal(safeResolve(baseDir, 'game.html\0.js'), null, 'null byte injection');
  assert.equal(safeResolve(baseDir, 'C:\\Windows\\System32\\cmd.exe'), null, 'absolute windows path outside base');
  assert.equal(safeResolve(baseDir, '/etc/passwd'), null, 'absolute posix path outside base');
});

test('safeResolve handles invalid non-string or malformed inputs safely', () => {
  assert.equal(safeResolve(baseDir, null), null);
  assert.equal(safeResolve(baseDir, undefined), null);
  assert.equal(safeResolve(baseDir, 12345), null);
  assert.equal(safeResolve(baseDir, '%E0%A4%A'), null, 'malformed percent encoding');
});
