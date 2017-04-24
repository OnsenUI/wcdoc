'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Doc2 = require('./Doc');

var _Doc3 = _interopRequireDefault(_Doc2);

var _Parameter = require('./Parameter');

var _Parameter2 = _interopRequireDefault(_Parameter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DOC_TYPE = 'event';

var EventDoc = function (_Doc) {
  _inherits(EventDoc, _Doc);

  /**
   * @param {object} params
   * @param {ParsedFile} params.file
   * @param {TagDict} params.tagdict
   */
  function EventDoc(params) {
    _classCallCheck(this, EventDoc);

    var _this = _possibleConstructorReturn(this, (EventDoc.__proto__ || Object.getPrototypeOf(EventDoc)).call(this, DOC_TYPE, params.file));

    _this._tagdict = params.tagdict;
    _this._params = _this._buildParameterDocs();
    return _this;
  }

  _createClass(EventDoc, [{
    key: '_buildParameterDocs',
    value: function _buildParameterDocs() {
      return this._tagdict.getMany('param').map(function (tag) {
        return _Parameter2.default.parse(tag);
      });
    }

    /**
     * @return {string}
     */

  }, {
    key: 'name',
    get: function get() {
      return this._tagdict.get(DOC_TYPE).trim();
    }

    /**
     * @return {array}
     */

  }, {
    key: 'params',
    get: function get() {
      return this._params;
    }

    /**
     * @return {TagDict}
     */

  }, {
    key: 'tagdict',
    get: function get() {
      return this._tagdict;
    }

    /**
     * @return {boolean}
     */

  }, {
    key: 'isDeprecated',
    get: function get() {
      return this._tagdict.has('deprecated');
    }

    /**
     * @return {string}
     */

  }, {
    key: 'description',
    get: function get() {
      return this._tagdict.get('desc') || this._tagdict.get('description');
    }

    /**
     * @return {Array}
     */

  }, {
    key: 'see',
    get: function get() {
      return this._tagdict.getMany('see');
    }

    /**
     * @param {ParsedFile} parsedFile
     * @return {array}
     */

  }], [{
    key: 'parse',
    value: function parse(parsedFile) {
      return parsedFile.docComments.filter(function (docComment) {
        return docComment.tagdict.has(DOC_TYPE);
      }).map(function (docComment) {
        return new EventDoc({
          file: parsedFile,
          tagdict: docComment.tagdict
        });
      });
    }
  }]);

  return EventDoc;
}(_Doc3.default);

exports.default = EventDoc;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9Eb2MvRXZlbnREb2MuanMiXSwibmFtZXMiOlsiRE9DX1RZUEUiLCJFdmVudERvYyIsInBhcmFtcyIsImZpbGUiLCJfdGFnZGljdCIsInRhZ2RpY3QiLCJfcGFyYW1zIiwiX2J1aWxkUGFyYW1ldGVyRG9jcyIsImdldE1hbnkiLCJtYXAiLCJwYXJzZSIsInRhZyIsImdldCIsInRyaW0iLCJoYXMiLCJwYXJzZWRGaWxlIiwiZG9jQ29tbWVudHMiLCJmaWx0ZXIiLCJkb2NDb21tZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLFdBQVcsT0FBakI7O0lBRXFCQyxROzs7QUFFbkI7Ozs7O0FBS0Esb0JBQVlDLE1BQVosRUFBb0I7QUFBQTs7QUFBQSxvSEFDWkYsUUFEWSxFQUNGRSxPQUFPQyxJQURMOztBQUVsQixVQUFLQyxRQUFMLEdBQWdCRixPQUFPRyxPQUF2QjtBQUNBLFVBQUtDLE9BQUwsR0FBZSxNQUFLQyxtQkFBTCxFQUFmO0FBSGtCO0FBSW5COzs7OzBDQUVxQjtBQUNwQixhQUFPLEtBQUtILFFBQUwsQ0FBY0ksT0FBZCxDQUFzQixPQUF0QixFQUErQkMsR0FBL0IsQ0FBbUM7QUFBQSxlQUFPLG9CQUFVQyxLQUFWLENBQWdCQyxHQUFoQixDQUFQO0FBQUEsT0FBbkMsQ0FBUDtBQUNEOztBQUVEOzs7Ozs7d0JBR1c7QUFDVCxhQUFPLEtBQUtQLFFBQUwsQ0FBY1EsR0FBZCxDQUFrQlosUUFBbEIsRUFBNEJhLElBQTVCLEVBQVA7QUFDRDs7QUFFRDs7Ozs7O3dCQUdhO0FBQ1gsYUFBTyxLQUFLUCxPQUFaO0FBQ0Q7O0FBRUQ7Ozs7Ozt3QkFHYztBQUNaLGFBQU8sS0FBS0YsUUFBWjtBQUNEOztBQUVEOzs7Ozs7d0JBR21CO0FBQ2pCLGFBQU8sS0FBS0EsUUFBTCxDQUFjVSxHQUFkLENBQWtCLFlBQWxCLENBQVA7QUFDRDs7QUFFRDs7Ozs7O3dCQUdrQjtBQUNoQixhQUFPLEtBQUtWLFFBQUwsQ0FBY1EsR0FBZCxDQUFrQixNQUFsQixLQUE2QixLQUFLUixRQUFMLENBQWNRLEdBQWQsQ0FBa0IsYUFBbEIsQ0FBcEM7QUFDRDs7QUFFRDs7Ozs7O3dCQUdVO0FBQ1IsYUFBTyxLQUFLUixRQUFMLENBQWNJLE9BQWQsQ0FBc0IsS0FBdEIsQ0FBUDtBQUNEOztBQUdEOzs7Ozs7OzBCQUlhTyxVLEVBQVk7QUFDdkIsYUFBT0EsV0FBV0MsV0FBWCxDQUF1QkMsTUFBdkIsQ0FBOEIsc0JBQWM7QUFDakQsZUFBT0MsV0FBV2IsT0FBWCxDQUFtQlMsR0FBbkIsQ0FBdUJkLFFBQXZCLENBQVA7QUFDRCxPQUZNLEVBRUpTLEdBRkksQ0FFQSxzQkFBYztBQUNuQixlQUFPLElBQUlSLFFBQUosQ0FBYTtBQUNsQkUsZ0JBQU1ZLFVBRFk7QUFFbEJWLG1CQUFTYSxXQUFXYjtBQUZGLFNBQWIsQ0FBUDtBQUlELE9BUE0sQ0FBUDtBQVFEOzs7Ozs7a0JBekVrQkosUSIsImZpbGUiOiJFdmVudERvYy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBEb2MgZnJvbSAnLi9Eb2MnO1xuaW1wb3J0IFBhcmFtZXRlciBmcm9tICcuL1BhcmFtZXRlcic7XG5cbmNvbnN0IERPQ19UWVBFID0gJ2V2ZW50JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRXZlbnREb2MgZXh0ZW5kcyBEb2Mge1xuXG4gIC8qKlxuICAgKiBAcGFyYW0ge29iamVjdH0gcGFyYW1zXG4gICAqIEBwYXJhbSB7UGFyc2VkRmlsZX0gcGFyYW1zLmZpbGVcbiAgICogQHBhcmFtIHtUYWdEaWN0fSBwYXJhbXMudGFnZGljdFxuICAgKi9cbiAgY29uc3RydWN0b3IocGFyYW1zKSB7XG4gICAgc3VwZXIoRE9DX1RZUEUsIHBhcmFtcy5maWxlKTtcbiAgICB0aGlzLl90YWdkaWN0ID0gcGFyYW1zLnRhZ2RpY3Q7XG4gICAgdGhpcy5fcGFyYW1zID0gdGhpcy5fYnVpbGRQYXJhbWV0ZXJEb2NzKCk7XG4gIH1cblxuICBfYnVpbGRQYXJhbWV0ZXJEb2NzKCkge1xuICAgIHJldHVybiB0aGlzLl90YWdkaWN0LmdldE1hbnkoJ3BhcmFtJykubWFwKHRhZyA9PiBQYXJhbWV0ZXIucGFyc2UodGFnKSk7XG4gIH1cblxuICAvKipcbiAgICogQHJldHVybiB7c3RyaW5nfVxuICAgKi9cbiAgZ2V0IG5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3RhZ2RpY3QuZ2V0KERPQ19UWVBFKS50cmltKCk7XG4gIH1cblxuICAvKipcbiAgICogQHJldHVybiB7YXJyYXl9XG4gICAqL1xuICBnZXQgcGFyYW1zKCkge1xuICAgIHJldHVybiB0aGlzLl9wYXJhbXM7XG4gIH1cblxuICAvKipcbiAgICogQHJldHVybiB7VGFnRGljdH1cbiAgICovXG4gIGdldCB0YWdkaWN0KCkge1xuICAgIHJldHVybiB0aGlzLl90YWdkaWN0O1xuICB9XG5cbiAgLyoqXG4gICAqIEByZXR1cm4ge2Jvb2xlYW59XG4gICAqL1xuICBnZXQgaXNEZXByZWNhdGVkKCkge1xuICAgIHJldHVybiB0aGlzLl90YWdkaWN0LmhhcygnZGVwcmVjYXRlZCcpO1xuICB9XG5cbiAgLyoqXG4gICAqIEByZXR1cm4ge3N0cmluZ31cbiAgICovXG4gIGdldCBkZXNjcmlwdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5fdGFnZGljdC5nZXQoJ2Rlc2MnKSB8fCB0aGlzLl90YWdkaWN0LmdldCgnZGVzY3JpcHRpb24nKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcmV0dXJuIHtBcnJheX1cbiAgICovXG4gIGdldCBzZWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3RhZ2RpY3QuZ2V0TWFueSgnc2VlJyk7XG4gIH1cblxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge1BhcnNlZEZpbGV9IHBhcnNlZEZpbGVcbiAgICogQHJldHVybiB7YXJyYXl9XG4gICAqL1xuICBzdGF0aWMgcGFyc2UocGFyc2VkRmlsZSkge1xuICAgIHJldHVybiBwYXJzZWRGaWxlLmRvY0NvbW1lbnRzLmZpbHRlcihkb2NDb21tZW50ID0+IHtcbiAgICAgIHJldHVybiBkb2NDb21tZW50LnRhZ2RpY3QuaGFzKERPQ19UWVBFKTtcbiAgICB9KS5tYXAoZG9jQ29tbWVudCA9PiB7XG4gICAgICByZXR1cm4gbmV3IEV2ZW50RG9jKHtcbiAgICAgICAgZmlsZTogcGFyc2VkRmlsZSxcbiAgICAgICAgdGFnZGljdDogZG9jQ29tbWVudC50YWdkaWN0XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxufVxuIl19