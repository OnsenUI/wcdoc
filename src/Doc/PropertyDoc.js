import Doc from './Doc';

const DOC_TYPE = 'property';

export default class PropertyDoc extends Doc {

  /**
   * @param {object} params
   * @param {TagDict} params.tagdict
   * @param {ParsedFile} params.file
   */
  constructor(params) {
    super(DOC_TYPE, params.file);
    this._tagdict = params.tagdict;
  }

  get name() {
    return this._tagdict.get(DOC_TYPE).trim();
  }

  get type() {
    return this._tagdict.get('type');
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
      return docComment.tagdict.has(DOC_TYPE);
    }).map(docComment => {
      return new PropertyDoc({
        file: parsedFile,
        tagdict: docComment.tagdict
      });
    });
  }
}
