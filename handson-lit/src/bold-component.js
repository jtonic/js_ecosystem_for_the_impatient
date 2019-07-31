import { LitElement, html } from "lit-element";

class BoldComponent extends LitElement {
  static get properties() {
    return {
      name: { type: String }
    };
  }

  constructor() {
    super();
    this.name = "invisible man";
  }

  render() {
    return html`
      <strong>${this.name}</strong>
    `;
  }
}

customElements.define("bold-component", BoldComponent);
