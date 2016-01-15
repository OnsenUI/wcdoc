import Type from './Type';

export default class Returns {

  /**
   * @param {Type/null} type
   * @param {string} [description]
   */
  constructor(type, description = '') {
    this._type = type;
    this._description = description;
  }

  /**
   * @return {Type}
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
    const regex = /^\s*(\{([^}]+)})?(\s*((?:.|\r|\n)+))?$/m;
    const matches = tagString.match(regex);
    
    if (matches) {
      const typeString = matches[2];
      const description = (matches[4] || '').trim();
      const parsedType = typeString ? Type.parse(typeString) : null;

      return new Returns(parsedType, description);
    } else {
      return new Returns(null, tagString);
    }

  }
}
