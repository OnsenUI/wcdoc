import ParsedFile from './ParsedFile';
import AttributeDoc from './Doc/AttributeDoc';
import ElementDoc from './Doc/ElementDoc';
import ObjectDoc from './Doc/ObjectDoc';
import MethodDoc from './Doc/MethodDoc';
import EventDoc from './Doc/EventDoc';
import PropertyDoc from './Doc/PropertyDoc';
import OutputDoc from './Doc/OutputDoc';
import InputDoc from './Doc/InputDoc';
import DirectiveDoc from './Doc/DirectiveDoc';
import globby from 'globby';
import async from 'async';

/**
 * @param {string} path
 * @param {Object} config
 * @return {Promise}
 */
export function parseFile(path, config) {
  return new Promise((done, fail) => {
    require('fs').readFile(path, 'utf-8', (error, code) => {
      if (error) {
        fail(error);
      } else {
        done(parse(code, path));
      }
    });
  });
}

/**
 * @param {string} code
 * @param {string} [path]
 * @param {Object} [config]
 * @param {string} [config.basePath]
 */
export function parse(code, path = '', config = {}) {
  const parsed = ParsedFile.parse(code, {path: path, basePath: config.basePath || process.cwd()});


  return [].concat(
    AttributeDoc.parse(parsed),
    ElementDoc.parse(parsed),
    MethodDoc.parse(parsed),
    ObjectDoc.parse(parsed),
    EventDoc.parse(parsed),
    PropertyDoc.parse(parsed),
    DirectiveDoc.parse(parsed),
    InputDoc.parse(parsed),
    OutputDoc.parse(parsed)
  );
}

/**
 * @param {Object} config
 * @param {Array} config.src
 * @param {string} config.basePath
 */
export function run(config) {
  return new Promise((resolve, abort) => {
    globby(config.src).then(paths => {
      async.map(paths, (path, done) => {
        parseFile(path, config).then(result => {
          done(null, result);
        });
      }, (error, result) => {
        resolve([].concat(...result));
      });
    });
  });
}
