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

var DOC_TYPE = 'property';

var PropertyDoc = function (_Doc) {
  _inherits(PropertyDoc, _Doc);

  /**
   * @param {object} params
   * @param {TagDict} params.tagdict
   * @param {ParsedFile} params.file
   */
  function PropertyDoc(params) {
    _classCallCheck(this, PropertyDoc);

    var _this = _possibleConstructorReturn(this, (PropertyDoc.__proto__ || Object.getPrototypeOf(PropertyDoc)).call(this, DOC_TYPE, params.file));

    _this._tagdict = params.tagdict;
    return _this;
  }

  _createClass(PropertyDoc, [{
    key: 'name',
    get: function get() {
      return this._tagdict.get(DOC_TYPE).trim();
    }
  }, {
    key: 'type',
    get: function get() {
      return this._tagdict.get('type');
    }
  }, {
    key: 'tagdict',
    get: function get() {
      return this._tagdict;
    }
  }, {
    key: 'isDeprecated',
    get: function get() {
      return this._tagdict.has('deprecated');
    }
  }, {
    key: 'description',
    get: function get() {
      return this._tagdict.get('description');
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
        return new PropertyDoc({
          file: parsedFile,
          tagdict: docComment.tagdict
        });
      });
    }
  }]);

  return PropertyDoc;
}(_Doc3.default);

exports.default = PropertyDoc;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9Eb2MvUHJvcGVydHlEb2MuanMiXSwibmFtZXMiOlsiRE9DX1RZUEUiLCJQcm9wZXJ0eURvYyIsInBhcmFtcyIsImZpbGUiLCJfdGFnZGljdCIsInRhZ2RpY3QiLCJnZXQiLCJ0cmltIiwiaGFzIiwicGFyc2VkRmlsZSIsImRvY0NvbW1lbnRzIiwiZmlsdGVyIiwiZG9jQ29tbWVudCIsIm1hcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsV0FBVyxVQUFqQjs7SUFFcUJDLFc7OztBQUVuQjs7Ozs7QUFLQSx1QkFBWUMsTUFBWixFQUFvQjtBQUFBOztBQUFBLDBIQUNaRixRQURZLEVBQ0ZFLE9BQU9DLElBREw7O0FBRWxCLFVBQUtDLFFBQUwsR0FBZ0JGLE9BQU9HLE9BQXZCO0FBRmtCO0FBR25COzs7O3dCQUVVO0FBQ1QsYUFBTyxLQUFLRCxRQUFMLENBQWNFLEdBQWQsQ0FBa0JOLFFBQWxCLEVBQTRCTyxJQUE1QixFQUFQO0FBQ0Q7Ozt3QkFFVTtBQUNULGFBQU8sS0FBS0gsUUFBTCxDQUFjRSxHQUFkLENBQWtCLE1BQWxCLENBQVA7QUFDRDs7O3dCQUVhO0FBQ1osYUFBTyxLQUFLRixRQUFaO0FBQ0Q7Ozt3QkFFa0I7QUFDakIsYUFBTyxLQUFLQSxRQUFMLENBQWNJLEdBQWQsQ0FBa0IsWUFBbEIsQ0FBUDtBQUNEOzs7d0JBRWlCO0FBQ2hCLGFBQU8sS0FBS0osUUFBTCxDQUFjRSxHQUFkLENBQWtCLGFBQWxCLENBQVA7QUFDRDs7QUFFRDs7Ozs7OzswQkFJYUcsVSxFQUFZO0FBQ3ZCLGFBQU9BLFdBQVdDLFdBQVgsQ0FBdUJDLE1BQXZCLENBQThCLHNCQUFjO0FBQ2pELGVBQU9DLFdBQVdQLE9BQVgsQ0FBbUJHLEdBQW5CLENBQXVCUixRQUF2QixDQUFQO0FBQ0QsT0FGTSxFQUVKYSxHQUZJLENBRUEsc0JBQWM7QUFDbkIsZUFBTyxJQUFJWixXQUFKLENBQWdCO0FBQ3JCRSxnQkFBTU0sVUFEZTtBQUVyQkosbUJBQVNPLFdBQVdQO0FBRkMsU0FBaEIsQ0FBUDtBQUlELE9BUE0sQ0FBUDtBQVFEOzs7Ozs7a0JBN0NrQkosVyIsImZpbGUiOiJQcm9wZXJ0eURvYy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBEb2MgZnJvbSAnLi9Eb2MnO1xuXG5jb25zdCBET0NfVFlQRSA9ICdwcm9wZXJ0eSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFByb3BlcnR5RG9jIGV4dGVuZHMgRG9jIHtcblxuICAvKipcbiAgICogQHBhcmFtIHtvYmplY3R9IHBhcmFtc1xuICAgKiBAcGFyYW0ge1RhZ0RpY3R9IHBhcmFtcy50YWdkaWN0XG4gICAqIEBwYXJhbSB7UGFyc2VkRmlsZX0gcGFyYW1zLmZpbGVcbiAgICovXG4gIGNvbnN0cnVjdG9yKHBhcmFtcykge1xuICAgIHN1cGVyKERPQ19UWVBFLCBwYXJhbXMuZmlsZSk7XG4gICAgdGhpcy5fdGFnZGljdCA9IHBhcmFtcy50YWdkaWN0O1xuICB9XG5cbiAgZ2V0IG5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3RhZ2RpY3QuZ2V0KERPQ19UWVBFKS50cmltKCk7XG4gIH1cblxuICBnZXQgdHlwZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fdGFnZGljdC5nZXQoJ3R5cGUnKTtcbiAgfVxuXG4gIGdldCB0YWdkaWN0KCkge1xuICAgIHJldHVybiB0aGlzLl90YWdkaWN0O1xuICB9XG5cbiAgZ2V0IGlzRGVwcmVjYXRlZCgpIHtcbiAgICByZXR1cm4gdGhpcy5fdGFnZGljdC5oYXMoJ2RlcHJlY2F0ZWQnKTtcbiAgfVxuXG4gIGdldCBkZXNjcmlwdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5fdGFnZGljdC5nZXQoJ2Rlc2NyaXB0aW9uJyk7XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHtQYXJzZWRGaWxlfSBwYXJzZWRGaWxlXG4gICAqIEByZXR1cm4ge2FycmF5fVxuICAgKi9cbiAgc3RhdGljIHBhcnNlKHBhcnNlZEZpbGUpIHtcbiAgICByZXR1cm4gcGFyc2VkRmlsZS5kb2NDb21tZW50cy5maWx0ZXIoZG9jQ29tbWVudCA9PiB7XG4gICAgICByZXR1cm4gZG9jQ29tbWVudC50YWdkaWN0LmhhcyhET0NfVFlQRSk7XG4gICAgfSkubWFwKGRvY0NvbW1lbnQgPT4ge1xuICAgICAgcmV0dXJuIG5ldyBQcm9wZXJ0eURvYyh7XG4gICAgICAgIGZpbGU6IHBhcnNlZEZpbGUsXG4gICAgICAgIHRhZ2RpY3Q6IGRvY0NvbW1lbnQudGFnZGljdFxuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cbn1cbiJdfQ==