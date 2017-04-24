'use strict';

var _DirectiveDoc = require('./DirectiveDoc');

var _DirectiveDoc2 = _interopRequireDefault(_DirectiveDoc);

var _ParsedFile = require('../ParsedFile');

var _ParsedFile2 = _interopRequireDefault(_ParsedFile);

var _powerAssert = require('power-assert');

var _powerAssert2 = _interopRequireDefault(_powerAssert);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('DirectiveDoc', function () {
  var file = _ParsedFile2.default.parse('\n    /**\n     * @directive hoge\n     * @description desc\n     */\n    @Directive({\n      selector: \'hoge\'\n    })\n    class FoobarElement {\n      // ...\n    }\n  ', {
    path: __dirname + '/foobar.ts',
    basePath: __dirname
  });

  it('should work normally', function () {
    var doc = _DirectiveDoc2.default.parse(file)[0];

    (0, _powerAssert2.default)(doc);
    (0, _powerAssert2.default)(doc.file instanceof _ParsedFile2.default);
    _powerAssert2.default.equal(doc.name, 'hoge');
    _powerAssert2.default.equal(doc.docType, 'directive');
    _powerAssert2.default.equal(doc.description, 'desc');
  });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9Eb2MvRGlyZWN0aXZlRG9jLnNwZWMuanMiXSwibmFtZXMiOlsiZGVzY3JpYmUiLCJmaWxlIiwicGFyc2UiLCJwYXRoIiwiX19kaXJuYW1lIiwiYmFzZVBhdGgiLCJpdCIsImRvYyIsImVxdWFsIiwibmFtZSIsImRvY1R5cGUiLCJkZXNjcmlwdGlvbiJdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7OztBQUVBQSxTQUFTLGNBQVQsRUFBeUIsWUFBTTtBQUM3QixNQUFNQyxPQUFPLHFCQUFXQyxLQUFYLGlMQVdWO0FBQ0RDLFVBQU1DLFlBQVksWUFEakI7QUFFREMsY0FBVUQ7QUFGVCxHQVhVLENBQWI7O0FBZ0JBRSxLQUFHLHNCQUFILEVBQTJCLFlBQU07QUFDL0IsUUFBTUMsTUFBTSx1QkFBYUwsS0FBYixDQUFtQkQsSUFBbkIsRUFBeUIsQ0FBekIsQ0FBWjs7QUFFQSwrQkFBT00sR0FBUDtBQUNBLCtCQUFPQSxJQUFJTixJQUFKLGdDQUFQO0FBQ0EsMEJBQU9PLEtBQVAsQ0FBYUQsSUFBSUUsSUFBakIsRUFBdUIsTUFBdkI7QUFDQSwwQkFBT0QsS0FBUCxDQUFhRCxJQUFJRyxPQUFqQixFQUEwQixXQUExQjtBQUNBLDBCQUFPRixLQUFQLENBQWFELElBQUlJLFdBQWpCLEVBQThCLE1BQTlCO0FBQ0QsR0FSRDtBQVNELENBMUJEIiwiZmlsZSI6IkRpcmVjdGl2ZURvYy5zcGVjLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IERpcmVjdGl2ZURvYyBmcm9tICcuL0RpcmVjdGl2ZURvYyc7XG5pbXBvcnQgUGFyc2VkRmlsZSBmcm9tICcuLi9QYXJzZWRGaWxlJztcbmltcG9ydCBhc3NlcnQgZnJvbSAncG93ZXItYXNzZXJ0JztcblxuZGVzY3JpYmUoJ0RpcmVjdGl2ZURvYycsICgpID0+IHtcbiAgY29uc3QgZmlsZSA9IFBhcnNlZEZpbGUucGFyc2UoYFxuICAgIC8qKlxuICAgICAqIEBkaXJlY3RpdmUgaG9nZVxuICAgICAqIEBkZXNjcmlwdGlvbiBkZXNjXG4gICAgICovXG4gICAgQERpcmVjdGl2ZSh7XG4gICAgICBzZWxlY3RvcjogJ2hvZ2UnXG4gICAgfSlcbiAgICBjbGFzcyBGb29iYXJFbGVtZW50IHtcbiAgICAgIC8vIC4uLlxuICAgIH1cbiAgYCwge1xuICAgIHBhdGg6IF9fZGlybmFtZSArICcvZm9vYmFyLnRzJyxcbiAgICBiYXNlUGF0aDogX19kaXJuYW1lLFxuICB9KTtcblxuICBpdCgnc2hvdWxkIHdvcmsgbm9ybWFsbHknLCAoKSA9PiB7XG4gICAgY29uc3QgZG9jID0gRGlyZWN0aXZlRG9jLnBhcnNlKGZpbGUpWzBdO1xuXG4gICAgYXNzZXJ0KGRvYyk7XG4gICAgYXNzZXJ0KGRvYy5maWxlIGluc3RhbmNlb2YgUGFyc2VkRmlsZSk7XG4gICAgYXNzZXJ0LmVxdWFsKGRvYy5uYW1lLCAnaG9nZScpO1xuICAgIGFzc2VydC5lcXVhbChkb2MuZG9jVHlwZSwgJ2RpcmVjdGl2ZScpO1xuICAgIGFzc2VydC5lcXVhbChkb2MuZGVzY3JpcHRpb24sICdkZXNjJyk7XG4gIH0pO1xufSk7XG5cbiJdfQ==