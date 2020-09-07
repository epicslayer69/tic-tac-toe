import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Modal from "react-modal";

import { appActionTypes } from "../../redux/store";
import { ioSocket } from "../../socket";

import ModalWrapperSC, { InputSC, ButtonSC } from "./modal-wrapper.styled";

import {
  GS_ENTER_NAME,
  GS_WAITING_FOR_OPPONENT,
  GS_WAITING_FOR_OPPONENT_MOVE,
  GS_MY_TURN,
  GS_YOU_LOST,
  GS_YOU_WON,
} from "../../constants";



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

  const waitingForOpponentsMoveContent = (
    <div>
      <h2>Wait for opponents move...</h2>
    </div>
  );

  if (currentGameState === GS_ENTER_NAME) return enterNameContent;
  if (currentGameState === GS_WAITING_FOR_OPPONENT)
    return waitingForOpponentContent;
  if (currentGameState === GS_YOU_LOST) return youLostContent;
  if (currentGameState === GS_YOU_WON) return youWonContent;
  if (currentGameState === GS_WAITING_FOR_OPPONENT_MOVE)
    return waitingForOpponentsMoveContent;
};

export default React.memo(() => {
  const [usernameInputValue, setUsernameInputValue] = useState("");
  const [isError, setIsError] = useState(false);
  
  const dispatch = useDispatch();
  const currentGameState = useSelector(state => state.currentGameState);
  
  const modalIsOpen = currentGameState !== GS_MY_TURN;
  
  const handleButtonClick = () => {
    if (!usernameInputValue) {
      setIsError(true);
      return;
    }
    // set username into local context
    dispatch({ type: appActionTypes.SET_PLAYER_USERNAME, payload: { playerUsername: usernameInputValue } });
    // set username on server
    ioSocket.emit("set.name", { name: usernameInputValue });
    dispatch({ type: appActionTypes.SET_CURRENT_GAME_STATE, payload: { currentGameState: GS_WAITING_FOR_OPPONENT } });
  };

  if (currentGameState === GS_MY_TURN) return null;

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
