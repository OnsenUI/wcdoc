import {run, parse, parseFile} from './WCDoc';
import assert from 'power-assert';

describe('WCDoc', () => {
  it('should provide several functions', () => {
    assert.ok(run);
    assert.ok(parse);
    assert.ok(parseFile);
  });
});

