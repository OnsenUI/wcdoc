import Type from './Type';
import assert from 'power-assert';

describe('Type', () => {
  it('should work normal type desclation', () => {
    Type.parse('string');
    Type.parse('Array');
    Type.parse('number');
  });
});

