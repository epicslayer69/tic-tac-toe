import React, { useState, useContext } from "react";
import styled from "styled-components";
import Modal from "react-modal";
import { StateContext } from "../context/context";

const ModalWrapperSC = styled.div`
  .error-msg {
    color: red;
    display: block;
    font-size: 12px;
    margin-bottom: 10px;
  }
`;

const ButtonSC = styled.button`
  background: palegreen;
  border: 1px solid green;
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

// const handleOnClickBtnError = () => {
//   try {
//     if ({usernameInputValue} == "") throw "You need to type in an username!";
//   } catch (err) {
//     <p> {err} </p>;
//   } finally {
//     setUsername(setUsernameInputValue);
//     setModalIsOpen(false);
//   }
// };

export default () => {
  const [modalIsOpen, setModalIsOpen] = useState(true);

  const [usernameInputValue, setUsernameInputValue] = useState(null);
  const [isError, setIsError] = useState(false);
  const { setUsername } = useContext(StateContext);

  const handleButtonClick = () => {

    // if username is empty, show error (mark error flag)
    if (!usernameInputValue) {
      setIsError(true);
      return;
    }

    setUsername(usernameInputValue);
    setModalIsOpen(false);
  };

  return (
    <Modal
      isOpen={modalIsOpen}
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
        <h2>Wanna play a game of tictactoe?</h2>
        <h3>Write me your username:</h3>
        <InputSC
          type="text"
          maxLength="12"
          placeholder="Username"
          value={usernameInputValue}
          onChange={(e) => setUsernameInputValue(e.target.value)}
        />
        {isError ? <span className="error-msg">Username must be defined</span> : null }
        <ButtonSC onClick={() => handleButtonClick()}>Submit</ButtonSC>
      </ModalWrapperSC>
    </Modal>
  );
};
