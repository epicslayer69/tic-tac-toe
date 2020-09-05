import React, { useState, useContext } from "react";
import styled from "styled-components";
import Modal from "react-modal";
import { ioSocket } from "../context";

import {
  StateContext,
  GS_ENTER_NAME,
  GS_WAITING_FOR_OPPONENT,
  GS_GAME_RUNNING,
  GS_YOU_LOST,
  GS_YOU_WON,
} from "../context/context";

const ModalWrapperSC = styled.div`
  .error-msg {
    color: red;
    display: block;
    font-size: 12px;
    margin-left: 5px;
    margin-top: 5px;
  }
`;

const ButtonSC = styled.button`
  background: palegreen;
  border: 1px solid green;
  border-left: none;
  color: black;
  padding: 4px 16px;
  outline: 0 !important;
  transition: 0.3s;
  :hover {
    background: lightgreen;
  }
`;

const InputSC = styled.input`
  border: 1px solid green;
  color: black;
  padding: 4px 16px;
  outline: none;
`;

const renderModalContent = (
  currentGameState,
  usernameInputValue,
  setUsernameInputValue,
  handleButtonClick,
  isError
) => {
  const enterNameContent = (
    <div>
      <h2>Wanna play a game of tictactoe?</h2>
      <h3>Enter your username:</h3>
      <InputSC
        type="text"
        maxLength="12"
        placeholder="Username"
        value={usernameInputValue}
        onChange={(e) => setUsernameInputValue(e.target.value)}
      />
      <ButtonSC onClick={() => handleButtonClick()}>Submit</ButtonSC>
      <div>
        {isError ? (
          <span className="error-msg">You must enter a username!</span>
        ) : null}
      </div>
    </div>
  );

  const waitingForOpponentContent = (
    <div>
      <h2>Waiting for opponent ...</h2>
      <h3>Please wait</h3>
    </div>
  );

  const youWonContent = (
    <div>
      <h2>Congratulations {usernameInputValue}, you won!</h2>
    </div>
  );

  const youLostContent = (
    <div>
      <h2>Im sorry {usernameInputValue}, you lost!</h2>
      <h3>Try luck next time</h3>
    </div>
  );

  if (currentGameState === GS_ENTER_NAME) return enterNameContent;
  if (currentGameState === GS_WAITING_FOR_OPPONENT)
    return waitingForOpponentContent;
};

export default React.memo(() => {
  const [modalIsOpen, setModalIsOpen] = useState(true);
  const [usernameInputValue, setUsernameInputValue] = useState(null);
  const [isError, setIsError] = useState(false);

  const { setUsername, currentGameState, setCurrentGameState } = useContext(StateContext);
  console.info("[RENDERING] Modal");

  const handleButtonClick = () => {
    if (!usernameInputValue) {
      setIsError(true);
      return;
    }
    // set username into local context
    setUsername(usernameInputValue);
    // set username on server
    ioSocket.emit("set.name", { name: usernameInputValue });

    setModalIsOpen(false);
    setCurrentGameState(GS_WAITING_FOR_OPPONENT);
  };

  if (currentGameState === GS_GAME_RUNNING) return null;

  return (
    <Modal
      isOpen={modalIsOpen}
      ariaHideApp={false}
      style={{
        overlay: {
          background: "rgba(0,0,0,0.85)",
        },
        content: {
          border: "3px solid green",
          color: "green",
          maxWidth: "500px",
          maxHeight: "300px",
          margin: "0 auto",
        },
      }}
    >
      <ModalWrapperSC>
        {renderModalContent(
          currentGameState,
          usernameInputValue,
          setUsernameInputValue,
          handleButtonClick,
          isError
        )}
      </ModalWrapperSC>
    </Modal>
  );
});
