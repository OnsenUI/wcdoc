import ParsedFile from '../ParsedFile';

export default class Doc {

  /**
   * @param {string} docType
   * @param {ParsedFile} file
   */
  constructor(docType, file) {
    this._docType = docType;
    this._file = file;

    if (!(file instanceof ParsedFile)) {
      throw new Error('file must be an instance of ParsedFile');
    }
  }

  get docType() {
    return this._docType;
  }

  get file() {
    return this._file;
  }
}
