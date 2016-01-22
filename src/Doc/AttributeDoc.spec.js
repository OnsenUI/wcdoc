import AttributeDoc from './AttributeDoc';
import ParsedFile from '../ParsedFile';
import assert from 'power-assert';

describe('AttributeDoc', () => {
  const file = ParsedFile.parse(`
    /**
     * @attribute foobar
     */
    class FoobarElement {
      // ...
    }
  `, {
    path: __dirname + '/foobar.js',
    basePath: __dirname,
  });

  it('should work normally', () => {
    const doc = AttributeDoc.parse(file)[0];

    assert(doc);
    assert(doc.tagdict);
    assert(doc.file instanceof ParsedFile);
    assert.equal(doc.name, 'foobar');
    assert.equal(doc.docType, 'attribute');
  });
});

