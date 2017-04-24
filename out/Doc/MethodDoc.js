'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Doc2 = require('./Doc');

var _Doc3 = _interopRequireDefault(_Doc2);

var _Parameter = require('./Parameter');

var _Parameter2 = _interopRequireDefault(_Parameter);

var _Returns = require('./Returns');

var _Returns2 = _interopRequireDefault(_Returns);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DOC_TYPE = 'method';

var MethodDoc = function (_Doc) {
  _inherits(MethodDoc, _Doc);

  /**
   * @param {object} params
   * @param {TagDict} params.tagdict
   * @param {ParsedFile} params.file
   */
  function MethodDoc(params) {
    _classCallCheck(this, MethodDoc);

    var _this = _possibleConstructorReturn(this, (MethodDoc.__proto__ || Object.getPrototypeOf(MethodDoc)).call(this, DOC_TYPE, params.file));

    _this._tagdict = params.tagdict;
    _this._params = _this._buildParamDocs();
    _this._returns = _this._buildReturnDoc();
    return _this;
  }

  _createClass(MethodDoc, [{
    key: '_buildParamDocs',
    value: function _buildParamDocs() {
      return this._tagdict.getMany('param').map(function (value) {
        return _Parameter2.default.parse(value);
      });
    }
  }, {
    key: '_buildReturnDoc',
    value: function _buildReturnDoc() {
      if (this._tagdict.has('return')) {
        return _Returns2.default.parse(this._tagdict.get('return'));
      }

      return null;
    }
  }, {
    key: 'params',
    get: function get() {
      return this._params;
    }
  }, {
    key: 'returns',
    get: function get() {
      return this._returns;
    }
  }, {
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
        return new MethodDoc({
          file: parsedFile,
          tagdict: docComment.tagdict
        });
      });
    }
  }]);

  return MethodDoc;
}(_Doc3.default);

exports.default = MethodDoc;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9Eb2MvTWV0aG9kRG9jLmpzIl0sIm5hbWVzIjpbIkRPQ19UWVBFIiwiTWV0aG9kRG9jIiwicGFyYW1zIiwiZmlsZSIsIl90YWdkaWN0IiwidGFnZGljdCIsIl9wYXJhbXMiLCJfYnVpbGRQYXJhbURvY3MiLCJfcmV0dXJucyIsIl9idWlsZFJldHVybkRvYyIsImdldE1hbnkiLCJtYXAiLCJwYXJzZSIsInZhbHVlIiwiaGFzIiwiZ2V0IiwidHJpbSIsInBhcnNlZEZpbGUiLCJkb2NDb21tZW50cyIsImZpbHRlciIsImRvY0NvbW1lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxXQUFXLFFBQWpCOztJQUVxQkMsUzs7O0FBRW5COzs7OztBQUtBLHFCQUFZQyxNQUFaLEVBQW9CO0FBQUE7O0FBQUEsc0hBQ1pGLFFBRFksRUFDRkUsT0FBT0MsSUFETDs7QUFFbEIsVUFBS0MsUUFBTCxHQUFnQkYsT0FBT0csT0FBdkI7QUFDQSxVQUFLQyxPQUFMLEdBQWUsTUFBS0MsZUFBTCxFQUFmO0FBQ0EsVUFBS0MsUUFBTCxHQUFnQixNQUFLQyxlQUFMLEVBQWhCO0FBSmtCO0FBS25COzs7O3NDQUVpQjtBQUNoQixhQUFPLEtBQUtMLFFBQUwsQ0FBY00sT0FBZCxDQUFzQixPQUF0QixFQUErQkMsR0FBL0IsQ0FBbUMsaUJBQVM7QUFDakQsZUFBTyxvQkFBVUMsS0FBVixDQUFnQkMsS0FBaEIsQ0FBUDtBQUNELE9BRk0sQ0FBUDtBQUdEOzs7c0NBRWlCO0FBQ2hCLFVBQUksS0FBS1QsUUFBTCxDQUFjVSxHQUFkLENBQWtCLFFBQWxCLENBQUosRUFBaUM7QUFDL0IsZUFBTyxrQkFBUUYsS0FBUixDQUFjLEtBQUtSLFFBQUwsQ0FBY1csR0FBZCxDQUFrQixRQUFsQixDQUFkLENBQVA7QUFDRDs7QUFFRCxhQUFPLElBQVA7QUFDRDs7O3dCQUVZO0FBQ1gsYUFBTyxLQUFLVCxPQUFaO0FBQ0Q7Ozt3QkFFYTtBQUNaLGFBQU8sS0FBS0UsUUFBWjtBQUNEOzs7d0JBRVU7QUFDVCxhQUFPLEtBQUtKLFFBQUwsQ0FBY1csR0FBZCxDQUFrQmYsUUFBbEIsRUFBNEJnQixJQUE1QixFQUFQO0FBQ0Q7Ozt3QkFFYTtBQUNaLGFBQU8sS0FBS1osUUFBWjtBQUNEOzs7d0JBRWtCO0FBQ2pCLGFBQU8sS0FBS0EsUUFBTCxDQUFjVSxHQUFkLENBQWtCLFlBQWxCLENBQVA7QUFDRDs7O3dCQUVpQjtBQUNoQixhQUFPLEtBQUtWLFFBQUwsQ0FBY1csR0FBZCxDQUFrQixhQUFsQixDQUFQO0FBQ0Q7O0FBRUQ7Ozs7Ozs7MEJBSWFFLFUsRUFBWTtBQUN2QixhQUFPQSxXQUFXQyxXQUFYLENBQXVCQyxNQUF2QixDQUE4QixzQkFBYztBQUNqRCxlQUFPQyxXQUFXZixPQUFYLENBQW1CUyxHQUFuQixDQUF1QmQsUUFBdkIsQ0FBUDtBQUNELE9BRk0sRUFFSlcsR0FGSSxDQUVBLHNCQUFjO0FBQ25CLGVBQU8sSUFBSVYsU0FBSixDQUFjO0FBQ25CRSxnQkFBTWMsVUFEYTtBQUVuQlosbUJBQVNlLFdBQVdmO0FBRkQsU0FBZCxDQUFQO0FBSUQsT0FQTSxDQUFQO0FBUUQ7Ozs7OztrQkFqRWtCSixTIiwiZmlsZSI6Ik1ldGhvZERvYy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBEb2MgZnJvbSAnLi9Eb2MnO1xuaW1wb3J0IFBhcmFtZXRlciBmcm9tICcuL1BhcmFtZXRlcic7XG5pbXBvcnQgUmV0dXJucyBmcm9tICcuL1JldHVybnMnO1xuXG5jb25zdCBET0NfVFlQRSA9ICdtZXRob2QnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNZXRob2REb2MgZXh0ZW5kcyBEb2Mge1xuXG4gIC8qKlxuICAgKiBAcGFyYW0ge29iamVjdH0gcGFyYW1zXG4gICAqIEBwYXJhbSB7VGFnRGljdH0gcGFyYW1zLnRhZ2RpY3RcbiAgICogQHBhcmFtIHtQYXJzZWRGaWxlfSBwYXJhbXMuZmlsZVxuICAgKi9cbiAgY29uc3RydWN0b3IocGFyYW1zKSB7XG4gICAgc3VwZXIoRE9DX1RZUEUsIHBhcmFtcy5maWxlKTtcbiAgICB0aGlzLl90YWdkaWN0ID0gcGFyYW1zLnRhZ2RpY3Q7XG4gICAgdGhpcy5fcGFyYW1zID0gdGhpcy5fYnVpbGRQYXJhbURvY3MoKTtcbiAgICB0aGlzLl9yZXR1cm5zID0gdGhpcy5fYnVpbGRSZXR1cm5Eb2MoKTtcbiAgfVxuXG4gIF9idWlsZFBhcmFtRG9jcygpIHtcbiAgICByZXR1cm4gdGhpcy5fdGFnZGljdC5nZXRNYW55KCdwYXJhbScpLm1hcCh2YWx1ZSA9PiB7XG4gICAgICByZXR1cm4gUGFyYW1ldGVyLnBhcnNlKHZhbHVlKTtcbiAgICB9KTtcbiAgfVxuXG4gIF9idWlsZFJldHVybkRvYygpIHtcbiAgICBpZiAodGhpcy5fdGFnZGljdC5oYXMoJ3JldHVybicpKSB7XG4gICAgICByZXR1cm4gUmV0dXJucy5wYXJzZSh0aGlzLl90YWdkaWN0LmdldCgncmV0dXJuJykpO1xuICAgIH1cblxuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgZ2V0IHBhcmFtcygpIHtcbiAgICByZXR1cm4gdGhpcy5fcGFyYW1zO1xuICB9XG5cbiAgZ2V0IHJldHVybnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3JldHVybnM7XG4gIH1cblxuICBnZXQgbmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fdGFnZGljdC5nZXQoRE9DX1RZUEUpLnRyaW0oKTtcbiAgfVxuXG4gIGdldCB0YWdkaWN0KCkge1xuICAgIHJldHVybiB0aGlzLl90YWdkaWN0O1xuICB9XG5cbiAgZ2V0IGlzRGVwcmVjYXRlZCgpIHtcbiAgICByZXR1cm4gdGhpcy5fdGFnZGljdC5oYXMoJ2RlcHJlY2F0ZWQnKTtcbiAgfVxuXG4gIGdldCBkZXNjcmlwdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5fdGFnZGljdC5nZXQoJ2Rlc2NyaXB0aW9uJyk7XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHtQYXJzZWRGaWxlfSBwYXJzZWRGaWxlXG4gICAqIEByZXR1cm4ge2FycmF5fVxuICAgKi9cbiAgc3RhdGljIHBhcnNlKHBhcnNlZEZpbGUpIHtcbiAgICByZXR1cm4gcGFyc2VkRmlsZS5kb2NDb21tZW50cy5maWx0ZXIoZG9jQ29tbWVudCA9PiB7XG4gICAgICByZXR1cm4gZG9jQ29tbWVudC50YWdkaWN0LmhhcyhET0NfVFlQRSk7XG4gICAgfSkubWFwKGRvY0NvbW1lbnQgPT4ge1xuICAgICAgcmV0dXJuIG5ldyBNZXRob2REb2Moe1xuICAgICAgICBmaWxlOiBwYXJzZWRGaWxlLFxuICAgICAgICB0YWdkaWN0OiBkb2NDb21tZW50LnRhZ2RpY3RcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG59XG4iXX0=