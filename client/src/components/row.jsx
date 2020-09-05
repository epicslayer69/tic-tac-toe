import React from "react";
import styled from "styled-components";

import Cell from "./cell";

const RowSC = styled.tr`
  th {
    background-color: palegreen;
    width: 32px;
    height: 32px;
    text-align: center;
  }

  td {
    background-color: white;
    width: 32px;
    height: 32px;
    border: 1px solid gray;
  }
`;

const renderPlayableCells = () => {
  const rows = [];
  for (let i = 1; i <= 26; i = i + 1) {
    rows.push(<Cell player={"first"} />);
  }
  return rows;
};

export default (props) => {
  return (
    <RowSC>
      <th>{props.name}</th>
      {renderPlayableCells()}
      <th>{props.name}</th>
    </RowSC>
  );
};
