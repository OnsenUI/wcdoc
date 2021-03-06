import Doc from './Doc';
import Parameter from './Parameter';

const DOC_TYPE = 'event';

export default class EventDoc extends Doc {

  /**
   * @param {object} params
   * @param {ParsedFile} params.file
   * @param {TagDict} params.tagdict
   */
  constructor(params) {
    super(DOC_TYPE, params.file);
    this._tagdict = params.tagdict;
    this._params = this._buildParameterDocs();
  }

  _buildParameterDocs() {
    return this._tagdict.getMany('param').map(tag => Parameter.parse(tag));
  }

  /**
   * @return {string}
   */
  get name() {
    return this._tagdict.get(DOC_TYPE).trim();
  }

  /**
   * @return {array}
   */
  get params() {
    return this._params;
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
      return new EventDoc({
        file: parsedFile,
        tagdict: docComment.tagdict
      });
    });
  }
}
