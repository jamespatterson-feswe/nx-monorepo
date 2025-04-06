import { describe, it, expect } from 'vitest';

describe('UiButton Component', () => {
  it('should render a button', () => {
    const button = document.createElement('ui-button');
    document.body.appendChild(button);

    const shadowRoot = button.shadowRoot;
    const buttonElement = shadowRoot?.querySelector('button');

    expect(buttonElement).toBeTruthy();
    expect(buttonElement?.textContent).toBe('Click Me');
  });

  it('should show alert on click', () => {
    const button = document.createElement('ui-button');
    document.body.appendChild(button);

    const shadowRoot = button.shadowRoot;
    const buttonElement = shadowRoot?.querySelector('button');

    const alertSpy = vi.spyOn(window, 'alert').mockImplementation(() => {
      console.log('worked');
    });
    buttonElement?.click();
    expect(alertSpy).toHaveBeenCalledWith('Button clicked!');
  });
});
