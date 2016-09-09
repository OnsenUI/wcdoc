
export default class TagDict {

  /**
   * @param {number} location
   */
  constructor(location) {
    if (typeof location !== 'object') {
      throw new Error('location parameter must be an object');
    }

    this._dict = new Map();
    this._tags = [];
    this._location = location;
  }

  get location() {
    return this._location;
  }

  /**
   * @param {string} name
   * @return {array}
   */
  getMany(name) {
    return this._dict.get(name) || [];
  }

  /**
   * @param {string} name
   * @param {any} [defaultValue]
   * @return {string/null}
   */
  get(name, defaultValue = null) {
    return this._dict.has(name) ? this._dict.get(name)[0] : defaultValue;
  }

  /**
   * @return {string/null}
   */
  getFirstTagName() {
    return this._tags[0] ? this._tags[0].name : null;
  }

  /**
   * @param {string} name
   * @return {array}
   */
  _add(name, value) {
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
  has(name) {
    return this._dict.has(name);
  }

  /**
   * @param {string} str
   * @return {Array}
   */
  static _parseTags(str) {
    const tagRegex = /^[ \t]*@([-_a-z]+)/mg;
    const tags = [];

    let matches;
    while (matches = tagRegex.exec(str)) {
      tags.push({
        name: matches[1],
        start: matches.index,
        end: matches.index + matches[0].length
      });
    }

    tags.forEach((tag, i) => {
      const commentStart = tag.end;
      const commentEnd = tags[i + 1] ? tags[i + 1].start : str.length;
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
  static parse(comment) {

    const normalize = str => {
      // Remove line tail spaces and split to lines.
      const lines = str.replace(/\s+$/mg, '').split(/\r\n|\r|\n/);

      // Count minimum line header spaces.
      const spaceLength = lines.filter(line => {
        return line.length > 0 && line.match(/\S/);
      }).map(line => {
        const matches = line.match(/^\s*/);
        return matches[0].length;
      }).sort((left, right) => left - right)[0] || 0;

      // Removed the header spaces.
      return lines.map(line => line.slice(spaceLength)).join('\n');
    };

    if (typeof comment.value !== 'string') {
      throw new Error();
    }

    const dict = new TagDict(comment.location);
    const tags = TagDict._parseTags(comment.value);

    tags.forEach(({name, value}) => {
      dict._add(name, normalize(value));
    });

    if (!dict.has('description')) {
      if (tags.length === 0) {
        dict._add('description', normalize(comment.value));
      } else {
        const headerDescription = comment.value.substring(0, tags[0].start);
        dict._add('description', normalize(headerDescription));
      }
    }

    return dict;
  }
}
