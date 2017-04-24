'use strict';

var _AttributeDoc = require('./AttributeDoc');

var _AttributeDoc2 = _interopRequireDefault(_AttributeDoc);

var _ParsedFile = require('../ParsedFile');

var _ParsedFile2 = _interopRequireDefault(_ParsedFile);

var _powerAssert = require('power-assert');

var _powerAssert2 = _interopRequireDefault(_powerAssert);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('AttributeDoc', function () {
  var file = _ParsedFile2.default.parse('\n    /**\n     * @attribute foobar\n     */\n    class FoobarElement {\n      // ...\n    }\n  ', {
    path: __dirname + '/foobar.js',
    basePath: __dirname
  });

  it('should work normally', function () {
    var doc = _AttributeDoc2.default.parse(file)[0];

    (0, _powerAssert2.default)(doc);
    (0, _powerAssert2.default)(doc.tagdict);
    (0, _powerAssert2.default)(doc.file instanceof _ParsedFile2.default);
    _powerAssert2.default.equal(doc.name, 'foobar');
    _powerAssert2.default.equal(doc.docType, 'attribute');
  });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9Eb2MvQXR0cmlidXRlRG9jLnNwZWMuanMiXSwibmFtZXMiOlsiZGVzY3JpYmUiLCJmaWxlIiwicGFyc2UiLCJwYXRoIiwiX19kaXJuYW1lIiwiYmFzZVBhdGgiLCJpdCIsImRvYyIsInRhZ2RpY3QiLCJlcXVhbCIsIm5hbWUiLCJkb2NUeXBlIl0sIm1hcHBpbmdzIjoiOztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7O0FBRUFBLFNBQVMsY0FBVCxFQUF5QixZQUFNO0FBQzdCLE1BQU1DLE9BQU8scUJBQVdDLEtBQVgscUdBT1Y7QUFDREMsVUFBTUMsWUFBWSxZQURqQjtBQUVEQyxjQUFVRDtBQUZULEdBUFUsQ0FBYjs7QUFZQUUsS0FBRyxzQkFBSCxFQUEyQixZQUFNO0FBQy9CLFFBQU1DLE1BQU0sdUJBQWFMLEtBQWIsQ0FBbUJELElBQW5CLEVBQXlCLENBQXpCLENBQVo7O0FBRUEsK0JBQU9NLEdBQVA7QUFDQSwrQkFBT0EsSUFBSUMsT0FBWDtBQUNBLCtCQUFPRCxJQUFJTixJQUFKLGdDQUFQO0FBQ0EsMEJBQU9RLEtBQVAsQ0FBYUYsSUFBSUcsSUFBakIsRUFBdUIsUUFBdkI7QUFDQSwwQkFBT0QsS0FBUCxDQUFhRixJQUFJSSxPQUFqQixFQUEwQixXQUExQjtBQUNELEdBUkQ7QUFTRCxDQXRCRCIsImZpbGUiOiJBdHRyaWJ1dGVEb2Muc3BlYy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBBdHRyaWJ1dGVEb2MgZnJvbSAnLi9BdHRyaWJ1dGVEb2MnO1xuaW1wb3J0IFBhcnNlZEZpbGUgZnJvbSAnLi4vUGFyc2VkRmlsZSc7XG5pbXBvcnQgYXNzZXJ0IGZyb20gJ3Bvd2VyLWFzc2VydCc7XG5cbmRlc2NyaWJlKCdBdHRyaWJ1dGVEb2MnLCAoKSA9PiB7XG4gIGNvbnN0IGZpbGUgPSBQYXJzZWRGaWxlLnBhcnNlKGBcbiAgICAvKipcbiAgICAgKiBAYXR0cmlidXRlIGZvb2JhclxuICAgICAqL1xuICAgIGNsYXNzIEZvb2JhckVsZW1lbnQge1xuICAgICAgLy8gLi4uXG4gICAgfVxuICBgLCB7XG4gICAgcGF0aDogX19kaXJuYW1lICsgJy9mb29iYXIuanMnLFxuICAgIGJhc2VQYXRoOiBfX2Rpcm5hbWUsXG4gIH0pO1xuXG4gIGl0KCdzaG91bGQgd29yayBub3JtYWxseScsICgpID0+IHtcbiAgICBjb25zdCBkb2MgPSBBdHRyaWJ1dGVEb2MucGFyc2UoZmlsZSlbMF07XG5cbiAgICBhc3NlcnQoZG9jKTtcbiAgICBhc3NlcnQoZG9jLnRhZ2RpY3QpO1xuICAgIGFzc2VydChkb2MuZmlsZSBpbnN0YW5jZW9mIFBhcnNlZEZpbGUpO1xuICAgIGFzc2VydC5lcXVhbChkb2MubmFtZSwgJ2Zvb2JhcicpO1xuICAgIGFzc2VydC5lcXVhbChkb2MuZG9jVHlwZSwgJ2F0dHJpYnV0ZScpO1xuICB9KTtcbn0pO1xuXG4iXX0=