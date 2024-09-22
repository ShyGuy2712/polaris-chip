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
    this.title = "My card";
    this.image = "";
    this.cardText = "";
    this.fancy = false;
    this.detailsButton = "Details";
    this.detailsButtonLink = "#";
  }

  static get styles() {
    return css`
      :host {
        display: block;
      }

      :host[fancy] {
        background-color: black;
        color: navy;
        border: 16px solid navy;
      }

      detailsButton {
        background-color: blue;
        color: white;
        border: none;
        border-radius: 8px;
        padding: 10px 20px;
        margin: 0px 108px;
        font-size: 0.9em;
      }

      detailsButton:focus,
      detailsButton:hover {
        background-color: grey;
      }

      image {
        width: 200px;
        height: 100%;
      }

      title {
        position: sticky;
        top: 0;
        background-color: #eeeeee;
        text-align: center;
        font-size: 2em;
        padding: 8px 8px 16px;
        margin: 0 -8px;
      }

      cardText {
        width: 300px;
        padding: 0px 8px 8px 8px;
        color: black;
        background-color: white;
        margin: 0px 0px 0px 8px;
        height: 250px;
        overflow: auto;
      }
    `;
  }

  render() {
    return html`<div>${this.title}</div>
    <div>
      <img class="image" src="${this.image}"/>
      <div> 
        <div class="cardText">
          <p>${this.cardText}</p>
          <a href=${this.detailsButtonLink}>
            <button>${this.detailsButton}</button>
          </a>
        </div>
      </div>
    </div>
    `;
  }

  static get properties() {
    return {
      title: { type: String },
      image: { type: String },
      cardTitle: { type: String },
      cardText: { type: String },
      fancy: { type: Boolean, reflect: false },
    };
  }
}

globalThis.customElements.define(MyCard.tag, MyCard);
