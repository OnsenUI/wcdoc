import EventDoc from './EventDoc';
import ParsedFile from '../ParsedFile';
import assert from 'power-assert';

describe('EventDoc', () => {
  const file = ParsedFile.parse(`
    /**
     * @event foobar
     */
    class FoobarElement {
      // ...
    }
  `, {
    path: __dirname + '/foobar.js',
    basePath: __dirname,
  });

  it('should work normally', () => {
    const doc = EventDoc.parse(file)[0];

    assert(doc);
    assert(doc.file instanceof ParsedFile);
    assert.equal(doc.name, 'foobar');
    assert.equal(doc.docType, 'event');
  });
});

