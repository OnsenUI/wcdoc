
export default class Returns {

  /**
   * @param {string/null} type
   * @param {string} [description]
   */
  constructor(type, description = '') {
    this._type = typeof type === 'string' ? type : null;
    this._description = description;
  }

  /**
   * @return {string/null}
   */
  get type() {
    return this._type;
  }

  /**
   * @return {string}
   */
  get description() {
    return this._description || '';
  }

  /**
   * @param {string} tagString
   * @return {Type}
   */
  static parse(tagString) {
    tagString = '' + tagString;

    const regex = /^\s*(\{([^}]+)})?(\s*((?:.|\r|\n)+))?$/m;
    const matches = tagString.match(regex);
    
    if (matches) {
      const typeString = matches[2];
      const description = (matches[4] || '').trim();

      return new Returns(typeString, description);
    } else {
      return new Returns(null, tagString);
    }
  }
}
