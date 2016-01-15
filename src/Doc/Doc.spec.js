import Doc from './Doc';
import ParsedFile from '../ParsedFile';
import assert from 'power-assert';

describe('Doc', () => {
  const file = ParsedFile.parse(`
    /**
     * @something
     */
    function foobar() {
      // ...
    }
  `, {
    path: __dirname + '/foobar.js',
    basePath: __dirname,
  });

  it('should work normally', () => {
    const doc = new Doc('foobar', file);

    assert(doc);
    assert(doc.file instanceof ParsedFile);
    assert(typeof doc.type === 'string');
  });
});

