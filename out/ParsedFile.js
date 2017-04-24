'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

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

      var ast = _espree2.default.parse(code, _extends({
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
        }
      }, options.espreeConfig));

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
     * @param {Object} options.espreeConfig
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9QYXJzZWRGaWxlLmpzIl0sIm5hbWVzIjpbInRzIiwiUGFyc2VkRmlsZSIsInBhcmFtcyIsInBhdGgiLCJFcnJvciIsInJlbGF0aXZlUGF0aCIsIl9jb2RlIiwiY29kZSIsIl9wYXRoIiwiX2RvY0NvbW1lbnRzIiwiZG9jQ29tbWVudHMiLCJfcmVsYXRpdmVQYXRoIiwiYXN0IiwiY29tbWVudHMiLCJmaWx0ZXIiLCJjb21tZW50IiwidmFsdWUiLCJzdWJzdHIiLCJtYXAiLCJzbGljZSIsInJlcGxhY2UiLCJsb2NhdGlvbiIsImxvYyIsInRhZ2RpY3QiLCJwYXJzZSIsInRleHQiLCJzdWJzdHJpbmciLCJsZW5ndGgiLCJzdGFydCIsImVuZCIsIm9wdGlvbnMiLCJyYW5nZSIsInJhdyIsInRva2VucyIsInRvbGVyYW50Iiwic291cmNlVHlwZSIsImVjbWFWZXJzaW9uIiwiZWNtYUZlYXR1cmVzIiwiZXhwZXJpbWVudGFsT2JqZWN0UmVzdFNwcmVhZCIsImVzcHJlZUNvbmZpZyIsIl9idWlsZERvY0NvbW1lbnRzIiwidW5kZWZpbmVkIiwiYmFzZVBhdGgiLCJlbmRzV2l0aCIsIl9idWlsZFRTRG9jQ29tbWVudHMiLCJfcGFyc2VKUyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7QUFDQTs7SUFBWUEsRTs7QUFDWjs7Ozs7Ozs7SUFFcUJDLFU7QUFDbkI7OztBQUdBLHNCQUFZQyxNQUFaLEVBQW9CO0FBQUE7O0FBQ2xCLFFBQUksT0FBT0EsT0FBT0MsSUFBZCxLQUF1QixRQUEzQixFQUFxQztBQUNuQyxZQUFNLElBQUlDLEtBQUosQ0FBVSw4QkFBVixDQUFOO0FBQ0Q7O0FBRUQsUUFBSSxPQUFPRixPQUFPRyxZQUFkLEtBQStCLFFBQW5DLEVBQTZDO0FBQzNDLFlBQU0sSUFBSUQsS0FBSixDQUFVLHNDQUFWLENBQU47QUFDRDs7QUFFRCxTQUFLRSxLQUFMLEdBQWFKLE9B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QixPQUFjLHVFQUFKLEVBQUk7O0FBQy9CLFVBQUksT0FBT3ZCLElBQVAsS0FBZ0IsUUFBcEIsRUFBOEI7QUFDNUIsY0FBTUgsTUFBTSxzQ0FBTixDQUFOO0FBQ0Q7O0FBRUQsVUFBSTBCLFFBQVEzQixJQUFSLElBQWdCMkIsUUFBUTNCLElBQVIsQ0FBYXdDLFFBQWIsQ0FBc0IsS0FBdEIsQ0FBcEIsRUFBa0Q7QUFDaEQsWUFBTXRDLGVBQWUsb0JBQVMsbUJBQVF5QixRQUFRWSxRQUFoQixDQUFULEVBQW9DWixRQUFRM0IsSUFBNUMsQ0FBckI7QUFDQSxZQUFNVSxXQUFXWixXQUFXMkMsbUJBQVgsQ0FBK0IsNkJBQVFyQyxJQUFSLENBQS9CLENBQWpCOztBQUVBLGVBQU8sSUFBSU4sVUFBSixDQUFlO0FBQ3BCRSxnQkFBTTJCLFFBQVEzQixJQURNO0FBRXBCRSx3QkFBY0EsWUFGTTtBQUdwQkssdUJBQWFHLFFBSE87QUFJcEJOLGdCQUFNQTtBQUpjLFNBQWYsQ0FBUDtBQU1ELE9BVkQsTUFVTztBQUNMLGVBQU9OLFdBQVc0QyxRQUFYLENBQW9CdEMsSUFBcEIsRUFBMEJ1QixPQUExQixDQUFQO0FBQ0Q7QUFDRjs7Ozs7O2tCQTNIa0I3QixVIiwiZmlsZSI6IlBhcnNlZEZpbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZ2xvYmJ5IGZyb20gJ2dsb2JieSc7XG5pbXBvcnQgZnMgZnJvbSAnZnMnO1xuaW1wb3J0IGVzcHJlZSBmcm9tICdlc3ByZWUnO1xuaW1wb3J0IGVzdHJhdmVyc2UgZnJvbSAnZXN0cmF2ZXJzZSc7XG5pbXBvcnQgVGFnRGljdCBmcm9tICcuL1RhZ0RpY3QnO1xuaW1wb3J0IHtyZWxhdGl2ZSwgcmVzb2x2ZX0gZnJvbSAncGF0aCc7XG5pbXBvcnQgKiBhcyB0cyBmcm9tICd0eXBlc2NyaXB0JztcbmltcG9ydCB7cGFyc2UgYXMgcGFyc2VUU30gZnJvbSAnLi9UeXBlU2NyaXB0UGFyc2VyJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGFyc2VkRmlsZSB7XG4gIC8qKlxuICAgKiBAcGFyYW0ge09iamVjdH0gcGFyYW1zXG4gICAqL1xuICBjb25zdHJ1Y3RvcihwYXJhbXMpIHtcbiAgICBpZiAodHlwZW9mIHBhcmFtcy5wYXRoICE9PSAnc3RyaW5nJykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdwYXJhbXMucGF0aCBtdXN0IGJlIGEgc3RyaW5nJyk7XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBwYXJhbXMucmVsYXRpdmVQYXRoICE9PSAnc3RyaW5nJykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdwYXJhbXMucmVsYXRpdmVQYXRoIG11c3QgYmUgYSBzdHJpbmcnKTtcbiAgICB9XG5cbiAgICB0aGlzLl9jb2RlID0gcGFyYW1zLmNvZGUgfHwgJyc7XG4gICAgdGhpcy5fcGF0aCA9IHBhcmFtcy5wYXRoO1xuICAgIHRoaXMuX2RvY0NvbW1lbnRzID0gcGFyYW1zLmRvY0NvbW1lbnRzIHx8IFtdO1xuICAgIHRoaXMuX3JlbGF0aXZlUGF0aCA9IHBhcmFtcy5yZWxhdGl2ZVBhdGg7XG4gIH1cblxuICBnZXQgY29kZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fY29kZTtcbiAgfVxuXG4gIGdldCBwYXRoKCkge1xuICAgIHJldHVybiB0aGlzLl9wYXRoO1xuICB9XG5cbiAgZ2V0IGRvY0NvbW1lbnRzKCkge1xuICAgIHJldHVybiB0aGlzLl9kb2NDb21tZW50cztcbiAgfVxuXG4gIGdldCByZWxhdGl2ZVBhdGgoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3JlbGF0aXZlUGF0aDtcbiAgfVxuXG4gIHN0YXRpYyBfYnVpbGREb2NDb21tZW50cyhhc3QpIHtcbiAgICByZXR1cm4gKGFzdC5jb21tZW50cyB8fCBbXSlcbiAgICAgIC5maWx0ZXIoY29tbWVudCA9PiBjb21tZW50LnZhbHVlLnN1YnN0cigwLCAxKSA9PT0gJyonKVxuICAgICAgLm1hcChjb21tZW50ID0+IHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICB2YWx1ZTogY29tbWVudC52YWx1ZS5zbGljZSgxKS5yZXBsYWNlKC9eICpcXCorL21nLCAnJyksIC8vIHJlbW92ZSBleHRyYSBzcGFjZXMgYW5kICcqJ1xuICAgICAgICAgIGxvY2F0aW9uOiBjb21tZW50LmxvYyxcbiAgICAgICAgfTtcbiAgICAgIH0pXG4gICAgICAubWFwKGNvbW1lbnQgPT4ge1xuICAgICAgICBjb21tZW50LnRhZ2RpY3QgPSBUYWdEaWN0LnBhcnNlKGNvbW1lbnQpO1xuXG4gICAgICAgIHJldHVybiBjb21tZW50O1xuICAgICAgfSk7XG4gIH1cblxuICBzdGF0aWMgX2J1aWxkVFNEb2NDb21tZW50cyhjb21tZW50cykge1xuICAgIHJldHVybiBjb21tZW50c1xuICAgICAgLm1hcChjb21tZW50ID0+IHtcbiAgICAgICAgY29uc3QgdGV4dCA9IGNvbW1lbnQudGV4dC5zdWJzdHJpbmcoMywgY29tbWVudC50ZXh0Lmxlbmd0aCAtIDIpLnJlcGxhY2UoL14gKlxcKisvbWcsICcnKTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICB2YWx1ZTogdGV4dCxcbiAgICAgICAgICBsb2NhdGlvbjoge3N0YXJ0OiBjb21tZW50LnN0YXJ0LCBlbmQ6IGNvbW1lbnQuZW5kfVxuICAgICAgICB9O1xuICAgICAgfSlcbiAgICAgIC5tYXAoY29tbWVudCA9PiB7XG4gICAgICAgIGNvbW1lbnQudGFnZGljdCA9IFRhZ0RpY3QucGFyc2UoY29tbWVudCk7XG5cbiAgICAgICAgcmV0dXJuIGNvbW1lbnQ7XG4gICAgICB9KTtcbiAgfVxuXG4gIHN0YXRpYyBfcGFyc2VKUyhjb2RlLCBvcHRpb25zID0ge30pIHtcbiAgICBjb25zdCBhc3QgPSBlc3ByZWUucGFyc2UoY29kZSwge1xuICAgICAgbG9jOiB0cnVlLFxuICAgICAgcmFuZ2U6IHRydWUsXG4gICAgICByYXc6IGZhbHNlLFxuICAgICAgdG9rZW5zOiB0cnVlLFxuICAgICAgY29tbWVudDogdHJ1ZSxcbiAgICAgIHRvbGVyYW50OiB0cnVlLFxuICAgICAgc291cmNlVHlwZTogJ21vZHVsZScsXG4gICAgICBlY21hVmVyc2lvbjogOCxcbiAgICAgIGVjbWFGZWF0dXJlczoge1xuICAgICAgICBleHBlcmltZW50YWxPYmplY3RSZXN0U3ByZWFkOiB0cnVlXG4gICAgICB9LFxuICAgICAgLi4ub3B0aW9ucy5lc3ByZWVDb25maWcgLy8gb3ZlcnJpZGUgZGVmYXVsdHNcbiAgICB9KTtcblxuICAgIGNvbnN0IGRvY0NvbW1lbnRzID0gUGFyc2VkRmlsZS5fYnVpbGREb2NDb21tZW50cyhhc3QpO1xuXG4gICAgY29uc3QgcGFyYW1zID0ge1xuICAgICAgY29kZTogY29kZSxcbiAgICAgIHBhdGg6IG9wdGlvbnMucGF0aCA/IHJlc29sdmUob3B0aW9ucy5wYXRoKSA6IHVuZGVmaW5lZCxcbiAgICAgIGRvY0NvbW1lbnRzOiBkb2NDb21tZW50c1xuICAgIH07XG5cbiAgICBpZiAob3B0aW9ucy5wYXRoICYmIG9wdGlvbnMuYmFzZVBhdGgpIHtcbiAgICAgIHBhcmFtcy5yZWxhdGl2ZVBhdGggPSByZWxhdGl2ZShyZXNvbHZlKG9wdGlvbnMuYmFzZVBhdGgpLCBvcHRpb25zLnBhdGgpO1xuICAgIH1cblxuICAgIHJldHVybiBuZXcgUGFyc2VkRmlsZShwYXJhbXMpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBjb2RlXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBvcHRpb25zLnBhdGhcbiAgICogQHBhcmFtIHtzdHJpbmd9IG9wdGlvbnMuYmFzZVBhdGhcbiAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnMuZXNwcmVlQ29uZmlnXG4gICAqL1xuICBzdGF0aWMgcGFyc2UoY29kZSwgb3B0aW9ucyA9IHt9KSB7XG4gICAgaWYgKHR5cGVvZiBjb2RlICE9PSAnc3RyaW5nJykge1xuICAgICAgdGhyb3cgRXJyb3IoJ1wiY29kZVwiIHBhcmFtZXRlciBzaG91bGQgYmUgYSBzdHJpbmcuJyk7XG4gICAgfVxuXG4gICAgaWYgKG9wdGlvbnMucGF0aCAmJiBvcHRpb25zLnBhdGguZW5kc1dpdGgoJy50cycpKSB7XG4gICAgICBjb25zdCByZWxhdGl2ZVBhdGggPSByZWxhdGl2ZShyZXNvbHZlKG9wdGlvbnMuYmFzZVBhdGgpLCBvcHRpb25zLnBhdGgpO1xuICAgICAgY29uc3QgY29tbWVudHMgPSBQYXJzZWRGaWxlLl9idWlsZFRTRG9jQ29tbWVudHMocGFyc2VUUyhjb2RlKSk7XG5cbiAgICAgIHJldHVybiBuZXcgUGFyc2VkRmlsZSh7XG4gICAgICAgIHBhdGg6IG9wdGlvbnMucGF0aCxcbiAgICAgICAgcmVsYXRpdmVQYXRoOiByZWxhdGl2ZVBhdGgsXG4gICAgICAgIGRvY0NvbW1lbnRzOiBjb21tZW50cyxcbiAgICAgICAgY29kZTogY29kZVxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBQYXJzZWRGaWxlLl9wYXJzZUpTKGNvZGUsIG9wdGlvbnMpO1xuICAgIH1cbiAgfVxufVxuXG4iXX0=