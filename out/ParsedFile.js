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
        sourceType: 'module',
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9QYXJzZWRGaWxlLmpzIl0sIm5hbWVzIjpbInRzIiwiUGFyc2VkRmlsZSIsInBhcmFtcyIsInBhdGgiLCJFcnJvciIsInJlbGF0aXZlUGF0aCIsIl9jb2RlIiwiY29kZSIsIl9wYXRoIiwiX2RvY0NvbW1lbnRzIiwiZG9jQ29tbWVudHMiLCJfcmVsYXRpdmVQYXRoIiwiYXN0IiwiY29tbWVudHMiLCJmaWx0ZXIiLCJjb21tZW50IiwidmFsdWUiLCJzdWJzdHIiLCJtYXAiLCJzbGljZSIsInJlcGxhY2UiLCJsb2NhdGlvbiIsImxvYyIsInRhZ2RpY3QiLCJwYXJzZSIsInRleHQiLCJzdWJzdHJpbmciLCJsZW5ndGgiLCJzdGFydCIsImVuZCIsIm9wdGlvbnMiLCJyYW5nZSIsInJhdyIsInRva2VucyIsInRvbGVyYW50Iiwic291cmNlVHlwZSIsImVjbWFWZXJzaW9uIiwiZWNtYUZlYXR1cmVzIiwiZXhwZXJpbWVudGFsT2JqZWN0UmVzdFNwcmVhZCIsIl9idWlsZERvY0NvbW1lbnRzIiwidW5kZWZpbmVkIiwiYmFzZVBhdGgiLCJlbmRzV2l0aCIsIl9idWlsZFRTRG9jQ29tbWVudHMiLCJfcGFyc2VKUyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7O0FBQ0E7O0lBQVlBLEU7O0FBQ1o7Ozs7Ozs7O0lBRXFCQyxVO0FBQ25COzs7QUFHQSxzQkFBWUMsTUFBWixFQUFvQjtBQUFBOztBQUNsQixRQUFJLE9BQU9BLE9BQU9DLElBQWQsS0FBdUIsUUFBM0IsRUFBcUM7QUFDbkMsWUFBTSxJQUFJQyxLQUFKLENBQVUsOEJBQVYsQ0FBTjtBQUNEOztBQUVELFFBQUksT0FBT0YsT0FBT0csWUFBZCxLQUErQixRQUFuQyxFQUE2QztBQUMzQyxZQUFNLElBQUlELEtBQUosQ0FBVSxzQ0FBVixDQUFOO0FBQ0Q7O0FBRUQsU0FBS0UsS0FBTCxHQUFhSixPQUFPSyxJQUFQLElBQWUsRUFB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LHVFQUFKLEVBQUk7O0FBQy9CLFVBQUksT0FBT3ZCLElBQVAsS0FBZ0IsUUFBcEIsRUFBOEI7QUFDNUIsY0FBTUgsTUFBTSxzQ0FBTixDQUFOO0FBQ0Q7O0FBRUQsVUFBSTBCLFFBQVEzQixJQUFSLElBQWdCMkIsUUFBUTNCLElBQVIsQ0FBYXVDLFFBQWIsQ0FBc0IsS0FBdEIsQ0FBcEIsRUFBa0Q7QUFDaEQsWUFBTXJDLGVBQWUsb0JBQVMsbUJBQVF5QixRQUFRVyxRQUFoQixDQUFULEVBQW9DWCxRQUFRM0IsSUFBNUMsQ0FBckI7QUFDQSxZQUFNVSxXQUFXWixXQUFXMEMsbUJBQVgsQ0FBK0IsNkJBQVFwQyxJQUFSLENBQS9CLENBQWpCOztBQUVBLGVBQU8sSUFBSU4sVUFBSixDQUFlO0FBQ3BCRSxnQkFBTTJCLFFBQVEzQixJQURNO0FBRXBCRSx3QkFBY0EsWUFGTTtBQUdwQkssdUJBQWFHLFFBSE87QUFJcEJOLGdCQUFNQTtBQUpjLFNBQWYsQ0FBUDtBQU1ELE9BVkQsTUFVTztBQUNMLGVBQU9OLFdBQVcyQyxRQUFYLENBQW9CckMsSUFBcEIsRUFBMEJ1QixPQUExQixDQUFQO0FBQ0Q7QUFDRjs7Ozs7O2tCQXpIa0I3QixVIiwiZmlsZSI6IlBhcnNlZEZpbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZ2xvYmJ5IGZyb20gJ2dsb2JieSc7XG5pbXBvcnQgZnMgZnJvbSAnZnMnO1xuaW1wb3J0IGVzcHJlZSBmcm9tICdlc3ByZWUnO1xuaW1wb3J0IGVzdHJhdmVyc2UgZnJvbSAnZXN0cmF2ZXJzZSc7XG5pbXBvcnQgVGFnRGljdCBmcm9tICcuL1RhZ0RpY3QnO1xuaW1wb3J0IHtyZWxhdGl2ZSwgcmVzb2x2ZX0gZnJvbSAncGF0aCc7XG5pbXBvcnQgKiBhcyB0cyBmcm9tICd0eXBlc2NyaXB0JztcbmltcG9ydCB7cGFyc2UgYXMgcGFyc2VUU30gZnJvbSAnLi9UeXBlU2NyaXB0UGFyc2VyJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGFyc2VkRmlsZSB7XG4gIC8qKlxuICAgKiBAcGFyYW0ge09iamVjdH0gcGFyYW1zXG4gICAqL1xuICBjb25zdHJ1Y3RvcihwYXJhbXMpIHtcbiAgICBpZiAodHlwZW9mIHBhcmFtcy5wYXRoICE9PSAnc3RyaW5nJykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdwYXJhbXMucGF0aCBtdXN0IGJlIGEgc3RyaW5nJyk7XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBwYXJhbXMucmVsYXRpdmVQYXRoICE9PSAnc3RyaW5nJykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdwYXJhbXMucmVsYXRpdmVQYXRoIG11c3QgYmUgYSBzdHJpbmcnKTtcbiAgICB9XG5cbiAgICB0aGlzLl9jb2RlID0gcGFyYW1zLmNvZGUgfHwgJyc7XG4gICAgdGhpcy5fcGF0aCA9IHBhcmFtcy5wYXRoO1xuICAgIHRoaXMuX2RvY0NvbW1lbnRzID0gcGFyYW1zLmRvY0NvbW1lbnRzIHx8IFtdO1xuICAgIHRoaXMuX3JlbGF0aXZlUGF0aCA9IHBhcmFtcy5yZWxhdGl2ZVBhdGg7XG4gIH1cblxuICBnZXQgY29kZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fY29kZTtcbiAgfVxuXG4gIGdldCBwYXRoKCkge1xuICAgIHJldHVybiB0aGlzLl9wYXRoO1xuICB9XG5cbiAgZ2V0IGRvY0NvbW1lbnRzKCkge1xuICAgIHJldHVybiB0aGlzLl9kb2NDb21tZW50cztcbiAgfVxuXG4gIGdldCByZWxhdGl2ZVBhdGgoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3JlbGF0aXZlUGF0aDtcbiAgfVxuXG4gIHN0YXRpYyBfYnVpbGREb2NDb21tZW50cyhhc3QpIHtcbiAgICByZXR1cm4gKGFzdC5jb21tZW50cyB8fCBbXSlcbiAgICAgIC5maWx0ZXIoY29tbWVudCA9PiBjb21tZW50LnZhbHVlLnN1YnN0cigwLCAxKSA9PT0gJyonKVxuICAgICAgLm1hcChjb21tZW50ID0+IHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICB2YWx1ZTogY29tbWVudC52YWx1ZS5zbGljZSgxKS5yZXBsYWNlKC9eICpcXCorL21nLCAnJyksIC8vIHJlbW92ZSBleHRyYSBzcGFjZXMgYW5kICcqJ1xuICAgICAgICAgIGxvY2F0aW9uOiBjb21tZW50LmxvYyxcbiAgICAgICAgfTtcbiAgICAgIH0pXG4gICAgICAubWFwKGNvbW1lbnQgPT4ge1xuICAgICAgICBjb21tZW50LnRhZ2RpY3QgPSBUYWdEaWN0LnBhcnNlKGNvbW1lbnQpO1xuXG4gICAgICAgIHJldHVybiBjb21tZW50O1xuICAgICAgfSk7XG4gIH1cblxuICBzdGF0aWMgX2J1aWxkVFNEb2NDb21tZW50cyhjb21tZW50cykge1xuICAgIHJldHVybiBjb21tZW50c1xuICAgICAgLm1hcChjb21tZW50ID0+IHtcbiAgICAgICAgY29uc3QgdGV4dCA9IGNvbW1lbnQudGV4dC5zdWJzdHJpbmcoMywgY29tbWVudC50ZXh0Lmxlbmd0aCAtIDIpLnJlcGxhY2UoL14gKlxcKisvbWcsICcnKTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICB2YWx1ZTogdGV4dCxcbiAgICAgICAgICBsb2NhdGlvbjoge3N0YXJ0OiBjb21tZW50LnN0YXJ0LCBlbmQ6IGNvbW1lbnQuZW5kfVxuICAgICAgICB9O1xuICAgICAgfSlcbiAgICAgIC5tYXAoY29tbWVudCA9PiB7XG4gICAgICAgIGNvbW1lbnQudGFnZGljdCA9IFRhZ0RpY3QucGFyc2UoY29tbWVudCk7XG5cbiAgICAgICAgcmV0dXJuIGNvbW1lbnQ7XG4gICAgICB9KTtcbiAgfVxuXG4gIHN0YXRpYyBfcGFyc2VKUyhjb2RlLCBvcHRpb25zID0ge30pIHtcbiAgICBjb25zdCBhc3QgPSBlc3ByZWUucGFyc2UoY29kZSwge1xuICAgICAgbG9jOiB0cnVlLFxuICAgICAgcmFuZ2U6IHRydWUsXG4gICAgICByYXc6IGZhbHNlLFxuICAgICAgdG9rZW5zOiB0cnVlLFxuICAgICAgY29tbWVudDogdHJ1ZSxcbiAgICAgIHRvbGVyYW50OiB0cnVlLFxuICAgICAgc291cmNlVHlwZTogJ21vZHVsZScsXG4gICAgICBlY21hVmVyc2lvbjogNyxcbiAgICAgIGVjbWFGZWF0dXJlczoge1xuICAgICAgICBleHBlcmltZW50YWxPYmplY3RSZXN0U3ByZWFkOiB0cnVlXG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBjb25zdCBkb2NDb21tZW50cyA9IFBhcnNlZEZpbGUuX2J1aWxkRG9jQ29tbWVudHMoYXN0KTtcblxuICAgIGNvbnN0IHBhcmFtcyA9IHtcbiAgICAgIGNvZGU6IGNvZGUsXG4gICAgICBwYXRoOiBvcHRpb25zLnBhdGggPyByZXNvbHZlKG9wdGlvbnMucGF0aCkgOiB1bmRlZmluZWQsXG4gICAgICBkb2NDb21tZW50czogZG9jQ29tbWVudHNcbiAgICB9O1xuXG4gICAgaWYgKG9wdGlvbnMucGF0aCAmJiBvcHRpb25zLmJhc2VQYXRoKSB7XG4gICAgICBwYXJhbXMucmVsYXRpdmVQYXRoID0gcmVsYXRpdmUocmVzb2x2ZShvcHRpb25zLmJhc2VQYXRoKSwgb3B0aW9ucy5wYXRoKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbmV3IFBhcnNlZEZpbGUocGFyYW1zKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gY29kZVxuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9uc1xuICAgKiBAcGFyYW0ge3N0cmluZ30gb3B0aW9ucy5wYXRoXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBvcHRpb25zLmJhc2VQYXRoXG4gICAqL1xuICBzdGF0aWMgcGFyc2UoY29kZSwgb3B0aW9ucyA9IHt9KSB7XG4gICAgaWYgKHR5cGVvZiBjb2RlICE9PSAnc3RyaW5nJykge1xuICAgICAgdGhyb3cgRXJyb3IoJ1wiY29kZVwiIHBhcmFtZXRlciBzaG91bGQgYmUgYSBzdHJpbmcuJyk7XG4gICAgfVxuXG4gICAgaWYgKG9wdGlvbnMucGF0aCAmJiBvcHRpb25zLnBhdGguZW5kc1dpdGgoJy50cycpKSB7XG4gICAgICBjb25zdCByZWxhdGl2ZVBhdGggPSByZWxhdGl2ZShyZXNvbHZlKG9wdGlvbnMuYmFzZVBhdGgpLCBvcHRpb25zLnBhdGgpO1xuICAgICAgY29uc3QgY29tbWVudHMgPSBQYXJzZWRGaWxlLl9idWlsZFRTRG9jQ29tbWVudHMocGFyc2VUUyhjb2RlKSk7XG5cbiAgICAgIHJldHVybiBuZXcgUGFyc2VkRmlsZSh7XG4gICAgICAgIHBhdGg6IG9wdGlvbnMucGF0aCxcbiAgICAgICAgcmVsYXRpdmVQYXRoOiByZWxhdGl2ZVBhdGgsXG4gICAgICAgIGRvY0NvbW1lbnRzOiBjb21tZW50cyxcbiAgICAgICAgY29kZTogY29kZVxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBQYXJzZWRGaWxlLl9wYXJzZUpTKGNvZGUsIG9wdGlvbnMpO1xuICAgIH1cbiAgfVxufVxuXG4iXX0=