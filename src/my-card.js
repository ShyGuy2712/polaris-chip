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
    this.fancy = false;
    this.detailsButton = "";
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

      div {
        padding: 8px;
        margin: 8px;
        width: 300px;
        border-radius: 8px;
        text-align: center;
        background-color: white;
        border: 2px solid black;
      }

      h1 {
        font-size: 24px;
      }

      img {
        margin: auto;
        display: flex;
        height: 100%;
        width: 200px;
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
    `;
  }

  render() {
    return html`
      <div>
        <img src=${this.image}>
        <h1>${this.title}</h1>
        <p>${this.cardText}</p>  
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
      fancy: { type: Boolean, reflect: false },
      detailsButton: { type: String },
      detailsButtonLink: { type: String },
    };
  }
}

globalThis.customElements.define(MyCard.tag, MyCard);
