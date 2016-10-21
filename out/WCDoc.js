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
function parse(code) {
  var path = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  var config = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

  var parsed = _ParsedFile2.default.parse(code, { path: path, basePath: config.basePath || process.cwd() });

  return [].concat(_AttributeDoc2.default.parse(parsed), _ElementDoc2.default.parse(parsed), _MethodDoc2.default.parse(parsed), _ObjectDoc2.default.parse(parsed), _EventDoc2.default.parse(parsed), _PropertyDoc2.default.parse(parsed), _DirectiveDoc2.default.parse(parsed), _InputDoc2.default.parse(parsed), _OutputDoc2.default.parse(parsed));
}

/**
 * @param {Object} config
 * @param {Array} config.src
 * @param {string} config.basePath
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9XQ0RvYy5qcyJdLCJuYW1lcyI6WyJwYXJzZUZpbGUiLCJwYXJzZSIsInJ1biIsInBhdGgiLCJjb25maWciLCJQcm9taXNlIiwiZG9uZSIsImZhaWwiLCJyZXF1aXJlIiwicmVhZEZpbGUiLCJlcnJvciIsImNvZGUiLCJwYXJzZWQiLCJiYXNlUGF0aCIsInByb2Nlc3MiLCJjd2QiLCJjb25jYXQiLCJyZXNvbHZlIiwiYWJvcnQiLCJzcmMiLCJ0aGVuIiwibWFwIiwicGF0aHMiLCJyZXN1bHQiXSwibWFwcGluZ3MiOiI7Ozs7O1FBa0JnQkEsUyxHQUFBQSxTO1FBa0JBQyxLLEdBQUFBLEs7UUFzQkFDLEcsR0FBQUEsRzs7QUExRGhCOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7QUFFQTs7Ozs7QUFLTyxTQUFTRixTQUFULENBQW1CRyxJQUFuQixFQUF5QkMsTUFBekIsRUFBaUM7QUFDdEMsU0FBTyxJQUFJQyxPQUFKLENBQVksVUFBQ0MsSUFBRCxFQUFPQyxJQUFQLEVBQWdCO0FBQ2pDQyxZQUFRLElBQVIsRUFBY0MsUUFBZCxDQUF1Qk4sSUFBdkIsRUFBNkIsT0FBN0IsRUFBc0MsVUFBQ08sS0FBRCxFQUFRQyxJQUFSLEVBQWlCO0FBQ3JELFVBQUlELEtBQUosRUFBVztBQUNUSCxhQUFLRyxLQUFMO0FBQ0QsT0FGRCxNQUVPO0FBQ0xKLGFBQUtMLE1BQU1VLElBQU4sRUFBWVIsSUFBWixDQUFMO0FBQ0Q7QUFDRixLQU5EO0FBT0QsR0FSTSxDQUFQO0FBU0Q7O0FBRUQ7Ozs7OztBQU1PLFNBQVNGLEtBQVQsQ0FBZVUsSUFBZixFQUE2QztBQUFBLE1BQXhCUixJQUF3Qix1RUFBakIsRUFBaUI7QUFBQSxNQUFiQyxNQUFhLHVFQUFKLEVBQUk7O0FBQ2xELE1BQU1RLFNBQVMscUJBQVdYLEtBQVgsQ0FBaUJVLElBQWpCLEVBQXVCLEVBQUNSLE1BQU1BLElBQVAsRUFBYVUsVUFBVVQsT0FBT1MsUUFBUCxJQUFtQkMsUUFBUUMsR0FBUixFQUExQyxFQUF2QixDQUFmOztBQUdBLFNBQU8sR0FBR0MsTUFBSCxDQUNMLHVCQUFhZixLQUFiLENBQW1CVyxNQUFuQixDQURLLEVBRUwscUJBQVdYLEtBQVgsQ0FBaUJXLE1BQWpCLENBRkssRUFHTCxvQkFBVVgsS0FBVixDQUFnQlcsTUFBaEIsQ0FISyxFQUlMLG9CQUFVWCxLQUFWLENBQWdCVyxNQUFoQixDQUpLLEVBS0wsbUJBQVNYLEtBQVQsQ0FBZVcsTUFBZixDQUxLLEVBTUwsc0JBQVlYLEtBQVosQ0FBa0JXLE1BQWxCLENBTkssRUFPTCx1QkFBYVgsS0FBYixDQUFtQlcsTUFBbkIsQ0FQSyxFQVFMLG1CQUFTWCxLQUFULENBQWVXLE1BQWYsQ0FSSyxFQVNMLG9CQUFVWCxLQUFWLENBQWdCVyxNQUFoQixDQVRLLENBQVA7QUFXRDs7QUFFRDs7Ozs7QUFLTyxTQUFTVixHQUFULENBQWFFLE1BQWIsRUFBcUI7QUFDMUIsU0FBTyxJQUFJQyxPQUFKLENBQVksVUFBQ1ksT0FBRCxFQUFVQyxLQUFWLEVBQW9CO0FBQ3JDLDBCQUFPZCxPQUFPZSxHQUFkLEVBQW1CQyxJQUFuQixDQUF3QixpQkFBUztBQUMvQixzQkFBTUMsR0FBTixDQUFVQyxLQUFWLEVBQWlCLFVBQUNuQixJQUFELEVBQU9HLElBQVAsRUFBZ0I7QUFDL0JOLGtCQUFVRyxJQUFWLEVBQWdCQyxNQUFoQixFQUF3QmdCLElBQXhCLENBQTZCLGtCQUFVO0FBQ3JDZCxlQUFLLElBQUwsRUFBV2lCLE1BQVg7QUFDRCxTQUZEO0FBR0QsT0FKRCxFQUlHLFVBQUNiLEtBQUQsRUFBUWEsTUFBUixFQUFtQjtBQUFBOztBQUNwQk4sZ0JBQVEsWUFBR0QsTUFBSCxnQ0FBYU8sTUFBYixFQUFSO0FBQ0QsT0FORDtBQU9ELEtBUkQ7QUFTRCxHQVZNLENBQVA7QUFXRCIsImZpbGUiOiJXQ0RvYy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQYXJzZWRGaWxlIGZyb20gJy4vUGFyc2VkRmlsZSc7XG5pbXBvcnQgQXR0cmlidXRlRG9jIGZyb20gJy4vRG9jL0F0dHJpYnV0ZURvYyc7XG5pbXBvcnQgRWxlbWVudERvYyBmcm9tICcuL0RvYy9FbGVtZW50RG9jJztcbmltcG9ydCBPYmplY3REb2MgZnJvbSAnLi9Eb2MvT2JqZWN0RG9jJztcbmltcG9ydCBNZXRob2REb2MgZnJvbSAnLi9Eb2MvTWV0aG9kRG9jJztcbmltcG9ydCBFdmVudERvYyBmcm9tICcuL0RvYy9FdmVudERvYyc7XG5pbXBvcnQgUHJvcGVydHlEb2MgZnJvbSAnLi9Eb2MvUHJvcGVydHlEb2MnO1xuaW1wb3J0IE91dHB1dERvYyBmcm9tICcuL0RvYy9PdXRwdXREb2MnO1xuaW1wb3J0IElucHV0RG9jIGZyb20gJy4vRG9jL0lucHV0RG9jJztcbmltcG9ydCBEaXJlY3RpdmVEb2MgZnJvbSAnLi9Eb2MvRGlyZWN0aXZlRG9jJztcbmltcG9ydCBnbG9iYnkgZnJvbSAnZ2xvYmJ5JztcbmltcG9ydCBhc3luYyBmcm9tICdhc3luYyc7XG5cbi8qKlxuICogQHBhcmFtIHtzdHJpbmd9IHBhdGhcbiAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWdcbiAqIEByZXR1cm4ge1Byb21pc2V9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZUZpbGUocGF0aCwgY29uZmlnKSB7XG4gIHJldHVybiBuZXcgUHJvbWlzZSgoZG9uZSwgZmFpbCkgPT4ge1xuICAgIHJlcXVpcmUoJ2ZzJykucmVhZEZpbGUocGF0aCwgJ3V0Zi04JywgKGVycm9yLCBjb2RlKSA9PiB7XG4gICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgZmFpbChlcnJvcik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBkb25lKHBhcnNlKGNvZGUsIHBhdGgpKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSk7XG59XG5cbi8qKlxuICogQHBhcmFtIHtzdHJpbmd9IGNvZGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBbcGF0aF1cbiAqIEBwYXJhbSB7T2JqZWN0fSBbY29uZmlnXVxuICogQHBhcmFtIHtzdHJpbmd9IFtjb25maWcuYmFzZVBhdGhdXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZShjb2RlLCBwYXRoID0gJycsIGNvbmZpZyA9IHt9KSB7XG4gIGNvbnN0IHBhcnNlZCA9IFBhcnNlZEZpbGUucGFyc2UoY29kZSwge3BhdGg6IHBhdGgsIGJhc2VQYXRoOiBjb25maWcuYmFzZVBhdGggfHwgcHJvY2Vzcy5jd2QoKX0pO1xuXG5cbiAgcmV0dXJuIFtdLmNvbmNhdChcbiAgICBBdHRyaWJ1dGVEb2MucGFyc2UocGFyc2VkKSxcbiAgICBFbGVtZW50RG9jLnBhcnNlKHBhcnNlZCksXG4gICAgTWV0aG9kRG9jLnBhcnNlKHBhcnNlZCksXG4gICAgT2JqZWN0RG9jLnBhcnNlKHBhcnNlZCksXG4gICAgRXZlbnREb2MucGFyc2UocGFyc2VkKSxcbiAgICBQcm9wZXJ0eURvYy5wYXJzZShwYXJzZWQpLFxuICAgIERpcmVjdGl2ZURvYy5wYXJzZShwYXJzZWQpLFxuICAgIElucHV0RG9jLnBhcnNlKHBhcnNlZCksXG4gICAgT3V0cHV0RG9jLnBhcnNlKHBhcnNlZClcbiAgKTtcbn1cblxuLyoqXG4gKiBAcGFyYW0ge09iamVjdH0gY29uZmlnXG4gKiBAcGFyYW0ge0FycmF5fSBjb25maWcuc3JjXG4gKiBAcGFyYW0ge3N0cmluZ30gY29uZmlnLmJhc2VQYXRoXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBydW4oY29uZmlnKSB7XG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgYWJvcnQpID0+IHtcbiAgICBnbG9iYnkoY29uZmlnLnNyYykudGhlbihwYXRocyA9PiB7XG4gICAgICBhc3luYy5tYXAocGF0aHMsIChwYXRoLCBkb25lKSA9PiB7XG4gICAgICAgIHBhcnNlRmlsZShwYXRoLCBjb25maWcpLnRoZW4ocmVzdWx0ID0+IHtcbiAgICAgICAgICBkb25lKG51bGwsIHJlc3VsdCk7XG4gICAgICAgIH0pO1xuICAgICAgfSwgKGVycm9yLCByZXN1bHQpID0+IHtcbiAgICAgICAgcmVzb2x2ZShbXS5jb25jYXQoLi4ucmVzdWx0KSk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfSk7XG59XG4iXX0=