import Returns from './Returns';
import assert from 'power-assert';

describe('Returns', () => {
  it('should work normally', () => {
    assert(Returns.parse);
    assert(Returns.parse('{Object}'));
    assert(Returns.parse('{Object} description'));
    assert(Returns.parse(`{Object}
      description
    `));
    assert(Returns.parse('description'));
  });
});

