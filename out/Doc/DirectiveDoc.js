'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Doc2 = require('./Doc');

var _Doc3 = _interopRequireDefault(_Doc2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DOC_TYPE = 'directive';

var DirectiveDoc = function (_Doc) {
  _inherits(DirectiveDoc, _Doc);

  /**
   * @param {object} params
   * @param {ParsedFile} params.file
   * @param {TagDict} params.tagdict
   */
  function DirectiveDoc(params) {
    _classCallCheck(this, DirectiveDoc);

    var _this = _possibleConstructorReturn(this, (DirectiveDoc.__proto__ || Object.getPrototypeOf(DirectiveDoc)).call(this, DOC_TYPE, params.file));

    _this._tagdict = params.tagdict;
    return _this;
  }

  /**
   * @return {string}
   */


  _createClass(DirectiveDoc, [{
    key: 'name',
    get: function get() {
      return this._tagdict.get(DOC_TYPE).trim();
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
        return new DirectiveDoc({
          file: parsedFile,
          tagdict: docComment.tagdict
        });
      });
    }
  }]);

  return DirectiveDoc;
}(_Doc3.default);

exports.default = DirectiveDoc;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9Eb2MvRGlyZWN0aXZlRG9jLmpzIl0sIm5hbWVzIjpbIkRPQ19UWVBFIiwiRGlyZWN0aXZlRG9jIiwicGFyYW1zIiwiZmlsZSIsIl90YWdkaWN0IiwidGFnZGljdCIsImdldCIsInRyaW0iLCJoYXMiLCJnZXRNYW55IiwicGFyc2VkRmlsZSIsImRvY0NvbW1lbnRzIiwiZmlsdGVyIiwiZG9jQ29tbWVudCIsIm1hcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsV0FBVyxXQUFqQjs7SUFFcUJDLFk7OztBQUVuQjs7Ozs7QUFLQSx3QkFBWUMsTUFBWixFQUFvQjtBQUFBOztBQUFBLDRIQUNaRixRQURZLEVBQ0ZFLE9BQU9DLElBREw7O0FBRWxCLFVBQUtDLFFBQUwsR0FBZ0JGLE9BQU9HLE9BQXZCO0FBRmtCO0FBR25COztBQUVEOzs7Ozs7O3dCQUdXO0FBQ1QsYUFBTyxLQUFLRCxRQUFMLENBQWNFLEdBQWQsQ0FBa0JOLFFBQWxCLEVBQTRCTyxJQUE1QixFQUFQO0FBQ0Q7O0FBRUQ7Ozs7Ozt3QkFHYztBQUNaLGFBQU8sS0FBS0gsUUFBWjtBQUNEOztBQUVEOzs7Ozs7d0JBR21CO0FBQ2pCLGFBQU8sS0FBS0EsUUFBTCxDQUFjSSxHQUFkLENBQWtCLFlBQWxCLENBQVA7QUFDRDs7QUFFRDs7Ozs7O3dCQUdrQjtBQUNoQixhQUFPLEtBQUtKLFFBQUwsQ0FBY0UsR0FBZCxDQUFrQixNQUFsQixLQUE2QixLQUFLRixRQUFMLENBQWNFLEdBQWQsQ0FBa0IsYUFBbEIsQ0FBcEM7QUFDRDs7QUFFRDs7Ozs7O3dCQUdVO0FBQ1IsYUFBTyxLQUFLRixRQUFMLENBQWNLLE9BQWQsQ0FBc0IsS0FBdEIsQ0FBUDtBQUNEOztBQUVEOzs7Ozs7OzBCQUlhQyxVLEVBQVk7QUFDdkIsYUFBT0EsV0FBV0MsV0FBWCxDQUF1QkMsTUFBdkIsQ0FBOEIsc0JBQWM7QUFDakQsZUFBT0MsV0FBV1IsT0FBWCxDQUFtQkcsR0FBbkIsQ0FBdUJSLFFBQXZCLENBQVA7QUFDRCxPQUZNLEVBRUpjLEdBRkksQ0FFQSxzQkFBYztBQUNuQixlQUFPLElBQUliLFlBQUosQ0FBaUI7QUFDdEJFLGdCQUFNTyxVQURnQjtBQUV0QkwsbUJBQVNRLFdBQVdSO0FBRkUsU0FBakIsQ0FBUDtBQUlELE9BUE0sQ0FBUDtBQVFEOzs7Ozs7a0JBNURrQkosWSIsImZpbGUiOiJEaXJlY3RpdmVEb2MuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgRG9jIGZyb20gJy4vRG9jJztcblxuY29uc3QgRE9DX1RZUEUgPSAnZGlyZWN0aXZlJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGlyZWN0aXZlRG9jIGV4dGVuZHMgRG9jIHtcblxuICAvKipcbiAgICogQHBhcmFtIHtvYmplY3R9IHBhcmFtc1xuICAgKiBAcGFyYW0ge1BhcnNlZEZpbGV9IHBhcmFtcy5maWxlXG4gICAqIEBwYXJhbSB7VGFnRGljdH0gcGFyYW1zLnRhZ2RpY3RcbiAgICovXG4gIGNvbnN0cnVjdG9yKHBhcmFtcykge1xuICAgIHN1cGVyKERPQ19UWVBFLCBwYXJhbXMuZmlsZSk7XG4gICAgdGhpcy5fdGFnZGljdCA9IHBhcmFtcy50YWdkaWN0O1xuICB9XG5cbiAgLyoqXG4gICAqIEByZXR1cm4ge3N0cmluZ31cbiAgICovXG4gIGdldCBuYW1lKCkge1xuICAgIHJldHVybiB0aGlzLl90YWdkaWN0LmdldChET0NfVFlQRSkudHJpbSgpO1xuICB9XG5cbiAgLyoqXG4gICAqIEByZXR1cm4ge1RhZ0RpY3R9XG4gICAqL1xuICBnZXQgdGFnZGljdCgpIHtcbiAgICByZXR1cm4gdGhpcy5fdGFnZGljdDtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcmV0dXJuIHtib29sZWFufVxuICAgKi9cbiAgZ2V0IGlzRGVwcmVjYXRlZCgpIHtcbiAgICByZXR1cm4gdGhpcy5fdGFnZGljdC5oYXMoJ2RlcHJlY2F0ZWQnKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcmV0dXJuIHtzdHJpbmd9XG4gICAqL1xuICBnZXQgZGVzY3JpcHRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuX3RhZ2RpY3QuZ2V0KCdkZXNjJykgfHwgdGhpcy5fdGFnZGljdC5nZXQoJ2Rlc2NyaXB0aW9uJyk7XG4gIH1cblxuICAvKipcbiAgICogQHJldHVybiB7QXJyYXl9XG4gICAqL1xuICBnZXQgc2VlKCkge1xuICAgIHJldHVybiB0aGlzLl90YWdkaWN0LmdldE1hbnkoJ3NlZScpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7UGFyc2VkRmlsZX0gcGFyc2VkRmlsZVxuICAgKiBAcmV0dXJuIHthcnJheX1cbiAgICovXG4gIHN0YXRpYyBwYXJzZShwYXJzZWRGaWxlKSB7XG4gICAgcmV0dXJuIHBhcnNlZEZpbGUuZG9jQ29tbWVudHMuZmlsdGVyKGRvY0NvbW1lbnQgPT4ge1xuICAgICAgcmV0dXJuIGRvY0NvbW1lbnQudGFnZGljdC5oYXMoRE9DX1RZUEUpO1xuICAgIH0pLm1hcChkb2NDb21tZW50ID0+IHtcbiAgICAgIHJldHVybiBuZXcgRGlyZWN0aXZlRG9jKHtcbiAgICAgICAgZmlsZTogcGFyc2VkRmlsZSxcbiAgICAgICAgdGFnZGljdDogZG9jQ29tbWVudC50YWdkaWN0XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxufVxuIl19