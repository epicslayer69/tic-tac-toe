import React, { useState } from "react";
import styled from "styled-components";
import Modal from "react-modal";

const ModalWrapperSC = styled.div`
`;

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

export default () => {
  const [modalIsOpen, setModalIsOpen] = useState(true);

  return (
    <ModalWrapperSC>
      <Modal
        isOpen={modalIsOpen}
        style={{
          overlay: {
            backgroundColor: "palegreen",
          },
          content: {
            border: "2px solid green",
            color: "green",
          },
        }}
      >
        <h2>Hey!</h2>
        <h4>Enter your username:</h4>
        <InputSC type="text" id="username" placeholder="Username" />
        <ButtonSC onClick={() => setModalIsOpen(false)}>submit</ButtonSC>
      </Modal>
    </ModalWrapperSC>
  );
};
