'use strict';

var _WCDoc = require('./WCDoc');

var _powerAssert = require('power-assert');

var _powerAssert2 = _interopRequireDefault(_powerAssert);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('WCDoc', function () {
  it('should provide several functions', function () {
    _powerAssert2.default.ok(_WCDoc.run);
    _powerAssert2.default.ok(_WCDoc.parse);
    _powerAssert2.default.ok(_WCDoc.parseFile);
  });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9XQ0RvYy5zcGVjLmpzIl0sIm5hbWVzIjpbImRlc2NyaWJlIiwiaXQiLCJvayJdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7QUFDQTs7Ozs7O0FBRUFBLFNBQVMsT0FBVCxFQUFrQixZQUFNO0FBQ3RCQyxLQUFHLGtDQUFILEVBQXVDLFlBQU07QUFDM0MsMEJBQU9DLEVBQVA7QUFDQSwwQkFBT0EsRUFBUDtBQUNBLDBCQUFPQSxFQUFQO0FBQ0QsR0FKRDtBQUtELENBTkQiLCJmaWxlIjoiV0NEb2Muc3BlYy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7cnVuLCBwYXJzZSwgcGFyc2VGaWxlfSBmcm9tICcuL1dDRG9jJztcbmltcG9ydCBhc3NlcnQgZnJvbSAncG93ZXItYXNzZXJ0JztcblxuZGVzY3JpYmUoJ1dDRG9jJywgKCkgPT4ge1xuICBpdCgnc2hvdWxkIHByb3ZpZGUgc2V2ZXJhbCBmdW5jdGlvbnMnLCAoKSA9PiB7XG4gICAgYXNzZXJ0Lm9rKHJ1bik7XG4gICAgYXNzZXJ0Lm9rKHBhcnNlKTtcbiAgICBhc3NlcnQub2socGFyc2VGaWxlKTtcbiAgfSk7XG59KTtcblxuIl19