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
  });
});

