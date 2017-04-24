'use strict';

var _PropertyDoc = require('./PropertyDoc');

var _PropertyDoc2 = _interopRequireDefault(_PropertyDoc);

var _ParsedFile = require('../ParsedFile');

var _ParsedFile2 = _interopRequireDefault(_ParsedFile);

var _powerAssert = require('power-assert');

var _powerAssert2 = _interopRequireDefault(_powerAssert);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('PropertyDoc', function () {
  var file = _ParsedFile2.default.parse('\n    /**\n     * @property foobar\n     */\n    class FoobarElement {\n      // ...\n    }\n  ', {
    path: __dirname + '/foobar.js',
    basePath: __dirname
  });

  it('should work normally', function () {
    var doc = _PropertyDoc2.default.parse(file)[0];

    (0, _powerAssert2.default)(doc);
    (0, _powerAssert2.default)(doc.file instanceof _ParsedFile2.default);
    _powerAssert2.default.equal(doc.name, 'foobar');
    _powerAssert2.default.equal(doc.docType, 'property');
  });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9Eb2MvUHJvcGVydHlEb2Muc3BlYy5qcyJdLCJuYW1lcyI6WyJkZXNjcmliZSIsImZpbGUiLCJwYXJzZSIsInBhdGgiLCJfX2Rpcm5hbWUiLCJiYXNlUGF0aCIsIml0IiwiZG9jIiwiZXF1YWwiLCJuYW1lIiwiZG9jVHlwZSJdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7OztBQUVBQSxTQUFTLGFBQVQsRUFBd0IsWUFBTTtBQUM1QixNQUFNQyxPQUFPLHFCQUFXQyxLQUFYLG9HQU9WO0FBQ0RDLFVBQU1DLFlBQVksWUFEakI7QUFFREMsY0FBVUQ7QUFGVCxHQVBVLENBQWI7O0FBWUFFLEtBQUcsc0JBQUgsRUFBMkIsWUFBTTtBQUMvQixRQUFNQyxNQUFNLHNCQUFZTCxLQUFaLENBQWtCRCxJQUFsQixFQUF3QixDQUF4QixDQUFaOztBQUVBLCtCQUFPTSxHQUFQO0FBQ0EsK0JBQU9BLElBQUlOLElBQUosZ0NBQVA7QUFDQSwwQkFBT08sS0FBUCxDQUFhRCxJQUFJRSxJQUFqQixFQUF1QixRQUF2QjtBQUNBLDBCQUFPRCxLQUFQLENBQWFELElBQUlHLE9BQWpCLEVBQTBCLFVBQTFCO0FBQ0QsR0FQRDtBQVFELENBckJEIiwiZmlsZSI6IlByb3BlcnR5RG9jLnNwZWMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUHJvcGVydHlEb2MgZnJvbSAnLi9Qcm9wZXJ0eURvYyc7XG5pbXBvcnQgUGFyc2VkRmlsZSBmcm9tICcuLi9QYXJzZWRGaWxlJztcbmltcG9ydCBhc3NlcnQgZnJvbSAncG93ZXItYXNzZXJ0JztcblxuZGVzY3JpYmUoJ1Byb3BlcnR5RG9jJywgKCkgPT4ge1xuICBjb25zdCBmaWxlID0gUGFyc2VkRmlsZS5wYXJzZShgXG4gICAgLyoqXG4gICAgICogQHByb3BlcnR5IGZvb2JhclxuICAgICAqL1xuICAgIGNsYXNzIEZvb2JhckVsZW1lbnQge1xuICAgICAgLy8gLi4uXG4gICAgfVxuICBgLCB7XG4gICAgcGF0aDogX19kaXJuYW1lICsgJy9mb29iYXIuanMnLFxuICAgIGJhc2VQYXRoOiBfX2Rpcm5hbWUsXG4gIH0pO1xuXG4gIGl0KCdzaG91bGQgd29yayBub3JtYWxseScsICgpID0+IHtcbiAgICBjb25zdCBkb2MgPSBQcm9wZXJ0eURvYy5wYXJzZShmaWxlKVswXTtcblxuICAgIGFzc2VydChkb2MpO1xuICAgIGFzc2VydChkb2MuZmlsZSBpbnN0YW5jZW9mIFBhcnNlZEZpbGUpO1xuICAgIGFzc2VydC5lcXVhbChkb2MubmFtZSwgJ2Zvb2JhcicpO1xuICAgIGFzc2VydC5lcXVhbChkb2MuZG9jVHlwZSwgJ3Byb3BlcnR5Jyk7XG4gIH0pO1xufSk7XG5cbiJdfQ==