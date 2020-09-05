import React from 'react';

import './reset.css';
import './app.scss';

import StateProvider from './context/context';
import AppWrapper from './app-wrapper';

export default () => (
    <StateProvider>
      <AppWrapper />
    </StateProvider>
  );
