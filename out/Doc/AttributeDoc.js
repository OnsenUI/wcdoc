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

var DOC_TYPE = 'attribute';

var AttributeDoc = function (_Doc) {
  _inherits(AttributeDoc, _Doc);

  /**
   * @param {object} params
   * @param {ParsedFile} params.file
   * @param {TagDict} params.tagdict
   */
  function AttributeDoc(params) {
    _classCallCheck(this, AttributeDoc);

    var _this = _possibleConstructorReturn(this, (AttributeDoc.__proto__ || Object.getPrototypeOf(AttributeDoc)).call(this, DOC_TYPE, params.file));

    _this._tagdict = params.tagdict;
    return _this;
  }

  _createClass(AttributeDoc, [{
    key: 'tagdict',
    get: function get() {
      return this._tagdict;
    }
  }, {
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
    key: 'parameters',
    get: function get() {
      return this._tagdict.getMany('param');
    }
  }, {
    key: 'returns',
    get: function get() {
      return this._tagdict.get('return');
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
        return new AttributeDoc({
          file: parsedFile,
          tagdict: docComment.tagdict
        });
      });
    }
  }]);

  return AttributeDoc;
}(_Doc3.default);

exports.default = AttributeDoc;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9Eb2MvQXR0cmlidXRlRG9jLmpzIl0sIm5hbWVzIjpbIkRPQ19UWVBFIiwiQXR0cmlidXRlRG9jIiwicGFyYW1zIiwiZmlsZSIsIl90YWdkaWN0IiwidGFnZGljdCIsImdldCIsInRyaW0iLCJnZXRNYW55IiwicGFyc2VkRmlsZSIsImRvY0NvbW1lbnRzIiwiZmlsdGVyIiwiZG9jQ29tbWVudCIsImhhcyIsIm1hcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsV0FBVyxXQUFqQjs7SUFFcUJDLFk7OztBQUVuQjs7Ozs7QUFLQSx3QkFBWUMsTUFBWixFQUFvQjtBQUFBOztBQUFBLDRIQUNaRixRQURZLEVBQ0ZFLE9BQU9DLElBREw7O0FBRWxCLFVBQUtDLFFBQUwsR0FBZ0JGLE9BQU9HLE9BQXZCO0FBRmtCO0FBR25COzs7O3dCQUVhO0FBQ1osYUFBTyxLQUFLRCxRQUFaO0FBQ0Q7Ozt3QkFFVTtBQUNULGFBQU8sS0FBS0EsUUFBTCxDQUFjRSxHQUFkLENBQWtCTixRQUFsQixFQUE0Qk8sSUFBNUIsRUFBUDtBQUNEOzs7d0JBRVU7QUFDVCxhQUFPLEtBQUtILFFBQUwsQ0FBY0UsR0FBZCxDQUFrQixNQUFsQixDQUFQO0FBQ0Q7Ozt3QkFFZ0I7QUFDZixhQUFPLEtBQUtGLFFBQUwsQ0FBY0ksT0FBZCxDQUFzQixPQUF0QixDQUFQO0FBQ0Q7Ozt3QkFFYTtBQUNaLGFBQU8sS0FBS0osUUFBTCxDQUFjRSxHQUFkLENBQWtCLFFBQWxCLENBQVA7QUFDRDs7QUFFRDs7Ozs7OzswQkFJYUcsVSxFQUFZO0FBQ3ZCLGFBQU9BLFdBQVdDLFdBQVgsQ0FBdUJDLE1BQXZCLENBQThCLHNCQUFjO0FBQ2pELGVBQU9DLFdBQVdQLE9BQVgsQ0FBbUJRLEdBQW5CLENBQXVCYixRQUF2QixDQUFQO0FBQ0QsT0FGTSxFQUVKYyxHQUZJLENBRUEsc0JBQWM7QUFDbkIsZUFBTyxJQUFJYixZQUFKLENBQWlCO0FBQ3RCRSxnQkFBTU0sVUFEZ0I7QUFFdEJKLG1CQUFTTyxXQUFXUDtBQUZFLFNBQWpCLENBQVA7QUFJRCxPQVBNLENBQVA7QUFRRDs7Ozs7O2tCQTdDa0JKLFkiLCJmaWxlIjoiQXR0cmlidXRlRG9jLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IERvYyBmcm9tICcuL0RvYyc7XG5cbmNvbnN0IERPQ19UWVBFID0gJ2F0dHJpYnV0ZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEF0dHJpYnV0ZURvYyBleHRlbmRzIERvYyB7XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBwYXJhbXNcbiAgICogQHBhcmFtIHtQYXJzZWRGaWxlfSBwYXJhbXMuZmlsZVxuICAgKiBAcGFyYW0ge1RhZ0RpY3R9IHBhcmFtcy50YWdkaWN0XG4gICAqL1xuICBjb25zdHJ1Y3RvcihwYXJhbXMpIHtcbiAgICBzdXBlcihET0NfVFlQRSwgcGFyYW1zLmZpbGUpO1xuICAgIHRoaXMuX3RhZ2RpY3QgPSBwYXJhbXMudGFnZGljdDtcbiAgfVxuXG4gIGdldCB0YWdkaWN0KCkge1xuICAgIHJldHVybiB0aGlzLl90YWdkaWN0O1xuICB9XG5cbiAgZ2V0IG5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3RhZ2RpY3QuZ2V0KERPQ19UWVBFKS50cmltKCk7XG4gIH1cblxuICBnZXQgdHlwZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fdGFnZGljdC5nZXQoJ3R5cGUnKTtcbiAgfVxuXG4gIGdldCBwYXJhbWV0ZXJzKCkge1xuICAgIHJldHVybiB0aGlzLl90YWdkaWN0LmdldE1hbnkoJ3BhcmFtJyk7XG4gIH1cblxuICBnZXQgcmV0dXJucygpIHtcbiAgICByZXR1cm4gdGhpcy5fdGFnZGljdC5nZXQoJ3JldHVybicpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7UGFyc2VkRmlsZX0gcGFyc2VkRmlsZVxuICAgKiBAcmV0dXJuIHthcnJheX1cbiAgICovXG4gIHN0YXRpYyBwYXJzZShwYXJzZWRGaWxlKSB7XG4gICAgcmV0dXJuIHBhcnNlZEZpbGUuZG9jQ29tbWVudHMuZmlsdGVyKGRvY0NvbW1lbnQgPT4ge1xuICAgICAgcmV0dXJuIGRvY0NvbW1lbnQudGFnZGljdC5oYXMoRE9DX1RZUEUpO1xuICAgIH0pLm1hcChkb2NDb21tZW50ID0+IHtcbiAgICAgIHJldHVybiBuZXcgQXR0cmlidXRlRG9jKHtcbiAgICAgICAgZmlsZTogcGFyc2VkRmlsZSxcbiAgICAgICAgdGFnZGljdDogZG9jQ29tbWVudC50YWdkaWN0XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxufVxuIl19