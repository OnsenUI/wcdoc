'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _ParsedFile = require('./ParsedFile');

var _ParsedFile2 = _interopRequireDefault(_ParsedFile);

var _powerAssert = require('power-assert');

var _powerAssert2 = _interopRequireDefault(_powerAssert);

var _typescript = require('typescript');

var ts = _interopRequireWildcard(_typescript);

var _TypeScriptParser = require('./TypeScriptParser');

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('ParsedFile', function () {
  it('should provide ParsedFile.parse()', function () {
    (0, _powerAssert2.default)(_ParsedFile2.default.parse);
  });

  it('should parse TypeScript file', function () {
    var file = _ParsedFile2.default.parse('\n      /** \n       * @param {string} hoge\n       */\n      function doAnything() { }\n    ', { path: __dirname + '/index.ts', basePath: __dirname });

    (0, _powerAssert2.default)(file);
    _powerAssert2.default.equal(_typeof(file.path), 'string');
    _powerAssert2.default.equal(_typeof(file.code), 'string');
    _powerAssert2.default.equal(_typeof(file.docComments.length), 'number');
    _powerAssert2.default.equal(file.docComments.length, 1);
    _powerAssert2.default.ok(file.docComments[0].tagdict);
    _powerAssert2.default.equal(file.relativePath, 'index.ts');
  });

  it('should provide serveral properties', function () {
    var file = _ParsedFile2.default.parse('\n      /** This is a doc comment. */\n      console.log("Hello world!");\n\n    ', { path: __dirname + '/index.js', basePath: __dirname });

    (0, _powerAssert2.default)(file);
    _powerAssert2.default.equal(_typeof(file.path), 'string');
    _powerAssert2.default.equal(_typeof(file.code), 'string');
    _powerAssert2.default.equal(_typeof(file.docComments.length), 'number');
    _powerAssert2.default.equal(file.docComments.length, 1);
    _powerAssert2.default.ok(file.docComments[0].tagdict);
    _powerAssert2.default.equal(file.relativePath, 'index.js');
  });

  it('should parse object spread operator', function () {
    var file = _ParsedFile2.default.parse('\n      /** This is a doc comment. */\n      const a = {foo: \'bar\'};\n      const b = {...a};\n    ', { path: __dirname + '/index.js', basePath: __dirname });

    (0, _powerAssert2.default)(file);
    _powerAssert2.default.equal(file.docComments.length, 1);
  });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9QYXJzZWRGaWxlLnNwZWMuanMiXSwibmFtZXMiOlsidHMiLCJkZXNjcmliZSIsIml0IiwicGFyc2UiLCJmaWxlIiwicGF0aCIsIl9fZGlybmFtZSIsImJhc2VQYXRoIiwiZXF1YWwiLCJjb2RlIiwiZG9jQ29tbWVudHMiLCJsZW5ndGgiLCJvayIsInRhZ2RpY3QiLCJyZWxhdGl2ZVBhdGgiXSwibWFwcGluZ3MiOiI7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7O0lBQVlBLEU7O0FBQ1o7Ozs7OztBQUVBQyxTQUFTLFlBQVQsRUFBdUIsWUFBTTtBQUMzQkMsS0FBRyxtQ0FBSCxFQUF3QyxZQUFNO0FBQzVDLCtCQUFPLHFCQUFXQyxLQUFsQjtBQUNELEdBRkQ7O0FBSUFELEtBQUcsOEJBQUgsRUFBbUMsWUFBTTtBQUN2QyxRQUFNRSxPQUFPLHFCQUFXRCxLQUFYLGtHQUtWLEVBQUNFLE1BQU1DLFlBQVksV0FBbkIsRUFBZ0NDLFVBQVVELFNBQTFDLEVBTFUsQ0FBYjs7QUFPQSwrQkFBT0YsSUFBUDtBQUNBLDBCQUFPSSxLQUFQLFNBQW9CSixLQUFLQyxJQUF6QixHQUErQixRQUEvQjtBQUNBLDBCQUFPRyxLQUFQLFNBQW9CSixLQUFLSyxJQUF6QixHQUErQixRQUEvQjtBQUNBLDBCQUFPRCxLQUFQLFNBQW9CSixLQUFLTSxXQUFMLENBQWlCQyxNQUFyQyxHQUE2QyxRQUE3QztBQUNBLDBCQUFPSCxLQUFQLENBQWFKLEtBQUtNLFdBQUwsQ0FBaUJDLE1BQTlCLEVBQXNDLENBQXRDO0FBQ0EsMEJBQU9DLEVBQVAsQ0FBVVIsS0FBS00sV0FBTCxDQUFpQixDQUFqQixFQUFvQkcsT0FBOUI7QUFDQSwwQkFBT0wsS0FBUCxDQUFhSixLQUFLVSxZQUFsQixFQUFnQyxVQUFoQztBQUNELEdBZkQ7O0FBaUJBWixLQUFHLG9DQUFILEVBQXlDLFlBQU07QUFDN0MsUUFBTUUsT0FBTyxxQkFBV0QsS0FBWCxzRkFJVixFQUFDRSxNQUFNQyxZQUFZLFdBQW5CLEVBQWdDQyxVQUFVRCxTQUExQyxFQUpVLENBQWI7O0FBTUEsK0JBQU9GLElBQVA7QUFDQSwwQkFBT0ksS0FBUCxTQUFvQkosS0FBS0MsSUFBekIsR0FBK0IsUUFBL0I7QUFDQSwwQkFBT0csS0FBUCxTQUFvQkosS0FBS0ssSUFBekIsR0FBK0IsUUFBL0I7QUFDQSwwQkFBT0QsS0FBUCxTQUFvQkosS0FBS00sV0FBTCxDQUFpQkMsTUFBckMsR0FBNkMsUUFBN0M7QUFDQSwwQkFBT0gsS0FBUCxDQUFhSixLQUFLTSxXQUFMLENBQWlCQyxNQUE5QixFQUFzQyxDQUF0QztBQUNBLDBCQUFPQyxFQUFQLENBQVVSLEtBQUtNLFdBQUwsQ0FBaUIsQ0FBakIsRUFBb0JHLE9BQTlCO0FBQ0EsMEJBQU9MLEtBQVAsQ0FBYUosS0FBS1UsWUFBbEIsRUFBZ0MsVUFBaEM7QUFDRCxHQWREOztBQWdCQVosS0FBRyxxQ0FBSCxFQUEwQyxZQUFNO0FBQzlDLFFBQU1FLE9BQU8scUJBQVdELEtBQVgsMEdBSVYsRUFBQ0UsTUFBTUMsWUFBWSxXQUFuQixFQUFnQ0MsVUFBVUQsU0FBMUMsRUFKVSxDQUFiOztBQU1BLCtCQUFPRixJQUFQO0FBQ0EsMEJBQU9JLEtBQVAsQ0FBYUosS0FBS00sV0FBTCxDQUFpQkMsTUFBOUIsRUFBc0MsQ0FBdEM7QUFDRCxHQVREO0FBVUQsQ0FoREQiLCJmaWxlIjoiUGFyc2VkRmlsZS5zcGVjLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFBhcnNlZEZpbGUgZnJvbSAnLi9QYXJzZWRGaWxlJztcbmltcG9ydCBhc3NlcnQgZnJvbSAncG93ZXItYXNzZXJ0JztcbmltcG9ydCAqIGFzIHRzIGZyb20gJ3R5cGVzY3JpcHQnO1xuaW1wb3J0IHtwYXJzZX0gZnJvbSAnLi9UeXBlU2NyaXB0UGFyc2VyJztcblxuZGVzY3JpYmUoJ1BhcnNlZEZpbGUnLCAoKSA9PiB7XG4gIGl0KCdzaG91bGQgcHJvdmlkZSBQYXJzZWRGaWxlLnBhcnNlKCknLCAoKSA9PiB7XG4gICAgYXNzZXJ0KFBhcnNlZEZpbGUucGFyc2UpO1xuICB9KTtcblxuICBpdCgnc2hvdWxkIHBhcnNlIFR5cGVTY3JpcHQgZmlsZScsICgpID0+IHtcbiAgICBjb25zdCBmaWxlID0gUGFyc2VkRmlsZS5wYXJzZShgXG4gICAgICAvKiogXG4gICAgICAgKiBAcGFyYW0ge3N0cmluZ30gaG9nZVxuICAgICAgICovXG4gICAgICBmdW5jdGlvbiBkb0FueXRoaW5nKCkgeyB9XG4gICAgYCwge3BhdGg6IF9fZGlybmFtZSArICcvaW5kZXgudHMnLCBiYXNlUGF0aDogX19kaXJuYW1lfSk7XG5cbiAgICBhc3NlcnQoZmlsZSk7XG4gICAgYXNzZXJ0LmVxdWFsKHR5cGVvZiBmaWxlLnBhdGgsICdzdHJpbmcnKTtcbiAgICBhc3NlcnQuZXF1YWwodHlwZW9mIGZpbGUuY29kZSwgJ3N0cmluZycpO1xuICAgIGFzc2VydC5lcXVhbCh0eXBlb2YgZmlsZS5kb2NDb21tZW50cy5sZW5ndGgsICdudW1iZXInKTtcbiAgICBhc3NlcnQuZXF1YWwoZmlsZS5kb2NDb21tZW50cy5sZW5ndGgsIDEpO1xuICAgIGFzc2VydC5vayhmaWxlLmRvY0NvbW1lbnRzWzBdLnRhZ2RpY3QpO1xuICAgIGFzc2VydC5lcXVhbChmaWxlLnJlbGF0aXZlUGF0aCwgJ2luZGV4LnRzJyk7XG4gIH0pO1xuXG4gIGl0KCdzaG91bGQgcHJvdmlkZSBzZXJ2ZXJhbCBwcm9wZXJ0aWVzJywgKCkgPT4ge1xuICAgIGNvbnN0IGZpbGUgPSBQYXJzZWRGaWxlLnBhcnNlKGBcbiAgICAgIC8qKiBUaGlzIGlzIGEgZG9jIGNvbW1lbnQuICovXG4gICAgICBjb25zb2xlLmxvZyhcIkhlbGxvIHdvcmxkIVwiKTtcblxuICAgIGAsIHtwYXRoOiBfX2Rpcm5hbWUgKyAnL2luZGV4LmpzJywgYmFzZVBhdGg6IF9fZGlybmFtZX0pO1xuXG4gICAgYXNzZXJ0KGZpbGUpO1xuICAgIGFzc2VydC5lcXVhbCh0eXBlb2YgZmlsZS5wYXRoLCAnc3RyaW5nJyk7XG4gICAgYXNzZXJ0LmVxdWFsKHR5cGVvZiBmaWxlLmNvZGUsICdzdHJpbmcnKTtcbiAgICBhc3NlcnQuZXF1YWwodHlwZW9mIGZpbGUuZG9jQ29tbWVudHMubGVuZ3RoLCAnbnVtYmVyJyk7XG4gICAgYXNzZXJ0LmVxdWFsKGZpbGUuZG9jQ29tbWVudHMubGVuZ3RoLCAxKTtcbiAgICBhc3NlcnQub2soZmlsZS5kb2NDb21tZW50c1swXS50YWdkaWN0KTtcbiAgICBhc3NlcnQuZXF1YWwoZmlsZS5yZWxhdGl2ZVBhdGgsICdpbmRleC5qcycpO1xuICB9KTtcblxuICBpdCgnc2hvdWxkIHBhcnNlIG9iamVjdCBzcHJlYWQgb3BlcmF0b3InLCAoKSA9PiB7XG4gICAgY29uc3QgZmlsZSA9IFBhcnNlZEZpbGUucGFyc2UoYFxuICAgICAgLyoqIFRoaXMgaXMgYSBkb2MgY29tbWVudC4gKi9cbiAgICAgIGNvbnN0IGEgPSB7Zm9vOiAnYmFyJ307XG4gICAgICBjb25zdCBiID0gey4uLmF9O1xuICAgIGAsIHtwYXRoOiBfX2Rpcm5hbWUgKyAnL2luZGV4LmpzJywgYmFzZVBhdGg6IF9fZGlybmFtZX0pO1xuXG4gICAgYXNzZXJ0KGZpbGUpO1xuICAgIGFzc2VydC5lcXVhbChmaWxlLmRvY0NvbW1lbnRzLmxlbmd0aCwgMSk7XG4gIH0pO1xufSk7XG5cbiJdfQ==