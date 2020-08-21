import React from 'react';
import styled from 'styled-components';

import './App.scss';
import './reset.css';
import LeftSideWrapper from './components/left-side-wrapper';
import RightSideWrapper from './components/right-side-wrapper';
import ModalWrapper from './components/modal-wrapper';

const ButtonSC = styled.button`
  background: palegreen;
  border: 1px solid green;
  border-left: 0px;
  color: black;
  padding: 4px 16px;
  outline: none;
`;

const InputSC = styled.input`
  border: 1px solid green;
  color: black;
  padding: 4px 16px;
  outline: none;
`;

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
