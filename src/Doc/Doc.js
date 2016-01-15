import ParsedFile from '../ParsedFile';

export default class Doc {

  /**
   * @param {string} type
   * @param {ParsedFile} file
   */
  constructor(type, file) {
    this._type = type;
    this._file = file;

    if (!(file instanceof ParsedFile)) {
      throw new Error('file must be an instance of ParsedFile');
    }
  }

  get type() {
    return this._type;
  }

  get file() {
    return this._file;
  }
}
