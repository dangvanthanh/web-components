import { html, css, LitElement } from 'lit'

export class MyElement extends LitElement {
  static properties = {
    count: { type: Number },
  }

  constructor() {
    super()
    this.count = 0
  }

  render() {
    return html`
      <div class="counter">
        <button @click="${this._subtract}">-</button>
        <pre>${this.count}</pre>
        <button @click="${this._add}">+</button>
      </div>
    `
  }

  _subtract() {
    this.count--;
  }

  _add() {
    this.count++;
  }
}

customElements.define('my-element', MyElement)
