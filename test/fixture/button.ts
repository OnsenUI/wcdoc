
/**
 * @directive my-button
 * @selector button.my-button
 * @desc This is a directive for button element.
 */
@Directive({
  selector: 'button.my-button'
})
class Button {

  /**
   * @input label
   * @type {string}
   * @desc This is the description for label input.
   */
  @Input() get label(label: string) {
    /* ... */
  }

  /**
   * @output checked
   * @type {boolean}
   * @desc This is the description for checked output.
   */
  @Onput() checked: EventEmitter<boolean> = new EventEmitter();

}
