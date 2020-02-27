import App from 'App';
import i18n from 'i18next';
import React from 'react';
import ReactDOM, { hydrate, render } from 'react-dom';
import * as serviceWorker from 'serviceWorker';
import 'styles/styles.scss';
const isDev = process.env.NODE_ENV === 'development';
const rootElement = document.getElementById('root') as HTMLElement;

const resources = {
  en: {
    translation: {
      'Welcome to React': 'Welcome to React and react-i18next'
    }
  }
};

i18n
  .use({
    type: 'i18nFormat',
  }) // passes i18n down to react-i18next
  .init({
    resources,
    lng: 'en',

    keySeparator: false, // we do not use keys in form messages.welcome

    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

export default i18n;

if (rootElement.hasChildNodes()) {
  hydrate(<App />, rootElement);
} else {
  render(<App />, rootElement);
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
if (isDev) {
  serviceWorker.unregister();
  if ((module as any).hot) {
    (module as any).hot.accept();
  }
} else {
  serviceWorker.unregister();
}
ReactDOM.render(
  <App />,
  document.getElementById('root')
);
