'use strict';

var _ElementDoc = require('./ElementDoc');

var _ElementDoc2 = _interopRequireDefault(_ElementDoc);

var _ParsedFile = require('../ParsedFile');

var _ParsedFile2 = _interopRequireDefault(_ParsedFile);

var _powerAssert = require('power-assert');

var _powerAssert2 = _interopRequireDefault(_powerAssert);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('ElementDoc', function () {
  var file = _ParsedFile2.default.parse('\n    /**\n     * @element x-foobar\n     * @description Hello World!\n     * @example \n     *   <x-foobar>\n     *     content\n     *   </x-foobar>\n     */\n    class FoobarElement {\n      // ...\n    }\n  ', {
    path: __dirname + '/foobar.js',
    basePath: __dirname
  });

  it('should work normally', function () {
    var doc = _ElementDoc2.default.parse(file)[0];

    _powerAssert2.default.ok(doc);
    _powerAssert2.default.ok(doc.file instanceof _ParsedFile2.default);

    _powerAssert2.default.equal(doc.docType, 'element');
    _powerAssert2.default.equal(doc.name, 'x-foobar');
    _powerAssert2.default.equal(doc.isDeprecated, false);
    _powerAssert2.default.equal(doc.examples[0], '<x-foobar>\n  content\n</x-foobar>');
    _powerAssert2.default.equal(doc.description, 'Hello World!');
  });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9Eb2MvRWxlbWVudERvYy5zcGVjLmpzIl0sIm5hbWVzIjpbImRlc2NyaWJlIiwiZmlsZSIsInBhcnNlIiwicGF0aCIsIl9fZGlybmFtZSIsImJhc2VQYXRoIiwiaXQiLCJkb2MiLCJvayIsImVxdWFsIiwiZG9jVHlwZSIsIm5hbWUiLCJpc0RlcHJlY2F0ZWQiLCJleGFtcGxlcyIsImRlc2NyaXB0aW9uIl0sIm1hcHBpbmdzIjoiOztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7O0FBRUFBLFNBQVMsWUFBVCxFQUF1QixZQUFNO0FBQzNCLE1BQU1DLE9BQU8scUJBQVdDLEtBQVgsd05BWVY7QUFDREMsVUFBTUMsWUFBWSxZQURqQjtBQUVEQyxjQUFVRDtBQUZULEdBWlUsQ0FBYjs7QUFpQkFFLEtBQUcsc0JBQUgsRUFBMkIsWUFBTTtBQUMvQixRQUFNQyxNQUFNLHFCQUFXTCxLQUFYLENBQWlCRCxJQUFqQixFQUF1QixDQUF2QixDQUFaOztBQUVBLDBCQUFPTyxFQUFQLENBQVVELEdBQVY7QUFDQSwwQkFBT0MsRUFBUCxDQUFVRCxJQUFJTixJQUFKLGdDQUFWOztBQUVBLDBCQUFPUSxLQUFQLENBQWFGLElBQUlHLE9BQWpCLEVBQTBCLFNBQTFCO0FBQ0EsMEJBQU9ELEtBQVAsQ0FBYUYsSUFBSUksSUFBakIsRUFBdUIsVUFBdkI7QUFDQSwwQkFBT0YsS0FBUCxDQUFhRixJQUFJSyxZQUFqQixFQUErQixLQUEvQjtBQUNBLDBCQUFPSCxLQUFQLENBQWFGLElBQUlNLFFBQUosQ0FBYSxDQUFiLENBQWIsRUFBOEIsb0NBQTlCO0FBQ0EsMEJBQU9KLEtBQVAsQ0FBYUYsSUFBSU8sV0FBakIsRUFBOEIsY0FBOUI7QUFDRCxHQVhEO0FBWUQsQ0E5QkQiLCJmaWxlIjoiRWxlbWVudERvYy5zcGVjLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEVsZW1lbnREb2MgZnJvbSAnLi9FbGVtZW50RG9jJztcbmltcG9ydCBQYXJzZWRGaWxlIGZyb20gJy4uL1BhcnNlZEZpbGUnO1xuaW1wb3J0IGFzc2VydCBmcm9tICdwb3dlci1hc3NlcnQnO1xuXG5kZXNjcmliZSgnRWxlbWVudERvYycsICgpID0+IHtcbiAgY29uc3QgZmlsZSA9IFBhcnNlZEZpbGUucGFyc2UoYFxuICAgIC8qKlxuICAgICAqIEBlbGVtZW50IHgtZm9vYmFyXG4gICAgICogQGRlc2NyaXB0aW9uIEhlbGxvIFdvcmxkIVxuICAgICAqIEBleGFtcGxlIFxuICAgICAqICAgPHgtZm9vYmFyPlxuICAgICAqICAgICBjb250ZW50XG4gICAgICogICA8L3gtZm9vYmFyPlxuICAgICAqL1xuICAgIGNsYXNzIEZvb2JhckVsZW1lbnQge1xuICAgICAgLy8gLi4uXG4gICAgfVxuICBgLCB7XG4gICAgcGF0aDogX19kaXJuYW1lICsgJy9mb29iYXIuanMnLFxuICAgIGJhc2VQYXRoOiBfX2Rpcm5hbWUsXG4gIH0pO1xuXG4gIGl0KCdzaG91bGQgd29yayBub3JtYWxseScsICgpID0+IHtcbiAgICBjb25zdCBkb2MgPSBFbGVtZW50RG9jLnBhcnNlKGZpbGUpWzBdO1xuXG4gICAgYXNzZXJ0Lm9rKGRvYyk7XG4gICAgYXNzZXJ0Lm9rKGRvYy5maWxlIGluc3RhbmNlb2YgUGFyc2VkRmlsZSk7XG5cbiAgICBhc3NlcnQuZXF1YWwoZG9jLmRvY1R5cGUsICdlbGVtZW50Jyk7XG4gICAgYXNzZXJ0LmVxdWFsKGRvYy5uYW1lLCAneC1mb29iYXInKTtcbiAgICBhc3NlcnQuZXF1YWwoZG9jLmlzRGVwcmVjYXRlZCwgZmFsc2UpO1xuICAgIGFzc2VydC5lcXVhbChkb2MuZXhhbXBsZXNbMF0sICc8eC1mb29iYXI+XFxuICBjb250ZW50XFxuPC94LWZvb2Jhcj4nKTtcbiAgICBhc3NlcnQuZXF1YWwoZG9jLmRlc2NyaXB0aW9uLCAnSGVsbG8gV29ybGQhJyk7XG4gIH0pO1xufSk7XG5cbiJdfQ==