import globby from 'globby';
import fs from 'fs';
import esprima from 'esprima';
import estraverse from 'estraverse';
import TagDict from './TagDict';
import {relative, resolve} from 'path';

export default class ParsedFile {
  /**
   * @param {Object} params
   */
  constructor(params) {
    if (typeof params.path !== 'string') {
      throw new Error('params.path must be a string');
    }

    if (typeof params.relativePath !== 'string') {
      throw new Error('params.relativePath must be a string');
    }

    this._code = params.code || '';
    this._ast = params.ast;
    this._path = params.path;
    this._docComments = params.docComments || [];
    this._relativePath = params.relativePath;
  }

  get code() {
    return this._code;
  }

  get path() {
    return this._path;
  }

  get ast() {
    return this._ast;
  }

  get docComments() {
    return this._docComments;
  }

  get relativePath() {
    return this._relativePath;
  }

  static _buildDocComments(ast) {
    return (ast.comments || [])
      .filter(comment => comment.value.substr(0, 1) === '*')
      .map(comment => {
        return {
          value: comment.value.slice(1).replace(/^ *\*+/mg, ''), // remove extra spaces and '*'
          location: comment.loc,
        };
      })
      .map(comment => {
        comment.tagdict = TagDict.parse(comment);

        return comment;
      });
  }


  /**
   * @param {string} code
   * @param {Object} options
   * @param {string} options.path
   * @param {string} options.basePath
   */
  static parse(code, options = {}) {
    const ast = esprima.parse(code, {
      loc: true,
      range: true,
      raw: false,
      tokens: true,
      comment: true,
      tolerant: true
    });

    const docComments = ParsedFile._buildDocComments(ast);

    const params = {
      code: code,
      path: options.path ? resolve(options.path) : undefined,
      ast: ast,
      docComments: docComments
    };

    if (options.path && options.basePath) {
      params.relativePath = relative(resolve(options.basePath), options.path);
    }

    return new ParsedFile(params);
  }
}

