import ParsedFile from './ParsedFile';
import assert from 'power-assert';

describe('ParsedFile', () => {
  it('should provide ParsedFile.parse()', () => {
    assert(ParsedFile.parse);
  });

  it('should provide serveral properties', () => {
    const file = ParsedFile.parse(`
      /** This is a doc comment. */
      console.log("Hello world!");

    `, {path: __dirname + '/index.js', basePath: __dirname});

    assert(file);
    assert(file.ast);
    assert.equal(typeof file.path, 'string');
    assert.equal(typeof file.code, 'string');
    assert.equal(typeof file.docComments.length, 'number');
    assert.equal(file.docComments.length, 1);
    assert.equal(file.relativePath, 'index.js');
  });
});

