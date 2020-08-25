import React from 'react';

import './App.scss';
import './reset.css';
import LeftSideWrapper from './components/left-side-wrapper';
import RightSideWrapper from './components/right-side-wrapper';
import ModalWrapper from './components/modal-wrapper';

function App() {
  console.log('Tu nam zbehne inicializacny kod');
  console.log('Nastavi sa meno Hracov, Peder a Adolf');

  const firstPlayerName = 'Peder';
  const secondPlayerName = 'Adolf';

  return (
    <div className="app-wrapper">
      <ModalWrapper />
      <LeftSideWrapper />
      <RightSideWrapper firstPlayerName={firstPlayerName} secondPlayerName={secondPlayerName} />
    </div>
  );
}

export default App;
