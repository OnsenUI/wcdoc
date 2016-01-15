import Doc from './Doc';

export default class ObjectDoc extends Doc {

  /**
   * @param {object} params
   * @param {ParsedFile} params.file
   * @param {TagDict} params.tagdict
   */
  constructor(params) {
    super('object', params.file);
    this._tagdict = params.tagdict;
  }

  /**
   * @return {string}
   */
  get name() {
    return this._tagdict.get('object');
  }

  /**
   * @return {TagDict}
   */
  get tagdict() {
    return this._tagdict;
  }

  /**
   * @return {boolean}
   */
  get isDeprecated() {
    return this._tagdict.has('deprecated');
  }

  /**
   * @return {string}
   */
  get description() {
    return this._tagdict.get('desc') || this._tagdict.get('description');
  }

  /**
   * @return {Array}
   */
  get see() {
    return this._tagdict.getMany('see');
  }

  /**
   * @param {ParsedFile} parsedFile
   * @return {array}
   */
  static parse(parsedFile) {
    return parsedFile.docComments.filter(docComment => {
      return docComment.tagdict.has('object');
    }).map(docComment => {
      return new ObjectDoc({
        file: parsedFile,
        tagdict: docComment.tagdict
      });
    });
  }
}
