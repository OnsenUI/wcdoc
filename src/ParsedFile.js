import globby from 'globby';
import fs from 'fs';
import espree from 'espree';
import estraverse from 'estraverse';
import TagDict from './TagDict';
import {relative, resolve} from 'path';
import * as ts from 'typescript';
import {parse as parseTS} from './TypeScriptParser';

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

  static _buildTSDocComments(comments) {
    return comments
      .map(comment => {
        const text = comment.text.substring(3, comment.text.length - 2).replace(/^ *\*+/mg, '');
        return {
          value: text,
          location: {start: comment.start, end: comment.end}
        };
      })
      .map(comment => {
        comment.tagdict = TagDict.parse(comment);

        return comment;
      });
  }

  static _parseJS(code, options = {}) {
    const ast = espree.parse(code, {
      loc: true,
      range: true,
      raw: false,
      tokens: true,
      comment: true,
      tolerant: true,
      sourceType: 'module',
      ecmaVersion: 8,
      ecmaFeatures: {
        experimentalObjectRestSpread: true
      },
      ...options.espreeConfig // override defaults
    });

    const docComments = ParsedFile._buildDocComments(ast);

    const params = {
      code: code,
      path: options.path ? resolve(options.path) : undefined,
      docComments: docComments
    };

    if (options.path && options.basePath) {
      params.relativePath = relative(resolve(options.basePath), options.path);
    }

    return new ParsedFile(params);
  }

  /**
   * @param {string} code
   * @param {Object} options
   * @param {string} options.path
   * @param {string} options.basePath
   * @param {Object} options.espreeConfig
   */
  static parse(code, options = {}) {
    if (typeof code !== 'string') {
      throw Error('"code" parameter should be a string.');
    }

    if (options.path && options.path.endsWith('.ts')) {
      const relativePath = relative(resolve(options.basePath), options.path);
      const comments = ParsedFile._buildTSDocComments(parseTS(code));

      return new ParsedFile({
        path: options.path,
        relativePath: relativePath,
        docComments: comments,
        code: code
      });
    } else {
      return ParsedFile._parseJS(code, options);
    }
  }
}

