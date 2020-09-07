import React from "react";
import styled from "styled-components";

import Row from "./row";

// TODO Alphabet row ako samostatna komponenta

const LeftSideWrapperSC = styled.div`
  th {
    background-color: lightgreen;
    width: 32px;
    height: 32px;
    text-align: center;
  }
`;

const generateAlphabetRow = () => {
  const alphabet = [];
  for (let i = 65; i < 91; i = i + 1) {
    alphabet.push(<th key={i}>{String.fromCharCode(i)}</th>);
  }
  return alphabet;
};

const renderAlphabetRow = () => {
  return (
    <tr>
      <th></th>
      {generateAlphabetRow()}
      <th></th>
    </tr>
  );
};

const renderPlayableRows = () => {
  const rows = [];
  for (let i = 1; i <= 26; i = i + 1) {
    rows.push(<Row name={i} key={i} />);
  }
  return rows;
};

export default () => {
  return (
    <LeftSideWrapperSC>
      <table>
        <tbody>
          {renderAlphabetRow()}
          {renderPlayableRows()}
          {renderAlphabetRow()}
        </tbody>
      </table>
    </LeftSideWrapperSC>
  );
};
