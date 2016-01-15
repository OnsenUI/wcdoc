import Doc from './Doc';

export default class ElementDoc extends Doc {

  /**
   * @param {object} params
   * @param {ParsedFile} params.file
   * @param {TagDict} params.tagdict
   */
  constructor(params) {
    super('element', params.file);
    this._tagdict = params.tagdict;
  }

  get name() {
    return this._tagdict.get('element');
  }

  get tagdict() {
    return this._tagdict;
  }

  get isDeprecated() {
    return this._tagdict.has('deprecated');
  }

  get description() {
    return this._tagdict.get('description');
  }

  /**
   * @param {ParsedFile} parsedFile
   * @return {array}
   */
  static parse(parsedFile) {
    return parsedFile.docComments.filter(docComment => {
      return docComment.tagdict.has('element');
    }).map(docComment => {
      return new ElementDoc({
        file: parsedFile,
        tagdict: docComment.tagdict
      });
    });
  }
}
