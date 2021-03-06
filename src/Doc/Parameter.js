
export default class Parameter {

  /**
   * @param {string/null} type
   * @param {string} name
   * @param {boolean} isOptional
   * @param {string} [description]
   */
  constructor(type, name, isOptional, description = '') {
    this._type = typeof type === 'string' ? type : null;
    this._name = name;
    this._isOptional = isOptional;
    this._description = description;
  }

  isOptional() {
    return this._isOptional;
  }

  get name() {
    return this._name;
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
    const regex = /^\s*(?:\{([^}]+)}\s+)?(\[?\S+]?)?(?:\s+((?:.|\n|\r)+))?\s*$/;
    const matches = tagString.match(regex);

    if (matches) {
      const typeString = matches[1];
      const name = matches[2].replace(/^\[/, '').replace(/]$/, '');
      const description = (matches[3] || '').trim();
      const isOptional = matches[2].substring(0, 1) === '[' && matches[2].substring(-1, 0) === ']';

      return new Parameter(typeString, name, isOptional, description);
    } else {
      throw new Error('Fail to parse: ' + tagString);
    }
  }
}
