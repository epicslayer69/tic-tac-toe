import React, { useState } from "react";
import styled from "styled-components";
import Modal from "react-modal";

const ModalWrapperSC = styled.div``;

const ButtonSC = styled.button`
  background: palegreen;
  border: 1px solid green;
  border-left: 0px;
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

const handleUsernameInputChange = () => {
};

const handleSubmitBtnClick = () => {
};

export default () => {
  const [modalIsOpen, setModalIsOpen] = useState(true);

  const [username, setUsername] = useState();
  const [errState, setErrState] = useState(false);

  return (
    <ModalWrapperSC>
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
        <h2>Wanna play a game of tictactoe?</h2>
        <h3>Write me your username:</h3>
        <InputSC
          type="text"
          maxLength="12"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.value)}
        />
        <ButtonSC onClick={() => setModalIsOpen(false)}>submit</ButtonSC> 
      </Modal>
    </ModalWrapperSC>
  );
};