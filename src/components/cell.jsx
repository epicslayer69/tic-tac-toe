import React from "react";
import styled from "styled-components";

const CellSC = styled.td`
  td {
    background-color: white;
    width: 32px;
    height: 16px;
    border-style: groove;
  }
`;

export default (props) => {
  return (
    <CellSC>
      {props.fill}
    </CellSC>
  );
};
