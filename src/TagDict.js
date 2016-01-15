
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
   * @return {string/null}
   */
  get(name) {
    return this._dict[name] ? this._dict[name][0] : null;
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

    const dict = new TagDict(comment.location);
    const headerDescription = comment.value.match(/^([^@]*)/m)[1];
    const regex = /^ *(?:@([-_a-zA-Z0-9]+) +)(?:((?:[^\r\n]|(?:\r|\n)[^@])+))?/gm;
    regex.lastIndex = headerDescription.length;

    if (headerDescription.trim() !== '') {
      dict._add('description', headerDescription);
      dict._add('desc', headerDescription);
    }

    let matches;

    while (matches = regex.exec(comment.value)) {
      const name = matches[1];
      const value = typeof matches[2] === 'string' ? matches[2] : '';

      if (typeof name === 'string') {
        dict._add(name, value);
      } 
    }
    
    return dict;
  }
}
