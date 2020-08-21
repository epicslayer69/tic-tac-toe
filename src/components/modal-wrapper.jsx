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



const handleUsernameInputChange = () => {

}

const handleSubmitBtnClick = () => {

}

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
            border: "2px solid green",
            color: "green",
            maxWidth: '500px',
            maxHeight: '300px',
            margin: '0 auto'
          },
        }}
      >
        <h2>Wanna play a game?</h2>
        <h4>Write me your username:</h4>
        <InputSC type="text" placeholder="Username" />
        { /* tu treba dopisat ze ak je error state, tak sa vypise ten error */ }
        <ButtonSC onClick={() => setModalIsOpen(false)}>submit</ButtonSC>
      </Modal>
    </ModalWrapperSC>
  );
};
