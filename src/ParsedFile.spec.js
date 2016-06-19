import ParsedFile from './ParsedFile';
import assert from 'power-assert';
import * as ts from 'typescript';
import {parse} from './TypeScriptParser';

describe('ParsedFile', () => {
  it('should provide ParsedFile.parse()', () => {
    assert(ParsedFile.parse);
  });

  it('should parse TypeScript file', () => {
    const file = ParsedFile.parse(`
      /** 
       * @param {string} hoge
       */
      function doAnything() { }
    `, {path: __dirname + '/index.ts', basePath: __dirname});

    assert(file);
    assert.equal(typeof file.path, 'string');
    assert.equal(typeof file.code, 'string');
    assert.equal(typeof file.docComments.length, 'number');
    assert.equal(file.docComments.length, 1);
    assert.ok(file.docComments[0].tagdict);
    assert.equal(file.relativePath, 'index.ts');
  });

  it('should provide serveral properties', () => {
    const file = ParsedFile.parse(`
      /** This is a doc comment. */
      console.log("Hello world!");

    `, {path: __dirname + '/index.js', basePath: __dirname});

    assert(file);
    assert.equal(typeof file.path, 'string');
    assert.equal(typeof file.code, 'string');
    assert.equal(typeof file.docComments.length, 'number');
    assert.equal(file.docComments.length, 1);
    assert.ok(file.docComments[0].tagdict);
    assert.equal(file.relativePath, 'index.js');
  });
});

