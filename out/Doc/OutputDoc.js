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

var DOC_TYPE = 'output';

var OutputDoc = function (_Doc) {
  _inherits(OutputDoc, _Doc);

  /**
   * @param {object} params
   * @param {ParsedFile} params.file
   * @param {TagDict} params.tagdict
   */
  function OutputDoc(params) {
    _classCallCheck(this, OutputDoc);

    var _this = _possibleConstructorReturn(this, (OutputDoc.__proto__ || Object.getPrototypeOf(OutputDoc)).call(this, DOC_TYPE, params.file));

    _this._tagdict = params.tagdict;
    return _this;
  }

  /**
   * @return {string}
   */


  _createClass(OutputDoc, [{
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
        return new OutputDoc({
          file: parsedFile,
          tagdict: docComment.tagdict
        });
      });
    }
  }]);

  return OutputDoc;
}(_Doc3.default);

exports.default = OutputDoc;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9Eb2MvT3V0cHV0RG9jLmpzIl0sIm5hbWVzIjpbIkRPQ19UWVBFIiwiT3V0cHV0RG9jIiwicGFyYW1zIiwiZmlsZSIsIl90YWdkaWN0IiwidGFnZGljdCIsImdldCIsInRyaW0iLCJoYXMiLCJwYXJzZWRGaWxlIiwiZG9jQ29tbWVudHMiLCJmaWx0ZXIiLCJkb2NDb21tZW50IiwibWFwIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxXQUFXLFFBQWpCOztJQUVxQkMsUzs7O0FBRW5COzs7OztBQUtBLHFCQUFZQyxNQUFaLEVBQW9CO0FBQUE7O0FBQUEsc0hBQ1pGLFFBRFksRUFDRkUsT0FBT0MsSUFETDs7QUFFbEIsVUFBS0MsUUFBTCxHQUFnQkYsT0FBT0csT0FBdkI7QUFGa0I7QUFHbkI7O0FBRUQ7Ozs7Ozs7d0JBR1c7QUFDVCxhQUFPLEtBQUtELFFBQUwsQ0FBY0UsR0FBZCxDQUFrQk4sUUFBbEIsRUFBNEJPLElBQTVCLEVBQVA7QUFDRDs7QUFFRDs7Ozs7O3dCQUdjO0FBQ1osYUFBTyxLQUFLSCxRQUFaO0FBQ0Q7O0FBRUQ7Ozs7Ozt3QkFHbUI7QUFDakIsYUFBTyxLQUFLQSxRQUFMLENBQWNJLEdBQWQsQ0FBa0IsWUFBbEIsQ0FBUDtBQUNEOztBQUVEOzs7Ozs7d0JBR2tCO0FBQ2hCLGFBQU8sS0FBS0osUUFBTCxDQUFjRSxHQUFkLENBQWtCLE1BQWxCLEtBQTZCLEtBQUtGLFFBQUwsQ0FBY0UsR0FBZCxDQUFrQixhQUFsQixDQUFwQztBQUNEOztBQUVEOzs7Ozs7d0JBR1c7QUFDVCxhQUFPLEtBQUtGLFFBQUwsQ0FBY0UsR0FBZCxDQUFrQixNQUFsQixDQUFQO0FBQ0Q7O0FBRUQ7Ozs7Ozs7MEJBSWFHLFUsRUFBWTtBQUN2QixhQUFPQSxXQUFXQyxXQUFYLENBQXVCQyxNQUF2QixDQUE4QixzQkFBYztBQUNqRCxlQUFPQyxXQUFXUCxPQUFYLENBQW1CRyxHQUFuQixDQUF1QlIsUUFBdkIsQ0FBUDtBQUNELE9BRk0sRUFFSmEsR0FGSSxDQUVBLHNCQUFjO0FBQ25CLGVBQU8sSUFBSVosU0FBSixDQUFjO0FBQ25CRSxnQkFBTU0sVUFEYTtBQUVuQkosbUJBQVNPLFdBQVdQO0FBRkQsU0FBZCxDQUFQO0FBSUQsT0FQTSxDQUFQO0FBUUQ7Ozs7OztrQkE1RGtCSixTIiwiZmlsZSI6Ik91dHB1dERvYy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBEb2MgZnJvbSAnLi9Eb2MnO1xuXG5jb25zdCBET0NfVFlQRSA9ICdvdXRwdXQnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBPdXRwdXREb2MgZXh0ZW5kcyBEb2Mge1xuXG4gIC8qKlxuICAgKiBAcGFyYW0ge29iamVjdH0gcGFyYW1zXG4gICAqIEBwYXJhbSB7UGFyc2VkRmlsZX0gcGFyYW1zLmZpbGVcbiAgICogQHBhcmFtIHtUYWdEaWN0fSBwYXJhbXMudGFnZGljdFxuICAgKi9cbiAgY29uc3RydWN0b3IocGFyYW1zKSB7XG4gICAgc3VwZXIoRE9DX1RZUEUsIHBhcmFtcy5maWxlKTtcbiAgICB0aGlzLl90YWdkaWN0ID0gcGFyYW1zLnRhZ2RpY3Q7XG4gIH1cblxuICAvKipcbiAgICogQHJldHVybiB7c3RyaW5nfVxuICAgKi9cbiAgZ2V0IG5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3RhZ2RpY3QuZ2V0KERPQ19UWVBFKS50cmltKCk7XG4gIH1cblxuICAvKipcbiAgICogQHJldHVybiB7VGFnRGljdH1cbiAgICovXG4gIGdldCB0YWdkaWN0KCkge1xuICAgIHJldHVybiB0aGlzLl90YWdkaWN0O1xuICB9XG5cbiAgLyoqXG4gICAqIEByZXR1cm4ge2Jvb2xlYW59XG4gICAqL1xuICBnZXQgaXNEZXByZWNhdGVkKCkge1xuICAgIHJldHVybiB0aGlzLl90YWdkaWN0LmhhcygnZGVwcmVjYXRlZCcpO1xuICB9XG5cbiAgLyoqXG4gICAqIEByZXR1cm4ge3N0cmluZ31cbiAgICovXG4gIGdldCBkZXNjcmlwdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5fdGFnZGljdC5nZXQoJ2Rlc2MnKSB8fCB0aGlzLl90YWdkaWN0LmdldCgnZGVzY3JpcHRpb24nKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcmV0dXJuIHtzdHJpbmd9XG4gICAqL1xuICBnZXQgdHlwZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fdGFnZGljdC5nZXQoJ3R5cGUnKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge1BhcnNlZEZpbGV9IHBhcnNlZEZpbGVcbiAgICogQHJldHVybiB7YXJyYXl9XG4gICAqL1xuICBzdGF0aWMgcGFyc2UocGFyc2VkRmlsZSkge1xuICAgIHJldHVybiBwYXJzZWRGaWxlLmRvY0NvbW1lbnRzLmZpbHRlcihkb2NDb21tZW50ID0+IHtcbiAgICAgIHJldHVybiBkb2NDb21tZW50LnRhZ2RpY3QuaGFzKERPQ19UWVBFKTtcbiAgICB9KS5tYXAoZG9jQ29tbWVudCA9PiB7XG4gICAgICByZXR1cm4gbmV3IE91dHB1dERvYyh7XG4gICAgICAgIGZpbGU6IHBhcnNlZEZpbGUsXG4gICAgICAgIHRhZ2RpY3Q6IGRvY0NvbW1lbnQudGFnZGljdFxuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cbn1cbiJdfQ==