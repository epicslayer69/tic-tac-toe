import React from 'react';

import './App.scss';
import './reset.css';

import StateProvider from './context/context';
import LeftSideWrapper from './components/left-side-wrapper';
import RightSideWrapper from './components/right-side-wrapper';
import ModalWrapper from './components/modal-wrapper';

function App() {
  console.log('Tu nam zbehne inicializacny kod');
  console.log('Nastavi sa meno Hracov, Peder a Adolf');

  const secondPlayerName = 'Adolf';

  return (
    <StateProvider>
      <div className="app-wrapper">
        <ModalWrapper />
        <LeftSideWrapper />
        <RightSideWrapper secondPlayerName={secondPlayerName} />
      </div>
    </StateProvider>
  );
}

export default App;
