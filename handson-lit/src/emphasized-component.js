import { LitElement, html, css } from "lit-element";

class EmphasizedComponent extends LitElement {
  static get properties() {
    return {
      message: { type: String }
    };
  }

  constructor() {
    super();
    this.message = "invisible";
  }

  render() {
    return html`
      <strong class="message">${this.message}</strong>
    `;
  }

  static get styles() {
    return css`
      :host {
        display: inline;
      }
      .message {
        color: red;
      }
    `;
  }
}
customElements.define("emphasized-component", EmphasizedComponent);
