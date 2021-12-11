const template = document.createElement('template');

template.innerHTML = `
<style>
  :host {
    display: flex;
    align-items: center;     
    justify-content: center;
  }
</style>
`;

class CenterDiv extends HTMLElement {
  constructor() {
    super();
    this._shadowRoot = this.attachShadow({ 'mode': 'open' });
    this._shadowRoot.appendChild(template.content.cloneNode(true));        
  }
}

window.customElements.define('center-div', CenterDiv);