import Doc from './Doc';
import Parameter from './Parameter';
import Returns from './Returns';

export default class MethodDoc extends Doc {

  /**
   * @param {object} params
   * @param {TagDict} params.tagdict
   * @param {ParsedFile} params.file
   */
  constructor(params) {
    super('method', params.file);
    this._tagdict = params.tagdict;
    this._params = this._buildParamDocs();
    this._returns = this._buildReturnDoc();
  }

  _buildParamDocs() {
    return this._tagdict.getMany('param').map(value => {
      return Parameter.parse(value);
    });
  }

  _buildReturnDoc() {
    if (this._tagdict.has('return')) {
      return Returns.parse(this._tagdict.get('return'));
    }

    return null;
  }

  get params() {
    return this._params;
  }

  get returns() {
    return this._returns;
  }

  get name() {
    return this._tagdict.get('object');
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
      return docComment.tagdict.has('method');
    }).map(docComment => {
      return new MethodDoc({
        file: parsedFile,
        tagdict: docComment.tagdict
      });
    });
  }
}
