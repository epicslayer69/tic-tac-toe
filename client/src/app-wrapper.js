import React from 'react';

import LeftSideWrapper from './components/left-side-wrapper';
import RightSideWrapper from './components/right-side-wrapper';
import ModalWrapper from './components/modal-wrapper';

export default () => {
  return (
    <div className="app-wrapper">
      <ModalWrapper />
      <LeftSideWrapper />
      <RightSideWrapper />
    </div>
  );
};
