import MethodDoc from './MethodDoc';
import ParsedFile from '../ParsedFile';
import assert from 'power-assert';

describe('MethodDoc', () => {
  const file = ParsedFile.parse(`
    /**
     * @method foobar
     */
    class FoobarElement {
      // ...
    }
  `, {
    path: __dirname + '/foobar.js',
    basePath: __dirname,
  });

  it('should work normally', () => {
    const doc = MethodDoc.parse(file)[0];

    assert(doc);
    assert(doc.file instanceof ParsedFile);
    assert.equal(doc.name, 'foobar');
    assert.equal(doc.docType, 'method');
  });
});

