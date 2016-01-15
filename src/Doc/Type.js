import catharsis from 'catharsis';

export default class Type {

  /**
   * @param {string} typeString
   * @param {Object} typeExpression
   */
  constructor(typeString, typeExpression) {
    this._string = typeString;
    this._expression = typeExpression;
  }

  toString() {
    return this._string;
  }

  /**
   * @param {string} typeString
   * @return {Type}
   */
  static parse(typeString) {
    const result = catharsis.parse(typeString, {
      jsdoc: true
    });

    return new Type(typeString, result.typeExpression);
  }
}
