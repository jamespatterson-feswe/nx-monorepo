export class UiButton extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: 'open' });
    const button = document.createElement('button');

    shadow.appendChild(button);
  }

  public setupButton(button: HTMLElement): void {
    button.innerHTML = 'Click Me';
    button.style.padding = '10px 20px';
    button.style.backgroundColor = '#007BFF';
    button.style.color = 'white';
    button.style.border = 'none';
    button.style.borderRadius = '5px';
    button.style.cursor = 'pointer';
  }
}

customElements.define('ui-button', UiButton);
