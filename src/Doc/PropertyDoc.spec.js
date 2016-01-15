import PropertyDoc from './PropertyDoc';
import ParsedFile from '../ParsedFile';
import assert from 'power-assert';

describe('PropertyDoc', () => {
  const file = ParsedFile.parse(`
    /**
     * @property foobar
     */
    class FoobarElement {
      // ...
    }
  `, {
    path: __dirname + '/foobar.js',
    basePath: __dirname,
  });

  it('should work normally', () => {
    const doc = PropertyDoc.parse(file)[0];

    assert(doc);
    assert(doc.file instanceof ParsedFile);
    assert.equal(doc.name, 'foobar');
    assert.equal(doc.docType, 'property');
  });
});

