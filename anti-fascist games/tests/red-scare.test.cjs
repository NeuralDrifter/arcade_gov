const assert = require('node:assert/strict');
const { readFileSync } = require('node:fs');
const path = require('node:path');
const { test } = require('node:test');
const vm = require('node:vm');

const root = path.join(__dirname, '..');
const read = (name) => readFileSync(path.join(root, name), 'utf8');
const bundle = read('games/red-scare.js');
const readable = read('readable/red-scare.js');
const standalone = read('standalone/red-scare.html');

function engine(source) {
  const start = source.indexOf('var NightRun =');
  const end = source.indexOf('var NightScene =', start);
  assert.ok(start >= 0 && end > start, 'game logic exists in bundle');
  return vm.runInNewContext(source.slice(start, end) + '\nNightRun;', {}, { timeout: 5000 });
}

test('standalone embeds the anti-fascist game, CSS and DOM without external resources', () => {
  assert.ok(standalone.includes('<script>\n' + bundle + '\n</script>'));
  assert.doesNotMatch(standalone, /<(?:script|img|iframe|link|audio|video)\b[^>]*(?:src|href)\s*=/i);
  const ids = [...standalone.split('<script>')[0].matchAll(/\bid="([^"]+)"/g)].map((m) => m[1]);
  assert.equal(ids.length, new Set(ids).size, 'DOM IDs are unique');
  const ui = bundle.slice(bundle.lastIndexOf('(() => {'));
  for (const match of ui.matchAll(/\$\(['"]([^'"]+)['"]\)/g)) {
    assert.ok(ids.includes(match[1]), 'DOM contains ' + match[1]);
  }
});

test('anti-fascist remix purges White House propaganda in favor of counter-propaganda satire', () => {
  // Purged propaganda strings
  assert.ok(!standalone.includes('CAUGHT BY THE COLLECTIVE'), 'collective propaganda removed');
  assert.ok(!standalone.includes('The collective wants everything'), 'collective propaganda removed');
  assert.ok(!standalone.includes('Defeat socialism and communism'), 'socialism propaganda removed');
  assert.ok(!standalone.includes('TRUMP PROTECTOR <b>MAGA SHIELD</b>'), 'MAGA protector shield replaced');
  assert.ok(!bundle.includes('DEMOCRATIC SOCIALISTS OF AMERICA'), 'DSA sign replaced');
  assert.ok(!bundle.includes('Ration Control confiscated half your prosperity'), 'ration propaganda replaced');
  assert.ok(!bundle.includes('You defeated socialism & communism'), 'victory propaganda replaced');

  // Anti-fascist satire present
  assert.ok(standalone.includes('FASCIST SCARE'), 'title reflects anti-fascist remix');
  assert.ok(standalone.includes('ICE RAID CORRIDOR'), 'district 1 targets ICE crackdowns');
  assert.ok(standalone.includes('CONSTITUTION SHIELD'), 'powerup is constitutional defense');
  assert.ok(standalone.includes('ICE RAIDERS'), 'pursuers are regime agents');
  assert.ok(standalone.includes('LIBERTY'), 'score tracked as civil liberty');
  assert.ok(bundle.includes('ICE Raid Corridor'), 'district 1 modded in engine');
  assert.ok(bundle.includes('Weaponized DOJ Foundry'), 'district 2 modded in engine');
  assert.ok(bundle.includes('Billionaire Tax Shelter'), 'district 3 modded in engine');
  assert.ok(bundle.includes('Mar-a-Lago Citadel'), 'district 4 modded in engine');
  assert.ok(bundle.includes('IMMIGRATION & CUSTOMS ENFORCEMENT'), 'ICE banner present');
  assert.ok(bundle.includes('POLICE STATE|CONSTITUTION SUSPENDED'), 'authoritarian checkpoint banner present');
});

for (const [name, source] of [['games/red-scare.js', bundle], ['readable/red-scare.js', readable]]) {
  test(name + ': anti-fascist runner engine executes correctly with 4 districts and complete state progression', () => {
    const game = engine(source);
    assert.equal(game.districts.length, 4);
    assert.equal(game.FINISH, 12000);
    assert.equal(game.districts[0].name, 'ICE Raid Corridor');
    assert.equal(game.districts[1].name, 'Weaponized DOJ Foundry');
    assert.equal(game.districts[2].name, 'Billionaire Tax Shelter');
    assert.equal(game.districts[3].name, 'Mar-a-Lago Citadel');

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
