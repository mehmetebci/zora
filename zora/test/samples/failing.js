import { test } from '../../src/index.js';

test('tester 1', (t) => {
  t.ok(true, 'assert1');
  t.equal('foo', 'bar', 'foo should equal bar');
});
