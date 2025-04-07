export class UiButton extends HTMLElement {
  constructor() {
    super();

    const shadowRoot = this.attachShadow({ mode: 'open' });
    const button = document.createElement('button');

    button.textContent = 'HELLO WORLD, this should change';
    shadowRoot.append(button);
  }
}

customElements.define('ui-button', UiButton);
