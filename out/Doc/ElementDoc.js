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

var DOC_TYPE = 'element';

var ElementDoc = function (_Doc) {
  _inherits(ElementDoc, _Doc);

  /**
   * @param {object} params
   * @param {ParsedFile} params.file
   * @param {TagDict} params.tagdict
   */
  function ElementDoc(params) {
    _classCallCheck(this, ElementDoc);

    var _this = _possibleConstructorReturn(this, (ElementDoc.__proto__ || Object.getPrototypeOf(ElementDoc)).call(this, DOC_TYPE, params.file));

    _this._tagdict = params.tagdict;
    return _this;
  }

  _createClass(ElementDoc, [{
    key: 'name',
    get: function get() {
      return this._tagdict.get(DOC_TYPE).trim();
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
      return this._tagdict.get('description', '').trim();
    }
  }, {
    key: 'examples',
    get: function get() {
      return this._tagdict.getMany('example').map(function (example) {
        return example.trim();
      });
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
        return new ElementDoc({
          file: parsedFile,
          tagdict: docComment.tagdict
        });
      });
    }
  }]);

  return ElementDoc;
}(_Doc3.default);

exports.default = ElementDoc;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9Eb2MvRWxlbWVudERvYy5qcyJdLCJuYW1lcyI6WyJET0NfVFlQRSIsIkVsZW1lbnREb2MiLCJwYXJhbXMiLCJmaWxlIiwiX3RhZ2RpY3QiLCJ0YWdkaWN0IiwiZ2V0IiwidHJpbSIsImhhcyIsImdldE1hbnkiLCJtYXAiLCJleGFtcGxlIiwicGFyc2VkRmlsZSIsImRvY0NvbW1lbnRzIiwiZmlsdGVyIiwiZG9jQ29tbWVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsV0FBVyxTQUFqQjs7SUFFcUJDLFU7OztBQUVuQjs7Ozs7QUFLQSxzQkFBWUMsTUFBWixFQUFvQjtBQUFBOztBQUFBLHdIQUNaRixRQURZLEVBQ0ZFLE9BQU9DLElBREw7O0FBRWxCLFVBQUtDLFFBQUwsR0FBZ0JGLE9BQU9HLE9BQXZCO0FBRmtCO0FBR25COzs7O3dCQUVVO0FBQ1QsYUFBTyxLQUFLRCxRQUFMLENBQWNFLEdBQWQsQ0FBa0JOLFFBQWxCLEVBQTRCTyxJQUE1QixFQUFQO0FBQ0Q7Ozt3QkFFYTtBQUNaLGFBQU8sS0FBS0gsUUFBWjtBQUNEOzs7d0JBRWtCO0FBQ2pCLGFBQU8sS0FBS0EsUUFBTCxDQUFjSSxHQUFkLENBQWtCLFlBQWxCLENBQVA7QUFDRDs7O3dCQUVpQjtBQUNoQixhQUFPLEtBQUtKLFFBQUwsQ0FBY0UsR0FBZCxDQUFrQixhQUFsQixFQUFpQyxFQUFqQyxFQUFxQ0MsSUFBckMsRUFBUDtBQUNEOzs7d0JBRWM7QUFDYixhQUFPLEtBQUtILFFBQUwsQ0FBY0ssT0FBZCxDQUFzQixTQUF0QixFQUFpQ0MsR0FBakMsQ0FBcUM7QUFBQSxlQUFXQyxRQUFRSixJQUFSLEVBQVg7QUFBQSxPQUFyQyxDQUFQO0FBQ0Q7O0FBRUQ7Ozs7Ozs7MEJBSWFLLFUsRUFBWTtBQUN2QixhQUFPQSxXQUFXQyxXQUFYLENBQXVCQyxNQUF2QixDQUE4QixzQkFBYztBQUNqRCxlQUFPQyxXQUFXVixPQUFYLENBQW1CRyxHQUFuQixDQUF1QlIsUUFBdkIsQ0FBUDtBQUNELE9BRk0sRUFFSlUsR0FGSSxDQUVBLHNCQUFjO0FBQ25CLGVBQU8sSUFBSVQsVUFBSixDQUFlO0FBQ3BCRSxnQkFBTVMsVUFEYztBQUVwQlAsbUJBQVNVLFdBQVdWO0FBRkEsU0FBZixDQUFQO0FBSUQsT0FQTSxDQUFQO0FBUUQ7Ozs7OztrQkE3Q2tCSixVIiwiZmlsZSI6IkVsZW1lbnREb2MuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgRG9jIGZyb20gJy4vRG9jJztcblxuY29uc3QgRE9DX1RZUEUgPSAnZWxlbWVudCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEVsZW1lbnREb2MgZXh0ZW5kcyBEb2Mge1xuXG4gIC8qKlxuICAgKiBAcGFyYW0ge29iamVjdH0gcGFyYW1zXG4gICAqIEBwYXJhbSB7UGFyc2VkRmlsZX0gcGFyYW1zLmZpbGVcbiAgICogQHBhcmFtIHtUYWdEaWN0fSBwYXJhbXMudGFnZGljdFxuICAgKi9cbiAgY29uc3RydWN0b3IocGFyYW1zKSB7XG4gICAgc3VwZXIoRE9DX1RZUEUsIHBhcmFtcy5maWxlKTtcbiAgICB0aGlzLl90YWdkaWN0ID0gcGFyYW1zLnRhZ2RpY3Q7XG4gIH1cblxuICBnZXQgbmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fdGFnZGljdC5nZXQoRE9DX1RZUEUpLnRyaW0oKTtcbiAgfVxuXG4gIGdldCB0YWdkaWN0KCkge1xuICAgIHJldHVybiB0aGlzLl90YWdkaWN0O1xuICB9XG5cbiAgZ2V0IGlzRGVwcmVjYXRlZCgpIHtcbiAgICByZXR1cm4gdGhpcy5fdGFnZGljdC5oYXMoJ2RlcHJlY2F0ZWQnKTtcbiAgfVxuXG4gIGdldCBkZXNjcmlwdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5fdGFnZGljdC5nZXQoJ2Rlc2NyaXB0aW9uJywgJycpLnRyaW0oKTtcbiAgfVxuXG4gIGdldCBleGFtcGxlcygpIHtcbiAgICByZXR1cm4gdGhpcy5fdGFnZGljdC5nZXRNYW55KCdleGFtcGxlJykubWFwKGV4YW1wbGUgPT4gZXhhbXBsZS50cmltKCkpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7UGFyc2VkRmlsZX0gcGFyc2VkRmlsZVxuICAgKiBAcmV0dXJuIHthcnJheX1cbiAgICovXG4gIHN0YXRpYyBwYXJzZShwYXJzZWRGaWxlKSB7XG4gICAgcmV0dXJuIHBhcnNlZEZpbGUuZG9jQ29tbWVudHMuZmlsdGVyKGRvY0NvbW1lbnQgPT4ge1xuICAgICAgcmV0dXJuIGRvY0NvbW1lbnQudGFnZGljdC5oYXMoRE9DX1RZUEUpO1xuICAgIH0pLm1hcChkb2NDb21tZW50ID0+IHtcbiAgICAgIHJldHVybiBuZXcgRWxlbWVudERvYyh7XG4gICAgICAgIGZpbGU6IHBhcnNlZEZpbGUsXG4gICAgICAgIHRhZ2RpY3Q6IGRvY0NvbW1lbnQudGFnZGljdFxuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cbn1cbiJdfQ==