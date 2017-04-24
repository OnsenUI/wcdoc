'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parse = parse;

var _typescript = require('typescript');

var ts = _interopRequireWildcard(_typescript);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var scanner = ts.createScanner(ts.ScriptTarget.Latest, /*skipTrivia*/false);

// Get doc comment tokens
function parse(code) {

  if (typeof code !== 'string') {
    throw Error('code parameter should be a string');
  }

  // Initialize scanner 
  scanner.setText(code);
  scanner.setOnError(function (message, length) {
    console.error(message);
  });
  scanner.setScriptTarget(ts.ScriptTarget.ES5);
  scanner.setLanguageVariant(ts.LanguageVariant.Standard);

  // Start the scanning
  var next = void 0,
      token = scanner.scan();
  var comments = [];

  while (token != ts.SyntaxKind.EndOfFileToken) {
    var start = scanner.getStartPos();
    next = scanner.scan();
    var end = scanner.getStartPos();

    if (token === ts.SyntaxKind.MultiLineCommentTrivia && code.substr(start, 3) === '/**') {
      comments.push({
        start: start,
        end: end,
        text: code.substring(start, end)
      });
    }
    token = next;
  }

  return comments;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9UeXBlU2NyaXB0UGFyc2VyLmpzIl0sIm5hbWVzIjpbInBhcnNlIiwidHMiLCJzY2FubmVyIiwiY3JlYXRlU2Nhbm5lciIsIlNjcmlwdFRhcmdldCIsIkxhdGVzdCIsImNvZGUiLCJFcnJvciIsInNldFRleHQiLCJzZXRPbkVycm9yIiwibWVzc2FnZSIsImxlbmd0aCIsImNvbnNvbGUiLCJlcnJvciIsInNldFNjcmlwdFRhcmdldCIsIkVTNSIsInNldExhbmd1YWdlVmFyaWFudCIsIkxhbmd1YWdlVmFyaWFudCIsIlN0YW5kYXJkIiwibmV4dCIsInRva2VuIiwic2NhbiIsImNvbW1lbnRzIiwiU3ludGF4S2luZCIsIkVuZE9mRmlsZVRva2VuIiwic3RhcnQiLCJnZXRTdGFydFBvcyIsImVuZCIsIk11bHRpTGluZUNvbW1lbnRUcml2aWEiLCJzdWJzdHIiLCJwdXNoIiwidGV4dCIsInN1YnN0cmluZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7UUFLZ0JBLEssR0FBQUEsSzs7QUFMaEI7O0lBQVlDLEU7Ozs7QUFFWixJQUFNQyxVQUFVRCxHQUFHRSxhQUFILENBQWlCRixHQUFHRyxZQUFILENBQWdCQyxNQUFqQyxFQUF5QyxjQUFlLEtBQXhELENBQWhCOztBQUVBO0FBQ08sU0FBU0wsS0FBVCxDQUFlTSxJQUFmLEVBQXFCOztBQUUxQixNQUFJLE9BQU9BLElBQVAsS0FBZ0IsUUFBcEIsRUFBOEI7QUFDNUIsVUFBTUMsTUFBTSxtQ0FBTixDQUFOO0FBQ0Q7O0FBRUQ7QUFDQUwsVUFBUU0sT0FBUixDQUFnQkYsSUFBaEI7QUFDQUosVUFBUU8sVUFBUixDQUFtQixVQUFDQyxPQUFELEVBQVVDLE1BQVYsRUFBcUI7QUFDdENDLFlBQVFDLEtBQVIsQ0FBY0gsT0FBZDtBQUNELEdBRkQ7QUFHQVIsVUFBUVksZUFBUixDQUF3QmIsR0FBR0csWUFBSCxDQUFnQlcsR0FBeEM7QUFDQWIsVUFBUWMsa0JBQVIsQ0FBMkJmLEdBQUdnQixlQUFILENBQW1CQyxRQUE5Qzs7QUFFQTtBQUNBLE1BQUlDLGFBQUo7QUFBQSxNQUFVQyxRQUFRbEIsUUFBUW1CLElBQVIsRUFBbEI7QUFDQSxNQUFNQyxXQUFXLEVBQWpCOztBQUVBLFNBQU9GLFNBQVNuQixHQUFHc0IsVUFBSCxDQUFjQyxjQUE5QixFQUE4QztBQUM1QyxRQUFNQyxRQUFRdkIsUUFBUXdCLFdBQVIsRUFBZDtBQUNBUCxXQUFPakIsUUFBUW1CLElBQVIsRUFBUDtBQUNBLFFBQU1NLE1BQU16QixRQUFRd0IsV0FBUixFQUFaOztBQUVBLFFBQUlOLFVBQVVuQixHQUFHc0IsVUFBSCxDQUFjSyxzQkFBeEIsSUFBa0R0QixLQUFLdUIsTUFBTCxDQUFZSixLQUFaLEVBQW1CLENBQW5CLE1BQTBCLEtBQWhGLEVBQXVGO0FBQ3JGSCxlQUFTUSxJQUFULENBQWM7QUFDWkwsZUFBT0EsS0FESztBQUVaRSxhQUFLQSxHQUZPO0FBR1pJLGNBQU16QixLQUFLMEIsU0FBTCxDQUFlUCxLQUFmLEVBQXNCRSxHQUF0QjtBQUhNLE9BQWQ7QUFLRDtBQUNEUCxZQUFRRCxJQUFSO0FBQ0Q7O0FBRUQsU0FBT0csUUFBUDtBQUNEIiwiZmlsZSI6IlR5cGVTY3JpcHRQYXJzZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyB0cyBmcm9tICd0eXBlc2NyaXB0JztcblxuY29uc3Qgc2Nhbm5lciA9IHRzLmNyZWF0ZVNjYW5uZXIodHMuU2NyaXB0VGFyZ2V0LkxhdGVzdCwgLypza2lwVHJpdmlhKi8gZmFsc2UpO1xuXG4vLyBHZXQgZG9jIGNvbW1lbnQgdG9rZW5zXG5leHBvcnQgZnVuY3Rpb24gcGFyc2UoY29kZSkge1xuXG4gIGlmICh0eXBlb2YgY29kZSAhPT0gJ3N0cmluZycpIHtcbiAgICB0aHJvdyBFcnJvcignY29kZSBwYXJhbWV0ZXIgc2hvdWxkIGJlIGEgc3RyaW5nJyk7XG4gIH1cblxuICAvLyBJbml0aWFsaXplIHNjYW5uZXIgXG4gIHNjYW5uZXIuc2V0VGV4dChjb2RlKTtcbiAgc2Nhbm5lci5zZXRPbkVycm9yKChtZXNzYWdlLCBsZW5ndGgpID0+IHtcbiAgICBjb25zb2xlLmVycm9yKG1lc3NhZ2UpO1xuICB9KTtcbiAgc2Nhbm5lci5zZXRTY3JpcHRUYXJnZXQodHMuU2NyaXB0VGFyZ2V0LkVTNSk7XG4gIHNjYW5uZXIuc2V0TGFuZ3VhZ2VWYXJpYW50KHRzLkxhbmd1YWdlVmFyaWFudC5TdGFuZGFyZCk7XG5cbiAgLy8gU3RhcnQgdGhlIHNjYW5uaW5nXG4gIGxldCBuZXh0LCB0b2tlbiA9IHNjYW5uZXIuc2NhbigpO1xuICBjb25zdCBjb21tZW50cyA9IFtdO1xuXG4gIHdoaWxlICh0b2tlbiAhPSB0cy5TeW50YXhLaW5kLkVuZE9mRmlsZVRva2VuKSB7XG4gICAgY29uc3Qgc3RhcnQgPSBzY2FubmVyLmdldFN0YXJ0UG9zKCk7XG4gICAgbmV4dCA9IHNjYW5uZXIuc2NhbigpO1xuICAgIGNvbnN0IGVuZCA9IHNjYW5uZXIuZ2V0U3RhcnRQb3MoKTtcblxuICAgIGlmICh0b2tlbiA9PT0gdHMuU3ludGF4S2luZC5NdWx0aUxpbmVDb21tZW50VHJpdmlhICYmIGNvZGUuc3Vic3RyKHN0YXJ0LCAzKSA9PT0gJy8qKicpIHtcbiAgICAgIGNvbW1lbnRzLnB1c2goe1xuICAgICAgICBzdGFydDogc3RhcnQsXG4gICAgICAgIGVuZDogZW5kLFxuICAgICAgICB0ZXh0OiBjb2RlLnN1YnN0cmluZyhzdGFydCwgZW5kKVxuICAgICAgfSk7XG4gICAgfVxuICAgIHRva2VuID0gbmV4dDtcbiAgfVxuXG4gIHJldHVybiBjb21tZW50cztcbn1cbiJdfQ==