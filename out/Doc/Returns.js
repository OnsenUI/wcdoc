'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Returns = function () {

  /**
   * @param {string/null} type
   * @param {string} [description]
   */
  function Returns(type) {
    var description = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

    _classCallCheck(this, Returns);

    this._type = typeof type === 'string' ? type : null;
    this._description = description;
  }

  /**
   * @return {string/null}
   */


  _createClass(Returns, [{
    key: 'type',
    get: function get() {
      return this._type;
    }

    /**
     * @return {string}
     */

  }, {
    key: 'description',
    get: function get() {
      return this._description || '';
    }

    /**
     * @param {string} tagString
     * @return {Type}
     */

  }], [{
    key: 'parse',
    value: function parse(tagString) {
      tagString = '' + tagString;

      var regex = /^\s*(\{([^}]+)})?(\s*((?:.|\r|\n)+))?$/m;
      var matches = tagString.match(regex);

      if (matches) {
        var typeString = matches[2];
        var description = (matches[4] || '').trim();

        return new Returns(typeString, description);
      } else {
        return new Returns(null, tagString);
      }
    }
  }]);

  return Returns;
}();

exports.default = Returns;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9Eb2MvUmV0dXJucy5qcyJdLCJuYW1lcyI6WyJSZXR1cm5zIiwidHlwZSIsImRlc2NyaXB0aW9uIiwiX3R5cGUiLCJfZGVzY3JpcHRpb24iLCJ0YWdTdHJpbmciLCJyZWdleCIsIm1hdGNoZXMiLCJtYXRjaCIsInR5cGVTdHJpbmciLCJ0cmltIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0lBQ3FCQSxPOztBQUVuQjs7OztBQUlBLG1CQUFZQyxJQUFaLEVBQW9DO0FBQUEsUUFBbEJDLFdBQWtCLHVFQUFKLEVBQUk7O0FBQUE7O0FBQ2xDLFNBQUtDLEtBQUwsR0FBYSxPQUFPRixJQUFQLEtBQWdCLFFBQWhCLEdBQTJCQSxJQUEzQixHQUFrQyxJQUEvQztBQUNBLFNBQUtHLFlBQUwsR0FBb0JGLFdBQXBCO0FBQ0Q7O0FBRUQ7Ozs7Ozs7d0JBR1c7QUFDVCxhQUFPLEtBQUtDLEtBQVo7QUFDRDs7QUFFRDs7Ozs7O3dCQUdrQjtBQUNoQixhQUFPLEtBQUtDLFlBQUwsSUFBcUIsRUFBNUI7QUFDRDs7QUFFRDs7Ozs7OzswQkFJYUMsUyxFQUFXO0FBQ3RCQSxrQkFBWSxLQUFLQSxTQUFqQjs7QUFFQSxVQUFNQyxRQUFRLHlDQUFkO0FBQ0EsVUFBTUMsVUFBVUYsVUFBVUcsS0FBVixDQUFnQkYsS0FBaEIsQ0FBaEI7O0FBRUEsVUFBSUMsT0FBSixFQUFhO0FBQ1gsWUFBTUUsYUFBYUYsUUFBUSxDQUFSLENBQW5CO0FBQ0EsWUFBTUwsY0FBYyxDQUFDSyxRQUFRLENBQVIsS0FBYyxFQUFmLEVBQW1CRyxJQUFuQixFQUFwQjs7QUFFQSxlQUFPLElBQUlWLE9BQUosQ0FBWVMsVUFBWixFQUF3QlAsV0FBeEIsQ0FBUDtBQUNELE9BTEQsTUFLTztBQUNMLGVBQU8sSUFBSUYsT0FBSixDQUFZLElBQVosRUFBa0JLLFNBQWxCLENBQVA7QUFDRDtBQUNGOzs7Ozs7a0JBM0NrQkwsTyIsImZpbGUiOiJSZXR1cm5zLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZXR1cm5zIHtcblxuICAvKipcbiAgICogQHBhcmFtIHtzdHJpbmcvbnVsbH0gdHlwZVxuICAgKiBAcGFyYW0ge3N0cmluZ30gW2Rlc2NyaXB0aW9uXVxuICAgKi9cbiAgY29uc3RydWN0b3IodHlwZSwgZGVzY3JpcHRpb24gPSAnJykge1xuICAgIHRoaXMuX3R5cGUgPSB0eXBlb2YgdHlwZSA9PT0gJ3N0cmluZycgPyB0eXBlIDogbnVsbDtcbiAgICB0aGlzLl9kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICB9XG5cbiAgLyoqXG4gICAqIEByZXR1cm4ge3N0cmluZy9udWxsfVxuICAgKi9cbiAgZ2V0IHR5cGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3R5cGU7XG4gIH1cblxuICAvKipcbiAgICogQHJldHVybiB7c3RyaW5nfVxuICAgKi9cbiAgZ2V0IGRlc2NyaXB0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLl9kZXNjcmlwdGlvbiB8fCAnJztcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gdGFnU3RyaW5nXG4gICAqIEByZXR1cm4ge1R5cGV9XG4gICAqL1xuICBzdGF0aWMgcGFyc2UodGFnU3RyaW5nKSB7XG4gICAgdGFnU3RyaW5nID0gJycgKyB0YWdTdHJpbmc7XG5cbiAgICBjb25zdCByZWdleCA9IC9eXFxzKihcXHsoW159XSspfSk/KFxccyooKD86LnxcXHJ8XFxuKSspKT8kL207XG4gICAgY29uc3QgbWF0Y2hlcyA9IHRhZ1N0cmluZy5tYXRjaChyZWdleCk7XG4gICAgXG4gICAgaWYgKG1hdGNoZXMpIHtcbiAgICAgIGNvbnN0IHR5cGVTdHJpbmcgPSBtYXRjaGVzWzJdO1xuICAgICAgY29uc3QgZGVzY3JpcHRpb24gPSAobWF0Y2hlc1s0XSB8fCAnJykudHJpbSgpO1xuXG4gICAgICByZXR1cm4gbmV3IFJldHVybnModHlwZVN0cmluZywgZGVzY3JpcHRpb24pO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gbmV3IFJldHVybnMobnVsbCwgdGFnU3RyaW5nKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==