import styled from "styled-components";

export default styled.div`
  .error-msg {
    color: red;
    display: block;
    font-size: 12px;
    margin-left: 5px;
    margin-top: 5px;
  }
`;

export const ButtonSC = styled.button`
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

export const InputSC = styled.input`
  border: 1px solid green;
  color: black;
  padding: 4px 16px;
  outline: none;
`;
