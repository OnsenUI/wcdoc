import Doc from './Doc';

const DOC_TYPE = 'object';

export default class ObjectDoc extends Doc {

  /**
   * @param {object} params
   * @param {ParsedFile} params.file
   * @param {TagDict} params.tagdict
   */
  constructor(params) {
    super(DOC_TYPE, params.file);
    this._tagdict = params.tagdict;
  }

  /**
   * @return {string}
   */
  get name() {
    return this._tagdict.get(DOC_TYPE).trim();
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
      return docComment.tagdict.has(DOC_TYPE);
    }).map(docComment => {
      return new ObjectDoc({
        file: parsedFile,
        tagdict: docComment.tagdict
      });
    });
  }
}
