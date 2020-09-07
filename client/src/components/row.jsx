import React from "react";
import styled from "styled-components";

import Cell from "./cell";
import {useSelector} from "react-redux";

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

const renderPlayableCells = (rowName, myGrid, opponentsGrid, mySymbol) => {
  const rows = [];
  
  for (let i = 1; i <= 26; i = i + 1) {
    
    const cellName = `${String.fromCharCode(i + 64)}/${rowName}`;
    let renderSymbol = '';
  
    if (myGrid.indexOf(cellName) !== -1) {
      renderSymbol = mySymbol;
    }
  
    if (opponentsGrid.indexOf(cellName) !== -1) {
      renderSymbol = mySymbol === 'X' ? 'O' : 'X';
    }
    
    rows.push(<Cell key={i} name={cellName} symbol={renderSymbol} />);
  }
  return rows;
};

export default (props) => {
  const { name: rowName } = props;

  const myGrid = useSelector(state => state.playerGrid);
  const opponentsGrid = useSelector(state => state.opponentGrid);
  const mySymbol = useSelector(state => state.playerSymbol);
  
  return (
    <RowSC>
      <th>{rowName}</th>
      {renderPlayableCells(rowName, myGrid, opponentsGrid, mySymbol)}
      <th>{rowName}</th>
    </RowSC>
  );
};
