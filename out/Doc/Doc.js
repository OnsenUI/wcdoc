'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _ParsedFile = require('../ParsedFile');

var _ParsedFile2 = _interopRequireDefault(_ParsedFile);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Doc = function () {

  /**
   * @param {string} docType
   * @param {ParsedFile} file
   */
  function Doc(docType, file) {
    _classCallCheck(this, Doc);

    this._docType = docType;
    this._file = file;

    if (!(file instanceof _ParsedFile2.default)) {
      throw new Error('file must be an instance of ParsedFile');
    }
  }

  _createClass(Doc, [{
    key: 'docType',
    get: function get() {
      return this._docType;
    }
  }, {
    key: 'file',
    get: function get() {
      return this._file;
    }
  }]);

  return Doc;
}();

exports.default = Doc;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9Eb2MvRG9jLmpzIl0sIm5hbWVzIjpbIkRvYyIsImRvY1R5cGUiLCJmaWxlIiwiX2RvY1R5cGUiLCJfZmlsZSIsIkVycm9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOzs7Ozs7OztJQUVxQkEsRzs7QUFFbkI7Ozs7QUFJQSxlQUFZQyxPQUFaLEVBQXFCQyxJQUFyQixFQUEyQjtBQUFBOztBQUN6QixTQUFLQyxRQUFMLEdBQWdCRixPQUFoQjtBQUNBLFNBQUtHLEtBQUwsR0FBYUYsSUFBYjs7QUFFQSxRQUFJLEVBQUVBLG9DQUFGLENBQUosRUFBbUM7QUFDakMsWUFBTSxJQUFJRyxLQUFKLENBQVUsd0NBQVYsQ0FBTjtBQUNEO0FBQ0Y7Ozs7d0JBRWE7QUFDWixhQUFPLEtBQUtGLFFBQVo7QUFDRDs7O3dCQUVVO0FBQ1QsYUFBTyxLQUFLQyxLQUFaO0FBQ0Q7Ozs7OztrQkFyQmtCSixHIiwiZmlsZSI6IkRvYy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQYXJzZWRGaWxlIGZyb20gJy4uL1BhcnNlZEZpbGUnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEb2Mge1xuXG4gIC8qKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gZG9jVHlwZVxuICAgKiBAcGFyYW0ge1BhcnNlZEZpbGV9IGZpbGVcbiAgICovXG4gIGNvbnN0cnVjdG9yKGRvY1R5cGUsIGZpbGUpIHtcbiAgICB0aGlzLl9kb2NUeXBlID0gZG9jVHlwZTtcbiAgICB0aGlzLl9maWxlID0gZmlsZTtcblxuICAgIGlmICghKGZpbGUgaW5zdGFuY2VvZiBQYXJzZWRGaWxlKSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdmaWxlIG11c3QgYmUgYW4gaW5zdGFuY2Ugb2YgUGFyc2VkRmlsZScpO1xuICAgIH1cbiAgfVxuXG4gIGdldCBkb2NUeXBlKCkge1xuICAgIHJldHVybiB0aGlzLl9kb2NUeXBlO1xuICB9XG5cbiAgZ2V0IGZpbGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2ZpbGU7XG4gIH1cbn1cbiJdfQ==