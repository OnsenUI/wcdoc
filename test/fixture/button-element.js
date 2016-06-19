
/**
 * @element x-button
 * @desc This is x-button element.
 */
class ButtonElement {

  /**
   * @attribute label
   * @desc This is the description for label attribute.
   */

  /**
   * @param {string} label
   * @param {object} [options]
   * @desc This is the method description.
   */
  setLabel(label, options = {}) {
    // ...
  }
}

document.registerElement('x-button', {
  prototype: ButtonElement.prototype
});
