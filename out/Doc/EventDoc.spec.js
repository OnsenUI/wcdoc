'use strict';

var _EventDoc = require('./EventDoc');

var _EventDoc2 = _interopRequireDefault(_EventDoc);

var _ParsedFile = require('../ParsedFile');

var _ParsedFile2 = _interopRequireDefault(_ParsedFile);

var _powerAssert = require('power-assert');

var _powerAssert2 = _interopRequireDefault(_powerAssert);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('EventDoc', function () {
  var file = _ParsedFile2.default.parse('\n    /**\n     * @event foobar\n     * @param {string} foo\n     */\n    class FoobarElement {\n      // ...\n    }\n  ', {
    path: __dirname + '/foobar.js',
    basePath: __dirname
  });

  it('should work normally', function () {
    var doc = _EventDoc2.default.parse(file)[0];

    (0, _powerAssert2.default)(doc);
    (0, _powerAssert2.default)(doc.file instanceof _ParsedFile2.default);
    (0, _powerAssert2.default)(doc.params);
    _powerAssert2.default.equal(doc.name, 'foobar');
    _powerAssert2.default.equal(doc.docType, 'event');
  });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9Eb2MvRXZlbnREb2Muc3BlYy5qcyJdLCJuYW1lcyI6WyJkZXNjcmliZSIsImZpbGUiLCJwYXJzZSIsInBhdGgiLCJfX2Rpcm5hbWUiLCJiYXNlUGF0aCIsIml0IiwiZG9jIiwicGFyYW1zIiwiZXF1YWwiLCJuYW1lIiwiZG9jVHlwZSJdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7OztBQUVBQSxTQUFTLFVBQVQsRUFBcUIsWUFBTTtBQUN6QixNQUFNQyxPQUFPLHFCQUFXQyxLQUFYLDZIQVFWO0FBQ0RDLFVBQU1DLFlBQVksWUFEakI7QUFFREMsY0FBVUQ7QUFGVCxHQVJVLENBQWI7O0FBYUFFLEtBQUcsc0JBQUgsRUFBMkIsWUFBTTtBQUMvQixRQUFNQyxNQUFNLG1CQUFTTCxLQUFULENBQWVELElBQWYsRUFBcUIsQ0FBckIsQ0FBWjs7QUFFQSwrQkFBT00sR0FBUDtBQUNBLCtCQUFPQSxJQUFJTixJQUFKLGdDQUFQO0FBQ0EsK0JBQU9NLElBQUlDLE1BQVg7QUFDQSwwQkFBT0MsS0FBUCxDQUFhRixJQUFJRyxJQUFqQixFQUF1QixRQUF2QjtBQUNBLDBCQUFPRCxLQUFQLENBQWFGLElBQUlJLE9BQWpCLEVBQTBCLE9BQTFCO0FBQ0QsR0FSRDtBQVNELENBdkJEIiwiZmlsZSI6IkV2ZW50RG9jLnNwZWMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgRXZlbnREb2MgZnJvbSAnLi9FdmVudERvYyc7XG5pbXBvcnQgUGFyc2VkRmlsZSBmcm9tICcuLi9QYXJzZWRGaWxlJztcbmltcG9ydCBhc3NlcnQgZnJvbSAncG93ZXItYXNzZXJ0JztcblxuZGVzY3JpYmUoJ0V2ZW50RG9jJywgKCkgPT4ge1xuICBjb25zdCBmaWxlID0gUGFyc2VkRmlsZS5wYXJzZShgXG4gICAgLyoqXG4gICAgICogQGV2ZW50IGZvb2JhclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBmb29cbiAgICAgKi9cbiAgICBjbGFzcyBGb29iYXJFbGVtZW50IHtcbiAgICAgIC8vIC4uLlxuICAgIH1cbiAgYCwge1xuICAgIHBhdGg6IF9fZGlybmFtZSArICcvZm9vYmFyLmpzJyxcbiAgICBiYXNlUGF0aDogX19kaXJuYW1lLFxuICB9KTtcblxuICBpdCgnc2hvdWxkIHdvcmsgbm9ybWFsbHknLCAoKSA9PiB7XG4gICAgY29uc3QgZG9jID0gRXZlbnREb2MucGFyc2UoZmlsZSlbMF07XG5cbiAgICBhc3NlcnQoZG9jKTtcbiAgICBhc3NlcnQoZG9jLmZpbGUgaW5zdGFuY2VvZiBQYXJzZWRGaWxlKTtcbiAgICBhc3NlcnQoZG9jLnBhcmFtcyk7XG4gICAgYXNzZXJ0LmVxdWFsKGRvYy5uYW1lLCAnZm9vYmFyJyk7XG4gICAgYXNzZXJ0LmVxdWFsKGRvYy5kb2NUeXBlLCAnZXZlbnQnKTtcbiAgfSk7XG59KTtcblxuIl19