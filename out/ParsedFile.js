'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _globby = require('globby');

var _globby2 = _interopRequireDefault(_globby);

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _espree = require('espree');

var _espree2 = _interopRequireDefault(_espree);

var _estraverse = require('estraverse');

var _estraverse2 = _interopRequireDefault(_estraverse);

var _TagDict = require('./TagDict');

var _TagDict2 = _interopRequireDefault(_TagDict);

var _path = require('path');

var _typescript = require('typescript');

var ts = _interopRequireWildcard(_typescript);

var _TypeScriptParser = require('./TypeScriptParser');

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ParsedFile = function () {
  /**
   * @param {Object} params
   */
  function ParsedFile(params) {
    _classCallCheck(this, ParsedFile);

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

  _createClass(ParsedFile, [{
    key: 'code',
    get: function get() {
      return this._code;
    }
  }, {
    key: 'path',
    get: function get() {
      return this._path;
    }
  }, {
    key: 'docComments',
    get: function get() {
      return this._docComments;
    }
  }, {
    key: 'relativePath',
    get: function get() {
      return this._relativePath;
    }
  }], [{
    key: '_buildDocComments',
    value: function _buildDocComments(ast) {
      return (ast.comments || []).filter(function (comment) {
        return comment.value.substr(0, 1) === '*';
      }).map(function (comment) {
        return {
          value: comment.value.slice(1).replace(/^ *\*+/mg, ''), // remove extra spaces and '*'
          location: comment.loc
        };
      }).map(function (comment) {
        comment.tagdict = _TagDict2.default.parse(comment);

        return comment;
      });
    }
  }, {
    key: '_buildTSDocComments',
    value: function _buildTSDocComments(comments) {
      return comments.map(function (comment) {
        var text = comment.text.substring(3, comment.text.length - 2).replace(/^ *\*+/mg, '');
        return {
          value: text,
          location: { start: comment.start, end: comment.end }
        };
      }).map(function (comment) {
        comment.tagdict = _TagDict2.default.parse(comment);

        return comment;
      });
    }
  }, {
    key: '_parseJS',
    value: function _parseJS(code) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      var ast = _espree2.default.parse(code, {
        loc: true,
        range: true,
        raw: false,
        tokens: true,
        comment: true,
        tolerant: true,
        ecmaVersion: 7,
        ecmaFeatures: {
          experimentalObjectRestSpread: true
        }
      });

      var docComments = ParsedFile._buildDocComments(ast);

      var params = {
        code: code,
        path: options.path ? (0, _path.resolve)(options.path) : undefined,
        docComments: docComments
      };

      if (options.path && options.basePath) {
        params.relativePath = (0, _path.relative)((0, _path.resolve)(options.basePath), options.path);
      }

      return new ParsedFile(params);
    }

    /**
     * @param {string} code
     * @param {Object} options
     * @param {string} options.path
     * @param {string} options.basePath
     */

  }, {
    key: 'parse',
    value: function parse(code) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      if (typeof code !== 'string') {
        throw Error('"code" parameter should be a string.');
      }

      if (options.path && options.path.endsWith('.ts')) {
        var relativePath = (0, _path.relative)((0, _path.resolve)(options.basePath), options.path);
        var comments = ParsedFile._buildTSDocComments((0, _TypeScriptParser.parse)(code));

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
  }]);

  return ParsedFile;
}();

exports.default = ParsedFile;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9QYXJzZWRGaWxlLmpzIl0sIm5hbWVzIjpbInRzIiwiUGFyc2VkRmlsZSIsInBhcmFtcyIsInBhdGgiLCJFcnJvciIsInJlbGF0aXZlUGF0aCIsIl9jb2RlIiwiY29kZSIsIl9wYXRoIiwiX2RvY0NvbW1lbnRzIiwiZG9jQ29tbWVudHMiLCJfcmVsYXRpdmVQYXRoIiwiYXN0IiwiY29tbWVudHMiLCJmaWx0ZXIiLCJjb21tZW50IiwidmFsdWUiLCJzdWJzdHIiLCJtYXAiLCJzbGljZSIsInJlcGxhY2UiLCJsb2NhdGlvbiIsImxvYyIsInRhZ2RpY3QiLCJwYXJzZSIsInRleHQiLCJzdWJzdHJpbmciLCJsZW5ndGgiLCJzdGFydCIsImVuZCIsIm9wdGlvbnMiLCJyYW5nZSIsInJhdyIsInRva2VucyIsInRvbGVyYW50IiwiZWNtYVZlcnNpb24iLCJlY21hRmVhdHVyZXMiLCJleHBlcmltZW50YWxPYmplY3RSZXN0U3ByZWFkIiwiX2J1aWxkRG9jQ29tbWVudHMiLCJ1bmRlZmluZWQiLCJiYXNlUGF0aCIsImVuZHNXaXRoIiwiX2J1aWxkVFNEb2NDb21tZW50cyIsIl9wYXJzZUpTIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7QUFDQTs7SUFBWUEsRTs7QUFDWjs7Ozs7Ozs7SUFFcUJDLFU7QUFDbkI7OztBQUdBLHNCQUFZQyxNQUFaLEVBQW9CO0FBQUE7O0FBQ2xCLFFBQUksT0FBT0EsT0FBT0MsSUFBZCxLQUF1QixRQUEzQixFQUFxQztBQUNuQyxZQUFNLElBQUlDLEtBQUosQ0FBVSw4QkFBVixDQUFOO0FBQ0Q7O0FBRUQsUUFBSSxPQUFPRixPQUFPRyxZQUFkLEtBQStCLFFBQW5DLEVBQTZDO0FBQzNDLFlBQU0sSUFBSUQsS0FBSixDQUFVLHNDQUFWLENBQU47QUFDRDs7QUFFRCxTQUFLRSxLQUFMLEdBQWFKLE9BQU9LLElBQVAsSUFBZSxFQUE1QjtBQUNBLFNBQUtD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QUFQLEtBQWdCLFFBQXBCLEVBQThCO0FBQzVCLGNBQU1ILE1BQU0sc0NBQU4sQ0FBTjtBQUNEOztBQUVELFVBQUkwQixRQUFRM0IsSUFBUixJQUFnQjJCLFFBQVEzQixJQUFSLENBQWFzQyxRQUFiLENBQXNCLEtBQXRCLENBQXBCLEVBQWtEO0FBQ2hELFlBQU1wQyxlQUFlLG9CQUFTLG1CQUFReUIsUUFBUVUsUUFBaEIsQ0FBVCxFQUFvQ1YsUUFBUTNCLElBQTVDLENBQXJCO0FBQ0EsWUFBTVUsV0FBV1osV0FBV3lDLG1CQUFYLENBQStCLDZCQUFRbkMsSUFBUixDQUEvQixDQUFqQjs7QUFFQSxlQUFPLElBQUlOLFVBQUosQ0FBZTtBQUNwQkUsZ0JBQU0yQixRQUFRM0IsSUFETTtBQUVwQkUsd0JBQWNBLFlBRk07QUFHcEJLLHVCQUFhRyxRQUhPO0FBSXBCTixnQkFBTUE7QUFKYyxTQUFmLENBQVA7QUFNRCxPQVZELE1BVU87QUFDTCxlQUFPTixXQUFXMEMsUUFBWCxDQUFvQnBDLElBQXBCLEVBQTBCdUIsT0FBMUIsQ0FBUDtBQUNEO0FBQ0Y7Ozs7OztrQkF4SGtCN0IsVSIsImZpbGUiOiJQYXJzZWRGaWxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGdsb2JieSBmcm9tICdnbG9iYnknO1xuaW1wb3J0IGZzIGZyb20gJ2ZzJztcbmltcG9ydCBlc3ByZWUgZnJvbSAnZXNwcmVlJztcbmltcG9ydCBlc3RyYXZlcnNlIGZyb20gJ2VzdHJhdmVyc2UnO1xuaW1wb3J0IFRhZ0RpY3QgZnJvbSAnLi9UYWdEaWN0JztcbmltcG9ydCB7cmVsYXRpdmUsIHJlc29sdmV9IGZyb20gJ3BhdGgnO1xuaW1wb3J0ICogYXMgdHMgZnJvbSAndHlwZXNjcmlwdCc7XG5pbXBvcnQge3BhcnNlIGFzIHBhcnNlVFN9IGZyb20gJy4vVHlwZVNjcmlwdFBhcnNlcic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBhcnNlZEZpbGUge1xuICAvKipcbiAgICogQHBhcmFtIHtPYmplY3R9IHBhcmFtc1xuICAgKi9cbiAgY29uc3RydWN0b3IocGFyYW1zKSB7XG4gICAgaWYgKHR5cGVvZiBwYXJhbXMucGF0aCAhPT0gJ3N0cmluZycpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcigncGFyYW1zLnBhdGggbXVzdCBiZSBhIHN0cmluZycpO1xuICAgIH1cblxuICAgIGlmICh0eXBlb2YgcGFyYW1zLnJlbGF0aXZlUGF0aCAhPT0gJ3N0cmluZycpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcigncGFyYW1zLnJlbGF0aXZlUGF0aCBtdXN0IGJlIGEgc3RyaW5nJyk7XG4gICAgfVxuXG4gICAgdGhpcy5fY29kZSA9IHBhcmFtcy5jb2RlIHx8ICcnO1xuICAgIHRoaXMuX3BhdGggPSBwYXJhbXMucGF0aDtcbiAgICB0aGlzLl9kb2NDb21tZW50cyA9IHBhcmFtcy5kb2NDb21tZW50cyB8fCBbXTtcbiAgICB0aGlzLl9yZWxhdGl2ZVBhdGggPSBwYXJhbXMucmVsYXRpdmVQYXRoO1xuICB9XG5cbiAgZ2V0IGNvZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2NvZGU7XG4gIH1cblxuICBnZXQgcGF0aCgpIHtcbiAgICByZXR1cm4gdGhpcy5fcGF0aDtcbiAgfVxuXG4gIGdldCBkb2NDb21tZW50cygpIHtcbiAgICByZXR1cm4gdGhpcy5fZG9jQ29tbWVudHM7XG4gIH1cblxuICBnZXQgcmVsYXRpdmVQYXRoKCkge1xuICAgIHJldHVybiB0aGlzLl9yZWxhdGl2ZVBhdGg7XG4gIH1cblxuICBzdGF0aWMgX2J1aWxkRG9jQ29tbWVudHMoYXN0KSB7XG4gICAgcmV0dXJuIChhc3QuY29tbWVudHMgfHwgW10pXG4gICAgICAuZmlsdGVyKGNvbW1lbnQgPT4gY29tbWVudC52YWx1ZS5zdWJzdHIoMCwgMSkgPT09ICcqJylcbiAgICAgIC5tYXAoY29tbWVudCA9PiB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgdmFsdWU6IGNvbW1lbnQudmFsdWUuc2xpY2UoMSkucmVwbGFjZSgvXiAqXFwqKy9tZywgJycpLCAvLyByZW1vdmUgZXh0cmEgc3BhY2VzIGFuZCAnKidcbiAgICAgICAgICBsb2NhdGlvbjogY29tbWVudC5sb2MsXG4gICAgICAgIH07XG4gICAgICB9KVxuICAgICAgLm1hcChjb21tZW50ID0+IHtcbiAgICAgICAgY29tbWVudC50YWdkaWN0ID0gVGFnRGljdC5wYXJzZShjb21tZW50KTtcblxuICAgICAgICByZXR1cm4gY29tbWVudDtcbiAgICAgIH0pO1xuICB9XG5cbiAgc3RhdGljIF9idWlsZFRTRG9jQ29tbWVudHMoY29tbWVudHMpIHtcbiAgICByZXR1cm4gY29tbWVudHNcbiAgICAgIC5tYXAoY29tbWVudCA9PiB7XG4gICAgICAgIGNvbnN0IHRleHQgPSBjb21tZW50LnRleHQuc3Vic3RyaW5nKDMsIGNvbW1lbnQudGV4dC5sZW5ndGggLSAyKS5yZXBsYWNlKC9eICpcXCorL21nLCAnJyk7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgdmFsdWU6IHRleHQsXG4gICAgICAgICAgbG9jYXRpb246IHtzdGFydDogY29tbWVudC5zdGFydCwgZW5kOiBjb21tZW50LmVuZH1cbiAgICAgICAgfTtcbiAgICAgIH0pXG4gICAgICAubWFwKGNvbW1lbnQgPT4ge1xuICAgICAgICBjb21tZW50LnRhZ2RpY3QgPSBUYWdEaWN0LnBhcnNlKGNvbW1lbnQpO1xuXG4gICAgICAgIHJldHVybiBjb21tZW50O1xuICAgICAgfSk7XG4gIH1cblxuICBzdGF0aWMgX3BhcnNlSlMoY29kZSwgb3B0aW9ucyA9IHt9KSB7XG4gICAgY29uc3QgYXN0ID0gZXNwcmVlLnBhcnNlKGNvZGUsIHtcbiAgICAgIGxvYzogdHJ1ZSxcbiAgICAgIHJhbmdlOiB0cnVlLFxuICAgICAgcmF3OiBmYWxzZSxcbiAgICAgIHRva2VuczogdHJ1ZSxcbiAgICAgIGNvbW1lbnQ6IHRydWUsXG4gICAgICB0b2xlcmFudDogdHJ1ZSxcbiAgICAgIGVjbWFWZXJzaW9uOiA3LFxuICAgICAgZWNtYUZlYXR1cmVzOiB7XG4gICAgICAgIGV4cGVyaW1lbnRhbE9iamVjdFJlc3RTcHJlYWQ6IHRydWVcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGNvbnN0IGRvY0NvbW1lbnRzID0gUGFyc2VkRmlsZS5fYnVpbGREb2NDb21tZW50cyhhc3QpO1xuXG4gICAgY29uc3QgcGFyYW1zID0ge1xuICAgICAgY29kZTogY29kZSxcbiAgICAgIHBhdGg6IG9wdGlvbnMucGF0aCA/IHJlc29sdmUob3B0aW9ucy5wYXRoKSA6IHVuZGVmaW5lZCxcbiAgICAgIGRvY0NvbW1lbnRzOiBkb2NDb21tZW50c1xuICAgIH07XG5cbiAgICBpZiAob3B0aW9ucy5wYXRoICYmIG9wdGlvbnMuYmFzZVBhdGgpIHtcbiAgICAgIHBhcmFtcy5yZWxhdGl2ZVBhdGggPSByZWxhdGl2ZShyZXNvbHZlKG9wdGlvbnMuYmFzZVBhdGgpLCBvcHRpb25zLnBhdGgpO1xuICAgIH1cblxuICAgIHJldHVybiBuZXcgUGFyc2VkRmlsZShwYXJhbXMpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBjb2RlXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBvcHRpb25zLnBhdGhcbiAgICogQHBhcmFtIHtzdHJpbmd9IG9wdGlvbnMuYmFzZVBhdGhcbiAgICovXG4gIHN0YXRpYyBwYXJzZShjb2RlLCBvcHRpb25zID0ge30pIHtcbiAgICBpZiAodHlwZW9mIGNvZGUgIT09ICdzdHJpbmcnKSB7XG4gICAgICB0aHJvdyBFcnJvcignXCJjb2RlXCIgcGFyYW1ldGVyIHNob3VsZCBiZSBhIHN0cmluZy4nKTtcbiAgICB9XG5cbiAgICBpZiAob3B0aW9ucy5wYXRoICYmIG9wdGlvbnMucGF0aC5lbmRzV2l0aCgnLnRzJykpIHtcbiAgICAgIGNvbnN0IHJlbGF0aXZlUGF0aCA9IHJlbGF0aXZlKHJlc29sdmUob3B0aW9ucy5iYXNlUGF0aCksIG9wdGlvbnMucGF0aCk7XG4gICAgICBjb25zdCBjb21tZW50cyA9IFBhcnNlZEZpbGUuX2J1aWxkVFNEb2NDb21tZW50cyhwYXJzZVRTKGNvZGUpKTtcblxuICAgICAgcmV0dXJuIG5ldyBQYXJzZWRGaWxlKHtcbiAgICAgICAgcGF0aDogb3B0aW9ucy5wYXRoLFxuICAgICAgICByZWxhdGl2ZVBhdGg6IHJlbGF0aXZlUGF0aCxcbiAgICAgICAgZG9jQ29tbWVudHM6IGNvbW1lbnRzLFxuICAgICAgICBjb2RlOiBjb2RlXG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIFBhcnNlZEZpbGUuX3BhcnNlSlMoY29kZSwgb3B0aW9ucyk7XG4gICAgfVxuICB9XG59XG5cbiJdfQ==