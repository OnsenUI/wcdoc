import ElementDoc from './ElementDoc';
import ParsedFile from '../ParsedFile';
import assert from 'power-assert';

describe('ElementDoc', () => {
  const file = ParsedFile.parse(`
    /**
     * @element foobar
     */
    class FoobarElement {
      // ...
    }
  `, {
    path: __dirname + '/foobar.js',
    basePath: __dirname,
  });

  it('should work normally', () => {
    const doc = ElementDoc.parse(file)[0];

    assert(doc);
    assert(doc.docType, 'element');
    assert(doc.file instanceof ParsedFile);
  });
});

