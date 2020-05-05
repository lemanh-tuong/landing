/* eslint-disable @typescript-eslint/no-unused-vars */
import axios from 'axios';
import configureApp from 'configureApp.json';
import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/lib/integration/react';
import Routes from 'routes';
import { persistor, store } from './configureStore';

axios.defaults.baseURL = configureApp.baseUrl;
axios.defaults.timeout = configureApp.timeout;

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={<div />} persistor={persistor}>
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  );
}



export default App;
