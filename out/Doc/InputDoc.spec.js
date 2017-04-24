'use strict';

var _InputDoc = require('./InputDoc');

var _InputDoc2 = _interopRequireDefault(_InputDoc);

var _ParsedFile = require('../ParsedFile');

var _ParsedFile2 = _interopRequireDefault(_ParsedFile);

var _powerAssert = require('power-assert');

var _powerAssert2 = _interopRequireDefault(_powerAssert);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('InputDoc', function () {
  var file = _ParsedFile2.default.parse('\n    /**\n     * @directive hoge\n     * @description desc\n     */\n    @Directive({\n      selector: \'hoge\'\n    })\n    class FoobarElement {\n      /**\n       * @input label\n       * @description desc\n       * @type {string}\n       */\n      @Input() set label(str) { }\n    }\n  ', {
    path: __dirname + '/foobar.ts',
    basePath: __dirname
  });

  it('should work normally', function () {
    var doc = _InputDoc2.default.parse(file)[0];

    (0, _powerAssert2.default)(doc);
    (0, _powerAssert2.default)(doc.file instanceof _ParsedFile2.default);
    _powerAssert2.default.equal(doc.name, 'label');
    _powerAssert2.default.equal(doc.docType, 'input');
    _powerAssert2.default.equal(doc.description, 'desc');
    _powerAssert2.default.equal(doc.type, '{string}');
  });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9Eb2MvSW5wdXREb2Muc3BlYy5qcyJdLCJuYW1lcyI6WyJkZXNjcmliZSIsImZpbGUiLCJwYXJzZSIsInBhdGgiLCJfX2Rpcm5hbWUiLCJiYXNlUGF0aCIsIml0IiwiZG9jIiwiZXF1YWwiLCJuYW1lIiwiZG9jVHlwZSIsImRlc2NyaXB0aW9uIiwidHlwZSJdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7OztBQUVBQSxTQUFTLFVBQVQsRUFBcUIsWUFBTTtBQUN6QixNQUFNQyxPQUFPLHFCQUFXQyxLQUFYLHdTQWdCVjtBQUNEQyxVQUFNQyxZQUFZLFlBRGpCO0FBRURDLGNBQVVEO0FBRlQsR0FoQlUsQ0FBYjs7QUFxQkFFLEtBQUcsc0JBQUgsRUFBMkIsWUFBTTtBQUMvQixRQUFNQyxNQUFNLG1CQUFTTCxLQUFULENBQWVELElBQWYsRUFBcUIsQ0FBckIsQ0FBWjs7QUFFQSwrQkFBT00sR0FBUDtBQUNBLCtCQUFPQSxJQUFJTixJQUFKLGdDQUFQO0FBQ0EsMEJBQU9PLEtBQVAsQ0FBYUQsSUFBSUUsSUFBakIsRUFBdUIsT0FBdkI7QUFDQSwwQkFBT0QsS0FBUCxDQUFhRCxJQUFJRyxPQUFqQixFQUEwQixPQUExQjtBQUNBLDBCQUFPRixLQUFQLENBQWFELElBQUlJLFdBQWpCLEVBQThCLE1BQTlCO0FBQ0EsMEJBQU9ILEtBQVAsQ0FBYUQsSUFBSUssSUFBakIsRUFBdUIsVUFBdkI7QUFDRCxHQVREO0FBVUQsQ0FoQ0QiLCJmaWxlIjoiSW5wdXREb2Muc3BlYy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBJbnB1dERvYyBmcm9tICcuL0lucHV0RG9jJztcbmltcG9ydCBQYXJzZWRGaWxlIGZyb20gJy4uL1BhcnNlZEZpbGUnO1xuaW1wb3J0IGFzc2VydCBmcm9tICdwb3dlci1hc3NlcnQnO1xuXG5kZXNjcmliZSgnSW5wdXREb2MnLCAoKSA9PiB7XG4gIGNvbnN0IGZpbGUgPSBQYXJzZWRGaWxlLnBhcnNlKGBcbiAgICAvKipcbiAgICAgKiBAZGlyZWN0aXZlIGhvZ2VcbiAgICAgKiBAZGVzY3JpcHRpb24gZGVzY1xuICAgICAqL1xuICAgIEBEaXJlY3RpdmUoe1xuICAgICAgc2VsZWN0b3I6ICdob2dlJ1xuICAgIH0pXG4gICAgY2xhc3MgRm9vYmFyRWxlbWVudCB7XG4gICAgICAvKipcbiAgICAgICAqIEBpbnB1dCBsYWJlbFxuICAgICAgICogQGRlc2NyaXB0aW9uIGRlc2NcbiAgICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICAgKi9cbiAgICAgIEBJbnB1dCgpIHNldCBsYWJlbChzdHIpIHsgfVxuICAgIH1cbiAgYCwge1xuICAgIHBhdGg6IF9fZGlybmFtZSArICcvZm9vYmFyLnRzJyxcbiAgICBiYXNlUGF0aDogX19kaXJuYW1lLFxuICB9KTtcblxuICBpdCgnc2hvdWxkIHdvcmsgbm9ybWFsbHknLCAoKSA9PiB7XG4gICAgY29uc3QgZG9jID0gSW5wdXREb2MucGFyc2UoZmlsZSlbMF07XG5cbiAgICBhc3NlcnQoZG9jKTtcbiAgICBhc3NlcnQoZG9jLmZpbGUgaW5zdGFuY2VvZiBQYXJzZWRGaWxlKTtcbiAgICBhc3NlcnQuZXF1YWwoZG9jLm5hbWUsICdsYWJlbCcpO1xuICAgIGFzc2VydC5lcXVhbChkb2MuZG9jVHlwZSwgJ2lucHV0Jyk7XG4gICAgYXNzZXJ0LmVxdWFsKGRvYy5kZXNjcmlwdGlvbiwgJ2Rlc2MnKTtcbiAgICBhc3NlcnQuZXF1YWwoZG9jLnR5cGUsICd7c3RyaW5nfScpO1xuICB9KTtcbn0pO1xuXG4iXX0=