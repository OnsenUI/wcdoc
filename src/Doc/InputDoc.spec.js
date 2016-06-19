import InputDoc from './InputDoc';
import ParsedFile from '../ParsedFile';
import assert from 'power-assert';

describe('InputDoc', () => {
  const file = ParsedFile.parse(`
    /**
     * @directive hoge
     * @description desc
     */
    @Directive({
      selector: 'hoge'
    })
    class FoobarElement {
      /**
       * @input label
       * @description desc
       * @type {string}
       */
      @Input() set label(str) { }
    }
  `, {
    path: __dirname + '/foobar.ts',
    basePath: __dirname,
  });

  it('should work normally', () => {
    const doc = InputDoc.parse(file)[0];

    assert(doc);
    assert(doc.file instanceof ParsedFile);
    assert.equal(doc.name, 'label');
    assert.equal(doc.docType, 'input');
    assert.equal(doc.description, 'desc');
    assert.equal(doc.type, '{string}');
  });
});

