
export default class TagDict {

  /**
   * @param {number} location
   */
  constructor(location) {
    if (typeof location !== 'object') {
      throw new Error('location parameter must be a object');
    }

    this._dict = {};
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
    return this._dict[name] || [];
  }

  /**
   * @param {string} name
   * @param {any} [defaultValue]
   * @return {string/null}
   */
  get(name, defaultValue = null) {
    return this._dict[name] ? this._dict[name][0] : defaultValue;
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

    if (!this._dict[name]) {
      this._dict[name] = [];
    }

    this._dict[name].push(value);
  }
  
  /** 
   * @param {string} name
   * @return {boolean}
   */
  has(name) {
    return !!this._dict[name];
  }

  /**
   * @param {object} comment
   * @param {string} comment.value
   * @param {number} comment.location
   * @return {TagDict}
   */
  static parse(comment) {

    if (typeof comment.value !== 'string') {
      throw new Error();
    }

    let matches;
    let lastIndex = 0;

    const dict = new TagDict(comment.location);
    matches = comment.value.match(/^([^@]+)/);
    const regex = /\s*(?:@([-_a-zA-Z0-9]+))\s*([^@]*)/g;

    if (matches) {
      lastIndex = regex.lastIndex = matches[0].length;

      const headerDescription = matches[0].trim();
      if (headerDescription.length > 0) {
        dict._add('description', headerDescription);
        dict._add('desc', headerDescription);
      }
    }

    while (matches = regex.exec(comment.value)) {
      lastIndex = regex.lastIndex;
      const name = matches[1];
      const value = typeof matches[2] === 'string' ? matches[2] : '';

      if (typeof name === 'string') {
        dict._add(name, value.trim());
      } 
    }

    if (comment.value.length === lastIndex) {
      return dict;
    } else {
      throw new Error('Fail to parse this doc comment: ' + comment.value);
    }
  }
}
