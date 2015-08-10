/**
 * Button class.
 */
class Button {
  constructor(label, callback, enabled = true) {
    this.label = label; // the button label
    this.enabled = enabled; // is the button enabled or disabled?
    this.onclick = callback; // button click callback
  }
}

export { Button };
