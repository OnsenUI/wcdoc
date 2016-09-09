import DirectiveDoc from './DirectiveDoc';
import ParsedFile from '../ParsedFile';
import assert from 'power-assert';

describe('DirectiveDoc', () => {
  const file = ParsedFile.parse(`
    /**
     * @directive hoge
     * @description desc
     */
    @Directive({
      selector: 'hoge'
    })
    class FoobarElement {
      // ...
    }
  `, {
    path: __dirname + '/foobar.ts',
    basePath: __dirname,
  });

  it('should work normally', () => {
    const doc = DirectiveDoc.parse(file)[0];

    assert(doc);
    assert(doc.file instanceof ParsedFile);
    assert.equal(doc.name, 'hoge');
    assert.equal(doc.docType, 'directive');
    assert.equal(doc.description, 'desc');
  });
});

