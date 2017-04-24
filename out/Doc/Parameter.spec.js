'use strict';

var _Parameter = require('./Parameter');

var _Parameter2 = _interopRequireDefault(_Parameter);

var _powerAssert = require('power-assert');

var _powerAssert2 = _interopRequireDefault(_powerAssert);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('Parameter', function () {
  it('should work normally', function () {
    (0, _powerAssert2.default)(_Parameter2.default.parse);
    (0, _powerAssert2.default)(_Parameter2.default.parse('{Object} name'));
    (0, _powerAssert2.default)(_Parameter2.default.parse('{Object} name description'));
    (0, _powerAssert2.default)(_Parameter2.default.parse('{Object} name\n      description\n    '));

    _powerAssert2.default.equal(_Parameter2.default.parse('{Object} name').type, 'Object');
    _powerAssert2.default.equal(_Parameter2.default.parse('{Object} name').name, 'name');
    _powerAssert2.default.equal(_Parameter2.default.parse('{Object} options.name').name, 'options.name');
    (0, _powerAssert2.default)(_Parameter2.default.parse('{Object} [name]').isOptional);
    _powerAssert2.default.equal(_Parameter2.default.parse('{Object} [name]').name, 'name');
    _powerAssert2.default.equal(_Parameter2.default.parse('{Object} name desc').description, 'desc');
    _powerAssert2.default.equal(_Parameter2.default.parse('{Object} [name] desc').description, 'desc');

    _powerAssert2.default.equal(_Parameter2.default.parse('{Boolean} name This is a description.').description, 'This is a description.');
    _powerAssert2.default.ok(_Parameter2.default.parse('{Boolean} name \nThis is\n a description.\n'));
  });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9Eb2MvUGFyYW1ldGVyLnNwZWMuanMiXSwibmFtZXMiOlsiZGVzY3JpYmUiLCJpdCIsInBhcnNlIiwiZXF1YWwiLCJ0eXBlIiwibmFtZSIsImlzT3B0aW9uYWwiLCJkZXNjcmlwdGlvbiIsIm9rIl0sIm1hcHBpbmdzIjoiOztBQUFBOzs7O0FBQ0E7Ozs7OztBQUVBQSxTQUFTLFdBQVQsRUFBc0IsWUFBTTtBQUMxQkMsS0FBRyxzQkFBSCxFQUEyQixZQUFNO0FBQy9CLCtCQUFPLG9CQUFVQyxLQUFqQjtBQUNBLCtCQUFPLG9CQUFVQSxLQUFWLENBQWdCLGVBQWhCLENBQVA7QUFDQSwrQkFBTyxvQkFBVUEsS0FBVixDQUFnQiwyQkFBaEIsQ0FBUDtBQUNBLCtCQUFPLG9CQUFVQSxLQUFWLDBDQUFQOztBQUlBLDBCQUFPQyxLQUFQLENBQWEsb0JBQVVELEtBQVYsQ0FBZ0IsZUFBaEIsRUFBaUNFLElBQTlDLEVBQW9ELFFBQXBEO0FBQ0EsMEJBQU9ELEtBQVAsQ0FBYSxvQkFBVUQsS0FBVixDQUFnQixlQUFoQixFQUFpQ0csSUFBOUMsRUFBb0QsTUFBcEQ7QUFDQSwwQkFBT0YsS0FBUCxDQUFhLG9CQUFVRCxLQUFWLENBQWdCLHVCQUFoQixFQUF5Q0csSUFBdEQsRUFBNEQsY0FBNUQ7QUFDQSwrQkFBTyxvQkFBVUgsS0FBVixDQUFnQixpQkFBaEIsRUFBbUNJLFVBQTFDO0FBQ0EsMEJBQU9ILEtBQVAsQ0FBYSxvQkFBVUQsS0FBVixDQUFnQixpQkFBaEIsRUFBbUNHLElBQWhELEVBQXNELE1BQXREO0FBQ0EsMEJBQU9GLEtBQVAsQ0FBYSxvQkFBVUQsS0FBVixDQUFnQixvQkFBaEIsRUFBc0NLLFdBQW5ELEVBQWdFLE1BQWhFO0FBQ0EsMEJBQU9KLEtBQVAsQ0FBYSxvQkFBVUQsS0FBVixDQUFnQixzQkFBaEIsRUFBd0NLLFdBQXJELEVBQWtFLE1BQWxFOztBQUVBLDBCQUFPSixLQUFQLENBQWEsb0JBQVVELEtBQVYsQ0FBZ0IsdUNBQWhCLEVBQXlESyxXQUF0RSxFQUFtRix3QkFBbkY7QUFDQSwwQkFBT0MsRUFBUCxDQUFVLG9CQUFVTixLQUFWLENBQWdCLDZDQUFoQixDQUFWO0FBQ0QsR0FsQkQ7QUFtQkQsQ0FwQkQiLCJmaWxlIjoiUGFyYW1ldGVyLnNwZWMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUGFyYW1ldGVyIGZyb20gJy4vUGFyYW1ldGVyJztcbmltcG9ydCBhc3NlcnQgZnJvbSAncG93ZXItYXNzZXJ0JztcblxuZGVzY3JpYmUoJ1BhcmFtZXRlcicsICgpID0+IHtcbiAgaXQoJ3Nob3VsZCB3b3JrIG5vcm1hbGx5JywgKCkgPT4ge1xuICAgIGFzc2VydChQYXJhbWV0ZXIucGFyc2UpO1xuICAgIGFzc2VydChQYXJhbWV0ZXIucGFyc2UoJ3tPYmplY3R9IG5hbWUnKSk7XG4gICAgYXNzZXJ0KFBhcmFtZXRlci5wYXJzZSgne09iamVjdH0gbmFtZSBkZXNjcmlwdGlvbicpKTtcbiAgICBhc3NlcnQoUGFyYW1ldGVyLnBhcnNlKGB7T2JqZWN0fSBuYW1lXG4gICAgICBkZXNjcmlwdGlvblxuICAgIGApKTtcblxuICAgIGFzc2VydC5lcXVhbChQYXJhbWV0ZXIucGFyc2UoJ3tPYmplY3R9IG5hbWUnKS50eXBlLCAnT2JqZWN0Jyk7XG4gICAgYXNzZXJ0LmVxdWFsKFBhcmFtZXRlci5wYXJzZSgne09iamVjdH0gbmFtZScpLm5hbWUsICduYW1lJyk7XG4gICAgYXNzZXJ0LmVxdWFsKFBhcmFtZXRlci5wYXJzZSgne09iamVjdH0gb3B0aW9ucy5uYW1lJykubmFtZSwgJ29wdGlvbnMubmFtZScpO1xuICAgIGFzc2VydChQYXJhbWV0ZXIucGFyc2UoJ3tPYmplY3R9IFtuYW1lXScpLmlzT3B0aW9uYWwpO1xuICAgIGFzc2VydC5lcXVhbChQYXJhbWV0ZXIucGFyc2UoJ3tPYmplY3R9IFtuYW1lXScpLm5hbWUsICduYW1lJyk7XG4gICAgYXNzZXJ0LmVxdWFsKFBhcmFtZXRlci5wYXJzZSgne09iamVjdH0gbmFtZSBkZXNjJykuZGVzY3JpcHRpb24sICdkZXNjJyk7XG4gICAgYXNzZXJ0LmVxdWFsKFBhcmFtZXRlci5wYXJzZSgne09iamVjdH0gW25hbWVdIGRlc2MnKS5kZXNjcmlwdGlvbiwgJ2Rlc2MnKTtcblxuICAgIGFzc2VydC5lcXVhbChQYXJhbWV0ZXIucGFyc2UoJ3tCb29sZWFufSBuYW1lIFRoaXMgaXMgYSBkZXNjcmlwdGlvbi4nKS5kZXNjcmlwdGlvbiwgJ1RoaXMgaXMgYSBkZXNjcmlwdGlvbi4nKTtcbiAgICBhc3NlcnQub2soUGFyYW1ldGVyLnBhcnNlKCd7Qm9vbGVhbn0gbmFtZSBcXG5UaGlzIGlzXFxuIGEgZGVzY3JpcHRpb24uXFxuJykpO1xuICB9KTtcbn0pO1xuXG4iXX0=