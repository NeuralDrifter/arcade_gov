const assert = require('node:assert/strict');
const { readFileSync } = require('node:fs');
const { join } = require('node:path');
const { runInNewContext } = require('node:vm');
const { test } = require('node:test');

const root = join(__dirname, '..');
const source = readFileSync(join(root, 'readable/socialism.js'), 'utf8');
const context = {};
runInNewContext(source.slice(0, source.indexOf('\n(()=>{')), context);
const game = context.TrumpCostMatch;
const originalSource = readFileSync(join(root, '../wh-arcade/readable/socialism.js'), 'utf8');
const originalContext = {};
runInNewContext(originalSource.slice(0, originalSource.indexOf('\n(()=>{')), originalContext);
const original = originalContext.SocialismMatch;

function matchPair(state, id) {
  const indices = state.deck.flatMap((card, index) => card.id === id ? [index] : []);
  assert.equal(game.flip(state, indices[0]), 'first');
  assert.equal(game.flip(state, indices[1]), 'match');
  assert.equal(game.tick(state, 600), 'fact');
  assert.equal(game.continueGame(state), true);
}

test('all three original levels complete and expose 23 numeric counterclaims', () => {
  const state = game.create();
  for (const [index, level] of game.levels.entries()) {
    assert.equal(state.deck.length, level.ids.length * 2);
    for (const id of level.ids) {
      const fact = game.fact(id);
      assert.ok(fact.source.startsWith('https://'));
      assert.ok(['Projection', 'Survey estimate', 'Policy rate', 'Research estimate',
        'Observed market change', 'Administrative action', 'Enacted policy',
        'Observed employment change'].includes(fact.kind));
      assert.match(fact.value, /\d/);
      assert.ok(fact.connection.length > 0);
      matchPair(state, id);
    }
    if (index < game.levels.length - 1) {
      assert.equal(state.phase, 'level-complete');
      assert.equal(game.nextLevel(state), true);
    }
  }
  assert.equal(state.phase, 'complete');
  assert.equal(state.totalMoves, 23);
  assert.equal(new Set(state.seen).size, 23);
});

test('each original claim retains its topic, picture, number and level position', () => {
  assert.equal(game.facts.length, original.facts.length);
  assert.equal(JSON.stringify(game.levels), JSON.stringify(original.levels));
  for (const originalFact of original.facts) {
    const counterpoint = game.fact(originalFact.id);
    assert.equal(counterpoint.art, originalFact.art);
    assert.equal(counterpoint.topic, originalFact.topic);
    assert.equal(JSON.stringify(counterpoint.original), JSON.stringify(originalFact));
  }
});

test('mismatches lock input, then clear without crediting a pair', () => {
  const state = game.create();
  const other = state.deck.findIndex(card => card.id !== state.deck[0].id);
  game.flip(state, 0);
  assert.equal(game.flip(state, 0), null);
  assert.equal(game.flip(state, other), 'mismatch');
  assert.equal(game.flip(state, 2), null);
  assert.equal(game.tick(state, 1100), 'reset');
  assert.equal(state.selected.length, 0);
  assert.equal(state.matched.length, 0);
  assert.equal(state.moves, 1);
});

test('progress survives serialization; invalid and original-game saves reset', () => {
  const state = game.create();
  matchPair(state, state.deck[0].id);
  const restored = game.restore(JSON.stringify(game.snapshot(state)));
  assert.equal(restored.matched[0], state.matched[0]);
  assert.equal(restored.moves, 1);
  assert.equal(game.restore('{broken').moves, 0);
  const invalid = game.snapshot(state);
  invalid.order[0] = 'not-a-card-0';
  assert.equal(game.restore(invalid).matched.length, 0);
  assert.equal(game.restore({ version: 1 }).matched.length, 0);
});

test('standalone and bundle contain exactly the maintained source', () => {
  const html = readFileSync(join(root, 'standalone/socialism.html'), 'utf8');
  assert.equal(html.match(/<script>([\s\S]*?)<\/script>/)[1], source);
  assert.equal(readFileSync(join(root, 'games/socialism.js'), 'utf8'), source);
  assert.ok(!html.includes('Socialism destroys'));
  assert.ok(!html.includes('Birthright'));
  assert.ok(!html.includes('Paris exit'));
  assert.ok(!html.includes('90 days'));
  assert.ok(html.includes('id="cost-connection"'));
  for (const id of ['original-title', 'original-policy', 'original-value',
    'original-unit', 'original-context', 'original-source']) {
    assert.ok(html.includes(`id="${id}"`));
  }
});

test('previous political campaign saves cannot credit the household campaign', () => {
  const previous = {
    version: 2, level: 0, order: ['care-0', 'care-1', 'medicaid-0',
      'medicaid-1', 'deficit-0', 'deficit-1'],
    matched: ['care'], moves: 1, totalMoves: 1, credited: [],
  };
  const state = game.restore(previous);
  assert.equal(state.matched.length, 0);
  assert.equal(state.moves, 0);
  assert.ok(state.deck.every(card => game.levels[0].ids.includes(card.id)));
});
