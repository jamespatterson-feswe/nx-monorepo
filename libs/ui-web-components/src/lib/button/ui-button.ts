export class UiButton extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: 'open' });
    const button = document.createElement('button');
    button.textContent = this.getAttribute('label') || 'Click Me';
    button.style.padding = '10px 20px';
    button.style.backgroundColor = '#007BFF';
    button.style.color = 'white';
    button.style.border = 'none';
    button.style.borderRadius = '5px';
    button.style.cursor = 'pointer';

    shadow.appendChild(button);

    // Add event listener for clicks
    button.addEventListener('click', () => {
      alert('Button clicked!');
    });
  }
}

customElements.define('ui-button', UiButton);
