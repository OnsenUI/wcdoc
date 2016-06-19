import ElementDoc from './ElementDoc';
import ParsedFile from '../ParsedFile';
import assert from 'power-assert';

describe('ElementDoc', () => {
  const file = ParsedFile.parse(`
    /**
     * @element x-foobar
     * @description Hello World!
     * @example 
     *   <x-foobar>
     *     content
     *   </x-foobar>
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

    assert.ok(doc);
    assert.ok(doc.file instanceof ParsedFile);

    assert.equal(doc.docType, 'element');
    assert.equal(doc.name, 'x-foobar');
    assert.equal(doc.isDeprecated, false);
    assert.equal(doc.examples[0], '<x-foobar>\n  content\n</x-foobar>');
    assert.equal(doc.description, 'Hello World!');
  });
});

