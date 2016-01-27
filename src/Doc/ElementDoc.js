import Doc from './Doc';

const DOC_TYPE = 'element';

export default class ElementDoc extends Doc {

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

  get tagdict() {
    return this._tagdict;
  }

  get isDeprecated() {
    return this._tagdict.has('deprecated');
  }

  get description() {
    return this._tagdict.get('description', '').trim();
  }

  get examples() {
    return this._tagdict.getMany('example').map(example => example.trim());
  }

  /**
   * @param {ParsedFile} parsedFile
   * @return {array}
   */
  static parse(parsedFile) {
    return parsedFile.docComments.filter(docComment => {
      return docComment.tagdict.has(DOC_TYPE);
    }).map(docComment => {
      return new ElementDoc({
        file: parsedFile,
        tagdict: docComment.tagdict
      });
    });
  }
}
