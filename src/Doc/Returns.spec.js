import Returns from './Returns';
import assert from 'power-assert';

describe('Returns', () => {
  it('should work normally', () => {
    assert(Returns.parse);

    assert.equal(Returns.parse('{Object}').type, 'Object');
    assert.equal(Returns.parse('{Object} description').type, 'Object');
    assert.equal(Returns.parse(`{Object} \n description \n`).description.trim(), 'description');
    assert.equal(Returns.parse('description').description, 'description');
  });
});

