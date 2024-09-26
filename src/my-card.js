import { LitElement, html, css } from 'lit';

/**
 * Now it's your turn. Here's what we need to try and do:
 * 1. Get your HTML from your card working in here 
 * 2. Get your CSS rescoped as needed to work here
 */

export class MyCard extends LitElement {

  static get tag() {
    return 'my-card';
  }

  constructor() {
    super();
    this.title = "";
    this.image = null;
    this.cardText = "";
    this.detailsButton = "";
    this.detailsButtonLink = "#";
    this.fancy = false;
  }

  static get styles() {
    return css`
      :host {
        display: block;
      }

      :host([fancy]) {
        display: inline-block;
        background-color: pink;
        border: 2px solid fuchsia;
        box-shadow: 10px 5px 5px red;
      }

      div {
        padding: 8px;
        margin: 8px;
        width: 300px;
        min-height: 300px;
        max-height: 400px;
        border-radius: 8px;
        text-align: center;
        overflow: auto;
        background-color: white;
        border: 2px solid black;
      }

      h1 {
        font-size: 24px;
      }

      img {
        margin: auto;
        display: flex;
        aspect-ratio: 1/1;
        height: 100%;
        min-height: px;
        max-width: 200px;
      }

      button {
        margin: auto;
        display: flex;
        background-color: blue;
        color: white;
      }

      a:focus,
      a:hover {
        background-color: grey;
      }

      a {
        text-decoration: none;
      }

      details summary {
        text-align: left;
        font-size: 20px;
        padding: 8px 0;
      }

      details[open] summary {
        font-weight: bold;
      }

      details div {
        width: 264px;
        height: 70px;
        min-height: auto;
        border: 2px solid black;
        text-align: left;
        padding: 8px;
        overflow: auto;
      }
    `;
  }

  openChanged(e) {
    console.log(e.newState);
    if (e.newState === "open") {
      this.fancy = true;
    }
    else {
      this.fancy = false;
    }
  }

  render() {
    return html`
      <div>
        <img src=${this.image}>
        <h1>${this.title}</h1>

        <details ?open="${this.fancy}" @toggle="${this.openChanged}">   
          <summary>Description</summary>
          <div>
            <slot>${this.cardText}</slot>
          </div>
        </details>
        <a href=${this.detailsButtonLink}>
        <button>${this.detailsButton}</button>
        </a>
      </div>
    `;
  }

  static get properties() {
    return {
      title: { type: String },
      image: { type: String },
      cardTitle: { type: String },
      cardText: { type: String },
      fancy: { type: Boolean, reflect: true },
      detailsButton: { type: String },
      detailsButtonLink: { type: String },
    };
  }
}

globalThis.customElements.define(MyCard.tag, MyCard);
