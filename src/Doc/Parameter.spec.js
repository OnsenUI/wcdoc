import Parameter from './Parameter';
import assert from 'power-assert';

describe('Parameter', () => {
  it('should work normally', () => {
    assert(Parameter.parse);
    assert(Parameter.parse('{Object} name'));
    assert(Parameter.parse('{Object} name description'));
    assert(Parameter.parse(`{Object} name
      description
    `));

    assert.equal(Parameter.parse('{Object} name').type, 'Object');
    assert.equal(Parameter.parse('{Object} name').name, 'name');
    assert.equal(Parameter.parse('{Object} options.name').name, 'options.name');
    assert(Parameter.parse('{Object} [name]').isOptional);
    assert.equal(Parameter.parse('{Object} [name]').name, 'name');
    assert.equal(Parameter.parse('{Object} name desc').description, 'desc');
    assert.equal(Parameter.parse('{Object} [name] desc').description, 'desc');

    assert.equal(Parameter.parse('{Boolean} name This is a description.').description, 'This is a description.');
    assert.ok(Parameter.parse('{Boolean} name \nThis is\n a description.\n'));
  });
});

