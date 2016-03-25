
export default class TagDict {

  /**
   * @param {number} location
   */
  constructor(location) {
    if (typeof location !== 'object') {
      throw new Error('location parameter must be a object');
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
   * @param {object} comment
   * @param {string} comment.value
   * @param {number} comment.location
   * @return {TagDict}
   */
  static parse(comment) {

    const normalize = str => {
      const lines = str.replace(/\s+$/mg, '').split(/\r\n|\r|\n/);

      const spaceLength = lines.filter(line => {
        return line.length > 0 && line.match(/\S/);
      }).map(line => {
        const matches = line.match(/^\s*/);
        return matches[0].length;
      }).sort((left, right) => left - right)[0] || 0;

      return lines.map(line => line.slice(spaceLength)).join('\n');
    };

    if (typeof comment.value !== 'string') {
      throw new Error();
    }

    let matches;
    let lastIndex = 0;

    const dict = new TagDict(comment.location);
    matches = comment.value.match(/^([^@]+)/);
    const regex = /\s*(?:@([-_a-zA-Z0-9]+))(?: |\t)*(?:\r\n|\n|\r)*(\s*[^@]*)/g;

    const headerDescription = matches ? matches[0] : '';

    if (matches) {
      lastIndex = regex.lastIndex = matches[0].length;
    }

    while (matches = regex.exec(comment.value)) {
      lastIndex = regex.lastIndex;
      const name = matches[1];
      const value = typeof matches[2] === 'string' ? matches[2] : '';

      if (typeof name === 'string') {
        dict._add(name, normalize(value));
      } 
    }

    if (!dict.has('description') && headerDescription.length > 0) {
      dict._add('description', normalize(headerDescription));
    }


    if (comment.value.length === lastIndex) {
      return dict;
    } else {
      throw new Error('Fail to parse this doc comment: ' + comment.value);
    }
  }
}
