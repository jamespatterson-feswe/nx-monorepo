import { UiButton } from './ui-button';
import { describe, it, expect } from 'vitest';

describe('UiButton Component', () => {
  it('should run in jsdom environment', () => {
    expect(typeof document).toBe('object');
    expect(document.createElement('div')).toBeTruthy();
  });

  it('should render a button', () => {
    const button = document.createElement('ui-button');

    const btn = new UiButton();

    btn.setupButton(btn);
    button.innerHTML = 'Click Me';
    button.setAttribute('class', 'custom-button');

    expect(button).toBeTruthy();

    document.body.appendChild(button);

    const foundButton = document.getElementsByClassName('custom-button');

    expect(foundButton[0]).toBeTruthy();
    expect(foundButton[0].textContent).toBe('Click Me');

    expect(btn).toBeDefined();
    expect(btn.innerHTML).toBe('Click Me');
  });
});
