import ObjectDoc from './ObjectDoc';
import ParsedFile from '../ParsedFile';
import assert from 'power-assert';

describe('ObjectDoc', () => {
  const file = ParsedFile.parse(`
    /**
     * @object foobar
     */
    class FoobarElement {
      // ...
    }
  `, {
    path: __dirname + '/foobar.js',
    basePath: __dirname,
  });

  it('should work normally', () => {
    const doc = ObjectDoc.parse(file)[0];

    assert(doc);
    assert(doc.file instanceof ParsedFile);
    assert.equal(doc.name, 'foobar');
    assert.equal(doc.type, 'object');
  });
});

