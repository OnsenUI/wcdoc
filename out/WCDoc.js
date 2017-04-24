'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseFile = parseFile;
exports.parse = parse;
exports.run = run;

var _ParsedFile = require('./ParsedFile');

var _ParsedFile2 = _interopRequireDefault(_ParsedFile);

var _AttributeDoc = require('./Doc/AttributeDoc');

var _AttributeDoc2 = _interopRequireDefault(_AttributeDoc);

var _ElementDoc = require('./Doc/ElementDoc');

var _ElementDoc2 = _interopRequireDefault(_ElementDoc);

var _ObjectDoc = require('./Doc/ObjectDoc');

var _ObjectDoc2 = _interopRequireDefault(_ObjectDoc);

var _MethodDoc = require('./Doc/MethodDoc');

var _MethodDoc2 = _interopRequireDefault(_MethodDoc);

var _EventDoc = require('./Doc/EventDoc');

var _EventDoc2 = _interopRequireDefault(_EventDoc);

var _PropertyDoc = require('./Doc/PropertyDoc');

var _PropertyDoc2 = _interopRequireDefault(_PropertyDoc);

var _OutputDoc = require('./Doc/OutputDoc');

var _OutputDoc2 = _interopRequireDefault(_OutputDoc);

var _InputDoc = require('./Doc/InputDoc');

var _InputDoc2 = _interopRequireDefault(_InputDoc);

var _DirectiveDoc = require('./Doc/DirectiveDoc');

var _DirectiveDoc2 = _interopRequireDefault(_DirectiveDoc);

var _globby = require('globby');

var _globby2 = _interopRequireDefault(_globby);

var _async = require('async');

var _async2 = _interopRequireDefault(_async);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

/**
 * @param {string} path
 * @param {Object} config
 * @return {Promise}
 */
function parseFile(path, config) {
  return new Promise(function (done, fail) {
    require('fs').readFile(path, 'utf-8', function (error, code) {
      if (error) {
        fail(error);
      } else {
        done(parse(code, path, config));
      }
    });
  });
}

/**
 * @param {string} code
 * @param {string} [path]
 * @param {Object} [config]
 * @param {string} [config.basePath]
 * @param {Object} [config.espreeConfig]
 */
function parse(code) {
  var path = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  var config = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

  var parsed = _ParsedFile2.default.parse(code, { path: path, basePath: config.basePath || process.cwd(), espreeConfig: config.espreeConfig });

  return [].concat(_AttributeDoc2.default.parse(parsed), _ElementDoc2.default.parse(parsed), _MethodDoc2.default.parse(parsed), _ObjectDoc2.default.parse(parsed), _EventDoc2.default.parse(parsed), _PropertyDoc2.default.parse(parsed), _DirectiveDoc2.default.parse(parsed), _InputDoc2.default.parse(parsed), _OutputDoc2.default.parse(parsed));
}

/**
 * @param {Object} config
 * @param {Array} config.src
 * @param {string} config.basePath
 * @param {Object} config.espreeConfig
 */
function run(config) {
  return new Promise(function (resolve, abort) {
    (0, _globby2.default)(config.src).then(function (paths) {
      _async2.default.map(paths, function (path, done) {
        parseFile(path, config).then(function (result) {
          done(null, result);
        });
      }, function (error, result) {
        var _ref;

        resolve((_ref = []).concat.apply(_ref, _toConsumableArray(result)));
      });
    });
  });
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9XQ0RvYy5qcyJdLCJuYW1lcyI6WyJwYXJzZUZpbGUiLCJwYXJzZSIsInJ1biIsInBhdGgiLCJjb25maWciLCJQcm9taXNlIiwiZG9uZSIsImZhaWwiLCJyZXF1aXJlIiwicmVhZEZpbGUiLCJlcnJvciIsImNvZGUiLCJwYXJzZWQiLCJiYXNlUGF0aCIsInByb2Nlc3MiLCJjd2QiLCJlc3ByZWVDb25maWciLCJjb25jYXQiLCJyZXNvbHZlIiwiYWJvcnQiLCJzcmMiLCJ0aGVuIiwibWFwIiwicGF0aHMiLCJyZXN1bHQiXSwibWFwcGluZ3MiOiI7Ozs7O1FBa0JnQkEsUyxHQUFBQSxTO1FBbUJBQyxLLEdBQUFBLEs7UUF1QkFDLEcsR0FBQUEsRzs7QUE1RGhCOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7QUFFQTs7Ozs7QUFLTyxTQUFTRixTQUFULENBQW1CRyxJQUFuQixFQUF5QkMsTUFBekIsRUFBaUM7QUFDdEMsU0FBTyxJQUFJQyxPQUFKLENBQVksVUFBQ0MsSUFBRCxFQUFPQyxJQUFQLEVBQWdCO0FBQ2pDQyxZQUFRLElBQVIsRUFBY0MsUUFBZCxDQUF1Qk4sSUFBdkIsRUFBNkIsT0FBN0IsRUFBc0MsVUFBQ08sS0FBRCxFQUFRQyxJQUFSLEVBQWlCO0FBQ3JELFVBQUlELEtBQUosRUFBVztBQUNUSCxhQUFLRyxLQUFMO0FBQ0QsT0FGRCxNQUVPO0FBQ0xKLGFBQUtMLE1BQU1VLElBQU4sRUFBWVIsSUFBWixFQUFrQkMsTUFBbEIsQ0FBTDtBQUNEO0FBQ0YsS0FORDtBQU9ELEdBUk0sQ0FBUDtBQVNEOztBQUVEOzs7Ozs7O0FBT08sU0FBU0gsS0FBVCxDQUFlVSxJQUFmLEVBQTZDO0FBQUEsTUFBeEJSLElBQXdCLHVFQUFqQixFQUFpQjtBQUFBLE1BQWJDLE1BQWEsdUVBQUosRUFBSTs7QUFDbEQsTUFBTVEsU0FBUyxxQkFBV1gsS0FBWCxDQUFpQlUsSUFBakIsRUFBdUIsRUFBQ1IsTUFBTUEsSUFBUCxFQUFhVSxVQUFVVCxPQUFPUyxRQUFQLElBQW1CQyxRQUFRQyxHQUFSLEVBQTFDLEVBQXlEQyxjQUFjWixPQUFPWSxZQUE5RSxFQUF2QixDQUFmOztBQUdBLFNBQU8sR0FBR0MsTUFBSCxDQUNMLHVCQUFhaEIsS0FBYixDQUFtQlcsTUFBbkIsQ0FESyxFQUVMLHFCQUFXWCxLQUFYLENBQWlCVyxNQUFqQixDQUZLLEVBR0wsb0JBQVVYLEtBQVYsQ0FBZ0JXLE1BQWhCLENBSEssRUFJTCxvQkFBVVgsS0FBVixDQUFnQlcsTUFBaEIsQ0FKSyxFQUtMLG1CQUFTWCxLQUFULENBQWVXLE1BQWYsQ0FMSyxFQU1MLHNCQUFZWCxLQUFaLENBQWtCVyxNQUFsQixDQU5LLEVBT0wsdUJBQWFYLEtBQWIsQ0FBbUJXLE1BQW5CLENBUEssRUFRTCxtQkFBU1gsS0FBVCxDQUFlVyxNQUFmLENBUkssRUFTTCxvQkFBVVgsS0FBVixDQUFnQlcsTUFBaEIsQ0FUSyxDQUFQO0FBV0Q7O0FBRUQ7Ozs7OztBQU1PLFNBQVNWLEdBQVQsQ0FBYUUsTUFBYixFQUFxQjtBQUMxQixTQUFPLElBQUlDLE9BQUosQ0FBWSxVQUFDYSxPQUFELEVBQVVDLEtBQVYsRUFBb0I7QUFDckMsMEJBQU9mLE9BQU9nQixHQUFkLEVBQW1CQyxJQUFuQixDQUF3QixpQkFBUztBQUMvQixzQkFBTUMsR0FBTixDQUFVQyxLQUFWLEVBQWlCLFVBQUNwQixJQUFELEVBQU9HLElBQVAsRUFBZ0I7QUFDL0JOLGtCQUFVRyxJQUFWLEVBQWdCQyxNQUFoQixFQUF3QmlCLElBQXhCLENBQTZCLGtCQUFVO0FBQ3JDZixlQUFLLElBQUwsRUFBV2tCLE1BQVg7QUFDRCxTQUZEO0FBR0QsT0FKRCxFQUlHLFVBQUNkLEtBQUQsRUFBUWMsTUFBUixFQUFtQjtBQUFBOztBQUNwQk4sZ0JBQVEsWUFBR0QsTUFBSCxnQ0FBYU8sTUFBYixFQUFSO0FBQ0QsT0FORDtBQU9ELEtBUkQ7QUFTRCxHQVZNLENBQVA7QUFXRCIsImZpbGUiOiJXQ0RvYy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQYXJzZWRGaWxlIGZyb20gJy4vUGFyc2VkRmlsZSc7XG5pbXBvcnQgQXR0cmlidXRlRG9jIGZyb20gJy4vRG9jL0F0dHJpYnV0ZURvYyc7XG5pbXBvcnQgRWxlbWVudERvYyBmcm9tICcuL0RvYy9FbGVtZW50RG9jJztcbmltcG9ydCBPYmplY3REb2MgZnJvbSAnLi9Eb2MvT2JqZWN0RG9jJztcbmltcG9ydCBNZXRob2REb2MgZnJvbSAnLi9Eb2MvTWV0aG9kRG9jJztcbmltcG9ydCBFdmVudERvYyBmcm9tICcuL0RvYy9FdmVudERvYyc7XG5pbXBvcnQgUHJvcGVydHlEb2MgZnJvbSAnLi9Eb2MvUHJvcGVydHlEb2MnO1xuaW1wb3J0IE91dHB1dERvYyBmcm9tICcuL0RvYy9PdXRwdXREb2MnO1xuaW1wb3J0IElucHV0RG9jIGZyb20gJy4vRG9jL0lucHV0RG9jJztcbmltcG9ydCBEaXJlY3RpdmVEb2MgZnJvbSAnLi9Eb2MvRGlyZWN0aXZlRG9jJztcbmltcG9ydCBnbG9iYnkgZnJvbSAnZ2xvYmJ5JztcbmltcG9ydCBhc3luYyBmcm9tICdhc3luYyc7XG5cbi8qKlxuICogQHBhcmFtIHtzdHJpbmd9IHBhdGhcbiAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWdcbiAqIEByZXR1cm4ge1Byb21pc2V9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZUZpbGUocGF0aCwgY29uZmlnKSB7XG4gIHJldHVybiBuZXcgUHJvbWlzZSgoZG9uZSwgZmFpbCkgPT4ge1xuICAgIHJlcXVpcmUoJ2ZzJykucmVhZEZpbGUocGF0aCwgJ3V0Zi04JywgKGVycm9yLCBjb2RlKSA9PiB7XG4gICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgZmFpbChlcnJvcik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBkb25lKHBhcnNlKGNvZGUsIHBhdGgsIGNvbmZpZykpO1xuICAgICAgfVxuICAgIH0pO1xuICB9KTtcbn1cblxuLyoqXG4gKiBAcGFyYW0ge3N0cmluZ30gY29kZVxuICogQHBhcmFtIHtzdHJpbmd9IFtwYXRoXVxuICogQHBhcmFtIHtPYmplY3R9IFtjb25maWddXG4gKiBAcGFyYW0ge3N0cmluZ30gW2NvbmZpZy5iYXNlUGF0aF1cbiAqIEBwYXJhbSB7T2JqZWN0fSBbY29uZmlnLmVzcHJlZUNvbmZpZ11cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlKGNvZGUsIHBhdGggPSAnJywgY29uZmlnID0ge30pIHtcbiAgY29uc3QgcGFyc2VkID0gUGFyc2VkRmlsZS5wYXJzZShjb2RlLCB7cGF0aDogcGF0aCwgYmFzZVBhdGg6IGNvbmZpZy5iYXNlUGF0aCB8fCBwcm9jZXNzLmN3ZCgpLCBlc3ByZWVDb25maWc6IGNvbmZpZy5lc3ByZWVDb25maWd9KTtcblxuXG4gIHJldHVybiBbXS5jb25jYXQoXG4gICAgQXR0cmlidXRlRG9jLnBhcnNlKHBhcnNlZCksXG4gICAgRWxlbWVudERvYy5wYXJzZShwYXJzZWQpLFxuICAgIE1ldGhvZERvYy5wYXJzZShwYXJzZWQpLFxuICAgIE9iamVjdERvYy5wYXJzZShwYXJzZWQpLFxuICAgIEV2ZW50RG9jLnBhcnNlKHBhcnNlZCksXG4gICAgUHJvcGVydHlEb2MucGFyc2UocGFyc2VkKSxcbiAgICBEaXJlY3RpdmVEb2MucGFyc2UocGFyc2VkKSxcbiAgICBJbnB1dERvYy5wYXJzZShwYXJzZWQpLFxuICAgIE91dHB1dERvYy5wYXJzZShwYXJzZWQpXG4gICk7XG59XG5cbi8qKlxuICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZ1xuICogQHBhcmFtIHtBcnJheX0gY29uZmlnLnNyY1xuICogQHBhcmFtIHtzdHJpbmd9IGNvbmZpZy5iYXNlUGF0aFxuICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZy5lc3ByZWVDb25maWdcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJ1bihjb25maWcpIHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCBhYm9ydCkgPT4ge1xuICAgIGdsb2JieShjb25maWcuc3JjKS50aGVuKHBhdGhzID0+IHtcbiAgICAgIGFzeW5jLm1hcChwYXRocywgKHBhdGgsIGRvbmUpID0+IHtcbiAgICAgICAgcGFyc2VGaWxlKHBhdGgsIGNvbmZpZykudGhlbihyZXN1bHQgPT4ge1xuICAgICAgICAgIGRvbmUobnVsbCwgcmVzdWx0KTtcbiAgICAgICAgfSk7XG4gICAgICB9LCAoZXJyb3IsIHJlc3VsdCkgPT4ge1xuICAgICAgICByZXNvbHZlKFtdLmNvbmNhdCguLi5yZXN1bHQpKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9KTtcbn1cbiJdfQ==