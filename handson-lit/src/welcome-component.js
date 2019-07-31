import { LitElement, html, css } from "lit-element";
import "./bold-component.js";
import "./emphasized-component.js";

class WelcomeComponent extends LitElement {
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
      <div>${this.message}
      <bold-component .name="${this.name}"></bold-component>
      </div>
      <div>Your name reversed is <emphasized-component .message=${this._reversedName(
        this.name
      )}></emphasized-component>
      </div>
      <fieldset>
        <legend>Data</legend>
        <label for="fName">Your name:</label>
          <input type="text" name="fName" id="fName" .value="${
            this.name
          }"/> </label
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

  _changeName(e) {
    console.log(e, `name changed to ${e.target.value}`);
    this.name = e.target.value;
  }
}

customElements.define("welcome-component", WelcomeComponent);
