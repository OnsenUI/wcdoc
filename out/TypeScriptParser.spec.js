'use strict';

var _powerAssert = require('power-assert');

var _powerAssert2 = _interopRequireDefault(_powerAssert);

var _TypeScriptParser = require('./TypeScriptParser');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('TypeScriptParser', function () {
  it('should parse typescript code', function () {
    var code = '/** bbb */\nvar foo = 123;\n/** aaaa */\n@hoge()\nfunction aaa() {}\n/* foo */\n    ';
    var comments = (0, _TypeScriptParser.parse)(code);
    _powerAssert2.default.equal(comments[0].text, '/** bbb */');
    _powerAssert2.default.equal(comments[0].start, 0);
    _powerAssert2.default.equal(comments[0].end, '/** bbb */'.length);
    _powerAssert2.default.equal(comments[1].text, '/** aaaa */');
    _powerAssert2.default.equal(comments.length, 2);
  });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9UeXBlU2NyaXB0UGFyc2VyLnNwZWMuanMiXSwibmFtZXMiOlsiZGVzY3JpYmUiLCJpdCIsImNvZGUiLCJjb21tZW50cyIsImVxdWFsIiwidGV4dCIsInN0YXJ0IiwiZW5kIiwibGVuZ3RoIl0sIm1hcHBpbmdzIjoiOztBQUFBOzs7O0FBQ0E7Ozs7QUFFQUEsU0FBUyxrQkFBVCxFQUE2QixZQUFNO0FBQ2pDQyxLQUFHLDhCQUFILEVBQW1DLFlBQU07QUFDdkMsUUFBTUMsNkZBQU47QUFPQSxRQUFNQyxXQUFXLDZCQUFNRCxJQUFOLENBQWpCO0FBQ0EsMEJBQU9FLEtBQVAsQ0FBYUQsU0FBUyxDQUFULEVBQVlFLElBQXpCLEVBQStCLFlBQS9CO0FBQ0EsMEJBQU9ELEtBQVAsQ0FBYUQsU0FBUyxDQUFULEVBQVlHLEtBQXpCLEVBQWdDLENBQWhDO0FBQ0EsMEJBQU9GLEtBQVAsQ0FBYUQsU0FBUyxDQUFULEVBQVlJLEdBQXpCLEVBQThCLGFBQWFDLE1BQTNDO0FBQ0EsMEJBQU9KLEtBQVAsQ0FBYUQsU0FBUyxDQUFULEVBQVlFLElBQXpCLEVBQStCLGFBQS9CO0FBQ0EsMEJBQU9ELEtBQVAsQ0FBYUQsU0FBU0ssTUFBdEIsRUFBOEIsQ0FBOUI7QUFDRCxHQWREO0FBZUQsQ0FoQkQiLCJmaWxlIjoiVHlwZVNjcmlwdFBhcnNlci5zcGVjLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGFzc2VydCBmcm9tICdwb3dlci1hc3NlcnQnO1xuaW1wb3J0IHtwYXJzZX0gZnJvbSAnLi9UeXBlU2NyaXB0UGFyc2VyJztcblxuZGVzY3JpYmUoJ1R5cGVTY3JpcHRQYXJzZXInLCAoKSA9PiB7XG4gIGl0KCdzaG91bGQgcGFyc2UgdHlwZXNjcmlwdCBjb2RlJywgKCkgPT4ge1xuICAgIGNvbnN0IGNvZGUgPSBgLyoqIGJiYiAqL1xudmFyIGZvbyA9IDEyMztcbi8qKiBhYWFhICovXG5AaG9nZSgpXG5mdW5jdGlvbiBhYWEoKSB7fVxuLyogZm9vICovXG4gICAgYDtcbiAgICBjb25zdCBjb21tZW50cyA9IHBhcnNlKGNvZGUpO1xuICAgIGFzc2VydC5lcXVhbChjb21tZW50c1swXS50ZXh0LCAnLyoqIGJiYiAqLycpO1xuICAgIGFzc2VydC5lcXVhbChjb21tZW50c1swXS5zdGFydCwgMCk7XG4gICAgYXNzZXJ0LmVxdWFsKGNvbW1lbnRzWzBdLmVuZCwgJy8qKiBiYmIgKi8nLmxlbmd0aCk7XG4gICAgYXNzZXJ0LmVxdWFsKGNvbW1lbnRzWzFdLnRleHQsICcvKiogYWFhYSAqLycpO1xuICAgIGFzc2VydC5lcXVhbChjb21tZW50cy5sZW5ndGgsIDIpO1xuICB9KTtcbn0pO1xuXG4iXX0=