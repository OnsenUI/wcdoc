'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Parameter = function () {

  /**
   * @param {string/null} type
   * @param {string} name
   * @param {boolean} isOptional
   * @param {string} [description]
   */
  function Parameter(type, name, isOptional) {
    var description = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '';

    _classCallCheck(this, Parameter);

    this._type = typeof type === 'string' ? type : null;
    this._name = name;
    this._isOptional = isOptional;
    this._description = description;
  }

  _createClass(Parameter, [{
    key: 'isOptional',
    value: function isOptional() {
      return this._isOptional;
    }
  }, {
    key: 'name',
    get: function get() {
      return this._name;
    }

    /**
     * @return {string/null}
     */

  }, {
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
      var regex = /^\s*(?:\{([^}]+)}\s+)?(\[?\S+]?)?(?:\s+((?:.|\n|\r)+))?\s*$/;
      var matches = tagString.match(regex);

      if (matches) {
        var typeString = matches[1];
        var name = matches[2].replace(/^\[/, '').replace(/]$/, '');
        var description = (matches[3] || '').trim();
        var isOptional = matches[2].substring(0, 1) === '[' && matches[2].substring(-1, 0) === ']';

        return new Parameter(typeString, name, isOptional, description);
      } else {
        throw new Error('Fail to parse: ' + tagString);
      }
    }
  }]);

  return Parameter;
}();

exports.default = Parameter;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9Eb2MvUGFyYW1ldGVyLmpzIl0sIm5hbWVzIjpbIlBhcmFtZXRlciIsInR5cGUiLCJuYW1lIiwiaXNPcHRpb25hbCIsImRlc2NyaXB0aW9uIiwiX3R5cGUiLCJfbmFtZSIsIl9pc09wdGlvbmFsIiwiX2Rlc2NyaXB0aW9uIiwidGFnU3RyaW5nIiwicmVnZXgiLCJtYXRjaGVzIiwibWF0Y2giLCJ0eXBlU3RyaW5nIiwicmVwbGFjZSIsInRyaW0iLCJzdWJzdHJpbmciLCJFcnJvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztJQUNxQkEsUzs7QUFFbkI7Ozs7OztBQU1BLHFCQUFZQyxJQUFaLEVBQWtCQyxJQUFsQixFQUF3QkMsVUFBeEIsRUFBc0Q7QUFBQSxRQUFsQkMsV0FBa0IsdUVBQUosRUFBSTs7QUFBQTs7QUFDcEQsU0FBS0MsS0FBTCxHQUFhLE9BQU9KLElBQVAsS0FBZ0IsUUFBaEIsR0FBMkJBLElBQTNCLEdBQWtDLElBQS9DO0FBQ0EsU0FBS0ssS0FBTCxHQUFhSixJQUFiO0FBQ0EsU0FBS0ssV0FBTCxHQUFtQkosVUFBbkI7QUFDQSxTQUFLSyxZQUFMLEdBQW9CSixXQUFwQjtBQUNEOzs7O2lDQUVZO0FBQ1gsYUFBTyxLQUFLRyxXQUFaO0FBQ0Q7Ozt3QkFFVTtBQUNULGFBQU8sS0FBS0QsS0FBWjtBQUNEOztBQUVEOzs7Ozs7d0JBR1c7QUFDVCxhQUFPLEtBQUtELEtBQVo7QUFDRDs7QUFFRDs7Ozs7O3dCQUdrQjtBQUNoQixhQUFPLEtBQUtHLFlBQUwsSUFBcUIsRUFBNUI7QUFDRDs7QUFFRDs7Ozs7OzswQkFJYUMsUyxFQUFXO0FBQ3RCLFVBQU1DLFFBQVEsNkRBQWQ7QUFDQSxVQUFNQyxVQUFVRixVQUFVRyxLQUFWLENBQWdCRixLQUFoQixDQUFoQjs7QUFFQSxVQUFJQyxPQUFKLEVBQWE7QUFDWCxZQUFNRSxhQUFhRixRQUFRLENBQVIsQ0FBbkI7QUFDQSxZQUFNVCxPQUFPUyxRQUFRLENBQVIsRUFBV0csT0FBWCxDQUFtQixLQUFuQixFQUEwQixFQUExQixFQUE4QkEsT0FBOUIsQ0FBc0MsSUFBdEMsRUFBNEMsRUFBNUMsQ0FBYjtBQUNBLFlBQU1WLGNBQWMsQ0FBQ08sUUFBUSxDQUFSLEtBQWMsRUFBZixFQUFtQkksSUFBbkIsRUFBcEI7QUFDQSxZQUFNWixhQUFhUSxRQUFRLENBQVIsRUFBV0ssU0FBWCxDQUFxQixDQUFyQixFQUF3QixDQUF4QixNQUErQixHQUEvQixJQUFzQ0wsUUFBUSxDQUFSLEVBQVdLLFNBQVgsQ0FBcUIsQ0FBQyxDQUF0QixFQUF5QixDQUF6QixNQUFnQyxHQUF6Rjs7QUFFQSxlQUFPLElBQUloQixTQUFKLENBQWNhLFVBQWQsRUFBMEJYLElBQTFCLEVBQWdDQyxVQUFoQyxFQUE0Q0MsV0FBNUMsQ0FBUDtBQUNELE9BUEQsTUFPTztBQUNMLGNBQU0sSUFBSWEsS0FBSixDQUFVLG9CQUFvQlIsU0FBOUIsQ0FBTjtBQUNEO0FBQ0Y7Ozs7OztrQkF2RGtCVCxTIiwiZmlsZSI6IlBhcmFtZXRlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGFyYW1ldGVyIHtcblxuICAvKipcbiAgICogQHBhcmFtIHtzdHJpbmcvbnVsbH0gdHlwZVxuICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZVxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IGlzT3B0aW9uYWxcbiAgICogQHBhcmFtIHtzdHJpbmd9IFtkZXNjcmlwdGlvbl1cbiAgICovXG4gIGNvbnN0cnVjdG9yKHR5cGUsIG5hbWUsIGlzT3B0aW9uYWwsIGRlc2NyaXB0aW9uID0gJycpIHtcbiAgICB0aGlzLl90eXBlID0gdHlwZW9mIHR5cGUgPT09ICdzdHJpbmcnID8gdHlwZSA6IG51bGw7XG4gICAgdGhpcy5fbmFtZSA9IG5hbWU7XG4gICAgdGhpcy5faXNPcHRpb25hbCA9IGlzT3B0aW9uYWw7XG4gICAgdGhpcy5fZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgfVxuXG4gIGlzT3B0aW9uYWwoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2lzT3B0aW9uYWw7XG4gIH1cblxuICBnZXQgbmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fbmFtZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcmV0dXJuIHtzdHJpbmcvbnVsbH1cbiAgICovXG4gIGdldCB0eXBlKCkge1xuICAgIHJldHVybiB0aGlzLl90eXBlO1xuICB9XG5cbiAgLyoqXG4gICAqIEByZXR1cm4ge3N0cmluZ31cbiAgICovXG4gIGdldCBkZXNjcmlwdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5fZGVzY3JpcHRpb24gfHwgJyc7XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHtzdHJpbmd9IHRhZ1N0cmluZ1xuICAgKiBAcmV0dXJuIHtUeXBlfVxuICAgKi9cbiAgc3RhdGljIHBhcnNlKHRhZ1N0cmluZykge1xuICAgIGNvbnN0IHJlZ2V4ID0gL15cXHMqKD86XFx7KFtefV0rKX1cXHMrKT8oXFxbP1xcUytdPyk/KD86XFxzKygoPzoufFxcbnxcXHIpKykpP1xccyokLztcbiAgICBjb25zdCBtYXRjaGVzID0gdGFnU3RyaW5nLm1hdGNoKHJlZ2V4KTtcblxuICAgIGlmIChtYXRjaGVzKSB7XG4gICAgICBjb25zdCB0eXBlU3RyaW5nID0gbWF0Y2hlc1sxXTtcbiAgICAgIGNvbnN0IG5hbWUgPSBtYXRjaGVzWzJdLnJlcGxhY2UoL15cXFsvLCAnJykucmVwbGFjZSgvXSQvLCAnJyk7XG4gICAgICBjb25zdCBkZXNjcmlwdGlvbiA9IChtYXRjaGVzWzNdIHx8ICcnKS50cmltKCk7XG4gICAgICBjb25zdCBpc09wdGlvbmFsID0gbWF0Y2hlc1syXS5zdWJzdHJpbmcoMCwgMSkgPT09ICdbJyAmJiBtYXRjaGVzWzJdLnN1YnN0cmluZygtMSwgMCkgPT09ICddJztcblxuICAgICAgcmV0dXJuIG5ldyBQYXJhbWV0ZXIodHlwZVN0cmluZywgbmFtZSwgaXNPcHRpb25hbCwgZGVzY3JpcHRpb24pO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ZhaWwgdG8gcGFyc2U6ICcgKyB0YWdTdHJpbmcpO1xuICAgIH1cbiAgfVxufVxuIl19