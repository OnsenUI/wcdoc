
import TagDict from './TagDict';
import assert from 'power-assert';

describe('TagDict', () => {
  it('should work normally', () => {
    assert.ok(TagDict.parse);

    const location = {start: {line: 2, column: 4}, end: {line: 4, column: 7}};

    assert.ok(TagDict.parse({value: `aaa`, location: location}));
    assert.ok(TagDict.parse({value: `@param {Object} hoge`, location: location}).get('param'));
    assert.ok(TagDict.parse({value: `description`, location: location}).get('description'));
    assert.ok(TagDict.parse({value: `description`, location: location}).get('desc'));
    assert.ok(TagDict.parse({value: `@param hoge`, location: location}).get('foobar', true));
  });
});

