'use strict';

var _OutputDoc = require('./OutputDoc');

var _OutputDoc2 = _interopRequireDefault(_OutputDoc);

var _ParsedFile = require('../ParsedFile');

var _ParsedFile2 = _interopRequireDefault(_ParsedFile);

var _powerAssert = require('power-assert');

var _powerAssert2 = _interopRequireDefault(_powerAssert);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('OutputDoc', function () {
  var file = _ParsedFile2.default.parse('\n    /**\n     * @directive hoge\n     * @description desc\n     */\n    @Directive({\n      selector: \'hoge\'\n    })\n    class FoobarElement {\n      /**\n       * @output checked\n       * @description desc\n       * @type {boolean}\n       */\n      @Onput() checked: EventEmitter<boolean> = new EventEmitter();\n    }\n  ', {
    path: __dirname + '/foobar.ts',
    basePath: __dirname
  });

  it('should work normally', function () {
    console.log(file);
    var doc = _OutputDoc2.default.parse(file)[0];

    (0, _powerAssert2.default)(doc);
    (0, _powerAssert2.default)(doc.file instanceof _ParsedFile2.default);
    _powerAssert2.default.equal(doc.name, 'checked');
    _powerAssert2.default.equal(doc.docType, 'output');
    _powerAssert2.default.equal(doc.description, 'desc');
    _powerAssert2.default.equal(doc.type, '{boolean}');
  });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9Eb2MvT3V0cHV0RG9jLnNwZWMuanMiXSwibmFtZXMiOlsiZGVzY3JpYmUiLCJmaWxlIiwicGFyc2UiLCJwYXRoIiwiX19kaXJuYW1lIiwiYmFzZVBhdGgiLCJpdCIsImNvbnNvbGUiLCJsb2ciLCJkb2MiLCJlcXVhbCIsIm5hbWUiLCJkb2NUeXBlIiwiZGVzY3JpcHRpb24iLCJ0eXBlIl0sIm1hcHBpbmdzIjoiOztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7O0FBRUFBLFNBQVMsV0FBVCxFQUFzQixZQUFNO0FBQzFCLE1BQU1DLE9BQU8scUJBQVdDLEtBQVgsOFVBZ0JWO0FBQ0RDLFVBQU1DLFlBQVksWUFEakI7QUFFREMsY0FBVUQ7QUFGVCxHQWhCVSxDQUFiOztBQXFCQUUsS0FBRyxzQkFBSCxFQUEyQixZQUFNO0FBQy9CQyxZQUFRQyxHQUFSLENBQVlQLElBQVo7QUFDQSxRQUFNUSxNQUFNLG9CQUFVUCxLQUFWLENBQWdCRCxJQUFoQixFQUFzQixDQUF0QixDQUFaOztBQUVBLCtCQUFPUSxHQUFQO0FBQ0EsK0JBQU9BLElBQUlSLElBQUosZ0NBQVA7QUFDQSwwQkFBT1MsS0FBUCxDQUFhRCxJQUFJRSxJQUFqQixFQUF1QixTQUF2QjtBQUNBLDBCQUFPRCxLQUFQLENBQWFELElBQUlHLE9BQWpCLEVBQTBCLFFBQTFCO0FBQ0EsMEJBQU9GLEtBQVAsQ0FBYUQsSUFBSUksV0FBakIsRUFBOEIsTUFBOUI7QUFDQSwwQkFBT0gsS0FBUCxDQUFhRCxJQUFJSyxJQUFqQixFQUF1QixXQUF2QjtBQUNELEdBVkQ7QUFXRCxDQWpDRCIsImZpbGUiOiJPdXRwdXREb2Muc3BlYy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBPdXRwdXREb2MgZnJvbSAnLi9PdXRwdXREb2MnO1xuaW1wb3J0IFBhcnNlZEZpbGUgZnJvbSAnLi4vUGFyc2VkRmlsZSc7XG5pbXBvcnQgYXNzZXJ0IGZyb20gJ3Bvd2VyLWFzc2VydCc7XG5cbmRlc2NyaWJlKCdPdXRwdXREb2MnLCAoKSA9PiB7XG4gIGNvbnN0IGZpbGUgPSBQYXJzZWRGaWxlLnBhcnNlKGBcbiAgICAvKipcbiAgICAgKiBAZGlyZWN0aXZlIGhvZ2VcbiAgICAgKiBAZGVzY3JpcHRpb24gZGVzY1xuICAgICAqL1xuICAgIEBEaXJlY3RpdmUoe1xuICAgICAgc2VsZWN0b3I6ICdob2dlJ1xuICAgIH0pXG4gICAgY2xhc3MgRm9vYmFyRWxlbWVudCB7XG4gICAgICAvKipcbiAgICAgICAqIEBvdXRwdXQgY2hlY2tlZFxuICAgICAgICogQGRlc2NyaXB0aW9uIGRlc2NcbiAgICAgICAqIEB0eXBlIHtib29sZWFufVxuICAgICAgICovXG4gICAgICBAT25wdXQoKSBjaGVja2VkOiBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gICAgfVxuICBgLCB7XG4gICAgcGF0aDogX19kaXJuYW1lICsgJy9mb29iYXIudHMnLFxuICAgIGJhc2VQYXRoOiBfX2Rpcm5hbWUsXG4gIH0pO1xuXG4gIGl0KCdzaG91bGQgd29yayBub3JtYWxseScsICgpID0+IHtcbiAgICBjb25zb2xlLmxvZyhmaWxlKTtcbiAgICBjb25zdCBkb2MgPSBPdXRwdXREb2MucGFyc2UoZmlsZSlbMF07XG5cbiAgICBhc3NlcnQoZG9jKTtcbiAgICBhc3NlcnQoZG9jLmZpbGUgaW5zdGFuY2VvZiBQYXJzZWRGaWxlKTtcbiAgICBhc3NlcnQuZXF1YWwoZG9jLm5hbWUsICdjaGVja2VkJyk7XG4gICAgYXNzZXJ0LmVxdWFsKGRvYy5kb2NUeXBlLCAnb3V0cHV0Jyk7XG4gICAgYXNzZXJ0LmVxdWFsKGRvYy5kZXNjcmlwdGlvbiwgJ2Rlc2MnKTtcbiAgICBhc3NlcnQuZXF1YWwoZG9jLnR5cGUsICd7Ym9vbGVhbn0nKTtcbiAgfSk7XG59KTtcblxuIl19