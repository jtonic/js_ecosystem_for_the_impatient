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
      <p>Your name reversed is ${this._reversedName(this.name)}</p>
      <fieldset>
        <legend>Data</legend>
        <label for="fName">Your name:</label>
          <input type="text" name="fName" id="fName" /> </label
        ><button @click="${this._changeName}">Change name</button>
      </fieldset>
    `;
  }

  _reversedName(name) {
    return name
      .split("")
      .reverse()
      .join("");
  }

  _changeName() {
    console.log("name changed");
    this.name = "Irinel";
  }
}

customElements.define("my-component", MyComponent);
