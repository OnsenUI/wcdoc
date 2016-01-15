import Doc from './Doc';

const DOC_TYPE = 'attribute';

export default class AttributeDoc extends Doc {

  /**
   * @param {object} params
   * @param {ParsedFile} params.file
   * @param {TagDict} params.tagdict
   */
  constructor(params) {
    super(DOC_TYPE, params.file);
    this._tagdict = params.tagdict;
  }

  get name() {
    return this._tagdict.get(DOC_TYPE).trim();
  }

  get parameters() {
    return this._tagdict.getMany('param');
  }

  get returns() {
    return this._tagdict.get('return');
  }

  /**
   * @param {ParsedFile} parsedFile
   * @return {array}
   */
  static parse(parsedFile) {
    return parsedFile.docComments.filter(docComment => {
      return docComment.tagdict.has(DOC_TYPE);
    }).map(docComment => {
      return new AttributeDoc({
        file: parsedFile,
        tagdict: docComment.tagdict
      });
    });
  }
}
