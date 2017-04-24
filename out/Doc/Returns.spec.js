'use strict';

var _Returns = require('./Returns');

var _Returns2 = _interopRequireDefault(_Returns);

var _powerAssert = require('power-assert');

var _powerAssert2 = _interopRequireDefault(_powerAssert);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('Returns', function () {
  it('should work normally', function () {
    (0, _powerAssert2.default)(_Returns2.default.parse);

    _powerAssert2.default.equal(_Returns2.default.parse('{Object}').type, 'Object');
    _powerAssert2.default.equal(_Returns2.default.parse('{Object} description').type, 'Object');
    _powerAssert2.default.equal(_Returns2.default.parse('{Object} \n description \n').description.trim(), 'description');
    _powerAssert2.default.equal(_Returns2.default.parse('description').description, 'description');
  });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9Eb2MvUmV0dXJucy5zcGVjLmpzIl0sIm5hbWVzIjpbImRlc2NyaWJlIiwiaXQiLCJwYXJzZSIsImVxdWFsIiwidHlwZSIsImRlc2NyaXB0aW9uIiwidHJpbSJdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7OztBQUNBOzs7Ozs7QUFFQUEsU0FBUyxTQUFULEVBQW9CLFlBQU07QUFDeEJDLEtBQUcsc0JBQUgsRUFBMkIsWUFBTTtBQUMvQiwrQkFBTyxrQkFBUUMsS0FBZjs7QUFFQSwwQkFBT0MsS0FBUCxDQUFhLGtCQUFRRCxLQUFSLENBQWMsVUFBZCxFQUEwQkUsSUFBdkMsRUFBNkMsUUFBN0M7QUFDQSwwQkFBT0QsS0FBUCxDQUFhLGtCQUFRRCxLQUFSLENBQWMsc0JBQWQsRUFBc0NFLElBQW5ELEVBQXlELFFBQXpEO0FBQ0EsMEJBQU9ELEtBQVAsQ0FBYSxrQkFBUUQsS0FBUiwrQkFBNENHLFdBQTVDLENBQXdEQyxJQUF4RCxFQUFiLEVBQTZFLGFBQTdFO0FBQ0EsMEJBQU9ILEtBQVAsQ0FBYSxrQkFBUUQsS0FBUixDQUFjLGFBQWQsRUFBNkJHLFdBQTFDLEVBQXVELGFBQXZEO0FBQ0QsR0FQRDtBQVFELENBVEQiLCJmaWxlIjoiUmV0dXJucy5zcGVjLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJldHVybnMgZnJvbSAnLi9SZXR1cm5zJztcbmltcG9ydCBhc3NlcnQgZnJvbSAncG93ZXItYXNzZXJ0JztcblxuZGVzY3JpYmUoJ1JldHVybnMnLCAoKSA9PiB7XG4gIGl0KCdzaG91bGQgd29yayBub3JtYWxseScsICgpID0+IHtcbiAgICBhc3NlcnQoUmV0dXJucy5wYXJzZSk7XG5cbiAgICBhc3NlcnQuZXF1YWwoUmV0dXJucy5wYXJzZSgne09iamVjdH0nKS50eXBlLCAnT2JqZWN0Jyk7XG4gICAgYXNzZXJ0LmVxdWFsKFJldHVybnMucGFyc2UoJ3tPYmplY3R9IGRlc2NyaXB0aW9uJykudHlwZSwgJ09iamVjdCcpO1xuICAgIGFzc2VydC5lcXVhbChSZXR1cm5zLnBhcnNlKGB7T2JqZWN0fSBcXG4gZGVzY3JpcHRpb24gXFxuYCkuZGVzY3JpcHRpb24udHJpbSgpLCAnZGVzY3JpcHRpb24nKTtcbiAgICBhc3NlcnQuZXF1YWwoUmV0dXJucy5wYXJzZSgnZGVzY3JpcHRpb24nKS5kZXNjcmlwdGlvbiwgJ2Rlc2NyaXB0aW9uJyk7XG4gIH0pO1xufSk7XG5cbiJdfQ==