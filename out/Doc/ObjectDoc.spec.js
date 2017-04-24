'use strict';

var _ObjectDoc = require('./ObjectDoc');

var _ObjectDoc2 = _interopRequireDefault(_ObjectDoc);

var _ParsedFile = require('../ParsedFile');

var _ParsedFile2 = _interopRequireDefault(_ParsedFile);

var _powerAssert = require('power-assert');

var _powerAssert2 = _interopRequireDefault(_powerAssert);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('ObjectDoc', function () {
  var file = _ParsedFile2.default.parse('\n    /**\n     * @object foobar\n     */\n    class FoobarElement {\n      // ...\n    }\n  ', {
    path: __dirname + '/foobar.js',
    basePath: __dirname
  });

  it('should work normally', function () {
    var doc = _ObjectDoc2.default.parse(file)[0];

    (0, _powerAssert2.default)(doc);
    (0, _powerAssert2.default)(doc.file instanceof _ParsedFile2.default);
    _powerAssert2.default.equal(doc.name, 'foobar');
    _powerAssert2.default.equal(doc.docType, 'object');
  });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9Eb2MvT2JqZWN0RG9jLnNwZWMuanMiXSwibmFtZXMiOlsiZGVzY3JpYmUiLCJmaWxlIiwicGFyc2UiLCJwYXRoIiwiX19kaXJuYW1lIiwiYmFzZVBhdGgiLCJpdCIsImRvYyIsImVxdWFsIiwibmFtZSIsImRvY1R5cGUiXSwibWFwcGluZ3MiOiI7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7QUFFQUEsU0FBUyxXQUFULEVBQXNCLFlBQU07QUFDMUIsTUFBTUMsT0FBTyxxQkFBV0MsS0FBWCxrR0FPVjtBQUNEQyxVQUFNQyxZQUFZLFlBRGpCO0FBRURDLGNBQVVEO0FBRlQsR0FQVSxDQUFiOztBQVlBRSxLQUFHLHNCQUFILEVBQTJCLFlBQU07QUFDL0IsUUFBTUMsTUFBTSxvQkFBVUwsS0FBVixDQUFnQkQsSUFBaEIsRUFBc0IsQ0FBdEIsQ0FBWjs7QUFFQSwrQkFBT00sR0FBUDtBQUNBLCtCQUFPQSxJQUFJTixJQUFKLGdDQUFQO0FBQ0EsMEJBQU9PLEtBQVAsQ0FBYUQsSUFBSUUsSUFBakIsRUFBdUIsUUFBdkI7QUFDQSwwQkFBT0QsS0FBUCxDQUFhRCxJQUFJRyxPQUFqQixFQUEwQixRQUExQjtBQUNELEdBUEQ7QUFRRCxDQXJCRCIsImZpbGUiOiJPYmplY3REb2Muc3BlYy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBPYmplY3REb2MgZnJvbSAnLi9PYmplY3REb2MnO1xuaW1wb3J0IFBhcnNlZEZpbGUgZnJvbSAnLi4vUGFyc2VkRmlsZSc7XG5pbXBvcnQgYXNzZXJ0IGZyb20gJ3Bvd2VyLWFzc2VydCc7XG5cbmRlc2NyaWJlKCdPYmplY3REb2MnLCAoKSA9PiB7XG4gIGNvbnN0IGZpbGUgPSBQYXJzZWRGaWxlLnBhcnNlKGBcbiAgICAvKipcbiAgICAgKiBAb2JqZWN0IGZvb2JhclxuICAgICAqL1xuICAgIGNsYXNzIEZvb2JhckVsZW1lbnQge1xuICAgICAgLy8gLi4uXG4gICAgfVxuICBgLCB7XG4gICAgcGF0aDogX19kaXJuYW1lICsgJy9mb29iYXIuanMnLFxuICAgIGJhc2VQYXRoOiBfX2Rpcm5hbWUsXG4gIH0pO1xuXG4gIGl0KCdzaG91bGQgd29yayBub3JtYWxseScsICgpID0+IHtcbiAgICBjb25zdCBkb2MgPSBPYmplY3REb2MucGFyc2UoZmlsZSlbMF07XG5cbiAgICBhc3NlcnQoZG9jKTtcbiAgICBhc3NlcnQoZG9jLmZpbGUgaW5zdGFuY2VvZiBQYXJzZWRGaWxlKTtcbiAgICBhc3NlcnQuZXF1YWwoZG9jLm5hbWUsICdmb29iYXInKTtcbiAgICBhc3NlcnQuZXF1YWwoZG9jLmRvY1R5cGUsICdvYmplY3QnKTtcbiAgfSk7XG59KTtcblxuIl19