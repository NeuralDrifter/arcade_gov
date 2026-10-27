const assert = require('node:assert/strict');
const { createHash } = require('node:crypto');
const { readFileSync } = require('node:fs');
const path = require('node:path');
const { test } = require('node:test');
const vm = require('node:vm');

const root = path.join(__dirname, '..');
const read = (name) => readFileSync(path.join(root, name), 'utf8');
const bundle = read('games/red-scare.js');
const standalone = read('standalone/red-scare.html');

function engine(source) {
  const start = source.indexOf('var NightRun =');
  const end = source.indexOf('var NightScene =', start);
  assert.ok(start >= 0 && end > start, 'game logic exists in bundle');
  return vm.runInNewContext(source.slice(start, end) + '\nNightRun;', {}, { timeout: 5000 });
}

test('captured files match their manifest hashes', () => {
  const { files } = JSON.parse(read('asset-manifest.json'))['red-scare'];
  for (const [name, expected] of Object.entries(files)) {
    const data = readFileSync(path.join(root, name));
    assert.equal(data.length, expected.bytes, name);
    assert.equal(createHash('sha256').update(data).digest('hex'), expected.sha256, name);
  }
});

test('standalone embeds the original game, CSS and DOM without external resources', () => {
  assert.ok(standalone.includes('<script>\n' + bundle + '\n</script>'));
  assert.ok(standalone.includes('<style>\n' + read('assets/red-scare/style.css')));
  assert.doesNotMatch(standalone, /<(?:script|img|iframe|link|audio|video)\b[^>]*(?:src|href)\s*=/i);
  const ids = [...standalone.split('<script>')[0].matchAll(/\bid="([^"]+)"/g)].map((m) => m[1]);
  assert.equal(ids.length, new Set(ids).size, 'DOM IDs are unique');
  const ui = bundle.slice(bundle.lastIndexOf('(() => {'));
  for (const match of ui.matchAll(/\$\(['"]([^'"]+)['"]\)/g)) {
    assert.ok(ids.includes(match[1]), 'DOM contains ' + match[1]);
  }
  const css = read('assets/red-scare/style.css');
  for (const match of css.matchAll(/url\(['"]?([^)'"\s]+)/g)) {
    assert.ok(match[1].startsWith('data:'), 'stylesheet resource is embedded');
  }
});

for (const name of ['games/red-scare.js', 'readable/red-scare.js']) {
  test(name + ': start, controls, time progression and game over work', () => {
    const game = engine(read(name));
    assert.equal(game.districts.length, 4);
    assert.equal(game.FINISH, 12000);
    const state = game.create(() => 0.5);
    assert.equal(state.phase, 'ready');
    game.tick(state, 0.05);
    assert.equal(state.distance, 0);
    game.start(state);
    assert.equal(state.phase, 'playing');
    game.action(state, 'left');
    game.action(state, 'left');
    assert.equal(state.lane, -1);
    game.action(state, 'right');
    assert.equal(state.lane, 0);
    game.action(state, 'jump');
    assert.ok(state.jump > 0);
    for (let i = 0; i < 20; i++) game.tick(state, 0.05);
    assert.ok(state.distance > 0);
    game.action(state, 'slide');
    assert.ok(state.slide > 0);
    game.hurt(state, 'gap');
    assert.equal(state.phase, 'dying');
    for (let i = 0; i < 20; i++) game.tick(state, 0.05);
    assert.equal(state.phase, 'over');
  });
}
