'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var TagDict = function () {

  /**
   * @param {number} location
   */
  function TagDict(location) {
    _classCallCheck(this, TagDict);

    if ((typeof location === 'undefined' ? 'undefined' : _typeof(location)) !== 'object') {
      throw new Error('location parameter must be an object');
    }

    this._dict = new Map();
    this._tags = [];
    this._location = location;
  }

  _createClass(TagDict, [{
    key: 'getMany',


    /**
     * @param {string} name
     * @return {array}
     */
    value: function getMany(name) {
      return this._dict.get(name) || [];
    }

    /**
     * @param {string} name
     * @param {any} [defaultValue]
     * @return {string/null}
     */

  }, {
    key: 'get',
    value: function get(name) {
      var defaultValue = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

      return this._dict.has(name) ? this._dict.get(name)[0] : defaultValue;
    }

    /**
     * @return {string/null}
     */

  }, {
    key: 'getFirstTagName',
    value: function getFirstTagName() {
      return this._tags[0] ? this._tags[0].name : null;
    }

    /**
     * @param {string} name
     * @return {array}
     */

  }, {
    key: '_add',
    value: function _add(name, value) {
      this._tags.push({
        name: name,
        value: value
      });

      if (!this._dict.has(name)) {
        this._dict.set(name, []);
      }

      this._dict.get(name).push(value);
    }

    /** 
     * @param {string} name
     * @return {boolean}
     */

  }, {
    key: 'has',
    value: function has(name) {
      return this._dict.has(name);
    }

    /**
     * @param {string} str
     * @return {Array}
     */

  }, {
    key: 'location',
    get: function get() {
      return this._location;
    }
  }], [{
    key: '_parseTags',
    value: function _parseTags(str) {
      var tagRegex = /^[ \t]*@([-_a-z]+)/mg;
      var tags = [];

      var matches = void 0;
      while (matches = tagRegex.exec(str)) {
        tags.push({
          name: matches[1],
          start: matches.index,
          end: matches.index + matches[0].length
        });
      }

      tags.forEach(function (tag, i) {
        var commentStart = tag.end;
        var commentEnd = tags[i + 1] ? tags[i + 1].start : str.length;
        tag.value = str.substring(commentStart, commentEnd).replace(/^[ \t]+(\r|\n|\r\n)?/, '');
      });

      return tags;
    }

    /**
     * @param {object} comment
     * @param {string} comment.value
     * @param {number} comment.location
     * @return {TagDict}
     */

  }, {
    key: 'parse',
    value: function parse(comment) {

      var normalize = function normalize(str) {
        // Remove line tail spaces and split to lines.
        var lines = str.replace(/\s+$/mg, '').split(/\r\n|\r|\n/);

        // Count minimum line header spaces.
        var spaceLength = lines.filter(function (line) {
          return line.length > 0 && line.match(/\S/);
        }).map(function (line) {
          var matches = line.match(/^\s*/);
          return matches[0].length;
        }).sort(function (left, right) {
          return left - right;
        })[0] || 0;

        // Removed the header spaces.
        return lines.map(function (line) {
          return line.slice(spaceLength);
        }).join('\n');
      };

      if (typeof comment.value !== 'string') {
        throw new Error();
      }

      var dict = new TagDict(comment.location);
      var tags = TagDict._parseTags(comment.value);

      tags.forEach(function (_ref) {
        var name = _ref.name,
            value = _ref.value;

        dict._add(name, normalize(value));
      });

      if (!dict.has('description')) {
        if (tags.length === 0) {
          dict._add('description', normalize(comment.value));
        } else {
          var headerDescription = comment.value.substring(0, tags[0].start);
          dict._add('description', normalize(headerDescription));
        }
      }

      return dict;
    }
  }]);

  return TagDict;
}();

exports.default = TagDict;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9UYWdEaWN0LmpzIl0sIm5hbWVzIjpbIlRhZ0RpY3QiLCJsb2NhdGlvbiIsIkVycm9yIiwiX2RpY3QiLCJNYXAiLCJfdGFncyIsIl9sb2NhdGlvbiIsIm5hbWUiLCJnZXQiLCJkZWZhdWx0VmFsdWUiLCJoYXMiLCJ2YWx1ZSIsInB1c2giLCJzZXQiLCJzdHIiLCJ0YWdSZWdleCIsInRhZ3MiLCJtYXRjaGVzIiwiZXhlYyIsInN0YXJ0IiwiaW5kZXgiLCJlbmQiLCJsZW5ndGgiLCJmb3JFYWNoIiwidGFnIiwiaSIsImNvbW1lbnRTdGFydCIsImNvbW1lbnRFbmQiLCJzdWJzdHJpbmciLCJyZXBsYWNlIiwiY29tbWVudCIsIm5vcm1hbGl6ZSIsImxpbmVzIiwic3BsaXQiLCJzcGFjZUxlbmd0aCIsImZpbHRlciIsImxpbmUiLCJtYXRjaCIsIm1hcCIsInNvcnQiLCJsZWZ0IiwicmlnaHQiLCJzbGljZSIsImpvaW4iLCJkaWN0IiwiX3BhcnNlVGFncyIsIl9hZGQiLCJoZWFkZXJEZXNjcmlwdGlvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0lBQ3FCQSxPOztBQUVuQjs7O0FBR0EsbUJBQVlDLFFBQVosRUFBc0I7QUFBQTs7QUFDcEIsUUFBSSxRQUFPQSxRQUFQLHlDQUFPQSxRQUFQLE9BQW9CLFFBQXhCLEVBQWtDO0FBQ2hDLFlBQU0sSUFBSUMsS0FBSixDQUFVLHNDQUFWLENBQU47QUFDRDs7QUFFRCxTQUFLQyxLQUFMLEdBQWEsSUFBSUMsR0FBSixFQUFiO0FBQ0EsU0FBS0MsS0FBTCxHQUFhLEVBQWI7QUFDQSxTQUFLQyxTQUFMLEdBQWlCTCxRQUFqQjtBQUNEOzs7Ozs7QUFNRDs7Ozs0QkFJUU0sSSxFQUFNO0FBQ1osYUFBTyxLQUFLSixLQUFMLENBQVdLLEdBQVgsQ0FBZUQsSUFBZixLQUF3QixFQUEvQjtBQUNEOztBQUVEOzs7Ozs7Ozt3QkFLSUEsSSxFQUEyQjtBQUFBLFVBQXJCRSxZQUFxQix1RUFBTixJQUFNOztBQUM3QixhQUFP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UDtBQUNELE9BZEQ7O0FBZ0JBLFVBQUksT0FBT2IsUUFBUW5CLEtBQWYsS0FBeUIsUUFBN0IsRUFBdUM7QUFDckMsY0FBTSxJQUFJVCxLQUFKLEVBQU47QUFDRDs7QUFFRCxVQUFNMEMsT0FBTyxJQUFJNUMsT0FBSixDQUFZOEIsUUFBUTdCLFFBQXBCLENBQWI7QUFDQSxVQUFNZSxPQUFPaEIsUUFBUTZDLFVBQVIsQ0FBbUJmLFFBQVFuQixLQUEzQixDQUFiOztBQUVBSyxXQUFLTyxPQUFMLENBQWEsZ0JBQW1CO0FBQUEsWUFBakJoQixJQUFpQixRQUFqQkEsSUFBaUI7QUFBQSxZQUFYSSxLQUFXLFFBQVhBLEtBQVc7O0FBQzlCaUMsYUFBS0UsSUFBTCxDQUFVdkMsSUFBVixFQUFnQndCLFVBQVVwQixLQUFWLENBQWhCO0FBQ0QsT0FGRDs7QUFJQSxVQUFJLENBQUNpQyxLQUFLbEMsR0FBTCxDQUFTLGFBQVQsQ0FBTCxFQUE4QjtBQUM1QixZQUFJTSxLQUFLTSxNQUFMLEtBQWdCLENBQXBCLEVBQXVCO0FBQ3JCc0IsZUFBS0UsSUFBTCxDQUFVLGFBQVYsRUFBeUJmLFVBQVVELFFBQVFuQixLQUFsQixDQUF6QjtBQUNELFNBRkQsTUFFTztBQUNMLGNBQU1vQyxvQkFBb0JqQixRQUFRbkIsS0FBUixDQUFjaUIsU0FBZCxDQUF3QixDQUF4QixFQUEyQlosS0FBSyxDQUFMLEVBQVFHLEtBQW5DLENBQTFCO0FBQ0F5QixlQUFLRSxJQUFMLENBQVUsYUFBVixFQUF5QmYsVUFBVWdCLGlCQUFWLENBQXpCO0FBQ0Q7QUFDRjs7QUFFRCxhQUFPSCxJQUFQO0FBQ0Q7Ozs7OztrQkEzSWtCNUMsTyIsImZpbGUiOiJUYWdEaWN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUYWdEaWN0IHtcblxuICAvKipcbiAgICogQHBhcmFtIHtudW1iZXJ9IGxvY2F0aW9uXG4gICAqL1xuICBjb25zdHJ1Y3Rvcihsb2NhdGlvbikge1xuICAgIGlmICh0eXBlb2YgbG9jYXRpb24gIT09ICdvYmplY3QnKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ2xvY2F0aW9uIHBhcmFtZXRlciBtdXN0IGJlIGFuIG9iamVjdCcpO1xuICAgIH1cblxuICAgIHRoaXMuX2RpY3QgPSBuZXcgTWFwKCk7XG4gICAgdGhpcy5fdGFncyA9IFtdO1xuICAgIHRoaXMuX2xvY2F0aW9uID0gbG9jYXRpb247XG4gIH1cblxuICBnZXQgbG9jYXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuX2xvY2F0aW9uO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lXG4gICAqIEByZXR1cm4ge2FycmF5fVxuICAgKi9cbiAgZ2V0TWFueShuYW1lKSB7XG4gICAgcmV0dXJuIHRoaXMuX2RpY3QuZ2V0KG5hbWUpIHx8IFtdO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lXG4gICAqIEBwYXJhbSB7YW55fSBbZGVmYXVsdFZhbHVlXVxuICAgKiBAcmV0dXJuIHtzdHJpbmcvbnVsbH1cbiAgICovXG4gIGdldChuYW1lLCBkZWZhdWx0VmFsdWUgPSBudWxsKSB7XG4gICAgcmV0dXJuIHRoaXMuX2RpY3QuaGFzKG5hbWUpID8gdGhpcy5fZGljdC5nZXQobmFtZSlbMF0gOiBkZWZhdWx0VmFsdWU7XG4gIH1cblxuICAvKipcbiAgICogQHJldHVybiB7c3RyaW5nL251bGx9XG4gICAqL1xuICBnZXRGaXJzdFRhZ05hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3RhZ3NbMF0gPyB0aGlzLl90YWdzWzBdLm5hbWUgOiBudWxsO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lXG4gICAqIEByZXR1cm4ge2FycmF5fVxuICAgKi9cbiAgX2FkZChuYW1lLCB2YWx1ZSkge1xuICAgIHRoaXMuX3RhZ3MucHVzaCh7XG4gICAgICBuYW1lOiBuYW1lLFxuICAgICAgdmFsdWU6IHZhbHVlXG4gICAgfSk7XG5cbiAgICBpZiAoIXRoaXMuX2RpY3QuaGFzKG5hbWUpKSB7XG4gICAgICB0aGlzLl9kaWN0LnNldChuYW1lLCBbXSk7XG4gICAgfVxuXG4gICAgdGhpcy5fZGljdC5nZXQobmFtZSkucHVzaCh2YWx1ZSk7XG4gIH1cbiAgXG4gIC8qKiBcbiAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWVcbiAgICogQHJldHVybiB7Ym9vbGVhbn1cbiAgICovXG4gIGhhcyhuYW1lKSB7XG4gICAgcmV0dXJuIHRoaXMuX2RpY3QuaGFzKG5hbWUpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBzdHJcbiAgICogQHJldHVybiB7QXJyYXl9XG4gICAqL1xuICBzdGF0aWMgX3BhcnNlVGFncyhzdHIpIHtcbiAgICBjb25zdCB0YWdSZWdleCA9IC9eWyBcXHRdKkAoWy1fYS16XSspL21nO1xuICAgIGNvbnN0IHRhZ3MgPSBbXTtcblxuICAgIGxldCBtYXRjaGVzO1xuICAgIHdoaWxlIChtYXRjaGVzID0gdGFnUmVnZXguZXhlYyhzdHIpKSB7XG4gICAgICB0YWdzLnB1c2goe1xuICAgICAgICBuYW1lOiBtYXRjaGVzWzFdLFxuICAgICAgICBzdGFydDogbWF0Y2hlcy5pbmRleCxcbiAgICAgICAgZW5kOiBtYXRjaGVzLmluZGV4ICsgbWF0Y2hlc1swXS5sZW5ndGhcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHRhZ3MuZm9yRWFjaCgodGFnLCBpKSA9PiB7XG4gICAgICBjb25zdCBjb21tZW50U3RhcnQgPSB0YWcuZW5kO1xuICAgICAgY29uc3QgY29tbWVudEVuZCA9IHRhZ3NbaSArIDFdID8gdGFnc1tpICsgMV0uc3RhcnQgOiBzdHIubGVuZ3RoO1xuICAgICAgdGFnLnZhbHVlID0gc3RyLnN1YnN0cmluZyhjb21tZW50U3RhcnQsIGNvbW1lbnRFbmQpLnJlcGxhY2UoL15bIFxcdF0rKFxccnxcXG58XFxyXFxuKT8vLCAnJyk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gdGFncztcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge29iamVjdH0gY29tbWVudFxuICAgKiBAcGFyYW0ge3N0cmluZ30gY29tbWVudC52YWx1ZVxuICAgKiBAcGFyYW0ge251bWJlcn0gY29tbWVudC5sb2NhdGlvblxuICAgKiBAcmV0dXJuIHtUYWdEaWN0fVxuICAgKi9cbiAgc3RhdGljIHBhcnNlKGNvbW1lbnQpIHtcblxuICAgIGNvbnN0IG5vcm1hbGl6ZSA9IHN0ciA9PiB7XG4gICAgICAvLyBSZW1vdmUgbGluZSB0YWlsIHNwYWNlcyBhbmQgc3BsaXQgdG8gbGluZXMuXG4gICAgICBjb25zdCBsaW5lcyA9IHN0ci5yZXBsYWNlKC9cXHMrJC9tZywgJycpLnNwbGl0KC9cXHJcXG58XFxyfFxcbi8pO1xuXG4gICAgICAvLyBDb3VudCBtaW5pbXVtIGxpbmUgaGVhZGVyIHNwYWNlcy5cbiAgICAgIGNvbnN0IHNwYWNlTGVuZ3RoID0gbGluZXMuZmlsdGVyKGxpbmUgPT4ge1xuICAgICAgICByZXR1cm4gbGluZS5sZW5ndGggPiAwICYmIGxpbmUubWF0Y2goL1xcUy8pO1xuICAgICAgfSkubWFwKGxpbmUgPT4ge1xuICAgICAgICBjb25zdCBtYXRjaGVzID0gbGluZS5tYXRjaCgvXlxccyovKTtcbiAgICAgICAgcmV0dXJuIG1hdGNoZXNbMF0ubGVuZ3RoO1xuICAgICAgfSkuc29ydCgobGVmdCwgcmlnaHQpID0+IGxlZnQgLSByaWdodClbMF0gfHwgMDtcblxuICAgICAgLy8gUmVtb3ZlZCB0aGUgaGVhZGVyIHNwYWNlcy5cbiAgICAgIHJldHVybiBsaW5lcy5tYXAobGluZSA9PiBsaW5lLnNsaWNlKHNwYWNlTGVuZ3RoKSkuam9pbignXFxuJyk7XG4gICAgfTtcblxuICAgIGlmICh0eXBlb2YgY29tbWVudC52YWx1ZSAhPT0gJ3N0cmluZycpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcigpO1xuICAgIH1cblxuICAgIGNvbnN0IGRpY3QgPSBuZXcgVGFnRGljdChjb21tZW50LmxvY2F0aW9uKTtcbiAgICBjb25zdCB0YWdzID0gVGFnRGljdC5fcGFyc2VUYWdzKGNvbW1lbnQudmFsdWUpO1xuXG4gICAgdGFncy5mb3JFYWNoKCh7bmFtZSwgdmFsdWV9KSA9PiB7XG4gICAgICBkaWN0Ll9hZGQobmFtZSwgbm9ybWFsaXplKHZhbHVlKSk7XG4gICAgfSk7XG5cbiAgICBpZiAoIWRpY3QuaGFzKCdkZXNjcmlwdGlvbicpKSB7XG4gICAgICBpZiAodGFncy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgZGljdC5fYWRkKCdkZXNjcmlwdGlvbicsIG5vcm1hbGl6ZShjb21tZW50LnZhbHVlKSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBoZWFkZXJEZXNjcmlwdGlvbiA9IGNvbW1lbnQudmFsdWUuc3Vic3RyaW5nKDAsIHRhZ3NbMF0uc3RhcnQpO1xuICAgICAgICBkaWN0Ll9hZGQoJ2Rlc2NyaXB0aW9uJywgbm9ybWFsaXplKGhlYWRlckRlc2NyaXB0aW9uKSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGRpY3Q7XG4gIH1cbn1cbiJdfQ==