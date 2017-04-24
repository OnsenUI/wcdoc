'use strict';

var _Doc = require('./Doc');

var _Doc2 = _interopRequireDefault(_Doc);

var _ParsedFile = require('../ParsedFile');

var _ParsedFile2 = _interopRequireDefault(_ParsedFile);

var _powerAssert = require('power-assert');

var _powerAssert2 = _interopRequireDefault(_powerAssert);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('Doc', function () {
  var file = _ParsedFile2.default.parse('\n    /**\n     * @something\n     */\n    function foobar() {\n      // ...\n    }\n  ', {
    path: __dirname + '/foobar.js',
    basePath: __dirname
  });

  it('should work normally', function () {
    var doc = new _Doc2.default('foobar', file);

    (0, _powerAssert2.default)(doc);
    (0, _powerAssert2.default)(doc.file instanceof _ParsedFile2.default);
    (0, _powerAssert2.default)(typeof doc.docType === 'string');
  });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9Eb2MvRG9jLnNwZWMuanMiXSwibmFtZXMiOlsiZGVzY3JpYmUiLCJmaWxlIiwicGFyc2UiLCJwYXRoIiwiX19kaXJuYW1lIiwiYmFzZVBhdGgiLCJpdCIsImRvYyIsImRvY1R5cGUiXSwibWFwcGluZ3MiOiI7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7QUFFQUEsU0FBUyxLQUFULEVBQWdCLFlBQU07QUFDcEIsTUFBTUMsT0FBTyxxQkFBV0MsS0FBWCw0RkFPVjtBQUNEQyxVQUFNQyxZQUFZLFlBRGpCO0FBRURDLGNBQVVEO0FBRlQsR0FQVSxDQUFiOztBQVlBRSxLQUFHLHNCQUFILEVBQTJCLFlBQU07QUFDL0IsUUFBTUMsTUFBTSxrQkFBUSxRQUFSLEVBQWtCTixJQUFsQixDQUFaOztBQUVBLCtCQUFPTSxHQUFQO0FBQ0EsK0JBQU9BLElBQUlOLElBQUosZ0NBQVA7QUFDQSwrQkFBTyxPQUFPTSxJQUFJQyxPQUFYLEtBQXVCLFFBQTlCO0FBQ0QsR0FORDtBQU9ELENBcEJEIiwiZmlsZSI6IkRvYy5zcGVjLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IERvYyBmcm9tICcuL0RvYyc7XG5pbXBvcnQgUGFyc2VkRmlsZSBmcm9tICcuLi9QYXJzZWRGaWxlJztcbmltcG9ydCBhc3NlcnQgZnJvbSAncG93ZXItYXNzZXJ0JztcblxuZGVzY3JpYmUoJ0RvYycsICgpID0+IHtcbiAgY29uc3QgZmlsZSA9IFBhcnNlZEZpbGUucGFyc2UoYFxuICAgIC8qKlxuICAgICAqIEBzb21ldGhpbmdcbiAgICAgKi9cbiAgICBmdW5jdGlvbiBmb29iYXIoKSB7XG4gICAgICAvLyAuLi5cbiAgICB9XG4gIGAsIHtcbiAgICBwYXRoOiBfX2Rpcm5hbWUgKyAnL2Zvb2Jhci5qcycsXG4gICAgYmFzZVBhdGg6IF9fZGlybmFtZSxcbiAgfSk7XG5cbiAgaXQoJ3Nob3VsZCB3b3JrIG5vcm1hbGx5JywgKCkgPT4ge1xuICAgIGNvbnN0IGRvYyA9IG5ldyBEb2MoJ2Zvb2JhcicsIGZpbGUpO1xuXG4gICAgYXNzZXJ0KGRvYyk7XG4gICAgYXNzZXJ0KGRvYy5maWxlIGluc3RhbmNlb2YgUGFyc2VkRmlsZSk7XG4gICAgYXNzZXJ0KHR5cGVvZiBkb2MuZG9jVHlwZSA9PT0gJ3N0cmluZycpO1xuICB9KTtcbn0pO1xuXG4iXX0=