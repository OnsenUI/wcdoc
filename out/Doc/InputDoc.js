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

var DOC_TYPE = 'input';

var InputDoc = function (_Doc) {
  _inherits(InputDoc, _Doc);

  /**
   * @param {object} params
   * @param {ParsedFile} params.file
   * @param {TagDict} params.tagdict
   */
  function InputDoc(params) {
    _classCallCheck(this, InputDoc);

    var _this = _possibleConstructorReturn(this, (InputDoc.__proto__ || Object.getPrototypeOf(InputDoc)).call(this, DOC_TYPE, params.file));

    _this._tagdict = params.tagdict;
    return _this;
  }

  /**
   * @return {string}
   */


  _createClass(InputDoc, [{
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
     * @return {string}
     */

  }, {
    key: 'type',
    get: function get() {
      return this._tagdict.get('type');
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
        return new InputDoc({
          file: parsedFile,
          tagdict: docComment.tagdict
        });
      });
    }
  }]);

  return InputDoc;
}(_Doc3.default);

exports.default = InputDoc;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9Eb2MvSW5wdXREb2MuanMiXSwibmFtZXMiOlsiRE9DX1RZUEUiLCJJbnB1dERvYyIsInBhcmFtcyIsImZpbGUiLCJfdGFnZGljdCIsInRhZ2RpY3QiLCJnZXQiLCJ0cmltIiwiaGFzIiwicGFyc2VkRmlsZSIsImRvY0NvbW1lbnRzIiwiZmlsdGVyIiwiZG9jQ29tbWVudCIsIm1hcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsV0FBVyxPQUFqQjs7SUFFcUJDLFE7OztBQUVuQjs7Ozs7QUFLQSxvQkFBWUMsTUFBWixFQUFvQjtBQUFBOztBQUFBLG9IQUNaRixRQURZLEVBQ0ZFLE9BQU9DLElBREw7O0FBRWxCLFVBQUtDLFFBQUwsR0FBZ0JGLE9BQU9HLE9BQXZCO0FBRmtCO0FBR25COztBQUVEOzs7Ozs7O3dCQUdXO0FBQ1QsYUFBTyxLQUFLRCxRQUFMLENBQWNFLEdBQWQsQ0FBa0JOLFFBQWxCLEVBQTRCTyxJQUE1QixFQUFQO0FBQ0Q7O0FBRUQ7Ozs7Ozt3QkFHYztBQUNaLGFBQU8sS0FBS0gsUUFBWjtBQUNEOztBQUVEOzs7Ozs7d0JBR21CO0FBQ2pCLGFBQU8sS0FBS0EsUUFBTCxDQUFjSSxHQUFkLENBQWtCLFlBQWxCLENBQVA7QUFDRDs7QUFFRDs7Ozs7O3dCQUdrQjtBQUNoQixhQUFPLEtBQUtKLFFBQUwsQ0FBY0UsR0FBZCxDQUFrQixNQUFsQixLQUE2QixLQUFLRixRQUFMLENBQWNFLEdBQWQsQ0FBa0IsYUFBbEIsQ0FBcEM7QUFDRDs7QUFFRDs7Ozs7O3dCQUdXO0FBQ1QsYUFBTyxLQUFLRixRQUFMLENBQWNFLEdBQWQsQ0FBa0IsTUFBbEIsQ0FBUDtBQUNEOztBQUVEOzs7Ozs7OzBCQUlhRyxVLEVBQVk7QUFDdkIsYUFBT0EsV0FBV0MsV0FBWCxDQUF1QkMsTUFBdkIsQ0FBOEIsc0JBQWM7QUFDakQsZUFBT0MsV0FBV1AsT0FBWCxDQUFtQkcsR0FBbkIsQ0FBdUJSLFFBQXZCLENBQVA7QUFDRCxPQUZNLEVBRUphLEdBRkksQ0FFQSxzQkFBYztBQUNuQixlQUFPLElBQUlaLFFBQUosQ0FBYTtBQUNsQkUsZ0JBQU1NLFVBRFk7QUFFbEJKLG1CQUFTTyxXQUFXUDtBQUZGLFNBQWIsQ0FBUDtBQUlELE9BUE0sQ0FBUDtBQVFEOzs7Ozs7a0JBNURrQkosUSIsImZpbGUiOiJJbnB1dERvYy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBEb2MgZnJvbSAnLi9Eb2MnO1xuXG5jb25zdCBET0NfVFlQRSA9ICdpbnB1dCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIElucHV0RG9jIGV4dGVuZHMgRG9jIHtcblxuICAvKipcbiAgICogQHBhcmFtIHtvYmplY3R9IHBhcmFtc1xuICAgKiBAcGFyYW0ge1BhcnNlZEZpbGV9IHBhcmFtcy5maWxlXG4gICAqIEBwYXJhbSB7VGFnRGljdH0gcGFyYW1zLnRhZ2RpY3RcbiAgICovXG4gIGNvbnN0cnVjdG9yKHBhcmFtcykge1xuICAgIHN1cGVyKERPQ19UWVBFLCBwYXJhbXMuZmlsZSk7XG4gICAgdGhpcy5fdGFnZGljdCA9IHBhcmFtcy50YWdkaWN0O1xuICB9XG5cbiAgLyoqXG4gICAqIEByZXR1cm4ge3N0cmluZ31cbiAgICovXG4gIGdldCBuYW1lKCkge1xuICAgIHJldHVybiB0aGlzLl90YWdkaWN0LmdldChET0NfVFlQRSkudHJpbSgpO1xuICB9XG5cbiAgLyoqXG4gICAqIEByZXR1cm4ge1RhZ0RpY3R9XG4gICAqL1xuICBnZXQgdGFnZGljdCgpIHtcbiAgICByZXR1cm4gdGhpcy5fdGFnZGljdDtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcmV0dXJuIHtib29sZWFufVxuICAgKi9cbiAgZ2V0IGlzRGVwcmVjYXRlZCgpIHtcbiAgICByZXR1cm4gdGhpcy5fdGFnZGljdC5oYXMoJ2RlcHJlY2F0ZWQnKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcmV0dXJuIHtzdHJpbmd9XG4gICAqL1xuICBnZXQgZGVzY3JpcHRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuX3RhZ2RpY3QuZ2V0KCdkZXNjJykgfHwgdGhpcy5fdGFnZGljdC5nZXQoJ2Rlc2NyaXB0aW9uJyk7XG4gIH1cblxuICAvKipcbiAgICogQHJldHVybiB7c3RyaW5nfVxuICAgKi9cbiAgZ2V0IHR5cGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3RhZ2RpY3QuZ2V0KCd0eXBlJyk7XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHtQYXJzZWRGaWxlfSBwYXJzZWRGaWxlXG4gICAqIEByZXR1cm4ge2FycmF5fVxuICAgKi9cbiAgc3RhdGljIHBhcnNlKHBhcnNlZEZpbGUpIHtcbiAgICByZXR1cm4gcGFyc2VkRmlsZS5kb2NDb21tZW50cy5maWx0ZXIoZG9jQ29tbWVudCA9PiB7XG4gICAgICByZXR1cm4gZG9jQ29tbWVudC50YWdkaWN0LmhhcyhET0NfVFlQRSk7XG4gICAgfSkubWFwKGRvY0NvbW1lbnQgPT4ge1xuICAgICAgcmV0dXJuIG5ldyBJbnB1dERvYyh7XG4gICAgICAgIGZpbGU6IHBhcnNlZEZpbGUsXG4gICAgICAgIHRhZ2RpY3Q6IGRvY0NvbW1lbnQudGFnZGljdFxuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cbn1cbiJdfQ==