import { LitElement, html } from "lit-element";

class MyComponent extends LitElement {
  static get properties() {
    return {
      message: { type: String },
      name: { type: String }
    };
  }

  constructor() {
    super();
    this.message = "Hello";
    this.name = "Jtonic";
  }

  render() {
    return html`
      <p>${this.message} ${this.name}!!!</p>
      <p>Your name reversed is ${this.reversedName(this.name)}</p>
    `;
  }

  reversedName(name) {
    return name
      .split("")
      .reverse()
      .join("");
  }
}

customElements.define("my-component", MyComponent);
