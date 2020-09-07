import React from 'react';
import { Provider } from 'react-redux';

import './reset.css';
import './app.scss';

import AppWrapper from './app-wrapper';
import store from './redux';

export default () => (
  <Provider store={store}>
      <AppWrapper />
  </Provider>
);
