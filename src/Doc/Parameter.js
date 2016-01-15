import Type from './Type';

export default class Parameter {

  /**
   * @param {Type/null} type
   * @param {string} name
   * @param {boolean} isOptional
   * @param {string} [description]
   */
  constructor(type, name, isOptional, description = '') {
    this._type = type;
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
    const regex = /^\s*(\{([^}]+)}\s+)?(\S+)(\s+(.+))?$/m;
    const matches = tagString.match(regex);

    if (matches) {
      const typeString = matches[2];
      const name = matches[3];
      const description = (matches[4] || '').trim();
      const isOptional = name.substring(0, 1) === '[' && name.substring(-1, 0) === ']';

      return new Parameter(Type.parse(typeString), name, isOptional, description);
    } else {
      throw new Error('Fail to parse: ' + tagString);
    }
  }
}