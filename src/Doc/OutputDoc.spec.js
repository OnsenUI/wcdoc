import OutputDoc from './OutputDoc';
import ParsedFile from '../ParsedFile';
import assert from 'power-assert';

describe('OutputDoc', () => {
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
       * @output checked
       * @description desc
       * @type {boolean}
       */
      @Onput() checked: EventEmitter<boolean> = new EventEmitter();
    }
  `, {
    path: __dirname + '/foobar.ts',
    basePath: __dirname,
  });

  it('should work normally', () => {
    console.log(file);
    const doc = OutputDoc.parse(file)[0];

    assert(doc);
    assert(doc.file instanceof ParsedFile);
    assert.equal(doc.name, 'checked');
    assert.equal(doc.docType, 'output');
    assert.equal(doc.description, 'desc');
    assert.equal(doc.type, '{boolean}');
  });
});

