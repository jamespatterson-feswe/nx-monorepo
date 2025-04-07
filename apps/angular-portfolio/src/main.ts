import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { components } from './helpers/bootstrap.components';

components.forEach((component) => {
  const [key, value] = component;

  if (!customElements.get(key)) {
    customElements.define(key, value);
  }
});

bootstrapApplication(AppComponent, appConfig).catch((err) =>
  console.error(err)
);
